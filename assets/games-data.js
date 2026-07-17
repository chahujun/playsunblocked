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
    'Adventure': ['#A060A0', '#4A2448'],
    'Board':     ['#B18A45', '#743C38']
  };

  var GAMES = [
    {
      slug: 'alchemic-pegs',
      title: { en: 'Alchemic Pegs', cn: '魔法守卫战' },
      subtitle: { en: 'Elemental Mage Defense', cn: '元素法师' },
      category: 'Strategy',
      rating: 0,
      plays: null,
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
      rating: 0,
      plays: null,
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
      rating: 0,
      plays: null,
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
      featured: true,
      trending: true
    },
    {
      slug: 'zombie-crisis',
      title: { en: 'Zombie Crisis', cn: '僵尸危机' },
      subtitle: { en: 'Outbreak Survival', cn: '末日突围' },
      category: 'Action',
      rating: 0,
      plays: null,
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
      rating: 0,
      plays: null,
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
      featured: true,
      trending: false
    },
    {
      slug: 'zen-ink',
      title: { en: 'Zen Ink', cn: '半卷山水' },
      subtitle: { en: 'Half a Scroll', cn: '水墨放置' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
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
      rating: 0,
      plays: null,
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
      featured: true,
      trending: true
    },
    {
      slug: 'linguistic-cipher',
      title: { en: 'Linguistic Cipher', cn: '无声控制台' },
      subtitle: { en: 'The Silent Console', cn: '终端解谜' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
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
      featured: true,
      trending: false
    },
    {
      slug: 'spectral-portal',
      title: { en: 'Spectral Portal', cn: '换光谱' },
      subtitle: { en: 'Switch Spectrum', cn: '光谱切换' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
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
      featured: true,
      trending: false
    },
    {
      slug: 'paradox-editor',
      title: { en: 'Paradox Editor', cn: 'IF/THEN' },
      subtitle: { en: 'Logic Hacker', cn: '逻辑编辑器' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
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
      featured: true,
      trending: false
    },
    {
      slug: 'orbitron-beat',
      title: { en: 'Orbitron Beat', cn: '转圈踩点' },
      subtitle: { en: 'Loop Beat', cn: '轨道节奏' },
      category: 'Arcade',
      rating: 0,
      plays: null,
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
      rating: 0,
      plays: null,
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
      featured: true,
      trending: false
    },
    {
      slug: 'swing-tempo',
      title: { en: 'Swing Tempo', cn: '钩与拍' },
      subtitle: { en: 'Hookbeat', cn: '钩爪节奏' },
      category: 'Arcade',
      rating: 0,
      plays: null,
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
      featured: true,
      trending: true
    },
    {
      slug: 'pawn-protocol',
      title: { en: 'Pawn Protocol', cn: '借尸协议' },
      subtitle: { en: 'Rogue-lite Action', cn: '肉鸽动作' },
      category: 'Action',
      rating: 0,
      plays: null,
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
      rating: 0,
      plays: null,
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
      featured: true,
      trending: false
    },
    {
      slug: 'bytebreak',
      title: { en: 'Bytebreak', cn: '色彩密码' },
      subtitle: { en: 'Daily Color Code', cn: '每日解谜' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
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
    },
    {
      slug: 'crownfall',
      title: { en: 'Crownfall: The Broken Realm', cn: '王冠陨落：破碎王国' },
      subtitle: { en: 'Tactical RPG Adventure', cn: '战棋 RPG 冒险' },
      category: 'Adventure',
      rating: 0,
      plays: null,
      duration: { en: '10-20 min', cn: '10-20 分钟' },
      controls: { en: 'Mouse + Keyboard', cn: '鼠标 + 键盘' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'Lead a party of 3 heroes through a cursed kingdom in this turn-based tactical RPG. Roll dice, explore a branching map, fight grid battles, and defeat the Crownless Regent to restore the broken realm.',
        cn: '带领三名英雄穿越被诅咒的王国。回合制战棋 RPG，投掷骰子、探索分支地图、进行网格战斗，击败无冠摄政王修复破碎王国。'
      },
      howToPlay: {
        en: ['Choose 3 heroes from 6 unique classes', 'Navigate a branching map of battles and events', 'Each hero has 2 Action Points per turn', 'Roll d6 dice for ranged attacks and events', 'Use Luck points to reroll failed dice', 'Defeat the 3-phase boss to win'],
        cn: ['从 6 个职业中选择 3 名英雄', '在分支地图上探索战斗和事件', '每名英雄每回合有 2 点行动力', '远程攻击和事件需投掷六面骰', '使用幸运点重新投掷失败骰子', '击败三阶段 Boss 获胜']
      },
      featured: true,
      trending: true
    },
    {
      slug: 'game-2048',
      title: { en: '2048', cn: '2048' },
      subtitle: { en: 'Number Merge Puzzle', cn: '数字合并' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
      duration: { en: '2-10 min', cn: '2-10 分钟' },
      controls: { en: 'Arrow Keys / Swipe', cn: '方向键 / 滑动' },
      difficulty: { en: 'Easy→Hard', cn: '由易到难' },
      description: {
        en: 'The classic 2048 puzzle. Combine matching number tiles by sliding them in four directions. Reach the 2048 tile to win, then keep going for higher scores.',
        cn: '经典 2048 数字谜题。向四个方向滑动合并相同数字，达成 2048 方块获胜，之后继续挑战更高分数。'
      },
      howToPlay: {
        en: ['Use arrow keys or swipe to move all tiles', 'Two tiles with the same number merge into one', 'Each move spawns a new 2 or 4 tile', 'Reach the 2048 tile to win'],
        cn: ['方向键或滑动移动所有方块', '两个相同数字方块合并为一个', '每次移动生成新的 2 或 4', '达成 2048 方块获胜']
      },
      featured: true,
      trending: true
    },
    {
      slug: 'snake',
      title: { en: 'Snake', cn: '贪吃蛇' },
      subtitle: { en: 'Classic Arcade', cn: '经典街机' },
      category: 'Arcade',
      rating: 0,
      plays: null,
      duration: { en: '1-5 min', cn: '1-5 分钟' },
      controls: { en: 'Arrow Keys / WASD / Swipe', cn: '方向键 / WASD / 滑动' },
      difficulty: { en: 'Easy→Hard', cn: '由易到难' },
      description: {
        en: 'The timeless Snake arcade game. Guide the snake to eat food and grow longer. Avoid hitting walls or your own tail. Speed increases as you score.',
        cn: '永恒经典的贪吃蛇街机游戏。引导蛇吃食物变长，避开墙壁和自己的尾巴。分数越高速度越快。'
      },
      howToPlay: {
        en: ['Use arrow keys, WASD, or swipe to steer', 'Eat food to grow and score points', 'Avoid walls and your own tail', 'Speed increases as you grow'],
        cn: ['方向键、WASD 或滑动控制方向', '吃食物变长并得分', '避免撞墙和自己的尾巴', '越长速度越快']
      },
      featured: true,
      trending: true
    },
    {
      slug: 'minesweeper',
      title: { en: 'Minesweeper', cn: '扫雷' },
      subtitle: { en: 'Logic Puzzle', cn: '逻辑推理' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
      duration: { en: '3-15 min', cn: '3-15 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: '3 Levels', cn: '三种难度' },
      description: {
        en: 'The classic Minesweeper puzzle. Reveal squares, read the numbers, and flag hidden mines. Choose from Beginner, Intermediate, and Expert difficulties.',
        cn: '经典扫雷推理游戏。翻开方块，根据数字提示标记隐藏的地雷。可选初级、中级、专家三种难度。'
      },
      howToPlay: {
        en: ['Left-click to reveal a square', 'Right-click or long-press to flag a mine', 'Numbers show how many mines are adjacent', 'First click is always safe'],
        cn: ['左键翻开方块', '右键或长按标记地雷', '数字显示周围地雷数量', '首次点击保证安全']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'gomoku',
      title: { en: 'Gomoku', cn: '五子棋' },
      subtitle: { en: 'Five in a Row', cn: '连五子' },
      category: 'Board',
      rating: 0,
      plays: null,
      duration: { en: '3-15 min', cn: '3-15 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'Classic Gomoku (Five in a Row) on a 15×15 board. Play against a friend locally or challenge the AI. Connect five stones horizontally, vertically, or diagonally to win.',
        cn: '经典五子棋，15×15 棋盘。本地双人对战或挑战 AI。横、竖、斜任意方向连成五子即胜。'
      },
      howToPlay: {
        en: ['Click to place your stone on the board', 'Black goes first, then players alternate', 'Connect 5 stones in a row to win', 'Use undo to take back your last move'],
        cn: ['点击棋盘落子', '黑方先行，双方轮流', '任意方向连成五子获胜', '可悔棋撤回上一步']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'sokoban',
      title: { en: 'Sokoban', cn: '推箱子' },
      subtitle: { en: 'Box Pushing Puzzle', cn: '推箱子解谜' },
      category: 'Puzzle',
      rating: 0,
      plays: null,
      duration: { en: '5-30 min', cn: '5-30 分钟' },
      controls: { en: 'Arrow Keys / WASD / Swipe', cn: '方向键 / WASD / 滑动' },
      difficulty: { en: 'Easy→Hard', cn: '由易到难' },
      description: {
        en: 'Classic Sokoban puzzle game. Push every box onto its target spot. Boxes can only be pushed, never pulled. 25 handcrafted levels from easy to challenging.',
        cn: '经典推箱子解谜游戏。将所有箱子推到目标位置。箱子只能推不能拉。25 个手工设计关卡，由易到难。'
      },
      howToPlay: {
        en: ['Use arrow keys or WASD to move', 'Push boxes by walking into them', 'Boxes can only be pushed, not pulled', 'Get every box onto a target spot'],
        cn: ['方向键或 WASD 移动', '走向箱子即可推动', '箱子只能推不能拉', '将所有箱子推到目标点']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'ludo',
      title: { en: 'Ludo', cn: '飞行棋' },
      subtitle: { en: 'Classic Board Game', cn: '经典棋盘' },
      category: 'Board',
      rating: 0,
      plays: null,
      duration: { en: '10-30 min', cn: '10-30 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Easy', cn: '简单' },
      description: {
        en: 'The classic Ludo board game for 2-4 players. Roll the dice, move your tokens around the board, capture opponents, and be the first to bring all tokens home.',
        cn: '经典飞行棋，支持 2-4 人对战。掷骰子、移动棋子、吃掉对手，率先将所有棋子送达终点者获胜。'
      },
      howToPlay: {
        en: ['Click to roll the dice', 'Roll a 6 to move a token onto the board', 'Land on an opponent to send them home', 'Get all 4 tokens to the center to win'],
        cn: ['点击掷骰子', '掷出 6 才能将棋子送上棋盘', '踩到对手棋子将其送回起点', '4 颗棋子全部到达中心获胜']
      },
      featured: true,
      trending: false
    },
    {
      slug: 'pixel-guardians',
      title: { en: 'Pixel Guardians', cn: '像素守护者' },
      subtitle: { en: 'Pixel Art Tower Defense', cn: '像素塔防' },
      category: 'Strategy',
      rating: 0,
      plays: null,
      duration: { en: '15-40 min', cn: '15-40 分钟' },
      controls: { en: 'Mouse', cn: '鼠标' },
      difficulty: { en: 'Medium', cn: '中等' },
      description: {
        en: 'A pixel-art classic path tower defense. Build 6 unique towers — Archer, Cannon, Frost, Lightning, Poison, and Guardian — to repel 7 enemy types across 3 difficulties. Each run grants 3 random buffs for endless replayability.',
        cn: '像素风经典路线塔防。建造 6 种特色防御塔——弓箭、加农炮、冰霜、闪电、剧毒、守护——抵御 7 种敌人。每局随机 3 项强化，3 种难度，高重开率设计。'
      },
      howToPlay: {
        en: ['Click build spots to place towers', 'Each tower type has unique strengths — read the tooltips', 'Earn coins by defeating enemies', 'Click a placed tower to upgrade or sell it', 'Survive all waves to win — protect your base!'],
        cn: ['点击建造点放置防御塔', '每种塔有独特优势——查看说明', '击败敌人获得金币', '点击已放置的塔可升级或出售', '守住基地，撑过所有波次即获胜']
      },
      featured: true,
      trending: true
    }
  ];

  // Pre-compute gradient covers and numeric fields for sorting
  function parsePlays(s) {
    if (!s || s === '0') return 0;
    var n = parseFloat(s);
    if (s.indexOf('M') !== -1) return Math.round(n * 1000000);
    if (s.indexOf('K') !== -1) return Math.round(n * 1000);
    return Math.round(n);
  }
  // Mark recent games as New — use slug-based check for stability
  var NEW_GAME_SLUGS = ['crownfall', 'bytebreak', 'pixel-guardians'];
  GAMES.forEach(function (g, i) {
    g.gradient = CATEGORY_GRADIENTS[g.category] || ['#FF5C28', '#B8350A'];
    g.playsNum = parsePlays(g.plays);
    g.addedOrder = i; // higher = newer
    if (g.isNew === undefined) g.isNew = NEW_GAME_SLUGS.indexOf(g.slug) !== -1;
    if (g.multiplayer === undefined) g.multiplayer = false;
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
    featured: GAMES.filter(function (g) { return g.featured; }).sort(function (a, b) { return b.addedOrder - a.addedOrder; }),
    trending: GAMES.filter(function (g) { return g.trending; }).sort(function (a, b) { return b.addedOrder - a.addedOrder; }),
    categories: ['All', 'Action', 'Puzzle', 'Arcade', 'Strategy', 'Adventure', 'Board'],
    categoryGradients: CATEGORY_GRADIENTS,
    // Escape HTML special characters to prevent XSS when interpolating into innerHTML
    escapeHtml: function (s) {
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },
    // Render a cover block with real image (gradient fallback)
    coverHtml: function (g) {
      var esc = this.escapeHtml;
      var t = (g.title && g.title.en) ? esc(g.title.en) : esc(g.slug);
      var sub = (g.subtitle && g.subtitle.en) ? esc(g.subtitle.en) : '';
      return ''
        + '<div class="game-cover" style="background: linear-gradient(135deg, ' + g.gradient[0] + ' 0%, ' + g.gradient[1] + ' 100%);">'
        +   '<img src="../assets/covers/' + esc(g.slug) + '.jpg" alt="' + t + ' cover art" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.style.display=&quot;none&quot;;this.nextElementSibling.style.display=&quot;flex&quot;">'
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
