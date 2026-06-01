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
    content_body: { en: "## Lead (Who, What, When)\nOpenAI recently introduced GPT-4o, a new flagship AI model capable of real-time reasoning across audio, vision, and text, completely redefining human-computer interaction.\n\n## Body (Facts, Quotes, Background)\nUnlike older models that relied on multiple steps to translate audio into text before processing, GPT-4o understands the raw audio waveform natively. This allows it to instantly pick up on emotional tone, background noise, and even multiple speakers. With a response time of just 232 milliseconds, it perfectly mimics the speed of human conversation. Mira Murati, CTO of OpenAI, stated, 'This is a massive leap towards creating more natural, intuitive AI.'\n\n## Tail (Minor Details)\nThe model is rolling out gradually to ChatGPT Plus users, and its API usage cost has been reduced by 50% compared to GPT-4 Turbo.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n**OpenAI**가 텍스트, 시각, 오디오를 실시간으로 동시에 처리할 수 있는 새로운 플래그십 인공지능 모델인 **'GPT-4o'**를 전격 공개하며 인간과 AI 상호작용의 새로운 지평을 열었습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n과거에는 사용자의 음성을 텍스트로 변환한 뒤 처리하는 방식이었으나, 이번 GPT-4o 모델은 오디오 파형 자체를 '네이티브'로 이해합니다. 이를 통해 인간의 미세한 감정, 어조, 심지어 주변 소음까지 파악할 수 있게 되었습니다.\n특히 평균 232ms라는 응답 속도를 달성하여 실제 사람과 대화하는 듯한 지연 없는 인터랙션을 구현했습니다. 미라 무라티 최고기술책임자(CTO)는 발표 현장에서 '이것은 보다 자연스럽고 직관적인 AI를 향한 거대한 도약'이라고 평가했습니다. 기존 모델(GPT-4 Turbo) 대비 API 호출 비용도 절반으로 줄어들어 기업들의 도입 부담도 크게 낮아졌습니다.\n\n## 📌 꼬리 (사소한 정보)\n새로운 실시간 음성 기능은 향후 몇 주에 걸쳐 ChatGPT Plus 유료 사용자들에게 순차적으로 배포될 예정이며, 데스크톱 버전 앱도 함께 출시되었습니다." },
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
    content_body: { en: "## Lead (Who, What, When)\nAnthropic has officially launched Claude 3.5 Sonnet, a middle-tier model that shockingly outperforms nearly all existing competitor models on the market.\n\n## Body (Facts, Quotes, Background)\nOperating at twice the speed of its predecessor (Claude 3 Opus) while costing significantly less, Claude 3.5 Sonnet dominates major leaderboards in coding, logic, and visual reasoning. The biggest highlight is a massive UX breakthrough called 'Artifacts'. Claude now opens a dedicated side-panel where it can generate, render, and modify code snippets or SVG graphics in real-time. This essentially shifts Claude from a simple conversational AI into a collaborative workspace.\n\n## Tail (Minor Details)\nThe model is currently available for free on Claude.ai, with higher rate limits for Pro subscribers.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n**Anthropic(앤스로픽)**이 기존 자사의 최상위 모델을 뛰어넘는 중간 체급 모델 **'Claude 3.5 Sonnet(클로드 3.5 소넷)'**을 기습 출시하여 업계의 벤치마크 기준을 갈아치웠습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n새롭게 출시된 3.5 Sonnet은 경쟁사인 OpenAI의 GPT-4o를 대학원 수준의 추론(GPQA), 학부 수준 지식(MMLU), 코딩(HumanEval) 등 주요 성능 평가 지표에서 압도했습니다. 작동 속도 또한 이전 세대 최상위 모델(Opus)보다 2배 이상 빨라졌습니다.\n특히 이번 발표의 핵심은 단순한 지능 향상을 넘어선 **'Artifacts(아티팩트)'**라는 혁신적인 UI 기능입니다. 대화창 우측에 전용 패널을 띄워 AI가 작성한 리액트(React) 코드나 SVG 그래픽을 실시간으로 렌더링하고 수정할 수 있게 해 주어, 챗봇을 완벽한 '협업 워크스페이스'로 탈바꿈시켰습니다.\n\n## 📌 꼬리 (사소한 정보)\n이 모델은 현재 Claude.ai 웹사이트에서 누구나 무료로 사용해 볼 수 있으며, iOS 앱에서도 지원됩니다." },
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
    content_body: { en: "## Lead\nSuno has launched its v3 model, capable of generating radio-quality songs with vocals in mere seconds based solely on text prompts.\n\n## Body\nBreaking away from the robotic sounds of early audio AI, Suno v3 produces incredibly realistic tracks spanning genres from K-Pop to classical. Users can provide their own lyrics or ask the AI to write them. 'This is the ChatGPT moment for music creation,' remarked industry experts. The model understands complex prompts, seamlessly blending an acoustic intro into an EDM drop if requested.\n\n## Tail\nWhile the technology lowers the barrier to entry for creators, it is simultaneously raising copyright and legal alarms across the music industry.", ko: "## 📰 리드 (누가, 무엇을, 언제)\nAI 음악 생성 스타트업 **Suno(수노)**가 텍스트 명령어만으로 라디오에서 송출되는 수준의 고품질 음악을 만들어내는 **'v3 모델'**을 정식 출시했습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\nSuno v3는 사용자가 장르를 지정하고 가사를 입력하면(또는 AI에게 작사를 맡기면) 단 몇 초 만에 보컬 트랙과 악기 반주가 포함된 2분 길이의 완성된 음원을 두 곡씩 생성해 냅니다. 기존 v2 모델에서 발생하던 찢어지는 기계음 문제가 완벽히 해결되었으며, '어쿠스틱 기타로 시작해 후렴구에서 일렉트로닉 EDM으로 터지는 팝'과 같은 복잡한 프롬프트 지시도 완벽하게 이해합니다.\n음악 평론가들은 이를 두고 '오디오 생성 분야에 마침내 ChatGPT 모먼트가 도래했다'고 평가하고 있습니다.\n\n## 📌 꼬리 (사소한 정보)\n창작의 장벽이 무너진 것에 대한 환호 이면에서는, 무분별한 AI 학습 데이터 저작권 문제로 인해 글로벌 대형 음반사들이 예의주시하며 법적 대응을 준비하고 있다는 소식도 들려오고 있습니다." },
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
    content_body: { en: "## Lead\nMeta has officially open-sourced Llama 3 (8B and 70B), setting a new performance standard for free AI models.\n\n## Body\nTrained on a massive 15 Trillion tokens, Llama 3 dominates open-source leaderboards. The 8B version is lightweight enough to run on personal devices while outperforming previous heavyweights, and the 70B version competes directly with proprietary giants like GPT-4. Mark Zuckerberg emphasized Meta's commitment to open AI, stating that a 400B multimodal version is currently training to become the undisputed champion.\n\n## Tail\nDevelopers can freely download the weights from Hugging Face or access them via major cloud providers like AWS and Google Cloud.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n**Meta(메타)**가 자사의 거대 언어 모델 시리즈 최신작인 **'Llama 3(라마 3)'**의 8B 및 70B 사이즈 버전을 오픈소스로 무료 공개하며 AI 생태계에 반격을 가했습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n무려 15조(15T) 개의 방대한 토큰으로 학습된 이 모델들은 추론, 수학, 코딩 등 대부분의 지표에서 동급 최고의 성능을 기록했습니다. 특히 8B 파라미터 모델의 경우 일반 노트북이나 스마트폰에서도 구동이 가능할 정도로 가벼우면서도 구형 거대 모델들을 가볍게 압도하여 '온디바이스 AI' 생태계 확장의 기폭제가 되고 있습니다.\n마크 저커버그 메타 CEO는 '우리의 목표는 단순히 오픈소스 1위가 아니라 현존하는 최고의 AI를 만드는 것'이라며, 현재 4천억(400B) 파라미터가 넘는 거대한 멀티모달 버전을 학습 중이라고 밝혔습니다.\n\n## 📌 꼬리 (사소한 정보)\n개발자들은 허깅페이스(Hugging Face)를 통해 Llama 3의 가중치(Weights)를 직접 다운로드할 수 있으며, 기업들은 이를 자체 보안망 내부에 구축하여 프라이빗 AI를 구성할 수 있습니다." },
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
    content_body: { en: "## Lead\nIn late 2022, OpenAI stunned the world by unveiling ChatGPT, a highly fluent conversational AI agent based on the GPT-3.5 architecture.\n\n## Body\nThe system demonstrated an uncanny ability to write essays, debug code, and answer complex questions with human-like nuance. It reached 1 million users in just 5 days, setting a historic record for the fastest-growing consumer app. This unexpected consumer hit triggered a 'Code Red' at Google and sparked an intense generative AI arms race among global tech titans.\n\n## Tail\nOriginally launched as a free research preview, its overwhelming server costs quickly led to the introduction of a paid 'Plus' tier.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n**OpenAI**가 2022년 말, GPT-3.5 아키텍처를 기반으로 한 대화형 인공지능 에이전트 **'ChatGPT(챗GPT)'**를 세상에 처음 공개하며 글로벌 AI 열풍을 점화시켰습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n사용자와 채팅하듯 대화를 주고받는 이 모델은 에세이 작성, 복잡한 코딩, 번역, 논문 요약 등 다양한 분야에서 인간에 필적하는 유창함과 추론 능력을 보여주어 전 세계에 엄청난 충격을 주었습니다. \n출시 단 5일 만에 100만 명의 사용자를 확보하며 IT 역사상 가장 빠른 소비자 앱 성장세를 기록했습니다. 이 폭발적인 흥행은 검색 시장 독점을 누리던 구글(Google) 내부에 '코드 레드(Code Red)' 경보를 발령하게 만들었고, 마이크로소프트와의 동맹을 통한 딥테크 기업들의 무한 생성형 AI 군비 경쟁을 촉발시켰습니다.\n\n## 📌 꼬리 (사소한 정보)\n초기에는 단순한 연구용 무료 프리뷰 목적으로 공개되었으나, 감당할 수 없는 서버 트래픽 비용 문제로 인해 빠르게 월 20달러의 'Plus' 구독 모델이 도입되었습니다." },
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
    content_body: { en: "## Lead\nMidjourney has officially launched v5, taking a quantum leap in photorealism and eliminating notorious AI artifacts like six-fingered hands.\n\n## Body\nThe new v5 algorithm generates images with strikingly realistic skin textures, accurate lighting, and flawless anatomical proportions. Photographers and digital artists have expressed both awe and concern over how indistinguishable these generations are from actual photographs. 'It is getting dangerously good,' noted one prominent digital artist. The update also allows for seamless wide aspect ratios and intricate prompt adherence.\n\n## Tail\nThe surge in hyper-realistic AI images has led to widespread debates surrounding copyright infringement and deepfakes on social media.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n독보적인 미적 감각을 자랑하는 이미지 생성 AI **Midjourney(미드저니)**가 대규모 업데이트인 **'v5'** 버전을 출시하며 완벽한 극사실주의의 영역에 도달했습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n이번 업데이트의 가장 큰 성과는 기존 생성 AI들의 고질적인 한계였던 '기괴한 손가락(6개, 7개 등)' 렌더링 오류를 완벽하게 극복했다는 점입니다. \n새로운 알고리즘은 피부 질감, 눈동자 반사광, 머리카락, 옷의 주름 등 세밀한 디테일에서 실제 카메라로 촬영한 사진과 구분이 불가능할 정도의 압도적인 해상도와 사실감을 보여줍니다. 프롬프트 이해력 또한 상승하여 더욱 정교한 화면 연출이 가능해졌습니다. 디자인 업계 관계자들은 '더 이상 스톡 사진을 구매할 이유가 사라졌다'며 놀라움을 감추지 못하고 있습니다.\n\n## 📌 꼬리 (사소한 정보)\n극도로 사실적인 이미지를 생성할 수 있게 되면서, 프란치스코 교황이 패딩을 입은 페이크 사진 등 딥페이크가 소셜 미디어에 유포되어 사회적 윤리와 팩트 체크 문제에 대한 경각심이 높아지고 있습니다." },
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
    content_body: { en: "## Lead\nNVIDIA CEO Jensen Huang has introduced the H100 Tensor Core GPU, a massive leap in hardware designed specifically to accelerate the generative AI boom.\n\n## Body\nBuilt on the new Hopper architecture, the H100 features a dedicated Transformer Engine that dramatically speeds up large language model (LLM) training. NVIDIA claims it offers up to 9x faster training performance and 30x faster inference compared to its predecessor, the A100. As tech giants like Microsoft, Meta, and Google race to secure these chips for training trillion-parameter models, the H100 has become the most sought-after piece of technology on the planet.\n\n## Tail\nSupply chain constraints mean that securing H100 allocation requires massive capital, cementing NVIDIA's position as the primary arms dealer in the AI war.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n**NVIDIA(엔비디아)**의 젠슨 황 CEO가 GTC 컨퍼런스에서 새로운 호퍼(Hopper) 아키텍처를 기반으로 한 차세대 **'H100 텐서 코어 GPU'**를 전격 발표하며 AI 하드웨어 생태계의 지배력을 굳혔습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n이 괴물 같은 GPU는 거대 언어 모델(LLM) 학습을 위해 세계 최초로 '트랜스포머 엔진(Transformer Engine)'을 하드웨어 설계 수준에 탑재했습니다. 엔비디아 측의 발표에 따르면 이전 세대 최고 사양이었던 A100 대비 AI 모델 학습 속도는 최대 9배, 추론 속도는 무려 30배까지 끌어올릴 수 있습니다.\nGPT-4와 같이 수천억 개의 파라미터를 가진 모델을 개발하려는 빅테크 기업들에게 H100은 필수재가 되었으며, 'H100을 얼마나 많이 확보했는가'가 곧 그 회사의 AI 경쟁력을 의미하는 시대가 도래했습니다.\n\n## 📌 꼬리 (사소한 정보)\n칩 하나의 가격이 수천만 원에 달함에도 불구하고 전 세계적인 품귀 현상이 빚어지고 있으며, 이로 인해 엔비디아의 주가와 시가총액은 전례 없는 속도로 폭등하기 시작했습니다." },
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
    content_body: { en: "## Lead\nMicrosoft has launched a fundamentally revamped version of its Bing search engine and Edge browser, heavily integrated with a next-generation OpenAI large language model.\n\n## Body\nDubbed as 'an AI copilot for the web', the new Bing introduces a chat interface alongside traditional search results. It summarizes massive amounts of web information, provides direct answers with citations, and generates creative content like emails or itineraries. Microsoft CEO Satya Nadella proudly declared that 'the race starts today,' directly challenging Google's two-decade monopoly over internet search.\n\n## Tail\nThe announcement triggered a massive surge in Bing app downloads, forcing millions to sign up for a waitlist to test the highly anticipated feature.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n**마이크로소프트(Microsoft)**가 자사의 만년 2등 검색 엔진 빙(Bing)과 엣지(Edge) 브라우저에 OpenAI의 최신 언어 모델을 결합한 **'새로운 Bing'**을 공개하며 20년간 이어진 구글 검색 천하에 선전포고를 했습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n'웹을 위한 AI 부조종사'라는 슬로건을 내건 이 새로운 검색 엔진은 기존처럼 파란색 링크 목록을 나열하는 데 그치지 않습니다. 대화형 인터페이스를 통해 사용자의 복잡한 질문 의도를 파악하고, 실시간 웹 검색 결과를 종합하여 깔끔하게 요약된 답변과 출처(각주)를 제공합니다.\n사티아 나델라 MS CEO는 행사장에서 '검색의 새로운 패러다임 경주가 오늘부터 시작된다'고 선언하며, 검색 시장의 수익 구조를 근본적으로 뒤흔들겠다는 야심을 내비쳤습니다.\n\n## 📌 꼬리 (사소한 정보)\n이 발표 직후 전 세계에서 수백만 명의 사용자가 테스트 대기 명단(Waitlist)에 등록하기 위해 몰려들었으며, 한때 빙 모바일 앱이 앱스토어 다운로드 1위를 차지하는 기염을 토했습니다." },
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
    content_body: { en: "## Lead\nEuropean Parliament lawmakers have overwhelmingly approved the AI Act, marking the world's first comprehensive legal framework to govern artificial intelligence.\n\n## Body\nThe landmark legislation takes a risk-based approach, categorizing AI systems into tiers. 'Unacceptable risk' applications, such as biometric mass surveillance and social scoring systems, are strictly banned. High-risk systems must undergo rigorous compliance checks. For foundational models like ChatGPT, the law mandates strict transparency obligations, requiring creators to clearly disclose when content is AI-generated and share summaries of their training data. \n\n## Tail\nWhile hailed by rights groups, some tech industry leaders argue it could stifle European innovation. Nonetheless, the AI Act is expected to set a global benchmark, known as the 'Brussels Effect'.", ko: "## 📰 리드 (누가, 무엇을, 언제)\n유럽연합(EU) 의회가 수년간의 치열한 논의 끝에 세계 최초로 인공지능 기술의 개발과 활용을 포괄적으로 규제하는 **'AI Act(인공지능법)'**를 압도적인 찬성표로 통과시켰습니다.\n\n## 📖 본문 (사실, 배경, 인용문)\n이 법안의 핵심은 AI 시스템이 사회에 미치는 위험도를 4단계로 분류하여 규제를 차등 적용하는 '위험 기반(Risk-based)' 접근법입니다. 인간의 행동을 조작하거나 안면 인식으로 시민을 감시하고 사회적 점수를 매기는 행위는 '수용 불가능한 위험'으로 지정되어 유럽 내에서 전면 금지됩니다.\n또한 챗GPT나 미드저니 같은 범용 생성형 AI(GPAI)는 콘텐츠가 기계에 의해 생성되었음을 명확히 표기(워터마크 등)해야 하는 강력한 투명성 의무가 부여되며, 학습 데이터의 저작권 요약본도 제출해야 합니다.\n\n## 📌 꼬리 (사소한 정보)\n실리콘밸리의 빅테크 기업들은 과도한 규제가 혁신을 저해할 것이라 반발하고 있으나, 과거 GDPR(일반개인정보보호법)이 그랬듯 이 법안 역시 향후 전 세계 주요 국가들의 AI 입법에 가이드라인(브뤼셀 효과) 역할을 할 것으로 예상됩니다." },
    program_l2: "AI Act",
    category_l1: "policy",
    company: "EU",
    url: "https://europarl.europa.eu",
    created_at: new Date("2024-03-13T00:00:00Z").toISOString(),
    views: 65000,
    is_important: true
  }
];

const MOCK_COMMENTS = [
  { id: 1, post_id: 1, user_name: "AI크리에이터", avatar: "👤", comment_text: "역피라미드 구조로 읽으니까 기사 핵심이 한눈에 파악되네요. 내용 구성이 훨씬 프로페셔널해졌습니다.", created_at: new Date(Date.now() - 7200000).toISOString(), is_blinded: false },
  { id: 2, post_id: 2, user_name: "프론트엔드노예", avatar: "💻", comment_text: "Claude 3.5 Sonnet의 Artifacts 기능 써보니 개발 패러다임이 바뀔 것 같습니다. 리액트 컴포넌트를 실시간으로 만들어주다니...", created_at: new Date(Date.now() - 86400000).toISOString(), is_blinded: false }
];
