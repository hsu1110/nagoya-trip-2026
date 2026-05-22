// ==========================================
// 名古屋自由行 2026：吉卜力公園互動導覽資料庫 (ghibli_db.js)
// ==========================================

// 1. 吉卜力公園主地標資料 (座標以 1000x850 SVG 為基準)
window.ghibliLandmarks = {
  'north-gate': {
    name: '公園北口',
    short: '北',
    cx: 580,
    cy: 165,
    r: 18,
    glowR: 24,
    color: '#0f766e',
    textOffset: { x: 0, y: -25 }
  },
  'elevator-tower': {
    name: '電梯塔',
    short: '塔',
    cx: 570,
    cy: 290,
    r: 12,
    glowR: 20,
    color: '#707f94', // 灰色
    textOffset: { x: -50, y: 4 }
  },
  'youth-hill': {
    name: '青春之丘',
    short: '丘',
    cx: 607,
    cy: 289,
    r: 20,
    glowR: 28,
    color: '#0ea5e9', // 天藍色
    textOffset: { x: 55, y: 5 }
  },
  'ghibli-warehouse': {
    name: '吉卜力大倉庫',
    short: '倉',
    cx: 611,
    cy: 389,
    r: 20,
    glowR: 32,
    color: '#f97316', // 橘色
    textOffset: { x: 0, y: 43 }
  },
  'valley-mononoke': {
    name: '魔法之里',
    short: '里',
    cx: 807,
    cy: 244,
    r: 20,
    glowR: 28,
    color: '#8b5cf6',
    textOffset: { x: 55, y: 5 }
  },
  'valley-witches': {
    name: '魔女之谷',
    short: '谷',
    cx: 771,
    cy: 370,
    r: 20,
    glowR: 30,
    color: '#ec4899', // 粉紅色
    textOffset: { x: 0, y: -35 }
  },
  'catbus-station': {
    name: '貓巴士乘車點',
    short: '🐾🚌',
    cx: 760,
    cy: 290,
    isRect: true,
    width: 30,
    height: 20,
    glowR: 24,
    color: '#d97706',
    textOffset: { x: -62, y: 3 }
  },
  'dondoko-forest': {
    name: '動動力森林',
    short: '①',
    cx: 777,
    cy: 564,
    r: 20,
    glowR: 30,
    color: '#84cc16',
    textOffset: { x: 0, y: 37 }
  }
};

// 2. 交通路網與連線資料
window.ghibliRoutes = {
  // 🚶 徒步走路組
  walk: [
    { from: 'north-gate', to: 'elevator-tower', text: '🚶5m', textOffset: { x: 7.5, y: -2.5 } },
    { from: 'elevator-tower', to: 'youth-hill', text: '🚶3m', textOffset: { x: -14.5, y: -12 } },
    { from: 'elevator-tower', to: 'ghibli-warehouse', text: '🚶3m', textOffset: { x: -25, y: 2.5 } },
    { from: 'youth-hill', to: 'ghibli-warehouse', text: '🚶4m', textOffset: { x: 9.5, y: 7.5 } },
    { from: 'youth-hill', to: 'valley-witches', text: '🚶5m', textOffset: { x: -0.5, y: -12.5 } },
    { from: 'youth-hill', to: 'valley-mononoke', text: '🚶8m', textOffset: { x: -5, y: -17.5 } },
    { from: 'ghibli-warehouse', to: 'valley-witches', text: '🚶3m', textOffset: { x: 0, y: 15 } },
    { from: 'valley-mononoke', to: 'valley-witches', text: '🚶6m', textOffset: { x: 12.5, y: 0 } },
    { 
      from: 'ghibli-warehouse', 
      to: 'dondoko-forest', 
      text: '🚶20m', 
      isQuad: true, 
      controlOffset: { x: -47.5, y: -78 }, // 貝茲曲線控制點相對於兩點中點的位移
      textOffset: { x: 35, y: 63 }, // 文字相對於控制點的位移
      hasSpot: {
        text: '⛩️ 稻樓門/神隱少女雕像',
        textOffset: { x: 10, y: -10 } // 雕像名稱相對於控制點的位移
      }
    }
  ],
  // 🚌 免費接駁公車 (E東路線)
  bus: [
    { from: 'north-gate', to: 'valley-mononoke', text: '🚌3m', isQuad: true, controlOffset: { x: 20, y: -65 }, textOffset: { x: -20, y: 35 } },
    { from: 'valley-witches', to: 'ghibli-warehouse', text: '🚌2m', isQuad: true, controlOffset: { x: 0, y: 30 }, textOffset: { x: 0, y: 5 } },
    { from: 'valley-witches', to: 'valley-mononoke', text: '🚌2m', textOffset: { x: -24.5, y: -5 } },
    { from: 'ghibli-warehouse', to: 'dondoko-forest', text: '🚌10m', isQuad: true, controlOffset: { x: -172.5, y: 0 }, textOffset: { x: 40, y: 10 } }
  ],
  // 🐾 貓巴士
  catbus: [
    { from: 'catbus-station', to: 'dondoko-forest', text: '🐾 10m (貓巴士)', isQuad: true, controlOffset: { x: 60, y: -20 }, textOffset: { x: -65, y: 20 } }
  ]
};

// 3. 各個主題園區詳細景點資料
window.ghibliZoneData = {
  'north-gate': {
    title: '公園北口 (愛・地球博記念公園駅)',
    badge: '公園主起點',
    badgeColor: 'bg-teal-700',
    transport: '🚇 Linimo 磁浮線抵達站點 / 免費巴士 E1 站點',
    spots: [
      { name: 'Linimo 車站出口', desc: '由此出站即是公園北口的大廣場區域。' },
      { name: '免費公車首發站 (E1)', desc: '可在這裡直接上車，搭乘免費的「E東路線」前往各主題園區。' },
      { name: '公園北口諮詢服務處', desc: '提供地圖導覽資訊與行李寄存服務（需自費）。' }
    ],
    navs: [
      '🚶 步行至 <strong>電梯塔</strong>：約 <strong>5 分鐘</strong>',
      '🚌 免費公車至 <strong>魔法之里附近</strong>：約 <strong>3 分鐘</strong>'
    ]
  },
  'elevator-tower': {
    title: '電梯塔 (エレベーター塔)',
    badge: '園區免費地標',
    badgeColor: 'bg-slate-500', // 灰色 Badge
    transport: '🚶 步行重要交叉樞紐',
    spots: [
      { name: '19世紀空想科學電梯塔', desc: '融合《天空之城》與《霍爾的移動城堡》科幻美學的塔形建築（免費參觀）。' },
      { name: '高低差通道', desc: '可搭乘電梯直達下方平原，步行直達吉卜力大倉庫，為重要步行樞紐。' }
    ],
    navs: [
      '🚶 步行至 <strong>青春之丘</strong>：約 <strong>3 分鐘</strong>',
      '🚶 步行至 <strong>吉卜力大倉庫</strong>：約 <strong>3 分鐘</strong>'
    ]
  },
  'youth-hill': {
    title: '⑤ 青春之丘 (青春の丘)',
    badge: '主題園區 ⑤',
    badgeColor: 'bg-sky-500', // 天藍色 Badge
    transport: '🚶 靠近電梯塔 / E1 公車站',
    spots: [
      { name: '地球屋', desc: '《心之谷》劇中那棟古董玩具與小提琴工藝工房，內部細節如劇中精細。' },
      { name: '貓的事務所', desc: '《貓的報恩》中縮小版的貓男爵辦公室，可以從小窗戶窺探裡面的精緻家具。' }
    ],
    navs: [
      '🚶 步行至 <strong>吉卜力大倉庫</strong>：約 <strong>4 分鐘</strong>',
      '🚶 步行至 <strong>魔女之谷</strong>：約 <strong>5 分鐘</strong>',
      '🚶 步行至 <strong>魔法之里</strong>：約 <strong>8 分鐘</strong>'
    ]
  },
  'ghibli-warehouse': {
    title: '④ 吉卜力大倉庫 (ジブリの大倉庫)',
    badge: '主題園區 ④',
    badgeColor: 'bg-orange-500', // 橘色 Badge
    transport: '🚌 免費公車 E4 站點旁 / 核心主力大館',
    spots: [
      { name: '經典作品名場面展', desc: '超人氣拍照點！可以與無臉男同坐電車、在《紅豬》海灘對決等。' },
      { name: '天空之城機器兵', desc: '在廢墟庭園中靜靜站立的巨大機器人，全身覆蓋青苔與蔓藤。' },
      { name: '湯婆婆館長辦公室', desc: '還原《神隱少女》中湯婆婆在滿桌契約書中狂怒的生動蠟像。' },
      { name: '獵戶座影像放映室', desc: '播映吉卜力工作室專屬、只在此放映的精緻短篇動畫。' },
      { name: '借物少女艾莉緹的秘密世界', desc: '放大版的世界！遊客如同變身小人族，在巨大蒲公英與草葉間探索。' },
      { name: '貓巴士房間', desc: '專屬兒童的柔軟觸感大貓巴士。' }
    ],
    navs: [
      '🚶 步行至 <strong>魔女之谷</strong>：約 <strong>3 分鐘</strong> (專屬快捷通道)',
      '🚶 步行至 <strong>動動力森林</strong>：約 <strong>20 分鐘</strong> (漫步下山，途中經過稻樓門古蹟與隧道)',
      '🚌 免費公車至 <strong>動動力森林</strong>：約 <strong>10 分鐘</strong> (極力推薦回程搭乘公車省體力！)'
    ]
  },
  'valley-mononoke': {
    title: '③ 魔法之里 (もののけの里)',
    badge: '主題園區 ③',
    badgeColor: 'bg-violet-500',
    transport: '🚌 免費公車 E2 站點旁',
    spots: [
      { name: '乙事主與邪魔神巨型滑梯', desc: '《魔法公主》劇中巨型山豬神「乙事主」與「邪魔神」外觀木造滑梯（滑梯限國小以下遊玩）。' },
      { name: '達達拉城 (體驗學習館)', desc: '還原劇中草庵外觀，可以在裡面自費體驗動手烤當地傳統美食「五平餅」。' }
    ],
    navs: [
      '🚶 步行至 <strong>魔女之谷</strong>：約 <strong>6 分鐘</strong>',
      '🚌 免費公車至 <strong>魔女之谷</strong>：約 <strong>2 分鐘</strong>'
    ]
  },
  'valley-witches': {
    title: '② 魔女之谷 (魔女の谷)',
    badge: '主題園區 ②',
    badgeColor: 'bg-pink-500', // 粉紅色 Badge
    transport: '🚌 免費公車 E3 站點旁 / 最大型戶外園區',
    spots: [
      { name: '霍爾的移動城堡', desc: '高達 20 米的巍峨蒸汽城堡！煙囪定時會噴煙，能參觀霍爾髒亂精美的房間。' },
      { name: '旋轉木馬與飛行飛行具', desc: '點綴了多部吉卜力作品角色編排的歐風古典旋轉木馬。' },
      { name: '琪琪老家：歐其諾之家', desc: '《魔女宅急便》女主角琪琪出發前的綠意盎然老家與媽媽的研究室。' },
      { name: '蘇菲帽子店', desc: '《霍爾的移動城堡》中蘇菲設計帽子的裁縫店，並附設精美後庭院。' },
      { name: '熱風麵包店 (Goki-Pori)', desc: '完美還原劇中琪琪工作的麵包店，提供美味現烤麵包可現場購買！' }
    ],
    navs: [
      '🚶 步行至 <strong>吉卜力大倉庫</strong>：約 <strong>3 分鐘</strong>',
      '🚶 步行至 <strong>魔法之里</strong>：約 <strong>6 分鐘</strong>',
      '🚌 免費公車至 <strong>吉卜力大倉庫</strong>：約 <strong>2 分鐘</strong>',
      '🚌 免費公車至 <strong>魔法之里</strong>：約 <strong>2 分鐘</strong>'
    ]
  },
  'catbus-station': {
    title: '🐾 APM 貓巴士乘車點',
    badge: '特色付費交通',
    badgeColor: 'bg-amber-600',
    transport: '📍 位於「魔女之谷」與「魔法之里」正中間位置的招呼亭',
    spots: [
      { name: '貓巴士 APM 線候車處', desc: '位於魔女之谷與魔法之里的中間，地理位置便利。' },
      { name: '低速電動 APM 貓巴士', desc: '仿造龍貓多足貓巴士，擁有發光雙眼與極致柔軟觸感的座墊，可容納多位乘客。' }
    ],
    navs: [
      '🐾 搭乘 <strong>貓巴士</strong> 至 <strong>動動力森林</strong>：單程約 <strong>10 分鐘</strong> (本交通需另外在自動售票機購票)'
    ]
  },
  'dondoko-forest': {
    title: '① 動動力森林 (どんどこ森)',
    badge: '主題園區 ①',
    badgeColor: 'bg-lime-500',
    transport: '🚌 免費公車 E7 終點站 / 南端森林頂',
    spots: [
      { name: '小梅與小月的家', desc: '《龍貓》中完美重現的昭和木造民家，廚房炊具、水箱與爸爸的書房皆可親手開啟探索！' },
      { name: '動動力堂 (山頂巨型大龍貓)', desc: '山頂高達 5 米的木造大龍貓，可讓小朋友鑽進去探索。' }
    ],
    navs: [
      '🚶 步行至 <strong>吉卜力大倉庫</strong>：約 <strong>20 分鐘</strong> (下山漫步，中途經神隱少女雕像隧道)',
      '🚌 免費公車回 <strong>吉卜力大倉庫附近</strong>：約 <strong>10 分鐘</strong> (極佳的省力下山方案！)'
    ]
  }
};

// 4. 吉卜力大倉庫 0~8號 黃金遊覽步驟數據庫
window.ghibliWarehouseSteps = {
  '0': {
    title: '驗票入口進場',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 120, cy: 250, r: 18,
    desc: '探險之旅的完美起點！在此接受驗票並持特製電影底片票卡入館。',
    tip: '進館時拿到的特製底片膠捲票卡，是用來觀看【2】特別企劃展與電影的憑證，具有精緻的底片細節，非常適合作為書籤或紀念品收藏！'
  },
  '1': {
    title: '動畫人物名場面展',
    level: '1F/B1 混合',
    levelClass: 'bg-gradient-to-r from-green-100 to-yellow-100 text-slate-800 border-orange-200',
    cx: 430, cy: 370, r: 20,
    desc: '大倉庫人氣最高的經典展區！名場面本館位於一樓（綠框），側邊入口及部分排隊通道延伸至地下一樓（黃框）。',
    tip: '🌟 <strong>黃金密技</strong>：所有人一進場都會塞在玄關，此時二話不說，<strong>立刻直奔名場面展排隊</strong>！優先跟無臉男電車合照，能幫您省下後續整整 1.5～2 小時的漫長排隊時間！'
  },
  '2': {
    title: '特別企劃展覽 & 電影放映室',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 460, cy: 150, r: 20,
    desc: '展示吉卜力經典動畫背後的食物學問與創作手稿。放映室「Cinema Orion」也在隔壁。',
    tip: '特別企劃展內有《神隱少女》中御白樣的巨大立體造景，非常適合打卡！放映室則可憑入口處的票根免費觀看一次吉卜力不對外公開的專屬原創動畫短片。'
  },
  '3': {
    title: '冒牌館長室 (湯婆婆)',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 490, cy: 80, r: 18,
    desc: '還原《神隱少女》中湯婆婆在契約書漫天飛舞中狂怒的辦公場景。隔壁可以看到可愛的白龍！',
    tip: '您可以站在湯婆婆巨大的書桌正前方拍照，假裝自己是正在和她簽下名字契約的「千尋」！'
  },
  '4': {
    title: '天空之庭 ➔ 南街 ➔ 貓巴士房',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 940, cy: 200, r: 20,
    desc: '串聯大倉庫右半邊的三大驚奇世界：5米高巨型機器人兵（天空之庭）、懷舊昭和風「南街」以及貓巴士房間。',
    tip: '機器人兵常需排隊 20 分鐘合照；「南街」則有實體書店與模型鋪可購買復古周邊；特別注意「貓巴士房間」僅限國小以下兒童進入攀爬遊玩。'
  },
  '5': {
    title: '兒童城 & 小矮人花園',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 720, cy: 110, r: 20,
    desc: '帶領遊客體驗《借物少女艾莉緹》視角的世界。在這裡您將變身僅有 10 公分高的小人族，穿梭在巨型蒲公英與溫室花卉中。',
    tip: '艾莉緹之家的細節（1:10放大比例）令人驚嘆，抽屜、郵票床與植物盆栽等都能讓您拍出如童話般的照片！'
  },
  '6': {
    title: '牛奶小站 Siberi*An',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 320, cy: 80, r: 18,
    desc: '大倉庫後方的溫馨美食站。提供《風起》中男主角二郎購買的傳統紅豆蛋糕甜點「Siberia」與濃郁在地常滑牛乳。',
    tip: '走到這裡腳應該有點酸了，強烈推薦買一份紅豆蛋糕和一瓶用玻璃瓶裝的冰鮮奶（瓶身印有龍貓圖樣超可愛），補充熱量最對味！'
  },
  '7': {
    title: '大倉庫見學路 & 中央階梯',
    level: 'B1/1F 混合',
    levelClass: 'bg-gradient-to-r from-green-100 to-yellow-100 text-slate-800 border-orange-200',
    cx: 260, cy: 180, r: 20,
    desc: '順著高空見學走廊漫步，可以前往位於 B1 地下一樓的「倉庫展示區」，以及觀賞鋪滿七彩磁磚的壯觀中央大階梯。',
    tip: '地下的「開放式倉庫展示區」堆滿了吉卜力歷年在全日本展覽中使用過的精美道具與立體偶！階梯一旁還隱藏著《魔法公主》的小精靈，別忘了尋找看看。'
  },
  '8': {
    title: '紀念品旗艦店「冒險飛行團」',
    level: '1F 綠框',
    levelClass: 'bg-green-100 text-green-800 border-green-200',
    cx: 120, cy: 120, r: 22,
    desc: '全園區最受矚目、品項最豐富齊全的吉卜力官方紀念品旗艦店，鄰近最終出口。',
    tip: '🌟 <strong>黃金密技</strong>：解析血拼排在最後，是為了<strong>避免您提著大包小包重物逛展</strong>！在大倉庫體驗結束、離場前一次購齊，買完直接大滿足離館，是最完美的閉環路線！'
  }
};

// 5. 大倉庫路徑連線貝茲曲線控制點資料
window.ghibliWarehouseLines = [
  { from: '0', to: '1', type: 'Q', controlOffset: { x: -10, y: 120 } },
  { from: '1', to: '2', type: 'Q', controlOffset: { x: 220, y: 80 } }, // 大範圍向左下繞過動畫展大樓
  { from: '2', to: '3', type: 'Q', controlOffset: { x: 30, y: 5 } },
  { from: '3', to: '4', type: 'Q', controlOffset: { x: 20, y: -200 } },
  { from: '4', to: '5', type: 'C', controlOffsets: [{ x: 190, y: 220 }, { x: -260, y: 220 }] }, // 完美逆時針繞過貓巴士房大迴旋
  { from: '5', to: '6', type: 'Q', controlOffset: { x: 30, y: -100 } },
  { from: '6', to: '7', type: 'Q', controlOffset: { x: -20, y: -10 } },
  { from: '7', to: '8', type: 'Q', controlOffset: { x: -40, y: 30 } }
];

// 6. 使用者吉卜力一日完美實戰路線資料庫
window.ghibliOneDayItinerary = [
  {
    time: "10:00 - 12:00",
    zoneId: "valley-witches",
    title: "魔女之谷",
    icon: "🪄",
    transport: "🚶 走路 6 分鐘前往魔法之里",
    foods: ["青蛙燒", "貓掌熱狗麵包", "琪琪的麵包店黑咖哩麵包", "飛天烤箱餐廳鹹派"],
    desc: "最大型歐風戶外園區，朝朝霍爾的移動城堡與魔女宅急便經典場景。"
  },
  {
    time: "12:06 - 12:20",
    zoneId: "valley-mononoke",
    title: "幽靈之谷 (魔法之里)",
    icon: "🐗",
    transport: "🚌 搭乘巴士 15 分鐘前往動動力森林",
    foods: [],
    desc: "親見巨大的乙事主滑梯，體驗山林村落的古樸風格。"
  },
  {
    time: "12:35 - 13:40",
    zoneId: "dondoko-forest",
    title: "龍貓之森 (動動力森林)",
    icon: "🌳",
    transport: "🚌 搭乘巴士 20 分鐘前往青春之丘",
    foods: [],
    desc: "尋找小梅與小月的家，山頂朝聖 5 米高木造大龍貓。"
  },
  {
    time: "14:00 - 14:20",
    zoneId: "youth-hill",
    title: "青春之丘",
    icon: "🎻",
    transport: "🚶 走路 4 分鐘前往大倉庫",
    foods: [],
    desc: "走進心之谷的古董玩具地球屋，從小窗戶窺探貓的事務所。"
  },
  {
    time: "14:24 - 17:00",
    zoneId: "ghibli-warehouse",
    title: "吉卜力大倉庫",
    icon: "🏰",
    transport: "🏁 17:00 滿載而歸結束遊園",
    foods: ["西伯利亞蛋糕", "常滑牛奶", "大陸橫斷飛行餐廳-炸蝦披薩/三明治"],
    desc: "大飽眼福的名場面合照、天空之城機器兵與紀念品冒險飛行團旗艦店！"
  }
];

// 7. 魔女之谷獨立地標座標與詳情資料庫
window.valleyLandmarks = {
    'howl-castle': {
        name: '霍爾的移動城堡',
        short: '🏰',
        cx: 610,
        cy: 210,
        r: 22,
        category: 'premium',
        badge: 'Premium 核心建物',
        badgeColor: 'bg-amber-600',
        spots: [
            { name: '20米巍峨城堡主體', desc: '巨型城堡坐落在綠丘中，定時還會像劇中一樣噴出白色的蒸汽煙霧！' },
            { name: '霍爾的臥室與客廳', desc: '在二樓，放滿奇珍異寶、色彩斑斕卻雜亂的夢幻空間，100%還原劇照。' },
            { name: '卡西法的壁爐與廚房', desc: '一樓可欣賞生動爐灶火魔「卡西法」的壁爐與琪琪和卡爾西法煎蛋的廚房道具。' }
        ],
        premiumTip: '👑 <strong>尊榮福利</strong>：持 Premium 的遊客，建議一入園先朝城堡移動！在城堡一樓與二樓能完全觸摸到復古餐具、精美布料與霍爾的護身符，感受劇中的魔力。'
    },
    'okino-house': {
        name: '歐其諾之家',
        short: '🏡',
        cx: 210,
        cy: 190,
        r: 22,
        category: 'premium',
        badge: 'Premium 核心建物',
        badgeColor: 'bg-amber-600',
        spots: [
            { name: '琪琪的綠意溫馨老家', desc: '100%還原兩層樓的高挑半木屋，被大片香草植物與繁花環繞，洋溢春意。' },
            { name: '媽媽可琪莉的草藥調配室', desc: '一樓設有媽媽調配香草藥草的工作坊，一走進去就能聞到天然的花草芳香。' },
            { name: '琪琪出發前的粉紅臥室', desc: '二樓展示了琪琪出發前居住的少女房，床頭與裝飾精巧無比。' }
        ],
        premiumTip: '👑 <strong>尊榮福利</strong>：歐其諾之家室內佈滿了可以打開的抽屜！裡面的手稿、香料瓶都歡迎遊客親手拉開摸摸看，是普通大散步票無法參觀的極佳福利！'
    },
    'witch-house': {
        name: '魔女之家',
        short: '🔮',
        cx: 590,
        cy: 410,
        r: 22,
        category: 'premium',
        badge: 'Premium 核心建物',
        badgeColor: 'bg-amber-600',
        spots: [
            { name: '貝拉·雅加的奇幻魔藥坊', desc: '《魔女與安雅》中充滿藥水瓶、蝙蝠乾和複雜咒術儀器的工作房，極富魔幻神祕感。' },
            { name: '安雅的小睡房', desc: '擺有俏皮裝飾與玩具的精緻木造閣樓，窗外能望向整個魔女之谷。' }
        ],
        premiumTip: '👑 <strong>尊榮福利</strong>：魔女之家的室內擺設了許多帶有精緻魔法特效的調劑罐，在 Premium 參觀路線中可以親自上前觀察魔女的調配細節！'
    },
    'flying-oven': {
        name: '飛天烤箱餐廳',
        short: '🍔',
        cx: 650,
        cy: 600,
        r: 20,
        category: 'food',
        badge: '特色歐風主餐廳',
        badgeColor: 'bg-red-600',
        spots: [
            { name: '古典歐風紅磚挑高大樓', desc: '魔女之谷最主要的獨立餐廳，擁有歐式大教堂般華麗的採光天窗。' },
            { name: '魔法與鹹食烘焙美食', desc: '提供烤派、義大利麵、限定魔法風味烤雞等極致歐風暖胃料理。' }
        ],
        premiumTip: '🍴 <strong>午餐推薦</strong>：飛天烤箱餐廳在中午 11:30~13:30 是排隊高峰期！建議下午 14:00 後去享受英式午茶或提早至 11:00 入座，避開人潮最舒服。'
    },
    'bakery-kiki': {
        name: '魔女宅急便麵包店',
        short: '🍞',
        cx: 360,
        cy: 320,
        r: 20,
        category: 'food',
        badge: '現烤歐式點心',
        badgeColor: 'bg-red-600',
        spots: [
            { name: 'Gutiokipanja 歐式麵包鋪', desc: '完美複製琪琪與黑貓吉吉寄宿的古典歐風麵包坊，二樓還有琪琪的寄宿閣樓外觀。' },
            { name: '經典現烘現售麵包', desc: '販售與劇中外觀一模一樣的傳統法式長棍、圓麵包，排隊時能聞到滿滿的麥香味。' }
        ],
        premiumTip: '🥐 <strong>人氣爆棚</strong>：麵包店排隊常需 30~50 分鐘，且下午兩點後部分人氣麵包（如琪琪頭繩造型麵包）容易售罄，建議入園後提早過來買一份作為體力補給！'
    },
    'hotdog-stand': {
        name: '鐵皮屋頂熱狗攤',
        short: '🌭',
        cx: 230,
        cy: 430,
        r: 18,
        category: 'food',
        badge: '輕食速食補給站',
        badgeColor: 'bg-red-600',
        spots: [
            { name: '美式鐵皮屋頂快餐車', desc: '位於魔女之家與歐其諾家中間的綠色走道旁，售賣熱狗和冰涼飲料。' },
            { name: '常滑啤酒與現烤熱狗', desc: '大推這條路線限定的愛知縣常滑本地精釀啤酒，沁涼消暑（限成年人搭乘）。' }
        ],
        premiumTip: '🌭 <strong>快速補給</strong>：如果您不想浪費一兩個小時在餐廳大排長龍，熱狗攤是免排隊、快速買完在噴泉長椅上享用午餐的黃金替代方案！'
    },
    'witches-13': {
        name: '13人魔女團 (紀念品旗艦)',
        short: '🛍️',
        cx: 360,
        cy: 550,
        r: 20,
        category: 'shop',
        badge: '限定購物旗艦店',
        badgeColor: 'bg-purple-600',
        spots: [
            { name: '園區最大官方紀念品店', desc: '販售「魔女之谷」限定的極多古典娃娃、盲盒、手帕與宮崎駿手稿文具。' },
            { name: '絕美挑高玻璃圓頂設計', desc: '店內裝飾精緻，中央是一棵巨大的魔女樹，結滿奇異的魔法果實。' }
        ],
        premiumTip: '⚠️ <strong>玩偶特別公告（7月出遊必讀）</strong>：人氣玩偶「菌菌」位置已暫停販售，可以將心力放在魔女之谷限定的手工黑貓馬克杯 or 魔女帆布手提包上，品項同樣非常豐富！'
    },
    'sophie-hats': {
        name: '蘇菲帽子店',
        short: '👒',
        cx: 290,
        cy: 380,
        r: 20,
        category: 'shop',
        badge: '特色英式帽子商店',
        badgeColor: 'bg-purple-600',
        spots: [
            { name: '哈達帽子店外牆與櫥窗', desc: '《霍爾的移動城堡》中蘇菲工作並引退的街邊英風小帽子鋪，擺有大量精美英式呢帽。' },
            { name: '帽子店限定商品與帽子販售', desc: '遊客真的可以在店內試戴並購買專屬設計的草帽或復古圓帽！還有霍爾刺繡周邊。' }
        ],
        premiumTip: '👒 <strong>清涼一夏</strong>：7月炎炎夏日，建議可以直接在蘇菲帽子店為自己挑選一頂防曬草帽！店內冷氣很足，是非常優雅的夏日避暑購物點。'
    },
    'witch-mouth': {
        name: '魔女的嘴 (入口)',
        short: '👄',
        cx: 650,
        cy: 850,
        r: 18,
        category: 'attraction',
        badge: '魔女之谷起點地標',
        badgeColor: 'bg-blue-600',
        spots: [
            { name: '張嘴的巨大魔女雕像', desc: '位於東南角，造型魔幻俏皮，是魔女之谷的大門地標，所有人進園必合拍照！' },
            { name: '魔女的噴水池廣場', desc: '一進去就可以看到鋪滿青瓷磚的童話感水池，水滴折射陽光，極富夏日生氣。' }
        ],
        premiumTip: '📸 <strong>必拍點位</strong>：魔女的嘴在開園前半小時或閉園前半小時人潮最少，若遇到大排長龍，可以先越過，出園時再慢條斯理地排隊合照！'
    },
    'carousel': {
        name: '古典旋轉木馬',
        short: '🎠',
        cx: 280,
        cy: 260,
        r: 20,
        category: 'attraction',
        badge: '戶外大型遊樂設施',
        badgeColor: 'bg-blue-600',
        spots: [
            { name: '吉卜力角色大集結旋轉台', desc: '古典宮廷風的木馬旋轉台。木馬上騎乘的是《龍貓》、《魔女宅急便》等超多角色！' },
            { name: '華麗風琴樂演奏', desc: '旋轉時會自動演奏宮崎駿動畫名曲，充滿夢幻治癒的嘉年華童趣。' }
        ],
        premiumTip: '🎟️ <strong>付費與限制</strong>：本遊具不包含在 Premium 門票中，需在現場旁邊投幣式自動售票機購票，成人 ¥1,000 / 孩童 ¥500，2歲以下幼童免費搭乘。'
    },
    'flying-machine': {
        name: '飛行器設施',
        short: '🛸',
        cx: 520,
        cy: 340,
        r: 18,
        category: 'attraction',
        badge: '自費腳踏飛行設施',
        badgeColor: 'bg-blue-600',
        spots: [
            { name: '巴魯的雙翼旋轉飛行具', desc: '《天空之城》巴魯發明的飛行載具，多架飛行器圍繞著中央的主塔旋轉。' },
            { name: '腳踏控制升降體驗', desc: '搭乘時，只要您用力踩腳踏板，飛行器就會徐徐上升；放慢速度則會下降。' }
        ],
        premiumTip: '🎟️ <strong>付費與限制</strong>：成人 ¥500 / 孩童 ¥500。特別注意：<strong>本設施身高 120cm 以下兒童必須有成人陪同方可乘車！</strong>'
    },
    'ruin-street': {
        name: '廢墟街道和鐘樓',
        short: '🔔',
        cx: 490,
        cy: 260,
        r: 18,
        category: 'attraction',
        badge: '龐克廢墟遺址打卡點',
        badgeColor: 'bg-blue-600',
        spots: [
            { name: '殘垣斷壁英風大道', desc: '完美還原中世紀荒廢小鎮遺址，石磚上攀爬著綠意苔蘚，極富神祕荒涼美學。' },
            { name: '機械蒸氣龐克鐘樓', desc: '可以登上鐘樓頂部平台，眺望整個魔女之谷城堡與中央大池塘的宏偉美景！' }
        ],
        premiumTip: '🔔 <strong>眺望絕佳點</strong>：登上鐘樓平台是俯瞰「霍爾移動城堡」定時噴煙與旋轉木馬全景的絕佳秘密機位，不容錯過。'
    }
};

