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

// Helper: Free Google Translate API without requiring extra libraries
async function translateText(text, targetLang = 'ko') {
  if (!text) return '';
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
    const json = await res.json();
    return json[0].map(item => item[0]).join('');
  } catch(e) {
    console.error('Translation error:', e.message);
    return text; // Fallback to original text on error
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
        
        // Translate text using free Google API
        const enSummary = item.contentSnippet?.slice(0, 150) + '...';
        const enContent = item.content || item.contentSnippet;
        
        const koTitle = await translateText(item.title);
        const koSummary = await translateText(enSummary);
        const koContent = await translateText(enContent);
        
        const newPost = {
          title: { en: item.title, ko: koTitle },
          category_l1: category,
          program_l2: company === 'Startup' ? 'AI News' : `${company} Product`,
          company: company,
          status_badge: 'Free',
          tech_status: 'Stable',
          summary: { en: enSummary, ko: koSummary },
          content_body: { en: enContent, ko: koContent },
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
