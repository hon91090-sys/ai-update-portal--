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

// RSS feeds to scrape
const RSS_FEEDS = [
  'https://techcrunch.com/category/artificial-intelligence/feed/',
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

// Helper: Gemini API - Batch Rewrite & Translate News
async function processBatchWithGemini(items) {
  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_KEY || items.length === 0) return null;

  const prompt = `
당신은 최고 수준의 다국어 AI 뉴스 에디터입니다. 아래에 제공된 ${items.length}개의 영어 기사 원문을 분석하여, 각 기사별로 번역 및 역피라미드 구조(중요한 정보 -> 배경 -> 사소한 정보)로 재작성한 뒤 **반드시 JSON 배열(Array) 형식**으로만 응답하세요. 시작이나 끝에 마크다운 코드 블록(\`\`\`json)을 쓰지 말고 순수 JSON만 반환하세요.

[지침]
각 기사마다 아래 필드를 가진 JSON 객체를 생성하세요:
- "en_title": 원본 영어 제목
- "ko_title": 한국어로 자연스럽게 번역된 제목
- "en_summary": 영어로 작성된 핵심 3줄 요약 (배열 형태, 예: ["Point 1", "Point 2", "Point 3"])
- "ko_summary": 한국어로 작성된 핵심 3줄 요약 (배열 형태)
- "en_body": 원문을 바탕으로 역피라미드 구조로 재작성된 영문 본문. (3문단으로 나누고 각 문단 앞에 센스있는 요약 소제목 '## '을 사용할 것. 'Lead', 'Body' 등의 단어 금지)
- "ko_body": en_body와 동일한 3문단 구조 및 소제목으로 번역/재작성된 한국어 본문.

[입력 기사 목록]
${items.map((item, i) => `--- Article ${i+1} ---\nTitle: ${item.title}\nContent: ${item.content || item.contentSnippet}\n`).join('\n')}
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2 } // 낮은 온도로 JSON 포맷 유지
      })
    });
    
    const data = await res.json();
    if (data.candidates && data.candidates[0].content) {
      let text = data.candidates[0].content.parts[0].text;
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(text);
    }
  } catch (e) {
    console.error('Gemini Batch API error:', e.message);
  }
  return null;
}

async function scrapeFeeds() {
  console.log('🚀 Starting AI News Batch Crawler...');

  for (const feedUrl of RSS_FEEDS) {
    try {
      console.log(`📡 Fetching feed: ${feedUrl}`);
      const feed = await parser.parseURL(feedUrl);
      
      const newItems = [];
      for (const item of feed.items.slice(0, 5)) {
        // 1. Check if the post already exists in Supabase
        const { data: existingPost } = await supabase
          .from('posts')
          .select('id')
          .eq('url', item.link)
          .single();

        if (existingPost) {
          console.log(`⏩ Skipping existing post: ${item.title}`);
        } else {
          newItems.push(item);
        }
      }

      if (newItems.length > 0) {
        console.log(`🤖 Processing ${newItems.length} new items in a single Batch via Gemini...`);
        const processedArray = await processBatchWithGemini(newItems);
        
        if (processedArray && Array.isArray(processedArray)) {
          const postsToInsert = processedArray.map((aiData, i) => {
            const originalItem = newItems[i];
            const company = determineCompany(originalItem.title);
            const category = determineCategory(originalItem.title, originalItem.contentSnippet || '');
            
            return {
              title: { en: aiData.en_title || originalItem.title, ko: aiData.ko_title || originalItem.title },
              category_l1: category,
              program_l2: company === 'Startup' ? 'AI News' : `${company} Product`,
              company: company,
              status_badge: 'Free',
              tech_status: 'Stable',
              summary: { en: (aiData.en_summary || []).join(' '), ko: (aiData.ko_summary || []).join(' ') },
              summary_3lines: { en: aiData.en_summary || [], ko: aiData.ko_summary || [] },
              content_body: { en: aiData.en_body || originalItem.contentSnippet, ko: aiData.ko_body || originalItem.contentSnippet },
              url: originalItem.link,
              is_important: originalItem.title.toLowerCase().includes('announce') || originalItem.title.toLowerCase().includes('launch'),
              views: 0
            };
          });

          // 3. Bulk Insert into Supabase
          const { error } = await supabase.from('posts').insert(postsToInsert);
          
          if (error) {
            console.error(`❌ Error bulk inserting posts:`, error);
          } else {
            console.log(`✅ Successfully bulk inserted ${postsToInsert.length} posts!`);
          }
        } else {
          console.error(`❌ Gemini returned invalid data format.`);
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
