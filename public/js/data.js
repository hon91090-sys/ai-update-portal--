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
  { id: 'multi', emoji: '🤖', label: { en: 'Multimodal', ko: '멀티모델 & AI' }, color: '#D93025' },
  { id: 'hardware', emoji: '⚙️', label: { en: 'Hardware & Chips', ko: '하드웨어 & 칩' }, color: '#5C5C5C' },
  { id: 'startup', emoji: '🚀', label: { en: 'Startups', ko: '스타트업 & 투자' }, color: '#F59E0B' },
  { id: 'policy', emoji: '⚖️', label: { en: 'Ethics & Policy', ko: '윤리 & 법제도' }, color: '#4B5563' },
];

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
  'Apple': { icon: '', color: '#000000', bg: '#F0F0F0' }
};

function getCompanyLogo(company) {
  return COMPANY_LOGOS[company] || { icon: company ? company.charAt(0) : 'AI', color: '#6B7280', bg: '#F3F4F6' };
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

const INITIAL_POSTS = [
  {
    id: 1,
    title: { en: "OpenAI announces GPT-4o with real-time voice, vision", ko: "OpenAI, 실시간 음성/비전 지원하는 GPT-4o 전격 공개" },
    summary: { en: "A unified model across text, vision, and audio natively.", ko: "텍스트, 비전, 오디오를 네이티브로 처리하는 새로운 플래그십 모델 GPT-4o가 공개되었습니다." },
    content_body: { en: "## A New Era of Multimodal Interaction\nOpenAI recently introduced GPT-4o, a new flagship AI model capable of real-time reasoning across audio, vision, and text, completely redefining human-computer interaction.\n\n## Seamless Native Processing\nUnlike older models that relied on multiple steps to translate audio into text before processing, GPT-4o understands the raw audio waveform natively. This allows it to instantly pick up on emotional tone, background noise, and even multiple speakers. With a response time of just 232 milliseconds, it perfectly mimics the speed of human conversation. Mira Murati, CTO of OpenAI, stated, 'This is a massive leap towards creating more natural, intuitive AI.'\n\n## Rollout and Pricing\nThe model is rolling out gradually to ChatGPT Plus users, and its API usage cost has been reduced by 50% compared to GPT-4 Turbo.", ko: "## 📰 차세대 멀티모달 모델의 등장\n**OpenAI**가 텍스트, 시각, 오디오를 실시간으로 동시에 처리할 수 있는 새로운 플래그십 인공지능 모델인 **'GPT-4o'**를 전격 공개하며 인간과 AI 상호작용의 새로운 지평을 열었습니다.\n\n## 📖 지연 없는 네이티브 처리 기술\n과거에는 사용자의 음성을 텍스트로 변환한 뒤 처리하는 방식이었으나, 이번 GPT-4o 모델은 오디오 파형 자체를 '네이티브'로 이해합니다. 이를 통해 인간의 미세한 감정, 어조, 심지어 주변 소음까지 파악할 수 있게 되었습니다.\n특히 평균 232ms라는 응답 속도를 달성하여 실제 사람과 대화하는 듯한 지연 없는 인터랙션을 구현했습니다. 미라 무라티 최고기술책임자(CTO)는 발표 현장에서 '이것은 보다 자연스럽고 직관적인 AI를 향한 거대한 도약'이라고 평가했습니다. 기존 모델(GPT-4 Turbo) 대비 API 호출 비용도 절반으로 줄어들어 기업들의 도입 부담도 크게 낮아졌습니다.\n\n## 📌 서비스 배포 일정 및 가격\n새로운 실시간 음성 기능은 향후 몇 주에 걸쳐 ChatGPT Plus 유료 사용자들에게 순차적으로 배포될 예정이며, 데스크톱 버전 앱도 함께 출시되었습니다." },
    program_l2: "ChatGPT (GPT-4o)",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 3600000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 2,
    title: { en: "Anthropic launches Claude 3.5 Sonnet", ko: "Anthropic, 역대급 성능의 Claude 3.5 Sonnet 출시" },
    summary: { en: "Claude 3.5 Sonnet outperforms GPT-4o in many benchmarks.", ko: "대부분의 벤치마크에서 GPT-4o를 능가하며, 실시간 UI 렌더링 기능인 'Artifacts'를 탑재한 Claude 3.5 Sonnet이 출시되었습니다." },
    content_body: { en: "## Anthropic's Shocking Middle-Tier Release\nAnthropic has officially launched Claude 3.5 Sonnet, a middle-tier model that shockingly outperforms nearly all existing competitor models on the market.\n\n## Setting New Standards with 'Artifacts'\nOperating at twice the speed of its predecessor (Claude 3 Opus) while costing significantly less, Claude 3.5 Sonnet dominates major leaderboards in coding, logic, and visual reasoning. The biggest highlight is a massive UX breakthrough called 'Artifacts'. Claude now opens a dedicated side-panel where it can generate, render, and modify code snippets or SVG graphics in real-time. This essentially shifts Claude from a simple conversational AI into a collaborative workspace.\n\n## Availability Details\nThe model is currently available for free on Claude.ai, with higher rate limits for Pro subscribers.", ko: "## 📰 벤치마크를 휩쓴 중간 체급 모델\n**Anthropic(앤스로픽)**이 기존 자사의 최상위 모델을 뛰어넘는 중간 체급 모델 **'Claude 3.5 소넷(Claude 3.5 Sonnet)'**을 기습 출시하여 업계의 벤치마크 기준을 갈아치웠습니다.\n\n## 📖 혁신적인 실시간 UI '아티팩트'\n새롭게 출시된 3.5 Sonnet은 경쟁사인 OpenAI의 GPT-4o를 대학원 수준의 추론(GPQA), 학부 수준 지식(MMLU), 코딩(HumanEval) 등 주요 성능 평가 지표에서 압도했습니다. 작동 속도 또한 이전 세대 최상위 모델(Opus)보다 2배 이상 빨라졌습니다.\n특히 이번 발표의 핵심은 단순한 지능 향상을 넘어선 **'Artifacts(아티팩트)'**라는 혁신적인 UI 기능입니다. 대화창 우측에 전용 패널을 띄워 AI가 작성한 리액트(React) 코드나 SVG 그래픽을 실시간으로 렌더링하고 수정할 수 있게 해 주어, 챗봇을 완벽한 '협업 워크스페이스'로 탈바꿈시켰습니다.\n\n## 📌 서비스 이용 안내\n이 모델은 현재 Claude.ai 웹사이트에서 누구나 무료로 사용해 볼 수 있으며, iOS 전용 앱에서도 정식 지원됩니다." },
    program_l2: "Claude 3.5",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date(Date.now() - 7200000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 3,
    title: { en: "Google unveils Gemini 1.5 Pro with 1M context window", ko: "구글, 100만 토큰 컨텍스트 윈도우 갖춘 Gemini 1.5 Pro 공개" },
    summary: { en: "Process up to 1 hour of video or 30K lines of code in a single prompt.", ko: "단일 프롬프트로 최대 1시간 분량의 영상 또는 3만 줄의 코드를 처리할 수 있는 Gemini 1.5 Pro를 공개했습니다." },
    content_body: { en: "Google has announced Gemini 1.5 Pro, bringing a staggering 1 million token context window to developers and enterprises.", ko: "구글이 100만 토큰 컨텍스트 윈도우를 지원하는 새로운 모델인 Gemini 1.5 Pro를 발표했습니다. 방대한 양의 데이터를 한 번에 입력받아 분석할 수 있습니다." },
    program_l2: "Gemini 1.5",
    category_l1: "multi",
    company: "Google",
    url: "https://google.com",
    created_at: new Date(Date.now() - 172800000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  }
];

const MOCK_COMMENTS = [
  { id: 101, post_id: 1, user_id: 'user1', user_name: 'AI Enthusiast', avatar: '🤖', comment_text: '진짜 실시간 음성 대박이네요... 마치 Her 영화 보는 느낌입니다.', is_blinded: false, created_at: new Date(Date.now() - 3000000).toISOString() },
  { id: 102, post_id: 1, user_id: 'user2', user_name: 'Developer Kim', avatar: '👨‍💻', comment_text: 'API 가격 절반으로 내린게 가장 마음에 듭니다. 토이 프로젝트에 바로 붙여봐야겠어요.', is_blinded: false, created_at: new Date(Date.now() - 2500000).toISOString() },
  { id: 103, post_id: 2, user_id: 'user3', user_name: 'UX Designer', avatar: '🎨', comment_text: '아티팩트 기능 미쳤습니다. 프론트엔드 작업 방식이 완전히 바뀔 듯...', is_blinded: false, created_at: new Date(Date.now() - 5000000).toISOString() }
];
