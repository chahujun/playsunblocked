/* ============================================================
   playsunblocked — Counter & Rating & Comments Module
   - Play counts: CounterAPI (global, all visitors see same number)
   - Ratings: localStorage (user can rate 1-5 stars)
   - Comments: localStorage (user can leave comments)
   ============================================================ */
(function (global) {
  'use strict';

  var NS = 'playsunblocked.net';
  var API_BASE = 'https://counterapi.com/api/' + NS + '/play/';
  var RATING_KEY = 'ps_rating_';
  var COMMENTS_KEY = 'ps_comments_';
  var PLAYED_KEY = 'ps_played_';

  /* ---------- Play Count (global via CounterAPI) ---------- */

  // Record a play (increment global counter). Fire-and-forget via JSONP.
  function recordPlay(slug) {
    // Prevent double-counting in same session
    try {
      var sessionKey = PLAYED_KEY + slug + '_' + Math.floor(Date.now() / 60000);
      if (sessionStorage.getItem(sessionKey)) return;
      sessionStorage.setItem(sessionKey, '1');
    } catch (e) {}

    var cbName = 'ps_cb_' + slug + '_' + Date.now();
    global[cbName] = function (res) {
      delete global[cbName];
    };
    var s = document.createElement('script');
    s.src = API_BASE + slug + '?callback=' + cbName;
    s.onerror = function () { delete global[cbName]; };
    document.head.appendChild(s);
    s.remove ? s.remove() : document.head.removeChild(s);
  }

  // Fetch play count for a game (readOnly). Calls callback with {value, abv}.
  function fetchPlayCount(slug, callback) {
    var cbName = 'ps_fc_' + slug + '_' + Date.now();
    global[cbName] = function (res) {
      delete global[cbName];
      callback(null, res || { value: 0, abv: '0' });
    };
    var s = document.createElement('script');
    s.src = API_BASE + slug + '?readOnly=true&callback=' + cbName;
    s.onerror = function () {
      delete global[cbName];
      callback('err', { value: 0, abv: '0' });
    };
    document.head.appendChild(s);
    s.remove ? s.remove() : document.head.removeChild(s);
  }

  // Fetch play counts for multiple games in parallel
  function fetchPlayCounts(slugs, callback) {
    var results = {};
    var done = 0;
    var total = slugs.length;
    if (total === 0) { callback(results); return; }
    slugs.forEach(function (slug) {
      fetchPlayCount(slug, function (err, res) {
        results[slug] = res;
        done++;
        if (done >= total) callback(results);
      });
    });
  }

  // Format play count for display
  function formatPlays(value, lang) {
    if (!value || value === 0) {
      return lang === 'zh' ? '0 次游玩' : '0 plays';
    }
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M ' + (lang === 'zh' ? '次游玩' : 'plays');
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K ' + (lang === 'zh' ? '次游玩' : 'plays');
    }
    return value + ' ' + (lang === 'zh' ? '次游玩' : 'plays');
  }

  // Format play count short (for compact card display)
  function formatPlaysShort(value, lang) {
    if (!value || value === 0) return '0';
    if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
    if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
    return String(value);
  }

  /* ---------- Rating (localStorage) ---------- */

  function getRating(slug) {
    try {
      var v = localStorage.getItem(RATING_KEY + slug);
      return v ? parseInt(v, 10) : 0;
    } catch (e) { return 0; }
  }

  function setRating(slug, stars) {
    try {
      localStorage.setItem(RATING_KEY + slug, String(stars));
      // Also track in aggregate list
      var all = getAllRatings();
      all[slug] = stars;
      localStorage.setItem('ps_all_ratings', JSON.stringify(all));
    } catch (e) {}
  }

  function getAllRatings() {
    try {
      return JSON.parse(localStorage.getItem('ps_all_ratings') || '{}');
    } catch (e) { return {}; }
  }

  // Generate star HTML (filled + empty stars)
  function starsHtml(rating, size) {
    var s = '';
    var cls = size === 'sm' ? 'rating-star-sm' : 'rating-star';
    for (var i = 1; i <= 5; i++) {
      s += '<svg class="' + cls + ' ' + (i <= rating ? 'rating-star-filled' : 'rating-star-empty') + '" width="' + (size === 'sm' ? 12 : 16) + '" height="' + (size === 'sm' ? 12 : 16) + '" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    return s;
  }

  // Render an interactive rating widget into a container element
  function renderRatingWidget(slug, container, lang) {
    if (!container) return;
    var current = getRating(slug);
    var html = '<div class="ps-rating-widget" data-slug="' + slug + '">';
    html += '<div class="ps-rating-stars" style="display:inline-flex;gap:2px;cursor:pointer;">';
    for (var i = 1; i <= 5; i++) {
      html += '<svg class="ps-rate-star" data-stars="' + i + '" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="color:' + (i <= current ? 'var(--color-primary)' : 'var(--color-border-light)') + ';transition:color 0.2s;" pointer-events="all"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    html += '</div>';
    if (current > 0) {
      html += '<span class="ps-rating-text" style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-left:8px;">' + (lang === 'zh' ? '你给的评价：' : 'Your rating: ') + current + '/5</span>';
    } else {
      html += '<span class="ps-rating-text" style="font-size:var(--text-sm);color:var(--color-text-tertiary);margin-left:8px;">' + (lang === 'zh' ? '点击星星打分' : 'Click to rate') + '</span>';
    }
    html += '</div>';

    container.innerHTML = html;

    // Wire up click events
    var stars = container.querySelectorAll('.ps-rate-star');
    stars.forEach(function (star) {
      star.addEventListener('click', function () {
        var val = parseInt(this.getAttribute('data-stars'), 10);
        setRating(slug, val);
        renderRatingWidget(slug, container, lang);
      });
      star.addEventListener('mouseenter', function () {
        var val = parseInt(this.getAttribute('data-stars'), 10);
        stars.forEach(function (s2) {
          var sv = parseInt(s2.getAttribute('data-stars'), 10);
          s2.style.color = sv <= val ? 'var(--color-primary)' : 'var(--color-border-light)';
        });
      });
    });
    var starContainer = container.querySelector('.ps-rating-stars');
    if (starContainer) {
      starContainer.addEventListener('mouseleave', function () {
        var saved = getRating(slug);
        stars.forEach(function (s2) {
          var sv = parseInt(s2.getAttribute('data-stars'), 10);
          s2.style.color = sv <= saved ? 'var(--color-primary)' : 'var(--color-border-light)';
        });
      });
    }
  }

  /* ---------- Comments (localStorage) ---------- */

  function getComments(slug) {
    try {
      return JSON.parse(localStorage.getItem(COMMENTS_KEY + slug) || '[]');
    } catch (e) { return []; }
  }

  function addComment(slug, name, text) {
    try {
      var comments = getComments(slug);
      comments.unshift({
        name: name || (typeof PLAYSUNBLOCKED_LANG !== 'undefined' && PLAYSUNBLOCKED_LANG === 'zh' ? '匿名玩家' : 'Anonymous'),
        text: text,
        date: new Date().toISOString()
      });
      // Keep max 50 comments
      if (comments.length > 50) comments = comments.slice(0, 50);
      localStorage.setItem(COMMENTS_KEY + slug, JSON.stringify(comments));
      return true;
    } catch (e) { return false; }
  }

  function formatDate(iso, lang) {
    var d = new Date(iso);
    var now = new Date();
    var diff = (now - d) / 1000;
    if (lang === 'zh') {
      if (diff < 60) return '刚刚';
      if (diff < 3600) return Math.floor(diff / 60) + '分钟前';
      if (diff < 86400) return Math.floor(diff / 3600) + '小时前';
      if (diff < 604800) return Math.floor(diff / 86400) + '天前';
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    } else {
      if (diff < 60) return 'just now';
      if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
      if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
      if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
  }

  // Render comments section into a container
  function renderComments(slug, container, lang) {
    if (!container) return;
    var comments = getComments(slug);
    var zh = lang === 'zh';

    var html = '<div class="ps-comments-section" data-slug="' + slug + '">';
    html += '<h3 style="font-size:var(--text-lg);font-weight:var(--weight-bold);margin-bottom:12px;">' + (zh ? '玩家评论' : 'Player Comments') + ' <span style="color:var(--color-text-tertiary);font-size:var(--text-sm);">(' + comments.length + ')</span></h3>';

    // Comment form
    html += '<div class="ps-comment-form" style="margin-bottom:16px;">';
    html += '<input type="text" class="ps-comment-name" placeholder="' + (zh ? '昵称（可选）' : 'Name (optional)') + '" style="width:100%;max-width:240px;padding:8px 12px;border:1.6px solid var(--color-border);background:var(--color-bg);color:var(--color-text);font-size:var(--text-sm);border-radius:4px;margin-bottom:8px;" maxlength="20">';
    html += '<textarea class="ps-comment-text" placeholder="' + (zh ? '写下你的评论...' : 'Write your comment...') + '" style="width:100%;padding:8px 12px;border:1.6px solid var(--color-border);background:var(--color-bg);color:var(--color-text);font-size:var(--text-sm);border-radius:4px;min-height:60px;resize:vertical;margin-bottom:8px;" maxlength="500"></textarea>';
    html += '<button class="ps-comment-submit" style="padding:6px 16px;border:1.6px solid var(--color-border);background:var(--color-primary);color:#fff;font-size:var(--text-sm);font-weight:var(--weight-bold);border-radius:4px;cursor:pointer;">' + (zh ? '发表评论' : 'Post Comment') + '</button>';
    html += '</div>';

    // Comments list
    if (comments.length === 0) {
      html += '<p style="color:var(--color-text-tertiary);font-size:var(--text-sm);padding:16px 0;">' + (zh ? '还没有评论，来写第一条吧！' : 'No comments yet. Be the first!') + '</p>';
    } else {
      html += '<div class="ps-comments-list" style="display:flex;flex-direction:column;gap:12px;">';
      comments.forEach(function (c) {
        html += '<div class="ps-comment-item" style="padding:12px;border:1.6px solid var(--color-border);border-radius:4px;background:var(--color-bg);">';
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">';
        html += '<span style="font-weight:var(--weight-bold);font-size:var(--text-sm);color:var(--color-text);">' + escapeHtml(c.name) + '</span>';
        html += '<span style="font-size:var(--text-xs);color:var(--color-text-tertiary);">' + formatDate(c.date, lang) + '</span>';
        html += '</div>';
        html += '<p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin:0;word-wrap:break-word;">' + escapeHtml(c.text) + '</p>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div>';

    container.innerHTML = html;

    // Wire up submit button
    var btn = container.querySelector('.ps-comment-submit');
    if (btn) {
      btn.addEventListener('click', function () {
        var nameEl = container.querySelector('.ps-comment-name');
        var textEl = container.querySelector('.ps-comment-text');
        var text = textEl.value.trim();
        if (!text) {
          textEl.focus();
          return;
        }
        addComment(slug, nameEl.value.trim(), text);
        renderComments(slug, container, lang);
      });
    }
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Detect language ---------- */
  function detectLang() {
    if (typeof PLAYSUNBLOCKED_LANG !== 'undefined') return PLAYSUNBLOCKED_LANG;
    var path = window.location.pathname;
    if (path.indexOf('-cn') > -1 || path.indexOf('/zh') > -1) return 'zh';
    var param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'zh' || param === 'cn') return 'zh';
    return 'en';
  }

  /* ---------- Export ---------- */
  global.PLAYSUNBLOCKED_COUNTER = {
    recordPlay: recordPlay,
    fetchPlayCount: fetchPlayCount,
    fetchPlayCounts: fetchPlayCounts,
    formatPlays: formatPlays,
    formatPlaysShort: formatPlaysShort,
    getRating: getRating,
    setRating: setRating,
    getAllRatings: getAllRatings,
    starsHtml: starsHtml,
    renderRatingWidget: renderRatingWidget,
    getComments: getComments,
    addComment: addComment,
    renderComments: renderComments,
    detectLang: detectLang
  };

})(window);
