# AI Update Portal - 인터넷 배포 및 우회 설정 가이드 (v2.5)

본 프로젝트는 Vercel을 이용해 무료로 인터넷에 배포할 수 있으며, 이 과정에서 한국 지역의 API 제한이 서버 리전(미국)에 의해 **완벽하게 우회**됩니다.

---

## 🚀 배포 방법 (차근차근 따라 하기)

### 1단계: GitHub에 소스코드 업로드하기

#### 💡 가장 쉬운 방법 (GitHub Desktop 프로그램 사용 - 권장)
1. **GitHub Desktop 설치**: [GitHub Desktop 공식 홈페이지](https://desktop.github.com/)에서 프로그램을 다운로드하여 설치하고 로그인합니다.
2. **로컬 저장소 추가**: GitHub Desktop 실행 후 `File` -> `Add local repository...`를 누릅니다.
3. **경로 선택**: 다음 경로를 입력하고 `Add Repository`를 클릭합니다:
   - `C:\Users\govls\.gemini\antigravity-ide\scratch\ai-update-portal`
   - Git 저장소가 아니라는 경고가 뜨면 `create a repository` 링크를 눌러 생성해줍니다.
4. **GitHub에 게시**: 우측 상단 `Publish repository` 버튼을 클릭하여 GitHub에 원격 저장소를 생성하고 업로드(Push)합니다. (Keep this code private 체크 여부는 자유입니다.)

---

#### 💻 개발자 방법 (Git CLI 명령어 사용)
*만약 Git CLI가 이미 설치되어 있다면 터미널(PowerShell 또는 VS Code 내장 터미널)에서 아래 명령어를 실행하세요.*
1. **GitHub 로그인 및 새 저장소(Repository) 생성**: [GitHub](https://github.com)에 로그인 후 우측 상단의 `New` 버튼을 눌러 새 저장소를 생성합니다. (저장소 이름 예: `ai-update-portal`)
2. **터미널에서 아래 명령어 순서대로 입력**:
   ```bash
   git init
   git add .
   git commit -m "feat: AI Update Portal v2.5 release"
   git branch -M main
   git remote add origin https://github.com/본인유저명/저장소이름.git
   git push -u origin main
   ```

---

### 2단계: Vercel을 이용해 1분 만에 웹사이트 배포하기

1. **Vercel 회원가입 및 로그인**: [Vercel 공식 홈페이지](https://vercel.com)에 접속하여 **Continue with GitHub**를 선택해 가입 및 로그인을 진행합니다.
2. **프로젝트 가져오기 (Import)**:
   - 로그인 후 대시보드 화면에서 `Add New` -> `Project` 버튼을 누릅니다.
   - 방금 GitHub에 업로드한 `ai-update-portal` 저장소를 찾아서 `Import` 버튼을 누릅니다.
3. **환경 변수 (Environment Variables) 설정 (중요 🌟)**:
   - 화면 중간의 `Environment Variables` 항목을 클릭해 확장합니다.
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `AQ.Ab8RN6J2... (사용자님의 API 키 전체를 붙여넣으세요)`
   - 오른쪽에 있는 `Add` 버튼을 꼭 눌러서 등록해줍니다.
4. **배포 시작**:
   - 하단의 `Deploy` 버튼을 누릅니다.
   - 약 30초~1분 뒤, 축하 폭죽 애니메이션과 함께 배포가 완료됩니다!

---

## 📡 실시간 실제 뉴스 연동 구조 (Real-time RSS Fetching)
이번 v2.5 버전은 AI가 허구로 뉴스를 지어내는 것이 아니라, **실제 해외 탑 테크 블로그(TechCrunch, The Verge, OpenAI Blog 등)의 최신 RSS 피드를 실시간으로 가져옵니다**.

1. 서버가 TechCrunch 등의 최신 기사 전문(Raw Data)을 스크랩합니다.
2. 긁어온 실제 기사 데이터를 Gemini AI에게 전달합니다.
3. 미국 리전에서 동작하는 Gemini AI가 문서를 분석하여 가장 중요한 3개의 실제 뉴스를 선별하고, 한국어로 번역/요약하여 포털에 실시간 업로드합니다.

## ⚙️ 작동 확인
Vercel에 배포된 URL(예: `https://ai-update-portal.vercel.app`)로 접속하면 한국 지역 제한 없이 깔끔하게 동작하는 실제 서비스를 볼 수 있습니다! 앱의 좌측 하단 '뉴스 수동 수집' 버튼을 누르면 실시간 해외 기사를 즉시 분석해 가져옵니다.
