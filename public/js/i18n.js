const i18nDictionary = {
  en: {
    "app_title": "AI Portal",
    "search_placeholder": "Search AI tools, keywords, companies...",
    "tab_latest": "Latest",
    "tab_trending": "Trending",
    "tab_pocket": "Pocket",
    "btn_login": "Login",
    "btn_refresh": "Refresh",
    "btn_alerts": "Alerts",
    "btn_settings": "Settings",
    "filter_all": "All",
    "company_filter_title": "🏢 Companies:",
    "msg_no_alerts": "No new alerts.",
    "msg_alerts_read": "All alerts marked as read.",
    "msg_pocket_added": "Added to Pocket",
    "msg_pocket_removed": "Removed from Pocket",
    "feed_all_title": "Today's AI Updates",
    "feed_all_subtitle": "Tracking the latest AI changes in real-time.",
    "feed_live": "Live",
    "empty_data_title": "Loading data or no results.",
    "empty_data_desc": "It might take 30-60 seconds for AI to fetch and translate news initially.<br>Please refresh the page shortly.",
    "modal_settings_title": "Screen Settings",
    "theme": "Theme",
    "theme_dark": "Dark Mode",
    "theme_light": "Light Mode",
    "view_mode": "View Mode",
    "view_card": "Card View",
    "view_list": "List View",
    "sidebar": "Sidebar",
    "sidebar_show": "Show",
    "sidebar_hide": "Hide",
    "ad_badge": "SPONSORED",
    "ad_title": "Next-Gen AI IDE",
    "ad_desc": "Boost your productivity 2x with our 30-day free trial."
  },
  ko: {
    "app_title": "AI 포털",
    "search_placeholder": "AI 도구, 키워드, 개발사 검색...",
    "tab_latest": "최신",
    "tab_trending": "인기",
    "tab_pocket": "포켓",
    "btn_login": "로그인",
    "btn_refresh": "새로고침",
    "btn_alerts": "알림",
    "btn_settings": "설정",
    "filter_all": "전체",
    "company_filter_title": "🏢 관련 기업:",
    "msg_no_alerts": "새 업데이트 알림이 없습니다.",
    "msg_alerts_read": "새 업데이트 알림을 모두 확인했습니다.",
    "msg_pocket_added": "포켓에 추가됨",
    "msg_pocket_removed": "포켓에서 제거됨",
    "feed_all_title": "오늘의 AI 업데이트",
    "feed_all_subtitle": "전 세계 AI 도구의 최신 변화를 실시간으로 추적합니다.",
    "feed_live": "실시간",
    "empty_data_title": "데이터를 가져오는 중이거나 결과가 없습니다.",
    "empty_data_desc": "AI가 기사를 스크랩하는 데 최초 약 30~60초가 소요될 수 있습니다.<br>잠시 후 화면을 새로고침해 주세요.",
    "modal_settings_title": "화면 설정",
    "theme": "테마",
    "theme_dark": "다크 모드",
    "theme_light": "라이트 모드",
    "view_mode": "보기 모드",
    "view_card": "카드형 보기",
    "view_list": "리스트형 압축",
    "sidebar": "사이드바",
    "sidebar_show": "표시",
    "sidebar_hide": "숨김",
    "ad_badge": "SPONSORED",
    "ad_title": "차세대 AI 코딩 도구",
    "ad_desc": "지금 바로 30일 무료 체험으로 개발 생산성을 2배 높이세요."
  }
};

function i18n(key) {
  const lang = window.app && window.app.state ? window.app.state.lang : 'en';
  return i18nDictionary[lang][key] || key;
}

// Function to translate all static DOM elements with data-i18n attribute
function translateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.type === 'text') {
      el.placeholder = i18n(key);
    } else {
      el.innerHTML = i18n(key);
    }
  });
}
