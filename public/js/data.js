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
const INITIAL_POSTS = [
  {
    id: 1,
    title: { en: "OpenAI announces GPT-4o with real-time voice, vision", ko: "OpenAI, 실시간 음성/비전 지원하는 GPT-4o 전격 공개" },
    summary_3lines: {
      en: ["OpenAI launched GPT-4o.", "It has real-time audio/vision.", "Available to free users."],
      ko: ["오픈AI가 새로운 플래그십 모델 GPT-4o를 깜짝 공개했습니다.", "마치 사람처럼 실시간으로 음성과 영상을 인식하고 반응합니다.", "놀랍게도 무료 사용자에게도 점진적으로 개방됩니다."]
    },
    summary: { en: "A unified model across text, vision, and audio natively.", ko: "텍스트, 비전, 오디오를 네이티브로 처리하는 새로운 플래그십 모델 GPT-4o가 공개되었습니다." },
    content_body: { en: "OpenAI has officially launched GPT-4o...", ko: `## ⚡ 베일 벗은 GPT-4o, 실시간 소통의 혁명\n오픈AI가 5월 13일(현지시각), 사람처럼 실시간으로 보고 듣고 말할 수 있는 새로운 플래그십 인공지능 모델 **'GPT-4o(포오)'**를 전격 공개했습니다. 텍스트, 오디오, 이미지를 동시에 처리할 수 있어 지연 시간 없는 자연스러운 대화가 가능한 것이 특징입니다.\n\n## 🗣️ 영화 '그녀(Her)'가 현실로\n샘 알트만 CEO는 "영화 속 AI가 현실이 되었다"며 극찬했습니다. 기존 모델은 음성을 텍스트로 변환한 뒤 처리하느라 2~3초의 지연이 있었으나, GPT-4o는 평균 320밀리초(0.32초) 만에 응답해 사람 간 대화 속도와 비슷합니다. 또한 스마트폰 카메라로 방정식을 비추면 실시간으로 풀이 과정을 설명해주기도 합니다.\n\n## 🚀 전 세계 AI 지각변동 예고\n가장 놀라운 점은 이 혁신적인 모델이 유료 구독자뿐만 아니라 **무료 사용자에게도 개방**된다는 것입니다. 오픈AI는 몇 주에 걸쳐 전 세계 사용자들에게 순차적으로 배포할 예정이며, 이는 경쟁사들에게 엄청난 압박으로 작용할 것으로 보입니다.` },
    program_l2: "ChatGPT (GPT-4o)",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 3600000).toISOString(),
    views: 1042,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: true
  },
  {
    id: 2,
    title: { en: "Anthropic launches Claude 3.5 Sonnet", ko: "Anthropic, 역대급 성능의 Claude 3.5 Sonnet 출시" },
    summary_3lines: {
      en: ["Anthropic released Claude 3.5 Sonnet.", "It features Artifacts UI.", "Outperforms GPT-4o in many tasks."],
      ko: ["앤스로픽이 차세대 모델 Claude 3.5 Sonnet을 공개했습니다.", "우측 패널에 코드를 실시간 렌더링하는 '아티팩트' 기능을 탑재했습니다.", "GPT-4o를 뛰어넘는 압도적인 속도와 코딩 능력을 자랑합니다."]
    },
    summary: { en: "Claude 3.5 Sonnet outperforms GPT-4o in many benchmarks.", ko: "대부분의 벤치마크에서 GPT-4o를 능가하며, 실시간 UI 렌더링 기능인 'Artifacts'를 탑재한 Claude 3.5 Sonnet이 출시되었습니다." },
    content_body: { en: "Anthropic has officially launched Claude 3.5 Sonnet...", ko: `## 📰 벤치마크를 휩쓴 중간 체급 모델\n**Anthropic(앤스로픽)**이 기존 자사의 최상위 모델을 뛰어넘는 중간 체급 모델 **'Claude 3.5 소넷(Claude 3.5 Sonnet)'**을 기습 출시하여 업계의 벤치마크 기준을 갈아치웠습니다.\n\n## 📖 혁신적인 실시간 UI '아티팩트'\n새롭게 출시된 3.5 Sonnet은 경쟁사인 OpenAI의 GPT-4o를 대학원 수준의 추론 등 주요 성능 평가 지표에서 압도했습니다. 작동 속도 또한 이전 세대 최상위 모델(Opus)보다 2배 이상 빨라졌습니다. 특히 이번 발표의 핵심은 대화창 우측에 전용 패널을 띄워 AI가 작성한 리액트(React) 코드나 그래픽을 실시간으로 렌더링해 주는 **'Artifacts(아티팩트)'** 기능입니다.\n\n## 📌 서비스 이용 안내\n이 모델은 현재 Claude.ai 웹사이트에서 누구나 무료로 사용해 볼 수 있으며, 모바일 앱에서도 정식 지원됩니다.` },
    program_l2: "Claude 3.5",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date(Date.now() - 7200000).toISOString(),
    views: 850,
    status_badge: "Free",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 3,
    title: { en: "Google unveils Gemini 1.5 Pro with 1M context window", ko: "구글, 100만 토큰 컨텍스트 윈도우 갖춘 Gemini 1.5 Pro 공개" },
    summary_3lines: {
      en: ["Google announced Gemini 1.5 Pro.", "It handles 1 million tokens.", "Can process a 1-hour video at once."],
      ko: ["구글이 100만 토큰을 처리하는 Gemini 1.5 Pro를 공개했습니다.", "최대 1시간 길이의 영상이나 3만 줄의 코드를 한 번에 분석합니다.", "MoE 아키텍처를 적용해 연산 효율을 극대화했습니다."]
    },
    summary: { en: "Process up to 1 hour of video or 30K lines of code in a single prompt.", ko: "단일 프롬프트로 최대 1시간 분량의 영상 또는 3만 줄의 코드를 처리할 수 있는 Gemini 1.5 Pro를 공개했습니다." },
    content_body: { en: "Google has announced Gemini 1.5 Pro...", ko: `## 📰 100만 토큰 처리의 마법\n구글이 단일 프롬프트로 최대 1시간 분량의 동영상이나 3만 줄의 코드를 한 번에 분석할 수 있는 차세대 AI 모델 **'Gemini 1.5 Pro'**를 전격 공개했습니다. 이는 기존 상용 모델 중 가장 거대한 문맥 파악 범위를 자랑합니다.\n\n## 📖 영상부터 코드베이스 통째 분석까지\n이번 업데이트의 핵심은 'Mixture-of-Experts (MoE)' 아키텍처를 도입하여 연산 효율을 극대화한 것입니다. 덕분에 수백 페이지 분량의 PDF 문서나 1시간이 넘는 긴 영상을 통째로 업로드하여 요약하고 검색하는 것이 가능해졌습니다.\n\n## 📌 개발자 프리뷰 및 향후 계획\n구글은 일부 개발자와 기업 고객을 대상으로 이 모델의 프리뷰 버전을 우선 제공하며, 점진적으로 일반 사용자들에게도 배포를 확대할 예정입니다.` },
    program_l2: "Gemini 1.5",
    category_l1: "multi",
    company: "Google",
    url: "https://google.com",
    created_at: new Date(Date.now() - 172800000).toISOString(),
    views: 620,
    status_badge: "Paid",
    tech_status: "Stable",
    is_important: false
  },
  {
    id: 4,
    title: { en: "OpenAI reveals Sora, a stunning text-to-video AI model", ko: "OpenAI, 실사급 텍스트-비디오 AI 'Sora' 전격 공개" },
    summary_3lines: {
      en: ["OpenAI revealed video AI Sora.", "Creates up to 60-second photorealistic videos.", "Currently in red-teaming phase."],
      ko: ["오픈AI가 텍스트를 영상으로 바꾸는 모델 'Sora(소라)'를 공개했습니다.", "최대 60초 길이의 완벽한 실사급 동영상을 생성합니다.", "물리 법칙을 이해하여 높은 프레임 일관성을 유지합니다."]
    },
    summary: { en: "Sora can create realistic and imaginative videos up to 60 seconds long.", ko: "프롬프트 하나로 최대 1분 길이의 압도적인 실사급 동영상을 생성하는 Sora가 공개되었습니다." },
    content_body: { en: "OpenAI introduced Sora...", ko: `## 📰 상상이 현실로, 텍스트가 영상으로\n오픈AI(OpenAI)가 프롬프트 한 줄만으로 최대 1분 길이의 압도적인 실사급 동영상을 생성할 수 있는 AI 모델 **'Sora(소라)'**를 공개하여 전 세계 영상 산업에 큰 충격을 던졌습니다.\n\n## 📖 물리 법칙을 이해하는 세계 시뮬레이터\n소라는 단순히 픽셀을 짜깁기하는 수준을 넘어, 피사체가 3차원 공간에서 어떻게 움직이고 상호작용하는지에 대한 '물리적 세계의 이해'를 바탕으로 영상을 생성합니다. 눈보라 치는 도쿄 거리를 걷는 여성, 털의 질감이 생생하게 살아있는 매머드 등 극사실적인 영상을 완벽하게 소화해냅니다.\n\n## 📌 윤리적 과제\n현재 소라는 안전성 평가를 위해 일부 시각 예술가와 영화 제작자에게만 제한적으로 권한이 부여된 상태입니다.` },
    program_l2: "Sora",
    category_l1: "video",
    company: "OpenAI",
    url: "https://openai.com/sora",
    created_at: new Date(Date.now() - 259200000).toISOString(),
    views: 2100,
    status_badge: "Beta",
    tech_status: "Alpha",
    is_important: true
  },
  {
    id: 5,
    title: { en: "Cognition introduces Devin, the first AI software engineer", ko: "코그니션, 세계 최초 완전 자율 AI 소프트웨어 엔지니어 'Devin' 발표" },
    summary_3lines: {
      en: ["Cognition launched Devin, an AI engineer.", "It can build full projects autonomously.", "Includes its own browser and terminal."],
      ko: ["스스로 코드를 짜고 배포하는 자율형 AI 엔지니어 Devin이 등장했습니다.", "자체 브라우저와 터미널 환경을 내장하고 있습니다.", "인간 개발자처럼 에러를 찾아 스스로 디버깅합니다."]
    },
    summary: { en: "Devin can plan and execute complex software engineering tasks.", ko: "스스로 코드를 작성하고 버그를 고치며, 앱을 배포까지 하는 자율형 AI 엔지니어 Devin이 등장했습니다." },
    content_body: { en: "Devin is a tireless, skilled teammate...", ko: `## 📰 AI, 인간 개발자의 자리를 넘보다\n미국의 AI 스타트업 코그니션(Cognition)이 지시사항만 내리면 기획부터 코딩, 디버깅, 배포까지 스스로 수행하는 완전 자율형 AI 엔지니어 **'Devin(데빈)'**을 전격 발표했습니다.\n\n## 📖 24시간 일하는 완벽한 동료\n데빈은 터미널, 코드 편집기, 브라우저가 포함된 자체 가상 환경을 갖추고 있어 인간처럼 구글링을 하고, 코드를 작성한 뒤 에러가 나면 스스로 원인을 찾아 수정합니다. 실제로 실제 고객의 의뢰를 완벽하게 수행해내며 놀라운 자율성을 입증했습니다.\n\n## 📌 소프트웨어 생태계의 전환\n현재 데빈은 초기 액세스 형태로 일부 기업에 제공되고 있으며, 개발자의 역할을 '코더'에서 '리뷰어'로 변화시킬 핵심 기폭제가 될 전망입니다.` },
    program_l2: "Devin",
    category_l1: "code",
    company: "Cognition",
    url: "https://cognition-labs.com",
    created_at: new Date(Date.now() - 432000000).toISOString(),
    views: 930,
    status_badge: "Paid",
    tech_status: "Beta",
    is_important: true
  }
];

const MOCK_COMMENTS = [];

function getCompanyLogo(company) {
  return COMPANY_LOGOS[company] || COMPANY_LOGOS['Startup'];
}
