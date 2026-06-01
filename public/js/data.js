// ============================================
// AI Update Portal v2.5 ??Data Layer
// Company logos + Categories + Mock data
// ============================================

const CATEGORIES = [
  { id: 'all', emoji: '? ', label: { en: 'All Feeds', ko: '?„ì²´ ?¼ë“œ' }, color: '#1A73E8' },
  { id: 'llm', emoji: '?ï¸', label: { en: 'LLM & Text', ko: 'LLM & ?ìŠ¤?? }, color: '#1A73E8' },
  { id: 'image', emoji: '?¨', label: { en: 'Image Gen', ko: '?´ë?ì§€ ?ì„±' }, color: '#E8457C' },
  { id: 'video', emoji: '?¬', label: { en: 'Video & Motion', ko: '?ìƒ & ëª¨ì…˜' }, color: '#7C3AED' },
  { id: 'code', emoji: '?’»', label: { en: 'Coding AI', ko: 'ì½”ë”© ë³´ì¡°' }, color: '#0891B2' },
  { id: 'audio', emoji: '?µ', label: { en: 'Audio & Voice', ko: '?¤ë””??& ?Œì„±' }, color: '#EA8600' },
  { id: 'data', emoji: '?“Š', label: { en: 'Data Analysis', ko: '?°ì´??ë¶„ì„' }, color: '#0D9E6F' },
  { id: 'multi', emoji: '?¤–', label: { en: 'Multimodal', ko: 'ë©€?°ëª¨??& AI' }, color: '#D93025' },
  { id: 'hardware', emoji: '?™ï¸', label: { en: 'Hardware & Chips', ko: '?˜ë“œ?¨ì–´ & ì¹? }, color: '#5C5C5C' },
  { id: 'startup', emoji: '??', label: { en: 'Startups', ko: '?¤í??¸ì—… & ?¬ì' }, color: '#F59E0B' },
  { id: 'policy', emoji: '?–ï¸', label: { en: 'Ethics & Policy', ko: '?¤ë¦¬ & ë²•ì œ?? }, color: '#4B5563' },
];

const COMPANY_LOGOS = {
  'OpenAI': { icon: '??, color: '#000000', bg: '#F7F7F7' },
  'Anthropic': { icon: 'A', color: '#C96442', bg: '#FFF5F0' },
  'Google': { icon: 'G', color: '#4285F4', bg: '#E8F0FE' },
  'Microsoft': { icon: '??, color: '#00A4EF', bg: '#E5F5FD' },
  'Meta': { icon: '??, color: '#0064E0', bg: '#E5F0FF' },
  'Midjourney Inc': { icon: 'M', color: '#000000', bg: '#F0F0F0' },
  'Stability AI': { icon: 'S', color: '#7C3AED', bg: '#F3EEFF' },
  'Adobe': { icon: 'Ai', color: '#FF0000', bg: '#FFEBEB' },
  'Canva': { icon: 'C', color: '#00C4CC', bg: '#E0FAFB' },
  'Runway': { icon: 'R', color: '#000000', bg: '#F0F0F0' },
  'Pika Labs': { icon: 'P', color: '#FF6B35', bg: '#FFF0EA' },
  'Kuaishou': { icon: 'K', color: '#FF4906', bg: '#FFEDE5' },
  'HeyGen': { icon: 'H', color: '#6366F1', bg: '#EEEEFF' },
  'Anysphere': { icon: '??, color: '#000000', bg: '#F0F0F0' },
  'Cognition': { icon: 'D', color: '#10B981', bg: '#E6F7F0' },
  'Vercel': { icon: '??, color: '#000000', bg: '#F0F0F0' },
  'Replit': { icon: '??, color: '#F26207', bg: '#FFF0E5' },
  'Suno': { icon: '??, color: '#000000', bg: '#F0F0F0' },
  'Udio': { icon: 'U', color: '#7C3AED', bg: '#F3EEFF' },
  'ElevenLabs': { icon: 'XI', color: '#000000', bg: '#F0F0F0' },
  'Julius': { icon: 'J', color: '#4F46E5', bg: '#EEEEFF' },
  'Zapier': { icon: 'Z', color: '#FF4A00', bg: '#FFE8DD' },
  'Make': { icon: 'M', color: '#6D28D9', bg: '#F3EEFF' },
  'Akkio': { icon: 'A', color: '#2563EB', bg: '#E8F0FE' },
  'Significant Gravitas': { icon: 'AG', color: '#000000', bg: '#F0F0F0' },
  'CrewAI': { icon: 'C', color: '#E8457C', bg: '#FFF0F5' },
  'LangChain Inc': { icon: '?¦œ', color: '#1C3C3C', bg: '#E8F0E8' },
  'Perplexity AI': { icon: 'P', color: '#20808D', bg: '#E0F5F5' },
  'Notion Labs': { icon: 'N', color: '#000000', bg: '#F0F0F0' },
  'NVIDIA': { icon: 'N', color: '#76B900', bg: '#EBF4E5' },
  'AMD': { icon: 'A', color: '#ED1C24', bg: '#FCE8E9' },
  'xAI': { icon: 'X', color: '#000000', bg: '#F0F0F0' },
  'Mistral AI': { icon: 'M', color: '#EA580C', bg: '#FDEEE6' },
  'EU': { icon: '?‡ª?‡º', color: '#003399', bg: '#E6EBf5' },
  'Apple': { icon: 'ï£?, color: '#000000', bg: '#F0F0F0' }
};

function getCompanyLogo(company) {
  return COMPANY_LOGOS[company] || { icon: company.charAt(0), color: '#6B7280', bg: '#F3F4F6' };
}

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}

function relativeTime(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return 'ë°©ê¸ˆ ??;
  if (diff < 3600) return `${Math.floor(diff / 60)}ë¶???;
  if (diff < 86400) return `${Math.floor(diff / 3600)}?œê°„ ??;
  if (diff < 604800) return `${Math.floor(diff / 86400)}????;
  return new Date(dateStr).toLocaleDateString('ko-KR');
}

function fmtViews(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + 'ë§?;
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
}

const INITIAL_POSTS = [
  {
    id: 1,
    title: { en: "OpenAI announces GPT-4o with real-time voice, vision", ko: "OpenAI, ?¤ì‹œê°??Œì„±/ë¹„ì „ ì§€?í•˜??GPT-4o ?„ê²© ê³µê°œ" },
    summary: { en: "A unified model across text, vision, and audio natively.", ko: "?ìŠ¤?? ë¹„ì „, ?¤ë””?¤ë? ?¤ì´?°ë¸Œë¡?ì²˜ë¦¬?˜ëŠ” ?ˆë¡œ???Œë˜ê·¸ì‹­ ëª¨ë¸ GPT-4oê°€ ê³µê°œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## A New Era of Multimodal Interaction\nOpenAI recently introduced GPT-4o, a new flagship AI model capable of real-time reasoning across audio, vision, and text, completely redefining human-computer interaction.\n\n## Seamless Native Processing\nUnlike older models that relied on multiple steps to translate audio into text before processing, GPT-4o understands the raw audio waveform natively. This allows it to instantly pick up on emotional tone, background noise, and even multiple speakers. With a response time of just 232 milliseconds, it perfectly mimics the speed of human conversation. Mira Murati, CTO of OpenAI, stated, 'This is a massive leap towards creating more natural, intuitive AI.'\n\n## Rollout and Pricing\nThe model is rolling out gradually to ChatGPT Plus users, and its API usage cost has been reduced by 50% compared to GPT-4 Turbo.", ko: "## ?“° ì°¨ì„¸?€ ë©€?°ëª¨??ëª¨ë¸???±ì¥\n**OpenAI**ê°€ ?ìŠ¤?? ?œê°, ?¤ë””?¤ë? ?¤ì‹œê°„ìœ¼ë¡??™ì‹œ??ì²˜ë¦¬?????ˆëŠ” ?ˆë¡œ???Œë˜ê·¸ì‹­ ?¸ê³µì§€??ëª¨ë¸??**'GPT-4o'**ë¥??„ê²© ê³µê°œ?˜ë©° ?¸ê°„ê³?AI ?í˜¸?‘ìš©???ˆë¡œ??ì§€?‰ì„ ?´ì—ˆ?µë‹ˆ??\n\n## ?“– ì§€???†ëŠ” ?¤ì´?°ë¸Œ ì²˜ë¦¬ ê¸°ìˆ \nê³¼ê±°?ëŠ” ?¬ìš©?ì˜ ?Œì„±???ìŠ¤?¸ë¡œ ë³€?˜í•œ ??ì²˜ë¦¬?˜ëŠ” ë°©ì‹?´ì—ˆ?¼ë‚˜, ?´ë²ˆ GPT-4o ëª¨ë¸?€ ?¤ë””???Œí˜• ?ì²´ë¥?'?¤ì´?°ë¸Œ'ë¡??´í•´?©ë‹ˆ?? ?´ë? ?µí•´ ?¸ê°„??ë¯¸ì„¸??ê°ì •, ?´ì¡°, ?¬ì???ì£¼ë? ?ŒìŒê¹Œì? ?Œì•…?????ˆê²Œ ?˜ì—ˆ?µë‹ˆ??\n?¹íˆ ?‰ê·  232ms?¼ëŠ” ?‘ë‹µ ?ë„ë¥??¬ì„±?˜ì—¬ ?¤ì œ ?¬ëŒê³??€?”í•˜????•œ ì§€???†ëŠ” ?¸í„°?™ì…˜??êµ¬í˜„?ˆìŠµ?ˆë‹¤. ë¯¸ë¼ ë¬´ë¼??ìµœê³ ê¸°ìˆ ì±…ì„??CTO)??ë°œí‘œ ?„ì¥?ì„œ '?´ê²ƒ?€ ë³´ë‹¤ ?ì—°?¤ëŸ½ê³?ì§ê??ì¸ AIë¥??¥í•œ ê±°ë????„ì•½'?´ë¼ê³??‰ê??ˆìŠµ?ˆë‹¤. ê¸°ì¡´ ëª¨ë¸(GPT-4 Turbo) ?€ë¹?API ?¸ì¶œ ë¹„ìš©???ˆë°˜?¼ë¡œ ì¤„ì–´?¤ì–´ ê¸°ì—…?¤ì˜ ?„ì… ë¶€?´ë„ ?¬ê²Œ ??•„ì¡ŒìŠµ?ˆë‹¤.\n\n## ?“Œ ?œë¹„??ë°°í¬ ?¼ì • ë°?ê°€ê²?n?ˆë¡œ???¤ì‹œê°??Œì„± ê¸°ëŠ¥?€ ?¥í›„ ëª?ì£¼ì— ê±¸ì³ ChatGPT Plus ? ë£Œ ?¬ìš©?ë“¤?ê²Œ ?œì°¨?ìœ¼ë¡?ë°°í¬???ˆì •?´ë©°, ?°ìŠ¤?¬í†± ë²„ì „ ?±ë„ ?¨ê»˜ ì¶œì‹œ?˜ì—ˆ?µë‹ˆ??" },
    program_l2: "ChatGPT (GPT-4o)",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 3600000).toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 2,
    title: { en: "Anthropic launches Claude 3.5 Sonnet", ko: "Anthropic, ???ê¸??±ëŠ¥??Claude 3.5 Sonnet ì¶œì‹œ" },
    summary: { en: "Claude 3.5 Sonnet outperforms GPT-4o in many benchmarks.", ko: "?€ë¶€ë¶„ì˜ ë²¤ì¹˜ë§ˆí¬?ì„œ GPT-4oë¥??¥ê??˜ë©°, ?¤ì‹œê°?UI ?Œë”ë§?ê¸°ëŠ¥??'Artifacts'ë¥??‘ì¬??Claude 3.5 Sonnet??ì¶œì‹œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## Anthropic's Shocking Middle-Tier Release\nAnthropic has officially launched Claude 3.5 Sonnet, a middle-tier model that shockingly outperforms nearly all existing competitor models on the market.\n\n## Setting New Standards with 'Artifacts'\nOperating at twice the speed of its predecessor (Claude 3 Opus) while costing significantly less, Claude 3.5 Sonnet dominates major leaderboards in coding, logic, and visual reasoning. The biggest highlight is a massive UX breakthrough called 'Artifacts'. Claude now opens a dedicated side-panel where it can generate, render, and modify code snippets or SVG graphics in real-time. This essentially shifts Claude from a simple conversational AI into a collaborative workspace.\n\n## Availability Details\nThe model is currently available for free on Claude.ai, with higher rate limits for Pro subscribers.", ko: "## ?“° ë²¤ì¹˜ë§ˆí¬ë¥??©ì“´ ì¤‘ê°„ ì²´ê¸‰ ëª¨ë¸\n**Anthropic(?¤ìŠ¤ë¡œí”½)**??ê¸°ì¡´ ?ì‚¬??ìµœìƒ??ëª¨ë¸???°ì–´?˜ëŠ” ì¤‘ê°„ ì²´ê¸‰ ëª¨ë¸ **'Claude 3.5 Sonnet(?´ë¡œ??3.5 ?Œë„·)'**??ê¸°ìŠµ ì¶œì‹œ?˜ì—¬ ?…ê³„??ë²¤ì¹˜ë§ˆí¬ ê¸°ì???ê°ˆì•„ì¹˜ì› ?µë‹ˆ??\n\n## ?“– ?ì‹ ?ì¸ ?¤ì‹œê°?UI '?„í‹°?©íŠ¸'\n?ˆë¡­ê²?ì¶œì‹œ??3.5 Sonnet?€ ê²½ìŸ?¬ì¸ OpenAI??GPT-4oë¥??€?™ì› ?˜ì???ì¶”ë¡ (GPQA), ?™ë? ?˜ì? ì§€??MMLU), ì½”ë”©(HumanEval) ??ì£¼ìš” ?±ëŠ¥ ?‰ê? ì§€?œì—???•ë„?ˆìŠµ?ˆë‹¤. ?‘ë™ ?ë„ ?í•œ ?´ì „ ?¸ë? ìµœìƒ??ëª¨ë¸(Opus)ë³´ë‹¤ 2ë°??´ìƒ ë¹¨ë¼ì¡ŒìŠµ?ˆë‹¤.\n?¹íˆ ?´ë²ˆ ë°œí‘œ???µì‹¬?€ ?¨ìˆœ??ì§€???¥ìƒ???˜ì–´??**'Artifacts(?„í‹°?©íŠ¸)'**?¼ëŠ” ?ì‹ ?ì¸ UI ê¸°ëŠ¥?…ë‹ˆ?? ?€?”ì°½ ?°ì¸¡???„ìš© ?¨ë„???„ì›Œ AIê°€ ?‘ì„±??ë¦¬ì•¡??React) ì½”ë“œ??SVG ê·¸ë˜?½ì„ ?¤ì‹œê°„ìœ¼ë¡??Œë”ë§í•˜ê³??˜ì •?????ˆê²Œ ??ì£¼ì–´, ì±—ë´‡???„ë²½??'?‘ì—… ?Œí¬?¤í˜?´ìŠ¤'ë¡??ˆë°”ê¿ˆì‹œì¼°ìŠµ?ˆë‹¤.\n\n## ?“Œ ?œë¹„???´ìš© ?ˆë‚´\n??ëª¨ë¸?€ ?„ì¬ Claude.ai ?¹ì‚¬?´íŠ¸?ì„œ ?„êµ¬??ë¬´ë£Œë¡??¬ìš©??ë³????ˆìœ¼ë©? iOS ?„ìš© ?±ì—?œë„ ?•ì‹ ì§€?ë©?ˆë‹¤." },
    program_l2: "Claude 3.5",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date(Date.now() - 90 * 86400000).toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 8,
    title: { en: "Suno v3 generates studio-quality music in seconds", ko: "Suno v3, ??ëª?ì´ˆë§Œ???¤íŠœ?”ì˜¤ ?„ë¦¬???Œì•… ?ì„±" },
    summary: { en: "Suno v3 creates full 2-minute songs with vocals just from text.", ko: "ê°€?¬ë§Œ ?…ë ¥?˜ë©´ ë³´ì»¬ê³?ë°˜ì£¼ê°€ ëª¨ë‘ ?¬í•¨???„ì „???•íƒœ???¸ë˜ë¥?2ë¶?ë¶„ëŸ‰?¼ë¡œ ?ì„±?´ë‚´??Suno v3ê°€ ?•ì‹ ì¶œì‹œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## Text to Hit Songs in Seconds\nSuno has launched its v3 model, capable of generating radio-quality songs with vocals in mere seconds based solely on text prompts.\n\n## A 'ChatGPT Moment' for Music\nBreaking away from the robotic sounds of early audio AI, Suno v3 produces incredibly realistic tracks spanning genres from K-Pop to classical. Users can provide their own lyrics or ask the AI to write them. 'This is the ChatGPT moment for music creation,' remarked industry experts. The model understands complex prompts, seamlessly blending an acoustic intro into an EDM drop if requested.\n\n## Copyright Concerns Emerging\nWhile the technology lowers the barrier to entry for creators, it is simultaneously raising copyright and legal alarms across the music industry.", ko: "## ?“° ?ìŠ¤?¸ê? ?„ì„±???Œì›???˜ë‹¤\nAI ?Œì•… ?ì„± ?¤í??¸ì—… **Suno(?˜ë…¸)**ê°€ ?ìŠ¤??ëª…ë ¹?´ë§Œ?¼ë¡œ ?¼ë””?¤ì—???¡ì¶œ?˜ëŠ” ?˜ì???ê³ í’ˆì§??Œì•…??ë§Œë“¤?´ë‚´??**'v3 ëª¨ë¸'**???•ì‹ ì¶œì‹œ?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?¤ë””??ë¶„ì•¼??ì±—GPT ëª¨ë¨¼??nSuno v3???¬ìš©?ê? ?¥ë¥´ë¥?ì§€?•í•˜ê³?ê°€?¬ë? ?…ë ¥?˜ë©´(?ëŠ” AI?ê²Œ ?‘ì‚¬ë¥?ë§¡ê¸°ë©? ??ëª?ì´?ë§Œì— ë³´ì»¬ ?¸ë™ê³??…ê¸° ë°˜ì£¼ê°€ ?¬í•¨??2ë¶?ê¸¸ì´???„ì„±???Œì›????ê³¡ì”© ?ì„±???…ë‹ˆ?? ê¸°ì¡´ v2 ëª¨ë¸?ì„œ ë°œìƒ?˜ë˜ ì°?–´ì§€??ê¸°ê³„??ë¬¸ì œê°€ ?„ë²½???´ê²°?˜ì—ˆ?¼ë©°, '?´ì¿ ?¤í‹± ê¸°í?ë¡??œì‘???„ë ´êµ¬ì—???¼ë ‰?¸ë¡œ??EDM?¼ë¡œ ?°ì?????ê³?ê°™ì? ë³µì¡???„ë¡¬?„íŠ¸ ì§€?œë„ ?„ë²½?˜ê²Œ ?´í•´?©ë‹ˆ??\n?Œì•… ?‰ë¡ ê°€?¤ì? ?´ë? ?ê³  '?¤ë””???ì„± ë¶„ì•¼??ë§ˆì¹¨??ChatGPT ëª¨ë¨¼?¸ê? ?„ë˜?ˆë‹¤'ê³?ê·¹ì°¬?˜ê³  ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ë¶ˆê±°ì§€???€?‘ê¶Œ ?´ìŠˆ\nì°½ì‘???¥ë²½??ë¬´ë„ˆì§?ê²ƒì— ?€???€ì¤‘ì˜ ?˜í˜¸ ?´ë©´?ì„œ?? ë¬´ë¶„ë³„í•œ AI ?™ìŠµ ?°ì´???€?‘ê¶Œ ë¬¸ì œë¡??¸í•´ ê¸€ë¡œë²Œ ?€???Œë°˜?¬ë“¤??ì§‘ë‹¨ ?Œì†¡ ??ë²•ì  ?€?‘ì„ ì¤€ë¹„í•˜ê³??ˆë‹¤???Œì‹???¨ê»˜ ?„í•´ì§€ê³??ˆìŠµ?ˆë‹¤." },
    program_l2: "Suno v3",
    category_l1: "audio",
    company: "Suno",
    url: "https://suno.ai",
    created_at: new Date(Date.now() - 50 * 86400000).toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 10,
    title: { en: "Meta releases Llama 3, the ultimate open-source model", ko: "Meta, ê¶ê·¹???¤í”ˆ?ŒìŠ¤ ëª¨ë¸ 'Llama 3' 8B ë°?70B ëª¨ë¸ ê³µê°œ" },
    summary: { en: "Meta's Llama 3 sets a new standard for open-source AI.", ko: "ë©”í?ê°€ ?¤í”ˆ?ŒìŠ¤ AI ?íƒœê³„ë? ?´ëŒ?´ê°ˆ Llama 3 ?œë¦¬ì¦ˆë? ?„ê²© ê³µê°œ?ˆìŠµ?ˆë‹¤. 8B ëª¨ë¸ì¡°ì°¨ ê¸°ì¡´ ëª¨ë¸?¤ì„ ?•ë„?©ë‹ˆ??" },
    content_body: { en: "## Meta's Open-Source Counterattack\nMeta has officially open-sourced Llama 3 (8B and 70B), setting a new performance standard for free AI models.\n\n## Outperforming Proprietary Giants\nTrained on a massive 15 Trillion tokens, Llama 3 dominates open-source leaderboards. The 8B version is lightweight enough to run on personal devices while outperforming previous heavyweights, and the 70B version competes directly with proprietary giants like GPT-4. Mark Zuckerberg emphasized Meta's commitment to open AI, stating that a 400B multimodal version is currently training to become the undisputed champion.\n\n## Deployment & Access\nDevelopers can freely download the weights from Hugging Face or access them via major cloud providers like AWS and Google Cloud.", ko: "## ?“° ?¤í”ˆ?ŒìŠ¤ AI??ë°˜ê²©\n**Meta(ë©”í?)**ê°€ ?ì‚¬??ê±°ë? ?¸ì–´ ëª¨ë¸ ?œë¦¬ì¦?ìµœì‹ ?‘ì¸ **'Llama 3(?¼ë§ˆ 3)'**??8B ë°?70B ?¬ì´ì¦?ë²„ì „???¤í”ˆ?ŒìŠ¤ë¡?ë¬´ë£Œ ê³µê°œ?˜ë©° ?«íŒ AI ?íƒœê³„ì— ?•ë©´ ?¹ë?ë¥?ê±¸ì—ˆ?µë‹ˆ??\n\n## ?“– ?ìš© ëª¨ë¸???•ë„?˜ëŠ” ?¤í™ê³??¬ë?\në¬´ë ¤ 15ì¡?15T) ê°œì˜ ë°©ë????ìŠ¤??? í°?¼ë¡œ ?™ìŠµ????ëª¨ë¸?¤ì? ì¶”ë¡ , ?˜í•™, ì½”ë”© ???€ë¶€ë¶„ì˜ ì§€?œì—???™ê¸‰ ìµœê³ ???±ëŠ¥??ê¸°ë¡?ˆìŠµ?ˆë‹¤. ?¹íˆ 8B ?Œë¼ë¯¸í„° ëª¨ë¸??ê²½ìš° ?¼ë°˜ ?¸íŠ¸ë¶ì´???¤ë§ˆ?¸í°?ì„œ??êµ¬ë™??ê°€?¥í•  ?•ë„ë¡?ê°€ë²¼ìš°ë©´ì„œ??êµ¬í˜• ê±°ë? ëª¨ë¸?¤ì„ ê°€ë³ê²Œ ?•ë„?˜ì—¬ '?¨ë””ë°”ì´??AI' ?íƒœê³??•ì¥??ê°•ë ¥??ë¬´ê¸°ê°€ ?˜ê³  ?ˆìŠµ?ˆë‹¤.\në§ˆí¬ ?€ì»¤ë²„ê·?ë©”í? CEO??'?°ë¦¬??ëª©í‘œ???¨ìˆœ???¤í”ˆ?ŒìŠ¤ 1?„ê? ?„ë‹ˆ???„ì¡´?˜ëŠ” ìµœê³ ??AIë¥?ë§Œë“œ??ê²??´ë¼ë©? ?„ì¬ 4ì²œì–µ(400B) ?Œë¼ë¯¸í„°ê°€ ?˜ëŠ” ê±°ë???ë©€?°ëª¨??ë²„ì „???™ìŠµ ì¤‘ì´?¼ê³  ê³µì‹ ë°œí‘œ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ?¤ìš´ë¡œë“œ ë°??´ë¼?°ë“œ ?°ë™\nê°œë°œ?ë“¤?€ ?ˆê¹…?˜ì´??Hugging Face)ë¥??µí•´ Llama 3??ê°€ì¤‘ì¹˜(Weights)ë¥?ì§ì ‘ ?¤ìš´ë¡œë“œ?????ˆìœ¼ë©? AWS??êµ¬ê? ?´ë¼?°ë“œ?€ ê°™ì? ì£¼ìš” ?¸í”„?¼ì—?œë„ ?´ë¦­ ??ë²ˆìœ¼ë¡?ë°°í¬?????ˆìŠµ?ˆë‹¤." },
    program_l2: "Llama 3",
    category_l1: "llm",
    company: "Meta",
    url: "https://llama.meta.com",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 11,
    title: { en: "ChatGPT unveiled by OpenAI, sparking global AI race", ko: "OpenAI, ???¸ê³„ë¥??¤í”??'ChatGPT' ìµœì´ˆ ê³µê°œ" },
    summary: { en: "The conversational model sets a record for fastest-growing user base.", ko: "??‚¬??ê°€??ë¹ ë¥´ê²?1??ëª…ì˜ ?¬ìš©?ë? ?¬ì„±???€?”í˜• AI 'ChatGPT'ê°€ ?¸ìƒ??ì²?? ì„ ë³´ì??µë‹ˆ??" },
    content_body: { en: "## The Global AI Spark\nIn late 2022, OpenAI stunned the world by unveiling ChatGPT, a highly fluent conversational AI agent based on the GPT-3.5 architecture.\n\n## Historic Growth and Tech Arms Race\nThe system demonstrated an uncanny ability to write essays, debug code, and answer complex questions with human-like nuance. It reached 1 million users in just 5 days, setting a historic record for the fastest-growing consumer app. This unexpected consumer hit triggered a 'Code Red' at Google and sparked an intense generative AI arms race among global tech titans.\n\n## Subscription Tier Introduced\nOriginally launched as a free research preview, its overwhelming server costs quickly led to the introduction of a paid 'Plus' tier.", ko: "## ?“° ê¸€ë¡œë²Œ AI ë¶ì˜ ?œë§‰\n**OpenAI**ê°€ 2022??11??ë§? GPT-3.5 ?„í‚¤?ì²˜ë¥?ê¸°ë°˜?¼ë¡œ ???€?”í˜• ?¸ê³µì§€???ì´?„íŠ¸ **'ChatGPT(ì±—GPT)'**ë¥??¸ìƒ??ì²˜ìŒ ê³µê°œ?˜ë©° ???¸ê³„?ì¸ ?ì„±??AI ?´í’???í™”?œì¼°?µë‹ˆ??\n\n## ?“– ê²½ì´ë¡œìš´ ?±ì¥?¸ì? ë¹…í…Œ??êµ°ë¹„ ê²½ìŸ\n?¬ìš©?ì? ì±„íŒ…?˜ë“¯ ?€?”ë? ì£¼ê³ ë°›ëŠ” ??ëª¨ë¸?€ ?ì„¸???‘ì„±, ë³µì¡??ì½”ë”© ?”ë²„ê¹? ?¤êµ­??ë²ˆì—­ ???¤ì–‘??ë¶„ì•¼?ì„œ ?¸ê°„???„ì ?˜ëŠ” ? ì°½?¨ê³¼ ë§¥ë½ ì¶”ë¡  ?¥ë ¥??ë³´ì—¬ì£¼ì—ˆ?µë‹ˆ?? \n?¹íˆ ì¶œì‹œ ??5??ë§Œì— 100ë§?ëª…ì˜ ?¬ìš©?ë? ?ŒíŒŒ?˜ë©° IT ?°ì—… ??‚¬??? ë??†ëŠ” ?Œë¹„?????±ì¥?¸ë? ê¸°ë¡?ˆìŠµ?ˆë‹¤. ?´ëŸ¬????°œ?ì¸ ?¥í–‰?€ ê²€???œì¥???…ì ?˜ê³  ?ˆë˜ êµ¬ê?(Google) ?´ë???'ì½”ë“œ ?ˆë“œ(Code Red)' ë¹„ìƒ ê²½ë³´ë¥?ë°œë ¹?˜ê²Œ ë§Œë“¤?ˆê³ , ë§ˆì´?¬ë¡œ?Œí”„?¸ë? ë¹„ë¡¯???¥í…Œ??ê¸°ì—…?¤ì˜ ë¬´í•œ ê¸°ìˆ  ê²½ìŸ??ì´‰ë°œ?œì¼°?µë‹ˆ??\n\n## ?“Œ ë¶€ë¶?? ë£Œ??ëª¨ë¸ ?„ì…\nì¶œì‹œ ì´ˆê¸°?ëŠ” ?¨ìˆœ???°êµ¬ ëª©ì ??ë¬´ë£Œ ?„ë¦¬ë·°ë¡œ ?´ì˜?˜ì—ˆ?¼ë‚˜, ê¸°í•˜ê¸‰ìˆ˜?ìœ¼ë¡??˜ì–´?˜ëŠ” ?œë²„ ?´ì˜ ë¹„ìš©??ì¶©ë‹¹?˜ê¸° ?„í•´ ë¹ ë¥´ê²???20?¬ëŸ¬??'ChatGPT Plus' êµ¬ë… ëª¨ë¸???„ì…?˜ì—ˆ?µë‹ˆ??" },
    program_l2: "ChatGPT",
    category_l1: "llm",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date("2022-11-30T10:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 12,
    title: { en: "Midjourney v5 revolutionizes AI image generation", ko: "Midjourney v5 ì¶œì‹œ, ?¬ì§„ê³?êµ¬ë¶„ ë¶ˆê???ê·¹ì‚¬?¤ì£¼???„ë‹¬" },
    summary: { en: "Photorealistic images with perfect hands and textures.", ko: "?ê????Œë”ë§??¤ë¥˜ë¥?ê·¹ë³µ?˜ê³  ?„ë²½???¬ì§„ ?ˆì§ˆ??ë³´ì—¬ì£¼ëŠ” ë¯¸ë“œ?€??v5ê°€ ì¶œì‹œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## Perfecting AI Photography\nMidjourney has officially launched v5, taking a quantum leap in photorealism and eliminating notorious AI artifacts like six-fingered hands.\n\n## Blurring Reality and Fiction\nThe new v5 algorithm generates images with strikingly realistic skin textures, accurate lighting, and flawless anatomical proportions. Photographers and digital artists have expressed both awe and concern over how indistinguishable these generations are from actual photographs. 'It is getting dangerously good,' noted one prominent digital artist. The update also allows for seamless wide aspect ratios and intricate prompt adherence.\n\n## Deepfake and Ethics Dilemma\nThe surge in hyper-realistic AI images has led to widespread debates surrounding copyright infringement and deepfakes on social media.", ko: "## ?“° ê·¹ì‚¬?¤ì£¼???´ë?ì§€ AI???„ì„±\n?…ë³´?ì¸ ë¯¸ì  ê°ê°???ë‘?˜ëŠ” ?´ë?ì§€ ?ì„± AI **Midjourney(ë¯¸ë“œ?€??**ê°€ ?€ê·œëª¨ ê·¸ë˜???”ì§„ ?…ë°?´íŠ¸??**'v5'** ë²„ì „??ì¶œì‹œ?˜ë©° ê·¹ì‚¬?¤ì£¼???Œë”ë§ì˜ ?•ì ???„ë‹¬?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?ë³„??ë¶ˆê??¥í•´ì§??½ì…˜ê³??„ì‹¤\n?´ë²ˆ ?…ë°?´íŠ¸??ê°€?????±ê³¼??ê¸°ì¡´ ?´ë?ì§€ ?ì„± AI?¤ì˜ ê³ ì§ˆ?ì¸ ë§¹ì ?´ì—ˆ??'?ê???ê°œìˆ˜ ?Œë”ë§??¤ë¥˜'ë¥??„ë²½?˜ê²Œ ê·¹ë³µ?ˆë‹¤???ì…?ˆë‹¤. \n?ˆë¡œ???Œê³ ë¦¬ì¦˜?€ ëª¨ë¸???¼ë? ì§ˆê°, ?ˆë™?ì— ë§ºíŒ ë°˜ì‚¬ê´? ë°”ëŒ??? ë¦¬??ë¨¸ë¦¬ì¹´ë½???¸ë???ë¬˜ì‚¬ ?±ì—???¤ì œ ê³ ì„±??ì¹´ë©”?¼ë¡œ ?Œì¦ˆë¡?ì´¬ì˜???¬ì§„ê³??½ì? ?¨ìœ„ë¡?êµ¬ë¶„??ë¶ˆê??¥í•œ ?¬ì‹¤ê°ì„ ë³´ì—¬ì¤ë‹ˆ?? ?„ë¡¬?„íŠ¸ ?´ì„???í•œ ?€???ìŠ¹?˜ì—¬ ?¬ëŸ¬ ?¸ë¬¼?´ë‚˜ ë³µì¡??êµ¬ë„ë¥?ì§€?œí•´??ë­‰ê°œì§??†ì´ ?°ì¶œ???…ë‹ˆ?? ?ì—… ?”ì???…ê³„?ì„œ??'?¤í†¡ ?¬ì§„ ?œì¥???¨ëŸ¬?¤ì„???ë‚¬??ë©??€?¼ì???ê°ì¶”ì§€ ëª»í•˜ê³??ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ê°€ì§??´ìŠ¤(Deepfake) ?°ë ¤ ?•ì‚°\n?¬ì§„ê³?êµ¬ë³„?????†ëŠ” ê³ í’ˆì§??´ë?ì§€ê°€ ë²”ëŒ?¨ì— ?°ë¼, ?„ë?ì¹˜ìŠ¤ì½?êµí™©??ëª…í’ˆ ?¨ë”©???…ì? ?˜ì´???¬ì§„???¤ì œ ê¸°ì‚¬ë¡?ë³´ë„?˜ëŠ” ???Œì…œ ë¯¸ë””???ì˜ ê°€ì§??´ìŠ¤ ?•ì‚°ê³??¤ë¦¬???©íŠ¸ ì²´í¬ ë¬¸ì œê°€ ?¬ê°???”ë‘ë¡?? ì˜¤ë¥´ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Midjourney",
    category_l1: "image",
    company: "Midjourney Inc",
    url: "https://midjourney.com",
    created_at: new Date("2023-03-15T00:00:00Z").toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 14,
    title: { en: "NVIDIA announces H100 Hopper GPU", ko: "NVIDIA, ì°¨ì„¸?€ AI ê°€?ê¸° 'H100' GPU ?„í‚¤?ì²˜ ë°œí‘œ" },
    summary: { en: "The H100 GPU promises 9x faster AI training performance.", ko: "?¸ëœ?¤í¬ë¨??”ì§„???‘ì¬?˜ì—¬ ê¸°ì¡´ A100 ?€ë¹?ìµœë? 9ë°?ë¹ ë¥¸ ?™ìŠµ ?ë„ë¥??ë‘?˜ëŠ” ì°¨ì„¸?€ ê´´ë¬¼ GPU H100??ê³µê°œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## Fueling the Generative AI Boom\nNVIDIA CEO Jensen Huang has introduced the H100 Tensor Core GPU, a massive leap in hardware designed specifically to accelerate the generative AI boom.\n\n## Transformer Engine and 9x Speed\nBuilt on the new Hopper architecture, the H100 features a dedicated Transformer Engine that dramatically speeds up large language model (LLM) training. NVIDIA claims it offers up to 9x faster training performance and 30x faster inference compared to its predecessor, the A100. As tech giants like Microsoft, Meta, and Google race to secure these chips for training trillion-parameter models, the H100 has become the most sought-after piece of technology on the planet.\n\n## Supply Chain and Cost\nSupply chain constraints mean that securing H100 allocation requires massive capital, cementing NVIDIA's position as the primary arms dealer in the AI war.", ko: "## ?“° ?ì„±??AI ?œë????ˆë¡œ???¬ì¥\n**NVIDIA(?”ë¹„?”ì•„)**??? ìŠ¨ ??ìµœê³ ê²½ì˜??CEO)ê°€ GTC ì»¨í¼?°ìŠ¤ ê¸°ì¡°?°ì„¤?ì„œ ?ˆë¡œ???¸í¼(Hopper) ?„í‚¤?ì²˜ë¥?ê¸°ë°˜?¼ë¡œ ??ì°¨ì„¸?€ **'H100 ?ì„œ ì½”ì–´ GPU'**ë¥??„ê²© ë°œí‘œ?˜ë©° ë°˜ë„ì²??œì¥??ì§€ë°°ë ¥???¬í™•?¸í–ˆ?µë‹ˆ??\n\n## ?“– ?¸ëœ?¤í¬ë¨??”ì§„ê³?9ë°°ì˜ ?™ìŠµ ?ë„ ?¥ìƒ\n??ê´´ë¬¼ ê°™ì? ?¤í™???˜ë“œ?¨ì–´??ìµœê·¼ ê±°ë? ?¸ì–´ ëª¨ë¸(LLM)??ê·¼ê°„???˜ëŠ” '?¸ëœ?¤í¬ë¨??Œê³ ë¦¬ì¦˜'???„ìš©?¼ë¡œ ê°€?í•˜???ì„œ ì½”ì–´ ?”ì§„???¸ê³„ ìµœì´ˆë¡??¤ë¦¬ì½˜ì— ?´ì¥?ˆìŠµ?ˆë‹¤. ?”ë¹„?”ì•„ ì¸¡ì˜ ?±ëŠ¥ ë°œí‘œ ?ë£Œ???°ë¥´ë©? ?´ì „ ?¸ë????Œë˜ê·¸ì‹­?´ì—ˆ??A100 ëª¨ë¸ ?€ë¹??¸ê³µì§€???™ìŠµ ?ë„??ìµœë? 9ë°? ?¤ì‹œê°?ì¶”ë¡  ?ë„??ë¬´ë ¤ 30ë°°ê¹Œì§€ ?Œì–´?¬ë¦´ ???ˆìŠµ?ˆë‹¤.\nGPT-4?€ ê°™ì´ ?˜ì²œ??ê°??´ìƒ??ë°©ë????Œë¼ë¯¸í„°ë¥?ê°€ì§?ëª¨ë¸???ì²´ ê°œë°œ?˜ë ¤??ê¸€ë¡œë²Œ ?Œí¬ ê¸°ì—…?¤ì—ê²?H100 ?•ë³´??ê°€???œê¸‰???¹ë©´ ê³¼ì œê°€ ?˜ì—ˆ?¼ë©°, ? ìŠ¨ ??CEO????ì¹©ì„ '21?¸ê¸° ?°ì—… ?ëª…???ë™???´ë¼ê³?ì¹?–ˆ?µë‹ˆ??\n\n## ?“Œ ì²œë¬¸?™ì ???¨ê??€ ?ˆê? ?„ìƒ\nì¹??˜ë‚˜??ê°€ê²©ì´ ?œí™” 4,000ë§??ì—??5,000ë§??ì„ ?¸ê??¨ì—??ë¶ˆêµ¬?˜ê³  ?˜ìš”ê°€ ê³µê¸‰???„ë“??ì´ˆê³¼?˜ì—¬, ê¸°ì—…?¤ì´ ??ì¹©ì„ ë°›ê¸° ?„í•´ 6ê°œì›” ?´ìƒ ?€ê¸°í•´???˜ëŠ” ?„ë? ?†ëŠ” ?ˆê? ?„ìƒ??ë²Œì–´ì§€ê³??ˆìŠµ?ˆë‹¤." },
    program_l2: "Hopper H100",
    category_l1: "hardware",
    company: "NVIDIA",
    url: "https://nvidia.com",
    created_at: new Date("2022-03-22T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 17,
    title: { en: "Microsoft integrates ChatGPT into Bing Search", ko: "Microsoft, ì±—GPT ?‘ì¬??'?ˆë¡œ??Bing(ë¹?' ê²€???”ì§„ ë°œí‘œ" },
    summary: { en: "New Bing combines search indexes with conversational AI.", ko: "MSê°€ ?ì‚¬??ê²€???”ì§„ ë¹?Bing)??GPT-4 ê¸°ë°˜???€?”í˜• AIë¥?ê²°í•©?˜ì—¬ êµ¬ê????…ì  ?œì¥???„ì „?¥ì„ ?´ë??ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## Reimagining Internet Search\nMicrosoft has launched a fundamentally revamped version of its Bing search engine and Edge browser, heavily integrated with a next-generation OpenAI large language model.\n\n## The AI Copilot for the Web\nDubbed as 'an AI copilot for the web', the new Bing introduces a chat interface alongside traditional search results. It summarizes massive amounts of web information, provides direct answers with citations, and generates creative content like emails or itineraries. Microsoft CEO Satya Nadella proudly declared that 'the race starts today,' directly challenging Google's two-decade monopoly over internet search.\n\n## Waitlist and Surging Demand\nThe announcement triggered a massive surge in Bing app downloads, forcing millions to sign up for a waitlist to test the highly anticipated feature.", ko: "## ?“° 20??ê²€???…ì  êµ¬ë„???Œê´´\n**ë§ˆì´?¬ë¡œ?Œí”„??Microsoft)**ê°€ ?ì‚¬??ê²€???”ì§„ ë¹?Bing)ê³??£ì?(Edge) ë¸Œë¼?°ì???OpenAI??ì°¨ì„¸?€ ?¸ì–´ ëª¨ë¸??ê¹Šìˆ™??ê²°í•©??**'?ˆë¡œ??Bing(New Bing)'**??ê³µê°œ?˜ë©° ?¸í„°??ê²€???œì¥???ë„ë¥??¤í”?¤ì—ˆ?µë‹ˆ??\n\n## ?“– ?¹ì„ ?„í•œ ?¸ê³µì§€??ë¶€ì¡°ì¢…??n'?¹ì„ ?„í•œ AI ë¶€ì¡°ì¢…???¼ëŠ” ?¬ë¡œê±´ì„ ?´ê±´ ???ˆë¡œ??ê²€???”ì§„?€ ê¸°ì¡´ì²˜ëŸ¼ ?Œë???ë§í¬ ëª©ë¡???˜ì—´?˜ê³  ?ë‚˜??ê²ƒì´ ?„ë‹™?ˆë‹¤. ë³„ë„???€?”í˜• ??„ ?µí•´ ?¬ìš©?ì˜ ë³µì¡?˜ê³  ê¸?ì§ˆë¬¸ ?˜ë„ë¥??•í™•???Œì•…?˜ê³ , ?¤ì‹œê°„ìœ¼ë¡??¬ëŸ¬ ??ë¬¸ì„œë¥?ì¢…í•©?˜ì—¬ ê¹”ë”?˜ê²Œ ?”ì•½??ë¬¸ì¥???µë?ê³?ì¶œì²˜(ê°ì£¼ ë²ˆí˜¸)ë¥??¨ê»˜ ?œê³µ?©ë‹ˆ??\n?¬í‹°???˜ë¸??MS CEO???°ì¹­ ?‰ì‚¬?¥ì—??'ê²€?‰ì˜ ?ˆë¡œ???¨ëŸ¬?¤ì„ ê²½ì£¼ê°€ ë°”ë¡œ ?¤ëŠ˜ë¶€???œì‘?œë‹¤'ê³?? ì–¸?˜ë©°, ì§€??20???„ê°„ ?´ì–´ì§?êµ¬ê? ê²€??ì²œí•˜???˜ìµ êµ¬ì¡°ë¥?ê·¼ë³¸?ìœ¼ë¡??¤ì§‘ê² ë‹¤???¼ì‹¬??ëª…í™•???´ë¹„ì³¤ìŠµ?ˆë‹¤.\n\n## ?“Œ ?„ì²­???€ê¸?ëª…ë‹¨ê³??±ìŠ¤? ì–´ 1??nê¸°ëŠ¥ ë°œí‘œ ì§í›„ ???¸ê³„?ì„œ ?˜ë°±ë§?ëª…ì˜ ?¬ìš©?ê? ë² í? ë²„ì „???ŒìŠ¤?¸í•˜ê¸??„í•´ ?€ê¸?ëª…ë‹¨(Waitlist)???±ë¡?ˆìœ¼ë©? ?œë•Œ ?¸ë©´ë°›ë˜ ë¹?ëª¨ë°”???±ì´ ?±ìŠ¤? ì–´ ?¤ìš´ë¡œë“œ 1?„ë? ì°¨ì??˜ëŠ” ê¸°ì—¼??? í•˜ê¸°ë„ ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Bing AI",
    category_l1: "llm",
    company: "Microsoft",
    url: "https://bing.com",
    created_at: new Date("2023-02-07T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 18,
    title: { en: "EU passes the historic AI Act", ko: "? ëŸ½?°í•©(EU), ?¸ê³„ ìµœì´ˆ???¬ê´„???¸ê³µì§€??ê·œì œë²?'AI Act' ?µê³¼" },
    summary: { en: "A landmark framework regulating AI risk levels in Europe.", ko: "AI???„í—˜?„ë? ë¶„ë¥˜?˜ê³  ?¥í˜?´í¬, ?ì²´ ?¸ì‹ ?±ì— ê°•ë ¥??ê·œì œë¥?ê°€?˜ëŠ” EU??AIë²•ì•ˆ??? ëŸ½?˜íšŒë¥??µê³¼?ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## World's First Comprehensive AI Regulation\nEuropean Parliament lawmakers have overwhelmingly approved the AI Act, marking the world's first comprehensive legal framework to govern artificial intelligence.\n\n## Risk-Based Framework and Restrictions\nThe landmark legislation takes a risk-based approach, categorizing AI systems into tiers. 'Unacceptable risk' applications, such as biometric mass surveillance and social scoring systems, are strictly banned. High-risk systems must undergo rigorous compliance checks. For foundational models like ChatGPT, the law mandates strict transparency obligations, requiring creators to clearly disclose when content is AI-generated and share summaries of their training data. \n\n## The 'Brussels Effect' and Future Outlook\nWhile hailed by rights groups, some tech industry leaders argue it could stifle European innovation. Nonetheless, the AI Act is expected to set a global benchmark, known as the 'Brussels Effect'.", ko: "## ?“° ?¸ê³µì§€??ê·œì œ??ê¸€ë¡œë²Œ ì²?‚¬ì§?ë§ˆë ¨\n? ëŸ½?°í•©(EU) ?˜íšŒê°€ ?˜ë…„ê°„ì˜ ì¹˜ì—´???¼ì˜?€ ê³µë°© ?ì— ?¸ê³„ ìµœì´ˆë¡??¸ê³µì§€??ê¸°ìˆ ??ê°œë°œê³??œìš©???¬ê´„?ìœ¼ë¡?ê·œì œ?˜ëŠ” **'AI Act(?¸ê³µì§€?¥ë²•)'**ë¥??•ë„?ì¸ ì°¬ì„±?œë¡œ ?µê³¼?œì¼°?µë‹ˆ??\n\n## ?“– ?„ê²©???„í—˜ ê¸°ë°˜ ?µì œ?€ ?¬ëª…???˜ë¬´\n????‚¬?ì¸ ë²•ì•ˆ???µì‹¬ ê³¨ì??AI ?œìŠ¤?œì´ ?¬íšŒ??ë¯¸ì¹˜???„í—˜?„ë? 4?¨ê³„ë¡??¸ë¶„?”í•˜???œì¬ë¥?ì°¨ë“± ?ìš©?˜ëŠ” '?„í—˜ ê¸°ë°˜(Risk-based)' ?‘ê·¼ë²•ì…?ˆë‹¤. ê°œì¸??ë¬´ì˜?ì„ ì¡°ì‘?˜ê±°???ˆë©´ ?¸ì‹?¼ë¡œ ?œë????ì‹œ ê°ì‹œ?˜ê³  ?¬íšŒ???ìˆ˜ë¥?ë§¤ê¸°???‰ìœ„??'?˜ìš© ë¶ˆê??¥í•œ ?„í—˜'?¼ë¡œ ì§€?•ë˜??? ëŸ½ ?´ì—???ì²œ?ìœ¼ë¡?ê¸ˆì??©ë‹ˆ??\n?„ìš¸??ì±—GPT???Œë¼(Sora)?€ ê°™ì? ë²”ìš© ?ì„±??AI(GPAI)??ê·¸ë“¤??ë§Œë“¤?´ë‚¸ ì½˜í…ì¸ ê? ê¸°ê³„???˜í•´ ?ì„±?˜ì—ˆ?Œì„ ?¬ìš©?ê? ?????ˆë„ë¡??Œí„°ë§ˆí¬ ?±ì„ ?µí•´ ëª…í™•???œê¸°?´ì•¼ ?˜ëŠ” ê°•ë ¥???¬ëª…???˜ë¬´ê°€ ë¶€?¬ë©?ˆë‹¤. ?í•œ ëª¨ë¸???™ìŠµ?œí‚¤?????¬ìš©???°ì´?°ì˜ ?€?‘ê¶Œ ?”ì•½ë³¸ë„ ?„ìˆ˜?ìœ¼ë¡??œì¶œ?´ì•¼ ?©ë‹ˆ??\n\n## ?“Œ ë¸Œë¤¼?€ ?¨ê³¼?€ ?°ì—…ê³„ì˜ ë°˜ë°œ\n?¤ë¦¬ì½˜ë°¸ë¦¬ì˜ ë¹…í…Œ??ê¸°ì—…?¤ê³¼ ?¼ë? ?¤í??¸ì—… ì§„ì˜?€ ê³¼ë„?˜ê³  ê²½ì§??ê·œì œê°€ ê¸°ìˆ  ?ì‹ ???€?´í•  ê²ƒì´??ë°˜ë°œ?˜ê³  ?ˆìŠµ?ˆë‹¤. ê·¸ëŸ¬??ê³¼ê±° ê°œì¸?•ë³´ë³´í˜¸ë²?GDPR)??ê·¸ë¬?? ??ë²•ì•ˆ ??‹œ 'ë¸Œë¤¼?€ ?¨ê³¼'ë¥??¼ìœ¼ì¼??¥í›„ ë¯¸êµ­ê³??„ì‹œ??êµ???¤ì˜ AI ?…ë²•???¬ì‹¤?ì˜ ?œì? ê°€?´ë“œ?¼ì¸ ??• ????ê²ƒìœ¼ë¡??„ë§?©ë‹ˆ??" },
    program_l2: "AI Act",
    category_l1: "policy",
    company: "EU",
    url: "https://europarl.europa.eu",
    created_at: new Date("2024-03-13T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 31,
    title: { en: "GitHub Copilot exits technical preview, officially launches", ko: "GitHub Copilot ?•ì‹ ì¶œì‹œ, AI ì½”ë”© ?œë? ê°œë§‰" },
    summary: { en: "The world's most widely adopted AI developer tool becomes generally available.", ko: "?¸ê³„ ìµœì´ˆë¡??ìš©?”ëœ AI ì½”ë”© ë³´ì¡° ?„êµ¬ ê¹ƒí—ˆë¸?ì½”íŒŒ?¼ëŸ¿??ëª¨ë“  ê°œë°œ?ì—ê²??•ì‹ ì¶œì‹œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## AI Pair Programmer Enters the Mainstream\nGitHub has officially launched Copilot, ending its technical preview and making the AI pair programmer available to all developers worldwide.\n\n## Transforming the Developer Workflow\nPowered by OpenAI's Codex model, Copilot analyzes the context of the code being written and suggests entire lines or functions in real time. According to GitHub's research, developers using Copilot code up to 55% faster and report significantly higher job satisfaction. While it acts as a highly advanced autocomplete, its ability to generate boilerplate code and unit tests from simple comments has revolutionized daily programming tasks.\n\n## Licensing and Open Source Controversies\nDespite its success, Copilot faces ongoing legal scrutiny regarding its training data, which includes billions of lines of public code, raising complex questions about open-source licensing and fair use.", ko: "## ?“° AI ?˜ì–´ ?„ë¡œê·¸ë˜ë°??œë???ë³¸ê²© ê°œë§‰\n**ë§ˆì´?¬ë¡œ?Œí”„??Microsoft)** ?°í•˜??**GitHub(ê¹ƒí—ˆë¸?**ê°€ ??1?„ê°„??ë² í? ?ŒìŠ¤?¸ë? ë§ˆì¹˜ê³?AI ì½”ë”© ?´ì‹œ?¤í„´?¸ì¸ **'GitHub Copilot(ì½”íŒŒ?¼ëŸ¿)'**?????¸ê³„ ëª¨ë“  ê°œë°œ?ë“¤?ê²Œ ?•ì‹ ì¶œì‹œ?ˆìŠµ?ˆë‹¤.\n\n## ?“– ê°œë°œ???ì‚°?±ì„ 55% ?Œì–´?¬ë¦° ?ì‹ \nOpenAI??ì½”ë±??Codex) ëª¨ë¸??ê¸°ë°˜?¼ë¡œ êµ¬ë™?˜ëŠ” ì½”íŒŒ?¼ëŸ¿?€ ê°œë°œ?ê? ?‘ì„± ì¤‘ì¸ ì½”ë“œ??ë¬¸ë§¥???¤ì‹œê°„ìœ¼ë¡??Œì•…?˜ì—¬ ?¤ìŒ ì¤„ì´???„ì²´ ?¨ìˆ˜ë¥??ë™?¼ë¡œ ?œì•ˆ?©ë‹ˆ?? \n?¨ìˆœ???ë™?„ì„±???˜ì–´, ì£¼ì„?¼ë¡œ ?í•˜??ê¸°ëŠ¥???¤ëª…?˜ë©´ ê·¸ì— ë§ëŠ” ì½”ë“œë¥?ì¦‰ì„?ì„œ ì§œì£¼??ë§ˆë²• ê°™ì? ê²½í—˜???œê³µ?©ë‹ˆ?? ê¹ƒí—ˆë¸?ì¸¡ì˜ ê³µì‹ ?°êµ¬???°ë¥´ë©?ì½”íŒŒ?¼ëŸ¿???¬ìš©?˜ëŠ” ê°œë°œ?ëŠ” ?¬ìš©?˜ì? ?ŠëŠ” ê°œë°œ?ë³´??ë¬´ë ¤ 55%??ë¹ ë¥´ê²??‘ì—…???„ìˆ˜?ˆìœ¼ë©? ë°˜ë³µ?ì¸ ë³´ì¼?¬í”Œ?ˆì´??ì½”ë“œ ?‘ì„±??ê³ í†µ?ì„œ ?´ë°©?˜ì–´ ì§ì—… ë§Œì¡±?„ê? ?¬ê²Œ ?ìŠ¹??ê²ƒìœ¼ë¡??˜í??¬ìŠµ?ˆë‹¤.\n\n## ?“Œ ?¤í”ˆ?ŒìŠ¤ ì§„ì˜???€?‘ê¶Œ ?¼ë?\n?´ëŸ¬??ê¸°ìˆ ??ì°¬ì‚¬ ?´ë©´?ëŠ”, ì½”íŒŒ?¼ëŸ¿???™ìŠµ???˜ì‹­??ì¤„ì˜ ?¼ë¸”ë¦??¤í”ˆ?ŒìŠ¤ ì½”ë“œ???€???€?‘ê¶Œ ?¼ë?(GPL ?¼ì´? ìŠ¤ ?„ë°˜ ????ë¶ˆê±°ì§€ë©??„ì¬ ?€ê·œëª¨ ì§‘ë‹¨ ?Œì†¡??ì§„í–‰ ì¤‘ì´?¼ëŠ” ?´ë‘???´ë©´??ì¡´ì¬?©ë‹ˆ??" },
    program_l2: "Copilot",
    category_l1: "code",
    company: "Microsoft",
    url: "https://github.com/features/copilot",
    created_at: new Date("2022-06-21T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 32,
    title: { en: "OpenAI launches GPT-4, leaps toward multimodal capabilities", ko: "OpenAI, ?•ë„??ì¶”ë¡  ?¥ë ¥??ë©€?°ëª¨??'GPT-4' ?„ê²© ì¶œì‹œ" },
    summary: { en: "GPT-4 aces the bar exam and introduces image understanding.", ko: "ë¯¸êµ­ ë³€?¸ì‚¬ ?œí—˜???ìœ„ 10% ?±ì ?¼ë¡œ ?µê³¼?˜ê³  ?´ë?ì§€ë¥??´í•´?˜ëŠ” GPT-4ê°€ ê³µê°œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## A Major Leap in AI Reasoning\nOpenAI has released GPT-4, its latest and most capable AI model, setting a new benchmark for deep learning and language processing.\n\n## Acing Human Exams and Understanding Images\nThe model represents a significant evolution over its predecessor, GPT-3.5. GPT-4 is multimodal, meaning it can process and analyze both text and image inputs to generate text outputs. It has demonstrated remarkable reasoning capabilities, passing the Uniform Bar Exam with a score in the top 10% of test takers, compared to GPT-3.5 which scored in the bottom 10%. It also exhibits improved safety guardrails, being 82% less likely to respond to requests for disallowed content.\n\n## Widespread Industry Adoption\nImmediately following the launch, companies like Duolingo, Stripe, and Morgan Stanley announced deep integrations of GPT-4 into their core products.", ko: "## ?“° ì´ˆê±°?€ AI ì¶”ë¡  ?¥ë ¥???ˆë¡œ???•ì \n**OpenAI**ê°€ ê¸°ì¡´ GPT-3.5???±ëŠ¥??ëª¨ë“  ë©´ì—???•ë„?˜ëŠ” ì°¨ì„¸?€ ?€ê·œëª¨ ?¸ì–´ ëª¨ë¸??**'GPT-4'**ë¥?ê³µì‹ ì¶œì‹œ?˜ë©° ????ë²??¸ìƒ???€?¼ê²Œ ?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?ìœ„ 10%ë¡?ë³€?¸ì‚¬ ?œí—˜???µê³¼??ì§€??n?¨ìˆœ??ë§ì„ ?˜í•˜??ê²ƒì„ ?˜ì–´, GPT-4??ë§¤ìš° ë³µì¡???¼ë¦¬??ì¶”ë¡ ??ê°€?¥í•´ì¡ŒìŠµ?ˆë‹¤. ë¯¸êµ­ ëª¨ì˜ ë³€?¸ì‚¬ ?œí—˜(Bar Exam)?ì„œ ?˜ìœ„ 10%??ë¨¸ë¬¼?€???´ì „ ëª¨ë¸ê³??¬ë¦¬, GPT-4???¨ìˆ¨???ìœ„ 10%???±ì ?¼ë¡œ ?©ê²©? ì„ ê°€ë³ê²Œ ?µê³¼?ˆìŠµ?ˆë‹¤.\nê°€???ˆì— ?„ëŠ” ë³€?”ëŠ” **ë©€?°ëª¨??Multimodal)** ê¸°ëŠ¥???„ì…?…ë‹ˆ?? ?´ì œ ?ìŠ¤?¸ë¿ë§??„ë‹ˆ???´ë?ì§€ë¥??…ë ¥ë°›ì•„ ë¶„ì„?????ˆìŠµ?ˆë‹¤. ë°€ê°€ë£? ê³„ë?, ë²„í„° ?¬ì§„??ë³´ì—¬ì£¼ë©´ '?¬ì??´í¬???€?Œì„ ë§Œë“¤ ???ˆë‹¤'ê³??ˆì‹œ?¼ë? ?œì•ˆ?˜ë©°, ?…í‚¨???ìœ¼ë¡??€ì¶?ê·¸ë¦° ?¹ì‚¬?´íŠ¸ ?¤ì?ì¹˜ë? ê³§ë°”ë¡??‘ë™?˜ëŠ” HTML/CSS ì½”ë“œë¡?ë³€?˜í•´ ?´ëŠ” ê²½ì´ë¡œìš´ ?œì—°??? ë³´?€?µë‹ˆ??\n\n## ?“Œ ê°•ë ¥?´ì§„ ?ˆì „ë§ê³¼ ?°ì—…ê³??„ì…\nOpenAI???´ë²ˆ ëª¨ë¸???…ì˜?ì¸ ì§ˆë¬¸???µë????•ë¥ ??82%??ì¤„ì—¬ ?¤ë¦¬???ˆì „ë§ì„ ?¬ê²Œ ê°•í™”?ˆë‹¤ê³?ë°í˜”?¼ë©°, ë°œí‘œ ì§í›„ ?€?¤ë§ê³?Duolingo), ?¤íŠ¸?¼ì´??Stripe) ??ê¸€ë¡œë²Œ ê¸°ì—…?¤ì´ ?ë‹¤?¬ì–´ GPT-4 ?„ì…??ë°œí‘œ?ˆìŠµ?ˆë‹¤." },
    program_l2: "GPT-4",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com/research/gpt-4",
    created_at: new Date("2023-03-14T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 33,
    title: { en: "Stability AI releases Stable Diffusion to the public", ko: "Stability AI, ?´ë?ì§€ ?ì„± AI 'Stable Diffusion' ?¤í”ˆ?ŒìŠ¤ ê³µê°œ" },
    summary: { en: "High-quality text-to-image generation goes open source and runs locally.", ko: "?¼ë°˜ PC?ì„œ??êµ¬ë™?˜ëŠ” ê³ í’ˆì§??´ë?ì§€ ?ì„± AI ëª¨ë¸??ë¬´ë£Œ ?¤í”ˆ?ŒìŠ¤ë¡??€ë¦¬ë©° ???Œì¥???¼ìœ¼ì¼°ìŠµ?ˆë‹¤." },
    content_body: { en: "## The Democratization of AI Art\nStability AI has open-sourced Stable Diffusion, a powerful text-to-image AI model, making it freely available to the public.\n\n## Running AI on Consumer Hardware\nUnlike closed systems such as Midjourney or DALL-E 2, Stable Diffusion's weights are completely open. Its breakthrough lies in its efficiency?”it can run on consumer-grade GPUs with as little as 8GB of VRAM, allowing anyone to generate stunning, photorealistic artwork entirely locally without internet access. This has spawned a massive community of developers who have rapidly created plugins, fine-tuned models, and user interfaces (like Automatic1111) to expand the model's capabilities.\n\n## The Dark Side of Uncensored AI\nThe open nature of the model has also sparked intense controversy, as malicious users quickly removed safety filters to generate deepfakes and non-consensual explicit images.", ko: "## ?“° ?ì„±??AI ?ˆìˆ ??ì§„ì •??ë¯¼ì£¼??n?êµ­??AI ?¤í??¸ì—… **Stability AI(?¤í…Œë¹Œë¦¬??AI)**ê°€ ê³ í’ˆì§ˆì˜ ?´ë?ì§€ë¥??ì„±???´ëŠ” ?¥ëŸ¬??ëª¨ë¸ **'Stable Diffusion(?¤í…Œ?´ë¸” ?”í“¨??'**???„ì „???¤í”ˆ?ŒìŠ¤ë¡?ë¬´ë£Œ ê³µê°œ?˜ë©° ?…ê³„???„ì²­???Œì¥???¼ìœ¼ì¼°ìŠµ?ˆë‹¤.\n\n## ?“– ??ë°?PC?ì„œ ?Œì•„ê°€??ê³ í’ˆì§??´ë?ì§€ AI\nDALL-E(?¬ë¦¬)??Midjourney(ë¯¸ë“œ?€???€ ê°™ì? ê¸°ì¡´ ëª¨ë¸?¤ì´ ?ì‡„?ì¸ ?´ë¼?°ë“œ ? ë£Œ ?œë¹„?¤ë¡œë§??œê³µ?˜ì—ˆ??ê²ƒê³¼ ?¬ë¦¬, ?¤í…Œ?´ë¸” ?”í“¨?„ì? ê°€ì¤‘ì¹˜(Weights) ?Œì¼???µì§¸ë¡??€?¸ìŠµ?ˆë‹¤. \në¬´ì—‡ë³´ë‹¤ ??ëª¨ë¸?€ ìµœì ?”ê? ?€?¼ìš¸ ?•ë„ë¡????˜ì–´ ?ˆì–´, ê³ ê????œë²„ê°€ ?„ë‹Œ VRAM 8GB ?˜ì????¼ë°˜?ì¸ ?Œë¹„?ìš© ê·¸ë˜?½ì¹´??PC)?ì„œ???¸í„°???°ê²° ?†ì´ ?´ë?ì§€ë¥??ì„±?????ˆìŠµ?ˆë‹¤. ?´ë¡œ ?¸í•´ ?˜ë§?€ ???¸ê³„ ê°œë°œ?ë“¤??ëª¨ì—¬ ëª¨ë¸???¹ì • ?”í’?¼ë¡œ ë¯¸ì„¸ì¡°ì •(Fine-tuning)?˜ê±°??ì»¨íŠ¸ë¡¤ë„·(ControlNet) ê°™ì? ?•êµ???¬ì¦ˆ ?œì–´ ?ŒëŸ¬ê·¸ì¸?¤ì„ ?Ÿì•„?´ë©° ê·¸ë“¤ë§Œì˜ ê±°ë????ìƒ???íƒœê³„ë? êµ¬ì¶•?˜ê³  ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ?ˆì „ë§?ë¶€?¬ì— ?°ë¥¸ ë¶€?‘ìš© ?¼ë?\nê·¸ëŸ¬???„êµ¬???œí•œ ?†ì´ ë¡œì»¬?ì„œ ëª¨ë¸??ì¡°ì‘?????ˆë‹¤???¤í”ˆ?ŒìŠ¤???¹ì„±?? ?ˆì „ ?„í„°ê°€ ?´ì œ??ë²„ì „??? í¬?˜ì–´ ? ëª…?¸ì˜ ?¥í˜?´í¬???Œë?ë¬???? í•´ ì½˜í…ì¸ ê? ë¬´ë¶„ë³„í•˜ê²??ì„±?˜ëŠ” ?´ë‘??ë¶€?‘ìš©???¨ê»˜ ?³ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Stable Diffusion",
    category_l1: "image",
    company: "Stability AI",
    url: "https://stability.ai",
    created_at: new Date("2022-08-22T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 34,
    title: { en: "Runway introduces Gen-1 for video-to-video AI generation", ko: "Runway, ?ëª…?ì¸ ë¹„ë””????ë¹„ë””??AI 'Gen-1' ê³µê°œ" },
    summary: { en: "Transform existing videos into fully stylized new content via text prompts.", ko: "?¤ë§ˆ?¸í°?¼ë¡œ ?€ì¶?ì°ì? ?ìƒ???„ë²½??3D ?´ë ˆ??? ë‹ˆë©”ì´?˜ì´???¤ì‚¬ ?í™”ë¡?ë°”ê¿”ì£¼ëŠ” Gen-1??ë°œí‘œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## Transforming the Video Canvas\nRunway, the AI startup behind the foundational research for Stable Diffusion, has announced Gen-1, a revolutionary video-to-video AI model.\n\n## Stylizing Reality with Text\nGen-1 allows users to take existing video footage and apply new visual styles simply by typing text prompts or uploading reference images. In its showcase, a poorly lit video of a person holding a book was instantly transformed into a cinematic render of a futuristic robot holding a tablet. This preserves the original motion and depth mapping while completely redrawing the aesthetic, heavily reducing the time required for traditional rotoscoping and VFX work.\n\n## A Stepping Stone to Full Generation\nWhile it requires source footage to work, Gen-1 is widely considered a critical milestone that paves the way for fully generative text-to-video systems.", ko: "## ?“° ?ìƒ ?œì‘ ?Œì´?„ë¼?¸ì˜ ?ëª…\n?¤í…Œ?´ë¸” ?”í“¨??ê³µë™ ê°œë°œ?¬ë¡œ ? ëª…??AI ?ìƒ ?¤í??¸ì—… **Runway(?°ì›¨??**ê°€ ?ìŠ¤???„ë¡¬?„íŠ¸ë¥??µí•´ ê¸°ì¡´ ?ìƒ???¤í??¼ì„ ?„ì „??ë°”ê¿”ë²„ë¦¬??ë¹„ë””????ë¹„ë””??Video-to-Video) AI ëª¨ë¸ **'Gen-1'**??ìµœì´ˆë¡?ê³µê°œ?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?ìŠ¤????ì¤„ë¡œ ?„ì‹¤???í™”ë¡?ë°”ê¾¸??nGen-1?€ ?¬ìš©?ê? ?¤ë§ˆ?¸í°?¼ë¡œ ?€ì¶?ì´¬ì˜??ë¹„ë””?¤ì— ?ˆë¡œ??ì§ˆê°ê³?ë¯¸í•™???§ì”Œ?ë‹ˆ?? \n?ˆë? ?¤ì–´, ê³¨íŒì§€ë¡??€ì¶?ë§Œë“  ê±´ë¬¼ ëª¨í˜•??ì°ì? ??'ë¯¸ë˜ì§€?¥ì ???¼ê°„ ?„ì‹œ ë°°ê²½'?´ë¼ê³??„ë¡¬?„íŠ¸ë¥??…ë ¥?˜ë©´, ?¸ë¬¼ê³??¬ë¬¼???ë˜ ?€ì§ì„(ëª¨ì…˜)ê³??ê·¼ê°ì? ê·¸ë?ë¡?? ì???ì±??„ë²½?˜ê²Œ ?Œë”ë§???? ë¦¬?°ë“œ SF ?í™”?????¥ë©´?¼ë¡œ ?ìƒ???ˆë°”ê¿ˆí•©?ˆë‹¤. ? ë‹ˆë©”ì´???œì‘?´ë‚˜ ?¹ìˆ˜?¨ê³¼(VFX) ?‘ì—… ?????„ë ˆ?„ì”© ?§ê·¸ë¦¬ë˜ ë¡œí† ?¤ì½”??Rotoscoping) ?‘ì—… ?œê°„??ë¹„ì•½?ìœ¼ë¡??¨ì¶•?œí‚¬ ???ˆê²Œ ??ê²ƒì…?ˆë‹¤.\n\n## ?“Œ ë¹„ë””???ì„± AI ?œë????´ì •??nGen-1?€ ë¬´ì—??? ë? ì°½ì¡°?˜ëŠ” ë°©ì‹???„ë‹ˆ???ë³¸ ?ìƒ??ë°˜ë“œ???„ìš”?˜ë‹¤???œê³„ê°€ ?ˆì?ë§? ?…ê³„ ?„ë¬¸ê°€?¤ì? ?´ë? 'ë¹„ë””???ì„± AIê°€ ë§ˆì¹¨???ìš©?”ì˜ ë¬¸í„±???˜ì? ê²°ì •???œê°„'?¼ë¡œ ?‰ê??˜ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Gen-1",
    category_l1: "video",
    company: "Runway",
    url: "https://runwayml.com",
    created_at: new Date("2023-02-06T00:00:00Z").toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 35,
    title: { en: "ElevenLabs launches hyper-realistic AI voice cloning", ko: "ElevenLabs, ëª©ì†Œë¦??„ë²½ ë³µì œ AI ?œë¹„???°ì¹­" },
    summary: { en: "Generate lifelike speech and clone voices with just a minute of audio.", ko: "??1ë¶„ì˜ ?Œì„± ?˜í”Œë§Œìœ¼ë¡?ê°ì •ê³??µì–‘ê¹Œì? ?„ë²½?˜ê²Œ ?°ë¼?˜ëŠ” ?¤ë””??AI ê¸°ìˆ ???ìš©?”ë˜?ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## Breaking the Uncanny Valley of Audio\nAI voice startup ElevenLabs has publicly launched its platform, offering the most realistic text-to-speech and voice cloning software available on the market.\n\n## Cloning Voices with Deep Emotion\nUnlike traditional robotic TTS systems, the ElevenLabs model understands the context of the text and applies natural pauses, breaths, and emotional inflections. Users can clone a specific person's voice by uploading just 60 seconds of clean audio. The resulting clone can read audiobooks, news articles, or scripts with an intonation that is virtually indistinguishable from a human voice actor.\n\n## Misuse and Safety Measures\nWithin days of launch, trolls used the platform to clone the voices of politicians and celebrities saying offensive remarks. ElevenLabs immediately had to implement strict identity verification safeguards to combat audio deepfakes.", ko: "## ?“° ?„ë²½???¸ê³µ ?Œì„±, ë¶ˆì¾Œ??ê³¨ì§œê¸°ë? ?˜ë‹¤\n?êµ­???¸ê³µì§€???¤ë””???¤í??¸ì—… **ElevenLabs(?¼ë ˆë¸ë©??**ê°€ ?ìŠ¤?¸ë? ?¬ëŒ??ëª©ì†Œë¦¬ë¡œ ?½ì–´ì£¼ëŠ” TTS(Text-to-Speech) ë°??Œì„± ë³µì œ(Voice Cloning) ?Œë«?¼ì„ ?€ì¤‘ì—ê²?ê³µì‹ ?°ì¹­?ˆìŠµ?ˆë‹¤.\n\n## ?“– 1ë¶„ì˜ ?˜í”Œë¡?ê°ì •ê¹Œì? ë³µì œ?˜ë‹¤\n??ëª¨ë¸??ê°€????ì°¨ë³„?ì? ?ìŠ¤?¸ì˜ ë¬¸ë§¥???¤ìŠ¤ë¡??Œì•…?˜ì—¬ 'ê°ì •'???´ì•„?¸ë‹¤??ê²ƒì…?ˆë‹¤. ë¬¸ì¥???ë‚  ???¨ì†Œë¦¬ë? ?´ê±°?? ê¸°ìœ ?´ìš©?ì„œ???¤ëœ¬ ?µì–‘?¼ë¡œ, ?¬í”ˆ ?´ìš©?ì„œ??ì°¨ë¶„???¤ìœ¼ë¡??ì—°?¤ëŸ¬???„ê¸‰ ì¡°ì ˆ??ë³´ì—¬ì¤ë‹ˆ?? \n?”ìš± ?€?¼ìš´ ê²ƒì? **'?Œì„± ë³µì œ'** ê¸°ëŠ¥?…ë‹ˆ?? ? ëª…?¸ì´??ë³¸ì¸??ê¹”ë”???Œì„± ?˜í”Œ ??1ë¶„ì§œë¦¬ë§Œ ?…ë¡œ?œí•˜ë©? AIê°€ ëª©ì†Œë¦¬ì˜ ?? ë°œìŒ ?µê?, ?¹ìœ ???µì–‘???„ë²½?˜ê²Œ ?™ìŠµ?˜ì—¬ ?´ë–¤ ?ìŠ¤?¸ë“  ê·??¬ëŒ??ëª©ì†Œë¦¬ë¡œ ?ì—°?¤ëŸ½ê²??½ì–´ì¤ë‹ˆ?? ?´ë¡œ ?¸í•´ ?¤ë””?¤ë¶ ?œì¥ê³?ê²Œì„ ?”ë¹™ ?°ì—…???„ì²­???€ê²©ì„ ë°›ì„ ê²ƒìœ¼ë¡??„ë§?˜ê³  ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ë¹ ë¥´ê²??•ì‚°?˜ëŠ” ?¤ë””???¥í˜?´í¬ ?¼ë?\nì¶œì‹œ ì§í›„ ë©°ì¹  ë§Œì— ?…ì˜?ì¸ ?¬ìš©?ë“¤??ì¡?ë°”ì´???€?µë ¹?´ë‚˜ ? ëª… ë°°ìš°??ëª©ì†Œë¦¬ë? ë³µì œ?˜ì—¬ ?ì˜¤ ë°œì–¸?´ë‚˜ ?¬ê¸°???…ìš©?˜ëŠ” ?¬íƒœê°€ ë°œìƒ?ˆìœ¼ë©? ?¼ë ˆë¸ë©?¤ëŠ” ì¦‰ê°?ìœ¼ë¡?? ë£Œ ê²°ì œ?ì— ?œí•´?œë§Œ ë³µì œ ê¸°ëŠ¥???ˆìš©?˜ëŠ” ?ˆì „?¥ì¹˜ë¥??œë‘˜???„ì…?´ì•¼ ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Speech Synthesis",
    category_l1: "audio",
    company: "ElevenLabs",
    url: "https://elevenlabs.io",
    created_at: new Date("2023-01-23T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 36,
    title: { en: "Perplexity AI raises massive funding, threatens Google Search", ko: "Perplexity AI ?€ê·œëª¨ ?¬ì ? ì¹˜, êµ¬ê? ê²€?‰ì— ?•ë©´ ?„ì „" },
    summary: { en: "The conversational search engine gains massive traction and unicorn status.", ko: "ì¶œì²˜ê°€ ëª…í™•???€?”í˜• ê²€???”ì§„ ?¼í”Œ?‰ì‹œ?°ê? ?µë§Œ?¥ì?¤ì˜ ?¬ìë¥?ë°›ìœ¼ë©?? ë‹ˆì½˜ìœ¼ë¡??±ê·¹?ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## The Rise of Conversational Search\nPerplexity AI, a startup offering an AI-powered conversational search engine, has reached unicorn status after securing a massive funding round backed by Jeff Bezos and Nvidia.\n\n## Answering, Not Linking\nInstead of providing a list of blue links like Google, Perplexity acts as an answer engine. When a user asks a question, it instantly scours the web, reads multiple relevant sources in real-time, and synthesizes a direct, comprehensive answer complete with inline footnote citations. This fundamentally solves the 'hallucination' problem of standard LLMs by grounding responses in verifiable, up-to-date facts. Its clean, ad-free interface has quickly made it a favorite among researchers and developers.\n\n## The New Search Paradigm\nThe rapid growth of Perplexity suggests a massive shift in consumer behavior, forcing Google to scramble and accelerate its own AI Overview features.", ko: "## ?“° '?Œë???ë§í¬' ?œë???ì¢…ë§ ?ˆê³ \n?œí”„ ë² ì¡°???„ë§ˆì¡?ì°½ì—…???€ ?”ë¹„?”ì•„(NVIDIA) ??ê±°ë¬¼?¤ë¡œë¶€??7,360ë§??¬ëŸ¬???¬í•˜???€ê·œëª¨ ?¬ìë¥?? ì¹˜??**Perplexity AI(?¼í”Œ?‰ì‹œ??**ê°€ ?¨ìˆ¨??ê¸°ì—…ê°€ì¹?10???¬ëŸ¬ë¥??ŒíŒŒ?˜ë©° ? ë‹ˆì½?ê¸°ì—…?¼ë¡œ ?±ê·¹?ˆìŠµ?ˆë‹¤.\n\n## ?“– ê²€???€???”ì•½???œë¦½?ˆë‹¤\nêµ¬ê????¤ì›Œ??ê²€?????˜ë§?€ ?¹ì‚¬?´íŠ¸ 'ë§í¬'ë¥??˜ì—´?˜ëŠ” ë°©ì‹??ì·¨í•œ?¤ë©´, ?¼í”Œ?‰ì‹œ?°ëŠ” ì§ì ‘?ì¸ '?µë?'???œê³µ?˜ëŠ” ?€?”í˜• ê²€???”ì§„(Answer Engine)?…ë‹ˆ?? \n?¬ìš©?ê? ì§ˆë¬¸???˜ì?ë©? AIê°€ ?¤ì‹œê°„ìœ¼ë¡??˜ì‹­ ê°œì˜ ? ë¢°?????ˆëŠ” ìµœì‹  ??ë¬¸ì„œë¥??ìƒ‰?˜ê³  ?½ì–´?¤ì¸ ?? ?•ë³´ë¥?ì¢…í•©?˜ì—¬ ?˜ë‚˜???„ë²½???”ì•½ ê¸€ë¡??‘ì„±??ì¤ë‹ˆ?? ?¹íˆ ?µë???ëª¨ë“  ë¬¸ì¥ë§ˆë‹¤ ê°ì£¼(ì¶œì²˜ ë§í¬)ë¥??¬ì•„ì£¼ì–´ ê¸°ì¡´ ì±—GPT??ì¹˜ëª…?ì¸ ?¨ì ??'? ë£¨?œë„¤?´ì…˜(?˜ê° ?„ìƒ)'???Œë??˜ê²Œ ?µì œ?ˆìŠµ?ˆë‹¤. ê´‘ê³  ?˜ë‚˜ ?†ëŠ” ê¹”ë”???¸í„°?˜ì´???•ë¶„??ì§€?ì¸ê³??°êµ¬?ë“¤ ?¬ì´?ì„œ ??°œ?ì¸ ?…ì†Œë¬¸ì„ ?€ê³??ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ?”ë“¤ë¦¬ëŠ” êµ¬ê???ê²€???œêµ­\n?¼í”Œ?‰ì‹œ?°ì˜ ê¸‰ë??ì? ?¬ìš©?ë“¤?????´ìƒ ?•ë³´ ê²€?‰ì— ?œê°„????¹„?˜ê³  ?¶ì–´ ?˜ì? ?ŠëŠ”?¤ëŠ” ?¸ë Œ?œë? ì¦ëª…?ˆìœ¼ë©? 20?„ê°„ ì² ì˜¹?±ì´?ˆë˜ êµ¬ê???ê²€??ê´‘ê³  ?˜ìµ ëª¨ë¸??ì§ì ‘?ìœ¼ë¡??„í˜‘?˜ëŠ” ê°€????ê²½ìŸ?ë¡œ ì§€ëª©ë˜ê³??ˆìŠµ?ˆë‹¤." },
    program_l2: "Answer Engine",
    category_l1: "data",
    company: "Perplexity AI",
    url: "https://perplexity.ai",
    created_at: new Date("2024-01-04T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 37,
    title: { en: "AMD unveils MI300X AI accelerator to challenge Nvidia", ko: "AMD, ?”ë¹„?”ì•„ ?…ì  ê¹?ì°¨ì„¸?€ AI ì¹?'MI300X' ë°œí‘œ" },
    summary: { en: "AMD introduces its most advanced AI chip with a massive 192GB of memory.", ko: "192GB?¼ëŠ” ?„ì²­??ë©”ëª¨ë¦??©ëŸ‰???‘ì¬?˜ì—¬ ?”ë¹„?”ì•„ H100??ì§ì ‘ ê²¨ëƒ¥??AMD???ˆë¡œ??ê°€?ê¸°ê°€ ê³µê°œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## The AI Hardware War Intensifies\nAMD has officially unveiled the Instinct MI300X, its most advanced AI accelerator chip to date, aiming directly at Nvidia's dominance in the AI hardware market.\n\n## Massive Memory and Cost Efficiency\nThe standout feature of the MI300X is its staggering 192GB of HBM3 memory, which is more than double the memory capacity of Nvidia's flagship H100. This massive memory allows the chip to load entirely larger language models (such as an 80-billion parameter model) onto a single GPU, heavily reducing the need for complex and expensive multi-GPU networking. Tech giants like Meta and Microsoft immediately announced they would deploy the MI300X in their Azure clouds as a cost-effective alternative to Nvidia.\n\n## Challenging the CUDA Ecosystem\nWhile the hardware is formidable, AMD still faces the steep uphill battle of breaking through Nvidia's deeply entrenched CUDA software ecosystem.", ko: "## ?“° ?€??§ˆ???±ì¥, ?”ë“¤ë¦¬ëŠ” ?”ë¹„?”ì•„ ?…ì \në¯¸êµ­??ë°˜ë„ì²?ê¸°ì—… **AMD**ê°€ ?¹ë³„ ?´ë²¤?¸ë? ?´ê³ , ?„ì¬ ?¸ê³µì§€???˜ë“œ?¨ì–´ ?œì¥??90% ?´ìƒ ?…ì ?˜ê³  ?ˆëŠ” ?”ë¹„?”ì•„(NVIDIA)??H100???•ë©´?¼ë¡œ ê²¨ëƒ¥??ì°¨ì„¸?€ AI ê°€?ê¸° ì¹?**'Instinct MI300X'**ë¥??„ê²© ë°œí‘œ?ˆìŠµ?ˆë‹¤.\n\n## ?“– 192GB??ë§‰ê°•??ë©”ëª¨ë¦¬ë¡œ ?€??ëª¨ë¸ ?¥ì•…\nMI300X??ê°€??ë¬´ì„œ??ë¬´ê¸°??ë¬´ë ¤ **192GB???¬í•˜??HBM3(ê³ ë???­ ë©”ëª¨ë¦?**?…ë‹ˆ?? ?´ëŠ” ê²½ìŸ ëª¨ë¸???”ë¹„?”ì•„ H100(80GB)????ë°°ê? ?Œì© ?˜ëŠ” ?©ëŸ‰?…ë‹ˆ?? \n?´ëŸ¬??ê±°ë???ë©”ëª¨ë¦??•ë¶„??ê³¼ê±°?ëŠ” ì¹??¬ëŸ¬ ê°œë? ë³µì¡?˜ê²Œ ?°ê²°?´ì•¼ë§?êµ¬ë™?????ˆì—ˆ??800???Œë¼ë¯¸í„°(80B) ?¬ê¸°??ê±°ë? ?¸ì–´ ëª¨ë¸(LLM)?????˜ë‚˜??ì¹??„ì—???µì§¸ë¡??„ìš¸ ???ˆê²Œ ?˜ì—ˆ?µë‹ˆ?? ?´ëŠ” ?°ì´?°ì„¼???œë²„ êµ¬ì¶• ë¹„ìš©???ê¸°?ìœ¼ë¡???¶°ì£¼ë©°, ë°œí‘œ ?„ì¥?ì„œ ?¤í”ˆ?ŒìŠ¤ ëª¨ë¸???¤ì‹œê°„ìœ¼ë¡?ë§¤ë„?½ê²Œ êµ¬ë™?˜ëŠ” ?œì—°??ë³´ì—¬ì£¼ì–´ ë°•ìˆ˜ê°ˆì±„ë¥?ë°›ì•˜?µë‹ˆ?? ë§ˆì´?¬ë¡œ?Œí”„?? ë©”í?(Meta), ?¤ë¼????ì£¼ìš” ë¹…í…Œ??ê¸°ì—…?¤ì? ì¦‰ê°?ìœ¼ë¡?MI300Xë¥??€??êµ¬ë§¤?˜ì—¬ ?ì‚¬ ?´ë¼?°ë“œ???‘ì¬?˜ê² ?¤ê³  ? ì–¸?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ?˜ì–´?????? ?Œí”„?¸ì›¨???íƒœê³?n?˜ë“œ?¨ì–´ ?±ëŠ¥(ê¹¡ì„±?? ë©´ì—?œëŠ” ?”ë¹„?”ì•„ë¥??•ì‹¤???„í˜‘?˜ê³  ?ˆìœ¼?? ?˜ë§?€ ê°œë°œ?ë“¤???´ë? ?µìˆ™?´ì§„ ?”ë¹„?”ì•„??ì¿ ë‹¤(CUDA) ?Œí”„?¸ì›¨???íƒœê³„ë? ?€ì²´í•´?¼ë§Œ ì§„ì •???ìœ ??ëºê¸°ê°€ ê°€?¥í•˜?¤ëŠ” ê³¼ì œê°€ ?¨ì•„?ˆìŠµ?ˆë‹¤." },
    program_l2: "Instinct MI300X",
    category_l1: "hardware",
    company: "AMD",
    url: "https://amd.com",
    created_at: new Date("2023-12-06T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 38,
    title: { en: "Elon Musk's xAI launches Grok, a rebellious chatbot", ko: "?¼ë¡  ë¨¸ìŠ¤?¬ì˜ xAI, ë°˜í•­?ì´ê³?? ë¨¸?¬ìŠ¤??ì±—ë´‡ 'Grok' ê³µê°œ" },
    summary: { en: "Grok is designed with a sense of humor and real-time access to X data.", ko: "X(?¸ìœ„?????¤ì‹œê°??°ì´?°ë? ê¸°ë°˜?¼ë¡œ ?•ì¹˜???¬ë°”ë¦?PC)??ê±°ë??˜ê³  ?ë‹´???˜ì????¼ë¡  ë¨¸ìŠ¤?¬ì˜ ì±—ë´‡??ì¶œì‹œ?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## The Anti-Woke AI Arrives\nxAI, the artificial intelligence company founded by Elon Musk, has released its first commercial product: a conversational AI chatbot named Grok.\n\n## Real-Time Knowledge and Sarcasm\nInspired by 'The Hitchhiker's Guide to the Galaxy', Grok is explicitly designed to answer questions with a streak of rebel humor and sarcasm. It heavily differentiates itself from heavily filtered bots like ChatGPT by refusing to adhere to strict 'politically correct' guardrails. Most importantly, Grok has real-time access to the global data stream of the X (formerly Twitter) platform, allowing it to provide up-to-the-second news and hot takes on developing events that other models cannot see.\n\n## Premium Integration\nGrok is currently being rolled out exclusively to X Premium+ subscribers as part of Musk's effort to drive subscription revenue on the social media platform.", ko: "## ?“° '?•ì¹˜???¬ë°”ë¦???ê±°ë??˜ëŠ” ê´´ì§œ AI???„ìƒ\n?¼ë¡  ë¨¸ìŠ¤??Elon Musk)ê°€ ?¤ë¦½???¸ê³µì§€???¤í??¸ì—… **xAI**ê°€ ê¸°ì¡´???„ìˆ™??ì±—ë´‡?¤ê³¼ ì°¨ë³„?”ë˜??ì²?ë²ˆì§¸ ?ìš© ?€?”í˜• ëª¨ë¸ **'Grok(ê·¸ë¡)'**???€ì¤‘ì— ê³µê°œ?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?¤ì‹œê°?X(?¸ìœ„?? ?°ì´?°ì? ê±°ì¹¨?†ëŠ” ?…ë‹´\nSF ?Œì„¤ '?€?˜ìˆ˜ë¥??¬í–‰?˜ëŠ” ?ˆì¹˜?˜ì´ì»¤ë? ?„í•œ ?ˆë‚´???ì„œ ?ê°??ë°›ì•„ ?œì‘??Grok?€ ë§¤ìš° ?…íŠ¹???±ê²©??ì§€?”ìŠµ?ˆë‹¤. ChatGPT??Claudeê°€ ?ˆì „ ?„í„°(Guardrails)ë¡??¸í•´ ?¼ìŸ?ì¸ ì§ˆë¬¸???€?µì„ ?Œí”¼?˜ëŠ” ë°˜ë©´, Grok?€ ?•ì¹˜???¬ë°”ë¦?PC)??ê±°ë??˜ê³  ?¤ì†Œ ê±°ì¹ ê³?? ë¨¸?¬ìŠ¤?˜ë©° ë¹„ê¼¬????•œ(Sarcasm) ë§íˆ¬ë¡??µë????˜ì§‘?ˆë‹¤.\nê¸°ìˆ ?ìœ¼ë¡?ê°€??ê°•ë ¥??ë¬´ê¸°??X(êµ??¸ìœ„?? ?Œë«?¼ì˜ ë°©ë???ê¸€ë¡œë²Œ ?¸ìœ— ?¤íŠ¸ë¦¼ì„ ?¤ì‹œê°„ìœ¼ë¡??½ì–´?¤ì¸?¤ëŠ” ?ì…?ˆë‹¤. ?´ì œ ?°ì§„ ë°?Meme)?´ë‚˜ 1ë¶??„ì— ?°ì§„ ?ë³´ ?¸ë Œ?œì— ?€??ì§ˆë¬¸?˜ë©´, ?¤ë¥¸ AI ëª¨ë¸?¤ì? ?œì°¨ ?Œë¬¸???€?µí•˜ì§€ ëª»í•˜??ë°˜ë©´ Grok?€ ?í™©???•í™•?˜ê²Œ ?Œì•…?˜ê³  ?”ì•½??ì¤ë‹ˆ??\n\n## ?“Œ X ?Œë«?¼ê³¼???˜ìµ??ê²°í•©\nGrok?€ ?„ì¬ ?…ì?ì¸ ?±ìœ¼ë¡?ì¶œì‹œ?˜ì? ?Šê³  X(?¸ìœ„????? ë£Œ êµ¬ë… ?œë¹„?¤ì¸ 'Premium+' ê°€?…ì?¤ì—ê²Œë§Œ ?…ì ?ìœ¼ë¡??œê³µ?˜ë©°, ë¨¸ìŠ¤?¬ì˜ ?Œë«???˜ìµ???„ëµ???µì‹¬ ë¬´ê¸°ë¡??œìš©?˜ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Grok",
    category_l1: "startup",
    company: "xAI",
    url: "https://x.ai",
    created_at: new Date("2023-11-04T00:00:00Z").toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 39,
    title: { en: "NYT sues OpenAI and Microsoft for copyright infringement", ko: "?´ìš•?€?„ìŠ¤(NYT), OpenAI?€ MS ?ë?ë¡??€ê·œëª¨ ?€?‘ê¶Œ ?Œì†¡ ?œê¸°" },
    summary: { en: "A landmark lawsuit threatening the core data pipeline of generative AI.", ko: "?ì‚¬???˜ë°±ë§?ê±´ì˜ ê¸°ì‚¬ê°€ ?ˆê? ?†ì´ AI ?™ìŠµ??ë¬´ë‹¨ ?„ìš©?˜ì—ˆ?¤ë©° ?¸ë¡ ??ìµœì´ˆë¡?ê±°ì•¡???€?‘ê¶Œ ì¹¨í•´ ?Œì†¡???œê¸°?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## A Legal Earthquake in AI\nThe New York Times has filed a massive federal lawsuit against OpenAI and Microsoft, alleging extensive copyright infringement in the training of generative AI models like ChatGPT.\n\n## Billions at Stake over Scraped Data\nThe lawsuit claims that OpenAI unlawfully scraped and ingested millions of copyrighted NYT articles to build its models. The Times provided examples where ChatGPT spit out long, verbatim excerpts from its paywalled articles, essentially creating a free substitute for the newspaper. The NYT is seeking billions of dollars in statutory and actual damages and is demanding the outright destruction of any AI models that were trained using their copyrighted material.\n\n## The Fair Use Debate\nOpenAI argues that training AI models on publicly available internet data constitutes 'fair use' under US law. The outcome of this landmark case could fundamentally alter how all AI companies source their training data.", ko: "## ?“° ?ì„±??AI ?íƒœê³„ë? ?¤í”???¸ê¸°???Œì†¡\në¯¸êµ­??ìµœë? ?¼ê°„ì§€ **?´ìš•?€?„ìŠ¤(NYT)**ê°€ ì±—GPT ê°œë°œ?¬ì¸ **OpenAI**?€ ì£¼ìš” ?¬ì?ì¸ **ë§ˆì´?¬ë¡œ?Œí”„??MS)**ë¥??ë?ë¡??˜ì‹­???¬ëŸ¬ ê·œëª¨??ë§‰ë????€?‘ê¶Œ ì¹¨í•´ ?Œì†¡???´ìš• ?°ë°©ë²•ì›???œê¸°?˜ë©° ?„ë©´?„ì— ?Œì…?ˆìŠµ?ˆë‹¤.\n\n## ?“– 'ë¬´ë‹¨ ?„ìš©' vs 'ê³µì • ?´ìš©'???½íŒ½???€ë¦?n?´ìš•?€?„ìŠ¤???Œì¥?ì„œ '?´ë“¤???ˆê???ë³´ìƒ ?†ì´ ?ì‚¬???„ë¦¬ë¯¸ì—„ ê¸°ì‚¬ ?˜ë°±ë§?ê±´ì„ ë¬´ë‹¨?¼ë¡œ ?¬ë¡¤ë§?Scraping)?˜ì—¬ LLM???™ìŠµ?œí‚¤?????¬ìš©?ˆë‹¤'ê³?ê°•ë ¥??ì£¼ì¥?ˆìŠµ?ˆë‹¤. ì¦ê±° ?ë£Œë¡?ì±—GPTê°€ ? ë£Œ ?¥ë§‰(Paywall) ?¤ì— ?ˆëŠ” NYT???…ì  ?ì‚¬ ë³´ë„ ê¸°ì‚¬ë¥?? ì”¨ ?˜ë‚˜ ?€ë¦¬ì? ?Šê³  ê·¸ë?ë¡?ë±‰ì–´?´ëŠ” ?”ë©´???œì¶œ?ˆìœ¼ë©? ?´ëŠ” ?ì‚¬??ë¹„ì¦ˆ?ˆìŠ¤ ëª¨ë¸??ì§ì ‘?ìœ¼ë¡??„í˜‘?˜ëŠ” ?‰ìœ„?¼ê³  ë¹„íŒ?ˆìŠµ?ˆë‹¤.\n?´ìš•?€?„ìŠ¤??ì²œë¬¸?™ì ??ê¸ˆì „???í•´ë°°ìƒë¿ë§Œ ?„ë‹ˆ?? ?ì‚¬???°ì´?°ê? ?¬í•¨?˜ì–´ ?™ìŠµ??ëª¨ë“  AI ëª¨ë¸(GPT-4 ?????„ë©´?ì¸ '?ê¸°'ê¹Œì? ?”êµ¬?˜ê³  ?˜ì„°?µë‹ˆ?? \n\n## ?“Œ ë²•ì  ë¶ˆí™•?¤ì„±??ë¹ ì§„ ?¤ë¦¬ì½˜ë°¸ë¦?nOpenAI ì¸¡ì? ?¼ë¸”ë¦????°ì´?°ë? ?™ìŠµ?˜ëŠ” ê²ƒì? ë¯¸êµ­ ?€?‘ê¶Œë²•ìƒ 'ê³µì • ?´ìš©(Fair Use)'???´ë‹¹?œë‹¤ê³?ë§ì„œê³??ˆìœ¼?? ?´ë²ˆ ?Œì†¡???ê²° ê²°ê³¼???°ë¼ ???¸ê³„ ?¸ê³µì§€???°ì—…???™ìŠµ ?°ì´???Œì´?„ë¼???„ì²´ê°€ ë¶ˆë²•?¼ë¡œ ê·œì •?????ˆì–´ ?…ê³„ê°€ ?¨ì„ ì£½ì´ê³?ê²°ê³¼ë¥?ì§€ì¼œë³´ê³??ˆìŠµ?ˆë‹¤." },
    program_l2: "Copyright Suit",
    category_l1: "policy",
    company: "OpenAI",
    url: "https://nyt.com",
    created_at: new Date("2023-12-27T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 40,
    title: { en: "Google broadly releases Gemini Pro via API", ko: "êµ¬ê?, ê°œë°œ???„í•´ 'Gemini Pro' API ê¸€ë¡œë²Œ ê³µì‹ ë°°í¬" },
    summary: { en: "Developers can now build on Google's highly anticipated multimodal model.", ko: "ê°œë°œ?ë“¤??êµ¬ê???ë©€?°ëª¨???œë??˜ì´ë¥??±ì— ?°ë™?????ˆë„ë¡?API ?Œë«?¼ì„ ?Œê²©?ì¸ ê°€ê²©ì— ê³µê°œ?ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## Google Opens the Gates\nGoogle has officially opened API access to Gemini Pro, making its new flagship multimodal model available to external developers and enterprises.\n\n## Aggressive Pricing and Studio Tools\nThe Gemini Pro API boasts impressive text and vision capabilities, allowing developers to process text and images concurrently in their own applications. In a clear move to undercut OpenAI, Google announced that the Gemini Pro API would be entirely free within certain usage limits during its preview phase, and aggressively priced afterward. Alongside the API, Google launched AI Studio, a slick web-based developer environment to quickly prototype prompts and export them into code.\n\n## Fueling the Ecosystem\nThis release brings a highly credible, natively multimodal competitor into the ecosystem, ensuring developers are no longer solely reliant on OpenAI's GPT-4 Vision APIs.", ko: "## ?“° êµ¬ê? ?íƒœê³??•ì¥??? í˜¸??n**êµ¬ê?(Google)**???ì‚¬??ì°¨ì„¸?€ ë©€?°ëª¨???¸ê³µì§€??ëª¨ë¸??**'Gemini Pro(?œë??˜ì´ ?„ë¡œ)'**ë¥??¸ë? ê°œë°œ?ì? ê¸°ì—…?¤ì´ ?ì²´ ?œë¹„?¤ì— ?°ë™?????ˆë„ë¡?API(?‘ìš© ?„ë¡œê·¸ë¨ ?¸í„°?˜ì´?? ?•íƒœë¡?ê¸€ë¡œë²Œ ?•ì‹ ë°°í¬?ˆìŠµ?ˆë‹¤.\n\n## ?“– ê³µê²©?ì¸ ê°€ê²??•ì±…ê³?ê°œë°œ??ì¹œí™”???˜ê²½\nêµ¬ê? ?´ë¼?°ë“œ??ë²„í…??AI(Vertex AI) ë°??ˆë¡œ????ê°œë°œ ?˜ê²½??'êµ¬ê? AI ?¤íŠœ?”ì˜¤'ë¥??µí•´ ê³µê°œ????API???ìŠ¤?¸ë¿ë§??„ë‹ˆ??ë¹„ì „(Vision, ?´ë?ì§€ ?´í•´) ê¸°ëŠ¥ê¹Œì? ?™ì‹œ???œê³µ?©ë‹ˆ?? \në¬´ì—‡ë³´ë‹¤ ?œì¥???€?¼ê²Œ ??ê²ƒì? êµ¬ê???ê³µê²©?ì¸ ê°€ê²??•ì±…?…ë‹ˆ?? OpenAI??GPT-3.5 ë°?GPT-4ë¥??•ì¡°ì¤€?˜ì—¬, êµ¬ê??€ ì´ˆê¸° ?„ë¦¬ë·?ê¸°ê°„ ?™ì•ˆ ì´ˆë‹¹ 60???”ì²­(RPM)ê¹Œì? APIë¥?**'?„ì „ ë¬´ë£Œ'**ë¡??œê³µ?˜ê² ?¤ê³  ? ì–¸?ˆìŠµ?ˆë‹¤. ?´ëŠ” ?ê¸ˆ?¥ì´ ë¶€ì¡±í•œ ?˜ë§?€ ?¤í??¸ì—…ê³?ê°œì¸ ê°œë°œ?ë“¤??êµ¬ê? ?íƒœê³„ë¡œ ê°•ë ¥?˜ê²Œ ?¡ìˆ˜?˜ë ¤???„ëµ?…ë‹ˆ??\n\n## ?“Œ ?‘ê°• êµ¬ë„ë¡??¬í¸?˜ëŠ” API ?œì¥\n?…ê³„???´ë²ˆ API ë°°í¬ë¥??µí•´ ê·¸ë™??OpenAI(GPT) API???ˆë??ìœ¼ë¡??˜ì¡´?˜ë˜ ??ê°œë°œ ?œì¥??ë§ˆì¹¨??êµ¬ê??´ë¼???Œë??˜ê³  ê±°ë????€ì²´ì¬ë¥??•ë³´?˜ê²Œ ?˜ì—ˆ?¤ë©° ?¬ê²Œ ?˜ì˜?˜ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Gemini API",
    category_l1: "multi",
    company: "Google",
    url: "https://ai.google.dev",
    created_at: new Date("2023-12-13T00:00:00Z").toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 41,
    title: { en: "Cursor IDE gains viral traction among developers", ko: "AI ?¹í™” ?ë””??'Cursor(ì»¤ì„œ) IDE', ê°œë°œ???¬ì´????°œ???¸ê¸°" },
    summary: { en: "An AI-first code editor fork of VS Code is reshaping how developers write code.", ko: "VS Codeë¥?ê¸°ë°˜?¼ë¡œ AI?€???„ë²½??ì±„íŒ… ë°?ì½”ë“œ ?ì„± ê¸°ëŠ¥???´ì¥??Cursorê°€ ê¸°ì¡´ ?ë””?°ë“¤???€ì²´í•˜ê³??ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## The AI-First Code Editor\nCursor, an AI-first IDE built as a fork of VS Code, is experiencing massive viral growth among software engineers, establishing itself as the premier tool for AI-assisted coding.\n\n## Deep Codebase Understanding\nWhile GitHub Copilot acts as a plugin, Cursor is built from the ground up to deeply understand entire repositories. Developers can type 'Cmd+K' to generate code directly inline or press 'Cmd+L' to chat with an AI that inherently knows their entire project structure, reading multiple local files to provide pinpoint accurate context. Its seamless integration of OpenAI's GPT-4 and Anthropic's Claude 3 Opus gives users the flexibility to choose the smartest models for their tasks.\n\n## Rapid Market Penetration\nBacked by a recent 60M funding round, Cursor is rapidly siphoning power users away from traditional IDEs, proving that developers want AI embedded deeply into the editor core.", ko: "## ?“° ì½”ë”© ?ë””?°ì˜ ?¸ë? êµì²´\n?Œí”„?¸ì›¨???”ì??ˆì–´???¬ì´?ì„œ ?¨ìˆœ???ŒëŸ¬ê·¸ì¸???„ë‹Œ, ?œìƒë¶€??AI ì¹œí™”?ìœ¼ë¡??¤ê³„??ì½”ë“œ ?ë””??**'Cursor(ì»¤ì„œ) IDE'**ê°€ ??°œ?ì¸ ?…ì†Œë¬¸ì„ ?€ë©?ê¸°ì¡´??ê°œë°œ ?˜ê²½(VS Code ????ë¹ ë¥´ê²??€ì²´í•˜ê³??ˆìŠµ?ˆë‹¤.\n\n## ?“– ???„ë¡œ?íŠ¸ë¥??„ë²½???´í•´?˜ëŠ” ì§ê¿\n?¤í??¸ì—… Anysphereê°€ ê°œë°œ??Cursor??ê°€????ë¬´ê¸°??ê°œë°œ?ì˜ ë¡œì»¬ PC???ˆëŠ” ?˜ì‹­ ê°œì˜ ì½”ë“œ ?Œì¼ê³??´ë” êµ¬ì¡°(Codebase) ?„ì²´??ë¬¸ë§¥??AIê°€ ?„ë²½?˜ê²Œ ?Œì•…?œë‹¤???ì…?ˆë‹¤. \n'Cmd + K' ?¨ì¶•?¤ë? ?ŒëŸ¬ ?í•˜??ê¸°ëŠ¥???ì—°?´ë¡œ ì§€?œí•˜ë©?ê¸°ì¡´ ì½”ë“œë¥??˜ì •??ì£¼ë©°, 'Cmd + L'???„ë¥´ë©??¹ì • ?Œì¼?¤ì„ ì°¸ì¡°?˜ì—¬ AI?€ ì±„íŒ…?˜ë©° ?”ë²„ê¹…ì„ ?????ˆìŠµ?ˆë‹¤. OpenAI??GPT-4o?€ ?¤ìŠ¤ë¡œí”½??Claude 3.5 Sonnet ê°™ì? ìµœìƒ??ëª¨ë¸?¤ì„ ?ìœ ë¡?²Œ ë°”ê¿”ê°€ë©??????ˆì–´, ê¸°ì¡´ GitHub Copilotë³´ë‹¤ ?¨ì”¬ ??ì§€?¥ì ?´ê³  ? ì—°?˜ë‹¤???‰ê?ë¥?ë°›ìŠµ?ˆë‹¤.\n\n## ?“Œ ?¬ì ? ì¹˜?€ ?œì¥ ?ìœ ???•ë³´\nìµœê·¼ a16z?€ ê°™ì? ?±í‹°??ë²¤ì²˜ìºí”¼?ˆë¡œë¶€??ê±°ì•¡???¬ìë¥?? ì¹˜??Cursor ?€?€, ë§ˆì´?¬ë¡œ?Œí”„?¸ì˜ ê°•ë ¥??ì§€ë°°ë ¥???«ê³  ì½”ë”© ?„êµ¬ ?œì¥??? í¥ ê°•ìë¡??„ì „???ë¦¬ë§¤ê??ˆìŠµ?ˆë‹¤." },
    program_l2: "Cursor",
    category_l1: "code",
    company: "Anysphere",
    url: "https://cursor.com",
    created_at: new Date("2024-05-15T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 42,
    title: { en: "Adobe Firefly exits beta, commercially safe AI generation", ko: "?´ë„ë¹? ?€?‘ê¶Œ 100% ?´ë¦°??'Firefly' ?ìš© ?œë¹„???•ì‹ ?°ì¹­" },
    summary: { en: "Adobe integrates commercially safe generative AI natively into Photoshop.", ko: "ê¸°ì¡´???€?‘ê¶Œ ?¼ë????„ì „???´ì†Œ???ì„±??AI ?Œì´?´í”Œ?¼ì´ê°€ ?¬í† ?µì— ?•ì‹ ?‘ì¬?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## Safe AI for Enterprises\nAdobe has officially launched Firefly, its family of creative generative AI models, exiting a highly successful beta phase.\n\n## Generative Fill Changes Photoshop Forever\nThe highlight of the release is the deep native integration into Adobe Photoshop via the 'Generative Fill' feature. Users can effortlessly select areas of a photo and type prompts to seamlessly add objects, expand backgrounds, or remove blemishes with pixel-perfect lighting matching. Crucially, Adobe guarantees that Firefly was trained exclusively on Adobe Stock images and public domain content, indemnifying enterprise customers against any copyright infringement claims.\n\n## The New Creative Standard\nThis massive legal safety net has led to immediate adoption by major ad agencies and studios, setting Adobe apart in the chaotic wild west of AI image generation.", ko: "## ?“° ?”í„°?„ë¼?´ì¦ˆë¥??„í•œ ?ˆì „??AI??ê¸°ì?\n?”ì???Œí”„?¸ì›¨?´ì˜ ?œì™• **?´ë„ë¹?Adobe)**ê°€ ?€?‘ê¶Œ ë¬¸ì œ?ì„œ 100% ?ìœ ë¡œìš´ ?ì²´ ?ì„±??AI ëª¨ë¸ **'Firefly(?Œì´?´í”Œ?¼ì´)'**??ë² í? ?ŒìŠ¤?¸ë? ?±ê³µ?ìœ¼ë¡?ë§ˆì¹˜ê³??ì—…???•ì‹ ?œë¹„?¤ë? ?°ì¹­?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?¬í† ?µì˜ ?ë„ë¥?ë°”ê¾¼ '?ì„±??ì±„ìš°ê¸?\n?´ë²ˆ ?°ì¹­???˜ì´?¼ì´?¸ëŠ” ?¬í† ??Photoshop) ???´ë????„ì „???µí•©??**'?ì„±??ì±„ìš°ê¸?Generative Fill)'** ê¸°ëŠ¥?…ë‹ˆ?? ?”ì?´ë„ˆê°€ ë§ˆìš°?¤ë¡œ ?´ë?ì§€??ë¹?ê³µê°„???œë˜ê·¸í•œ ???„ë¡¬?„íŠ¸ë¥??…ë ¥?˜ë©´, ê¸°ì¡´ ë°°ê²½???ê·¼ê°ê³¼ ì¡°ëª…, ê·¸ë¦¼?ë? ?„ë²½?˜ê²Œ ê³„ì‚°?˜ì—¬ ?¼ì‚¬ì²´ë? ì¶”ê??˜ê±°???ê²½???ì—°?¤ëŸ½ê²??•ì¥???…ë‹ˆ?? \nê°€??ì¤‘ìš”???ì? ?´ë„ë¹„ê? ?ì‚¬ê°€ ?©ë²•?ìœ¼ë¡??Œìœ ???´ë„ë¹??¤í†¡(Adobe Stock) ?°ì´?°ì? ?€?‘ê¶Œ??ë§Œë£Œ???¼ë¸”ë¦??„ë©”???´ë?ì§€ë§Œìœ¼ë¡?ëª¨ë¸???™ìŠµ?œì¼°?¤ëŠ” ê²ƒì…?ˆë‹¤. ?´ë„ë¹„ëŠ” ê³ ê°????AIë¡?ë§Œë“  ê²°ê³¼ë¬¼ë¡œ ?¸í•´ ?€?‘ê¶Œ ?Œì†¡???¹í•  ê²½ìš°, ëª¨ë“  ë²•ì  ë¹„ìš©??ì±…ì„ì§€ê² ë‹¤???Œê²©?ì¸ ë³´ì¦ ?œë„ë¥??´ê±¸?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ?”ì???ì´?„ì‹œ?¤ì˜ ?€ê·œëª¨ ?„ì…\n?´ëŸ¬??ê°•ë ¥??ë²•ì  ?ˆì „ë§??•ë¶„??Midjourney ???€??AI ?„ì…??ë§ì„¤?´ë˜ ???¸ê³„???€??ê´‘ê³  ?€?‰ì‚¬?€ ?¤íŠœ?”ì˜¤?¤ì´ ?ˆì‹¬?˜ê³  ?´ë„ë¹„ì˜ AIë¥??¤ë¬´ ?Œì´?„ë¼?¸ì— ?ê·¹ ?„ì…?˜ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Firefly",
    category_l1: "image",
    company: "Adobe",
    url: "https://adobe.com/firefly",
    created_at: new Date("2023-09-13T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  },
  {
    id: 43,
    title: { en: "Kuaishou unveils Kling AI, rivalling OpenAI's Sora", ko: "ì¤‘êµ­ ì½°ì´?¼ìš°, ê³ í’ˆì§??ìƒ AI 'Kling(?´ë§)' ê³µê°œë¡??Œë¼(Sora) ë§¹ì¶”ê²? },
    summary: { en: "A Chinese tech giant releases a highly advanced text-to-video model.", ko: "ìµœë? 2ë¶?ê¸¸ì´??ë¬¼ë¦¬ ë²•ì¹™???´í•´?˜ëŠ” 1080p ?´ìƒ?„ì˜ ?ìƒ AIë¥?ì¤‘êµ­??ê¸°ìŠµ ë°œí‘œ?ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## China Enters the Text-to-Video Race\nKuaishou, a major Chinese short-video tech giant, has shocked the AI world by unveiling Kling, a remarkably advanced text-to-video AI model.\n\n## Unprecedented Video Length and Physics\nWhile the world was waiting for OpenAI to release Sora, Kling suddenly emerged with the capability to generate up to 2-minute long videos at 1080p resolution and 30fps. The demonstration videos showed a profound understanding of 3D physical world dynamics, accurately rendering fluid motions, complex object interactions, and temporally consistent character features across long shots. Notably, it is already available to Chinese users in a waitlisted beta app, moving faster to market than its American counterparts.\n\n## Geopolitical Tech Tensions\nKling proves that Chinese AI labs have access to immense compute and talent, heating up the geopolitical race for dominance in generative AI technologies.", ko: "## ?“° ?ìŠ¤????ë¹„ë””???œì¥???ˆë¡œ??ê°•ì ê°•ë¦¼\nì¤‘êµ­???í¼ ë¹„ë””???Œë«??ê±°ë? ê¸°ì—…??**ì½°ì´?¼ìš°(Kuaishou)**ê°€ ???¸ê³„ê°€ ê³ ë??˜ë˜ OpenAI??Sora(?Œë¼)???„ì ?˜ëŠ”, ?¹ì? ê·??´ìƒ??ë³´ì—¬ì£¼ëŠ” ê³ í’ˆì§??ìƒ ?ì„± AI **'Kling(?´ë§)'**??ê¸°ìŠµ?ìœ¼ë¡?ë°œí‘œ?˜ë©° ?¸ê³„ë¥?ê²½ì•…ê²??ˆìŠµ?ˆë‹¤.\n\n## ?“– 2ë¶?ê¸¸ì´??ë¬¼ë¦¬ ?”ì§„ê¸??ìƒ ?Œë”ë§?n?€?¤ìˆ˜???ìƒ AIê°€ 3~5ì´ˆì˜ ì§§ì? ?´ë¦½ ?ì„±??ë¨¸ë¬¼???ˆëŠ” ë°˜ë©´, Kling?€ ?ìŠ¤???„ë¡¬?„íŠ¸ ?˜ë‚˜ë¡?ìµœë? 2ë¶?120ì´? ë¶„ëŸ‰??1080p FHD ?´ìƒ?? ì´ˆë‹¹ 30?„ë ˆ??fps) ?ìƒ????ë²ˆì— ?ì„±???…ë‹ˆ?? \nê³µê°œ???°ëª¨ ?ìƒ?ì„œ???ì „ê±°ë? ?€???Œë…„??ê·¸ë¦¼??ë°©í–¥?´ë‚˜ ? ë¦¬ê°€ ê¹¨ì???ë¬¼ë¦¬???Œí¸ ?¨ê³¼ ??'?„ì‹¤ ?¸ê³„??3D ë¬¼ë¦¬ ë²•ì¹™'???„ë²½?˜ê²Œ ?´í•´?˜ê³  ?Œë”ë§??˜ëŠ” ëª¨ìŠµ??ë³´ì—¬ì£¼ì—ˆ?µë‹ˆ?? ?í•œ ë¯¸êµ­ ê¸°ì—…?¤ì´ ?ˆì „??ë¬¸ì œë¡?ì¶œì‹œë¥???¶”ê³??ˆëŠ” ê²ƒê³¼ ?¬ë¦¬, ì½°ì´?¼ìš°???êµ­ ?¬ìš©?ë? ?€?ìœ¼ë¡?ë°?ë¹ ë¥´ê²???ê¸°ë°˜ ë² í? ?ŒìŠ¤?¸ë? ?¤í”ˆ?˜ì—¬ ?„ì²­???°ì´?°ë? ì¶•ì ?˜ê³  ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ë¯¸ì¤‘ AI ?¨ê¶Œ ?„ìŸ??ê²©í™”\nKling???±ì¥?€ ë¯¸êµ­??ë°˜ë„ì²??˜ì¶œ ê·œì œ ?ì—?œë„ ì¤‘êµ­???…ì?ì¸ AI ?°êµ¬ ??Ÿ‰ê³??¸í”„?¼ê? ?´ë? ?¸ê³„ ìµœê³  ?˜ì????„ë‹¬?ˆìŒ??ì¦ëª…?˜ë©°, ?ì„±??AIë¥??˜ëŸ¬??ë¯¸ì¤‘ ?¨ê¶Œ ê²½ìŸ??ë¶ˆì„ ì§€?¼ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Kling AI",
    category_l1: "video",
    company: "Kuaishou",
    url: "https://kling.kuaishou.com",
    created_at: new Date("2024-06-06T00:00:00Z").toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 44,
    title: { en: "Udio emerges from stealth, offering unparalleled AI music generation", ko: "Udio, ìµœê³  ?Œì§ˆ??AI ?Œì•… ?ì„±ê¸?ì¶œì‹œë¡??ë„ ë³€?? },
    summary: { en: "A new startup created by former DeepMind researchers brings pristine audio fidelity.", ko: "êµ¬ê? ?¥ë§ˆ?¸ë“œ ì¶œì‹ ?¤ì´ ?¤ë¦½??Udioê°€ Sunoë³´ë‹¤ ?•ë„?ìœ¼ë¡?ê¹¨ë—??ê³ ìŒì§??Œì•… AIë¥??°ì¹­?ˆìŠµ?ˆë‹¤." },
    content_body: { en: "## A New Contender in AI Audio\nUdio, a stealth startup founded by former Google DeepMind researchers, has launched its highly anticipated AI music generation platform.\n\n## Pristine Audio Quality\nBacked by prominent investors like a16z, Udio directly challenges Suno in the text-to-music space. Users immediately noted that Udio produces tracks with significantly higher audio fidelity and less 'metallic' artifacts, especially in complex genres like jazz, classical, and heavy metal. The platform allows users to seamlessly extend songs in 32-second increments and offers granular control over intros and outros.\n\n## The Viral Comedy Hit\nUdio quickly went viral on social media as users began generating absurd comedy songs and highly convincing retro pop tracks, proving the model's exceptional versatility in both instrumentation and lyrical flow.", ko: "## ?“° ê³ ìŒì§?AI ?Œì•… ?ì„±ê¸°ì˜ ?±ì¥\nêµ¬ê? ?¥ë§ˆ?¸ë“œ(Google DeepMind) ì¶œì‹ ??ìµœê³ ê¸?AI ?°êµ¬?ë“¤??ëª¨ì—¬ ?¤ë¦½???¤ë””???¤í??¸ì—… **Udio(?°ë””??**ê°€ ë§ˆì¹¨??ë² ì¼??ë²—ê³  ì°¨ì„¸?€ ?Œì•… ?ì„± ?Œë«?¼ì„ ?•ì‹ ?°ì¹­?ˆìŠµ?ˆë‹¤.\n\n## ?“– Suno(?˜ë…¸)ë¥??°ì–´?˜ëŠ” ?•ë„?ì¸ ?´ìƒ??nìµœê³ ??ë²¤ì²˜ìºí”¼??a16z???¬ìë¥??±ì— ?…ê³  ?±ì¥??Udio??ê¸°ì¡´ ? ë‘ì£¼ì??Suno?€ ì§ì ‘?ì¸ ê²½ìŸ??? ì–¸?ˆìŠµ?ˆë‹¤. ì´ˆê¸° ?¬ìš©?ë“¤??ê³µí†µ???‰ê???Udio???Œì§ˆ(Fidelity)???•ë„?ìœ¼ë¡?ê¹¨ë—?˜ë‹¤??ê²ƒì…?ˆë‹¤. ?¹íˆ ?¬ì¦ˆ??ë¸Œë¼???…ê¸° ?Œë¦¬???´ë˜?ì˜ ?„ì•…ê¸?ë§ˆì°°?? ë³´ì»¬???¨ì†Œë¦???ë¯¸ì„¸???”í…Œ?¼ì—??AI ?¹ìœ ??ë­‰ê°œì§€???³ì†Œë¦?Artifact)ë¥?ê·¹ì ?¼ë¡œ ì¤„ì—¬?ˆìŠµ?ˆë‹¤. \n32ì´??¨ìœ„ë¡??¸ë˜???„ë ´êµ?Outro)???„ì…ë¶€(Intro)ë¥??„ì£¼ ?ì—°?¤ëŸ½ê²??°ì¥(Extend) ?????ˆëŠ” ?¸ë????¸ì§‘ ê¸°ëŠ¥??ê·¹ì°¬??ë°›ê³  ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ ?Œì…œ ë¯¸ë””?´ë? ?©ì“°??ë°?Meme) ì°½ì‘\n?°ì¹­ ì§í›„ ?°ë””?¤ì˜ ê¹¨ë—??ë³´ì»¬ ?©ì„± ?¥ë ¥???´ìš©???¬ìš©?ë“¤???°ìŠ¤ê½ìŠ¤?¬ìš´ ?¸í„°??ë°?Meme) ê°€?¬ë? 1980?„ë? ?œí‹°?ì´???¤ë¹„ë©”íƒˆë¡?ì§„ì??˜ê²Œ ë¶€ë¥´ê²Œ ?˜ëŠ” ? í¬ê°€ ?Œì…œ ë¯¸ë””???Œë«?¼ì„ ê°•í??˜ë©° ?„ì²­??ë°”ì´???¨ê³¼ë¥??„ë¦¬ê³??ˆìŠµ?ˆë‹¤." },
    program_l2: "Udio",
    category_l1: "audio",
    company: "Udio",
    url: "https://udio.com",
    created_at: new Date("2024-04-10T00:00:00Z").toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 45,
    title: { en: "Notion launches 'Notion AI' directly into its workspace", ko: "?¸ì…˜(Notion), ?…ë¬´ ë¬¸ì„œ??ë°”ë¡œ ?´ì¥??'Notion AI' ê³µì‹ ì¶œì‹œ" },
    summary: { en: "The beloved productivity app introduces generative AI to write and summarize notes.", ko: "ë³„ë„??ì±—ë´‡?????„ìš” ?†ì´ ë¬¸ì„œ ?”ë©´?ì„œ ì¦‰ì‹œ ê¸€???”ì•½?˜ê³  ?‘ì„±?´ì£¼??Notion AIê°€ ?•ì‹ ?°ì¹­?˜ì—ˆ?µë‹ˆ??" },
    content_body: { en: "## AI Embedded in the Workspace\nNotion, the popular workspace and note-taking app, has fully rolled out 'Notion AI' to its millions of users following a waitlisted beta.\n\n## Frictionless Text Generation\nUnlike ChatGPT which requires switching to a separate tab, Notion AI is embedded directly onto the blank page. By simply pressing the spacebar, users can summon the AI to summarize long meeting notes, translate text, brainstorm ideas, or change the tone of a drafted document. This frictionless integration sets a new standard for how AI should be built into daily productivity software.\n\n## Monetization Strategy\nNotion offers the AI feature as a $10/month add-on, moving aggressively to monetize generative capabilities and establishing itself as a frontrunner in the AI-enhanced SaaS market.", ko: "## ?“° ?…ë¬´ ê³µê°„?¼ë¡œ ?ˆì…???¸ê³µì§€??nê¸€ë¡œë²Œ 1???‘ì—… ë°?ë©”ëª¨ ? í”Œë¦¬ì??´ì…˜??**Notion(?¸ì…˜)**???˜ê°œ?”ê°„??ë¹„ê³µê°?ë² í? ?ŒìŠ¤?¸ë? ?±ê³µ?ìœ¼ë¡?ë§ˆì¹˜ê³? ?‘ì—… ê³µê°„ ?´ë????„ì „???´ì¥??**'Notion AI'** ê¸°ëŠ¥?????¸ê³„ ëª¨ë“  ?¬ìš©?ì—ê²?ê³µì‹ ì¶œì‹œ?ˆìŠµ?ˆë‹¤.\n\n## ?“– ?¤í˜?´ìŠ¤ë°?Space)ë¡??œì‘?˜ëŠ” ë§ˆë²•\në³„ë„????ë¸Œë¼?°ì? ??„ ?´ì–´ ì±—ë´‡?ê²Œ ë¬¼ì–´ë³´ê³  ê²°ê³¼ë¥?ë³µì‚¬?????„ìš”ê°€ ?„í? ?†ìŠµ?ˆë‹¤. ?¸ì…˜??ë¹?ë¬¸ì„œ?ì„œ ?¤í˜?´ìŠ¤ë°?Space) ?¤ë? ?„ë¥´??ê²ƒë§Œ?¼ë¡œ ì¦‰ì‹œ AI ?„ë¡¬?„íŠ¸ ì°½ì´ ?˜í??©ë‹ˆ?? \n?¬ìš©?ëŠ” ë°©ë????Œì˜ë¡ì„ ????ì¤„ë¡œ ?”ì•½?˜ê²Œ ?˜ê±°?? ?´ìƒ‰??ì´ˆì•ˆ???„ë¬¸ê°€???´ì¡°ë¡??¤ë“¬???¬ë¼ê³?ì§€?œí•˜ê³? ?œë‚˜ ì²´í¬ë¦¬ìŠ¤???•íƒœ???„ì´?”ì–´ ë¸Œë ˆ?¸ìŠ¤? ë°??ì¦‰ì„?ì„œ ?ì„±?????ˆìŠµ?ˆë‹¤. 'ê¸€?°ê¸°'?¼ëŠ” ?‰ìœ„ ?ì²´??ë§ˆì°°??Friction)???ê¸°?ìœ¼ë¡?ì¤„ì¸ UX ?¤ê³„ë¡??„ì²­??ì°¬ì‚¬ë¥?ë°›ê³  ?ˆìŠµ?ˆë‹¤.\n\n## ?“Œ B2B ?ì‚°?????˜ìµ?”ì˜ ëª¨ë²” ?¬ë?\n?¸ì…˜?€ ??ê°•ë ¥??ê¸°ëŠ¥??ê¸°ì¡´ ?”ê¸ˆ?œì? ë³„ë„ë¡?1?¸ë‹¹ ??10?¬ëŸ¬??ì¶”ê? êµ¬ë…(Add-on) ?µì…˜?¼ë¡œ ?´ë†“?˜ìœ¼ë©? ?´ëŠ” SaaS(?œë¹„?¤í˜• ?Œí”„?¸ì›¨?? ?¤í??¸ì—…?¤ì´ ?ì„±??AIë¥??´ë–»ê²?ë¹„ì¦ˆ?ˆìŠ¤ ?˜ìµ?¼ë¡œ ì§ê²°?œí‚¬ ???ˆëŠ”ì§€ ë³´ì—¬ì£¼ëŠ” ê°€???±ê³µ?ì¸ ëª¨ë¸ë¡??‰ê?ë°›ê³  ?ˆìŠµ?ˆë‹¤." },
    program_l2: "Notion AI",
    category_l1: "startup",
    company: "Notion Labs",
    url: "https://notion.so/ai",
    created_at: new Date("2023-02-22T00:00:00Z").toISOString(),
    views: 0,
    is_important: true
  }
];

const MOCK_COMMENTS = [
  { id: 1, post_id: 1, user_name: "AI?¬ë¦¬?ì´??, avatar: "?‘¤", comment_text: "??”¼?¼ë???êµ¬ì¡°ë¡??½ìœ¼?ˆê¹Œ ê¸°ì‚¬ ?µì‹¬???œëˆˆ???Œì•…?˜ë„¤?? ?´ìš© êµ¬ì„±???¨ì”¬ ?„ë¡œ?˜ì…”?í•´ì¡ŒìŠµ?ˆë‹¤.", created_at: new Date(Date.now() - 7200000).toISOString(), is_blinded: false },
  { id: 2, post_id: 2, user_name: "?„ë¡ ?¸ì—”?œë…¸??, avatar: "?’»", comment_text: "Claude 3.5 Sonnet??Artifacts ê¸°ëŠ¥ ?¨ë³´??ê°œë°œ ?¨ëŸ¬?¤ì„??ë°”ë€?ê²?ê°™ìŠµ?ˆë‹¤. ë¦¬ì•¡??ì»´í¬?ŒíŠ¸ë¥??¤ì‹œê°„ìœ¼ë¡?ë§Œë“¤?´ì£¼?¤ë‹ˆ...", created_at: new Date(Date.now() - 86400000).toISOString(), is_blinded: false }
];
