// ============================================
// AI Update Portal v2.5 — Mock Data
// 7 Categories × 5 Articles = 35 Items
// ============================================

const CATEGORIES = [
  { id: 'llm', emoji: '✍️', label: 'LLM & 텍스트 생성', color: '#4F6BF6' },
  { id: 'image', emoji: '🎨', label: '이미지 생성 & 편집', color: '#EC4899' },
  { id: 'video', emoji: '🎬', label: '영상 제작 & 모션', color: '#8B5CF6' },
  { id: 'code', emoji: '💻', label: '코딩 보조 & 엔지니어링', color: '#06B6D4' },
  { id: 'audio', emoji: '🎵', label: '오디오 & 음성 합성', color: '#F59E0B' },
  { id: 'data', emoji: '📊', label: '데이터 분석 & 자동화', color: '#10B981' },
  { id: 'multi', emoji: '🤖', label: '멀티모달 & 에이전트', color: '#EF4444' }
];

const MOCK_POSTS = [
  // ===== LLM & 텍스트 생성 =====
  {
    id: 1,
    title: "GPT-5 Turbo 출시: 추론 속도 3배 향상, 컨텍스트 윈도우 500K 돌파",
    category_l1: "llm",
    program_l2: "ChatGPT",
    company_l3: "OpenAI",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "GPT-5 Turbo는 기존 GPT-4o 대비 추론 속도가 3배 빨라져 실시간 대화에서 체감 지연이 사실상 제로에 가까워졌습니다.",
      "컨텍스트 윈도우가 500K 토큰으로 확장되어 장편 소설 전체를 한 번에 분석하고 요약하는 것이 가능해졌습니다.",
      "비용은 기존 GPT-4o 대비 40% 절감되어 기업 고객의 API 운영 비용 부담이 크게 줄어들었습니다."
    ],
    content_body: `## GPT-5 Turbo: 차세대 언어 모델의 새로운 기준\n\nOpenAI가 차세대 플래그십 모델 GPT-5 Turbo를 공식 출시했습니다. 이번 업데이트는 단순한 성능 개선을 넘어 AI 활용의 패러다임을 바꿀 수 있는 세 가지 핵심 변화를 포함하고 있습니다.\n\n### 추론 속도 혁신\n\n새로운 아키텍처 최적화를 통해 첫 토큰 생성 시간(TTFT)이 기존 대비 70% 단축되었습니다. 이는 사용자가 질문을 입력한 후 응답을 받기까지의 대기 시간이 거의 없어졌음을 의미합니다.\n\n### 컨텍스트 윈도우 확장\n\n500K 토큰의 컨텍스트 윈도우는 약 375,000단어에 해당하며, 이는 일반적인 소설 4~5권 분량입니다. 대규모 코드베이스 분석, 법률 문서 검토, 학술 논문 종합 분석 등에서 획기적인 활용이 가능해집니다.\n\n### API 가격 정책\n\n- Input: $2.50 / 1M 토큰 (기존 $5.00)\n- Output: $7.50 / 1M 토큰 (기존 $15.00)\n\n> "이번 가격 인하는 AI 민주화를 향한 우리의 의지를 반영합니다." — Sam Altman, OpenAI CEO`,
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    views: 2847,
    comments_count: 42
  },
  {
    id: 2,
    title: "Claude 4 Opus: 200K 컨텍스트에서 99.2% 정확도, Artifacts V3 출시",
    category_l1: "llm",
    program_l2: "Claude",
    company_l3: "Anthropic",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "Claude 4 Opus는 Needle-in-a-Haystack 테스트에서 200K 토큰 범위 내 99.2%의 정보 검색 정확도를 달성했습니다.",
      "새로운 Artifacts V3는 실시간 코드 실행, 웹 프리뷰, 차트 생성을 통합한 올인원 워크스페이스를 제공합니다.",
      "Constitutional AI 2.0 적용으로 환각(Hallucination) 비율이 기존 대비 73% 감소했습니다."
    ],
    content_body: `## Claude 4 Opus: 정밀도의 새로운 기준\n\nAnthropic이 최신 플래그십 모델 Claude 4 Opus를 공개했습니다. 이번 버전은 특히 긴 문서 처리에서의 정확성과 안전성에 중점을 두었습니다.\n\n### 정보 검색 정확도\n\n200K 토큰의 방대한 컨텍스트에서도 99.2%의 정확도로 특정 정보를 검색할 수 있어, 법률 문서나 학술 자료 분석에서 탁월한 성능을 보여줍니다.\n\n### Artifacts V3\n\n대화 내에서 직접 코드를 실행하고, 웹 페이지를 미리보고, 데이터 시각화를 생성할 수 있는 통합 워크스페이스가 제공됩니다.`,
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    views: 1923,
    comments_count: 28
  },
  {
    id: 3,
    title: "Gemini 2.5 Flash: 멀티모달 이해력 강화, 1M 토큰 컨텍스트 정식 지원",
    category_l1: "llm",
    program_l2: "Gemini",
    company_l3: "Google",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "Gemini 2.5 Flash는 이미지, 비디오, 오디오를 동시에 이해하고 분석하는 네이티브 멀티모달 추론이 크게 강화되었습니다.",
      "1M 토큰 컨텍스트 윈도우가 정식으로 지원되어 최대 1시간 분량의 비디오를 한 번에 분석할 수 있습니다.",
      "Google AI Studio에서 무료로 사용 가능하며, API 호출 비용도 경쟁 모델 대비 60% 저렴합니다."
    ],
    content_body: `## Gemini 2.5 Flash: 구글의 멀티모달 전략\n\n구글이 Gemini 2.5 Flash를 통해 멀티모달 AI의 새로운 기준을 제시했습니다. 특히 비용 효율성과 접근성에서 큰 강점을 보입니다.`,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    views: 3105,
    comments_count: 56
  },
  {
    id: 4,
    title: "Perplexity Pro: 실시간 웹 검색 + 학술 논문 직접 인용 기능 추가",
    category_l1: "llm",
    program_l2: "Perplexity",
    company_l3: "Perplexity AI",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "학술 논문 데이터베이스(arXiv, PubMed, Semantic Scholar)와 직접 연동하여 인용 정확도가 95%로 향상되었습니다.",
      "실시간 웹 검색 결과를 AI가 즉시 종합 분석하여 최신 정보 기반의 답변을 생성합니다.",
      "새로운 'Research Mode'로 하나의 질문에서 관련 하위 주제까지 자동으로 리서치 트리를 생성합니다."
    ],
    content_body: `## Perplexity Pro: AI 리서치의 미래\n\n Perplexity가 학술 연구자와 전문가를 위한 Pro 버전을 대폭 업그레이드했습니다.`,
    created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    views: 1456,
    comments_count: 19
  },
  {
    id: 5,
    title: "Notion AI Q2 업데이트: 워크스페이스 전체 지식 기반 답변 엔진 탑재",
    category_l1: "llm",
    program_l2: "Notion AI",
    company_l3: "Notion Labs",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "Notion 워크스페이스의 모든 페이지, 데이터베이스, 문서를 AI가 실시간으로 인덱싱하여 답변합니다.",
      "팀원이 과거에 작성한 문서에서 관련 정보를 자동으로 찾아 연결하는 'Knowledge Graph' 기능이 추가되었습니다.",
      "자동 회의록 요약 + 액션 아이템 추출 + 캘린더 연동이 하나의 워크플로우로 통합되었습니다."
    ],
    content_body: `## Notion AI: 팀 지식의 중앙 허브\n\nNotion이 AI를 통해 팀 내 모든 지식을 연결하고 활용하는 새로운 방식을 제시합니다.`,
    created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    views: 987,
    comments_count: 14
  },

  // ===== 이미지 생성 & 편집 =====
  {
    id: 6,
    title: "Midjourney V7 Alpha: 포토리얼리즘 한계 돌파, 텍스트 렌더링 99% 정확도",
    category_l1: "image",
    program_l2: "Midjourney",
    company_l3: "Midjourney Inc",
    status_badge: "Paid",
    tech_status: "Alpha",
    summary_3lines: [
      "V7 Alpha는 실제 사진과 구분이 불가능한 수준의 포토리얼리즘을 달성하여 스톡 포토 산업에 직접적 영향을 줄 것으로 예상됩니다.",
      "이미지 내 텍스트 렌더링 정확도가 99%로 향상되어 포스터, 배너, UI 목업 제작이 실전 활용 가능해졌습니다.",
      "새로운 'Style Reference 2.0' 기능으로 하나의 레퍼런스 이미지만으로 일관된 브랜딩 이미지를 대량 생성할 수 있습니다."
    ],
    content_body: `## Midjourney V7 Alpha: 이미지 AI의 새로운 시대\n\nMidjourney가 V7 Alpha를 공개하며 이미지 생성 AI의 새로운 기준을 제시했습니다. 특히 텍스트 렌더링과 포토리얼리즘에서 획기적인 진전을 이루었습니다.`,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    views: 4521,
    comments_count: 87
  },
  {
    id: 7,
    title: "Stable Diffusion 4: 오픈소스 이미지 생성의 새 기준, 로컬 GPU에서 4초 생성",
    category_l1: "image",
    program_l2: "Stable Diffusion",
    company_l3: "Stability AI",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "SD4는 RTX 4060급 GPU에서도 4초 만에 고품질 이미지를 생성할 수 있도록 모델 경량화에 성공했습니다.",
      "새로운 VAE 아키텍처 적용으로 디테일 표현력이 V3 대비 45% 향상되었습니다.",
      "ControlNet 3.0과의 네이티브 통합으로 포즈, 깊이, 엣지 가이딩이 원클릭으로 가능해졌습니다."
    ],
    content_body: `## Stable Diffusion 4: 오픈소스의 역습\n\n오픈소스 이미지 생성 모델의 대명사 Stable Diffusion이 4번째 메이저 버전을 출시하며 상용 모델과의 격차를 크게 줄였습니다.`,
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    views: 3890,
    comments_count: 63
  },
  {
    id: 8,
    title: "Adobe Firefly 3.5: 포토샵 완전 통합, 생성 이미지의 상업적 저작권 100% 보장",
    category_l1: "image",
    program_l2: "Adobe Firefly",
    company_l3: "Adobe",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "Firefly 3.5는 포토샵 내에서 직접 호출되어 레이어 단위의 정밀한 AI 이미지 편집이 가능해졌습니다.",
      "Adobe Stock 라이선스 데이터로만 학습되어 생성 이미지의 상업적 사용이 법적으로 완전히 보장됩니다.",
      "'Structure Reference' 기능으로 건축물, 제품 디자인의 구조적 일관성을 유지한 변형 생성이 가능합니다."
    ],
    content_body: `## Adobe Firefly 3.5: 프로페셔널의 선택\n\nAdobe가 Firefly 3.5를 통해 크리에이티브 전문가들을 위한 AI 이미지 생성의 새로운 기준을 제시했습니다.`,
    created_at: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    views: 2134,
    comments_count: 31
  },
  {
    id: 9,
    title: "DALL-E 4: GPT와 완전 통합, 대화로 이미지를 실시간 편집하는 시대",
    category_l1: "image",
    program_l2: "DALL-E 4",
    company_l3: "OpenAI",
    status_badge: "Paid",
    tech_status: "Beta",
    summary_3lines: [
      "DALL-E 4는 ChatGPT 대화 내에서 이미지를 생성하고 자연어로 실시간 수정이 가능한 통합 환경을 제공합니다.",
      "이미지의 특정 영역을 클릭하고 '이 부분을 바꿔줘'라고 말하면 즉시 반영되는 인터랙티브 편집 UX가 도입되었습니다.",
      "4K 해상도 출력이 기본 지원되며, 일관된 캐릭터 생성을 위한 'Character Lock' 기능이 추가되었습니다."
    ],
    content_body: `## DALL-E 4: 대화형 이미지 편집의 시작\n\nOpenAI가 DALL-E 4를 통해 텍스트-이미지 생성을 넘어 대화형 이미지 편집이라는 새로운 패러다임을 제시합니다.`,
    created_at: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    views: 2890,
    comments_count: 45
  },
  {
    id: 10,
    title: "Canva AI Suite: 매직 디자인 3.0, 브랜드 키트 AI 자동 적용 기능 출시",
    category_l1: "image",
    program_l2: "Canva AI",
    company_l3: "Canva",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "매직 디자인 3.0은 간단한 설명만으로 프레젠테이션, SNS 포스트, 포스터를 원클릭으로 완성합니다.",
      "브랜드 키트에 등록된 컬러, 폰트, 로고를 AI가 자동으로 인식하여 모든 생성물에 일관되게 적용합니다.",
      "팀 협업 시 AI가 디자인 피드백을 자동으로 제공하는 'Design Critic' 기능이 추가되었습니다."
    ],
    content_body: `## Canva AI Suite: 디자인 민주화의 완성\n\nCanva가 AI Suite 업데이트를 통해 누구나 전문가 수준의 디자인을 만들 수 있는 환경을 완성했습니다.`,
    created_at: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    views: 1678,
    comments_count: 22
  },

  // ===== 영상 제작 & 모션 =====
  {
    id: 11,
    title: "Sora 2.0 정식 출시: 최대 3분 4K 영상 생성, Storyboard Mode 탑재",
    category_l1: "video",
    program_l2: "Sora",
    company_l3: "OpenAI",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "Sora 2.0은 최대 3분 길이의 4K 해상도 영상을 텍스트 프롬프트 하나로 생성할 수 있게 되었습니다.",
      "Storyboard Mode를 통해 장면별 구도, 카메라 앵글, 조명을 개별적으로 제어할 수 있는 프로 기능이 추가되었습니다.",
      "물리 엔진 시뮬레이션이 대폭 개선되어 물, 불, 천(fabric) 등의 자연 현상 표현이 실사 수준에 근접했습니다."
    ],
    content_body: `## Sora 2.0: 텍스트-투-비디오의 새로운 시대\n\nOpenAI Sora가 정식 버전으로 출시되며 영상 제작 산업에 새로운 패러다임을 열었습니다.`,
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    views: 8934,
    comments_count: 156
  },
  {
    id: 12,
    title: "Runway Gen-4: 멀티 클립 에디팅, AI 배우 일관성 유지 기능 혁신",
    category_l1: "video",
    program_l2: "Runway Gen-4",
    company_l3: "Runway",
    status_badge: "Paid",
    tech_status: "Beta",
    summary_3lines: [
      "Gen-4는 여러 개의 클립을 자동으로 연결하여 일관된 스토리라인을 가진 영상을 생성합니다.",
      "AI 캐릭터의 얼굴과 체형이 클립 간 전환 시에도 99% 일관성을 유지하는 'Actor Lock' 기능이 도입되었습니다.",
      "실시간 영상 편집이 가능한 'Gen-4 Editor'가 웹 기반으로 제공되어 별도 소프트웨어 설치가 불필요합니다."
    ],
    content_body: `## Runway Gen-4: AI 영상 편집의 미래\n\nRunway가 Gen-4를 통해 AI 영상 생성과 편집의 경계를 허물었습니다.`,
    created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    views: 3456,
    comments_count: 67
  },
  {
    id: 13,
    title: "Kling 2.0: 중국발 영상 AI의 역습, 무료 1분 영상 생성 개방",
    category_l1: "video",
    program_l2: "Kling",
    company_l3: "Kuaishou",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "Kling 2.0은 최대 1분 길이의 1080p 영상을 완전 무료로 생성할 수 있어 접근성 면에서 혁신적입니다.",
      "한국어 프롬프트를 네이티브로 지원하며, 동아시아 문화권 콘텐츠에 특화된 학습 데이터를 보유합니다.",
      "이미지-투-비디오 변환에서 Sora 1.0과 동등한 품질을 달성하면서도 생성 속도는 2배 빠릅니다."
    ],
    content_body: `## Kling 2.0: 무료 AI 영상 생성의 시대\n\n쾌수(Kuaishou)의 Kling 2.0이 무료 영상 생성 시장에서 파괴적 혁신을 보여주고 있습니다.`,
    created_at: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    views: 2567,
    comments_count: 38
  },
  {
    id: 14,
    title: "HeyGen 5.0: 아바타 실시간 립싱크, 다국어 영상 자동 더빙 32개국 지원",
    category_l1: "video",
    program_l2: "HeyGen",
    company_l3: "HeyGen",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "AI 아바타가 실시간으로 음성에 맞춰 입 모양을 동기화하여 자연스러운 발화 영상을 생성합니다.",
      "하나의 영상을 32개 언어로 자동 더빙하며, 입 모양까지 해당 언어에 맞게 변환하는 기술이 적용되었습니다.",
      "커스텀 아바타 생성에 필요한 학습 영상이 기존 5분에서 30초로 대폭 축소되었습니다."
    ],
    content_body: `## HeyGen 5.0: AI 아바타 영상의 진화\n\nHeyGen이 5.0 업데이트를 통해 AI 아바타 영상 제작의 새로운 기준을 제시합니다.`,
    created_at: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
    views: 1789,
    comments_count: 25
  },
  {
    id: 15,
    title: "Pika 2.0: 이미지 → 3D 애니메이션 변환, 크리에이터 이코노미 플랫폼 론칭",
    category_l1: "video",
    program_l2: "Pika",
    company_l3: "Pika Labs",
    status_badge: "Free",
    tech_status: "Beta",
    summary_3lines: [
      "정적 이미지를 업로드하면 3D 공간에서의 카메라 움직임이 적용된 시네마틱 애니메이션으로 변환됩니다.",
      "크리에이터가 자신의 Pika 템플릿을 판매할 수 있는 마켓플레이스가 론칭되어 수익 창출이 가능해졌습니다.",
      "새로운 'Lip Sync' 기능으로 정적 인물 이미지에 음성을 입히면 자연스럽게 말하는 영상이 생성됩니다."
    ],
    content_body: `## Pika 2.0: 크리에이터를 위한 AI 영상 플랫폼\n\nPika Labs가 2.0 업데이트를 통해 영상 생성 도구에서 크리에이터 플랫폼으로 진화합니다.`,
    created_at: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
    views: 1234,
    comments_count: 18
  },

  // ===== 코딩 보조 & 엔지니어링 =====
  {
    id: 16,
    title: "Cursor 2.0: Background Agent 정식 출시, 자율 코딩 에이전트 시대 개막",
    category_l1: "code",
    program_l2: "Cursor",
    company_l3: "Anysphere",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "Background Agent는 개발자가 다른 작업을 하는 동안 별도 환경에서 자율적으로 코딩 태스크를 수행합니다.",
      "PR 리뷰, 버그 수정, 리팩토링까지 AI가 독립적으로 처리하고 결과를 PR로 제출하는 완전 자동화가 가능합니다.",
      "새로운 'Multi-file Edit' 기능으로 프로젝트 전체를 이해하고 관련 파일들을 동시에 수정합니다."
    ],
    content_body: `## Cursor 2.0: AI 코딩의 새로운 패러다임\n\nAnysphere가 Cursor 2.0을 출시하며 AI 코딩 에디터의 새로운 기준을 제시했습니다.`,
    created_at: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    views: 6789,
    comments_count: 134
  },
  {
    id: 17,
    title: "GitHub Copilot Workspace: 이슈에서 PR까지 전 과정 AI 자동화",
    category_l1: "code",
    program_l2: "GitHub Copilot",
    company_l3: "Microsoft",
    status_badge: "Paid",
    tech_status: "Beta",
    summary_3lines: [
      "GitHub Issue를 AI가 분석하여 구현 계획 수립, 코드 작성, 테스트, PR 생성까지 전 과정을 자동화합니다.",
      "Copilot Chat이 리포지토리 전체 컨텍스트를 이해하여 프로젝트 특화 코드 제안이 가능해졌습니다.",
      "VS Code, JetBrains, Neovim 등 모든 주요 에디터에서 동일한 경험을 제공합니다."
    ],
    content_body: `## GitHub Copilot Workspace: 개발 워크플로우의 혁명\n\nGitHub가 Copilot Workspace를 통해 소프트웨어 개발의 자동화 수준을 한 단계 끌어올렸습니다.`,
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    views: 4567,
    comments_count: 89
  },
  {
    id: 18,
    title: "Devin 2.0: 자율 소프트웨어 엔지니어, SWE-bench Verified 85% 달성",
    category_l1: "code",
    program_l2: "Devin",
    company_l3: "Cognition",
    status_badge: "Paid",
    tech_status: "Beta",
    summary_3lines: [
      "Devin 2.0은 SWE-bench Verified 벤치마크에서 85%의 정답률을 달성하며 AI 코딩 에이전트 최고 성능을 기록했습니다.",
      "자체 IDE 환경에서 브라우저, 터미널, 에디터를 동시에 활용하며 복잡한 디버깅 태스크를 수행합니다.",
      "Slack 연동을 통해 팀원에게 코드 리뷰를 요청하고 피드백을 반영하는 협업 기능이 추가되었습니다."
    ],
    content_body: `## Devin 2.0: AI 소프트웨어 엔지니어의 진화\n\nCognition이 Devin 2.0을 통해 자율 코딩 에이전트의 새로운 가능성을 보여줍니다.`,
    created_at: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
    views: 3245,
    comments_count: 56
  },
  {
    id: 19,
    title: "v0.dev 3.0: Vercel의 AI UI 빌더, 풀스택 앱 원클릭 배포 지원",
    category_l1: "code",
    program_l2: "v0.dev",
    company_l3: "Vercel",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "v0 3.0은 자연어로 설명하면 React + Next.js 기반의 풀스택 웹 앱을 자동으로 생성합니다.",
      "생성된 앱을 Vercel에 원클릭으로 배포할 수 있어 아이디어에서 프로덕션까지의 시간이 수 분으로 단축됩니다.",
      "Shadcn/UI 컴포넌트와 완벽히 통합되어 프로덕션 레벨의 디자인 시스템이 자동 적용됩니다."
    ],
    content_body: `## v0.dev 3.0: 아이디어에서 프로덕션까지\n\nVercel이 v0.dev 3.0을 통해 AI 기반 풀스택 웹 개발의 새로운 기준을 제시합니다.`,
    created_at: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    views: 2345,
    comments_count: 34
  },
  {
    id: 20,
    title: "Replit Agent 2.0: 자연어 → 배포 완료까지 풀 자동화 코딩 환경",
    category_l1: "code",
    program_l2: "Replit Agent",
    company_l3: "Replit",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "자연어로 앱을 설명하면 AI가 환경 설정, 코드 작성, 데이터베이스 구축, 배포까지 전 과정을 자동 수행합니다.",
      "실시간으로 AI의 코딩 과정을 확인하고 중간에 대화로 방향을 수정할 수 있는 인터랙티브 모드가 도입되었습니다.",
      "모바일 앱에서도 AI 에이전트를 실행할 수 있어 이동 중 아이디어를 즉시 프로토타입으로 구현 가능합니다."
    ],
    content_body: `## Replit Agent 2.0: 누구나 개발자\n\nReplit이 Agent 2.0을 통해 코딩 경험이 없는 사람도 앱을 만들 수 있는 환경을 제공합니다.`,
    created_at: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    views: 1890,
    comments_count: 27
  },

  // ===== 오디오 & 음성 합성 =====
  {
    id: 21,
    title: "Suno V4: 3분 풀 프로덕션 음악 생성, 스템 분리 & 리믹스 기능 추가",
    category_l1: "audio",
    program_l2: "Suno",
    company_l3: "Suno",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "V4는 최대 3분 길이의 풀 프로덕션 품질 음악을 30초 만에 생성하며, 장르 정확도가 95%로 향상되었습니다.",
      "생성된 음악의 보컬, 드럼, 베이스, 멜로디를 개별 스템으로 분리하여 세밀한 편집이 가능해졌습니다.",
      "기존 곡을 업로드하면 AI가 스타일을 분석하여 비슷한 분위기의 새로운 곡을 자동 생성하는 'Remix' 기능이 추가되었습니다."
    ],
    content_body: `## Suno V4: AI 음악 제작의 혁명\n\nSuno가 V4를 통해 AI 음악 생성의 품질을 전문 프로듀서 수준으로 끌어올렸습니다.`,
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    views: 3456,
    comments_count: 45
  },
  {
    id: 22,
    title: "ElevenLabs: 음성 복제 2.0, 30초 샘플로 완벽한 감정 표현 가능",
    category_l1: "audio",
    program_l2: "ElevenLabs",
    company_l3: "ElevenLabs",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "음성 복제 2.0은 30초의 음성 샘플만으로 감정, 억양, 호흡까지 재현하는 초정밀 복제를 달성했습니다.",
      "32개 언어 간 실시간 음성 변환이 가능하며, 원본 화자의 목소리 특성이 타 언어에서도 유지됩니다.",
      "오디오북, 팟캐스트, 게임 더빙 등 상업 목적의 음성 생성에 대한 저작권 보호 정책이 강화되었습니다."
    ],
    content_body: `## ElevenLabs: 음성 AI의 최전선\n\nElevenLabs가 음성 복제 2.0을 통해 합성 음성의 자연스러움을 새로운 수준으로 끌어올렸습니다.`,
    created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    views: 2134,
    comments_count: 32
  },
  {
    id: 23,
    title: "Udio V2: AI 작곡의 새 기준, 사용자 보컬 합성 & 라이브 퍼포먼스 모드",
    category_l1: "audio",
    program_l2: "Udio",
    company_l3: "Udio",
    status_badge: "Free",
    tech_status: "Beta",
    summary_3lines: [
      "사용자가 자신의 음성을 녹음하면 AI가 이를 노래 보컬로 변환하여 완전한 곡에 삽입합니다.",
      "라이브 퍼포먼스 모드는 실시간으로 반주를 생성하며, BPM과 키를 즉석에서 조절할 수 있습니다.",
      "MIDI 내보내기가 지원되어 DAW(Digital Audio Workstation)에서의 후속 편집이 가능해졌습니다."
    ],
    content_body: `## Udio V2: AI 음악 제작의 대중화\n\nUdio가 V2를 통해 누구나 프로 수준의 음악을 만들 수 있는 환경을 제공합니다.`,
    created_at: new Date(Date.now() - 13 * 60 * 60 * 1000).toISOString(),
    views: 1567,
    comments_count: 21
  },
  {
    id: 24,
    title: "Voice Engine 2.0: OpenAI의 음성 합성 기술, 교육·의료 분야 특화 출시",
    category_l1: "audio",
    program_l2: "Voice Engine",
    company_l3: "OpenAI",
    status_badge: "Paid",
    tech_status: "Beta",
    summary_3lines: [
      "Voice Engine 2.0은 15초의 음성 샘플만으로 화자의 목소리를 복제하되, 감정 톤까지 세밀하게 조절 가능합니다.",
      "교육 분야에서 다국어 교재 음성을 자동 생성하고, 의료 분야에서 환자 소통용 맞춤 음성을 제공합니다.",
      "악용 방지를 위한 워터마킹과 실시간 동의 확인 시스템이 필수 적용됩니다."
    ],
    content_body: `## Voice Engine 2.0: 책임감 있는 음성 AI\n\nOpenAI가 Voice Engine 2.0을 통해 음성 합성 기술의 사회적 활용 가능성을 확장합니다.`,
    created_at: new Date(Date.now() - 17 * 60 * 60 * 1000).toISOString(),
    views: 1234,
    comments_count: 16
  },
  {
    id: 25,
    title: "Adobe Podcast AI: 원클릭 노이즈 제거 + AI 호스트 음성 생성 기능",
    category_l1: "audio",
    program_l2: "Adobe Podcast",
    company_l3: "Adobe",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "스튜디오급 노이즈 제거 기능이 원클릭으로 제공되어 어디서든 전문적인 녹음 품질을 얻을 수 있습니다.",
      "AI가 팟캐스트 대본을 읽어주는 합성 호스트 음성 기능이 추가되어 1인 팟캐스트 제작이 쉬워졌습니다.",
      "자동 구간 편집(Filler word 제거, 침묵 구간 압축)으로 후반 편집 시간이 80% 단축됩니다."
    ],
    content_body: `## Adobe Podcast AI: 팟캐스트 제작의 혁신\n\nAdobe가 Podcast AI를 통해 오디오 콘텐츠 제작의 진입 장벽을 크게 낮추었습니다.`,
    created_at: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(),
    views: 890,
    comments_count: 12
  },

  // ===== 데이터 분석 & 자동화 =====
  {
    id: 26,
    title: "Julius AI 2.0: 자연어 데이터 분석, Excel부터 빅데이터까지 원스톱 처리",
    category_l1: "data",
    program_l2: "Julius AI",
    company_l3: "Julius",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "CSV, Excel, Google Sheets 파일을 업로드하고 자연어로 질문하면 AI가 즉시 차트와 인사이트를 생성합니다.",
      "Python/R 코드를 자동 생성하여 복잡한 통계 분석, 머신러닝 모델 학습까지 코딩 없이 수행 가능합니다.",
      "분석 결과를 인터랙티브 대시보드로 자동 변환하여 팀과 실시간으로 공유할 수 있습니다."
    ],
    content_body: `## Julius AI 2.0: 데이터 분석의 민주화\n\nJulius AI가 2.0 업데이트를 통해 누구나 데이터 사이언티스트처럼 분석할 수 있는 환경을 제공합니다.`,
    created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    views: 2345,
    comments_count: 34
  },
  {
    id: 27,
    title: "Zapier AI Actions: 6,000+ 앱 연동, 자연어로 자동화 워크플로우 구축",
    category_l1: "data",
    program_l2: "Zapier AI",
    company_l3: "Zapier",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "자연어로 '새 이메일이 오면 Slack에 알리고 Google Sheet에 기록해줘'라고 말하면 자동화가 즉시 생성됩니다.",
      "6,000개 이상의 앱과 연동되어 마케팅, 영업, CS 등 모든 비즈니스 프로세스를 코드 없이 자동화합니다.",
      "AI가 기존 워크플로우를 분석하여 최적화 제안을 하고, 오류 발생 시 자동으로 대체 경로를 실행합니다."
    ],
    content_body: `## Zapier AI Actions: 업무 자동화의 완성\n\nZapier가 AI Actions를 통해 비즈니스 자동화의 새로운 기준을 제시합니다.`,
    created_at: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
    views: 1890,
    comments_count: 28
  },
  {
    id: 28,
    title: "Claude Artifacts 2.0: 데이터 시각화 + 인터랙티브 앱 생성 통합",
    category_l1: "data",
    program_l2: "Claude Artifacts",
    company_l3: "Anthropic",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "대화 중 데이터를 분석하고 인터랙티브 차트, 대시보드를 실시간으로 생성하여 화면에 렌더링합니다.",
      "생성된 아티팩트를 독립 웹페이지로 공유하거나 임베드 코드로 다른 사이트에 삽입할 수 있습니다.",
      "React 기반 미니 앱을 대화만으로 생성하여 간단한 도구(계산기, 타이머, 퀴즈 등)를 즉석에서 만들 수 있습니다."
    ],
    content_body: `## Claude Artifacts 2.0: 대화형 데이터 분석\n\nAnthropic이 Claude Artifacts 2.0을 통해 대화 기반 데이터 분석의 새로운 패러다임을 제시합니다.`,
    created_at: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    views: 2678,
    comments_count: 41
  },
  {
    id: 29,
    title: "Make (Integromat) AI: 비주얼 오토메이션에 GPT 통합, 시나리오 자동 설계",
    category_l1: "data",
    program_l2: "Make",
    company_l3: "Make",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "비주얼 워크플로우 빌더에 GPT 모듈이 내장되어 각 단계에서 AI 처리가 자연스럽게 통합됩니다.",
      "자연어로 시나리오를 설명하면 AI가 최적의 모듈 조합을 자동으로 설계하고 연결합니다.",
      "에러 핸들링 로직을 AI가 자동으로 추가하여 워크플로우의 안정성이 크게 향상되었습니다."
    ],
    content_body: `## Make AI: 비주얼 자동화의 진화\n\nMake가 AI 통합을 통해 비주얼 오토메이션 플랫폼의 새로운 가능성을 보여줍니다.`,
    created_at: new Date(Date.now() - 19 * 60 * 60 * 1000).toISOString(),
    views: 1234,
    comments_count: 18
  },
  {
    id: 30,
    title: "Akkio 3.0: 노코드 ML 플랫폼, 비즈니스 예측 모델 5분 만에 구축",
    category_l1: "data",
    program_l2: "Akkio",
    company_l3: "Akkio",
    status_badge: "Paid",
    tech_status: "Stable",
    summary_3lines: [
      "데이터를 업로드하고 예측 목표를 선택하면 5분 만에 머신러닝 모델이 자동으로 학습 완료됩니다.",
      "매출 예측, 고객 이탈 분석, 리드 스코어링 등 비즈니스 핵심 지표를 노코드로 예측할 수 있습니다.",
      "생성된 모델을 REST API로 즉시 배포하여 기존 시스템과 실시간 연동이 가능합니다."
    ],
    content_body: `## Akkio 3.0: 5분 만에 ML 모델 구축\n\nAkkio가 3.0 업데이트를 통해 머신러닝의 비즈니스 활용 장벽을 완전히 제거했습니다.`,
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    views: 789,
    comments_count: 11
  },

  // ===== 멀티모달 & 에이전트 =====
  {
    id: 31,
    title: "AutoGPT 2.0: 완전 자율 AI 에이전트, 웹 브라우징 + 코드 실행 + 파일 관리 통합",
    category_l1: "multi",
    program_l2: "AutoGPT",
    company_l3: "Significant Gravitas",
    status_badge: "Free",
    tech_status: "Beta",
    summary_3lines: [
      "AutoGPT 2.0은 목표만 설정하면 웹 검색, 코드 작성, 파일 관리를 자율적으로 수행하는 완전 자동 에이전트입니다.",
      "새로운 'Forge' 프레임워크로 커스텀 에이전트를 손쉽게 구축하고 마켓플레이스에서 공유할 수 있습니다.",
      "메모리 관리 시스템이 개선되어 장기 태스크에서도 컨텍스트를 잃지 않고 일관된 작업 수행이 가능합니다."
    ],
    content_body: `## AutoGPT 2.0: 자율 AI의 미래\n\nSignificant Gravitas가 AutoGPT 2.0을 통해 완전 자율 AI 에이전트의 실용적 활용을 보여줍니다.`,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    views: 5678,
    comments_count: 98
  },
  {
    id: 32,
    title: "CrewAI 1.0 정식 출시: 다중 AI 에이전트 팀 협업 프레임워크",
    category_l1: "multi",
    program_l2: "CrewAI",
    company_l3: "CrewAI",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "여러 AI 에이전트에게 각각 다른 역할(리서처, 라이터, 편집자)을 부여하여 팀처럼 협업시킬 수 있습니다.",
      "에이전트 간 대화와 정보 교환이 자동으로 이루어지며, 최종 결과물은 품질이 단일 에이전트 대비 40% 향상됩니다.",
      "Python 기반의 간결한 API로 10줄 이내의 코드로 복잡한 에이전트 팀을 구성할 수 있습니다."
    ],
    content_body: `## CrewAI 1.0: 멀티 에이전트 협업의 시작\n\nCrewAI가 1.0 정식 출시를 통해 AI 에이전트 협업의 새로운 패러다임을 제시합니다.`,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    views: 3456,
    comments_count: 52
  },
  {
    id: 33,
    title: "Gemini Live 2.0: 실시간 카메라 + 음성 대화, 개인 AI 비서의 완성",
    category_l1: "multi",
    program_l2: "Gemini Live",
    company_l3: "Google",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "스마트폰 카메라로 보는 것을 AI가 실시간으로 인식하고 음성으로 설명해주는 완전한 멀티모달 대화가 가능합니다.",
      "Google 생태계(Gmail, Calendar, Maps, Drive)와 완전 통합되어 일상 속 모든 컨텍스트를 이해합니다.",
      "Deep Research 기능으로 복잡한 주제를 AI가 수십 개 소스를 조사하여 종합 보고서를 자동 생성합니다."
    ],
    content_body: `## Gemini Live 2.0: 일상 속 AI 비서\n\n구글이 Gemini Live 2.0을 통해 일상 생활에 자연스럽게 녹아드는 AI 비서를 완성했습니다.`,
    created_at: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    views: 4567,
    comments_count: 76
  },
  {
    id: 34,
    title: "Microsoft Autogen 0.4: 에이전트 오케스트레이션 프레임워크 대규모 업데이트",
    category_l1: "multi",
    program_l2: "Microsoft Autogen",
    company_l3: "Microsoft",
    status_badge: "Free",
    tech_status: "Beta",
    summary_3lines: [
      "Autogen 0.4는 에이전트 간 통신 프로토콜을 표준화하여 서로 다른 LLM 기반 에이전트의 호환성을 보장합니다.",
      "비주얼 에이전트 빌더(Autogen Studio)가 업그레이드되어 드래그 앤 드롭으로 복잡한 워크플로우를 구성합니다.",
      "엔터프라이즈 환경을 위한 거버넌스, 로깅, 모니터링 기능이 강화되어 프로덕션 배포가 안정적입니다."
    ],
    content_body: `## Microsoft Autogen 0.4: 엔터프라이즈 에이전트의 기준\n\nMicrosoft가 Autogen 0.4를 통해 기업용 AI 에이전트 플랫폼의 새로운 기준을 제시합니다.`,
    created_at: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    views: 2345,
    comments_count: 34
  },
  {
    id: 35,
    title: "LangChain v0.3: LCEL 2.0 출시, 스트리밍 체인 & 메모리 관리 대폭 개선",
    category_l1: "multi",
    program_l2: "LangChain",
    company_l3: "LangChain Inc",
    status_badge: "Free",
    tech_status: "Stable",
    summary_3lines: [
      "LCEL(LangChain Expression Language) 2.0으로 복잡한 AI 파이프라인을 선언적으로 구축할 수 있게 되었습니다.",
      "스트리밍 지원이 모든 컴포넌트에 내장되어 실시간 토큰 생성 및 중간 결과 확인이 가능합니다.",
      "LangSmith와의 통합이 강화되어 프로덕션 환경에서의 디버깅, 평가, 모니터링이 원활합니다."
    ],
    content_body: `## LangChain v0.3: AI 애플리케이션 개발의 표준\n\nLangChain이 v0.3를 통해 AI 애플리케이션 개발 프레임워크의 새로운 표준을 제시합니다.`,
    created_at: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    views: 3890,
    comments_count: 45
  }
];

// Mock Comments
const MOCK_COMMENTS = [
  {
    id: 1,
    post_id: 11,
    user_name: "AI크리에이터",
    avatar: "AC",
    comment_text: "Sora 2.0 드디어 정식 출시됐군요! Storyboard Mode가 게임 체인저가 될 것 같습니다. 기존 영상 제작 워크플로우가 완전히 바뀔 듯.",
    created_at: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    is_blinded: false
  },
  {
    id: 2,
    post_id: 11,
    user_name: "테크리서처",
    avatar: "TR",
    comment_text: "물리 엔진 개선이 인상적이네요. 물과 천 표현이 실사 수준이라니... 이전 버전에서는 부자연스러운 부분이 많았는데.",
    created_at: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    is_blinded: false
  },
  {
    id: 3,
    post_id: 11,
    user_name: "디자인허슬러",
    avatar: "DH",
    comment_text: "가격이 궁금하네요. 3분 4K 영상 하나 생성하는 데 API 비용이 얼마나 들지... Plus 구독자는 무제한인가요?",
    created_at: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    is_blinded: false
  },
  {
    id: 4,
    post_id: 11,
    user_name: "스팸봇123",
    avatar: "SB",
    comment_text: "많은 유저의 신고로 블라인드 처리된 댓글입니다.",
    created_at: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    is_blinded: true
  },
  {
    id: 5,
    post_id: 11,
    user_name: "영상PD_JM",
    avatar: "JM",
    comment_text: "현업 영상 PD입니다. 솔직히 아직 프로덕션에 바로 쓰기는 어렵지만, 프리비즈나 컨셉 영상 제작에는 이미 충분합니다. 속도가 놀랍네요.",
    created_at: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    is_blinded: false
  }
];

// Helper function: Relative time
function getRelativeTime(dateStr) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}일 전`;
  return `${Math.floor(diff / 604800)}주 전`;
}

// Category helpers
function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}

function getPostsByCategory(categoryId) {
  if (categoryId === 'all') return MOCK_POSTS;
  return MOCK_POSTS.filter(p => p.category_l1 === categoryId);
}

function getPostById(id) {
  return MOCK_POSTS.find(p => p.id === id);
}

function getCommentsByPostId(postId) {
  return MOCK_COMMENTS.filter(c => c.post_id === postId);
}

function formatViews(num) {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}
