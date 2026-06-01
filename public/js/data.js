// ============================================
// AI Update Portal v2.5 — Data Layer
// Company logos + Categories + Mock data
// ============================================

const CATEGORIES = [
  { id: 'all', emoji: '🏠', label: { en: 'All Feeds', ko: '전체 피드' }, color: '#1A73E8' },
  { id: 'llm', emoji: '✍️', label: { en: 'LLM & Text', ko: 'LLM & 텍스트' }, color: '#1A73E8' },
  { id: 'image', emoji: '🎨', label: { en: 'Image Gen', ko: '이미지 생성' }, color: '#E8457C' },
  { id: 'video', emoji: '🎬', label: { en: 'Video & Motion', ko: '영상 & 모션' }, color: '#7C3AED' },
  { id: 'code', emoji: '💻', label: { en: 'Coding AI', ko: '코딩 보조' }, color: '#0891B2' },
  { id: 'audio', emoji: '🎵', label: { en: 'Audio & Voice', ko: '오디오 & 음성' }, color: '#EA8600' },
  { id: 'data', emoji: '📊', label: { en: 'Data Analysis', ko: '데이터 분석' }, color: '#0D9E6F' },
  { id: 'multi', emoji: '🤖', label: { en: 'Multimodal', ko: '멀티모달 & AI' }, color: '#D93025' },
  { id: 'hardware', emoji: '⚙️', label: { en: 'Hardware & Chips', ko: '하드웨어 & 칩' }, color: '#5C5C5C' },
  { id: 'startup', emoji: '🚀', label: { en: 'Startups', ko: '스타트업 & 투자' }, color: '#F59E0B' },
  { id: 'policy', emoji: '⚖️', label: { en: 'Ethics & Policy', ko: '윤리 & 법제도' }, color: '#4B5563' },
];

// Company logos (using favicon/brand colors)
const COMPANY_LOGOS = {
  'OpenAI': { icon: '◯', color: '#000000', bg: '#F7F7F7' },
  'Anthropic': { icon: 'A', color: '#C96442', bg: '#FFF5F0' },
  'Google': { icon: 'G', color: '#4285F4', bg: '#E8F0FE' },
  'Microsoft': { icon: '⊞', color: '#00A4EF', bg: '#E5F5FD' },
  'Meta': { icon: '∞', color: '#0064E0', bg: '#E5F0FF' },
  'Midjourney Inc': { icon: 'M', color: '#000000', bg: '#F0F0F0' },
  'Stability AI': { icon: 'S', color: '#7C3AED', bg: '#F3EEFF' },
  'Adobe': { icon: 'Ai', color: '#FF0000', bg: '#FFEBEB' },
  'Canva': { icon: 'C', color: '#00C4CC', bg: '#E0FAFB' },
  'Runway': { icon: 'R', color: '#000000', bg: '#F0F0F0' },
  'Pika Labs': { icon: 'P', color: '#FF6B35', bg: '#FFF0EA' },
  'Kuaishou': { icon: 'K', color: '#FF4906', bg: '#FFEDE5' },
  'HeyGen': { icon: 'H', color: '#6366F1', bg: '#EEEEFF' },
  'Anysphere': { icon: '◈', color: '#000000', bg: '#F0F0F0' },
  'Cognition': { icon: 'D', color: '#10B981', bg: '#E6F7F0' },
  'Vercel': { icon: '▲', color: '#000000', bg: '#F0F0F0' },
  'Replit': { icon: '⟁', color: '#F26207', bg: '#FFF0E5' },
  'Suno': { icon: '♪', color: '#000000', bg: '#F0F0F0' },
  'Udio': { icon: 'U', color: '#7C3AED', bg: '#F3EEFF' },
  'ElevenLabs': { icon: 'XI', color: '#000000', bg: '#F0F0F0' },
  'Julius': { icon: 'J', color: '#4F46E5', bg: '#EEEEFF' },
  'Zapier': { icon: 'Z', color: '#FF4A00', bg: '#FFE8DD' },
  'Make': { icon: 'M', color: '#6D28D9', bg: '#F3EEFF' },
  'Akkio': { icon: 'A', color: '#2563EB', bg: '#E8F0FE' },
  'Significant Gravitas': { icon: 'AG', color: '#000000', bg: '#F0F0F0' },
  'CrewAI': { icon: 'C', color: '#E8457C', bg: '#FFF0F5' },
  'LangChain Inc': { icon: '🦜', color: '#1C3C3C', bg: '#E8F0E8' },
  'Perplexity AI': { icon: 'P', color: '#20808D', bg: '#E0F5F5' },
  'Notion Labs': { icon: 'N', color: '#000000', bg: '#F0F0F0' },
  'NVIDIA': { icon: 'N', color: '#76B900', bg: '#EBF4E5' },
  'AMD': { icon: 'A', color: '#ED1C24', bg: '#FCE8E9' },
  'xAI': { icon: 'X', color: '#000000', bg: '#F0F0F0' },
  'Mistral AI': { icon: 'M', color: '#EA580C', bg: '#FDEEE6' },
  'EU': { icon: '🇪🇺', color: '#003399', bg: '#E6EBf5' },
};

function getCompanyLogo(company) {
  return COMPANY_LOGOS[company] || { icon: company.charAt(0), color: '#6B7280', bg: '#F3F4F6' };
}

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id) || CATEGORIES[0];
}

// Time helpers
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
  return n.toString();
}

const INITIAL_POSTS = [
  {
    id: 1,
    title: { en: "OpenAI announces GPT-4o with real-time voice, vision", ko: "OpenAI, 실시간 음성/비전 지원하는 GPT-4o 전격 공개" },
    summary: { en: "A unified model across text, vision, and audio natively.", ko: "텍스트, 비전, 오디오를 네이티브로 처리하는 새로운 플래그십 모델 GPT-4o가 공개되었습니다." },
    content_body: { en: "## A new era of interaction\n\nOpenAI introduced **GPT-4o**, capable of reasoning across audio, vision, and text in real time.", ko: "## 인간과 AI 상호작용의 새로운 패러다임\n\nOpenAI가 실시간으로 오디오, 시각, 텍스트를 추론할 수 있는 새로운 플래그십 모델인 **GPT-4o**를 발표했습니다." },
    program_l2: "ChatGPT (GPT-4o)",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 3600000).toISOString(),
    views: 125430,
    is_important: true
  },
  {
    id: 2,
    title: { en: "Anthropic launches Claude 3.5 Sonnet", ko: "Anthropic, 역대급 성능의 Claude 3.5 Sonnet 출시" },
    summary: { en: "Claude 3.5 Sonnet outperforms GPT-4o in many benchmarks.", ko: "대부분의 벤치마크에서 GPT-4o를 능가하며, 실시간 UI 렌더링 기능인 'Artifacts'를 탑재한 Claude 3.5 Sonnet이 출시되었습니다." },
    content_body: { en: "## Raising the bar\n\nAnthropic has released **Claude 3.5 Sonnet**, setting new industry benchmarks.", ko: "## 벤치마크의 새로운 기준\n\nAnthropic이 기존 3.0 Opus 모델을 압도하는 성능의 **Claude 3.5 Sonnet**을 출시했습니다." },
    program_l2: "Claude 3.5",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date(Date.now() - 90 * 86400000).toISOString(),
    views: 29000,
    is_important: false
  },
  {
    id: 8,
    title: "Suno v3, 단 몇 초만에 스튜디오 퀄리티 음악 생성",
    summary: "가사만 입력하면 보컬과 반주가 모두 포함된 완전한 형태의 노래를 2분 분량으로 생성해내는 Suno v3가 정식 출시되었습니다.",
    content_body: "## 누구나 작곡가가 되는 시대\n\nAI 음악 스타트업 **Suno**가 라디오에서 나오는 노래와 구분이 어려울 수준의 고품질 오디오를 생성하는 v3 모델을 출시했습니다. \n\n팝, K-Pop, 클래식, 랩 등 거의 모든 장르를 지원하며, 사용자가 직접 가사를 적거나 AI에게 가사 작성을 맡기면 단 몇 초 만에 보컬 트랙이 포함된 완전한 형태의 음원을 2곡씩 생성해 줍니다. 이는 오디오 생성 분야의 'ChatGPT 모먼트'로 평가받고 있습니다.",
    program_l2: "Suno v3",
    category_l1: "audio",
    company: "Suno",
    url: "https://suno.ai",
    created_at: new Date(Date.now() - 50 * 86400000).toISOString(),
    views: 31200,
    is_important: true
  },
  {
    id: 9,
    title: "Cognition, 세계 최초의 완전 자율 AI 소프트웨어 엔지니어 'Devin' 공개",
    summary: "프롬프트를 주면 스스로 코딩하고, 버그를 찾고, 배포까지 완료하는 자율형 코딩 에이전트 Devin이 공개되어 업계의 비상한 관심을 모으고 있습니다.",
    content_body: "## 코딩하는 AI 에이전트\n\nAI 스타트업 **Cognition**이 자율 AI 소프트웨어 엔지니어인 **Devin**을 발표했습니다.\n\nDevin은 단순한 코드 자동완성 도구가 아닙니다. 자신만의 터미널, 코드 에디터, 브라우저를 갖추고 있으며, 업워크(Upwork) 같은 외주 플랫폼의 실제 개발 작업을 처음부터 끝까지 혼자서 완수할 수 있는 능력을 보여주었습니다. SWE-bench(소프트웨어 엔지니어링 벤치마크)에서 기존 AI 모델들의 해결률(1~4%)을 아득히 뛰어넘는 13.86%의 단독 해결률을 기록했습니다.",
    program_l2: "Devin",
    category_l1: "code",
    company: "Cognition",
    url: "https://cognition-labs.com",
    created_at: new Date(Date.now() - 75 * 86400000).toISOString(),
    views: 41000,
    is_important: true
  },
  {
    id: 10,
    title: { en: "Meta releases Llama 3, the ultimate open-source model", ko: "Meta, 궁극의 오픈소스 모델 'Llama 3' 8B 및 70B 모델 공개" },
    summary: { en: "Meta's Llama 3 sets a new standard for open-source AI.", ko: "메타가 오픈소스 AI 생태계를 이끌어갈 Llama 3 시리즈를 전격 공개했습니다. 8B 모델조차 기존 모델들을 압도합니다." },
    content_body: { en: "## The open-source counter-attack\n\n**Meta** has released **Llama 3** (8B, 70B) for free, trained on 15T tokens.", ko: "## 오픈소스의 대반격\n\n**Meta**가 Llama 시리즈의 최신작인 **Llama 3** (8B, 70B) 버전을 무료로 공개했습니다. 무려 15T(조) 토큰의 방대한 데이터셋으로 학습된 이 모델들은 추론, 수학, 코딩 등 모든 지표에서 동급 최고의 성능을 보여줍니다.\n\nMark Zuckerberg는 향후 400B 이상의 거대한 멀티모달 버전을 학습 중이라고 밝혔으며, 이는 OpenAI의 GPT-4를 오픈소스로 따라잡겠다는 강력한 의지로 풀이됩니다." },
    program_l2: "Llama 3",
    category_l1: "llm",
    company: "Meta",
    url: "https://llama.meta.com",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    views: 98000,
    is_important: true
  },
  {
    id: 3,
    title: { en: "OpenAI announces Sora, text-to-video AI model", ko: "OpenAI, 텍스트로 비디오를 만드는 'Sora' 전격 발표" },
    summary: { en: "Sora generates high-quality videos up to 1 minute from text.", ko: "최대 1분 길이의 고품질 비디오를 텍스트 프롬프트만으로 완벽하게 생성해 내는 AI 모델 Sora가 공개되어 전 세계 영상 산업에 충격을 주고 있습니다." },
    content_body: { en: "## Blurring the lines of reality\n\nOpenAI has unveiled **Sora**, an AI model that transforms text commands into high-resolution, realistic videos.", ko: "## 현실과 CG의 경계가 무너지다\n\nOpenAI가 텍스트 명령어를 고해상도의 현실적인 비디오로 변환하는 AI 모델인 **Sora**를 공개했습니다." },
    program_l2: "Sora",
    category_l1: "video",
    company: "OpenAI",
    url: "https://openai.com/sora",
    created_at: new Date(Date.now() - 150000000).toISOString(),
    views: 210000,
    is_important: true
  },
  {
    id: 4,
    title: { en: "Google launches Gemma 2 open models", ko: "Google, 압도적 가성비의 소형 오픈 모델 'Gemma 2' 공개" },
    summary: { en: "Google released Gemma 2 based on Gemini technology.", ko: "구글이 Gemini의 기술력을 바탕으로 한 오픈 모델 Gemma 2를 출시했습니다. 27B 모델이 Llama 3 70B와 맞먹는 성능을 보여줍니다." },
    content_body: { en: "## A new standard for open weights\n\nGoogle has launched **Gemma 2**, available in 9B and 27B sizes.", ko: "## 소형 모델의 대반란\n\n구글이 9B와 27B 두 가지 사이즈로 구성된 차세대 오픈 모델 **Gemma 2**를 공개했습니다." },
    program_l2: "Gemma 2",
    category_l1: "llm",
    company: "Google",
    url: "https://ai.google.dev",
    created_at: new Date(Date.now() - 24000000).toISOString(),
    views: 45000,
    is_important: false
  },
  {
    id: 5,
    title: { en: "Cursor IDE introduces 'Composer' feature", ko: "Cursor IDE, 혁명적인 'Composer' 기능 업데이트" },
    summary: { en: "Composer can edit multiple files simultaneously based on context.", ko: "AI 기반 코드 에디터인 Cursor가 여러 파일을 동시에 분석하고 수정하는 Composer 기능을 업데이트하여 개발자 생산성을 극한으로 끌어올리고 있습니다." },
    content_body: { en: "## Paradigm shift in coding\n\n**Cursor** has introduced the **Composer** feature, allowing AI to edit multiple files at once.", ko: "## 코딩 방식의 근본적 변화\n\n최고의 AI 코드 에디터로 자리잡고 있는 **Cursor**가 최신 업데이트를 통해 **Composer** 기능을 선보였습니다." },
    program_l2: "Cursor",
    category_l1: "code",
    company: "Anysphere",
    url: "https://cursor.com",
    created_at: new Date(Date.now() - 15000000).toISOString(),
    views: 82000,
    is_important: true
  }
];

const MOCK_COMMENTS = [
  { id: 1, post_id: 1, user_name: "AI크리에이터", avatar: "👤", comment_text: "GPT-4o 음성 인식 속도 진짜 미쳤습니다. 딜레이가 아예 없네요.", created_at: new Date(Date.now() - 7200000).toISOString(), is_blinded: false },
  { id: 2, post_id: 2, user_name: "프론트엔드노예", avatar: "💻", comment_text: "Claude 3.5 Sonnet의 Artifacts 기능 써보니 개발 패러다임이 바뀔 것 같습니다. 리액트 컴포넌트를 실시간으로 만들어주다니...", created_at: new Date(Date.now() - 86400000).toISOString(), is_blinded: false },
  { id: 3, post_id: 3, user_name: "영상감독A", avatar: "🎥", comment_text: "Sora는 놀랍긴 한데 언제쯤 일반인들이 써볼 수 있을까요? 빨리 써보고 싶네요.", created_at: new Date(Date.now() - 172800000).toISOString(), is_blinded: false },
  { id: 4, post_id: 8, user_name: "방구석비트메이커", avatar: "🎧", comment_text: "Suno로 음악 만들어봤는데, 장난 아니네요. 저작권 문제는 어떻게 될지 궁금합니다.", created_at: new Date(Date.now() - 259200000).toISOString(), is_blinded: false },
];
