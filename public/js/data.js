// ============================================
// AI Update Portal v3.0 — Data Layer
// Company logos + Categories + Empty mock data
// ============================================

const CATEGORIES = [
  { id: 'all', emoji: '🏠', label: { en: 'All Feeds', ko: '전체 피드' }, color: '#1A73E8' },
  { id: 'llm', emoji: '✍️', label: { en: 'LLM & Text', ko: 'LLM & 텍스트' }, color: '#1A73E8' },
  { id: 'image', emoji: '🎨', label: { en: 'Image Gen', ko: '이미지 생성' }, color: '#E8457C' },
  { id: 'video', emoji: '🎬', label: { en: 'Video & Motion', ko: '영상 & 모션' }, color: '#7C3AED' },
  { id: 'code', emoji: '💻', label: { en: 'Coding AI', ko: '코딩 보조' }, color: '#0891B2' },
  { id: 'audio', emoji: '🎵', label: { en: 'Audio & Voice', ko: '오디오 & 음성' }, color: '#EA8600' },
  { id: 'data', emoji: '📊', label: { en: 'Data Analysis', ko: '데이터 분석' }, color: '#0D9E6F' },
  { id: 'multi', emoji: '🤖', label: { en: 'Multimodal', ko: '멀티모델 & AI' }, color: '#D93025' },
  { id: 'hardware', emoji: '⚙️', label: { en: 'Hardware & Chips', ko: '하드웨어 & 칩' }, color: '#5C5C5C' },
  { id: 'startup', emoji: '🚀', label: { en: 'Startups', ko: '스타트업 & 투자' }, color: '#F59E0B' },
  { id: 'policy', emoji: '⚖️', label: { en: 'Ethics & Policy', ko: '윤리 & 법제도' }, color: '#4B5563' },
];

const COMPANY_LOGOS = {
  "OpenAI": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  "Google": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "Anthropic": "https://upload.wikimedia.org/wikipedia/commons/archive/7/78/20231018153018%21Anthropic_logo.svg",
  "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "Meta": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  "Midjourney": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
  "NVIDIA": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  "Perplexity": "https://mintlify.s3-us-west-1.amazonaws.com/perplexity/logo/dark.svg",
  "Hugging Face": "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
  "Stability AI": "https://upload.wikimedia.org/wikipedia/commons/4/46/Stability_AI_logo.svg",
  "Mistral AI": "https://mistral.ai/images/logo.svg",
  "Runway": "https://runwayml.com/assets/images/runway-logo.svg",
  "Suno": "https://suno.com/favicon.ico",
  "Apple": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "Cognition": "https://cognition-labs.com/favicon.ico",
  "Startup": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Rocket_icon.svg"
};

function determineCompany(title) {
  if (!title) return 'Startup';
  const t = title.toLowerCase();
  if (t.includes('openai') || t.includes('chatgpt') || t.includes('gpt-4')) return 'OpenAI';
  if (t.includes('google') || t.includes('gemini') || t.includes('deepmind')) return 'Google';
  if (t.includes('anthropic') || t.includes('claude')) return 'Anthropic';
  if (t.includes('microsoft') || t.includes('copilot')) return 'Microsoft';
  if (t.includes('meta') || t.includes('llama')) return 'Meta';
  if (t.includes('midjourney')) return 'Midjourney';
  if (t.includes('nvidia') || t.includes('blackwell') || t.includes('hopper')) return 'NVIDIA';
  if (t.includes('apple') || t.includes('ios') || t.includes('mac')) return 'Apple';
  if (t.includes('suno')) return 'Suno';
  if (t.includes('runway')) return 'Runway';
  if (t.includes('stability') || t.includes('stable diffusion')) return 'Stability AI';
  if (t.includes('mistral') || t.includes('mixtral')) return 'Mistral AI';
  if (t.includes('hugging face')) return 'Hugging Face';
  return 'Startup';
}

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}

function relativeTime(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}일 전`;
  return new Date(dateStr).toLocaleDateString('ko-KR');
}

function fmtViews(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '만';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return (n || 0).toString();
}

// 회원님의 지시에 따라 가짜 샘플 데이터를 완전히 삭제했습니다!
const INITIAL_POSTS = [];

const MOCK_COMMENTS = [];
