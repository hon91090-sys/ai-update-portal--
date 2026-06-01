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
    content_body: { en: "## A New Era of Multimodal Interaction\nOpenAI recently introduced GPT-4o, a new flagship AI model capable of real-time reasoning across audio, vision, and text, completely redefining human-computer interaction.\n\n## Seamless Native Processing\nUnlike older models that relied on multiple steps to translate audio into text before processing, GPT-4o understands the raw audio waveform natively. This allows it to instantly pick up on emotional tone, background noise, and even multiple speakers. With a response time of just 232 milliseconds, it perfectly mimics the speed of human conversation. Mira Murati, CTO of OpenAI, stated, 'This is a massive leap towards creating more natural, intuitive AI.'\n\n## Rollout and Pricing\nThe model is rolling out gradually to ChatGPT Plus users, and its API usage cost has been reduced by 50% compared to GPT-4 Turbo.", ko: "## 📰 차세대 멀티모달 모델의 등장\n**OpenAI**가 텍스트, 시각, 오디오를 실시간으로 동시에 처리할 수 있는 새로운 플래그십 인공지능 모델인 **'GPT-4o'**를 전격 공개하며 인간과 AI 상호작용의 새로운 지평을 열었습니다.\n\n## 📖 지연 없는 네이티브 처리 기술\n과거에는 사용자의 음성을 텍스트로 변환한 뒤 처리하는 방식이었으나, 이번 GPT-4o 모델은 오디오 파형 자체를 '네이티브'로 이해합니다. 이를 통해 인간의 미세한 감정, 어조, 심지어 주변 소음까지 파악할 수 있게 되었습니다.\n특히 평균 232ms라는 응답 속도를 달성하여 실제 사람과 대화하는 듯한 지연 없는 인터랙션을 구현했습니다. 미라 무라티 최고기술책임자(CTO)는 발표 현장에서 '이것은 보다 자연스럽고 직관적인 AI를 향한 거대한 도약'이라고 평가했습니다. 기존 모델(GPT-4 Turbo) 대비 API 호출 비용도 절반으로 줄어들어 기업들의 도입 부담도 크게 낮아졌습니다.\n\n## 📌 서비스 배포 일정 및 가격\n새로운 실시간 음성 기능은 향후 몇 주에 걸쳐 ChatGPT Plus 유료 사용자들에게 순차적으로 배포될 예정이며, 데스크톱 버전 앱도 함께 출시되었습니다." },
    program_l2: "ChatGPT (GPT-4o)",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date(Date.now() - 3600000).toISOString(),
    views: 125000,
    is_important: true
  },
  {
    id: 2,
    title: { en: "Anthropic launches Claude 3.5 Sonnet", ko: "Anthropic, 역대급 성능의 Claude 3.5 Sonnet 출시" },
    summary: { en: "Claude 3.5 Sonnet outperforms GPT-4o in many benchmarks.", ko: "대부분의 벤치마크에서 GPT-4o를 능가하며, 실시간 UI 렌더링 기능인 'Artifacts'를 탑재한 Claude 3.5 Sonnet이 출시되었습니다." },
    content_body: { en: "## Anthropic's Shocking Middle-Tier Release\nAnthropic has officially launched Claude 3.5 Sonnet, a middle-tier model that shockingly outperforms nearly all existing competitor models on the market.\n\n## Setting New Standards with 'Artifacts'\nOperating at twice the speed of its predecessor (Claude 3 Opus) while costing significantly less, Claude 3.5 Sonnet dominates major leaderboards in coding, logic, and visual reasoning. The biggest highlight is a massive UX breakthrough called 'Artifacts'. Claude now opens a dedicated side-panel where it can generate, render, and modify code snippets or SVG graphics in real-time. This essentially shifts Claude from a simple conversational AI into a collaborative workspace.\n\n## Availability Details\nThe model is currently available for free on Claude.ai, with higher rate limits for Pro subscribers.", ko: "## 📰 벤치마크를 휩쓴 중간 체급 모델\n**Anthropic(앤스로픽)**이 기존 자사의 최상위 모델을 뛰어넘는 중간 체급 모델 **'Claude 3.5 Sonnet(클로드 3.5 소넷)'**을 기습 출시하여 업계의 벤치마크 기준을 갈아치웠습니다.\n\n## 📖 혁신적인 실시간 UI '아티팩트'\n새롭게 출시된 3.5 Sonnet은 경쟁사인 OpenAI의 GPT-4o를 대학원 수준의 추론(GPQA), 학부 수준 지식(MMLU), 코딩(HumanEval) 등 주요 성능 평가 지표에서 압도했습니다. 작동 속도 또한 이전 세대 최상위 모델(Opus)보다 2배 이상 빨라졌습니다.\n특히 이번 발표의 핵심은 단순한 지능 향상을 넘어선 **'Artifacts(아티팩트)'**라는 혁신적인 UI 기능입니다. 대화창 우측에 전용 패널을 띄워 AI가 작성한 리액트(React) 코드나 SVG 그래픽을 실시간으로 렌더링하고 수정할 수 있게 해 주어, 챗봇을 완벽한 '협업 워크스페이스'로 탈바꿈시켰습니다.\n\n## 📌 서비스 이용 안내\n이 모델은 현재 Claude.ai 웹사이트에서 누구나 무료로 사용해 볼 수 있으며, iOS 전용 앱에서도 정식 지원됩니다." },
    program_l2: "Claude 3.5",
    category_l1: "llm",
    company: "Anthropic",
    url: "https://anthropic.com",
    created_at: new Date(Date.now() - 90 * 86400000).toISOString(),
    views: 89000,
    is_important: true
  },
  {
    id: 8,
    title: { en: "Suno v3 generates studio-quality music in seconds", ko: "Suno v3, 단 몇 초만에 스튜디오 퀄리티 음악 생성" },
    summary: { en: "Suno v3 creates full 2-minute songs with vocals just from text.", ko: "가사만 입력하면 보컬과 반주가 모두 포함된 완전한 형태의 노래를 2분 분량으로 생성해내는 Suno v3가 정식 출시되었습니다." },
    content_body: { en: "## Text to Hit Songs in Seconds\nSuno has launched its v3 model, capable of generating radio-quality songs with vocals in mere seconds based solely on text prompts.\n\n## A 'ChatGPT Moment' for Music\nBreaking away from the robotic sounds of early audio AI, Suno v3 produces incredibly realistic tracks spanning genres from K-Pop to classical. Users can provide their own lyrics or ask the AI to write them. 'This is the ChatGPT moment for music creation,' remarked industry experts. The model understands complex prompts, seamlessly blending an acoustic intro into an EDM drop if requested.\n\n## Copyright Concerns Emerging\nWhile the technology lowers the barrier to entry for creators, it is simultaneously raising copyright and legal alarms across the music industry.", ko: "## 📰 텍스트가 완성된 음원이 되다\nAI 음악 생성 스타트업 **Suno(수노)**가 텍스트 명령어만으로 라디오에서 송출되는 수준의 고품질 음악을 만들어내는 **'v3 모델'**을 정식 출시했습니다.\n\n## 📖 오디오 분야의 챗GPT 모먼트\nSuno v3는 사용자가 장르를 지정하고 가사를 입력하면(또는 AI에게 작사를 맡기면) 단 몇 초 만에 보컬 트랙과 악기 반주가 포함된 2분 길이의 완성된 음원을 두 곡씩 생성해 냅니다. 기존 v2 모델에서 발생하던 찢어지는 기계음 문제가 완벽히 해결되었으며, '어쿠스틱 기타로 시작해 후렴구에서 일렉트로닉 EDM으로 터지는 팝'과 같은 복잡한 프롬프트 지시도 완벽하게 이해합니다.\n음악 평론가들은 이를 두고 '오디오 생성 분야에 마침내 ChatGPT 모먼트가 도래했다'고 극찬하고 있습니다.\n\n## 📌 불거지는 저작권 이슈\n창작의 장벽이 무너진 것에 대한 대중의 환호 이면에서는, 무분별한 AI 학습 데이터 저작권 문제로 인해 글로벌 대형 음반사들이 집단 소송 등 법적 대응을 준비하고 있다는 소식도 함께 전해지고 있습니다." },
    program_l2: "Suno v3",
    category_l1: "audio",
    company: "Suno",
    url: "https://suno.ai",
    created_at: new Date(Date.now() - 50 * 86400000).toISOString(),
    views: 75000,
    is_important: false
  },
  {
    id: 10,
    title: { en: "Meta releases Llama 3, the ultimate open-source model", ko: "Meta, 궁극의 오픈소스 모델 'Llama 3' 8B 및 70B 모델 공개" },
    summary: { en: "Meta's Llama 3 sets a new standard for open-source AI.", ko: "메타가 오픈소스 AI 생태계를 이끌어갈 Llama 3 시리즈를 전격 공개했습니다. 8B 모델조차 기존 모델들을 압도합니다." },
    content_body: { en: "## Meta's Open-Source Counterattack\nMeta has officially open-sourced Llama 3 (8B and 70B), setting a new performance standard for free AI models.\n\n## Outperforming Proprietary Giants\nTrained on a massive 15 Trillion tokens, Llama 3 dominates open-source leaderboards. The 8B version is lightweight enough to run on personal devices while outperforming previous heavyweights, and the 70B version competes directly with proprietary giants like GPT-4. Mark Zuckerberg emphasized Meta's commitment to open AI, stating that a 400B multimodal version is currently training to become the undisputed champion.\n\n## Deployment & Access\nDevelopers can freely download the weights from Hugging Face or access them via major cloud providers like AWS and Google Cloud.", ko: "## 📰 오픈소스 AI의 반격\n**Meta(메타)**가 자사의 거대 언어 모델 시리즈 최신작인 **'Llama 3(라마 3)'**의 8B 및 70B 사이즈 버전을 오픈소스로 무료 공개하며 닫힌 AI 생태계에 정면 승부를 걸었습니다.\n\n## 📖 상용 모델을 압도하는 스펙과 포부\n무려 15조(15T) 개의 방대한 텍스트 토큰으로 학습된 이 모델들은 추론, 수학, 코딩 등 대부분의 지표에서 동급 최고의 성능을 기록했습니다. 특히 8B 파라미터 모델의 경우 일반 노트북이나 스마트폰에서도 구동이 가능할 정도로 가벼우면서도 구형 거대 모델들을 가볍게 압도하여 '온디바이스 AI' 생태계 확장의 강력한 무기가 되고 있습니다.\n마크 저커버그 메타 CEO는 '우리의 목표는 단순히 오픈소스 1위가 아니라 현존하는 최고의 AI를 만드는 것'이라며, 현재 4천억(400B) 파라미터가 넘는 거대한 멀티모달 버전을 학습 중이라고 공식 발표했습니다.\n\n## 📌 다운로드 및 클라우드 연동\n개발자들은 허깅페이스(Hugging Face)를 통해 Llama 3의 가중치(Weights)를 직접 다운로드할 수 있으며, AWS나 구글 클라우드와 같은 주요 인프라에서도 클릭 한 번으로 배포할 수 있습니다." },
    program_l2: "Llama 3",
    category_l1: "llm",
    company: "Meta",
    url: "https://llama.meta.com",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    views: 110000,
    is_important: true
  },
  {
    id: 11,
    title: { en: "ChatGPT unveiled by OpenAI, sparking global AI race", ko: "OpenAI, 전 세계를 뒤흔든 'ChatGPT' 최초 공개" },
    summary: { en: "The conversational model sets a record for fastest-growing user base.", ko: "역사상 가장 빠르게 1억 명의 사용자를 달성한 대화형 AI 'ChatGPT'가 세상에 첫 선을 보였습니다." },
    content_body: { en: "## The Global AI Spark\nIn late 2022, OpenAI stunned the world by unveiling ChatGPT, a highly fluent conversational AI agent based on the GPT-3.5 architecture.\n\n## Historic Growth and Tech Arms Race\nThe system demonstrated an uncanny ability to write essays, debug code, and answer complex questions with human-like nuance. It reached 1 million users in just 5 days, setting a historic record for the fastest-growing consumer app. This unexpected consumer hit triggered a 'Code Red' at Google and sparked an intense generative AI arms race among global tech titans.\n\n## Subscription Tier Introduced\nOriginally launched as a free research preview, its overwhelming server costs quickly led to the introduction of a paid 'Plus' tier.", ko: "## 📰 글로벌 AI 붐의 서막\n**OpenAI**가 2022년 11월 말, GPT-3.5 아키텍처를 기반으로 한 대화형 인공지능 에이전트 **'ChatGPT(챗GPT)'**를 세상에 처음 공개하며 전 세계적인 생성형 AI 열풍을 점화시켰습니다.\n\n## 📖 경이로운 성장세와 빅테크 군비 경쟁\n사용자와 채팅하듯 대화를 주고받는 이 모델은 에세이 작성, 복잡한 코딩 디버깅, 다국어 번역 등 다양한 분야에서 인간에 필적하는 유창함과 맥락 추론 능력을 보여주었습니다. \n특히 출시 단 5일 만에 100만 명의 사용자를 돌파하며 IT 산업 역사상 유례없는 소비자 앱 성장세를 기록했습니다. 이러한 폭발적인 흥행은 검색 시장을 독점하고 있던 구글(Google) 내부에 '코드 레드(Code Red)' 비상 경보를 발령하게 만들었고, 마이크로소프트를 비롯한 딥테크 기업들의 무한 기술 경쟁을 촉발시켰습니다.\n\n## 📌 부분 유료화 모델 도입\n출시 초기에는 단순한 연구 목적의 무료 프리뷰로 운영되었으나, 기하급수적으로 늘어나는 서버 운영 비용을 충당하기 위해 빠르게 월 20달러의 'ChatGPT Plus' 구독 모델이 도입되었습니다." },
    program_l2: "ChatGPT",
    category_l1: "llm",
    company: "OpenAI",
    url: "https://openai.com",
    created_at: new Date("2022-11-30T10:00:00Z").toISOString(),
    views: 135000,
    is_important: true
  },
  {
    id: 12,
    title: { en: "Midjourney v5 revolutionizes AI image generation", ko: "Midjourney v5 출시, 사진과 구분 불가한 극사실주의 도달" },
    summary: { en: "Photorealistic images with perfect hands and textures.", ko: "손가락 렌더링 오류를 극복하고 완벽한 사진 품질을 보여주는 미드저니 v5가 출시되었습니다." },
    content_body: { en: "## Perfecting AI Photography\nMidjourney has officially launched v5, taking a quantum leap in photorealism and eliminating notorious AI artifacts like six-fingered hands.\n\n## Blurring Reality and Fiction\nThe new v5 algorithm generates images with strikingly realistic skin textures, accurate lighting, and flawless anatomical proportions. Photographers and digital artists have expressed both awe and concern over how indistinguishable these generations are from actual photographs. 'It is getting dangerously good,' noted one prominent digital artist. The update also allows for seamless wide aspect ratios and intricate prompt adherence.\n\n## Deepfake and Ethics Dilemma\nThe surge in hyper-realistic AI images has led to widespread debates surrounding copyright infringement and deepfakes on social media.", ko: "## 📰 극사실주의 이미지 AI의 완성\n독보적인 미적 감각을 자랑하는 이미지 생성 AI **Midjourney(미드저니)**가 대규모 그래픽 엔진 업데이트인 **'v5'** 버전을 출시하며 극사실주의 렌더링의 정점에 도달했습니다.\n\n## 📖 식별이 불가능해진 픽션과 현실\n이번 업데이트의 가장 큰 성과는 기존 이미지 생성 AI들의 고질적인 맹점이었던 '손가락 개수 렌더링 오류'를 완벽하게 극복했다는 점입니다. \n새로운 알고리즘은 모델의 피부 질감, 눈동자에 맺힌 반사광, 바람에 날리는 머리카락의 세밀한 묘사 등에서 실제 고성능 카메라로 렌즈로 촬영한 사진과 픽셀 단위로 구분이 불가능한 사실감을 보여줍니다. 프롬프트 해석력 또한 대폭 상승하여 여러 인물이나 복잡한 구도를 지시해도 뭉개짐 없이 연출해 냅니다. 상업 디자인 업계에서는 '스톡 사진 시장의 패러다임이 끝났다'며 놀라움을 감추지 못하고 있습니다.\n\n## 📌 가짜 뉴스(Deepfake) 우려 확산\n사진과 구별할 수 없는 고품질 이미지가 범람함에 따라, 프란치스코 교황이 명품 패딩을 입은 페이크 사진이 실제 기사로 보도되는 등 소셜 미디어 상의 가짜 뉴스 확산과 윤리적 팩트 체크 문제가 심각한 화두로 떠오르고 있습니다." },
    program_l2: "Midjourney",
    category_l1: "image",
    company: "Midjourney Inc",
    url: "https://midjourney.com",
    created_at: new Date("2023-03-15T00:00:00Z").toISOString(),
    views: 88000,
    is_important: false
  },
  {
    id: 14,
    title: { en: "NVIDIA announces H100 Hopper GPU", ko: "NVIDIA, 차세대 AI 가속기 'H100' GPU 아키텍처 발표" },
    summary: { en: "The H100 GPU promises 9x faster AI training performance.", ko: "트랜스포머 엔진을 탑재하여 기존 A100 대비 최대 9배 빠른 학습 속도를 자랑하는 차세대 괴물 GPU H100이 공개되었습니다." },
    content_body: { en: "## Fueling the Generative AI Boom\nNVIDIA CEO Jensen Huang has introduced the H100 Tensor Core GPU, a massive leap in hardware designed specifically to accelerate the generative AI boom.\n\n## Transformer Engine and 9x Speed\nBuilt on the new Hopper architecture, the H100 features a dedicated Transformer Engine that dramatically speeds up large language model (LLM) training. NVIDIA claims it offers up to 9x faster training performance and 30x faster inference compared to its predecessor, the A100. As tech giants like Microsoft, Meta, and Google race to secure these chips for training trillion-parameter models, the H100 has become the most sought-after piece of technology on the planet.\n\n## Supply Chain and Cost\nSupply chain constraints mean that securing H100 allocation requires massive capital, cementing NVIDIA's position as the primary arms dealer in the AI war.", ko: "## 📰 생성형 AI 시대의 새로운 심장\n**NVIDIA(엔비디아)**의 젠슨 황 최고경영자(CEO)가 GTC 컨퍼런스 기조연설에서 새로운 호퍼(Hopper) 아키텍처를 기반으로 한 차세대 **'H100 텐서 코어 GPU'**를 전격 발표하며 반도체 시장의 지배력을 재확인했습니다.\n\n## 📖 트랜스포머 엔진과 9배의 학습 속도 향상\n이 괴물 같은 스펙의 하드웨어는 최근 거대 언어 모델(LLM)의 근간이 되는 '트랜스포머 알고리즘'을 전용으로 가속하는 텐서 코어 엔진을 세계 최초로 실리콘에 내장했습니다. 엔비디아 측의 성능 발표 자료에 따르면, 이전 세대의 플래그십이었던 A100 모델 대비 인공지능 학습 속도는 최대 9배, 실시간 추론 속도는 무려 30배까지 끌어올릴 수 있습니다.\nGPT-4와 같이 수천억 개 이상의 방대한 파라미터를 가진 모델을 자체 개발하려는 글로벌 테크 기업들에게 H100 확보는 가장 시급한 당면 과제가 되었으며, 젠슨 황 CEO는 이 칩을 '21세기 산업 혁명의 원동력'이라고 칭했습니다.\n\n## 📌 천문학적인 단가와 품귀 현상\n칩 하나당 가격이 한화 4,000만 원에서 5,000만 원을 호가함에도 불구하고 수요가 공급을 아득히 초과하여, 기업들이 이 칩을 받기 위해 6개월 이상 대기해야 하는 전례 없는 품귀 현상이 벌어지고 있습니다." },
    program_l2: "Hopper H100",
    category_l1: "hardware",
    company: "NVIDIA",
    url: "https://nvidia.com",
    created_at: new Date("2022-03-22T00:00:00Z").toISOString(),
    views: 92000,
    is_important: true
  },
  {
    id: 17,
    title: { en: "Microsoft integrates ChatGPT into Bing Search", ko: "Microsoft, 챗GPT 탑재한 '새로운 Bing(빙)' 검색 엔진 발표" },
    summary: { en: "New Bing combines search indexes with conversational AI.", ko: "MS가 자사의 검색 엔진 빙(Bing)에 GPT-4 기반의 대화형 AI를 결합하여 구글의 독점 시장에 도전장을 내밀었습니다." },
    content_body: { en: "## Reimagining Internet Search\nMicrosoft has launched a fundamentally revamped version of its Bing search engine and Edge browser, heavily integrated with a next-generation OpenAI large language model.\n\n## The AI Copilot for the Web\nDubbed as 'an AI copilot for the web', the new Bing introduces a chat interface alongside traditional search results. It summarizes massive amounts of web information, provides direct answers with citations, and generates creative content like emails or itineraries. Microsoft CEO Satya Nadella proudly declared that 'the race starts today,' directly challenging Google's two-decade monopoly over internet search.\n\n## Waitlist and Surging Demand\nThe announcement triggered a massive surge in Bing app downloads, forcing millions to sign up for a waitlist to test the highly anticipated feature.", ko: "## 📰 20년 검색 독점 구도의 파괴\n**마이크로소프트(Microsoft)**가 자사의 검색 엔진 빙(Bing)과 엣지(Edge) 브라우저에 OpenAI의 차세대 언어 모델을 깊숙이 결합한 **'새로운 Bing(New Bing)'**을 공개하며 인터넷 검색 시장의 판도를 뒤흔들었습니다.\n\n## 📖 웹을 위한 인공지능 부조종사\n'웹을 위한 AI 부조종사'라는 슬로건을 내건 이 새로운 검색 엔진은 기존처럼 파란색 링크 목록을 나열하고 끝나는 것이 아닙니다. 별도의 대화형 탭을 통해 사용자의 복잡하고 긴 질문 의도를 정확히 파악하고, 실시간으로 여러 웹 문서를 종합하여 깔끔하게 요약된 문장형 답변과 출처(각주 번호)를 함께 제공합니다.\n사티아 나델라 MS CEO는 런칭 행사장에서 '검색의 새로운 패러다임 경주가 바로 오늘부터 시작된다'고 선언하며, 지난 20여 년간 이어진 구글 검색 천하의 수익 구조를 근본적으로 뒤집겠다는 야심을 명확히 내비쳤습니다.\n\n## 📌 엄청난 대기 명단과 앱스토어 1위\n기능 발표 직후 전 세계에서 수백만 명의 사용자가 베타 버전을 테스트하기 위해 대기 명단(Waitlist)에 등록했으며, 한때 외면받던 빙 모바일 앱이 앱스토어 다운로드 1위를 차지하는 기염을 토하기도 했습니다." },
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
    content_body: { en: "## World's First Comprehensive AI Regulation\nEuropean Parliament lawmakers have overwhelmingly approved the AI Act, marking the world's first comprehensive legal framework to govern artificial intelligence.\n\n## Risk-Based Framework and Restrictions\nThe landmark legislation takes a risk-based approach, categorizing AI systems into tiers. 'Unacceptable risk' applications, such as biometric mass surveillance and social scoring systems, are strictly banned. High-risk systems must undergo rigorous compliance checks. For foundational models like ChatGPT, the law mandates strict transparency obligations, requiring creators to clearly disclose when content is AI-generated and share summaries of their training data. \n\n## The 'Brussels Effect' and Future Outlook\nWhile hailed by rights groups, some tech industry leaders argue it could stifle European innovation. Nonetheless, the AI Act is expected to set a global benchmark, known as the 'Brussels Effect'.", ko: "## 📰 인공지능 규제의 글로벌 청사진 마련\n유럽연합(EU) 의회가 수년간의 치열한 논의와 공방 끝에 세계 최초로 인공지능 기술의 개발과 활용을 포괄적으로 규제하는 **'AI Act(인공지능법)'**를 압도적인 찬성표로 통과시켰습니다.\n\n## 📖 엄격한 위험 기반 통제와 투명성 의무\n이 역사적인 법안의 핵심 골자는 AI 시스템이 사회에 미치는 위험도를 4단계로 세분화하여 제재를 차등 적용하는 '위험 기반(Risk-based)' 접근법입니다. 개인의 무의식을 조작하거나 안면 인식으로 시민을 상시 감시하고 사회적 점수를 매기는 행위는 '수용 불가능한 위험'으로 지정되어 유럽 내에서 원천적으로 금지됩니다.\n아울러 챗GPT나 소라(Sora)와 같은 범용 생성형 AI(GPAI)는 그들이 만들어낸 콘텐츠가 기계에 의해 생성되었음을 사용자가 알 수 있도록 워터마크 등을 통해 명확히 표기해야 하는 강력한 투명성 의무가 부여됩니다. 또한 모델을 학습시키는 데 사용된 데이터의 저작권 요약본도 필수적으로 제출해야 합니다.\n\n## 📌 브뤼셀 효과와 산업계의 반발\n실리콘밸리의 빅테크 기업들과 일부 스타트업 진영은 과도하고 경직된 규제가 기술 혁신을 저해할 것이라 반발하고 있습니다. 그러나 과거 개인정보보호법(GDPR)이 그랬듯, 이 법안 역시 '브뤼셀 효과'를 일으켜 향후 미국과 아시아 국가들의 AI 입법에 사실상의 표준 가이드라인 역할을 할 것으로 전망됩니다." },
    program_l2: "AI Act",
    category_l1: "policy",
    company: "EU",
    url: "https://europarl.europa.eu",
    created_at: new Date("2024-03-13T00:00:00Z").toISOString(),
    views: 65000,
    is_important: true
  },
  {
    id: 31,
    title: { en: "GitHub Copilot exits technical preview, officially launches", ko: "GitHub Copilot 정식 출시, AI 코딩 시대 개막" },
    summary: { en: "The world's most widely adopted AI developer tool becomes generally available.", ko: "세계 최초로 상용화된 AI 코딩 보조 도구 깃허브 코파일럿이 모든 개발자에게 정식 출시되었습니다." },
    content_body: { en: "## AI Pair Programmer Enters the Mainstream\nGitHub has officially launched Copilot, ending its technical preview and making the AI pair programmer available to all developers worldwide.\n\n## Transforming the Developer Workflow\nPowered by OpenAI's Codex model, Copilot analyzes the context of the code being written and suggests entire lines or functions in real time. According to GitHub's research, developers using Copilot code up to 55% faster and report significantly higher job satisfaction. While it acts as a highly advanced autocomplete, its ability to generate boilerplate code and unit tests from simple comments has revolutionized daily programming tasks.\n\n## Licensing and Open Source Controversies\nDespite its success, Copilot faces ongoing legal scrutiny regarding its training data, which includes billions of lines of public code, raising complex questions about open-source licensing and fair use.", ko: "## 📰 AI 페어 프로그래밍 시대의 본격 개막\n**마이크로소프트(Microsoft)** 산하의 **GitHub(깃허브)**가 약 1년간의 베타 테스트를 마치고 AI 코딩 어시스턴트인 **'GitHub Copilot(코파일럿)'**을 전 세계 모든 개발자들에게 정식 출시했습니다.\n\n## 📖 개발자 생산성을 55% 끌어올린 혁신\nOpenAI의 코덱스(Codex) 모델을 기반으로 구동되는 코파일럿은 개발자가 작성 중인 코드의 문맥을 실시간으로 파악하여 다음 줄이나 전체 함수를 자동으로 제안합니다. \n단순한 자동완성을 넘어, 주석으로 원하는 기능을 설명하면 그에 맞는 코드를 즉석에서 짜주는 마법 같은 경험을 제공합니다. 깃허브 측의 공식 연구에 따르면 코파일럿을 사용하는 개발자는 사용하지 않는 개발자보다 무려 55%나 빠르게 작업을 완수했으며, 반복적인 보일러플레이트 코드 작성의 고통에서 해방되어 직업 만족도가 크게 상승한 것으로 나타났습니다.\n\n## 📌 오픈소스 진영의 저작권 논란\n이러한 기술적 찬사 이면에는, 코파일럿이 학습한 수십억 줄의 퍼블릭 오픈소스 코드에 대한 저작권 논란(GPL 라이선스 위반 등)이 불거지며 현재 대규모 집단 소송이 진행 중이라는 어두운 이면도 존재합니다." },
    program_l2: "Copilot",
    category_l1: "code",
    company: "Microsoft",
    url: "https://github.com/features/copilot",
    created_at: new Date("2022-06-21T00:00:00Z").toISOString(),
    views: 115000,
    is_important: true
  },
  {
    id: 32,
    title: { en: "OpenAI launches GPT-4, leaps toward multimodal capabilities", ko: "OpenAI, 압도적 추론 능력의 멀티모달 'GPT-4' 전격 출시" },
    summary: { en: "GPT-4 aces the bar exam and introduces image understanding.", ko: "미국 변호사 시험을 상위 10% 성적으로 통과하고 이미지를 이해하는 GPT-4가 공개되었습니다." },
    content_body: { en: "## A Major Leap in AI Reasoning\nOpenAI has released GPT-4, its latest and most capable AI model, setting a new benchmark for deep learning and language processing.\n\n## Acing Human Exams and Understanding Images\nThe model represents a significant evolution over its predecessor, GPT-3.5. GPT-4 is multimodal, meaning it can process and analyze both text and image inputs to generate text outputs. It has demonstrated remarkable reasoning capabilities, passing the Uniform Bar Exam with a score in the top 10% of test takers, compared to GPT-3.5 which scored in the bottom 10%. It also exhibits improved safety guardrails, being 82% less likely to respond to requests for disallowed content.\n\n## Widespread Industry Adoption\nImmediately following the launch, companies like Duolingo, Stripe, and Morgan Stanley announced deep integrations of GPT-4 into their core products.", ko: "## 📰 초거대 AI 추론 능력의 새로운 정점\n**OpenAI**가 기존 GPT-3.5의 성능을 모든 면에서 압도하는 차세대 대규모 언어 모델인 **'GPT-4'**를 공식 출시하며 또 한 번 세상을 놀라게 했습니다.\n\n## 📖 상위 10%로 변호사 시험을 통과한 지능\n단순히 말을 잘하는 것을 넘어, GPT-4는 매우 복잡한 논리적 추론이 가능해졌습니다. 미국 모의 변호사 시험(Bar Exam)에서 하위 10%에 머물렀던 이전 모델과 달리, GPT-4는 단숨에 상위 10%의 성적으로 합격선을 가볍게 통과했습니다.\n가장 눈에 띄는 변화는 **멀티모달(Multimodal)** 기능의 도입입니다. 이제 텍스트뿐만 아니라 이미지를 입력받아 분석할 수 있습니다. 밀가루, 계란, 버터 사진을 보여주면 '팬케이크나 와플을 만들 수 있다'고 레시피를 제안하며, 냅킨에 손으로 대충 그린 웹사이트 스케치를 곧바로 작동하는 HTML/CSS 코드로 변환해 내는 경이로운 시연을 선보였습니다.\n\n## 📌 강력해진 안전망과 산업계 도입\nOpenAI는 이번 모델이 악의적인 질문에 답변할 확률을 82%나 줄여 윤리적 안전망을 크게 강화했다고 밝혔으며, 발표 직후 듀오링고(Duolingo), 스트라이프(Stripe) 등 글로벌 기업들이 앞다투어 GPT-4 도입을 발표했습니다." },
    program_l2: "GPT-4",
    category_l1: "multi",
    company: "OpenAI",
    url: "https://openai.com/research/gpt-4",
    created_at: new Date("2023-03-14T00:00:00Z").toISOString(),
    views: 145000,
    is_important: true
  },
  {
    id: 33,
    title: { en: "Stability AI releases Stable Diffusion to the public", ko: "Stability AI, 이미지 생성 AI 'Stable Diffusion' 오픈소스 공개" },
    summary: { en: "High-quality text-to-image generation goes open source and runs locally.", ko: "일반 PC에서도 구동되는 고품질 이미지 생성 AI 모델이 무료 오픈소스로 풀리며 큰 파장을 일으켰습니다." },
    content_body: { en: "## The Democratization of AI Art\nStability AI has open-sourced Stable Diffusion, a powerful text-to-image AI model, making it freely available to the public.\n\n## Running AI on Consumer Hardware\nUnlike closed systems such as Midjourney or DALL-E 2, Stable Diffusion's weights are completely open. Its breakthrough lies in its efficiency—it can run on consumer-grade GPUs with as little as 8GB of VRAM, allowing anyone to generate stunning, photorealistic artwork entirely locally without internet access. This has spawned a massive community of developers who have rapidly created plugins, fine-tuned models, and user interfaces (like Automatic1111) to expand the model's capabilities.\n\n## The Dark Side of Uncensored AI\nThe open nature of the model has also sparked intense controversy, as malicious users quickly removed safety filters to generate deepfakes and non-consensual explicit images.", ko: "## 📰 생성형 AI 예술의 진정한 민주화\n영국의 AI 스타트업 **Stability AI(스테빌리티 AI)**가 고품질의 이미지를 생성해 내는 딥러닝 모델 **'Stable Diffusion(스테이블 디퓨전)'**을 완전한 오픈소스로 무료 공개하며 업계에 엄청난 파장을 일으켰습니다.\n\n## 📖 내 방 PC에서 돌아가는 고품질 이미지 AI\nDALL-E(달리)나 Midjourney(미드저니)와 같은 기존 모델들이 폐쇄적인 클라우드 유료 서비스로만 제공되었던 것과 달리, 스테이블 디퓨전은 가중치(Weights) 파일이 통째로 풀렸습니다. \n무엇보다 이 모델은 최적화가 놀라울 정도로 잘 되어 있어, 고가의 서버가 아닌 VRAM 8GB 수준의 일반적인 소비자용 그래픽카드(PC)에서도 인터넷 연결 없이 이미지를 생성할 수 있습니다. 이로 인해 수많은 전 세계 개발자들이 모여 모델을 특정 화풍으로 미세조정(Fine-tuning)하거나 컨트롤넷(ControlNet) 같은 정교한 포즈 제어 플러그인들을 쏟아내며 그들만의 거대한 자생적 생태계를 구축하고 있습니다.\n\n## 📌 안전망 부재에 따른 부작용 논란\n그러나 누구나 제한 없이 로컬에서 모델을 조작할 수 있다는 오픈소스의 특성상, 안전 필터가 해제된 버전이 유포되어 유명인의 딥페이크나 음란물 등 유해 콘텐츠가 무분별하게 생성되는 어두운 부작용도 함께 낳고 있습니다." },
    program_l2: "Stable Diffusion",
    category_l1: "image",
    company: "Stability AI",
    url: "https://stability.ai",
    created_at: new Date("2022-08-22T00:00:00Z").toISOString(),
    views: 128000,
    is_important: true
  },
  {
    id: 34,
    title: { en: "Runway introduces Gen-1 for video-to-video AI generation", ko: "Runway, 혁명적인 비디오-투-비디오 AI 'Gen-1' 공개" },
    summary: { en: "Transform existing videos into fully stylized new content via text prompts.", ko: "스마트폰으로 대충 찍은 영상을 완벽한 3D 클레이 애니메이션이나 실사 영화로 바꿔주는 Gen-1이 발표되었습니다." },
    content_body: { en: "## Transforming the Video Canvas\nRunway, the AI startup behind the foundational research for Stable Diffusion, has announced Gen-1, a revolutionary video-to-video AI model.\n\n## Stylizing Reality with Text\nGen-1 allows users to take existing video footage and apply new visual styles simply by typing text prompts or uploading reference images. In its showcase, a poorly lit video of a person holding a book was instantly transformed into a cinematic render of a futuristic robot holding a tablet. This preserves the original motion and depth mapping while completely redrawing the aesthetic, heavily reducing the time required for traditional rotoscoping and VFX work.\n\n## A Stepping Stone to Full Generation\nWhile it requires source footage to work, Gen-1 is widely considered a critical milestone that paves the way for fully generative text-to-video systems.", ko: "## 📰 영상 제작 파이프라인의 혁명\n스테이블 디퓨전 공동 개발사로 유명한 AI 영상 스타트업 **Runway(런웨이)**가 텍스트 프롬프트를 통해 기존 영상의 스타일을 완전히 바꿔버리는 비디오-투-비디오(Video-to-Video) AI 모델 **'Gen-1'**을 최초로 공개했습니다.\n\n## 📖 텍스트 한 줄로 현실을 영화로 바꾸다\nGen-1은 사용자가 스마트폰으로 대충 촬영한 비디오에 새로운 질감과 미학을 덧씌웁니다. \n예를 들어, 골판지로 대충 만든 건물 모형을 찍은 뒤 '미래지향적인 야간 도시 배경'이라고 프롬프트를 입력하면, 인물과 사물의 원래 움직임(모션)과 원근감은 그대로 유지한 채 완벽하게 렌더링 된 할리우드 SF 영화의 한 장면으로 영상이 탈바꿈합니다. 애니메이션 제작이나 특수효과(VFX) 작업 시 한 프레임씩 덧그리던 로토스코핑(Rotoscoping) 작업 시간을 비약적으로 단축시킬 수 있게 된 것입니다.\n\n## 📌 비디오 생성 AI 시대의 이정표\nGen-1은 무에서 유를 창조하는 방식이 아니라 원본 영상이 반드시 필요하다는 한계가 있지만, 업계 전문가들은 이를 '비디오 생성 AI가 마침내 상용화의 문턱을 넘은 결정적 순간'으로 평가하고 있습니다." },
    program_l2: "Gen-1",
    category_l1: "video",
    company: "Runway",
    url: "https://runwayml.com",
    created_at: new Date("2023-02-06T00:00:00Z").toISOString(),
    views: 73000,
    is_important: false
  },
  {
    id: 35,
    title: { en: "ElevenLabs launches hyper-realistic AI voice cloning", ko: "ElevenLabs, 목소리 완벽 복제 AI 서비스 런칭" },
    summary: { en: "Generate lifelike speech and clone voices with just a minute of audio.", ko: "단 1분의 음성 샘플만으로 감정과 억양까지 완벽하게 따라하는 오디오 AI 기술이 상용화되었습니다." },
    content_body: { en: "## Breaking the Uncanny Valley of Audio\nAI voice startup ElevenLabs has publicly launched its platform, offering the most realistic text-to-speech and voice cloning software available on the market.\n\n## Cloning Voices with Deep Emotion\nUnlike traditional robotic TTS systems, the ElevenLabs model understands the context of the text and applies natural pauses, breaths, and emotional inflections. Users can clone a specific person's voice by uploading just 60 seconds of clean audio. The resulting clone can read audiobooks, news articles, or scripts with an intonation that is virtually indistinguishable from a human voice actor.\n\n## Misuse and Safety Measures\nWithin days of launch, trolls used the platform to clone the voices of politicians and celebrities saying offensive remarks. ElevenLabs immediately had to implement strict identity verification safeguards to combat audio deepfakes.", ko: "## 📰 완벽한 인공 음성, 불쾌한 골짜기를 넘다\n영국의 인공지능 오디오 스타트업 **ElevenLabs(일레븐랩스)**가 텍스트를 사람의 목소리로 읽어주는 TTS(Text-to-Speech) 및 음성 복제(Voice Cloning) 플랫폼을 대중에게 공식 런칭했습니다.\n\n## 📖 1분의 샘플로 감정까지 복제하다\n이 모델의 가장 큰 차별점은 텍스트의 문맥을 스스로 파악하여 '감정'을 담아낸다는 것입니다. 문장이 끝날 때 숨소리를 내거나, 기쁜 내용에서는 들뜬 억양으로, 슬픈 내용에서는 차분한 톤으로 자연스러운 완급 조절을 보여줍니다. \n더욱 놀라운 것은 **'음성 복제'** 기능입니다. 유명인이나 본인의 깔끔한 음성 샘플 단 1분짜리만 업로드하면, AI가 목소리의 톤, 발음 습관, 특유의 억양을 완벽하게 학습하여 어떤 텍스트든 그 사람의 목소리로 자연스럽게 읽어줍니다. 이로 인해 오디오북 시장과 게임 더빙 산업이 엄청난 타격을 받을 것으로 전망되고 있습니다.\n\n## 📌 빠르게 확산되는 오디오 딥페이크 논란\n출시 직후 며칠 만에 악의적인 사용자들이 조 바이든 대통령이나 유명 배우의 목소리를 복제하여 혐오 발언이나 사기에 악용하는 사태가 발생했으며, 일레븐랩스는 즉각적으로 유료 결제자에 한해서만 복제 기능을 허용하는 안전장치를 서둘러 도입해야 했습니다." },
    program_l2: "Speech Synthesis",
    category_l1: "audio",
    company: "ElevenLabs",
    url: "https://elevenlabs.io",
    created_at: new Date("2023-01-23T00:00:00Z").toISOString(),
    views: 81000,
    is_important: true
  },
  {
    id: 36,
    title: { en: "Perplexity AI raises massive funding, threatens Google Search", ko: "Perplexity AI 대규모 투자 유치, 구글 검색에 정면 도전" },
    summary: { en: "The conversational search engine gains massive traction and unicorn status.", ko: "출처가 명확한 대화형 검색 엔진 퍼플렉시티가 억만장자들의 투자를 받으며 유니콘으로 등극했습니다." },
    content_body: { en: "## The Rise of Conversational Search\nPerplexity AI, a startup offering an AI-powered conversational search engine, has reached unicorn status after securing a massive funding round backed by Jeff Bezos and Nvidia.\n\n## Answering, Not Linking\nInstead of providing a list of blue links like Google, Perplexity acts as an answer engine. When a user asks a question, it instantly scours the web, reads multiple relevant sources in real-time, and synthesizes a direct, comprehensive answer complete with inline footnote citations. This fundamentally solves the 'hallucination' problem of standard LLMs by grounding responses in verifiable, up-to-date facts. Its clean, ad-free interface has quickly made it a favorite among researchers and developers.\n\n## The New Search Paradigm\nThe rapid growth of Perplexity suggests a massive shift in consumer behavior, forcing Google to scramble and accelerate its own AI Overview features.", ko: "## 📰 '파란색 링크' 시대의 종말 예고\n제프 베조스(아마존 창업자)와 엔비디아(NVIDIA) 등 거물들로부터 7,360만 달러에 달하는 대규모 투자를 유치한 **Perplexity AI(퍼플렉시티)**가 단숨에 기업가치 10억 달러를 돌파하며 유니콘 기업으로 등극했습니다.\n\n## 📖 검색 대신 요약해 드립니다\n구글이 키워드 검색 후 수많은 웹사이트 '링크'를 나열하는 방식을 취한다면, 퍼플렉시티는 직접적인 '답변'을 제공하는 대화형 검색 엔진(Answer Engine)입니다. \n사용자가 질문을 던지면, AI가 실시간으로 수십 개의 신뢰할 수 있는 최신 웹 문서를 탐색하고 읽어들인 뒤, 정보를 종합하여 하나의 완벽한 요약 글로 작성해 줍니다. 특히 답변의 모든 문장마다 각주(출처 링크)를 달아주어 기존 챗GPT의 치명적인 단점인 '할루시네이션(환각 현상)'을 훌륭하게 억제했습니다. 광고 하나 없는 깔끔한 인터페이스 덕분에 지식인과 연구자들 사이에서 폭발적인 입소문을 타고 있습니다.\n\n## 📌 흔들리는 구글의 검색 제국\n퍼플렉시티의 급부상은 사용자들이 더 이상 정보 검색에 시간을 낭비하고 싶어 하지 않는다는 트렌드를 증명했으며, 20년간 철옹성이었던 구글의 검색 광고 수익 모델을 직접적으로 위협하는 가장 큰 경쟁자로 지목되고 있습니다." },
    program_l2: "Answer Engine",
    category_l1: "data",
    company: "Perplexity AI",
    url: "https://perplexity.ai",
    created_at: new Date("2024-01-04T00:00:00Z").toISOString(),
    views: 95000,
    is_important: true
  },
  {
    id: 37,
    title: { en: "AMD unveils MI300X AI accelerator to challenge Nvidia", ko: "AMD, 엔비디아 독점 깰 차세대 AI 칩 'MI300X' 발표" },
    summary: { en: "AMD introduces its most advanced AI chip with a massive 192GB of memory.", ko: "192GB라는 엄청난 메모리 용량을 탑재하여 엔비디아 H100을 직접 겨냥한 AMD의 새로운 가속기가 공개되었습니다." },
    content_body: { en: "## The AI Hardware War Intensifies\nAMD has officially unveiled the Instinct MI300X, its most advanced AI accelerator chip to date, aiming directly at Nvidia's dominance in the AI hardware market.\n\n## Massive Memory and Cost Efficiency\nThe standout feature of the MI300X is its staggering 192GB of HBM3 memory, which is more than double the memory capacity of Nvidia's flagship H100. This massive memory allows the chip to load entirely larger language models (such as an 80-billion parameter model) onto a single GPU, heavily reducing the need for complex and expensive multi-GPU networking. Tech giants like Meta and Microsoft immediately announced they would deploy the MI300X in their Azure clouds as a cost-effective alternative to Nvidia.\n\n## Challenging the CUDA Ecosystem\nWhile the hardware is formidable, AMD still faces the steep uphill battle of breaking through Nvidia's deeply entrenched CUDA software ecosystem.", ko: "## 📰 대항마의 등장, 흔들리는 엔비디아 독점\n미국의 반도체 기업 **AMD**가 특별 이벤트를 열고, 현재 인공지능 하드웨어 시장을 90% 이상 독점하고 있는 엔비디아(NVIDIA)의 H100을 정면으로 겨냥한 차세대 AI 가속기 칩 **'Instinct MI300X'**를 전격 발표했습니다.\n\n## 📖 192GB의 막강한 메모리로 대형 모델 장악\nMI300X의 가장 무서운 무기는 무려 **192GB에 달하는 HBM3(고대역폭 메모리)**입니다. 이는 경쟁 모델인 엔비디아 H100(80GB)의 두 배가 훌쩍 넘는 용량입니다. \n이러한 거대한 메모리 덕분에 과거에는 칩 여러 개를 복잡하게 연결해야만 구동할 수 있었던 800억 파라미터(80B) 크기의 거대 언어 모델(LLM)을 단 하나의 칩 위에서 통째로 띄울 수 있게 되었습니다. 이는 데이터센터 서버 구축 비용을 획기적으로 낮춰주며, 발표 현장에서 오픈소스 모델을 실시간으로 매끄럽게 구동하는 시연을 보여주어 박수갈채를 받았습니다. 마이크로소프트, 메타(Meta), 오라클 등 주요 빅테크 기업들은 즉각적으로 MI300X를 대량 구매하여 자사 클라우드에 탑재하겠다고 선언했습니다.\n\n## 📌 넘어야 할 산, 소프트웨어 생태계\n하드웨어 성능(깡성능) 면에서는 엔비디아를 확실히 위협하고 있으나, 수많은 개발자들이 이미 익숙해진 엔비디아의 쿠다(CUDA) 소프트웨어 생태계를 대체해야만 진정한 점유율 뺏기가 가능하다는 과제가 남아있습니다." },
    program_l2: "Instinct MI300X",
    category_l1: "hardware",
    company: "AMD",
    url: "https://amd.com",
    created_at: new Date("2023-12-06T00:00:00Z").toISOString(),
    views: 77000,
    is_important: true
  },
  {
    id: 38,
    title: { en: "Elon Musk's xAI launches Grok, a rebellious chatbot", ko: "일론 머스크의 xAI, 반항적이고 유머러스한 챗봇 'Grok' 공개" },
    summary: { en: "Grok is designed with a sense of humor and real-time access to X data.", ko: "X(트위터)의 실시간 데이터를 기반으로 정치적 올바름(PC)을 거부하고 농담을 던지는 일론 머스크의 챗봇이 출시되었습니다." },
    content_body: { en: "## The Anti-Woke AI Arrives\nxAI, the artificial intelligence company founded by Elon Musk, has released its first commercial product: a conversational AI chatbot named Grok.\n\n## Real-Time Knowledge and Sarcasm\nInspired by 'The Hitchhiker's Guide to the Galaxy', Grok is explicitly designed to answer questions with a streak of rebel humor and sarcasm. It heavily differentiates itself from heavily filtered bots like ChatGPT by refusing to adhere to strict 'politically correct' guardrails. Most importantly, Grok has real-time access to the global data stream of the X (formerly Twitter) platform, allowing it to provide up-to-the-second news and hot takes on developing events that other models cannot see.\n\n## Premium Integration\nGrok is currently being rolled out exclusively to X Premium+ subscribers as part of Musk's effort to drive subscription revenue on the social media platform.", ko: "## 📰 '정치적 올바름'을 거부하는 괴짜 AI의 탄생\n일론 머스크(Elon Musk)가 설립한 인공지능 스타트업 **xAI**가 기존의 엄숙한 챗봇들과 차별화되는 첫 번째 상용 대화형 모델 **'Grok(그록)'**을 대중에 공개했습니다.\n\n## 📖 실시간 X(트위터) 데이터와 거침없는 입담\nSF 소설 '은하수를 여행하는 히치하이커를 위한 안내서'에서 영감을 받아 제작된 Grok은 매우 독특한 성격을 지녔습니다. ChatGPT나 Claude가 안전 필터(Guardrails)로 인해 논쟁적인 질문에 대답을 회피하는 반면, Grok은 정치적 올바름(PC)을 거부하고 다소 거칠고 유머러스하며 비꼬는 듯한(Sarcasm) 말투로 답변을 던집니다.\n기술적으로 가장 강력한 무기는 X(구 트위터) 플랫폼의 방대한 글로벌 트윗 스트림을 실시간으로 읽어들인다는 점입니다. 어제 터진 밈(Meme)이나 1분 전에 터진 속보 트렌드에 대해 질문하면, 다른 AI 모델들은 시차 때문에 대답하지 못하는 반면 Grok은 상황을 정확하게 파악하고 요약해 줍니다.\n\n## 📌 X 플랫폼과의 수익화 결합\nGrok은 현재 독자적인 앱으로 출시되지 않고 X(트위터)의 유료 구독 서비스인 'Premium+' 가입자들에게만 독점적으로 제공되며, 머스크의 플랫폼 수익화 전략의 핵심 무기로 활용되고 있습니다." },
    program_l2: "Grok",
    category_l1: "startup",
    company: "xAI",
    url: "https://x.ai",
    created_at: new Date("2023-11-04T00:00:00Z").toISOString(),
    views: 84000,
    is_important: false
  },
  {
    id: 39,
    title: { en: "NYT sues OpenAI and Microsoft for copyright infringement", ko: "뉴욕타임스(NYT), OpenAI와 MS 상대로 대규모 저작권 소송 제기" },
    summary: { en: "A landmark lawsuit threatening the core data pipeline of generative AI.", ko: "자사의 수백만 건의 기사가 허가 없이 AI 학습에 무단 도용되었다며 언론사 최초로 거액의 저작권 침해 소송이 제기되었습니다." },
    content_body: { en: "## A Legal Earthquake in AI\nThe New York Times has filed a massive federal lawsuit against OpenAI and Microsoft, alleging extensive copyright infringement in the training of generative AI models like ChatGPT.\n\n## Billions at Stake over Scraped Data\nThe lawsuit claims that OpenAI unlawfully scraped and ingested millions of copyrighted NYT articles to build its models. The Times provided examples where ChatGPT spit out long, verbatim excerpts from its paywalled articles, essentially creating a free substitute for the newspaper. The NYT is seeking billions of dollars in statutory and actual damages and is demanding the outright destruction of any AI models that were trained using their copyrighted material.\n\n## The Fair Use Debate\nOpenAI argues that training AI models on publicly available internet data constitutes 'fair use' under US law. The outcome of this landmark case could fundamentally alter how all AI companies source their training data.", ko: "## 📰 생성형 AI 생태계를 뒤흔들 세기의 소송\n미국의 최대 일간지 **뉴욕타임스(NYT)**가 챗GPT 개발사인 **OpenAI**와 주요 투자자인 **마이크로소프트(MS)**를 상대로 수십억 달러 규모의 막대한 저작권 침해 소송을 뉴욕 연방법원에 제기하며 전면전에 돌입했습니다.\n\n## 📖 '무단 도용' vs '공정 이용'의 팽팽한 대립\n뉴욕타임스는 소장에서 '이들이 허가나 보상 없이 자사의 프리미엄 기사 수백만 건을 무단으로 크롤링(Scraping)하여 LLM을 학습시키는 데 사용했다'고 강력히 주장했습니다. 증거 자료로 챗GPT가 유료 장막(Paywall) 뒤에 있는 NYT의 독점 탐사 보도 기사를 토씨 하나 틀리지 않고 그대로 뱉어내는 화면을 제출했으며, 이는 자사의 비즈니스 모델을 직접적으로 위협하는 행위라고 비판했습니다.\n뉴욕타임스는 천문학적인 금전적 손해배상뿐만 아니라, 자사의 데이터가 포함되어 학습된 모든 AI 모델(GPT-4 등)의 전면적인 '폐기'까지 요구하고 나섰습니다. \n\n## 📌 법적 불확실성에 빠진 실리콘밸리\nOpenAI 측은 퍼블릭 웹 데이터를 학습하는 것은 미국 저작권법상 '공정 이용(Fair Use)'에 해당한다고 맞서고 있으나, 이번 소송의 판결 결과에 따라 전 세계 인공지능 산업의 학습 데이터 파이프라인 전체가 불법으로 규정될 수 있어 업계가 숨을 죽이고 결과를 지켜보고 있습니다." },
    program_l2: "Copyright Suit",
    category_l1: "policy",
    company: "OpenAI",
    url: "https://nyt.com",
    created_at: new Date("2023-12-27T00:00:00Z").toISOString(),
    views: 110000,
    is_important: true
  },
  {
    id: 40,
    title: { en: "Google broadly releases Gemini Pro via API", ko: "구글, 개발자 위해 'Gemini Pro' API 글로벌 공식 배포" },
    summary: { en: "Developers can now build on Google's highly anticipated multimodal model.", ko: "개발자들이 구글의 멀티모달 제미나이를 앱에 연동할 수 있도록 API 플랫폼을 파격적인 가격에 공개했습니다." },
    content_body: { en: "## Google Opens the Gates\nGoogle has officially opened API access to Gemini Pro, making its new flagship multimodal model available to external developers and enterprises.\n\n## Aggressive Pricing and Studio Tools\nThe Gemini Pro API boasts impressive text and vision capabilities, allowing developers to process text and images concurrently in their own applications. In a clear move to undercut OpenAI, Google announced that the Gemini Pro API would be entirely free within certain usage limits during its preview phase, and aggressively priced afterward. Alongside the API, Google launched AI Studio, a slick web-based developer environment to quickly prototype prompts and export them into code.\n\n## Fueling the Ecosystem\nThis release brings a highly credible, natively multimodal competitor into the ecosystem, ensuring developers are no longer solely reliant on OpenAI's GPT-4 Vision APIs.", ko: "## 📰 구글 생태계 확장의 신호탄\n**구글(Google)**이 자사의 차세대 멀티모달 인공지능 모델인 **'Gemini Pro(제미나이 프로)'**를 외부 개발자와 기업들이 자체 서비스에 연동할 수 있도록 API(응용 프로그램 인터페이스) 형태로 글로벌 정식 배포했습니다.\n\n## 📖 공격적인 가격 정책과 개발자 친화적 환경\n구글 클라우드의 버텍스 AI(Vertex AI) 및 새로운 웹 개발 환경인 '구글 AI 스튜디오'를 통해 공개된 이 API는 텍스트뿐만 아니라 비전(Vision, 이미지 이해) 기능까지 동시에 제공합니다. \n무엇보다 시장을 놀라게 한 것은 구글의 공격적인 가격 정책입니다. OpenAI의 GPT-3.5 및 GPT-4를 정조준하여, 구글은 초기 프리뷰 기간 동안 초당 60회 요청(RPM)까지 API를 **'완전 무료'**로 제공하겠다고 선언했습니다. 이는 자금력이 부족한 수많은 스타트업과 개인 개발자들을 구글 생태계로 강력하게 흡수하려는 전략입니다.\n\n## 📌 양강 구도로 재편되는 API 시장\n업계는 이번 API 배포를 통해 그동안 OpenAI(GPT) API에 절대적으로 의존하던 앱 개발 시장이 마침내 구글이라는 훌륭하고 거대한 대체재를 확보하게 되었다며 크게 환영하고 있습니다." },
    program_l2: "Gemini API",
    category_l1: "multi",
    company: "Google",
    url: "https://ai.google.dev",
    created_at: new Date("2023-12-13T00:00:00Z").toISOString(),
    views: 66000,
    is_important: false
  },
  {
    id: 41,
    title: { en: "Cursor IDE gains viral traction among developers", ko: "AI 특화 에디터 'Cursor(커서) IDE', 개발자 사이서 폭발적 인기" },
    summary: { en: "An AI-first code editor fork of VS Code is reshaping how developers write code.", ko: "VS Code를 기반으로 AI와의 완벽한 채팅 및 코드 생성 기능을 내장한 Cursor가 기존 에디터들을 대체하고 있습니다." },
    content_body: { en: "## The AI-First Code Editor\nCursor, an AI-first IDE built as a fork of VS Code, is experiencing massive viral growth among software engineers, establishing itself as the premier tool for AI-assisted coding.\n\n## Deep Codebase Understanding\nWhile GitHub Copilot acts as a plugin, Cursor is built from the ground up to deeply understand entire repositories. Developers can type 'Cmd+K' to generate code directly inline or press 'Cmd+L' to chat with an AI that inherently knows their entire project structure, reading multiple local files to provide pinpoint accurate context. Its seamless integration of OpenAI's GPT-4 and Anthropic's Claude 3 Opus gives users the flexibility to choose the smartest models for their tasks.\n\n## Rapid Market Penetration\nBacked by a recent 60M funding round, Cursor is rapidly siphoning power users away from traditional IDEs, proving that developers want AI embedded deeply into the editor core.", ko: "## 📰 코딩 에디터의 세대 교체\n소프트웨어 엔지니어들 사이에서 단순한 플러그인이 아닌, 태생부터 AI 친화적으로 설계된 코드 에디터 **'Cursor(커서) IDE'**가 폭발적인 입소문을 타며 기존의 개발 환경(VS Code 등)을 빠르게 대체하고 있습니다.\n\n## 📖 내 프로젝트를 완벽히 이해하는 짝꿍\n스타트업 Anysphere가 개발한 Cursor의 가장 큰 무기는 개발자의 로컬 PC에 있는 수십 개의 코드 파일과 폴더 구조(Codebase) 전체의 문맥을 AI가 완벽하게 파악한다는 점입니다. \n'Cmd + K' 단축키를 눌러 원하는 기능을 자연어로 지시하면 기존 코드를 수정해 주며, 'Cmd + L'을 누르면 특정 파일들을 참조하여 AI와 채팅하며 디버깅을 할 수 있습니다. OpenAI의 GPT-4o와 앤스로픽의 Claude 3.5 Sonnet 같은 최상위 모델들을 자유롭게 바꿔가며 쓸 수 있어, 기존 GitHub Copilot보다 훨씬 더 지능적이고 유연하다는 평가를 받습니다.\n\n## 📌 투자 유치와 시장 점유율 확보\n최근 a16z와 같은 톱티어 벤처캐피탈로부터 거액의 투자를 유치한 Cursor 팀은, 마이크로소프트의 강력한 지배력을 뚫고 코딩 도구 시장의 신흥 강자로 완전히 자리매김했습니다." },
    program_l2: "Cursor",
    category_l1: "code",
    company: "Anysphere",
    url: "https://cursor.com",
    created_at: new Date("2024-05-15T00:00:00Z").toISOString(),
    views: 82000,
    is_important: true
  },
  {
    id: 42,
    title: { en: "Adobe Firefly exits beta, commercially safe AI generation", ko: "어도비, 저작권 100% 클린한 'Firefly' 상용 서비스 정식 런칭" },
    summary: { en: "Adobe integrates commercially safe generative AI natively into Photoshop.", ko: "기존의 저작권 논란을 완전히 해소한 생성형 AI 파이어플라이가 포토샵에 정식 탑재되었습니다." },
    content_body: { en: "## Safe AI for Enterprises\nAdobe has officially launched Firefly, its family of creative generative AI models, exiting a highly successful beta phase.\n\n## Generative Fill Changes Photoshop Forever\nThe highlight of the release is the deep native integration into Adobe Photoshop via the 'Generative Fill' feature. Users can effortlessly select areas of a photo and type prompts to seamlessly add objects, expand backgrounds, or remove blemishes with pixel-perfect lighting matching. Crucially, Adobe guarantees that Firefly was trained exclusively on Adobe Stock images and public domain content, indemnifying enterprise customers against any copyright infringement claims.\n\n## The New Creative Standard\nThis massive legal safety net has led to immediate adoption by major ad agencies and studios, setting Adobe apart in the chaotic wild west of AI image generation.", ko: "## 📰 엔터프라이즈를 위한 안전한 AI의 기준\n디자인 소프트웨어의 제왕 **어도비(Adobe)**가 저작권 문제에서 100% 자유로운 자체 생성형 AI 모델 **'Firefly(파이어플라이)'**의 베타 테스트를 성공적으로 마치고 상업용 정식 서비스를 런칭했습니다.\n\n## 📖 포토샵의 판도를 바꾼 '생성형 채우기'\n이번 런칭의 하이라이트는 포토샵(Photoshop) 앱 내부에 완전히 통합된 **'생성형 채우기(Generative Fill)'** 기능입니다. 디자이너가 마우스로 이미지의 빈 공간을 드래그한 뒤 프롬프트를 입력하면, 기존 배경의 원근감과 조명, 그림자를 완벽하게 계산하여 피사체를 추가하거나 풍경을 자연스럽게 확장해 냅니다. \n가장 중요한 점은 어도비가 자사가 합법적으로 소유한 어도비 스톡(Adobe Stock) 데이터와 저작권이 만료된 퍼블릭 도메인 이미지만으로 모델을 학습시켰다는 것입니다. 어도비는 고객이 이 AI로 만든 결과물로 인해 저작권 소송을 당할 경우, 모든 법적 비용을 책임지겠다는 파격적인 보증 제도를 내걸었습니다.\n\n## 📌 디자인 에이전시들의 대규모 도입\n이러한 강력한 법적 안전망 덕분에 Midjourney 등 타사 AI 도입을 망설이던 전 세계의 대형 광고 대행사와 스튜디오들이 안심하고 어도비의 AI를 실무 파이프라인에 적극 도입하고 있습니다." },
    program_l2: "Firefly",
    category_l1: "image",
    company: "Adobe",
    url: "https://adobe.com/firefly",
    created_at: new Date("2023-09-13T00:00:00Z").toISOString(),
    views: 91000,
    is_important: true
  },
  {
    id: 43,
    title: { en: "Kuaishou unveils Kling AI, rivalling OpenAI's Sora", ko: "중국 콰이쇼우, 고품질 영상 AI 'Kling(클링)' 공개로 소라(Sora) 맹추격" },
    summary: { en: "A Chinese tech giant releases a highly advanced text-to-video model.", ko: "최대 2분 길이의 물리 법칙을 이해하는 1080p 해상도의 영상 AI를 중국이 기습 발표했습니다." },
    content_body: { en: "## China Enters the Text-to-Video Race\nKuaishou, a major Chinese short-video tech giant, has shocked the AI world by unveiling Kling, a remarkably advanced text-to-video AI model.\n\n## Unprecedented Video Length and Physics\nWhile the world was waiting for OpenAI to release Sora, Kling suddenly emerged with the capability to generate up to 2-minute long videos at 1080p resolution and 30fps. The demonstration videos showed a profound understanding of 3D physical world dynamics, accurately rendering fluid motions, complex object interactions, and temporally consistent character features across long shots. Notably, it is already available to Chinese users in a waitlisted beta app, moving faster to market than its American counterparts.\n\n## Geopolitical Tech Tensions\nKling proves that Chinese AI labs have access to immense compute and talent, heating up the geopolitical race for dominance in generative AI technologies.", ko: "## 📰 텍스트-투-비디오 시장의 새로운 강자 강림\n중국의 숏폼 비디오 플랫폼 거대 기업인 **콰이쇼우(Kuaishou)**가 전 세계가 고대하던 OpenAI의 Sora(소라)에 필적하는, 혹은 그 이상을 보여주는 고품질 영상 생성 AI **'Kling(클링)'**을 기습적으로 발표하며 세계를 경악게 했습니다.\n\n## 📖 2분 길이의 물리 엔진급 영상 렌더링\n대다수의 영상 AI가 3~5초의 짧은 클립 생성에 머물러 있는 반면, Kling은 텍스트 프롬프트 하나로 최대 2분(120초) 분량의 1080p FHD 해상도, 초당 30프레임(fps) 영상을 한 번에 생성해 냅니다. \n공개된 데모 영상에서는 자전거를 타는 소년의 그림자 방향이나 유리가 깨지는 물리적 파편 효과 등 '현실 세계의 3D 물리 법칙'을 완벽하게 이해하고 렌더링 하는 모습을 보여주었습니다. 또한 미국 기업들이 안전성 문제로 출시를 늦추고 있는 것과 달리, 콰이쇼우는 자국 사용자를 대상으로 발 빠르게 웹 기반 베타 테스트를 오픈하여 엄청난 데이터를 축적하고 있습니다.\n\n## 📌 미중 AI 패권 전쟁의 격화\nKling의 등장은 미국의 반도체 수출 규제 속에서도 중국의 독자적인 AI 연구 역량과 인프라가 이미 세계 최고 수준에 도달했음을 증명하며, 생성형 AI를 둘러싼 미중 패권 경쟁에 불을 지피고 있습니다." },
    program_l2: "Kling AI",
    category_l1: "video",
    company: "Kuaishou",
    url: "https://kling.kuaishou.com",
    created_at: new Date("2024-06-06T00:00:00Z").toISOString(),
    views: 79000,
    is_important: false
  },
  {
    id: 44,
    title: { en: "Udio emerges from stealth, offering unparalleled AI music generation", ko: "Udio, 최고 음질의 AI 음악 생성기 출시로 판도 변화" },
    summary: { en: "A new startup created by former DeepMind researchers brings pristine audio fidelity.", ko: "구글 딥마인드 출신들이 설립한 Udio가 Suno보다 압도적으로 깨끗한 고음질 음악 AI를 런칭했습니다." },
    content_body: { en: "## A New Contender in AI Audio\nUdio, a stealth startup founded by former Google DeepMind researchers, has launched its highly anticipated AI music generation platform.\n\n## Pristine Audio Quality\nBacked by prominent investors like a16z, Udio directly challenges Suno in the text-to-music space. Users immediately noted that Udio produces tracks with significantly higher audio fidelity and less 'metallic' artifacts, especially in complex genres like jazz, classical, and heavy metal. The platform allows users to seamlessly extend songs in 32-second increments and offers granular control over intros and outros.\n\n## The Viral Comedy Hit\nUdio quickly went viral on social media as users began generating absurd comedy songs and highly convincing retro pop tracks, proving the model's exceptional versatility in both instrumentation and lyrical flow.", ko: "## 📰 고음질 AI 음악 생성기의 등장\n구글 딥마인드(Google DeepMind) 출신의 최고급 AI 연구원들이 모여 설립한 오디오 스타트업 **Udio(우디오)**가 마침내 베일을 벗고 차세대 음악 생성 플랫폼을 정식 런칭했습니다.\n\n## 📖 Suno(수노)를 뛰어넘는 압도적인 해상력\n최고의 벤처캐피탈 a16z의 투자를 등에 업고 등장한 Udio는 기존 선두주자인 Suno와 직접적인 경쟁을 선언했습니다. 초기 사용자들의 공통된 평가는 Udio의 음질(Fidelity)이 압도적으로 깨끗하다는 것입니다. 특히 재즈의 브라스 악기 소리나 클래식의 현악기 마찰음, 보컬의 숨소리 등 미세한 디테일에서 AI 특유의 뭉개지는 쇳소리(Artifact)를 극적으로 줄여냈습니다. \n32초 단위로 노래의 후렴구(Outro)나 도입부(Intro)를 아주 자연스럽게 연장(Extend) 할 수 있는 세밀한 편집 기능도 극찬을 받고 있습니다.\n\n## 📌 소셜 미디어를 휩쓰는 밈(Meme) 창작\n런칭 직후 우디오의 깨끗한 보컬 합성 능력을 이용해 사용자들이 우스꽝스러운 인터넷 밈(Meme) 가사를 1980년대 시티팝이나 헤비메탈로 진지하게 부르게 하는 유희가 소셜 미디어 플랫폼을 강타하며 엄청난 바이럴 효과를 누리고 있습니다." },
    program_l2: "Udio",
    category_l1: "audio",
    company: "Udio",
    url: "https://udio.com",
    created_at: new Date("2024-04-10T00:00:00Z").toISOString(),
    views: 68000,
    is_important: false
  },
  {
    id: 45,
    title: { en: "Notion launches 'Notion AI' directly into its workspace", ko: "노션(Notion), 업무 문서에 바로 내장된 'Notion AI' 공식 출시" },
    summary: { en: "The beloved productivity app introduces generative AI to write and summarize notes.", ko: "별도의 챗봇을 열 필요 없이 문서 화면에서 즉시 글을 요약하고 작성해주는 Notion AI가 정식 런칭되었습니다." },
    content_body: { en: "## AI Embedded in the Workspace\nNotion, the popular workspace and note-taking app, has fully rolled out 'Notion AI' to its millions of users following a waitlisted beta.\n\n## Frictionless Text Generation\nUnlike ChatGPT which requires switching to a separate tab, Notion AI is embedded directly onto the blank page. By simply pressing the spacebar, users can summon the AI to summarize long meeting notes, translate text, brainstorm ideas, or change the tone of a drafted document. This frictionless integration sets a new standard for how AI should be built into daily productivity software.\n\n## Monetization Strategy\nNotion offers the AI feature as a $10/month add-on, moving aggressively to monetize generative capabilities and establishing itself as a frontrunner in the AI-enhanced SaaS market.", ko: "## 📰 업무 공간으로 틈입한 인공지능\n글로벌 1위 협업 및 메모 애플리케이션인 **Notion(노션)**이 수개월간의 비공개 베타 테스트를 성공적으로 마치고, 작업 공간 내부에 완전히 내장된 **'Notion AI'** 기능을 전 세계 모든 사용자에게 공식 출시했습니다.\n\n## 📖 스페이스바(Space)로 시작하는 마법\n별도의 웹 브라우저 탭을 열어 챗봇에게 물어보고 결과를 복사해 올 필요가 전혀 없습니다. 노션의 빈 문서에서 스페이스바(Space) 키를 누르는 것만으로 즉시 AI 프롬프트 창이 나타납니다. \n사용자는 방대한 회의록을 단 세 줄로 요약하게 하거나, 어색한 초안을 전문가의 어조로 다듬어 달라고 지시하고, 표나 체크리스트 형태의 아이디어 브레인스토밍을 즉석에서 생성할 수 있습니다. '글쓰기'라는 행위 자체의 마찰력(Friction)을 획기적으로 줄인 UX 설계로 엄청난 찬사를 받고 있습니다.\n\n## 📌 B2B 생산성 툴 수익화의 모범 사례\n노션은 이 강력한 기능을 기존 요금제와 별도로 1인당 월 10달러의 추가 구독(Add-on) 옵션으로 내놓았으며, 이는 SaaS(서비스형 소프트웨어) 스타트업들이 생성형 AI를 어떻게 비즈니스 수익으로 직결시킬 수 있는지 보여주는 가장 성공적인 모델로 평가받고 있습니다." },
    program_l2: "Notion AI",
    category_l1: "startup",
    company: "Notion Labs",
    url: "https://notion.so/ai",
    created_at: new Date("2023-02-22T00:00:00Z").toISOString(),
    views: 94000,
    is_important: true
  }
];

const MOCK_COMMENTS = [
  { id: 1, post_id: 1, user_name: "AI크리에이터", avatar: "👤", comment_text: "역피라미드 구조로 읽으니까 기사 핵심이 한눈에 파악되네요. 내용 구성이 훨씬 프로페셔널해졌습니다.", created_at: new Date(Date.now() - 7200000).toISOString(), is_blinded: false },
  { id: 2, post_id: 2, user_name: "프론트엔드노예", avatar: "💻", comment_text: "Claude 3.5 Sonnet의 Artifacts 기능 써보니 개발 패러다임이 바뀔 것 같습니다. 리액트 컴포넌트를 실시간으로 만들어주다니...", created_at: new Date(Date.now() - 86400000).toISOString(), is_blinded: false }
];
