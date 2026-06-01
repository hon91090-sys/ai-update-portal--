// ============================================
// AI Update Portal v2.5 — Application Engine
// Professional SPA with API integration
// ============================================
(function () {
  'use strict';

  const state = {
    currentCategory: 'all',
    currentView: 'feed',
    currentPostId: null,
    currentTab: 'latest',
    searchQuery: '',
    filterTag: 'all',
    companyFilters: [],
    bookmarks: new Set(JSON.parse(localStorage.getItem('aip_bookmarks') || '[]')),
    posts: [],
    isLoading: false,
    lang: 'en'
  };

  // Safe i18n text extractor for bilingual JSON fields
  function getI18nText(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[state.lang] || field['en'] || field['ko'] || '';
  }

  function toggleLang() {
    state.lang = state.lang === 'en' ? 'ko' : 'en';
    if (typeof translateDOM === 'function') translateDOM();
    renderSidebar();
    renderFeed();
  }

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ===== User Settings (Customization) =====
  const defaultPrefs = { theme: 'light', viewMode: 'card', showRightSidebar: true };
  const prefs = Object.assign({}, defaultPrefs, JSON.parse(localStorage.getItem('aip_prefs') || '{}'));

  function savePrefs() {
    localStorage.setItem('aip_prefs', JSON.stringify(prefs));
    applyPrefs();
    renderFeed(); // Re-render feed to apply viewMode
  }

  function applyPrefs() {
    if (prefs.theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    
    const right = $('#right-sidebar');
    if (right) {
      if (!prefs.showRightSidebar) {
        right.style.display = 'none';
      } else {
        right.style.display = 'flex';
      }
    }
  }

  // ===== Supabase Setup =====
  let supabase = null;
  let currentUser = null;

  async function initSupabase() {
    try {
      const res = await fetch('/api/config');
      if (res.ok) {
        const config = await res.json();
        if (config.SUPABASE_URL && config.SUPABASE_ANON_KEY && window.supabase) {
          supabase = window.supabase.createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
        }
      }
    } catch(e) {}
  }

  // ===== Init =====
  async function init() {
    applyPrefs();
    await initSupabase();
    if (supabase) await checkSession();
    await loadPosts();
    renderSidebar();
    renderFeed();
    renderRightSidebar();
    initResizableSidebar();
    bindGlobalEvents();
    setTimeout(() => document.body.classList.add('loaded'), 50);
  }

  async function checkSession() {
    const { data: { session } } = await supabase.auth.getSession();
    currentUser = session?.user || null;
    updateHeaderForUser();
    
    supabase.auth.onAuthStateChange((_event, sess) => {
      currentUser = sess?.user || null;
      updateHeaderForUser();
    });
  }

  function updateHeaderForUser() {
    const btn = $('#login-trigger');
    if (!btn) return;
    if (currentUser) {
      const name = currentUser.user_metadata?.full_name || currentUser.email || '유저';
      const avatar = currentUser.user_metadata?.avatar_url || '';
      btn.innerHTML = avatar ? `<img src="${avatar}" style="width:20px;height:20px;border-radius:50%;vertical-align:middle;margin-right:4px"> ${name}` : name;
      btn.onclick = async () => { await supabase.auth.signOut(); showToast('로그아웃 되었습니다.', 'info'); };
    } else {
      btn.innerHTML = '로그인';
      btn.onclick = () => app.showAuthModal();
    }
  }

  // ===== Data Loading =====
  async function loadPosts() {
    try {
      const res = await fetch('/api/posts');
      if (res.ok) {
        const apiPosts = await res.json();
        state.posts = (apiPosts && apiPosts.length > 0) ? apiPosts : (INITIAL_POSTS || []);
        return;
      }
    } catch (e) {}
    state.posts = INITIAL_POSTS || [];
  }

  async function refreshFeed() {
    showToast('피드를 새로고침합니다...', 'info');
    try {
      // Trigger AI news fetch
      const res = await fetch('/api/news/fetch', { method: 'POST' });
      const data = await res.json();
      if (data.success && data.count > 0) {
        showToast(`✨ AI가 ${data.count}개의 새 기사를 생성했습니다!`, 'success');
      }
    } catch (e) { /* ignore */ }
    await loadPosts();
    renderFeed();
  }

  // ===== Left Sidebar =====
  function renderSidebar() {
    const sb = $('#left-sidebar');
    sb.innerHTML = `
      <div class="sidebar-section-title">${getI18nText({ko: '카테고리', en: 'Categories'})}</div>
      ${CATEGORIES.map(cat => {
        const count = cat.id === 'all' ? state.posts.length : state.posts.filter(p => p.category_l1 === cat.id).length;
        return `
          <div class="nav-item ${state.currentCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
            <span class="nav-item-icon">${cat.emoji}</span>
            <span class="nav-item-label">${getI18nText(cat.label)}</span>
            <span class="nav-item-count">${count}</span>
          </div>`;
      }).join('')}
      <div class="sidebar-divider"></div>
      <div class="sidebar-section-title">${getI18nText({ko: '내 공간', en: 'My Space'})}</div>
      <div class="nav-item ${state.currentView === 'pocket' ? 'active' : ''}" data-cat="pocket">
        <span class="nav-item-icon">📌</span>
        <span class="nav-item-label">${getI18nText({ko: '포켓 보관함', en: 'Pocket'})}</span>
        <span class="nav-item-count" id="pocket-count">${state.bookmarks.size}</span>
      </div>
      <div class="sidebar-divider"></div>
      <div class="sidebar-section-title">AI 엔진</div>
      <div class="nav-item" onclick="app.triggerFetch()" style="cursor:pointer">
        <span class="nav-item-icon">🔄</span>
        <span class="nav-item-label">${getI18nText({ko: '뉴스 수동 수집', en: 'Fetch News'})}</span>
      </div>
    `;

    sb.querySelectorAll('.nav-item[data-cat]').forEach(item => {
      item.addEventListener('click', () => {
        const cat = item.dataset.cat;
        if (cat === 'pocket') {
          state.currentView = 'pocket';
          updateSidebarActive(item);
          renderFeed();
        } else {
          state.currentCategory = cat;
          state.currentView = 'feed';
          updateSidebarActive(item);
          renderFeed();
        }
      });
    });
  }

  function updateSidebarActive(el) {
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
  }

  function renderCompanyFilters() {
    const counts = {};
    state.posts.forEach(p => {
      if (p.company_l3) counts[p.company_l3] = (counts[p.company_l3] || 0) + 1;
    });
    
    const topCompanies = Object.keys(counts)
      .sort((a, b) => counts[b] - counts[a])
      .slice(0, 10);
      
    const companies = topCompanies.length > 0 ? topCompanies : ['OpenAI', 'Google', 'Microsoft', 'Meta', 'Anthropic', 'Apple'];

    return `
      <div class="company-filters" id="company-filters">
        <span style="font-size:12px; font-weight:700; color:var(--text-tertiary); margin-right:4px; display:flex; align-items:center;">${getI18nText({ko: '🏢 관련 기업/기관 필터:', en: '🏢 Company Filter:'})}</span>
        ${companies.map(c => `
          <label class="company-checkbox-label">
            <input type="checkbox" value="${c}" ${state.companyFilters.includes(c) ? 'checked' : ''}>
            ${c}
          </label>
        `).join('')}
      </div>
    `;
  }

  // ===== Main Feed =====
  function renderFeed() {
    const main = $('#main-content');
    if (state.currentView === 'detail') return;

    if (state.currentView === 'pocket') {
      renderPocketView(main);
      return;
    }

    const cat = getCategoryById(state.currentCategory);
    let posts = filterPosts();

    main.innerHTML = `
      <div class="main-inner" id="feed-area">
        <div class="feed-header">
          <div class="feed-header-top">
            <h1 class="feed-title">${state.currentCategory === 'all' ? getI18nText({ko: '오늘의 AI 업데이트', en: 'Today\'s AI Updates'}) : cat.emoji + ' ' + getI18nText(cat.label)}</h1>
            <div class="feed-live-indicator"><span class="live-dot"></span> <span data-i18n="feed_live">${getI18nText({ko: '실시간', en: 'Live'})}</span></div>
          </div>
          <p class="feed-subtitle">${state.currentCategory === 'all' ? getI18nText({ko: '전 세계 AI 도구의 최신 변화를 실시간으로 추적합니다', en: 'Tracking the latest AI changes in real-time'}) : getI18nText(cat.label) + ' ' + getI18nText({ko: '업데이트', en: 'Updates'})}</p>
        </div>
        <div class="filter-chips" id="filter-chips">
          <button class="filter-chip ${state.filterTag === 'all' ? 'active' : ''}" data-f="all" data-i18n="filter_all">${getI18nText({ko: '전체', en: 'All'})}</button>
          <button class="filter-chip ${state.filterTag === 'Free' ? 'active' : ''}" data-f="Free">🟢 Free</button>
          <button class="filter-chip ${state.filterTag === 'Paid' ? 'active' : ''}" data-f="Paid">🟡 Paid</button>
          <button class="filter-chip ${state.filterTag === 'Beta' ? 'active' : ''}" data-f="Beta">🔮 Beta</button>
          <button class="filter-chip ${state.filterTag === 'Stable' ? 'active' : ''}" data-f="Stable">✅ Stable</button>
          <button class="filter-chip ${state.filterTag === 'Alpha' ? 'active' : ''}" data-f="Alpha">🔴 Alpha</button>
        </div>
        ${renderCompanyFilters()}
        <div class="card-list ${prefs.viewMode === 'list' ? 'view-list' : ''}" id="card-list">${renderCards(posts)}</div>
      </div>
    `;

    $('#filter-chips').addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      $$('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.filterTag = chip.dataset.f;
      $('#card-list').innerHTML = renderCards(filterPosts());
      bindCardClicks();
    });

    const cfs = $('#company-filters');
    if (cfs) {
      cfs.addEventListener('change', e => {
        if (e.target.type === 'checkbox') {
          const val = e.target.value;
          if (e.target.checked) state.companyFilters.push(val);
          else state.companyFilters = state.companyFilters.filter(c => c !== val);
          $('#card-list').innerHTML = renderCards(filterPosts());
          bindCardClicks();
        }
      });
    }

    bindCardClicks();
    main.scrollTop = 0;
  }

  function filterPosts() {
    let posts = state.currentCategory === 'all' ? [...state.posts] : state.posts.filter(p => p.category_l1 === state.currentCategory);
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.program_l2.toLowerCase().includes(q) || p.company_l3.toLowerCase().includes(q));
    }
    if (state.filterTag !== 'all') {
      posts = posts.filter(p => state.filterTag === 'Free' || state.filterTag === 'Paid' ? p.status_badge === state.filterTag : p.tech_status === state.filterTag);
    }
    if (state.companyFilters && state.companyFilters.length > 0) {
      posts = posts.filter(p => state.companyFilters.includes(p.company_l3));
    }
    if (state.currentTab === 'trending') {
      posts.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else {
      posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return posts;
  }

  function renderCards(posts) {
    if (!posts.length) {
      return `<div style="text-align:center;padding:80px 20px;color:var(--text-tertiary)">
        <div style="font-size:48px;margin-bottom:16px;animation: pulse 2s infinite">🤖</div>
        <div style="font-size:16px;font-weight:600;color:var(--text-secondary);margin-bottom:8px">${getI18nText({ko: '실시간 데이터를 가져오는 중이거나 결과가 없습니다.', en: 'Data is being fetched or no results.'})}</div>
        <div style="font-size:13px;color:var(--text-tertiary)">${getI18nText({ko: 'AI가 해외 기사를 스크랩하고 번역/요약하는 데 최초 약 30~60초가 소요될 수 있습니다.<br>잠시 후 화면을 새로고침해 주세요.', en: 'AI may take 30-60s to scrap and summarize.<br>Please refresh after a moment.'})}</div>
      </div>`;
    }
    return posts.map((p, i) => {
      const cat = getCategoryById(p.category_l1);
      const logo = getCompanyLogo(p.company_l3);
      const bk = state.bookmarks.has(p.id);
      const titleStr = getI18nText(p.title);
      const summaryStr = getI18nText(p.summary_3lines ? p.summary_3lines : p.summary);
      const summaryHTML = Array.isArray(summaryStr) ? summaryStr.map(s => `<li>${s}</li>`).join('') : summaryStr;

      return `
        <article class="news-card" data-id="${p.id}" style="animation:cardIn .35s ease ${i * 40}ms both">
          <div class="news-card-body">
            <div class="card-top-row">
              <div class="card-program-logo" style="background:${logo.bg};color:${logo.color}">${logo.icon}</div>
              <span class="card-program-name">${p.program_l2}</span>
              <span class="card-dot"></span>
              <span class="card-company">${p.company_l3}</span>
              <span class="card-dot"></span>
              <span class="card-time">${relativeTime(p.created_at)}</span>
            </div>
            <h3 class="card-title">${titleStr}</h3>
            <p class="card-summary">${summaryHTML}</p>
            <div class="card-bottom-row">
              <span class="badge badge-cat" data-cat="${p.category_l1}">${cat.emoji} ${getI18nText(cat.label)}</span>
              <span class="badge badge-status ${p.status_badge === 'Paid' ? 'paid' : ''}">${p.status_badge}</span>
              <span class="badge badge-tech ${(p.tech_status||'').toLowerCase()}">${p.tech_status||'Stable'}</span>
              <div class="card-stats">
                <span class="card-stat">👁 ${fmtViews(p.views||0)}</span>
                <span class="card-stat">💬 ${p.comments_count||0}</span>
              </div>
            </div>
          </div>
          <button class="card-bookmark ${bk ? 'active' : ''}" onclick="event.stopPropagation();app.toggleBookmark(${p.id})" title="${bk ? '북마크 해제' : '북마크'}">
            ${bk ? '🔖' : '🏷️'}
          </button>
        </article>`;
    }).join('');
  }

  function bindCardClicks() {
    $$('.news-card').forEach(card => {
      card.addEventListener('click', () => showDetail(parseInt(card.dataset.id)));
    });
  }

  // ===== Detail View =====
  async function showDetail(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    state.currentView = 'detail';
    state.currentPostId = postId;
    const cat = getCategoryById(post.category_l1);
    const logo = getCompanyLogo(post.company_l3);
    const bk = state.bookmarks.has(post.id);
    
    let comments = [];
    if (supabase) {
      try {
        const { data, error } = await supabase.from('comments').select('*').eq('post_id', postId).order('created_at', { ascending: true });
        if (!error && data) comments = data;
      } catch (e) {}
    } else {
      comments = MOCK_COMMENTS.filter(c => c.post_id === postId);
    }

    const main = $('#main-content');
    if (main) main.scrollTop = 0;
    
    main.innerHTML = `
      <div class="main-inner detail-page visible">
        <button class="detail-back" onclick="app.goHome()">← 피드로 돌아가기</button>
        <div class="detail-meta-row">
          <span class="badge badge-cat" data-cat="${post.category_l1}">${cat.emoji} ${cat.label}</span>
          <span class="badge badge-status ${post.status_badge === 'Paid' ? 'paid' : ''}">${post.status_badge}</span>
          <span class="badge badge-tech ${(post.tech_status||'').toLowerCase()}">${post.tech_status}</span>
          <span style="margin-left:auto;font-size:12px;color:var(--text-tertiary)">${relativeTime(post.created_at)} · 👁 ${fmtViews(post.views||0)}</span>
        </div>

        <h1 class="detail-title">${post.title}</h1>

        <div class="detail-program-bar">
          <div class="detail-program-icon" style="background:${logo.bg};color:${logo.color};font-size:16px;font-weight:800">${logo.icon}</div>
          <div>
            <div class="detail-program-name">${post.program_l2}</div>
            <div class="detail-program-company">${post.company_l3}</div>
          </div>
          <button class="card-bookmark ${bk ? 'active' : ''}" style="opacity:1;position:static;margin-left:auto;font-size:20px" onclick="app.toggleBookmark(${post.id})">
            ${bk ? '🔖' : '🏷️'}
          </button>
        </div>

        ${post.summary_3lines ? `
        <div class="summary-box">
          <div class="summary-box-label">📋 핵심 3줄 요약</div>
          ${post.summary_3lines.map((l, i) => `
            <div class="summary-item">
              <div class="summary-num">${i + 1}</div>
              <div class="summary-text">${l}</div>
            </div>`).join('')}
        </div>` : ''}

        <div class="detail-body">${renderMD(post.content_body || '')}</div>

        <div class="timetalk">
          <div class="timetalk-header">
            <h3 class="timetalk-title">💬 타임톡</h3>
            <span class="timetalk-count">${comments.length}개</span>
          </div>
          <div class="comment-input-row">
            <div class="comment-input-avatar">U</div>
            <div class="comment-input-box">
              <textarea class="comment-textarea" id="comment-input" placeholder="의견을 공유하세요..." rows="1"
                oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'"></textarea>
              <div class="comment-actions-row">
                <button class="comment-submit" id="comment-submit" disabled onclick="app.submitComment()">등록</button>
              </div>
            </div>
          </div>
          <div class="comment-list" id="comment-list">
            ${comments.map(c => renderCommentHTML(c)).join('')}
          </div>
        </div>
      </div>
    `;

    const ci = $('#comment-input');
    const cs = $('#comment-submit');
    ci.addEventListener('input', () => { cs.disabled = !ci.value.trim(); });
    main.scrollTop = 0;
    history.pushState({ postId }, '', `/posts/${postId}`);
  }

  function renderCommentHTML(c) {
    if (c.is_blinded) {
      return `<div class="comment-item"><div class="comment-avatar">🚫</div><div class="comment-body"><div class="comment-blinded">🔇 많은 유저의 신고로 블라인드 처리된 댓글입니다.</div></div></div>`;
    }
    return `
      <div class="comment-item">
        <div class="comment-avatar">${c.avatar}</div>
        <div class="comment-body">
          <div class="comment-meta">
            <span class="comment-author">${c.user_name}</span>
            <span class="comment-time-badge">${relativeTime(c.created_at)}</span>
          </div>
          <div class="comment-text-content">${c.comment_text}</div>
          <div class="comment-btns">
            <button class="comment-btn">👍 좋아요</button>
            <button class="comment-btn">💬 답글</button>
            <button class="comment-btn report-btn" onclick="app.showToast('신고 접수됨','warning')">🚨 신고</button>
          </div>
        </div>
      </div>`;
  }

  function renderMD(t) {
    return t.replace(/## (.*)/g, '<h2>$1</h2>').replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>').replace(/> (.*)/g, '<blockquote>$1</blockquote>')
      .replace(/- (.*)/g, '<li>$1</li>').replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
  }

  // ===== Pocket View =====
  function renderPocketView(main) {
    const bkPosts = state.posts.filter(p => state.bookmarks.has(p.id));
    main.innerHTML = `
      <div class="main-inner" id="feed-area">
        <div class="feed-header">
          <h1 class="feed-title">📌 포켓 보관함</h1>
          <p class="feed-subtitle">${bkPosts.length}개의 기사를 저장했습니다</p>
        </div>
        ${bkPosts.length ? `<div class="card-list">${renderCards(bkPosts)}</div>` : `
          <div class="pocket-empty">
            <div class="pocket-empty-icon">📭</div>
            <div class="pocket-empty-title">보관함이 비어 있습니다</div>
            <div class="pocket-empty-desc">뉴스 카드의 🏷️ 아이콘을 클릭하여 저장하세요</div>
          </div>`}
      </div>`;
    bindCardClicks();
    main.scrollTop = 0;
  }

  // ===== Right Sidebar + Resize =====
  function renderRightSidebar() {
    const sb = $('#right-sidebar');
    const trending = [...state.posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 6);

    sb.innerHTML = `
      <div class="resize-handle" id="resize-handle"></div>
      <div class="right-section">
        <div class="right-section-header">
          <h3 class="right-section-title">🔥 실시간 트렌딩</h3>
          <span class="right-section-more">더보기 →</span>
        </div>
        <div class="trending-list">
          ${trending.map((p, i) => {
            const cat = getCategoryById(p.category_l1);
            return `
              <div class="trending-item" data-id="${p.id}">
                <span class="trending-rank ${i < 3 ? 'top' : ''}">${i + 1}</span>
                <div class="trending-info">
                  <div class="trending-title">${p.title}</div>
                  <div class="trending-meta">
                    <span class="trending-tag" style="background:${cat.color}12;color:${cat.color}">${p.program_l2}</span>
                    <span>👁 ${fmtViews(p.views||0)}</span>
                  </div>
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>

      <div class="right-section">
        <div class="right-section-header">
          <h3 class="right-section-title">🚀 스폰서 광고</h3>
          <span class="right-section-more" style="font-size:10px; color:var(--text-tertiary)">AD</span>
        </div>
        <a href="#" target="_blank" class="ad-banner-link">
          <div class="ad-banner">
            <div class="ad-banner-content">
              <span class="ad-banner-badge">SPONSORED</span>
              <strong class="ad-banner-title">차세대 AI 코딩 도구</strong>
              <p class="ad-banner-desc">지금 바로 30일 무료 체험으로 개발 생산성을 2배 높이세요.</p>
            </div>
          </div>
        </a>
      </div>

      <div class="right-section">
        <div class="right-section-header">
          <h3 class="right-section-title">✨ AI 인사이트</h3>
        </div>
        <div class="insight-card">
          <div class="insight-label">🧠 AI 트렌드 분석</div>
          <div class="insight-text">
            이번 주 가장 주목할 트렌드는 <strong>자율 AI 에이전트</strong>의 부상입니다.
            Cursor Background Agent, Devin 2.0, AutoGPT 2.0 등 자율적으로 작업을 수행하는 에이전트 모델이 빠르게 성숙하고 있습니다.
          </div>
          <div class="insight-source">Gemini 2.0 Flash 분석 · 매 시간 자동 갱신</div>
        </div>
      </div>

      <div class="right-section">
        <div class="right-section-header">
          <h3 class="right-section-title">⚡ 최근 활동</h3>
        </div>
        <div class="activity-list">
          <div class="activity-item"><div class="activity-dot" style="background:var(--cat-video)"></div><div class="activity-content"><div class="activity-text"><strong>AI크리에이터</strong>님이 Sora 2.0에 댓글</div><div class="activity-time">15분 전</div></div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--cat-code)"></div><div class="activity-content"><div class="activity-text"><strong>새 기사</strong> Cursor 2.0 발행</div><div class="activity-time">45분 전</div></div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--cat-llm)"></div><div class="activity-content"><div class="activity-text"><strong>GPT-5</strong> 조회수 2.8K 돌파</div><div class="activity-time">1시간 전</div></div></div>
        </div>
      </div>
    `;

    sb.querySelectorAll('.trending-item').forEach(item => {
      item.addEventListener('click', () => showDetail(parseInt(item.dataset.id)));
    });
  }

  // ===== Resizable Right Sidebar =====
  function initResizableSidebar() {
    const handle = $('#resize-handle');
    const sidebar = $('#right-sidebar');
    let isResizing = false;
    let startX, startWidth;

    handle.addEventListener('mousedown', (e) => {
      isResizing = true;
      startX = e.clientX;
      startWidth = sidebar.offsetWidth;
      handle.classList.add('active');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isResizing) return;
      const diff = startX - e.clientX;
      const newWidth = Math.min(
        parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-right-max')),
        Math.max(
          parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-right-min')),
          startWidth + diff
        )
      );
      sidebar.style.width = newWidth + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (!isResizing) return;
      isResizing = false;
      handle.classList.remove('active');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    });
  }

  // ===== Bookmark =====
  function toggleBookmark(id) {
    if (state.bookmarks.has(id)) {
      state.bookmarks.delete(id);
      showToast('포켓에서 제거됨', 'info');
    } else {
      state.bookmarks.add(id);
      showToast('포켓에 저장됨 📌', 'success');
    }
    localStorage.setItem('aip_bookmarks', JSON.stringify([...state.bookmarks]));
    const pc = $('#pocket-count');
    if (pc) pc.textContent = state.bookmarks.size;

    if (state.currentView === 'feed') renderFeed();
    else if (state.currentView === 'pocket') renderFeed();
    else if (state.currentView === 'detail') showDetail(state.currentPostId);
  }

  // ===== Comment =====
  async function submitComment() {
    const input = $('#comment-input');
    const text = input.value.trim();
    if (!text) return;
    if (/블로그|강의|판매|광고|클릭/.test(text)) {
      showToast('⚠️ AI 가이드라인 위배 문구 감지', 'error');
      return;
    }

    input.disabled = true;
    let newComment = null;

    if (!currentUser) {
      showToast('⚠️ 로그인이 필요합니다.', 'error');
      input.disabled = false;
      return;
    }

    try {
      const { data, error } = await supabase.from('comments').insert([{
        post_id: state.currentPostId,
        user_id: currentUser.id,
        user_name: currentUser.user_metadata?.full_name || currentUser.email || '유저',
        avatar: currentUser.user_metadata?.avatar_url || '',
        comment_text: text
      }]).select();

      if (error) throw error;
      if (data && data.length > 0) newComment = data[0];
    } catch (e) {
      showToast('⚠️ 댓글 등록 실패', 'error');
      input.disabled = false;
      return;
    }

    $('#comment-list').insertAdjacentHTML('beforeend', renderCommentHTML(newComment));
    
    const countEl = $('.timetalk-count');
    if (countEl) countEl.textContent = parseInt(countEl.textContent) + 1 + '개';

    input.value = '';
    input.style.height = 'auto';
    input.disabled = false;
    $('#comment-submit').disabled = true;
    showToast('댓글 등록됨 💬', 'success');
  }

  // ===== Navigation =====
  function goHome() {
    state.currentView = 'feed';
    state.currentPostId = null;
    renderFeed();
    renderSidebar();
    history.pushState({}, '', '/');
    const main = $('#main-content');
    if (main) main.scrollTop = 0;
  }

  async function triggerFetch() {
    showToast('🔄 AI 뉴스 수집 시작...', 'info');
    try {
      const res = await fetch('/api/news/fetch', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        showToast(`✅ ${data.count}개 기사 생성 완료!`, 'success');
        await loadPosts();
        renderFeed();
        renderSidebar();
        renderRightSidebar();
      } else {
        showToast(`❌ 오류: ${data.error}`, 'error');
      }
    } catch (e) {
      showToast('서버 연결 실패', 'error');
    }
  }

  // ===== Auth Modal =====
  function showAuthModal() {
    let ov = $('#auth-overlay');
    if (!ov) {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="modal-overlay" id="auth-overlay">
          <div class="auth-modal" style="position:relative">
            <button class="modal-close" onclick="app.hideAuthModal()">✕</button>
            <div class="auth-header">
              <div class="auth-logo">A</div>
              <h2 class="auth-title">AI Portal에 오신 것을 환영합니다</h2>
              <p class="auth-subtitle">소셜 계정으로 간편하게 시작하세요</p>
            </div>
            <div class="social-buttons" style="display:flex;flex-direction:column;gap:12px;padding:10px 0;">
              <input type="email" id="auth-email" placeholder="이메일 주소" style="padding:12px;border:1px solid var(--bg-tertiary);border-radius:6px;width:100%;font-size:14px;background:var(--bg-primary);color:var(--text-primary);" />
              <input type="password" id="auth-password" placeholder="비밀번호 (6자리 이상)" style="padding:12px;border:1px solid var(--bg-tertiary);border-radius:6px;width:100%;font-size:14px;background:var(--bg-primary);color:var(--text-primary);" />
              <button class="social-btn" style="background:var(--accent-blue);color:#fff;border:none;margin-top:10px;justify-content:center;" onclick="app.emailLogin()">이메일로 간편 시작 / 로그인</button>
            </div>
            <div class="auth-footer" style="margin-top:16px;">처음 오셨나요? 이메일과 비밀번호를 입력하시면 <b>자동으로 1초만에 가입</b>됩니다!</div>
          </div>
        </div>`);
      ov = $('#auth-overlay');
    }
    ov.classList.add('visible');
    ov.addEventListener('click', e => { if (e.target === ov) hideAuthModal(); });
  }

  function hideAuthModal() { const o = $('#auth-overlay'); if (o) o.classList.remove('visible'); }
  
  async function emailLogin() {
    if (!supabase) return showToast('Supabase 설정 오류', 'error');
    const email = $('#auth-email')?.value;
    const password = $('#auth-password')?.value;
    
    if (!email || !email.includes('@') || password.length < 6) {
      return showToast('유효한 이메일과 6자리 이상 비밀번호를 입력하세요.', 'error');
    }
    
    showToast('로그인 처리 중...', 'info');
    let { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    // 만약 없는 계정(Invalid login credentials)이면 자동으로 회원가입 처리
    if (error && error.message.includes('Invalid login')) {
      const res = await supabase.auth.signUp({ email, password });
      if (res.error) {
        return showToast(`가입 오류: ${res.error.message}`, 'error');
      } else {
        showToast('가입 성공! 환영합니다 🎉', 'success');
        hideAuthModal();
        return;
      }
    } else if (error) {
      return showToast(`로그인 오류: ${error.message}`, 'error');
    }
    
    showToast('로그인 성공! 🎉', 'success');
    hideAuthModal();
  }

  // ===== Toast =====
  function showToast(msg, type = 'info') {
    let c = $('#toast-container');
    if (!c) { document.body.insertAdjacentHTML('beforeend', '<div class="toast-container" id="toast-container"></div>'); c = $('#toast-container'); }
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(16px)'; t.style.transition = 'all .3s ease'; setTimeout(() => t.remove(), 300); }, 3500);
  }

  // ===== Settings Modal =====
  function showSettingsModal() {
    let m = $('#settings-modal');
    if (!m) {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="settings-modal" id="settings-modal">
          <div class="settings-header">
            <h3 class="settings-title">화면 설정</h3>
            <button class="modal-close settings-close-btn" style="position:static">✕</button>
          </div>
          <div class="settings-group">
            <div class="settings-label">테마 모드</div>
            <div class="settings-options" id="setting-theme">
              <button class="settings-btn" data-val="light">☀️ 라이트</button>
              <button class="settings-btn" data-val="dark">🌙 다크</button>
            </div>
          </div>
          <div class="settings-group">
            <div class="settings-label">뉴스 보기 방식</div>
            <div class="settings-options" id="setting-view">
              <button class="settings-btn" data-val="card">🗂️ 카드형 (기본)</button>
              <button class="settings-btn" data-val="list">📄 리스트형 (밀집)</button>
            </div>
          </div>
          <div class="settings-group">
            <div class="settings-label">레이아웃</div>
            <div class="settings-options" id="setting-sidebar">
              <button class="settings-btn" data-val="true">트렌딩 패널 보임</button>
              <button class="settings-btn" data-val="false">숨김 (집중 모드)</button>
            </div>
          </div>
        </div>
      `);
      m = $('#settings-modal');
      
      // Bind settings events
      $('.settings-close-btn').addEventListener('click', () => {
        $('#settings-modal').classList.remove('visible');
      });
      $('#setting-theme').addEventListener('click', e => {
        if(e.target.tagName !== 'BUTTON') return;
        prefs.theme = e.target.dataset.val;
        savePrefs();
        updateSettingsUI();
      });
      $('#setting-view').addEventListener('click', e => {
        if(e.target.tagName !== 'BUTTON') return;
        prefs.viewMode = e.target.dataset.val;
        savePrefs();
        updateSettingsUI();
      });
      $('#setting-sidebar').addEventListener('click', e => {
        if(e.target.tagName !== 'BUTTON') return;
        prefs.showRightSidebar = e.target.dataset.val === 'true';
        savePrefs();
        updateSettingsUI();
      });
    }
    
    updateSettingsUI();
    m.classList.toggle('visible');
  };

  function updateSettingsUI() {
    const m = $('#settings-modal');
    if (!m) return;
    $$('#setting-theme .settings-btn').forEach(b => b.classList.toggle('active', b.dataset.val === prefs.theme));
    $$('#setting-view .settings-btn').forEach(b => b.classList.toggle('active', b.dataset.val === prefs.viewMode));
    $$('#setting-sidebar .settings-btn').forEach(b => b.classList.toggle('active', b.dataset.val === String(prefs.showRightSidebar)));
  }

  // ===== Notifications =====
  let hasNewNotification = false;
  
  function triggerMockNotification() {
    setTimeout(() => {
      hasNewNotification = true;
      const badge = $('#notification-badge');
      if (badge) badge.style.display = 'block';
    }, 3000);
  }

  function readNotifications() {
    const badge = $('#notification-badge');
    if (hasNewNotification) {
      hasNewNotification = false;
      if (badge) badge.style.display = 'none';
      showToast('새 업데이트 알림을 모두 확인했습니다.', 'success');
    } else {
      showToast('새 업데이트 알림이 없습니다.', 'info');
    }
  }

  // ===== Global Events =====
  function bindGlobalEvents() {
    // Logo click
    const logo = $('.header-logo');
    if (logo) logo.addEventListener('click', goHome);

    // Search
    const si = $('#search-input');
    let st;
    si.addEventListener('input', e => {
      clearTimeout(st);
      st = setTimeout(() => { state.searchQuery = e.target.value; if (state.currentView === 'feed') renderFeed(); }, 200);
    });

    // Ctrl+K
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); si.focus(); }
      if (e.key === 'Escape') { if (state.currentView === 'detail') goHome(); si.blur(); }
    });

    // Header tabs
    $$('.header-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.header-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.currentTab = tab.dataset.tab;
        if (tab.dataset.tab === 'pocket') {
          state.currentView = 'pocket';
          renderFeed();
        } else {
          state.currentView = 'feed';
          renderFeed();
        }
      });
    });

    // Popstate
    window.addEventListener('popstate', e => {
      if (e.state && e.state.postId) showDetail(e.state.postId);
      else goHome();
    });
  }

  // ===== Public API =====
  window.app = { toggleBookmark, submitComment, showAuthModal, hideAuthModal, emailLogin, showSettingsModal, readNotifications, goHome, showToast, refreshFeed, triggerFetch, toggleLang };
  document.addEventListener('DOMContentLoaded', () => { init(); triggerMockNotification(); });
})();
