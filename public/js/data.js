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
  },
  {
    id: 4,
    title: { en: "OpenAI reveals Sora, a stunning text-to-video AI model", ko: "OpenAI, 실사급 텍스트-비디오 AI 'Sora' 전격 공개" },
    summary: { en: "Sora can create realistic and imaginative videos up to 60 seconds long.", ko: "프롬프트 하나로 최대 1분 길이의 압도적인 실사급 동영상을 생성하는 Sora가 공개되었습니다." },
    content_body: { en: "OpenAI introduced Sora, an AI model that can create realistic and imaginative scenes from text instructions.", ko: "OpenAI가 텍스트 명령을 받아 최대 60초 길이의 놀랍도록 사실적이고 창의적인 동영상을 생성할 수 있는 AI 모델 'Sora'를 공개하여 영상 산업에 큰 충격을 주고 있습니다." },
    program_l2: "Sora",
    category_l1: "video",
    company: "OpenAI",
    url: "https://openai.com/sora",
    created_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    views: 0,
    status_badge: "Beta",
    tech_status: "Alpha",
    is_important: true
  },
  {
    id: 5,
    title: { en: "Cognition introduces Devin, the first AI software engineer", ko: "코그니션, 세계 최초 완전 자율 AI 소프트웨어 엔지니어 'Devin' 발표" },
    summary: { en: "Devin can plan and execute complex software engineering tasks.", ko: "스스로 코드를 작성하고 버그를 고치며, 앱을 배포까지 하는 자율형 AI 엔지니어 Devin이 등장했습니다." },
    content_body: { en: "Devin is a tireless, skilled teammate, equally ready to build alongside you or independently complete tasks for you to review.", ko: "Devin은 터미널, 코드 편집기, 브라우저가 포함된 자체 가상 환경을 갖추고 있어 인간 엔지니어처럼 리서치를 하고, 에러를 수정하며, 전체 프로젝트를 처음부터 끝까지 혼자서 빌드할 수 있습니다." },
    program_l2: "Devin",
    category_l1: "code",
    company: "Cognition",
    url: "https://cognition-labs.com",
    created_at: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    views: 0,
    status_badge: "Paid",
    tech_status: "Beta",
    is_important: true
  },
  {
    id: 6,
    title: { en: "Midjourney v6 Alpha released with highly realistic generation", ko: "미드저니 v6 알파 출시, 극사실주의 이미지 생성 및 텍스트 렌더링 지원" },
    summary: { en: "V6 brings better prompt adherence, longer prompts, and text drawing.", ko: "프롬프트 이해도가 비약적으로 향상되고 이미지 내에 정확한 텍스트 렌더링이 가능해진 Midjourney v6가 출시되었습니다." },
    content_body: { en: "Midjourney V6 offers drastically improved realism, better prompt accuracy, and finally, the ability to render legible text on images.", ko: "미드저니(Midjourney) V6 모델은 이전 버전과 비교할 수 없을 정도로 정교한 텍스처와 빛 반사, 실사 수준의 피부 표현을 자랑합니다. 또한 사용자가 요청한 영어 텍스트를 이미지 내 팻말 등에 정확히 새겨 넣는 기능이 추가되었습니다." },
    program_l2: "Midjourney V6",
    category_l1: "image",
    company: "Midjourney Inc",
    url: "https://midjourney.com",
    created_at: new Date(Date.now() - 864000000).toISOString(), // 10 days ago (Beyond 1 week trending filter)
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 7,
    title: { en: "Suno v3 generates radio-quality songs in seconds", ko: "Suno v3 공개: 몇 초 만에 라디오 품질의 풀 송(Full Song) 생성" },
    summary: { en: "Suno AI v3 lets anyone create full, 2-minute songs with vocals and instrumentation.", ko: "장르와 가사만 입력하면 보컬과 악기가 포함된 2분짜리 고품질 음악을 뚝딱 만들어내는 Suno v3가 출시되었습니다." },
    content_body: { en: "Suno v3 represents a massive leap in audio generation, producing incredibly catchy and structurally coherent songs.", ko: "Suno AI의 v3 모델은 단 몇 초 만에 라디오에서 틀어도 손색없을 수준의 고음질 음악을 만들어냅니다. 특히 보컬의 감정 표현력과 악기 세션의 퀄리티가 기존 음악 AI들을 아득히 뛰어넘었습니다." },
    program_l2: "Suno v3",
    category_l1: "audio",
    company: "Suno",
    url: "https://suno.com",
    created_at: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    views: 0,
    status_badge: "Freemium",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 8,
    title: { en: "NVIDIA unveils Blackwell B200 GPU for era of generative AI", ko: "엔비디아, 생성형 AI 시대를 위한 차세대 '블랙웰(Blackwell) B200' 칩 발표" },
    summary: { en: "Blackwell GPU promises massive performance gains for AI training and inference.", ko: "기존 호퍼(Hopper) 아키텍처 대비 추론 성능이 최대 30배 향상된 슈퍼칩 블랙웰 B200이 GTC 2024에서 공개되었습니다." },
    content_body: { en: "The Blackwell architecture enables organizations to build and run real-time generative AI on trillion-parameter LLMs at up to 25x less cost and energy.", ko: "젠슨 황 CEO는 GTC 2024 기조연설에서 차세대 AI 슈퍼칩인 '블랙웰 B200'을 공개했습니다. 이 칩은 거대한 조 단위 파라미터의 AI 모델을 훈련하고 실시간으로 추론하는 비용과 에너지 소모를 최대 25배까지 줄여줄 것으로 기대됩니다." },
    program_l2: "Blackwell",
    category_l1: "hardware",
    company: "NVIDIA",
    url: "https://nvidia.com",
    created_at: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 9,
    title: { en: "EU passes historic AI Act, the world's first comprehensive AI law", ko: "유럽연합(EU), 세계 최초의 포괄적 인공지능 규제법 'AI Act' 최종 승인" },
    summary: { en: "The European Parliament has approved the AI Act, setting global standards.", ko: "위험도 기반의 엄격한 AI 시스템 규제를 담은 EU의 인공지능법(AI Act)이 유럽 의회를 통과했습니다." },
    content_body: { en: "The AI Act takes a risk-based approach, banning certain uses of AI while strictly regulating high-risk systems like biometric categorization.", ko: "이번에 통과된 EU AI법은 AI 시스템을 4단계 위험 등급으로 분류하고, 인간의 권리를 침해할 수 있는 '수용 불가능한 위험' AI의 사용을 엄격히 금지합니다. 전 세계 테크 기업들의 컴플라이언스 기준이 될 전망입니다." },
    program_l2: "AI Act",
    category_l1: "policy",
    company: "EU",
    url: "",
    created_at: new Date(Date.now() - 1036800000).toISOString(), // 12 days ago
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 10,
    title: { en: "Meta releases Llama 3 with 8B and 70B models", ko: "메타(Meta), 최고 성능의 오픈소스 모델 'Llama 3' 8B 및 70B 버전 출시" },
    summary: { en: "Llama 3 raises the bar for open-source AI performance.", ko: "모든 벤치마크에서 동급 오픈소스 모델들을 압도하는 Meta의 Llama 3가 공개되어 누구나 다운로드할 수 있게 되었습니다." },
    content_body: { en: "Meta's Llama 3 models deliver state-of-the-art performance for their size and include drastically improved reasoning capabilities.", ko: "오픈소스 생태계를 이끌고 있는 메타(Meta)가 Llama 3 8B(80억)와 70B(700억) 파라미터 모델을 출시했습니다. 향후 400B 이상의 초대형 모델도 훈련 중이며, AI 민주화에 크게 기여하고 있습니다." },
    program_l2: "Llama 3",
    category_l1: "llm",
    company: "Meta",
    url: "https://llama.meta.com",
    created_at: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 11,
    title: { en: "xAI open-sources Grok-1, a massive 314B parameter model", ko: "일론 머스크의 xAI, 무려 3,140억 파라미터의 'Grok-1' 전격 오픈소스화" },
    summary: { en: "xAI has released the weights of its massive Grok-1 model on GitHub.", ko: "현존하는 가장 거대한 오픈소스 모델 중 하나인 Grok-1의 가중치(weights) 전체가 GitHub에 무료로 공개되었습니다." },
    content_body: { en: "In a surprising move, Elon Musk's xAI released Grok-1, a 314 billion parameter Mixture-of-Experts model, under the Apache 2.0 license.", ko: "일론 머스크가 이끄는 xAI가 3,140억 개의 파라미터를 가진 MoE(전문가 혼합) 모델인 Grok-1을 Apache 2.0 라이선스로 배포했습니다. 거대한 덩치 때문에 실행 허들이 높지만, 오픈소스 연구 커뮤니티에는 큰 선물이 되었습니다." },
    program_l2: "Grok",
    category_l1: "startup",
    company: "xAI",
    url: "https://x.ai",
    created_at: new Date(Date.now() - 950400000).toISOString(), // 11 days ago
    views: 0,
    status_badge: "Free",
    tech_status: "Alpha",
    is_important: false
  },
  {
    id: 12,
    title: { en: "Runway introduces Gen-3 Alpha for photorealistic video", ko: "Runway, 극강의 화질과 물리 엔진 탑재한 Gen-3 Alpha 동영상 모델 공개" },
    summary: { en: "Gen-3 Alpha creates highly detailed videos with realistic physics and human motion.", ko: "Sora의 강력한 대항마로 떠오른 Runway의 3세대 동영상 생성 AI가 엄청난 모션 제어 능력과 함께 출시되었습니다." },
    content_body: { en: "Runway's Gen-3 Alpha brings unprecedented control, consistency, and temporal stability to text-to-video generation.", ko: "영화 제작자와 크리에이터들을 위한 생성 AI 플랫폼 Runway가 Gen-3 Alpha 모델을 선보였습니다. 프롬프트에 대한 정밀한 제어, 텍스트 일관성 유지, 자연스러운 인간 모션과 물리 법칙 시뮬레이션에서 비약적인 발전을 이루었습니다." },
    program_l2: "Gen-3 Alpha",
    category_l1: "video",
    company: "Runway",
    url: "https://runwayml.com",
    created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    views: 0,
    status_badge: "Paid",
    tech_status: "Beta",
    is_important: false
  },
  {
    id: 13,
    title: { en: "Stability AI announces Stable Diffusion 3", ko: "스태빌리티 AI, 차세대 이미지 모델 Stable Diffusion 3 발표" },
    summary: { en: "SD3 features improved typography generation and complex prompt understanding.", ko: "Diffusion Transformer 아키텍처를 채택하여 텍스트 렌더링과 프롬프트 이해도가 극대화된 SD3가 공개되었습니다." },
    content_body: { en: "Stable Diffusion 3 uses a new Diffusion Transformer architecture, allowing for much more accurate rendering of text and complex composition.", ko: "스태빌리티 AI(Stability AI)가 차세대 텍스트-이미지 생성 모델인 Stable Diffusion 3(SD3)를 발표했습니다. 새 모델은 여러 물체의 정확한 배치와 이미지 내부의 글자(Typography) 생성에 특화되었습니다." },
    program_l2: "Stable Diffusion 3",
    category_l1: "image",
    company: "Stability AI",
    url: "https://stability.ai",
    created_at: new Date(Date.now() - 1123200000).toISOString(), // 13 days ago
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 14,
    title: { en: "GitHub launches Copilot Workspace for full-repo problem solving", ko: "GitHub, 레포지토리 전체를 분석해 문제를 푸는 'Copilot Workspace' 출시" },
    summary: { en: "Copilot Workspace helps developers brainstorm, plan, and code from issues.", ko: "이슈(Issue)를 주면 기획부터 코드 수정, 빌드 테스트까지 도와주는 코파일럿 워크스페이스가 출시되었습니다." },
    content_body: { en: "GitHub is evolving from a code assistant to a full project assistant. Copilot Workspace allows you to define a task in natural language, and the AI generates a plan and proposed code changes across the entire repository.", ko: "단순한 코드 자동완성을 넘어선 GitHub Copilot Workspace가 공개되었습니다. 깃허브 이슈(Issue) 하나를 지정하면, AI가 전체 레포지토리 구조를 파악한 뒤 어떤 파일을 어떻게 수정할지 기획(Plan)을 세우고, 코드를 작성하며 시뮬레이션까지 진행해 줍니다." },
    program_l2: "Copilot Workspace",
    category_l1: "code",
    company: "Microsoft",
    url: "https://github.com",
    created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 15,
    title: { en: "OpenAI introduces ChatGPT Advanced Data Analysis", ko: "OpenAI, 엑셀 파일과 데이터를 자유자재로 다루는 Advanced Data Analysis 업데이트" },
    summary: { en: "ChatGPT can now directly interact with Google Drive, OneDrive, and large datasets.", ko: "이제 구글 드라이브나 원드라이브의 대용량 엑셀, CSV 파일을 직접 불러와 차트를 그리고 데이터를 분석할 수 있습니다." },
    content_body: { en: "OpenAI has massively upgraded ChatGPT's data analysis capabilities, allowing direct integrations with cloud storage and providing interactive charts that can be downloaded or customized.", ko: "OpenAI가 ChatGPT의 데이터 분석(Advanced Data Analysis) 기능을 대폭 업그레이드했습니다. 사용자는 구글 드라이브나 마이크로소프트 원드라이브를 연동하여 복잡한 스프레드시트를 직접 불러오고, AI와 대화하며 실시간 인터랙티브 차트를 생성하고 다운로드할 수 있습니다." },
    program_l2: "Data Analysis",
    category_l1: "data",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 16,
    title: { en: "Apple introduces Apple Intelligence across iOS 18", ko: "애플, iOS 18 생태계를 아우르는 'Apple Intelligence' 전격 도입" },
    summary: { en: "A deeply integrated personal intelligence system for iPhone, iPad, and Mac.", ko: "아이폰, 아이패드, 맥에 깊숙이 통합된 개인용 인공지능 시스템인 애플 인텔리전스가 공개되었습니다." },
    content_body: { en: "Apple Intelligence brings generative AI natively into Apple's operating systems, offering intelligent writing tools, custom emojis (Genmoji), and a completely revamped Siri that can understand personal context.", ko: "애플이 WWDC 2024에서 자사 기기들에 기본 탑재되는 '애플 인텔리전스(Apple Intelligence)'를 선보였습니다. 완전히 새로워진 시리(Siri)는 사용자의 화면을 인식하고 문맥을 이해하며, 사용자는 시스템 어디에서나 AI 글쓰기 도구와 커스텀 이모지(젠모지)를 생성할 수 있습니다." },
    program_l2: "Apple Intelligence",
    category_l1: "multi",
    company: "Apple",
    url: "https://apple.com",
    created_at: new Date(Date.now() - 43200000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Beta",
    is_important: true
  },
  {
    id: 17,
    title: { en: "Mistral releases Mistral Large 2, rivaling top tier models", ko: "미스트랄 AI, 최상위 모델과 경쟁하는 'Mistral Large 2' 출시" },
    summary: { en: "A 123B parameter model with impressive reasoning and coding capabilities.", ko: "강력한 추론 및 코딩 성능을 자랑하는 1,230억 파라미터의 미스트랄 라지 2가 출시되었습니다." },
    content_body: { en: "Mistral Large 2 offers a significant leap in performance, closing the gap with OpenAI's GPT-4o and Anthropic's Claude 3.5 Sonnet, while remaining open-weights for research.", ko: "프랑스의 AI 스타트업 미스트랄(Mistral AI)이 GPT-4o와 클로드 3.5 소넷에 필적하는 성능의 'Mistral Large 2'를 발표했습니다. 특히 코드 생성과 다국어 추론 영역에서 비약적인 발전이 있었으며, 연구 목적용으로 가중치가 공개되었습니다." },
    program_l2: "Mistral Large 2",
    category_l1: "llm",
    company: "Mistral AI",
    url: "https://mistral.ai",
    created_at: new Date(Date.now() - 172800000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 18,
    title: { en: "Luma AI launches Dream Machine for ultra-fast video generation", ko: "루마 AI, 초고속 동영상 생성 모델 'Dream Machine' 공개" },
    summary: { en: "Generate high-quality, 5-second videos from text or images in just 120 seconds.", ko: "텍스트나 이미지에서 5초짜리 고품질 동영상을 불과 2분 만에 만들어내는 드림 머신이 출시되었습니다." },
    content_body: { en: "Luma AI's Dream Machine has entered the AI video race, offering fast, accessible, and highly coherent video generation available to the public for free.", ko: "루마 AI(Luma AI)가 누구나 무료로 접근할 수 있는 동영상 생성 모델 'Dream Machine'을 내놓았습니다. 뛰어난 물리 법칙 이해와 일관성을 바탕으로, 고해상도의 5초짜리 영상을 생성하는 데 약 120초밖에 걸리지 않는 엄청난 속도를 자랑합니다." },
    program_l2: "Dream Machine",
    category_l1: "video",
    company: "Luma AI",
    url: "https://lumalabs.ai",
    created_at: new Date(Date.now() - 345600000).toISOString(),
    views: 0,
    status_badge: "Freemium",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 19,
    title: { en: "Kuaishou Kling AI disrupts the video generation market", ko: "콰이쇼우 '클링(Kling) AI', 최대 2분 영상 생성으로 Sora 위협" },
    summary: { en: "China's Kuaishou releases Kling, capable of 1080p videos up to 2 minutes long.", ko: "중국 콰이쇼우가 최대 2분 길이의 1080p 동영상을 생성할 수 있는 놀라운 AI 모델 클링을 공개했습니다." },
    content_body: { en: "Kling AI utilizes a 3D spatiotemporal joint attention mechanism to create incredibly long and stable videos, heavily challenging OpenAI's yet-to-be-released Sora.", ko: "중국의 숏폼 플랫폼 콰이쇼우(Kuaishou)가 놀라운 수준의 비디오 생성 모델 '클링(Kling)'을 웹에 공개했습니다. 최대 2분 길이에 1080p 해상도, 초당 30프레임의 영상을 물리적 오류 없이 생성해 내어 전 세계의 이목을 집중시키고 있습니다." },
    program_l2: "Kling",
    category_l1: "video",
    company: "Kuaishou",
    url: "https://kling.kuaishou.com",
    created_at: new Date(Date.now() - 604800000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Beta",
    is_important: true
  },
  {
    id: 20,
    title: { en: "Cursor IDE introduces deep codebase understanding features", ko: "AI 코딩 에디터 Cursor, 압도적인 '코드베이스 이해' 기능 업데이트" },
    summary: { en: "Cursor can now analyze entire repositories to predict developer intent.", ko: "전체 프로젝트 코드를 딥-리딩하여 개발자의 의도에 맞게 다중 파일을 수정하는 기능이 추가되었습니다." },
    content_body: { en: "Anysphere has updated the Cursor IDE with an advanced 'Composer' feature that can edit multiple files simultaneously based on a single prompt, fully understanding the context of the user's codebase.", ko: "가장 인기 있는 AI 코드 에디터인 Cursor에 '컴포저(Composer)' 기능이 추가되었습니다. 단순히 코드를 추천하는 것을 넘어, 전체 프로젝트 문맥을 파악한 뒤 여러 파일에 걸친 대규모 리팩토링이나 기능 추가를 단일 프롬프트만으로 자동 수행합니다." },
    program_l2: "Cursor",
    category_l1: "code",
    company: "Anysphere",
    url: "https://cursor.com",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 21,
    title: { en: "Adobe releases Firefly Image 3 Foundation Model", ko: "어도비, 포토샵에 탑재된 차세대 'Firefly Image 3' 모델 공개" },
    summary: { en: "Massive improvements to photorealism, style variety, and prompt understanding.", ko: "사진 수준의 사실감과 프롬프트 이해도가 대폭 향상된 파이어플라이 이미지 3 모델이 출시되었습니다." },
    content_body: { en: "The new Firefly Image 3 model brings higher quality image generation natively into Adobe Photoshop, enabling creators to brainstorm and ideate faster than ever while maintaining commercial safety.", ko: "어도비가 상업적으로 안전하게 사용할 수 있는 이미지 생성 AI, 파이어플라이(Firefly)의 3세대 모델을 공개했습니다. 디테일과 조명 표현이 훨씬 정교해졌으며, 포토샵 베타 버전에 즉시 탑재되어 '생성형 채우기' 기능의 수준을 한 단계 끌어올렸습니다." },
    program_l2: "Firefly Image 3",
    category_l1: "image",
    company: "Adobe",
    url: "https://adobe.com",
    created_at: new Date(Date.now() - 1209600000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 22,
    title: { en: "Canva supercharges Magic Studio with new AI design tools", ko: "캔바, 디자인을 자동화하는 'Magic Studio' AI 기능 대폭 강화" },
    summary: { en: "Generate presentations, social media posts, and edit images instantly.", ko: "클릭 한 번으로 프레젠테이션과 게시물을 만들고 수정하는 매직 스튜디오 기능이 업데이트되었습니다." },
    content_body: { en: "Canva continues to democratize design by expanding Magic Studio. Users can now generate full multi-page presentations from a text prompt and easily resize or animate elements using AI.", ko: "글로벌 디자인 플랫폼 캔바(Canva)가 '매직 스튜디오'를 한층 강화했습니다. 프롬프트를 입력하면 전체 프레젠테이션 덱을 자동으로 생성해주며, 이미지 속 특정 물체를 골라내거나 배경을 자연스럽게 늘리는 등 전문가급 디자인 작업을 누구나 쉽게 할 수 있도록 지원합니다." },
    program_l2: "Magic Studio",
    category_l1: "image",
    company: "Canva",
    url: "https://canva.com",
    created_at: new Date(Date.now() - 518400000).toISOString(),
    views: 0,
    status_badge: "Freemium",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 23,
    title: { en: "Zapier Central lets you build AI bots that automate workflows", ko: "재피어(Zapier) 센트럴 출시: 내 업무를 자동화하는 AI 봇 만들기" },
    summary: { en: "Teach AI bots to act on data across 6,000+ apps without coding.", ko: "코딩 없이 6천 개 이상의 앱 데이터를 연동해 스스로 업무를 처리하는 AI 봇 플랫폼이 등장했습니다." },
    content_body: { en: "Zapier Central is a new experimental workspace where you can teach AI bots to handle tasks across thousands of apps, acting as a tireless assistant that understands natural language commands.", ko: "자동화 플랫폼 재피어가 'Zapier Central'을 발표했습니다. 사용자가 자연어로 지시를 내리면, AI 봇이 슬랙, 노션, 구글 시트 등 수많은 앱과 실시간으로 통신하며 반복적인 데이터 입력이나 알림 전송 등의 업무를 자동으로 완수해 줍니다." },
    program_l2: "Zapier Central",
    category_l1: "data",
    company: "Zapier",
    url: "https://zapier.com",
    created_at: new Date(Date.now() - 950400000).toISOString(),
    views: 0,
    status_badge: "Beta",
    tech_status: "Alpha",
    is_important: false
  },
  {
    id: 24,
    title: { en: "ElevenLabs launches AI Music Generator", ko: "일레븐랩스(ElevenLabs), 고품질 AI 음악 생성기 정식 런칭" },
    summary: { en: "Create distinct music tracks by describing the mood and genre.", ko: "분위기와 장르만 묘사하면 독창적인 음악 트랙을 만들어내는 일레븐랩스의 신규 기능입니다." },
    content_body: { en: "Known for their hyper-realistic voice synthesis, ElevenLabs is now expanding into music generation, offering users the ability to create instrumental and vocal tracks from simple text prompts.", ko: "세계 최고 수준의 AI 음성 합성 기술을 보유한 일레븐랩스가 음악 생성 시장에 뛰어들었습니다. 사용자가 원하는 감정이나 장르를 프롬프트에 입력하면 고음질의 음악 트랙을 실시간으로 믹싱하여 생성해냅니다." },
    program_l2: "Music Generator",
    category_l1: "audio",
    company: "ElevenLabs",
    url: "https://elevenlabs.io",
    created_at: new Date(Date.now() - 432000000).toISOString(),
    views: 0,
    status_badge: "Freemium",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 25,
    title: { en: "Udio AI exits stealth mode with incredible song generation", ko: "음악 생성 AI 'Udio', 압도적인 보컬 퀄리티와 함께 정식 서비스 개시" },
    summary: { en: "Udio produces high-fidelity, emotionally resonant songs in any genre.", ko: "모든 장르에 걸쳐 풍부한 감정과 고음질을 자랑하는 음악 AI Udio가 대중에 공개되었습니다." },
    content_body: { en: "Developed by former Google DeepMind researchers, Udio allows anyone to create radio-ready songs. Its ability to generate clear, emotionally expressive vocals sets it apart in the AI music space.", ko: "구글 딥마인드 출신 연구진이 개발한 음악 생성 AI 'Udio'가 서비스를 시작했습니다. 타 서비스 대비 보컬의 선명도와 곡 구성의 자연스러움이 압도적이며, 팝, 재즈, K-Pop 등 장르를 가리지 않고 감성적인 음악을 완성합니다." },
    program_l2: "Udio",
    category_l1: "audio",
    company: "Udio",
    url: "https://udio.com",
    created_at: new Date(Date.now() - 691200000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 26,
    title: { en: "AMD ramps up MI300X AI chip production to challenge NVIDIA", ko: "AMD, 엔비디아에 맞설 AI 가속기 'MI300X' 대량 양산 박차" },
    summary: { en: "AMD's Instinct MI300X aims to offer a cost-effective alternative to Nvidia's H100.", ko: "엔비디아 H100의 강력한 대안으로 떠오른 AMD의 MI300X 칩이 본격적인 점유율 확대에 나섭니다." },
    content_body: { en: "With massive memory bandwidth and capacity, AMD's MI300X is gaining traction among major cloud providers as a highly capable and cost-efficient alternative for LLM inference and training.", ko: "빅테크 기업들이 AI 칩 부족에 시달리는 가운데, AMD가 자사의 최상위 AI 가속기 'MI300X' 공급을 크게 늘리고 있습니다. 192GB에 달하는 거대한 메모리를 탑재하여 대형 언어 모델(LLM) 추론에서 엔비디아 H100보다 우수한 가성비를 제공한다는 평가입니다." },
    program_l2: "Instinct MI300X",
    category_l1: "hardware",
    company: "AMD",
    url: "https://amd.com",
    created_at: new Date(Date.now() - 777600000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 27,
    title: { en: "OpenAI announces ChatGPT Enterprise for businesses", ko: "OpenAI, 강력한 보안과 제어 기능 갖춘 'ChatGPT Enterprise' 출시" },
    summary: { en: "Enterprise-grade security, unlimited GPT-4, and advanced data analysis features.", ko: "기업용 보안, 무제한 GPT-4 사용, 고급 데이터 분석을 제공하는 B2B 요금제가 출시되었습니다." },
    content_body: { en: "ChatGPT Enterprise promises that customer prompts and company data will not be used to train OpenAI's models, addressing major privacy concerns for corporate adoption.", ko: "OpenAI가 기업 고객을 겨냥한 'ChatGPT Enterprise'를 공식 출시했습니다. 기업의 민감한 데이터가 AI 학습에 절대 사용되지 않는다는 강력한 보안 서약을 포함하며, 빠른 응답 속도와 커스텀 챗봇 생성(GPTs) 등 관리자 제어 기능을 완벽히 지원합니다." },
    program_l2: "ChatGPT Enterprise",
    category_l1: "llm",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 1468800000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 28,
    title: { en: "Google releases Gemma 2, setting a new bar for open weights", ko: "구글, 가벼우면서도 강력한 오픈 모델 'Gemma 2' 전격 공개" },
    summary: { en: "Gemma 2 in 9B and 27B parameter sizes outperforms much larger models.", ko: "크기는 작지만 훨씬 거대한 모델들을 압도하는 성능을 보여주는 구글의 Gemma 2가 공개되었습니다." },
    content_body: { en: "Built on the same research as the Gemini models, Gemma 2 offers incredible efficiency. The 27B model rivals the performance of models twice its size, making local AI deployment highly practical.", ko: "구글이 제미나이(Gemini) 기술을 기반으로 만든 오픈 모델 'Gemma'의 2세대 버전을 배포했습니다. 9B와 27B 두 가지 사이즈로 제공되며, 특히 27B 모델은 파라미터가 2배 이상 큰 타사 모델들과 맞먹는 엄청난 가성비와 추론 능력을 입증했습니다." },
    program_l2: "Gemma 2",
    category_l1: "llm",
    company: "Google",
    url: "https://google.com",
    created_at: new Date(Date.now() - 345600000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 29,
    title: { en: "Pika Labs rolls out automated Lip Sync for AI generated videos", ko: "피카(Pika) 랩스, 생성된 동영상에 음성을 맞추는 '립싱크(Lip Sync)' 기능 도입" },
    summary: { en: "Characters in Pika-generated videos can now speak with perfectly synced lip movements.", ko: "동영상 속 인물의 입모양을 입력한 오디오나 텍스트에 완벽하게 맞춰주는 기능이 추가되었습니다." },
    content_body: { en: "Pika Labs has integrated Lip Sync into its web platform, allowing users to upload an audio file or type text and have their AI-generated characters speak naturally.", ko: "AI 동영상 생성 플랫폼 피카(Pika) 랩스가 '립싱크' 기능을 정식 업데이트했습니다. 이제 사용자가 비디오를 만들고 목소리를 입력하면, 영상 속 캐릭터의 입모양이 실제 말하는 것처럼 자연스럽게 동기화되어 움직입니다." },
    program_l2: "Pika Lip Sync",
    category_l1: "video",
    company: "Pika Labs",
    url: "https://pika.art",
    created_at: new Date(Date.now() - 432000000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Beta",
    is_important: false
  },
  {
    id: 30,
    title: { en: "HeyGen introduces real-time interactive AI avatars", ko: "헤이젠(HeyGen), 실시간으로 소통 가능한 '인터랙티브 AI 아바타' 시연" },
    summary: { en: "Speak face-to-face with an AI avatar that responds instantly with low latency.", ko: "마치 실제 사람과 화상 통화하듯 지연 없이 즉각적으로 대화하는 AI 아바타 기술이 공개되었습니다." },
    content_body: { en: "HeyGen's new interactive avatars allow for seamless, real-time video conversations. The avatars listen, think via an LLM, and respond visually and audibly in a matter of milliseconds.", ko: "AI 비디오 생성 선두주자인 헤이젠(HeyGen)이 실시간 대화형 아바타 기술을 선보였습니다. 사용자가 웹캠을 켜고 말을 걸면, 화면 속 AI 아바타가 LLM을 거쳐 사용자의 의도를 파악한 뒤 밀리초 단위의 짧은 지연시간(Low Latency)으로 표정과 함께 답변을 내놓습니다." },
    program_l2: "Interactive Avatar",
    category_l1: "video",
    company: "HeyGen",
    url: "https://heygen.com",
    created_at: new Date(Date.now() - 259200000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Beta",
    is_important: true
  },
  {
    id: 31,
    title: { en: "Replit Ghostwriter goes free for all developers", ko: "리플릿(Replit), 자사의 AI 코딩 어시스턴트 'Ghostwriter' 전면 무료화 선언" },
    summary: { en: "Replit makes AI code generation accessible to everyone at no cost.", ko: "개발 진입 장벽을 낮추기 위해 Replit이 핵심 AI 코딩 도구를 모든 사용자에게 무료로 개방했습니다." },
    content_body: { en: "In an effort to empower the next billion software creators, Replit has made its Ghostwriter AI, capable of code completion and debugging, completely free for all platform users.", ko: "온라인 코딩 플랫폼 리플릿(Replit)이 그동안 유료로 제공되던 강력한 AI 코드 자동완성 도구인 'Ghostwriter'를 모든 유저에게 무료로 개방한다고 선언했습니다. 이는 소프트웨어 개발의 진입 장벽을 대폭 낮추는 파격적인 행보로 평가받고 있습니다." },
    program_l2: "Ghostwriter",
    category_l1: "code",
    company: "Replit",
    url: "https://replit.com",
    created_at: new Date(Date.now() - 518400000).toISOString(),
    views: 0,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 32,
    title: { en: "Perplexity introduces 'Pages' to turn research into visual articles", ko: "퍼플렉시티(Perplexity), 검색 결과를 멋진 기사로 만들어주는 'Pages' 기능 출시" },
    summary: { en: "Users can now convert their AI research threads into beautifully formatted web pages.", ko: "자신이 AI와 검색하며 조사한 내용을 버튼 한 번에 깔끔한 웹페이지 기사로 퍼블리싱할 수 있습니다." },
    content_body: { en: "Perplexity AI is bridging the gap between search and content creation. 'Pages' lets you compile facts, sources, and AI summaries into a structured, shareable article instantly.", ko: "AI 검색 엔진 퍼플렉시티가 'Pages(페이지)' 기능을 출시했습니다. 특정 주제에 대해 퍼플렉시티와 문답하며 조사한 내용을 기반으로, AI가 제목과 섹션을 나누고 이미지를 삽입해 공유 가능한 완성형 웹 기사로 탈바꿈시켜 줍니다." },
    program_l2: "Perplexity Pages",
    category_l1: "multi",
    company: "Perplexity AI",
    url: "https://perplexity.ai",
    created_at: new Date(Date.now() - 345600000).toISOString(),
    views: 0,
    status_badge: "Freemium",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 33,
    title: { en: "Cohere launches Command R+ specialized for RAG workflows", ko: "코히어(Cohere), RAG 및 검색 증강 기능에 특화된 'Command R+' 모델 공개" },
    summary: { en: "Command R+ excels at retrieval-augmented generation and tool use for enterprises.", ko: "기업용 데이터 검색과 도구 사용에 완벽히 최적화된 코히어의 최상위 언어 모델이 출시되었습니다." },
    content_body: { en: "Designed specifically for enterprise AI applications, Command R+ boasts 128k context length, highly advanced multi-step tool use, and top-tier capabilities in Retrieval-Augmented Generation (RAG).", ko: "기업형 AI 솔루션에 집중하고 있는 코히어(Cohere)가 최신 모델인 'Command R+'를 발표했습니다. 이 모델은 사내 문서를 정확하게 요약하고 출처를 제시하는 RAG(검색 증강 생성) 워크플로우와 다양한 외부 도구를 제어하는 데 있어 세계 최고의 성능을 자랑합니다." },
    program_l2: "Command R+",
    category_l1: "llm",
    company: "Cohere",
    url: "https://cohere.com",
    created_at: new Date(Date.now() - 777600000).toISOString(),
    views: 0,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 34,
    title: { en: "GitHub Models lets developers test top AI models directly in the browser", ko: "GitHub Models 출시: 깃허브 안에서 모든 AI 모델을 곧바로 테스트 가능" },
    summary: { en: "Access Llama, GPT-4, and more via a unified API playground on GitHub.", ko: "오픈소스부터 상용 AI 모델까지, 깃허브 내장 플레이그라운드에서 즉시 테스트하고 연동할 수 있습니다." },
    content_body: { en: "GitHub Models provides developers a sandbox environment to test, compare, and instantly integrate industry-leading open and proprietary AI models into their applications without managing separate infrastructure.", ko: "마이크로소프트 깃허브가 'GitHub Models'라는 새로운 플레이그라운드를 오픈했습니다. 개발자들은 자신의 코드 저장소를 떠나지 않고도 Llama, GPT-4, Mistral 등 다양한 모델의 성능을 비교 테스트하고 API를 즉각적으로 적용할 수 있습니다." },
    program_l2: "GitHub Models",
    category_l1: "code",
    company: "Microsoft",
    url: "https://github.com",
    created_at: new Date(Date.now() - 172800000).toISOString(),
    views: 0,
    status_badge: "Beta",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 35,
    title: { en: "OpenAI teases highly anticipated ChatGPT Search feature", ko: "OpenAI, 구글을 정조준하는 'ChatGPT Search' 시제품 제한적 공개" },
    summary: { en: "SearchGPT prototype aims to provide direct answers with clear web attribution.", ko: "빠르고 정확한 출처 기반의 답변을 제공하는 SearchGPT 프로토타입이 일부 사용자에게 열렸습니다." },
    content_body: { en: "OpenAI has officially entered the search engine wars by launching a prototype of SearchGPT. It combines the conversational capabilities of their models with real-time web information and prominent links to relevant sources.", ko: "수많은 루머를 낳았던 OpenAI의 자체 검색 엔진, 'SearchGPT' 프로토타입이 공개되었습니다. 검색창에 질문하면 실시간 웹 정보를 수집해 명확한 출처 링크(Citation)와 함께 깔끔한 답변을 정리해 주어, 기존 구글 검색의 불편함을 해소하려 합니다." },
    program_l2: "SearchGPT",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    views: 0,
    status_badge: "Beta",
    tech_status: "Alpha",
    is_important: true
  }
];

const MOCK_COMMENTS = [
  { id: 101, post_id: 1, user_id: 'user1', user_name: 'AI Enthusiast', avatar: '🤖', comment_text: '진짜 실시간 음성 대박이네요... 마치 Her 영화 보는 느낌입니다.', is_blinded: false, created_at: new Date(Date.now() - 3000000).toISOString() },
  { id: 102, post_id: 1, user_id: 'user2', user_name: 'Developer Kim', avatar: '👨‍💻', comment_text: 'API 가격 절반으로 내린게 가장 마음에 듭니다. 토이 프로젝트에 바로 붙여봐야겠어요.', is_blinded: false, created_at: new Date(Date.now() - 2500000).toISOString() },
  { id: 103, post_id: 2, user_id: 'user3', user_name: 'UX Designer', avatar: '🎨', comment_text: '아티팩트 기능 미쳤습니다. 프론트엔드 작업 방식이 완전히 바뀔 듯...', is_blinded: false, created_at: new Date(Date.now() - 5000000).toISOString() }
];
