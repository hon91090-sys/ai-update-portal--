require('dotenv').config();
const Parser = require('rss-parser');
const { createClient } = require('@supabase/supabase-js');

const parser = new Parser();

// Supabase Environment Variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Must use Service Role Key to bypass RLS for insert

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase URL or Key in environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// RSS feeds to scrape (Example: TechCrunch AI category, OpenAI Blog RSS if available, etc.)
const RSS_FEEDS = [
  'https://techcrunch.com/category/artificial-intelligence/feed/',
  // You can add more AI news RSS feeds here
];

// Helper: Basic Keyword Matching for Category assignment
function determineCategory(title, content) {
  const t = (title + ' ' + content).toLowerCase();
  if (t.includes('chatgpt') || t.includes('gpt') || t.includes('claude') || t.includes('llama')) return 'llm';
  if (t.includes('midjourney') || t.includes('dalle') || t.includes('stable diffusion')) return 'image';
  if (t.includes('sora') || t.includes('runway') || t.includes('video')) return 'video';
  if (t.includes('github copilot') || t.includes('code') || t.includes('developer')) return 'code';
  if (t.includes('chip') || t.includes('nvidia') || t.includes('amd')) return 'hardware';
  if (t.includes('policy') || t.includes('act') || t.includes('regulation')) return 'policy';
  return 'startup'; // Default
}

// Helper: Gemini API - Rewrite News Structure
async function rewriteNewsStructure(title, content) {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_KEY || !content) return content; // Fallback

  const prompt = `
당신은 전문 AI 뉴스 에디터입니다. 다음 영어 기사를 읽고 아래 지침에 따라 한국어로 재작성하세요.

[지침]
1. 반드시 3개의 문단으로 나눌 것.
2. 1문단: 가장 중요한 정보 (누가, 무엇을, 언제)
3. 2문단: 다음으로 중요한 정보 (사실, 인용문, 배경)
4. 3문단: 사소한 정보 (전망, 여파 등)
5. 각 문단 앞에는 '리드', '본문', '꼬리'라는 단어를 **절대** 쓰지 말고, 해당 문단의 내용을 요약하는 센스 있는 마크다운 소제목(##)을 달아주세요.
6. 전체 내용을 한국어로 자연스럽게 작성하세요.

[기사 제목]
${title}

[기사 내용]
${content}
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7 }
      })
    });
    const data = await res.json();
    if (data.candidates && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    }
    return content;
  } catch (e) {
    console.error('Gemini rewrite error:', e.message);
    return content;
  }
}

// Helper: Gemini API - Generate 3-line Summary
async function generateSummary(title, content) {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_KEY || !content) return content;

  const prompt = `다음 영어 기사를 읽고, 가장 핵심이 되는 내용을 한국어로 3줄 요약하세요. 각 줄은 '- '로 시작하게 작성해주세요. \n\n기사: ${title}\n${content}`;
  
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    const data = await res.json();
    if (data.candidates && data.candidates[0].content) {
      // 3줄 요약을 배열로 변환
      const text = data.candidates[0].content.parts[0].text;
      return text.split('\n').filter(l => l.trim().startsWith('-')).map(l => l.replace(/^- /, '').trim());
    }
    return ['요약을 생성할 수 없습니다.'];
  } catch (e) {
    return ['요약을 생성할 수 없습니다.'];
  }
}

// Helper: Google Translate API (For short titles)
async function translateTitle(text) {
  if (!text) return '';
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=${encodeURIComponent(text)}`);
    const json = await res.json();
    return json[0].map(item => item[0]).join('');
  } catch(e) {
    return text; 
  }
}

// Helper: Determine Company
function determineCompany(title) {
  const t = title.toLowerCase();
  if (t.includes('openai')) return 'OpenAI';
  if (t.includes('google')) return 'Google';
  if (t.includes('microsoft')) return 'Microsoft';
  if (t.includes('anthropic')) return 'Anthropic';
  if (t.includes('meta')) return 'Meta';
  if (t.includes('apple')) return 'Apple';
  if (t.includes('nvidia')) return 'NVIDIA';
  return 'Startup';
}

async function scrapeFeeds() {
  console.log('🚀 Starting AI News Crawler...');

  for (const feedUrl of RSS_FEEDS) {
    try {
      console.log(`📡 Fetching feed: ${feedUrl}`);
      const feed = await parser.parseURL(feedUrl);

      // Process top 5 recent items
      for (const item of feed.items.slice(0, 5)) {
        
        // 1. Check if the post already exists in Supabase to avoid duplicates (using URL as unique identifier)
        const { data: existingPost } = await supabase
          .from('posts')
          .select('id')
          .eq('url', item.link)
          .single();

        if (existingPost) {
          console.log(`⏩ Skipping existing post: ${item.title}`);
          continue;
        }

        // 2. Prepare Data Structure matching Supabase schema
        const category = determineCategory(item.title, item.contentSnippet || '');
        const company = determineCompany(item.title);
        
        // Rewrite text using Gemini API
        const enSummary = item.contentSnippet?.slice(0, 150) + '...';
        const enContent = item.content || item.contentSnippet;
        
        const koTitle = await translateTitle(item.title);
        const koSummaryLines = await generateSummary(item.title, enContent);
        const koContentRewritten = await rewriteNewsStructure(item.title, enContent);
        
        const newPost = {
          title: { en: item.title, ko: koTitle },
          category_l1: category,
          program_l2: company === 'Startup' ? 'AI News' : `${company} Product`,
          company: company,
          status_badge: 'Free',
          tech_status: 'Stable',
          summary: { en: enSummary, ko: koSummaryLines.join(' ') },
          summary_3lines: { en: [enSummary], ko: koSummaryLines },
          content_body: { en: enContent, ko: koContentRewritten },
          url: item.link,
          is_important: item.title.toLowerCase().includes('announce') || item.title.toLowerCase().includes('launch'),
          views: 0
        };

        // 3. Insert into Supabase (This will trigger Realtime broadcast to connected clients!)
        const { data, error } = await supabase.from('posts').insert([newPost]).select();
        
        if (error) {
          console.error(`❌ Error inserting post: ${item.title}`, error);
        } else {
          console.log(`✅ Successfully inserted: ${item.title}`);
        }
      }
    } catch (err) {
      console.error(`❌ Error parsing feed ${feedUrl}:`, err.message);
    }
  }

  console.log('🎉 Crawler finished successfully.');
}

// Run immediately
scrapeFeeds();
