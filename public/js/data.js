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
  return COMPANY_LOGOS[company] || { icon: company.charAt(0), color: '#6B7280', bg: '#F3F4F6' };
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
  return n.toString();
}

const INITIAL_POSTS = [
  {
    id: 1,
    title: { en: "OpenAI announces GPT-4o with real-time voice, vision", ko: "OpenAI, 실시간 음성/비전 지원하는 GPT-4o 전격 공개" },
    summary: { en: "A unified model across text, vision, and audio natively.", ko: "텍스트, 비전, 오디오를 네이티브로 처리하는 새로운 플래그십 모델 GPT-4o가 공개되었습니다." },
    content_body: { en: "## A new era of interaction\n\nOpenAI introduced **GPT-4o**, capable of reasoning across audio, vision, and text in real time.\n\nUnlike previous models where audio was transcribed to text and then processed, GPT-4o understands the raw audio waveform, allowing it to pick up on tone, background noise, and multiple speakers seamlessly. It boasts a response time of just 232 milliseconds, mimicking human conversational speed.\n\n### Key Improvements\n- Native multimodal understanding (no intermediate transcription)\n- Dramatic speed improvements for real-time voice chat\n- Enhanced visual reasoning for reading charts, graphs, and live camera feeds\n- Cost reduced by 50% compared to GPT-4 Turbo via API\n\nThis marks a significant milestone in HCI (Human-Computer Interaction), pushing us closer to truly ubiquitous AI assistants.", ko: "## 인간과 AI 상호작용의 새로운 패러다임\n\nOpenAI가 실시간으로 오디오, 시각, 텍스트를 추론할 수 있는 새로운 플래그십 모델인 **GPT-4o**를 발표했습니다.\n\n과거 음성을 텍스트로 변환하여 처리하던 방식과 달리, GPT-4o는 오디오 파형 자체를 네이티브로 이해합니다. 이를 통해 인간의 감정, 어조, 배경 소음, 다중 화자까지 완벽하게 파악하며, 평균 232ms라는 놀라운 반응 속도로 실제 사람과 대화하는 듯한 지연 없는 인터랙션을 제공합니다.\n\n### 주요 업데이트 사항\n- 텍스트/비전/오디오 네이티브 멀티모달 처리\n- 실시간 음성 번역 및 감정 인식 기능 탑재\n- 기존 GPT-4 Turbo 대비 API 사용 비용 50% 절감 및 속도 2배 향상\n- 수학, 코딩 등 복잡한 추론 지표에서 최고점 경신\n\n이번 발표로 인해 AI는 단순한 챗봇을 넘어 인간의 훌륭한 '실시간 조력자'로 진화하고 있음을 증명했습니다." },
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
    title: { en: "Anthropic launches Claude 3.5 Sonnet", ko: "Anthropic, 역대급 성능의 Claude 3.5 Sonnet 출시" },
    summary: { en: "Claude 3.5 Sonnet outperforms GPT-4o in many benchmarks.", ko: "대부분의 벤치마크에서 GPT-4o를 능가하며, 실시간 UI 렌더링 기능인 'Artifacts'를 탑재한 Claude 3.5 Sonnet이 출시되었습니다." },
    content_body: { en: "## Raising the bar\n\nAnthropic has released **Claude 3.5 Sonnet**, setting new industry benchmarks.\n\nOperating at twice the speed of its predecessor (Claude 3 Opus) while costing a fraction of the price, Claude 3.5 Sonnet dominates major leaderboards in coding, logic, and visual reasoning.\n\n### The 'Artifacts' Feature\nA massive UX breakthrough accompanied this release: **Artifacts**. Claude now opens a dedicated side-panel where it can generate, render, and modify code snippets, SVG graphics, and interactive React components in real time. \n\nThis fundamentally shifts Claude from a conversational AI to a collaborative workspace, reshaping how developers and designers prototype ideas.", ko: "## 벤치마크의 새로운 기준\n\nAnthropic이 기존 3.0 Opus 모델을 압도하는 성능의 **Claude 3.5 Sonnet**을 출시했습니다.\n\n경쟁사인 GPT-4o를 대학원 수준의 추론(GPQA), 학부 수준의 지식(MMLU), 코딩(HumanEval) 등 대다수 지표에서 뛰어넘었으며, 작동 속도 역시 기존 최상위 모델 대비 2배 이상 빨라졌습니다.\n\n### 혁명적인 'Artifacts' UI\n단순한 모델 업데이트를 넘어, 화면 우측에 코딩 결과물(React, SVG, HTML)을 실시간으로 렌더링하고 조작할 수 있는 **Artifacts** 기능이 추가되었습니다. 이제 사용자는 대화형 AI를 넘어, AI와 함께 실시간으로 결과물을 창작하는 '협업 워크스페이스'를 경험할 수 있습니다. 이는 개발자와 기획자의 프로토타이핑 방식을 영구적으로 변화시킬 것입니다." },
    program_l2: "Claude 3.5",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date(Date.now() - 90 * 86400000).toISOString(),
    views: 0,
    is_important: false
  },
  {
    id: 8,
    title: "Suno v3, 단 몇 초만에 스튜디오 퀄리티 음악 생성",
    summary: "가사만 입력하면 보컬과 반주가 모두 포함된 완전한 형태의 노래를 2분 분량으로 생성해내는 Suno v3가 정식 출시되었습니다.",
    content_body: "## 누구나 작곡가가 되는 시대\n\nAI 음악 스타트업 **Suno**가 라디오에서 나오는 노래와 구분이 어려울 수준의 고품질 오디오를 생성하는 v3 모델을 출시했습니다. \n\n팝, K-Pop, 클래식, 랩 등 거의 모든 장르를 지원하며, 사용자가 직접 가사를 적거나 AI에게 가사 작성을 맡기면 단 몇 초 만에 보컬 트랙이 포함된 완전한 형태의 음원을 2곡씩 생성해 줍니다. 이는 오디오 생성 분야의 'ChatGPT 모먼트'로 평가받고 있습니다.\n\n### 기술적 도약\n기존 v2 모델의 경우 기계음이 섞이거나 음질이 다소 떨어지는 한계가 있었으나, 이번 v3는 스튜디오 레코딩 퀄리티를 자랑합니다. 프롬프트 이해 능력이 대폭 향상되어 '어쿠스틱 기타로 시작해 일렉트로닉 EDM으로 터지는 케이팝' 같은 복잡한 요구사항도 완벽하게 소화해냅니다.\n\n### 저작권 및 향후 전망\n음악 산업계는 이 거대한 혁명에 긴장하고 있습니다. 누구나 스포티파이 수준의 곡을 찍어낼 수 있게 되면서, 창작의 허들은 사라졌지만 동시에 무분별한 생성 음악의 저작권 문제(AI 학습 데이터)가 새로운 법적 화두로 떠오르고 있습니다. Suno는 이러한 논란 속에서도 최근 1,000억 원 이상의 대규모 투자를 유치하며 시장을 선도하고 있습니다.",
    program_l2: "Suno v3",
    category_l1: "audio",
    company: "Suno",
    url: "https://suno.ai",
    created_at: new Date(Date.now() - 50 * 86400000).toISOString(),
    views: 0,
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
    views: 0,
    is_important: true
  },
  {
    id: 10,
    title: { en: "Meta releases Llama 3, the ultimate open-source model", ko: "Meta, 궁극의 오픈소스 모델 'Llama 3' 8B 및 70B 모델 공개" },
    summary: { en: "Meta's Llama 3 sets a new standard for open-source AI.", ko: "메타가 오픈소스 AI 생태계를 이끌어갈 Llama 3 시리즈를 전격 공개했습니다. 8B 모델조차 기존 모델들을 압도합니다." },
    content_body: { en: "## The open-source counter-attack\n\n**Meta** has released **Llama 3** (8B, 70B) for free, trained on 15T tokens.\n\nThe 8B model rivals previous-generation flagship models, while the 70B model competes head-to-head with proprietary giants like GPT-4 and Claude 3 Sonnet. \n\n### Next Steps\nMark Zuckerberg announced that Meta is already training a massive 400B+ parameter multimodal variant of Llama 3, signaling a commitment to keep the AI ecosystem open and highly competitive. This move puts immense pressure on closed-source API providers by offering comparable intelligence at a fraction of the inference cost.", ko: "## 오픈소스의 대반격\n\n**Meta**가 Llama 시리즈의 최신작인 **Llama 3** (8B, 70B) 버전을 무료로 공개했습니다. 무려 15T(조) 토큰의 방대한 데이터셋으로 학습된 이 모델들은 추론, 수학, 코딩 등 모든 지표에서 동급 최고의 성능을 보여줍니다.\n\n특히 8B 파라미터 모델의 경우 개인용 노트북이나 스마트폰에서도 구동이 가능할 정도로 가벼우면서도, 이전 세대의 거대 모델들과 맞먹는 뛰어난 성능을 발휘하여 온디바이스(On-device) AI 생태계의 기폭제가 되고 있습니다.\n\n### 거대 모델 출시 예고\nMark Zuckerberg는 향후 400B(4천억 파라미터) 이상의 거대한 멀티모델 버전을 현재 학습 중이라고 밝혔으며, 이는 OpenAI의 GPT-4를 오픈소스로 완전히 따라잡겠다는 강력한 의지로 풀이됩니다. 기업들은 이제 값비싼 API 종속에서 벗어나 자체적으로 Llama 3를 미세조정(Fine-tuning)하여 보안이 보장된 인하우스 AI를 구축할 수 있게 되었습니다." },
    program_l2: "Llama 3",
    category_l1: "llm",
    company: "Meta",
    url: "https://llama.meta.com",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    views: 0,
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
    views: 0,
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
    views: 0,
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
    views: 0,
    is_important: true
  },
  {
    id: 11,
    title: { en: "ChatGPT unveiled by OpenAI, sparking global AI race", ko: "OpenAI, 전 세계를 뒤흔든 'ChatGPT' 최초 공개" },
    summary: { en: "The conversational model sets a record for fastest-growing user base.", ko: "역사상 가장 빠르게 1억 명의 사용자를 달성한 대화형 AI 'ChatGPT'가 세상에 첫 선을 보였습니다." },
    content_body: { en: "## The AI iPhone Moment\n\nOpenAI has released **ChatGPT**, a conversational agent based on the GPT-3.5 architecture.\n\nIts ability to write essays, code, and answer complex questions with human-like fluency has shocked the world. It reached 1 million users in just 5 days, setting a new paradigm for generative AI and triggering a massive arms race among tech giants like Google and Microsoft.", ko: "## AI의 아이폰 모먼트\n\nOpenAI가 GPT-3.5 아키텍처를 기반으로 한 대화형 AI **ChatGPT**를 전격 공개했습니다.\n\n에세이 작성부터 복잡한 코딩, 논문 요약까지 인간과 같은 유창함으로 대답하는 이 모델은 전 세계에 엄청난 충격을 주었습니다. 단 5일 만에 100만 명의 사용자를 끌어모으며 IT 역사상 가장 빠른 성장세를 기록했으며, 구글의 '코드 레드' 발령 등 글로벌 빅테크 기업들의 생성형 AI 군비 경쟁에 불을 지폈습니다." },
    program_l2: "ChatGPT",
    category_l1: "llm",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date("2022-11-30T10:00:00Z").toISOString(),
    views: 105000,
    is_important: true
  },
  {
    id: 12,
    title: { en: "Midjourney v5 revolutionizes AI image generation", ko: "Midjourney v5 출시, 사진과 구분 불가한 극사실주의 도달" },
    summary: { en: "Photorealistic images with perfect hands and textures.", ko: "손가락 렌더링 오류를 극복하고 완벽한 사진 품질을 보여주는 미드저니 v5가 출시되었습니다." },
    content_body: { en: "## Photorealism Achieved\n\n**Midjourney v5** has been officially released, resolving major issues like six-fingered hands.\n\nThe new algorithm produces strikingly photorealistic textures, dynamic lighting, and accurate anatomical proportions. It has caused a stir in the photography and art communities, raising both awe and copyright/ethical concerns.", ko: "## 완벽한 극사실주의의 도래\n\n이미지 생성 AI의 최강자 **Midjourney**가 대규모 업데이트인 **v5** 버전을 출시했습니다.\n\n기존 생성 AI들의 고질적인 문제였던 '기괴한 손가락(6개, 7개)' 렌더링 문제를 완벽하게 극복했으며, 피부 질감, 눈동자 반사광, 머리카락 등 세밀한 부분에서 실제 카메라로 찍은 사진과 구분이 불가능할 정도의 압도적인 극사실주의를 구현해 냈습니다. 이로 인해 사진 및 디자인 업계에 엄청난 반향을 일으키고 있습니다." },
    program_l2: "Midjourney",
    category_l1: "image",
    company: "Midjourney Inc",
    url: "https://midjourney.com",
    created_at: new Date("2023-03-15T00:00:00Z").toISOString(),
    views: 85000,
    is_important: true
  },
  {
    id: 13,
    title: { en: "Google declares 'Code Red', introduces Bard", ko: "구글, 챗GPT 대항마 'Bard(바드)' 전격 공개" },
    summary: { en: "Google enters the chatbot wars with its LaMDA-powered Bard.", ko: "구글이 초거대 언어 모델 LaMDA를 기반으로 한 대화형 AI 서비스 '바드(Bard)'를 공개하며 반격에 나섰습니다." },
    content_body: { en: "## The Empire Strikes Back\n\nFollowing OpenAI's success, **Google** has hastily unveiled **Bard**, powered by their proprietary LaMDA model.\n\nDesigned as a collaborative AI experimental service, Bard aims to combine the breadth of the world's knowledge with the power of Google's LLMs. While its initial demo faced some factual inaccuracies, it signifies the beginning of a fierce AI war.", ko: "## 제국의 역습\n\nChatGPT의 폭발적인 흥행으로 사내에 '코드 레드(Code Red)'를 발령했던 **구글(Google)**이 마침내 자사의 초거대 언어 모델 LaMDA를 기반으로 한 **Bard(바드)**를 대중에 공개했습니다.\n\n바드는 웹의 방대한 정보와 구글의 검색 능력을 결합하여 최신 정보에 대한 질의응답이 가능하다는 강점을 내세우고 있습니다. 비록 첫 시연 행사에서 제임스 웹 우주망원경에 대한 오답을 내놓으며 주가가 하락하는 해프닝이 있었으나, 전 세계 검색 시장 1위인 구글의 본격적인 참전이라는 점에서 AI 전쟁의 서막을 알리는 중요한 이정표가 되었습니다." },
    program_l2: "Bard",
    category_l1: "llm",
    company: "Google",
    url: "https://bard.google.com",
    created_at: new Date("2023-02-06T00:00:00Z").toISOString(),
    views: 76000,
    is_important: true
  },
  {
    id: 14,
    title: { en: "NVIDIA announces H100 Hopper GPU", ko: "NVIDIA, 차세대 AI 가속기 'H100' GPU 아키텍처 발표" },
    summary: { en: "The H100 GPU promises 9x faster AI training performance.", ko: "트랜스포머 엔진을 탑재하여 기존 A100 대비 최대 9배 빠른 학습 속도를 자랑하는 차세대 괴물 GPU H100이 공개되었습니다." },
    content_body: { en: "## Fueling the AI Boom\n\n**NVIDIA** CEO Jensen Huang has unveiled the **H100 Tensor Core GPU** based on the new Hopper architecture.\n\nFeaturing a dedicated Transformer Engine, it offers up to 9x faster training for LLMs compared to the A100. This hardware leap is crucial for tech companies looking to train trillion-parameter models, effectively crowning NVIDIA as the arms dealer of the AI revolution.", ko: "## AI 혁명의 엔진\n\n**NVIDIA**의 젠슨 황 CEO가 새로운 호퍼(Hopper) 아키텍처 기반의 **H100 텐서 코어 GPU**를 전격 발표했습니다.\n\n이 GPU는 거대 언어 모델(LLM) 학습을 위해 세계 최초로 '트랜스포머 엔진(Transformer Engine)'을 하드웨어 수준에 탑재했습니다. 기존 최고 사양인 A100 대비 AI 학습 속도를 최대 9배, 추론 속도를 30배까지 끌어올릴 수 있는 괴물 같은 성능을 자랑합니다. GPT-4와 같은 초거대 모델을 개발하려는 빅테크 기업들의 H100 확보 전쟁이 치열해지며, 엔비디아는 명실상부한 전 세계 AI 인프라의 지배자로 자리매김했습니다." },
    program_l2: "Hopper H100",
    category_l1: "hardware",
    company: "NVIDIA",
    url: "https://nvidia.com",
    created_at: new Date("2022-03-22T00:00:00Z").toISOString(),
    views: 92000,
    is_important: true
  },
  {
    id: 15,
    title: { en: "GitHub Copilot X integrates GPT-4", ko: "GitHub, GPT-4 탑재한 차세대 개발 도구 'Copilot X' 공개" },
    summary: { en: "Bringing chat, voice, and PR automation to developers.", ko: "GPT-4를 결합하여 에디터 내장 채팅, PR 요약, 코드 설명 기능을 제공하는 Copilot X 비전이 발표되었습니다." },
    content_body: { en: "## Beyond Code Completion\n\n**GitHub** announced **Copilot X**, an upgraded vision powered by OpenAI's GPT-4.\n\nMoving beyond simple autocomplete, it introduces Copilot Chat for IDEs, automated Pull Request summaries, and AI-generated unit tests. This integration transforms Copilot from a smart autocomplete tool into a full-fledged AI pair programmer.", ko: "## 단순한 자동완성을 넘어서\n\n마이크로소프트 산하의 **GitHub**가 OpenAI의 최신 GPT-4 모델을 전면 도입한 차세대 개발자 도구 비전, **Copilot X**를 발표했습니다.\n\n기존 코파일럿이 코드 몇 줄을 추천해 주는 수준이었다면, 코파일럿 X는 에디터 내장형 채팅(Copilot Chat)을 통해 코드의 에러 원인을 분석하거나 특정 함수의 리팩토링을 지시할 수 있습니다. 또한 풀 리퀘스트(PR) 설명 자동 작성, 코드 기반 문서(Docs) 질의응답 등 개발 파이프라인 전체에 AI가 스며들어, 문자 그대로 완벽한 'AI 페어 프로그래머'의 역할을 수행하게 됩니다." },
    program_l2: "Copilot",
    category_l1: "code",
    company: "Microsoft",
    url: "https://github.com/features/copilot",
    created_at: new Date("2023-03-22T00:00:00Z").toISOString(),
    views: 68000,
    is_important: true
  },
  {
    id: 16,
    title: { en: "Runway releases Gen-2, text-to-video breakthrough", ko: "Runway, 텍스트로 영상 만드는 'Gen-2' 일반 대중 공개" },
    summary: { en: "Create original videos just by typing a text prompt.", ko: "텍스트 명령어만으로 원본 비디오를 즉석에서 생성할 수 있는 놀라운 AI, Runway Gen-2 모델이 퍼블릭 런칭되었습니다." },
    content_body: { en: "## Generating videos from words\n\n**Runway** has opened access to **Gen-2**, a multi-modal AI system that can generate novel videos with text, images, or video clips.\n\nUnlike Gen-1 which required an existing video to stylize, Gen-2 creates entirely new video content from scratch using just text prompts. Though limited to short, silent clips, it represents a massive leap forward for AI in film and animation.", ko: "## 상상력이 영상이 되다\n\nAI 영상 제작의 선구자인 **Runway(런웨이)**가 텍스트 프롬프트만으로 새로운 비디오를 생성할 수 있는 **Gen-2** 모델을 대중에게 공개했습니다.\n\n기존 Gen-1 모델이 원본 비디오에 필터나 스타일을 입히는 수준이었다면, Gen-2는 아무것도 없는 백지상태에서 오직 텍스트 명령어만으로 사실적인 영상이나 애니메이션 클립을 만들어냅니다. 아직 클립의 길이가 짧고 완벽하진 않지만, 영화 제작자들과 크리에이터들에게 스톡 푸티지(Stock footage) 시장의 미래를 엿보게 해 준 혁명적인 기술 도약입니다." },
    program_l2: "Gen-2",
    category_l1: "video",
    company: "Runway",
    url: "https://runwayml.com",
    created_at: new Date("2023-06-07T00:00:00Z").toISOString(),
    views: 54000,
    is_important: false
  },
  {
    id: 17,
    title: { en: "Microsoft integrates ChatGPT into Bing Search", ko: "Microsoft, 챗GPT 탑재한 '새로운 Bing(빙)' 검색 엔진 발표" },
    summary: { en: "New Bing combines search indexes with conversational AI.", ko: "MS가 자사의 검색 엔진 빙(Bing)에 GPT-4 기반의 대화형 AI를 결합하여 구글의 독점 시장에 도전장을 내밀었습니다." },
    content_body: { en: "## Search reinvented\n\n**Microsoft** revealed a revamped **Bing** search engine and Edge browser powered by a next-generation OpenAI large language model.\n\nDubbed your 'AI copilot for the web', it provides conversational search, real-time web citations, and content generation. This bold move directly challenges Google's core business model and sparks a new era of AI-driven search experiences.", ko: "## 검색 패러다임의 혁신\n\n**마이크로소프트(Microsoft)**가 자사의 검색 엔진 빙(Bing)과 엣지(Edge) 브라우저에 최신 OpenAI 언어 모델(이후 GPT-4로 밝혀짐)을 통합한 **새로운 Bing**을 전격 발표했습니다.\n\n'웹을 위한 AI 부조종사'를 표방하는 이 서비스는 단순한 링크 나열을 넘어, 사용자의 복잡한 질문에 대해 인터넷 문서를 종합하여 답변을 요약하고 출처(각주)를 달아주는 대화형 인터페이스를 제공합니다. 지난 20년간 이어진 구글의 검색 독점 체제에 가장 강력한 위협으로 떠올랐으며, 전 세계 사용자 수백만 명이 대기 명단에 등록하는 기염을 토했습니다." },
    program_l2: "Bing AI",
    category_l1: "llm",
    company: "Microsoft",
    url: "https://bing.com",
    created_at: new Date("2023-02-07T00:00:00Z").toISOString(),
    views: 89000,
    is_important: true
  },
  {
    id: 18,
    title: { en: "EU passes the historic AI Act", ko: "유럽연합(EU), 세계 최초의 포괄적 인공지능 규제법 'AI Act' 통과" },
    summary: { en: "A landmark framework regulating AI risk levels in Europe.", ko: "AI의 위험도를 분류하고 딥페이크, 생체 인식 등에 강력한 규제를 가하는 EU의 AI법안이 유럽의회를 통과했습니다." },
    content_body: { en: "## Regulating the AI Wild West\n\nEuropean Parliament lawmakers have approved the **AI Act**, a sweeping set of rules to govern artificial intelligence.\n\nThe act classifies AI systems by risk. Unacceptable risks (like social scoring) are banned, high-risk systems face strict compliance, and generative AI models like ChatGPT must adhere to transparency requirements, disclosing AI-generated content. This legislation is expected to become a global blueprint for AI regulation.", ko: "## 인공지능 규제의 글로벌 이정표\n\n유럽연합(EU) 의회가 세계 최초로 인공지능 기술의 개발과 활용을 포괄적으로 규제하는 **AI Act(인공지능법)**를 압도적 찬성으로 통과시켰습니다.\n\n이 법안은 AI 시스템이 미치는 위험도를 4단계로 분류하여 규제를 차등 적용합니다. 인간의 행동을 조작하거나 안면 인식 등으로 사회적 점수를 매기는 행위는 '수용 불가능한 위험'으로 아예 금지되며, 챗GPT나 미드저니 같은 생성형 AI는 콘텐츠가 AI에 의해 생성되었음을 명확히 표기해야 하는 투명성 의무가 부여됩니다. 이 법안은 향후 미국과 아시아 국가들의 AI 규제법 제정에 강력한 가이드라인(브뤼셀 효과)이 될 전망입니다." },
    program_l2: "AI Act",
    category_l1: "policy",
    company: "EU",
    url: "https://europarl.europa.eu",
    created_at: new Date("2024-03-13T00:00:00Z").toISOString(),
    views: 45000,
    is_important: true
  },
  {
    id: 19,
    title: { en: "Anthropic introduces Claude 2, a safer AI", ko: "Anthropic, 한층 똑똑하고 안전해진 'Claude 2' 런칭" },
    summary: { en: "Claude 2 supports 100K context window and enhanced logic.", ko: "10만 토큰의 방대한 컨텍스트 윈도우와 개선된 코딩 능력을 갖춘 클로드 2가 공개되었습니다." },
    content_body: { en: "## Long-form processing pioneer\n\n**Anthropic** has unveiled **Claude 2**, bringing significant improvements in performance and safety.\n\nThe standout feature is its massive 100K token context window, allowing users to upload entire books, codebases, or hundreds of pages of documents for the AI to analyze in a single prompt. Positioned as a 'safer' and more steerable alternative to ChatGPT, Claude 2 marks Anthropic's transition from a research lab to a major commercial player.", ko: "## 문서 분석의 끝판왕\n\nAI 안전성 연구 기업 **Anthropic(앤스로픽)**이 자사의 차세대 대화형 AI인 **Claude 2(클로드 2)**를 대중에 공개했습니다.\n\n가장 눈에 띄는 특징은 무려 10만 개(100K)의 토큰을 한 번에 처리할 수 있는 거대한 컨텍스트 윈도우입니다. 이를 통해 사용자는 수백 페이지에 달하는 PDF 보고서, 책 한 권, 혹은 수만 줄의 소스 코드를 통째로 업로드하고 AI에게 분석이나 요약을 맡길 수 있습니다. 또한 윤리적 안전망(Constitutional AI)이 강화되어 위험하거나 부적절한 답변을 생성할 확률이 이전 모델 대비 대폭 감소했습니다." },
    program_l2: "Claude 2",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date("2023-07-11T00:00:00Z").toISOString(),
    views: 61000,
    is_important: true
  },
  {
    id: 20,
    title: { en: "Google launches Gemini 1.0, natively multimodal", ko: "구글의 역작 'Gemini(제미나이) 1.0' 전격 출시" },
    summary: { en: "Google's most capable and general AI model yet.", ko: "텍스트, 이미지, 오디오, 비디오를 태생적으로 동시 이해하는 네이티브 멀티모달 제미나이 1.0이 출시되었습니다." },
    content_body: { en: "## Native Multimodality\n\n**Google** has officially launched **Gemini 1.0**, its largest and most capable AI model.\n\nUnlike models trained separately on text and images, Gemini was built from the ground up to be seamlessly multimodal. It comes in three sizes: Ultra, Pro, and Nano, designed to run on everything from mobile devices (Pixel 8) to data centers. The Ultra model reportedly beats GPT-4 on MMLU benchmarks, reigniting the AI supremacy battle.", ko: "## 태생부터 다른 AI\n\n**구글(Google)**이 오랜 침묵을 깨고 자사 역사상 가장 강력하고 포괄적인 AI 모델인 **Gemini(제미나이) 1.0**을 발표했습니다.\n\n제미나이의 가장 큰 무기는 '네이티브 멀티모달' 아키텍처입니다. 텍스트, 코드, 이미지, 오디오, 비디오를 각각 따로 학습하여 결합한 것이 아니라, 처음부터 이 모든 정보를 동시에 이해하고 추론하도록 설계되었습니다. 최고 성능의 Ultra, 범용적인 Pro, 스마트폰에 탑재되는 온디바이스용 Nano 세 가지 크기로 출시되었으며, 구글은 Ultra 모델이 MMLU(대규모 다중작업 언어 이해) 테스트에서 인간 전문가를 90% 이상의 점수로 뛰어넘었다고 강조했습니다." },
    program_l2: "Gemini 1.0",
    category_l1: "multi",
    company: "Google",
    url: "https://deepmind.google/technologies/gemini/",
    created_at: new Date("2023-12-06T00:00:00Z").toISOString(),
    views: 95000,
    is_important: true
  },
  {
    id: 21,
    title: { en: "OpenAI board fires and rehires CEO Sam Altman", ko: "OpenAI 샘 알트먼 CEO 축출 및 전격 복귀 사태" },
    summary: { en: "A dramatic 5-day boardroom coup shakes the AI world.", ko: "OpenAI 이사회가 샘 알트먼을 해임했으나, 직원들의 압도적인 반발과 마이크로소프트의 개입으로 5일 만에 복귀하는 사상 초유의 사태가 발생했습니다." },
    content_body: { en: "## Chaos in the AI Capital\n\nIn a shocking turn of events, **OpenAI** CEO Sam Altman was abruptly fired by the non-profit board, citing a lack of 'candor'.\n\nWhat followed was a weekend of extreme drama: Microsoft immediately offered Altman a role to lead an advanced AI lab, while 95% of OpenAI employees threatened to quit unless the board resigned. Within five days, Altman returned as CEO with a newly constituted board, solidifying his power and Microsoft's influence over the world's leading AI lab.", ko: "## 실리콘밸리를 뒤흔든 5일의 드라마\n\n세계 1위 AI 기업 **OpenAI**의 이사회가 CEO인 샘 알트먼(Sam Altman)을 '소통 부족'을 이유로 기습 해임하는 초유의 사태가 발생했습니다.\n\n이 결정은 AI 업계에 엄청난 파장을 불러일으켰습니다. 최대 투자자인 마이크로소프트(MS)의 사티아 나델라 CEO는 알트먼을 MS의 새로운 AI 연구소 수장으로 영입하겠다고 발표했고, OpenAI 직원의 95% 이상이 '이사회가 사퇴하지 않으면 MS로 이직하겠다'는 연판장에 서명하며 극렬히 반발했습니다. 결국 5일 만에 이사회가 백기를 들며 전면 교체되었고, 알트먼은 CEO로 화려하게 복귀하며 AI 상업화의 가속 패달을 밟게 되었습니다." },
    program_l2: "OpenAI Corp",
    category_l1: "policy",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date("2023-11-22T00:00:00Z").toISOString(),
    views: 120000,
    is_important: true
  },
  {
    id: 22,
    title: { en: "NVIDIA breaches 2 Trillion market cap", ko: "엔비디아(NVIDIA), AI 랠리 타고 시가총액 2조 달러 돌파" },
    summary: { en: "AI chip demand propels NVIDIA into the elite trillion-dollar club.", ko: "AI 반도체 수요 폭발로 엔비디아의 주가가 급등하며, 애플과 마이크로소프트에 이어 세계에서 세 번째로 시총 2조 달러를 돌파했습니다." },
    content_body: { en: "## The undisputed AI powerhouse\n\nFueled by insatiable demand for its AI accelerators, **NVIDIA**'s market capitalization has officially crossed the 2 Trillion mark.\n\nThe unprecedented surge is driven by companies racing to buy H100 chips for training generative AI models. CEO Jensen Huang stated that 'accelerated computing and generative AI have hit the tipping point.' This milestone cements NVIDIA's status as the most critical infrastructure provider of the 21st century.", ko: "## AI 시대의 새로운 제왕\n\n생성형 AI 시대의 핵심 인프라인 칩(GPU)을 독점하다시피 하고 있는 **NVIDIA(엔비디아)**의 시가총액이 단숨에 2조 달러(약 2,600조 원)를 돌파하는 기염을 토했습니다.\n\nGPT-4, Gemini 등 초거대 AI 모델을 학습시키기 위해 전 세계 테크 기업들이 엔비디아의 H100 칩을 입도선매하려 혈안이 되어 있으며, 이는 유례없는 실적 어닝 서프라이즈로 이어졌습니다. 젠슨 황 CEO는 '가속 컴퓨팅과 생성형 AI가 임계점(Tipping point)에 도달했다'고 선언했으며, 엔비디아는 실리콘밸리에서 가장 영향력 있는 기업으로 우뚝 섰습니다." },
    program_l2: "Corporate",
    category_l1: "hardware",
    company: "NVIDIA",
    url: "https://nvidia.com",
    created_at: new Date("2024-02-23T00:00:00Z").toISOString(),
    views: 88000,
    is_important: true
  },
  {
    id: 23,
    title: { en: "Pika Labs releases Pika 1.0 for AI video generation", ko: "Pika Labs, AI 영상 생성기 'Pika 1.0' 공개 및 대규모 투자 유치" },
    summary: { en: "A powerful text-to-video AI capable of modifying existing videos and expanding canvases.", ko: "단순 텍스트 입력만으로 3D 애니메이션, 실사 영화 수준의 동영상을 생성하고 일부분만 수정할 수 있는 Pika 1.0이 런칭되었습니다." },
    content_body: { en: "## Anyone can be a director\n\nAI video startup **Pika Labs** emerged from stealth mode with the launch of **Pika 1.0** and a 55M funding round.\n\nThe platform allows users to create cinematic videos, 3D animations, and anime styles simply by typing text. Its standout feature is video-to-video editing—users can alter specific elements within a video, like changing a character's clothing, or expand the aspect ratio of existing footage using outpainting. Pika is fast becoming a major competitor to Runway in the AI video space.", ko: "## 누구나 영화감독이 될 수 있다\n\nAI 영상 생성 스타트업인 **Pika Labs(피카 랩스)**가 5,500만 달러의 대규모 투자 유치 소식과 함께, 자사의 새로운 모델인 **Pika 1.0**을 웹 기반 플랫폼으로 공개했습니다.\n\n피카 1.0은 텍스트 프롬프트를 통해 고품질의 3D 애니메이션, 실사 비디오, 카툰 스타일의 영상을 매끄럽게 생성합니다. 특히 기존 영상의 일부 영역만 드래그하여 옷을 갈아입히거나 배경을 바꾸는 인페인팅(Inpainting), 영상의 화면 비율을 자연스럽게 넓히는 아웃페인팅(Outpainting) 기능을 지원하여 영상 편집 크리에이터들에게 폭발적인 반응을 얻고 있습니다." },
    program_l2: "Pika 1.0",
    category_l1: "video",
    company: "Pika Labs",
    url: "https://pika.art",
    created_at: new Date("2023-11-28T00:00:00Z").toISOString(),
    views: 47000,
    is_important: false
  },
  {
    id: 24,
    title: { en: "Apple announces 'Apple Intelligence' integrated deeply into OS", ko: "애플(Apple), 기기 네이티브 AI 시스템 'Apple Intelligence' 공개" },
    summary: { en: "Apple enters the AI race with deeply integrated, privacy-focused AI across iOS, iPadOS, and macOS.", ko: "애플이 WWDC 2024에서 프라이버시를 강조한 온디바이스 AI '애플 인텔리전스'를 시리(Siri) 및 전체 OS에 통합한다고 발표했습니다." },
    content_body: { en: "## AI for the rest of us\n\n**Apple** has unveiled **Apple Intelligence**, its highly anticipated push into generative AI.\n\nUnlike competitors running massive cloud-based models, Apple Intelligence focuses on on-device processing to ensure user privacy. It deeply integrates with apps to prioritize notifications, rewrite text, and generate custom emojis (Genmoji). A completely revamped Siri can now take cross-app actions. For complex queries, Apple has partnered with OpenAI to seamlessly hand off requests to ChatGPT without requiring user accounts.", ko: "## 개인화된 애플 스타일의 AI\n\n**애플(Apple)**이 WWDC 2024에서 자사의 운영체제(iOS, iPadOS, macOS) 전반에 걸쳐 깊숙이 통합되는 강력한 AI 시스템, **Apple Intelligence(애플 인텔리전스)**를 발표했습니다.\n\n경쟁사들이 무거운 클라우드 기반 AI를 내세운 것과 달리, 애플은 '프라이버시'를 최우선으로 하여 기기 내부(온디바이스)에서 대부분의 언어와 이미지를 처리하는 아키텍처를 선보였습니다. 시리(Siri)는 화면의 문맥을 이해하고 앱 간 연동 작업을 수행할 수 있도록 진화했으며, 텍스트 재작성, 알림 요약, 맞춤형 이모티콘(Genmoji) 생성 등 실생활에 밀접한 기능들이 추가되었습니다. 더 복잡한 추론이 필요할 때는 사용자의 동의 하에 OpenAI의 ChatGPT 모델로 질문을 우회시키는 하이브리드 파트너십도 함께 공개되었습니다." },
    program_l2: "Apple Intelligence",
    category_l1: "llm",
    company: "Apple",
    url: "https://apple.com/apple-intelligence",
    created_at: new Date("2024-06-10T00:00:00Z").toISOString(),
    views: 110000,
    is_important: true
  }
];

const MOCK_COMMENTS = [
  { id: 1, post_id: 1, user_name: "AI크리에이터", avatar: "👤", comment_text: "GPT-4o 음성 인식 속도 진짜 미쳤습니다. 딜레이가 아예 없네요.", created_at: new Date(Date.now() - 7200000).toISOString(), is_blinded: false },
  { id: 2, post_id: 2, user_name: "프론트엔드노예", avatar: "💻", comment_text: "Claude 3.5 Sonnet의 Artifacts 기능 써보니 개발 패러다임이 바뀔 것 같습니다. 리액트 컴포넌트를 실시간으로 만들어주다니...", created_at: new Date(Date.now() - 86400000).toISOString(), is_blinded: false },
  { id: 3, post_id: 3, user_name: "영상감독A", avatar: "🎥", comment_text: "Sora는 놀랍긴 한데 언제쯤 일반인들이 써볼 수 있을까요? 빨리 써보고 싶네요.", created_at: new Date(Date.now() - 172800000).toISOString(), is_blinded: false },
  { id: 4, post_id: 8, user_name: "방구석비트메이커", avatar: "🎧", comment_text: "Suno로 음악 만들어봤는데, 장난 아니네요. 저작권 문제는 어떻게 될지 궁금합니다.", created_at: new Date(Date.now() - 259200000).toISOString(), is_blinded: false }
];
