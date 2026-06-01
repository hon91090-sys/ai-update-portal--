// ============================================
// AI Update Portal v2.5 — Node.js Server
// Zero-dependency HTTP server + API Routes
// ============================================
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const IS_VERCEL = process.env.VERCEL === '1' || process.env.VERCEL;
const DATA_DIR = IS_VERCEL ? '/tmp/data' : path.join(__dirname, 'data');

// Ensure data directory exists (Safely catch Read-only file system errors)
try {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(path.join(DATA_DIR, 'posts.json'))) {
    fs.writeFileSync(path.join(DATA_DIR, 'posts.json'), JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(path.join(DATA_DIR, 'comments.json'))) {
    fs.writeFileSync(path.join(DATA_DIR, 'comments.json'), JSON.stringify([], null, 2));
  }
} catch (err) {
  console.log('[INIT] Warning: File system is read-only. Proceeding with memory-only DB.');
}

// MIME types
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

// ===== Read JSON DB =====
function readDB(name) {
  try {
    return JSON.parse(fs.readFileSync(path.join(DATA_DIR, `${name}.json`), 'utf-8'));
  } catch { return []; }
}

function writeDB(name, data) {
  try {
    fs.writeFileSync(path.join(DATA_DIR, `${name}.json`), JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(`[DB] Warning: Could not write ${name}.json. File system might be read-only.`);
  }
}

// ===== Security Utilities & Parse Body =====
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    let tooLarge = false;
    req.on('data', chunk => {
      if (tooLarge) return;
      body += chunk;
      // Mitigate Denial of Service (DOS) by limiting payload size to ~500KB
      if (body.length > 500000) {
        tooLarge = true;
        req.destroy();
        reject(new Error('Payload Too Large'));
      }
    });
    req.on('end', () => {
      if (tooLarge) return;
      try { resolve(JSON.parse(body)); }
      catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

// ===== CORS headers =====
function setCORS(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ===== JSON response =====
function jsonRes(res, data, status = 200) {
  setCORS(res);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

// ===== API Routes =====
async function handleAPI(req, res, urlPath) {
  setCORS(res);

  // OPTIONS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // GET /api/posts — List all posts
  if (urlPath === '/api/posts' && req.method === 'GET') {
    let posts = readDB('posts');
    const memoryPosts = global.memoryPosts || [];
    let allPosts = [...memoryPosts, ...posts];
    
    // Vercel Timeout Fix: We no longer auto-fetch on GET /api/posts when DB is empty.
    // Vercel functions timeout after 10s on Hobby tier, and Gemini API takes ~15s.
    // If DB is empty, frontend will handle it (fallback to mock data or prompt user to fetch).

    allPosts = allPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    const uniquePosts = Array.from(new Map(allPosts.map(p => [p.id, p])).values());
    return jsonRes(res, uniquePosts);
  }

  // GET /api/posts/:id
  if (urlPath.match(/^\/api\/posts\/\d+$/) && req.method === 'GET') {
    const id = parseInt(urlPath.split('/').pop());
    const memoryPosts = global.memoryPosts || [];
    const posts = [...memoryPosts, ...readDB('posts')];
    const post = posts.find(p => p.id === id);
    if (!post) return jsonRes(res, { error: 'Post not found' }, 404);
    return jsonRes(res, post);
  }

  // GET /api/comments/:postId
  if (urlPath.match(/^\/api\/comments\/\d+$/) && req.method === 'GET') {
    const postId = parseInt(urlPath.split('/').pop());
    const comments = readDB('comments').filter(c => c.post_id === postId);
    return jsonRes(res, comments);
  }

  // POST /api/comments
  if (urlPath === '/api/comments' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const comments = readDB('comments');
      
      // XSS Protection: Escape malicious HTML inputs
      const safeUserName = escapeHTML(body.user_name || '게스트').substring(0, 50);
      const safeCommentText = escapeHTML(body.comment_text || '').substring(0, 1000);
      if (!safeCommentText) return jsonRes(res, { error: 'Empty comment' }, 400);

      const newComment = {
        id: Date.now(),
        post_id: body.post_id,
        user_name: safeUserName,
        avatar: safeUserName.slice(0, 2).toUpperCase(),
        comment_text: safeCommentText,
        created_at: new Date().toISOString(),
        is_blinded: false
      };
      comments.push(newComment);
      writeDB('comments', comments);
      return jsonRes(res, newComment, 201);
    } catch (err) {
      return jsonRes(res, { error: 'Invalid request' }, 400);
    }
  }

  // POST /api/news/fetch — Trigger AI news fetch
  if (urlPath === '/api/news/fetch' && req.method === 'POST') {
    // Security: Rate Limit (Cooldown) for 3 minutes to allow faster updates
    const now = Date.now();
    const COOLDOWN_MS = 3 * 60 * 1000; // 3 minutes
    if (global.lastFetchTimestamp && now - global.lastFetchTimestamp < COOLDOWN_MS) {
      const remainMin = Math.ceil((COOLDOWN_MS - (now - global.lastFetchTimestamp)) / 60000);
      return jsonRes(res, { success: false, error: `쿨다운 중입니다. ${remainMin}분 후에 다시 시도해 주세요.` }, 429);
    }

    try {
      const result = await fetchAINews();
      global.lastFetchTimestamp = Date.now(); // Update timestamp on success
      return jsonRes(res, { success: true, count: result.length, posts: result });
    } catch (err) {
      return jsonRes(res, { success: false, error: err.message }, 500);
    }
  }

  // GET /api/news/status — Check auto-fetch status
  if (urlPath === '/api/news/status' && req.method === 'GET') {
    return jsonRes(res, {
      autoFetchEnabled: true,
      intervalMinutes: 60,
      lastFetch: global.lastFetchTime || null,
      totalPosts: readDB('posts').length
    });
  }

  // GET /api/config — Securely serve Supabase credentials to frontend
  if (urlPath === '/api/config' && req.method === 'GET') {
    return jsonRes(res, {
      SUPABASE_URL: process.env.SUPABASE_URL || '',
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || ''
    });
  }

  return jsonRes(res, { error: 'Not found' }, 404);
}

// ===== AI News Fetcher (Real-time RSS + Gemini API) =====
async function fetchAINews() {
  const config = loadConfig();
  if (!config.apiKey) {
    console.log('[NEWS] No API key configured, skipping fetch');
    return [];
  }

  console.log(`[NEWS] 🔄 Fetching ACTUAL AI news from internet at ${new Date().toISOString()}`);

  // 1. Fetch real RSS feeds (TechCrunch AI, The Verge)
  let rawNewsData = '';
  const feeds = [
    'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://www.theverge.com/rss/index.xml',
    'https://openai.com/blog/rss.xml'
  ];

  for (const url of feeds) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const text = await res.text();
        // Take the first 15,000 characters of each feed to fit in context easily
        rawNewsData += `\n--- Feed: ${url} ---\n${text.substring(0, 15000)}\n`;
      }
    } catch (e) {
      console.log(`[NEWS] Warning: Could not fetch feed ${url} - ${e.message}`);
    }
  }

  if (!rawNewsData) {
    console.log('[NEWS] ❌ Failed to fetch any real news data.');
    return [];
  }

  const prompt = `You are an AI technology news analyst. Below are the latest actual RSS feeds from major tech blogs.
First, extract the 5 most important recent AI updates from the Raw RSS Data.
Second, summarize 15 historically significant and FACTUAL AI events from this year or last year.
CRITICAL RULE (Anti-Hallucination): DO NOT invent, fabricate, or hallucinate any news or tools. Every single event, program, and company MUST be a real, factual occurrence in the AI industry.
You MUST cover a diverse range of topics: not just software programs, but also AI Hardware (e.g. NVIDIA, AMD), AI Startups & Investments, Open Source Ecosystems, and AI Ethics/Policy/Law.
You must output exactly 20 articles in total.

Raw RSS Data:
${rawNewsData}

For all 20 news items (5 real recent + 15 major historical), summarize them and format EXACTLY as a JSON array of 20 objects with bilingual (en/ko) support:
[{
  "title": { "en": "English 1-line headline", "ko": "한국어 한 줄 요약 헤드라인" },
  "category_l1": "one of: llm, image, video, code, audio, data, multi, hardware, startup, policy",
  "program_l2": "AI tool, technology, or topic name",
  "company_l3": "company or organization name (e.g. OpenAI, NVIDIA, Mistral, xAI, EU, etc.)",
  "status_badge": "Free, Paid, or Enterprise",
  "tech_status": "Alpha, Beta, or Stable",
  "summary_3lines": { 
    "en": ["Fact 1", "Key point 2", "Implication 3"], 
    "ko": ["첫 번째 핵심 사실", "두 번째 주요 내용", "세 번째 시사점"] 
  },
  "content_body": { 
    "en": "Detailed markdown explanation of the news (min 200 chars).", 
    "ko": "마크다운 형식의 상세 설명 본문 (최소 200자)." 
  }
}]

Return ONLY the JSON array, no other text.`;

  try {
    const responseText = await callGeminiAPI(config.apiKey, prompt);
    let articles;
    
    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      articles = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error('Failed to parse JSON from AI response');
    }

    // 2. Save to database
    let posts = readDB('posts');
    const newPosts = articles.map((article, i) => ({
      ...article,
      id: Date.now() + i,
      created_at: new Date(Date.now() - i * 60000).toISOString(), // slightly staggered times
      views: 0,
      comments_count: 0,
      source: 'real_news_ai_summary'
    }));

    // For Vercel/read-only compatibility, we also keep it in a global memory cache if file write fails
    try {
      posts.unshift(...newPosts);
      writeDB('posts', posts);
    } catch (e) {
      console.log('[NEWS] ⚠️ Read-only filesystem detected (e.g. Vercel). Storing in memory.');
      if (!global.memoryPosts) global.memoryPosts = [];
      global.memoryPosts.unshift(...newPosts);
    }
    
    global.lastFetchTime = new Date().toISOString();
    console.log(`[NEWS] ✅ Extracted and generated ${newPosts.length} real articles`);
    return newPosts;
  } catch (err) {
    console.error('[NEWS] ❌ Error:', err.message);
    return [];
  }
}

// ===== Gemini API Call =====
function callGeminiAPI(apiKey, prompt) {
  return new Promise((resolve, reject) => {
    const https = require('https');
    
    const data = JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 4096,
        responseMimeType: "application/json"
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.error) {
            reject(new Error(json.error.message));
            return;
          }
          const text = json.candidates?.[0]?.content?.parts?.[0]?.text || '';
          resolve(text);
        } catch (e) {
          reject(new Error('Failed to parse Gemini response: ' + body.substring(0, 200)));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.write(data);
    req.end();
  });
}

// ===== OpenAI API Call (Fallback) =====
function callOpenAIAPI(apiKey, prompt) {
  return new Promise((resolve, reject) => {
    const https = require('https');

    const data = JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an AI technology news analyst. Always respond with valid JSON arrays only.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 4096,
      response_format: { type: 'json_object' }
    });

    const options = {
      hostname: 'api.openai.com',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.error) {
            reject(new Error(json.error.message));
            return;
          }
          resolve(json.choices[0].message.content);
        } catch (e) {
          reject(new Error('Failed to parse OpenAI response'));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.write(data);
    req.end();
  });
}

// ===== Config =====
function loadConfig() {
  // Vercel Environment Variables support
  if (process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY) {
    return {
      apiKey: process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY,
      provider: process.env.GEMINI_API_KEY ? 'gemini' : 'openai'
    };
  }

  try {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
      const env = fs.readFileSync(envPath, 'utf-8');
      const config = {};
      env.split('\n').forEach(line => {
        const [key, ...val] = line.split('=');
        if (key && val.length) config[key.trim()] = val.join('=').trim();
      });
      return {
        apiKey: config.GEMINI_API_KEY || config.OPENAI_API_KEY || '',
        provider: config.GEMINI_API_KEY ? 'gemini' : 'openai'
      };
    }
  } catch {}
  return { apiKey: '', provider: 'gemini' };
}

// ===== HTTP Server Request Handler =====
const handler = async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const urlPath = url.pathname;

  // CORS headers
  setCORS(res);
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API routes
  if (urlPath.startsWith('/api/')) {
    return handleAPI(req, res, urlPath);
  }

// ===== Static File Server (for local development) =====
function serveStatic(req, res, urlPath) {
  let filePath = path.join(PUBLIC_DIR, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath);
  
  // If no extension, try .html
  if (!ext) filePath += '.html';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to index.html for SPA routing
      fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (err2, data2) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data2);
      });
      return;
    }
    const contentType = MIME[path.extname(filePath)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

  // Static files (Fallback for local running)
  serveStatic(req, res, urlPath);
};

const server = http.createServer(handler);

// ===== Auto News Fetch Scheduler =====
function startAutoFetch() {
  const config = loadConfig();
  if (!config.apiKey) {
    console.log('[SCHEDULER] ⚠️ No API key found — auto-fetch disabled');
    console.log('[SCHEDULER] Set GEMINI_API_KEY to enable');
    return;
  }

  console.log(`[SCHEDULER] ✅ Auto-fetch enabled with ${config.provider} API`);
  
  // Initial fetch after 10 seconds
  setTimeout(async () => {
    console.log('[SCHEDULER] 🚀 Running initial news fetch...');
    await fetchAINews();
  }, 10000);

  // Then every 60 minutes
  setInterval(async () => {
    console.log('[SCHEDULER] 🔄 Scheduled news fetch...');
    await fetchAINews();
  }, 60 * 60 * 1000);
}

// ===== Start (Only if run directly, not required as module) =====
if (require.main === module) {
  server.listen(PORT, () => {
    console.log('');
    console.log('  ┌─────────────────────────────────────────────┐');
    console.log('  │                                             │');
    console.log('  │   🤖 AI Update Portal v2.5                  │');
    console.log(`  │   🌐 http://localhost:${PORT}                   │`);
    console.log('  │   📡 API: http://localhost:' + PORT + '/api/posts     │');
    console.log('  │                                             │');
    console.log('  └─────────────────────────────────────────────┘');
    console.log('');
    startAutoFetch();
  });
} else {
  module.exports = handler;
}
