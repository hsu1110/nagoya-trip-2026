// ==========================================
// 名古屋自由行 2026：主行程與全區景點美食資料庫 (travel_db.js)
// ==========================================

window.itineraryData = [
  {
    day: 1,
    date: "7/01 (三)",
    title: "Day 1: 紅眼直衝，歷史避暑與頂級燒肉",
    focus: "名古屋城、馬喰一代燒肉、名站商圈、拉麵與炸雞翅宵夜",
    logistics: "樂桃 MM722 (02:45 TPE ➔ 06:20 NGO)，名鐵 μ-SKY 至名古屋站（28 分鐘，1,250 日圓）",
    meals: "早餐：客美多或地下街<br>午餐：飛驒牛一頭家 馬喰一代（WEST店）<br>晚餐：麵家獅子丸 或 味仙拉麵<br>宵夜：世界的山將",
    warnings: "紅眼班機體力負荷大，捨棄午睡直接開逛，請量力而為。平日馬喰一代極易客滿，強烈建議出發前一個月上網預約！",
    details: [
      { time: "06:20", icon: "🛬", title: "抵達中部國際機場", desc: "樂桃 MM722 降落。搭名鐵 μ-SKY 特急直達名古屋站（約 28 分鐘）。" },
      { time: "08:00", icon: "🏨", title: "VIA INN 寄放行李", desc: "先至飯店前台寄放行李，在地下街簡單吃個早餐墊胃。" },
      { time: "09:30", icon: "🏯", title: "名古屋城 ＆ 本丸御殿", dbId: 27, desc: "趁早上體力最好、氣溫涼爽時先去逛，欣賞耗資百億復原的華麗壁畫與建築。" },
      { time: "13:00", icon: "🥩", title: "午餐：馬喰一代 WEST店", dbId: 5, desc: "<strong>必吃：頂級和牛炭火燒肉！</strong>平日商業午餐超高CP值，就在飯店旁邊，吃完剛好 Check-in。" },
      { time: "15:00", icon: "🛍️", title: "飯店 Check-in ＆ 名站尋寶", dbId: 1, desc: "不補眠，直接攻略名站西口的 Bic Camera 買電器，或去 Animate 與地下街尋寶。" },
      { time: "18:30", icon: "🍜", title: "晚餐：麵家獅子丸 / 味仙", dbId: 8, desc: "吃獅子丸的泡系白湯拉麵，或是重口味爆汗的味仙台灣拉麵（二選一）。" },
      { time: "20:00", icon: "🍗", title: "宵夜：世界的山將", dbId: 13, desc: "買招牌胡椒炸雞翅帶回飯店，舒舒服服地洗完澡啃雞翅配啤酒！" }
    ]
  },
  {
    day: 2,
    date: "7/02 (四)",
    title: "Day 2: 童話世界與榮商圈大口吃肉",
    focus: "吉卜力公園、和牛たんじ、綠洲21夜景",
    logistics: "地鐵東山線轉乘 Linimo 至「愛・地球博紀念公園」。回程搭東山線直達「榮站」。",
    meals: "午餐：園區內美食或自備<br>晚餐：和牛たんじ（榮錦店）",
    warnings: "吉卜力門票需提前兩個月於官網搶票。和牛たんじ為高人氣名店，必須事先網路預約。",
    details: [
      { time: "09:00", icon: "🌳", title: "吉卜力公園", dbId: 38, desc: "平日人少好拍照，進入吉卜力大倉庫盡情沉浸動畫世界，拍無臉男與貓巴士。" },
      { time: "16:00", icon: "🚇", title: "返回市區", desc: "搭乘 Linimo 轉東山線，完美順路從藤之丘直達「榮站」下車。" },
      { time: "19:00", icon: "👅", title: "晚餐：和牛たんじ", dbId: 21, desc: "<strong>厚切仙台牛舌與和牛大腹肉壽司吃到飽！</strong>限時 100 分鐘的終極和牛饗宴。" },
      { time: "20:30", icon: "🗼", title: "綠洲 21 ＆ 電視塔夜景", dbId: 20, desc: "吃飽後在榮商圈散步消化，欣賞浪漫的水之宇宙船點燈，隨後搭地鐵回飯店。" }
    ]
  },
  {
    day: 3,
    date: "7/03 (五)",
    title: "Day 3: 京都錯峰戰略，反向避暑",
    focus: "伏見稻荷大社、清水寺、京都車站美食",
    logistics: "名古屋搭乘新幹線直達京都（約 35 分鐘）。市區利用計程車或京阪本線。",
    meals: "午餐：清水順正 Okabe 家 或 祢ざめ家<br>晚餐：京都勝牛 或 東洋亭",
    warnings: "伏見稻荷務必早上 8:30 前抵達。前往清水寺建議直接從車站攔計程車到松原通順坡而下，避開夏日酷暑爬坡。",
    details: [
      { time: "08:00", icon: "🚄", title: "搭乘新幹線前往京都", desc: "搭乘新幹線直達京都，展開跨縣市的古都一日遊。" },
      { time: "09:00", icon: "⛩️", title: "伏見稻荷大社", dbId: 40, desc: "趁早上避開人潮拍攝千本鳥居。" },
      { time: "10:30", icon: "🦊", title: "點心：祢ざめ家", dbId: 44, desc: "參拜完順路吃個近 500 年歷史老店的豆皮壽司 (稻荷壽司) 補充體力。" },
      { time: "11:30", icon: "🥢", title: "午餐：清水順正 Okabe 家", dbId: 41, desc: "庭園氛圍極佳的湯豆腐定食，建議事先網路預約避開中午人潮。" },
      { time: "13:00", icon: "🏯", title: "清水寺 ＆ 二年坂", dbId: 40, desc: "搭計程車直上清水寺，參拜後順著二年坂/三年坂往下逛，體驗京都古樸風情。" },
      { time: "18:00", icon: "🥩", title: "晚餐：京都勝牛", dbId: 42, desc: "吃經典和牛炸牛排定食，吃完直接進京都車站買伴手禮搭新幹線回名古屋。" }
    ]
  },
  {
    day: 4,
    date: "7/04 (六)",
    title: "Day 4: 神聖森林、次文化與極致燒鳥",
    focus: "熱田神宮、熱田蓬萊軒、大須商店街、千亀燒鳥",
    logistics: "搭乘名鐵或地鐵至熱田神宮，下午利用地鐵移動至大須與榮商圈。",
    meals: "午餐：熱田蓬萊軒（神宮店）<br>晚餐：にぎりの徳兵衛<br>宵夜：やきとり千亀",
    warnings: "蓬萊軒不接受預約，到神宮務必「先去門口登記拿時間單」！千亀為預約極困難店，需提早規劃。",
    details: [
      { time: "09:00", icon: "📝", title: "熱田蓬萊軒登記", dbId: 33, desc: "抵達熱田神宮後，<strong>立刻直奔南門的蓬萊軒登記午餐時段</strong>，拿好時間單。" },
      { time: "09:30", icon: "🌲", title: "參拜熱田神宮", dbId: 31, desc: "悠哉逛神宮、看三大神器「草薙劍」相關展覽，吸收神木芬多精，抵銷排隊時間。" },
      { time: "11:30", icon: "🍱", title: "午餐：熱田蓬萊軒", dbId: 33, desc: "<strong>神級鰻魚飯三吃！</strong>品嚐傳承 150 年秘傳醬汁與備長炭直火烤製的絕品美味。" },
      { time: "13:30", icon: "👾", title: "大須商店街尋寶", dbId: 18, desc: "搭地鐵直奔大須，狂逛高階電腦零組件、古著、二手公仔與品嚐街頭小吃。" },
      { time: "18:00", icon: "🍣", title: "晚餐：にぎりの徳兵衛", dbId: 22, desc: "榮商圈 Oasis 21 店，動線極佳的中高級迴轉壽司，用平板點餐吃得精緻舒服。" },
      { time: "21:30", icon: "🍢", title: "宵夜：やきとり千亀", dbId: 23, desc: "榮商圈巷弄內的 Tabelog 燒鳥百名店！炭火烤功出神入化，<strong>必點爆漿提燈</strong>。" }
    ]
  },
  {
    day: 5,
    date: "7/05 (日)",
    title: "Day 5: 優雅壽喜燒與彈性自由發揮",
    focus: "馬喰一代壽喜燒、長島三井 Outlet / 名古屋市區採買",
    logistics: "若前往 Outlet，從名鐵巴士中心搭乘直達高速巴士（約 50 分鐘）。",
    meals: "午餐：飛驒牛一頭家 馬喰一代（名古屋店）<br>晚餐：Outlet 內美食或市區百貨餐廳",
    warnings: "今天是行程緩衝日。可根據前幾天的戰利品狀況與體力，自由決定是否前往 Outlet。",
    details: [
      { time: "11:30", icon: "🍲", title: "午餐：馬喰一代 名古屋店", dbId: 6, desc: "位於名站東口，享用<strong>關西風壽喜燒 / 涮涮鍋</strong>。吃完剛好在交通樞紐決定下午行程。" },
      { time: "13:30", icon: "🚌", title: "分歧路線 A：出發 Outlet", dbId: 39, desc: "走到旁邊名鐵巴士中心，搭直達車殺去長島三井 Outlet 發揮 46kg 托運實力。" },
      { time: "13:30", icon: "🏬", title: "分歧路線 B：市區巡禮", dbId: 3, desc: "若不去 Outlet，則留在 JR Gate Tower 雙塔百貨、名鐵百貨逛街，補齊還沒買到的藥妝 or 動漫商品。" },
      { time: "19:00", icon: "🛍️", title: "晚餐與最後打包", desc: "回到市區或直接在 Outlet 解決晚餐，回飯店整理爆滿的戰利品與行李。" }
    ]
  },
  {
    day: 6,
    date: "7/06 (一)",
    title: "Day 6: 滿載而歸，最後的伴手禮衝刺",
    focus: "機場採買、蝦仙貝之里",
    logistics: "搭乘名鐵 μ-SKY 特急前往中部國際機場（約 28 分鐘）。",
    meals: "早餐：飯店周邊或地下街<br>午餐：機場內或機上",
    warnings: "蝦仙貝體積大但輕，強烈建議最後在機場買，直接當手提行李上機，不佔行李箱空間！",
    details: [
      { time: "08:30", icon: "🧳", title: "起床與最後整理", desc: "享受沒有時間壓力的早晨，完成退房手續。" },
      { time: "09:30", icon: "🚆", title: "出發前往機場", desc: "帶著行李搭乘名鐵 μ-SKY 特急，輕鬆離開名古屋市區。" },
      { time: "10:30", icon: "🍘", title: "機場採買：蝦仙貝之里", dbId: 47, desc: "在中部國際機場 4 樓購買超人氣蝦餅，完美保留行李載重額度。" },
      { time: "12:20", icon: "✈️", title: "搭機返台", desc: "搭乘班機滿載而歸，結束鐵人又充實的 6 天 5 夜自由行！" }
    ]
  }
];

window.db = [
  // 區域 1：名站區 (景點)
  { id: 1, area: "名站區", type: "attraction", name: "Bic Camera (玩具模型/電器)", hours: "10:00–21:00", location: "名站西口 (太閤通口)", transport: "從飯店步行 2 分鐘", notes: "買電器與藥妝首選！樓上擁有極大的玩具模型與鋼普拉區，距離 VIA INN 飯店極近。", icon: "fa-camera", color: "bg-purple-100 text-purple-600", mapQuery: "ビックカメラ 名古屋駅西店 愛知県名古屋市中村区椿町6-9" },
  { id: 2, area: "名站區", type: "attraction", name: "Animate & 羅針盤 (動漫尋寶)", hours: "10:00–21:00 (依店鋪不同)", location: "名站西口周邊", transport: "從飯店步行 3 分鐘", notes: "動漫周邊、同人誌與二手公仔的集散地，建議利用每天早晚的零碎時間去挖寶。", icon: "fa-gamepad", color: "bg-purple-100 text-purple-600", mapQuery: "アニメイト 名古屋 愛知県名古屋市中村区椿町18-4" },
  { id: 3, area: "名站區", type: "attraction", name: "JR Gate Tower 雙塔 & 地下街", hours: "10:00–20:00", location: "名站東口 (櫻通口)", transport: "穿過車站大廳即達", notes: "結合 Unimall 等超長地下街，日系服飾、雜貨天堂。Gate Tower 15樓有免費的高空夜景可以看！", icon: "fa-building", color: "bg-blue-100 text-blue-600", mapQuery: "JRゲートタワー 愛知県名古屋市中村区名駅1-1-3" },
  { id: 4, area: "名站區", type: "attraction", name: "名鐵百貨 (Nana 醬巨型人偶)", hours: "10:00–20:00", location: "名站東口 (櫻通口)", transport: "車站外步行 3 分鐘", notes: "名古屋站最具代表性的打卡地標「Nana醬人形」，她經常會換上各種奇特的服裝。", icon: "fa-person-dress", color: "bg-indigo-100 text-indigo-600", mapQuery: "ナナちゃん人形 愛知県名古屋市中村区名駅1-2-1" },

  // ================= 區域 1：名站區 (美食) =================
  { id: 5, area: "名站區", type: "food", name: "馬喰一代 (WEST店 - 炭火燒肉)", hours: "11:30–15:00 / 17:00–23:00", location: "名站西口步行 3 分鐘", category: "午餐 (高CP值) / 晚餐", notes: "主打【極致炭火燒肉】！想吃頂級 A5 飛驒牛燒肉請選這間，平日商業午餐極度划算，強烈建議出發前一個月上網預約。", icon: "fa-fire-burner", color: "bg-red-100 text-red-600", mapQuery: "飛騨牛一頭家 馬喰一代 名古屋WEST 愛知県名古屋市西区牛島町6-24" },
  { id: 6, area: "名站區", type: "food", name: "馬喰一代 (名古屋 EAST 店 - 壽喜燒)", hours: "11:30–15:00 / 17:00–23:00", location: "名站東口步行 2 分鐘 (アストラーレ名駅2F)", category: "午餐 / 晚餐", notes: "主打【關西風壽喜燒 / 涮涮鍋】！想體驗醬汁濃郁煎烤的和牛，或是清爽的高湯涮肉請選這間。環境優雅，同樣需預約。", icon: "fa-bowl-food", color: "bg-orange-100 text-orange-600", mapQuery: "飛騨牛一頭家 馬喰一代 名古屋EAST 愛知県名古屋市中村区名駅2-41-10" },
  { id: 49, area: "名站區", type: "food", name: "しゃぶすき家 WEST (壽喜燒 / 涮涮鍋)", hours: "11:30–24:00 (午餐至 15:00)", location: "名站西口步行 3 分鐘 (Acrocube 2F)", category: "午餐 / 晚餐", notes: "專攻頂級飛驒牛壽喜燒與涮涮鍋。就開在 WEST 燒肉店的正隔壁，環境極佳，務必提前預約。", icon: "fa-bowl-food", color: "bg-orange-100 text-orange-600", mapQuery: "最飛び飛騨牛 しゃぶすき家 馬喰一代 名古屋WEST 愛知県名古屋市西区牛島町6-24" },
  { id: 7, area: "名站區", type: "food", name: "梅丘壽司美登利", hours: "11:00–22:00", location: "JR Gate Tower 12 樓", category: "午餐 / 晚餐", notes: "東京來的排隊霸主！主打巨無霸浮誇握壽司，星鰻一整條。預算約 4500 日圓可吃極好。抵達12樓請務必【先抽號碼牌】再去逛街。", icon: "fa-fish", color: "bg-orange-100 text-orange-600", mapQuery: "梅丘寿司の美登利 JRゲートタワー店 愛知県名古屋市中村区名駅1-1-3" },
  { id: 8, area: "名站區", type: "food", name: "麵家 獅子丸", hours: "11:00–14:30 / 17:30–21:30", location: "地鐵「龜島站」步行 2 分鐘", category: "午餐 / 晚餐", notes: "Tabelog百名店。洋風泡系白湯拉麵，湯頭細緻綿密如卡布奇諾。無法預約，開門前20分鐘就會排隊。", icon: "fa-bowl-food", color: "bg-amber-100 text-amber-600", mapQuery: "麺家 獅子丸 愛知県名古屋市中村区亀島2-1-1" },
  { id: 9, area: "名站區", type: "food", name: "味仙拉麵 (驛麵通 / 大名古屋大廈店)", hours: "11:00–22:00", location: "名古屋車站內 / 東口對面", category: "午餐 / 晚餐 / 宵夜", notes: "大蒜與辣椒爆炒的湯頭，極度重口味、爆汗過癮。非常適合當作一整天行程結束、回飯店洗澡前吃的一餐。", icon: "fa-pepper-hot", color: "bg-red-100 text-red-600", mapQuery: "味仙 JR名古屋駅店 愛知県名古屋市中村区名駅1-1-4" },
  { id: 10, area: "名站區", type: "food", name: "燕子麵包＆Milk (Tsubame Bread)", hours: "08:00–20:00", location: "名站 4 丁目 (東口步行 5 分鐘)", category: "早餐 / 午餐 / 下午茶", notes: "天然酵母吐司專賣！IG爆紅的【爆漿起司厚蛋三明治】早上 11:00 後才開賣。早上8-11點提供的是點飲料送吐司的早餐。", icon: "fa-bread-slice", color: "bg-yellow-100 text-yellow-600", mapQuery: "つばめパン＆Milk 名駅店 愛知県名古屋市中村区名駅4-26-25" },
  { id: 11, area: "名站區", type: "food", name: "ÉCHIRÉ 艾許奶油專賣店", hours: "10:00–20:00", location: "JR 名古屋高島屋 1 樓", category: "甜點 / 伴手禮", notes: "法國奶油界LV！必買邊緣酥脆的「費南雪」與「瑪德蓮」，以及名古屋限定奶油夾心餅乾。", icon: "fa-cookie", color: "bg-amber-100 text-amber-700", mapQuery: "エシレ・パティスリー オ ブール JR名古屋タカシマヤ店 愛知県名古屋市中村区名駅1-1-4" },
  { id: 12, area: "名站區", type: "food", name: "山本屋本店 (味噌煮込みうどん)", hours: "11:00–22:00", location: "西口 ESCA 地下街", category: "午/晚餐", notes: "正宗名古屋紅味噌烏龍麵！注意：它的特色是麵條「極度有嚼勁（生麵煮法）」，湯頭濃郁非常下飯。", icon: "fa-bowl-rice", color: "bg-orange-100 text-orange-700", mapQuery: "山本屋本店 エスカ店 愛知県名古屋市中村区椿町6-9" },
  { id: 13, area: "名站區", type: "food", name: "世界的山將 / 風來坊", hours: "17:00–24:00 (依店鋪不同)", location: "名站周邊多間分店", category: "宵夜", notes: "宵夜必買！極度酥脆、胡椒嗆辣的炸雞翅(手羽先)，帶回 VIA INN 飯店配啤酒的完美組合。", icon: "fa-drumstick-bite", color: "bg-orange-100 text-orange-700", mapQuery: "世界の山ちゃん 名駅太閤店 愛知県名古屋市中村区太閤1-1-16" },
  { id: 14, area: "名站區", type: "food", name: "客美多咖啡 (Komeda) / 喫茶 Riyon", hours: "07:00–21:00", location: "西口 ESCA 地下街 / 車站周邊", category: "早餐", notes: "點咖啡免費送烤吐司與紅豆泥，體驗最道地的名古屋 Morning Service 早餐文化，順便補眠。", icon: "fa-mug-hot", color: "bg-stone-100 text-stone-600", mapQuery: "コメダ珈琲店 エスカ店 愛知県名古屋市中村区椿町6-9" },
  { id: 15, area: "名站區", type: "food", name: "コンパル (Konparu) 炸蝦三明治", hours: "08:00–20:00", location: "名站 Sun Road 地下街", category: "輕食 / 早餐", notes: "老字號喫茶店的神級「炸蝦三明治」，塔塔醬與現炸大蝦完美結合，咬下去會爆汁，也可外帶。", icon: "fa-sandwich", color: "bg-yellow-100 text-yellow-700", mapQuery: "コンパル サンロード店 愛知県名古屋市中村区名駅4-7-25" },
  { id: 16, area: "名站區", type: "food", name: "ぴよりん (Piyorin 小雞蛋糕)", hours: "10:00–20:00", location: "名古屋車站 central walk", category: "甜點", notes: "名站限定的超萌小雞布丁蛋糕。因為極度脆弱，可以試著挑戰把它「無傷」提回飯店吃！", icon: "fa-cake-candles", color: "bg-pink-100 text-pink-500", mapQuery: "ぴよりんSTATION カフェジャンシアーヌ 愛知県名古屋市中村区名駅1-1-4" },
  { id: 17, area: "名站區", type: "food", name: "千壽 炸蝦飯糰", hours: "08:00–20:00", location: "西口 ESCA 地下街", category: "早餐 / 外帶", notes: "一口大小的美味炸蝦飯糰。非常適合早上買好帶上新幹線 (去京都時) 當早餐吃！", icon: "fa-bowl-rice", color: "bg-rose-100 text-rose-600", mapQuery: "めいふつ 天むす 千寿 エスカ店 愛知県名古屋市中村区椿町6-9" },

  // ================= 區域 2：大須 / 榮商圈 =================
  // 景點
  { id: 18, area: "大須 / 榮商圈", type: "attraction", name: "大須商店街 (Mandarake、Tsukumo)", hours: "10:30–19:00", location: "地鐵「大須觀音站」或「上前津站」", transport: "名站搭東山線至伏見轉鶴舞線", notes: "中部的秋葉原！Tsukumo、Dospara有高階PC零件；Mandarake、駿河屋、Joshin是尋找絕版公仔與模型的終極聖地！", icon: "fa-store", color: "bg-teal-100 text-teal-600", mapQuery: "大須商店街 愛知県名古屋市中区大須" },
  { id: 19, area: "大須 / 榮商圈", type: "attraction", name: "榮商圈百貨 (寶可夢中心 / JUMP SHOP)", hours: "10:00–20:00", location: "地鐵「矢場町站」或「榮站」", transport: "從大須步行即可達", notes: "松坂屋頂樓有超巨大的寶可夢中心；PARCO有潮牌與 JUMP SHOP 官方周邊。", icon: "fa-bag-shopping", color: "bg-pink-100 text-pink-600", mapQuery: "ポケモンセンターナゴヤ 愛知県名古屋市中区栄3-16-1" },
  { id: 20, area: "大須 / 榮商圈", type: "attraction", name: "綠洲 21 (Oasis 21) & 名古屋電視塔", hours: "水之宇宙船開放至 21:00", location: "地鐵「榮站」直結", transport: "榮商圈內步行", notes: "榮商圈必看浪漫都市夜景，以電視塔為背景的玻璃水池是經典打卡點。吃飽飯後散步極佳。", icon: "fa-tower-observation", color: "bg-sky-100 text-sky-600", mapQuery: "オアシス21 愛知県名古屋市東区東桜1-11-1" },
  // 美食
  { id: 21, area: "大須 / 榮商圈", type: "food", name: "和牛たんじ (榮錦店)", hours: "17:00–23:00", location: "榮商圈 (錦三丁目)", category: "晚餐", notes: "限時 100 分鐘的【厚切仙台牛舌】與和牛大腹肉壽司吃到飽。高人氣名店，必須上網預約！", icon: "fa-cow", color: "bg-red-100 text-red-700", mapQuery: "和牛たんじ 名古屋栄錦店 愛知県名古屋市中区錦3-19-21" },
  { id: 22, area: "大須 / 榮商圈", type: "food", name: "にぎりの徳兵衛 (Oasis 21 店)", hours: "11:00–22:00", location: "榮商圈綠洲 21 地下一樓", category: "晚餐 / 午餐", notes: "動線極佳，看完夜景可直接下樓吃。平板輕鬆點餐，食材精緻，是逛街後毫無壓力的中高級迴轉壽司。", icon: "fa-plate-wheat", color: "bg-blue-100 text-blue-600", mapQuery: "にぎりの徳兵衛 オアシス21店 愛知県名古屋市東区東桜1-11-1" },
  { id: 23, area: "大須 / 榮商圈", type: "food", name: "やきとり千亀 (Yakitori Sengame)", hours: "17:00–24:00 (週日休)", location: "榮站步行約 7 分鐘巷弄內", category: "晚餐 / 宵夜", notes: "Tabelog燒鳥百名店！使用高級名古屋交趾雞，炭火烤功出神入化。必點爆漿的【提燈】。極度難訂位。", icon: "fa-fire", color: "bg-orange-100 text-orange-600", mapQuery: "やきとり千亀 愛知県名古屋市中区栄3-1-19" },
  { id: 24, area: "大須 / 榮商圈", type: "food", name: "いば昇 (Ibasho) 鰻魚飯", hours: "11:00–14:30 / 16:00–20:00", location: "榮商圈 (錦本店)", category: "午 / 晚餐", notes: "榮商圈的百年關西風脆皮鰻魚飯老店。如果你不想去熱田神宮排蓬萊軒，這家是逛街時完美的備案。", icon: "fa-fish-fins", color: "bg-amber-100 text-amber-700", mapQuery: "いば昇 錦本店 愛知県名古屋市中区錦3-13-22" },
  { id: 25, area: "大須 / 榮商圈", type: "food", name: "HARBS 榮本店", hours: "11:00–20:00", location: "榮站步行 3 分鐘", category: "甜點 / 下午茶", notes: "台灣人最愛的水果千層蛋糕「創始總店」，來這裡吃一塊招牌蛋糕，絕對是最高級的下午茶享受。", icon: "fa-cake-candles", color: "bg-pink-100 text-pink-500", mapQuery: "HARBS 栄本店 愛知県名古屋市中区錦3-6-17" },
  { id: 26, area: "大須 / 榮商圈", type: "food", name: "大須街頭小吃 (糰子/炸雞/蒙布朗)", hours: "11:00–18:00 (配合商店街)", location: "大須商店街內", category: "小吃", notes: "新雀本店(烤糰子)、李さんの台湾名物屋(人氣排隊唐揚雞)、和栗モンブラン専門店 栗りん(現擠瀑布栗子蒙布朗)。", icon: "fa-ice-cream", color: "bg-pink-100 text-pink-600", mapQuery: "新雀本店 愛知県名古屋市中区大須2-30-12" },
  { id: 50, area: "大須 / 榮商圈", type: "food", name: "馬喰一代 (榮店 - 燒肉/鍋物綜合)", hours: "11:30–23:00 (午餐至 15:00)", location: "地鐵「榮站」步行 2 分鐘 (BINO栄 5F)", category: "午餐 / 晚餐", notes: "榮商圈的旗艦店，同時提供炭火燒肉與壽喜燒/涮涮鍋。逛完綠洲 21 或大須後，就近吃頂級和牛的最佳選擇。", icon: "fa-fire-burner", color: "bg-red-100 text-red-600", mapQuery: "飛騨牛一頭家 馬喰一代 名古屋 栄 愛知県名古屋市中区錦3-24-17" },

  // ================= 區域 3：名古屋城區 =================
  // 景點
  { id: 27, area: "名古屋城區", type: "attraction", name: "名古屋城 ＆ 本丸御殿", hours: "09:00–16:30 (最後入場 16:00)", location: "地鐵「名古屋城站」7 號出口", transport: "名站搭櫻通線轉名城線", notes: "天守閣因耐震無法進入，但耗資百億全木造復原的「本丸御殿」極其華麗，室內冷氣充足，是夏日避暑絕佳景點。", icon: "fa-chess-rook", color: "bg-slate-200 text-slate-700", mapQuery: "名古屋城 本丸御殿 愛知県名古屋市中区本丸1-1" },
  { id: 28, area: "名古屋城區", type: "attraction", name: "德川園 ＆ 德川美術館", hours: "09:30–17:30 (週一休)", location: "名古屋城東側", transport: "觀光巴士 Me～guru", notes: "池泉迴遊式大名庭園。如果逛完名古屋城還有時間，可以來欣賞精緻的日式造景，綠意盎然且非常幽靜。", icon: "fa-tree", color: "bg-green-100 text-green-700", mapQuery: "徳川園 愛知県名古屋市東区徳川町1001" },
  // 美食
  { id: 29, area: "名古屋城區", type: "food", name: "金鯱橫丁 (義直區 / 宗春區)", hours: "10:30–17:30 (依店家不同)", location: "名古屋城正門與東門外", category: "美食街 / 小吃", notes: "城外的仿古美食街。義直區主打名古屋傳統老店（如矢場豬排）；宗春區偏向現代新銳餐廳與甜點。", icon: "fa-store", color: "bg-amber-100 text-amber-700", mapQuery: "金シャチ横丁 愛知県名古屋市中区三の丸1-2-3" },
  { id: 30, area: "名古屋城區", type: "food", name: "備長鰻魚飯 (金鯱橫丁店)", hours: "10:30–15:30 / 17:00–20:00", location: "金鯱橫丁內", category: "午餐 / 晚餐", notes: "全程無蒸煮、直火強烤，表皮極度焦脆！如果沒排到熱田蓬萊軒，逛完名古屋城直接來吃這家絕佳。", icon: "fa-fish-fins", color: "bg-amber-100 text-amber-800", mapQuery: "ひつまぶし名古屋備長 金シャチ横丁店 愛知県名古屋市中区三の丸1-2-5" },

  // ================= 區域 4：熱田神宮區 =================
  // 景點
  { id: 31, area: "熱田神宮區", type: "attraction", name: "熱田神宮 ＆ 草薙館", hours: "神宮 24H；草薙館 09:00–16:30", location: "地鐵「熱田神宮傳馬町站」", transport: "搭乘地鐵名城線", notes: "供奉日本三大神器之一「草薙劍」的聖地。境內有千年神木；草薙館可親手體驗武士刀重量。", icon: "fa-torii-gate", color: "bg-green-100 text-green-700", mapQuery: "熱田神宮 愛知県名古屋市熱田区神宮1-1-1" },
  { id: 32, area: "熱田神宮區", type: "attraction", name: "白鳥庭園", hours: "09:00–17:00 (週一休)", location: "熱田神宮西側步行 10 分鐘", transport: "從神宮步行即達", notes: "市內最大日式庭園。如果等待鰻魚飯的時間超過兩小時，除了逛神宮，也可散步來這裡喝杯日式抹茶。", icon: "fa-leaf", color: "bg-emerald-100 text-emerald-600", mapQuery: "白鳥庭園 愛知県名古屋市熱田区熱田西町2-5" },
  // 美食
  { id: 33, area: "熱田神宮區", type: "food", name: "熱田蓬萊軒 (神宮店)", hours: "11:30–14:30 / 16:30–20:30", location: "熱田神宮南門旁 (步行1分)", category: "午餐 / 晚餐", notes: "150年歷史的神級鰻魚飯三吃！【不接受預約，採現場人工登記】。抵達後務必先拿時間單，再去逛神宮抵銷排隊時間。", icon: "fa-bowl-rice", color: "bg-orange-100 text-orange-800", mapQuery: "あつた蓬莱軒 神宮店 愛知県名古屋市熱田区神宮2-10-26" },
  { id: 34, area: "熱田神宮區", type: "food", name: "宮きしめん (宮棊子麵)", hours: "09:00–16:30", location: "熱田神宮森林境內", category: "午餐 / 輕食", notes: "在神木環繞的半露天座位，吃清甜柴魚湯頭的名古屋特色寬扁麵。氣氛極佳且不需大排長龍。", icon: "fa-water", color: "bg-blue-100 text-blue-700", mapQuery: "宮きしめん 神宮店 愛知県名古屋市熱田区神宮1-1-1" },
  { id: 35, area: "熱田神宮區", type: "food", name: "きよめ餅總本家 (Kiyome Mochi)", hours: "09:00–18:00", location: "名鐵神宮前站周邊", category: "伴手禮", notes: "熱田神宮最具代表性的名產！雪白的羽二重餅皮包著細緻紅豆泥，可內用搭配抹茶套餐。", icon: "fa-cookie", color: "bg-pink-100 text-pink-600", mapQuery: "きよめ餅総本家 愛知県名古屋市熱田区神宮3-7-21" },

  // ================= 區域 5：犬山區 =================
  { id: 36, area: "犬山區", type: "attraction", name: "犬山城 ＆ 三光稻荷神社", hours: "09:00–17:00", location: "名鐵「犬山站」步行約 15 分", transport: "名站搭名鐵特急約 30 分鐘直達", notes: "日本現存最古老的木造國寶天守閣，木製階梯極陡。山腳有著名的「洗錢」池與粉紅愛心繪馬。", icon: "fa-monument", color: "bg-orange-100 text-orange-600", mapQuery: "国宝 犬山城 愛知県犬山市犬山北古券65-2" },
  { id: 37, area: "犬山區", type: "food", name: "犬山城下町老街小吃", hours: "10:00–17:00", location: "犬山城外老街", category: "小吃", notes: "推薦「犬山牛太郎」的A5飛驒牛握壽司，以及塗滿濃意醬汁現烤的「山田五平餅」。", icon: "fa-burger", color: "bg-red-100 text-red-500", mapQuery: "犬山牛太郎 愛知県犬山市犬山東古券75-4" },

  // ================= 區域 6：京都 / 市郊 / 機場 =================
  { id: 38, area: "京都 / 市郊", type: "attraction", name: "吉卜力公園", hours: "平日 10:00–17:00 (週二休)", location: "愛・地球博紀念公園", transport: "地鐵東山線轉乘 Linimo", notes: "需提前兩個月於官網預購大倉庫等門票。必拍無臉男與貓巴士，建議預留一整天慢慢逛。", icon: "fa-tree", color: "bg-emerald-100 text-emerald-700", mapQuery: "ジブリパーク 愛知県長久手市茨ケ廻間乙1533-1" },
  { id: 39, area: "京都 / 市郊", type: "attraction", name: "長島三井 Outlet", hours: "10:00–20:00", location: "三重縣", transport: "名鐵巴士中心搭高速巴士直達", notes: "發揮 46kg 行李額度的終極血拚戰場！買完務必先回飯店卸貨再安排後續行程。", icon: "fa-bag-shopping", color: "bg-pink-100 text-pink-600", mapQuery: "三井アウトレットパーク ジャズドリーム長島 三重県桑名市長島町浦安368" },
  { id: 40, area: "京都 / 市郊", type: "attraction", name: "京都 (伏見稻荷 ➔ 清水寺 ➔ 祇園)", hours: "早上 08:30 前抵達伏見稻荷", location: "日本京都", transport: "名古屋搭新幹線至京都 (35分)", notes: "神級避暑動線：伏見稻荷搭「京阪本線」至清水五條後，直接攔計程車至清水寺上方順坡而下。", icon: "fa-train", color: "bg-purple-100 text-purple-600", mapQuery: "清水寺 京都府京都市東山区清水1丁目294" },
  { id: 41, area: "京都 / 市郊", type: "food", name: "清水順正 Okabe 家", hours: "10:30–17:00", location: "清水寺參道周邊", category: "午餐", notes: "庭園氛圍極佳的湯豆腐定食，建議事先網路預約避開清水寺中午人潮。", icon: "fa-leaf", color: "bg-green-100 text-green-600", mapQuery: "清水順正 おかべ家 京都府京都市東山区清水2丁目239" },
  { id: 42, area: "京都 / 市郊", type: "food", name: "京都勝牛 (京都站前店)", hours: "11:00–22:00", location: "京都車站中央口對面", category: "晚餐", notes: "經典和牛炸牛排定食。吃完剛好去京都車站買伴手禮，直接搭新幹線回名古屋。", icon: "fa-utensils", color: "bg-orange-100 text-orange-600", mapQuery: "牛カツ京都勝牛 京都駅前店 京都府京都市下京区真苧屋町211" },
  { id: 43, area: "京都 / 市郊", type: "food", name: "東洋亭 (京都 Porta店)", hours: "11:00–22:00", location: "京都車站地下街 Porta", category: "晚餐", notes: "百年洋食老店！招牌是「鋁箔紙包漢堡排」與「冰鎮番茄沙拉」。若不想吃炸牛排，這家是完美備案。", icon: "fa-hamburger", color: "bg-red-100 text-red-600", mapQuery: "東洋亭 京都ポルタ店 京都府京都市下京区烏丸通塩小路下ル東塩小路町902" },
  { id: 44, area: "京都 / 市郊", type: "food", name: "祢ざめ家 (Nezameya)", hours: "10:00–17:30", location: "伏見稻荷大社旁", category: "小吃 / 午餐", notes: "近 500 年歷史的老店。來伏見稻荷必吃吸滿高湯的豆皮壽司 (稻荷壽司)，走完鳥居吃幾顆剛好。", icon: "fa-box-open", color: "bg-amber-100 text-amber-600", mapQuery: "祢ざめ家 京都府京都市伏見区深草稲荷御前町82-1" },
  { id: 45, area: "京都 / 市郊", type: "food", name: "GOKAGO 抹茶拿鐵", hours: "10:00–18:00", location: "清水寺/祇園周邊", category: "飲品", notes: "網美風現刷宇治抹茶拿鐵加冰淇淋，是漫步清水寺與祇園時消暑的最佳聖品。", icon: "fa-mug-hot", color: "bg-green-100 text-green-800", mapQuery: "GOKAGO 京都府京都市東山区星野町88" },
  { id: 46, area: "京都 / 市郊", type: "food", name: "矢場味噌豬排", hours: "11:00–21:00", location: "長島三井 Outlet 內", category: "午餐", notes: "Outlet 逛累了就來吃名古屋代表味。招牌草鞋特大豬排淋上紅味噌醬，甜鹹濃意。", icon: "fa-piggy-bank", color: "bg-rose-100 text-rose-700", mapQuery: "矢場とん ジャズドリーム長島店 三重県桑名市長島町浦安368" },
  { id: 47, area: "京都 / 市郊", type: "food", name: "桂新堂 蝦仙貝之里", hours: "08:00–20:00 (依機場規定)", location: "中部國際機場 4 樓", category: "伴手禮", notes: "體積大但極輕，直接當手提行李上機，完美保留你的 46kg 托運額度裝其他重物！", icon: "fa-gift", color: "bg-blue-100 text-blue-500", mapQuery: "えびせんべいの里 中部国際空港店 愛知県常滑市セントレア1-1" },
  { id: 48, area: "名站區", type: "attraction", name: "VIA INN 名古屋站前椿町", hours: "Check-in 15:00 / Check-out 10:00", location: "太閤通口（新幹線口）步行 5 分鐘", transport: "名古屋站新幹線口", notes: "本次旅程的大本營，鄰近車站、Bic Camera 與 ESCA 地下街，採買極為方便。", icon: "fa-hotel", color: "bg-blue-100 text-blue-600", mapQuery: "ヴィアイン名古屋駅前椿町" }
];
