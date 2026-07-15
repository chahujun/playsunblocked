/* ============================================================
   playsunblocked — Shared Game Data
   Single source of truth for all pages (index / games / detail)
   Each game is a self-contained HTML file under /games/<slug>.html
   ============================================================ */
(function (global) {
  'use strict';

  // Category → gradient cover (honest, no misleading photos)
  var CATEGORY_GRADIENTS = {
    'Action':    ['#FF5C28', '#B8350A'],
    'Puzzle':    ['#4A90C0', '#2A5A80'],
    'Arcade':    ['#FFCE4D', '#C77E00'],
    'Strategy':  ['#7AB040', '#3A5A40'],
    'Adventure': ['#A060A0', '#4A2448']
  };

  var GAMES = [
    {
      slug: 'alchemic-pegs',
      title: { en: 'Alchemic Pegs', cn: '魔法守卫战' },
      subtitle: { en: 'Elemental Mage Defense', cn: '元素法师' },
      category: 'Strategy',
      rating: 4.6,
      plays: '1.2M',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'Defend the elemental core as an alchemist mage. Mix fire, water, acid and bolt orbs to chain-combo incoming pegs in this tactical defense puzzle.',
        cn: '化身炼金法师守护元素核心。混合火、水、酸、雷四种法球，通过连锁消除击退来袭的魔钉，考验策略与反应。'
      },
      howToPlay: {
        en: ['Click to launch the selected orb', 'Match 3+ same-color pegs to pop them', 'Chain pops for combo multipliers', 'Survive waves and protect the core'],
        cn: ['点击发射当前选中的法球', '三个或以上同色魔钉相连即可消除', '连锁消除触发连击倍率', '抵御波次进攻，守护核心']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'bubble-tanks',
      title: { en: 'Bubble Tanks', cn: '泡泡坦克' },
      subtitle: { en: 'Aquatic Skirmisher', cn: '海域遭遇战' },
      category: 'Action',
      rating: 4.7,
      plays: '2.1M',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Mouse + Keyboard', cn: '鼠标 + 键盘' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'Pilot a bubble tank through procedurally generated bubble fields. Destroy enemy tanks, absorb their bubbles, and evolve your weaponry across endless sectors.',
        cn: '驾驶泡泡坦克穿越随机生成的气泡海域。击毁敌坦克、吸收气泡进化武器，在无尽扇区中不断变强。'
      },
      howToPlay: {
        en: ['Move with WASD or mouse', 'Aim and fire with the mouse', 'Pop enemy tanks to collect bubbles', 'Visit adjacent sectors on the radar'],
        cn: ['WASD 或鼠标移动', '鼠标瞄准并射击', '击破敌坦克收集气泡', '通过雷达前往相邻扇区']
      },
      featured: true,
      trending: true
    },
    {
      slug: 'void-shadow',
      title: { en: 'Void Shadow', cn: '诡秘调查：虚空之影' },
      subtitle: { en: 'Gothic Investigation', cn: '克苏鲁悬疑' },
      category: 'Adventure',
      rating: 4.8,
      plays: '890K',
      duration: { en: '10-15 min', cn: '10-15 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Hard', cn: '困难' },
      description: {
        en: 'A Lovecraftian investigation into a town consumed by the void. Gather clues, manage your sanity, and decide the fate of the cursed settlement before the shadow spreads.',
        cn: '一场克苏鲁式的诡秘调查。收集线索、管理理智值，在虚空蔓延之前决定被诅咒小镇的命运。'
      },
      howToPlay: {
        en: ['Click locations to investigate', 'Collect and combine clues', 'Watch your sanity meter', 'Make choices that shape the ending'],
        cn: ['点击地点展开调查', '收集并组合线索', '注意理智值变化', '关键抉择影响结局走向']
      },
      featured: false,
      trending: true
    },
    {
      slug: 'zombie-crisis',
      title: { en: 'Zombie Crisis', cn: '僵尸危机' },
      subtitle: { en: 'Outbreak Survival', cn: '末日突围' },
      category: 'Action',
      rating: 4.5,
      plays: '3.4M',
      duration: { en: '10-15 min', cn: '10-15 分钟' },
      controls: { en: 'Keyboard + Mouse', cn: '键盘 + 鼠标' },
      difficulty: { en: 'Hard', cn: '困难' },
      description: {
        en: 'Survive the outbreak in a top-down zombie shooter. Manage scarce ammo, fortify positions, and extract through increasingly desperate wave scenarios.',
        cn: '俯视角丧尸射击生存。在末日中管理稀缺弹药、加固阵地，在愈发绝望的尸潮波次中突围撤离。'
      },
      howToPlay: {
        en: ['WASD to move, mouse to aim and shoot', 'R to reload, conserve ammo', 'Barricade doors to slow the horde', 'Reach the extraction point alive'],
        cn: ['WASD 移动，鼠标瞄准射击', 'R 装弹，注意弹药管理', '加固门窗减缓尸潮', '存活抵达撤离点']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'event-horizon',
      title: { en: 'Event Horizon', cn: '一口一个宇宙' },
      subtitle: { en: 'Bite-sized Cosmos', cn: '微型宇宙模拟' },
      category: 'Arcade',
      rating: 4.4,
      plays: '670K',
      duration: { en: '2-5 min', cn: '2-5 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Easy', cn: '简单' },
      description: {
        en: 'Sculpt tiny universes in bite-sized sessions. Spawn stars, bend gravity, and trigger supernovae to hit cosmic score targets before heat death.',
        cn: '在碎片时间里雕琢微型宇宙。孕育恒星、弯曲引力、引爆超新星，在热寂之前达成宇宙分数目标。'
      },
      howToPlay: {
        en: ['Click to spawn celestial bodies', 'Drag to adjust gravity wells', 'Chain supernovae for combos', 'Hit the target score before entropy wins'],
        cn: ['点击生成天体', '拖拽调整引力阱', '连锁超新星触发连击', '在熵增前达成目标分数']
      },
      featured: false,
      trending: false
    },
    {
      slug: 'zen-ink',
      title: { en: 'Zen Ink', cn: '半卷山水' },
      subtitle: { en: 'Half a Scroll', cn: '水墨放置' },
      category: 'Puzzle',
      rating: 4.9,
      plays: '1.5M',
      duration: { en: '2-5 min', cn: '2-5 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Easy', cn: '简单' },
      description: {
        en: 'A meditative idle painting game in ink-wash style. Brush mountains, rivers and mist to cultivate zen, unlock poetic upgrades, and unwind.',
        cn: '水墨风格的禅意放置绘画。描绘山水云雾以积累禅意，解锁诗意升级，在笔墨间放松心境。'
      },
      howToPlay: {
        en: ['Click and drag to paint scenery', 'Zen accumulates automatically', 'Spend zen on brush upgrades', 'No fail state — just relax'],
        cn: ['点击拖拽描绘山水', '禅意自动积累', '消耗禅意升级笔法', '无失败状态，放松即可']
      },
      featured: true,
      trending: true
    },
    {
      slug: 'quantum-synapse',
      title: { en: 'Quantum Synapse', cn: '念回路' },
      subtitle: { en: 'Mindloop', cn: '神经回路解谜' },
      category: 'Puzzle',
      rating: 4.6,
      plays: '720K',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Hard', cn: '困难' },
      description: {
        en: 'Route signals through a neural network in this cyberpunk circuit puzzle. Bridge synapses, avoid feedback loops, and ignite the mindloop.',
        cn: '在赛博朋克回路谜题中为神经信号寻路。桥接突触、规避反馈环路，点亮念回路。'
      },
      howToPlay: {
        en: ['Click nodes to rotate them', 'Connect the signal from input to output', 'Avoid short-circuit feedback loops', 'Light every synapse to win'],
        cn: ['点击节点旋转方向', '将信号从输入连通至输出', '避免短路的反馈环路', '点亮所有突触通关']
      },
      featured: false,
      trending: true
    },
    {
      slug: 'linguistic-cipher',
      title: { en: 'Linguistic Cipher', cn: '无声控制台' },
      subtitle: { en: 'The Silent Console', cn: '终端解谜' },
      category: 'Puzzle',
      rating: 4.5,
      plays: '540K',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Keyboard', cn: '键盘' },
      difficulty: { en: 'Hard', cn: '困难' },
      description: {
        en: 'Decipher a terminal that refuses to speak your language. Decode unknown glyphs, infer grammar, and translate the silent console\'s warnings.',
        cn: '破译一台拒绝说你语言的终端。解读未知符号、推断语法，翻译无声控制台的警示。'
      },
      howToPlay: {
        en: ['Type commands at the prompt', 'Observe the console\'s responses', 'Cross-reference glyphs to deduce meaning', 'Translate the final message to escape'],
        cn: ['在命令行输入指令', '观察终端反馈', '交叉比对符号推断含义', '翻译最终信息以脱困']
      },
      featured: false,
      trending: false
    },
    {
      slug: 'spectral-portal',
      title: { en: 'Spectral Portal', cn: '换光谱' },
      subtitle: { en: 'Switch Spectrum', cn: '光谱切换' },
      category: 'Puzzle',
      rating: 4.4,
      plays: '480K',
      duration: { en: '2-5 min', cn: '2-5 分钟' },
      controls: { en: 'Mouse + Keyboard', cn: '鼠标 + 键盘' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'Shift between color spectra to reveal hidden platforms and hazards. Each light band exposes a different layer of the same world.',
        cn: '在不同光谱间切换，显露隐藏的平台与陷阱。每一道光带揭示同一世界的不同层面。'
      },
      howToPlay: {
        en: ['Switch spectra with number keys', 'Each spectrum reveals different elements', 'Plan routes across light bands', 'Reach the portal in the right spectrum'],
        cn: ['数字键切换光谱', '不同光谱显露不同元素', '跨光带规划路线', '以正确光谱抵达传送门']
      },
      featured: false,
      trending: false
    },
    {
      slug: 'paradox-editor',
      title: { en: 'Paradox Editor', cn: 'IF/THEN' },
      subtitle: { en: 'Logic Hacker', cn: '逻辑编辑器' },
      category: 'Puzzle',
      rating: 4.7,
      plays: '610K',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Keyboard', cn: '键盘' },
      difficulty: { en: 'Hard', cn: '困难' },
      description: {
        en: 'Rewrite reality by editing IF/THEN rules in a retro hacker terminal. Bend causality, exploit paradoxes, and escape the logic loop.',
        cn: '在复古黑客终端中改写 IF/THEN 规则来重塑现实。扭曲因果、利用悖论，逃离逻辑死循环。'
      },
      howToPlay: {
        en: ['Type IF/THEN statements to change rules', 'Watch how the simulation reacts', 'Stack paradoxes to break constraints', 'Find the exit condition the system forgot'],
        cn: ['输入 IF/THEN 语句改变规则', '观察模拟器的反应', '叠加悖论突破约束', '找到系统遗漏的出口条件']
      },
      featured: false,
      trending: false
    },
    {
      slug: 'orbitron-beat',
      title: { en: 'Orbitron Beat', cn: '转圈踩点' },
      subtitle: { en: 'Loop Beat', cn: '轨道节奏' },
      category: 'Arcade',
      rating: 4.6,
      plays: '980K',
      duration: { en: '2-5 min', cn: '2-5 分钟' },
      controls: { en: 'Keyboard', cn: '键盘' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'A circular rhythm game where notes orbit the center. Time your hits as the beat loops around, and chain combos across evolving BPM.',
        cn: '音符围绕中心旋转的圆形节奏游戏。在节拍循环时精准击打，随 BPM 变化串联连击。'
      },
      howToPlay: {
        en: ['Press keys as notes cross the hit zone', 'Stay on beat to build combos', 'Adapt as BPM shifts mid-song', 'Miss breaks your combo streak'],
        cn: ['音符进入击打区时按键', '踩准节拍积累连击', '适应歌曲中的 BPM 变化', '失误会中断连击']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'resonance-deflector',
      title: { en: 'Resonance Deflector', cn: '共振反弹' },
      subtitle: { en: 'Beat Bounce', cn: '音波反弹' },
      category: 'Arcade',
      rating: 4.3,
      plays: '420K',
      duration: { en: '2-5 min', cn: '2-5 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Easy', cn: '简单' },
      description: {
        en: 'Deflect a resonant pulse to the beat. Angle your paddle to bounce sound waves through rhythmic obstacles and hit every note.',
        cn: '随节拍偏转共振脉冲。调整挡板角度，让声波穿越节奏障碍，击中每一个音符。'
      },
      howToPlay: {
        en: ['Move the paddle with the mouse', 'Bounce the pulse into notes', 'Hit on-beat for bonus points', 'Don\'t let the pulse escape'],
        cn: ['鼠标移动挡板', '将脉冲反弹至音符', '踩拍命中获得奖励', '别让脉冲飞出']
      },
      featured: false,
      trending: false
    },
    {
      slug: 'swing-tempo',
      title: { en: 'Swing Tempo', cn: '钩与拍' },
      subtitle: { en: 'Hookbeat', cn: '钩爪节奏' },
      category: 'Arcade',
      rating: 4.5,
      plays: '560K',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'Swing on a rhythmic grappling hook. Release and hook to the beat to traverse pulsing levels without breaking your tempo.',
        cn: '踩着节拍甩动钩爪。在律动关卡中按节奏松钩、挂钩，全程不掉拍地穿越关卡。'
      },
      howToPlay: {
        en: ['Click to fire the grappling hook', 'Release on the beat to swing', 'Time releases to maintain momentum', 'Reach the end without losing rhythm'],
        cn: ['点击射出钩爪', '踩拍松钩摆荡', '把握时机保持动量', '不掉拍抵达终点']
      },
      featured: false,
      trending: true
    },
    {
      slug: 'pawn-protocol',
      title: { en: 'Pawn Protocol', cn: '借尸协议' },
      subtitle: { en: 'Rogue-lite Action', cn: '肉鸽动作' },
      category: 'Action',
      rating: 4.7,
      plays: '1.3M',
      duration: { en: '10-15 min', cn: '10-15 分钟' },
      controls: { en: 'Keyboard + Mouse', cn: '键盘 + 鼠标' },
      difficulty: { en: 'Hard', cn: '困难' },
      description: {
        en: 'A top-down rogue-lite where you hijack enemy bodies on death. Each host brings new abilities, turning every run into a fresh build.',
        cn: '俯视角肉鸽动作游戏，死亡后夺取敌尸续命。每个宿主带来不同能力，每局都是全新构筑。'
      },
      howToPlay: {
        en: ['WASD to move, mouse to attack', 'On death, possess a nearby enemy', 'Each host has unique skills', 'Stack upgrades across runs'],
        cn: ['WASD 移动，鼠标攻击', '死亡时附身附近敌人', '每个宿主拥有独特技能', '跨局叠加升级']
      },
      featured: true,
      trending: true
    },
    {
      slug: 'alchemical-leak',
      title: { en: 'Alchemical Leak', cn: '罐区失守' },
      subtitle: { en: 'Breach Response', cn: '化学灾控' },
      category: 'Strategy',
      rating: 4.4,
      plays: '390K',
      duration: { en: '5-10 min', cn: '5-10 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'A vintage instrument-panel crisis sim. Contain leaking chemical tanks, isolate valves, and prevent a chain reaction across the tank farm.',
        cn: '复古仪表盘风格的灾控模拟。封堵泄漏化学品储罐、隔离阀门，阻止罐区发生连锁反应。'
      },
      howToPlay: {
        en: ['Click valves to open or close them', 'Isolate leaking tanks first', 'Watch pressure gauges', 'Prevent the chain reaction'],
        cn: ['点击阀门开闭', '优先隔离泄漏储罐', '注意压力表读数', '阻止连锁反应发生']
      },
      featured: false,
      trending: false
    },
    {
      slug: 'bytebreak',
      title: { en: 'Bytebreak', cn: '色彩密码' },
      subtitle: { en: 'Daily Color Code', cn: '每日解谜' },
      category: 'Puzzle',
      rating: 4.8,
      plays: '0',
      duration: { en: '3-5 min', cn: '3-5 分钟' },
      controls: { en: 'Mouse / Keyboard', cn: '鼠标 / 键盘' },
      difficulty: { en: 'Easy→Hard', cn: '由易到难' },
      description: {
        en: 'A daily color code puzzle. Crack the secret sequence of colors in 6 tries. Everyone gets the same code each day — compete with friends and keep your streak alive.',
        cn: '每日颜色密码解谜。在 6 次内破解颜色密码序列。每天所有玩家面对同一密码 — 与朋友竞技，保持连续天数。'
      },
      howToPlay: {
        en: ['Click colors to fill the slots', 'Green = right color, right spot', 'Yellow = right color, wrong spot', 'Gray = color not in code', 'Come back daily for a new puzzle!'],
        cn: ['点击颜色填入空格', '绿色 = 正确颜色正确位置', '黄色 = 正确颜色错误位置', '灰色 = 该颜色不在密码中', '每天回来挑战新题目！']
      },
      featured: true,
      trending: true,
      isDaily: true
    }
  ];

  // Pre-compute gradient covers
  GAMES.forEach(function (g) {
    g.gradient = CATEGORY_GRADIENTS[g.category] || ['#FF5C28', '#B8350A'];
  });

  // ---- Public API ----
  var DATA = {
    all: GAMES,
    bySlug: function (slug) {
      for (var i = 0; i < GAMES.length; i++) {
        if (GAMES[i].slug === slug) return GAMES[i];
      }
      return null;
    },
    featured: GAMES.filter(function (g) { return g.featured; }),
    trending: GAMES.filter(function (g) { return g.trending; }),
    categories: ['All', 'Action', 'Puzzle', 'Arcade', 'Strategy', 'Adventure'],
    categoryGradients: CATEGORY_GRADIENTS,
    // Render a cover block with real image (gradient fallback)
    coverHtml: function (g) {
      var t = (g.title && g.title.en) ? g.title.en : g.slug;
      var sub = (g.subtitle && g.subtitle.en) ? g.subtitle.en : '';
      return ''
        + '<div class="game-cover" style="background: linear-gradient(135deg, ' + g.gradient[0] + ' 0%, ' + g.gradient[1] + ' 100%);">'
        +   '<img src="../assets/covers/' + g.slug + '.jpg" alt="' + t + ' cover art" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.style.display=&quot;none&quot;;this.nextElementSibling.style.display=&quot;flex&quot;">'
        +   '<div class="game-cover-inner" style="display:none;">'
        +     '<span class="game-cover-title">' + t + '</span>'
        +     (sub ? '<span class="game-cover-sub">' + sub + '</span>' : '')
        +   '</div>'
        + '</div>';
    },
    // Render star rating HTML
    starsHtml: function (rating) {
      var html = '';
      var full = Math.round(rating);
      for (var i = 0; i < 5; i++) {
        html += '<i data-lucide="star" class="' + (i < full ? 'rating-star-filled' : 'rating-star-empty') + '" style="width:14px;height:14px;"></i>';
      }
      return html;
    }
  };

  global.PLAYSUNBLOCKED_GAMES = DATA;
})(window);
