// Currency Calculator Logic
const rateInput = document.getElementById("exchangeRate");
const twdInput = document.getElementById("inputTWD");
const jpyInput = document.getElementById("inputJPY");
const displayRateText = document.getElementById("displayRateText");

// 匯率方向：1 JPY = X TWD
function updateCalc(source) {
  const rate = parseFloat(rateInput.value) || 0;
  displayRateText.innerText = rate;

  if (source === "jpy") {
    // 輸入日幣 → 計算台幣
    const jpy = parseFloat(jpyInput.value);
    if (!isNaN(jpy)) {
      twdInput.value = (jpy * rate).toFixed(0);
    } else {
      twdInput.value = "";
    }
  } else if (source === "twd") {
    // 輸入台幣 → 計算日幣
    const twd = parseFloat(twdInput.value);
    if (!isNaN(twd) && rate > 0) {
      jpyInput.value = (twd / rate).toFixed(0);
    } else {
      jpyInput.value = "";
    }
  } else if (source === "rate") {
    // 匯率變更時以日幣為伸手重新計算
    if (jpyInput.value) {
      const jpy = parseFloat(jpyInput.value);
      twdInput.value = (jpy * rate).toFixed(0);
    }
  }
}

if (rateInput) rateInput.addEventListener("input", () => updateCalc("rate"));
if (twdInput) twdInput.addEventListener("input", () => updateCalc("twd"));
if (jpyInput) jpyInput.addEventListener("input", () => updateCalc("jpy"));

const itineraryData = [
  {
    day: 1,
    date: "7/01 (三)",
    title: "Day 1: 紅眼抵達，特色早餐與飛驒牛衝刺",
    focus: "客美多早餐、大須商店街、馬喰一代飛驒牛、美登利壽司",
    logistics: "樂桃 MM722 (02:45 TPE ➔ 06:20 NGO)，名鐵 μ-SKY 至名古屋站（28 分鐘，1,250 日圓）",
    meals: "早餐：客美多咖啡<br>午餐：飛驒牛一頭家 馬喰一代（名古屋WEST店）商業午餐<br>晚餐：梅丘壽司美登利",
    warnings: "紅眼班機體力負荷大，建議下午 15:30 準時回飯店 Check-in 休息。平日馬喰一代極易客滿，強烈建議出發前一個月上網預約！大須商店街多數店家 10:30 後才營業。",
    details: [
      { time: "06:20", icon: "🛬", title: "抵達中部國際機場", desc: "樂桃 MM722 降落。搭名鐵 μ-SKY 特急直達名古屋站（約 28 分鐘）。" },
      { time: "08:00", icon: "🏨", title: "VIA INN 寄放行李", desc: "先至飯店前台寄放行李，輕裝出發。" },
      { time: "08:30", icon: "☕", title: "早餐：客美多咖啡", desc: "點咖啡送烤吐司與水煮蛋，<strong>必加小倉紅豆泥</strong>。體驗名古屋特色 Morning Service 並稍作休息。" },
      { time: "10:30", icon: "⛩️", title: "大須商店街尋寶", desc: "店家陸續開門。逛古著、動漫週邊、電子零件商場與各式特色小吃。" },
      { time: "13:30", icon: "🥩", title: "午餐：馬喰一代 名古屋WEST", desc: "<strong>必吃：</strong>馬喰商業午餐、炙燒和牛握壽司。晚點吃剛好避開上班族午休人潮。<strong>請務必事先預約！</strong>" },
      { time: "15:30", icon: "🛏️", title: "飯店 Check-in 補眠", desc: "非常重要！徹底洗澡並恢復紅眼航班體力，為接下來五天蓄積能量。" },
      { time: "18:30", icon: "🍣", title: "晚餐：梅丘壽司美登利", desc: "位於 JR Gate Tower 12 樓，吃飽後可直接在車站周邊或地下街熟悉環境與簡單採買。" }
    ]
  },
  {
    day: 2, 
    date: "7/02 (四)",
    title: "Day 2: 吉卜力沉浸一日遊 ＆ 辛辣之夜",
    focus: "吉卜力大倉庫全日、味仙台灣拉麵、山將炸雞翅",
    logistics: "名古屋市營地下鐵至藤が丘，轉乘 Linimo 至愛・地球博紀念公園",
    meals: "午餐：吉卜力園區周邊<br>晚餐：味仙拉麵（台灣拉麵）<br>宵夜：世界的山將炸雞翅",
    warnings: "吉卜力大倉庫門票須提前於官網預購特定時段。園區步行量大，建議穿著舒適運動鞋。味仙拉麵極度重口味，安排在回飯店前吃最適合。",
    details: [
      { time: "09:30", icon: "🚇", title: "出發吉卜力公園", desc: "睡飽後出發，地下鐵東山線轉 Linimo 至愛・地球博紀念公園。" },
      { time: "10:30", icon: "🌳", title: "戶外園區漫遊", desc: "悠閒順遊青春之丘、動動力森林或魔女之谷等戶外區域，拍攝各類場景。" },
      { time: "14:00", icon: "🏠", title: "吉卜力大倉庫", desc: "進入全室內展區，拍攝無臉男、貓巴士等經典場景。出口商店採購限定紀念品。" },
      { time: "18:00", icon: "🚆", title: "返回名古屋市區", desc: "搭車返回名古屋車站商圈。" },
      { time: "19:00", icon: "🌶️", title: "晚餐：味仙拉麵", desc: "吃大蒜辣椒爆炒的<strong>台灣拉麵</strong>！重口味且爆汗，吃完剛好回飯店洗澡休息。" },
      { time: "21:30", icon: "🍗", title: "宵夜：世界的山將", desc: "外帶極度酥脆、胡椒嗆辣的<strong>炸雞翅手羽先</strong>回 VIA INN 配飲料享用。" }
    ]
  },
  {
    day: 3, 
    date: "7/03 (五)",
    title: "Day 3: 京都避暑順坡戰術",
    focus: "伏見稻荷、計程車省力動線、清水寺順坡而下、京都勝牛",
    logistics: "東海道新幹線（名古屋 ➔ 京都），京阪本線轉計程車至清水寺",
    meals: "早餐：千壽炸蝦飯糰（車上）<br>午餐：清水順正 Okabe家 湯豆腐<br>晚餐：京都勝牛炸牛排",
    warnings: "京都夏季極度悶熱。強烈建議從伏見稻荷搭京阪本線至清水五條後，花點小錢搭計程車上山，避開夏日爬坡地獄。",
    details: [
      { time: "07:30", icon: "🍙", title: "早餐：千壽炸蝦飯糰", desc: "在名古屋車站買好一口大小的<strong>炸蝦飯糰</strong>，搭乘新幹線當早餐。" },
      { time: "08:30", icon: "⛩️", title: "伏見稻荷大社", desc: "<strong>趁清晨氣溫低且無人潮時攀爬千本鳥居。</strong>光線好且幾乎包場。" },
      { time: "11:30", icon: "🚕", title: "神級避暑動線（轉乘）", desc: "搭「京阪本線」至「清水五條站」，出站直接<strong>攔計程車</strong>至清水寺上方的松原通或五條坂（車資約 1000 多日圓）。" },
      { time: "12:00", icon: "🏯", title: "清水寺 & 午餐", desc: "享用<strong>清水順正 Okabe家 湯豆腐</strong>定食，隨後進入清水寺參拜。" },
      { time: "13:30", icon: "🚶", title: "順坡輕鬆漫步", desc: "一路「往下坡走」完美省力：三年坂 ➔ 二年坂 ➔ 八坂神社 ➔ 祇園，順道吃冰消暑。" },
      { time: "17:30", icon: "🥩", title: "晚餐：京都勝牛", desc: "京都站前店享用人氣<strong>炸牛排定食</strong>。隨後搭新幹線返回名古屋飯店。" }
    ]
  },
  {
    day: 4, 
    date: "7/04 (六)",
    title: "Day 4: 長島 Outlet 爆買 ＆ 榮商圈浪漫夜景",
    focus: "三井 Outlet 46kg 發揮、和牛たんじ、綠洲 21 夜景",
    logistics: "名鐵巴士中心搭乘直達高速巴士前往「長島溫泉」（約 50 分鐘）",
    meals: "午餐：矢場味噌豬排（Outlet美食街）<br>晚餐：和牛たんじ 限時100分燒肉吃到飽",
    warnings: "Outlet 巴士班次固定，建議先查詢回程時刻表。飯店西口到東口巴士中心需預留 15 分鐘步行時間。",
    details: [
      { time: "08:45", icon: "🚶", title: "提早穿越車站", desc: "從太閤通口（西口）徒步穿越車站前往櫻通口（東口）的名鐵巴士中心。" },
      { time: "10:00", icon: "🚌", title: "前往長島三井 Outlet", desc: "搭乘直達巴士。抵達後先下載地圖，鎖定目標品牌大採購。" },
      { time: "12:30", icon: "🍱", title: "午餐：矢場味噌豬排", desc: "Outlet 美食街享用招牌<strong>草鞋特大豬排淋紅味噌醬</strong>，名古屋代表味。" },
      { time: "16:30", icon: "🧳", title: "返回飯店卸貨", desc: "回到名古屋後，務必先將戰利品放回 VIA INN，<strong>輕裝</strong>前往榮商圈。" },
      { time: "18:00", icon: "🔥", title: "晚餐：和牛たんじ", desc: "（名古屋榮錦店）入座後集中火力狂點：厚切仙台牛舌、和牛炙燒大腹肉壽司。" },
      { time: "20:00", icon: "🌃", title: "綠洲 21 浪漫夜景", desc: "吃飽散步至 Oasis 21，登上頂樓「水之宇宙船」，以名古屋電視塔為背景拍下絕美夜景。" }
    ]
  },
  {
    day: 5, 
    date: "7/05 (日)",
    title: "Day 5: 雙城記（名古屋城）與神級鰻魚飯",
    focus: "名古屋城本丸御殿、麵家獅子丸、熱田蓬萊軒三吃、最後補貨",
    logistics: "地下鐵名城線（名古屋城）、龜島站（獅子丸）、神宮西站（熱田蓬萊軒）",
    meals: "午餐：麵家 獅子丸（泡系拉麵）<br>晚餐：熱田蓬萊軒 鰻魚飯三吃",
    warnings: "<strong>週日熱田蓬萊軒及獅子丸皆可能有排隊人潮。</strong>熱田蓬萊軒請務必提早在 14:30 左右去排隊登記晚間號碼牌。",
    details: [
      { time: "09:00", icon: "🏯", title: "名古屋城 & 本丸御殿", desc: "早上前往名古屋城。主攻耗資百億全木造復原的<strong>「本丸御殿」</strong>，內部極其華麗且有冷氣避暑。" },
      { time: "12:00", icon: "🍜", title: "午餐：麵家 獅子丸", desc: "搭車回名站周邊（龜島方向）排隊。享用洋風泡系白湯拉麵，湯頭細緻綿密負擔小。" },
      { time: "14:30", icon: "🎫", title: "熱田蓬萊軒抽號碼牌", desc: "<strong>極重要！</strong>先到神宮店門口登記拿晚上的號碼牌，完美抵銷排隊時間。" },
      { time: "15:00", icon: "⛩️", title: "熱田神宮參拜", desc: "利用等位時間逛神宮，感受莊嚴氛圍，於巨大鳥居前合影。" },
      { time: "17:30", icon: "🍱", title: "晚餐：熱田蓬萊軒", desc: "<strong>神級鰻魚飯三吃：</strong>①原味 ②加薬味（芥末、海苔、蔥花）③加高湯茶泡飯。備長炭烤外脆內嫩。" },
      { time: "19:30", icon: "🛒", title: "車站周邊最後補貨", desc: "回飯店西口 SUGI藥局 / 唐吉訶德採買液體類等高重量物資，<strong>充分利用 46kg 額度！</strong>" }
    ]
  },
  {
    day: 6, 
    date: "7/06 (一)",
    title: "Day 6: 機場採買與滿載而歸",
    focus: "桂新堂蝦仙貝、CI 155 華航回程",
    logistics: "名鐵 μ-SKY 至中部國際機場（約 28 分鐘，1,250 日圓）。航班：CI 155 (12:20 NGO ➔ 14:30 TPE)",
    meals: "早餐：超商或自由安排<br>午餐：機場 4F Sky Town 美食街（最後日本美食）",
    warnings: "請預留充足時間辦理 46kg 行李託運，建議 09:00 退房。蝦仙貝之里體積大重量輕，不佔託運額度！",
    details: [
      { time: "09:00", icon: "🧳", title: "退房與搭乘名鐵", desc: "睡到自然醒。帶上 46kg 戰利品，搭乘名鐵 μ-SKY 前往中部國際機場。" },
      { time: "10:00", icon: "🛂", title: "託運 & 機場美食", desc: "完成 CI155 報到，辦理託運後前往 <strong>4F Sky Town 美食街</strong>享用最後一頓日本美食。" },
      { time: "11:00", icon: "🛍️", title: "必買：桂新堂 蝦仙貝之里", desc: "<strong>體積大重量輕，不佔託運額度！</strong>可放手提行李上機。另外別忘了 Royce 生巧克力（需冷藏）。" },
      { time: "12:20", icon: "✈️", title: "起飛返台 CI 155", desc: "滿載而歸，結束完美的名古屋美食與血拚之旅！預計 14:30 抵達桃園機場。" }
    ]
  }
];

// Itinerary Rendering Logic
let currentDayIndex = 0;

function renderDayTabs() {
  const tabsContainer = document.getElementById("dayTabs");
  tabsContainer.innerHTML = "";

  itineraryData.forEach((day, index) => {
    const isSelected = index === currentDayIndex;
    const btn = document.createElement("button");
    // Updated Button Styling
    btn.className = `flex-shrink-0 px-6 py-4 rounded-xl text-left transition-all duration-200 border-2 min-w-[120px] ${
      isSelected
        ? "bg-rose-500 border-rose-500 text-white shadow-lg transform -translate-y-1"
        : "bg-white border-stone-200 text-stone-500 hover:border-rose-300 hover:text-rose-500"
    }`;
    btn.innerHTML = `
            <span class="block text-xs font-bold uppercase opacity-80 mb-1">Day ${day.day}</span>
            <span class="block text-sm font-bold truncate">${day.date.split(" ")[0]}</span>
        `;
    btn.onclick = () => {
      currentDayIndex = index;
      renderDayTabs();
      renderItineraryContent();
    };
    tabsContainer.appendChild(btn);
  });
}

function renderItineraryContent() {
  const contentContainer = document.getElementById("itineraryContent");
  const data = itineraryData[currentDayIndex];

  // 標題區塊
  let html = `
    <div class="p-6 sm:p-8 bg-gradient-to-r from-stone-50 to-white border-b border-stone-100">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-2xl font-bold text-stone-900 mb-2">${data.title}</h3>
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
            ✨ 今日重點：${data.focus}
          </span>
        </div>
        <div class="hidden sm:block text-5xl opacity-20 filter grayscale transform rotate-12">
          ${currentDayIndex === 0 ? "✈️" : currentDayIndex === 5 ? "🛍️" : "🇯🇵"}
        </div>
      </div>
    </div>
    <div class="p-6 sm:p-10">
      <div class="relative pl-10 space-y-8">
  `;

  // 時間軸內容
  data.details.forEach((item, index) => {
    const isLast = index === data.details.length - 1;
    html += `
      <div class="relative">
        ${!isLast ? `<div class="absolute w-0.5 bg-stone-200 z-0" style="left:-2.1rem;top:2.4rem;bottom:-2rem;"></div>` : ""}
        <div class="absolute w-9 h-9 rounded-full bg-white border-2 border-stone-300 z-10 flex items-center justify-center text-base shadow-sm" style="left:-2.75rem;top:0;">${item.icon}</div>
        <div class="space-y-1.5">
          <span class="text-xs font-mono font-bold text-rose-500 tracking-wider">${item.time}</span>
          <h4 class="font-bold text-stone-900">${item.title}</h4>
          <div class="text-stone-500 text-sm leading-relaxed bg-stone-50 rounded-xl p-3 border border-stone-100 hover:bg-white hover:shadow-sm transition-all duration-200">${item.desc}</div>
        </div>
      </div>
    `;
  });

  // footer
  const footerParts = [];
  if (data.logistics) {
    footerParts.push(`
      <div class="flex items-start gap-3 col-span-2 bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
        <span class="text-lg">🚆</span>
        <div><span class="font-bold text-blue-800 text-xs block mb-0.5">交通 / 物流</span>
        <span class="text-blue-700 text-sm">${data.logistics}</span></div>
      </div>`);
  }
  if (data.meals) {
    footerParts.push(`
      <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-2 flex items-center text-sm"><span class="mr-2">🍽️</span> 餐飲規劃</h4>
        <p class="text-emerald-700 text-sm leading-relaxed">${data.meals}</p>
      </div>`);
  }
  if (data.warnings) {
    footerParts.push(`
      <div class="bg-orange-50 p-4 rounded-xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2 flex items-center text-sm"><span class="mr-2">💡</span> 注意事項</h4>
        <p class="text-orange-700 text-sm">${data.warnings}</p>
      </div>`);
  }

  if (footerParts.length) {
    html += `</div></div><div class="border-t border-stone-100 px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">${footerParts.join("")}</div>`;
  } else {
    html += `</div></div>`;
  }

  contentContainer.innerHTML = html;
}

// Scroll helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Address Copy
function copyAddress() {
  const address =
    "VIA INN 名古屋站前椿町\n\n〒453-0015 愛知県名古屋市中村区椿町7-23\nhttps://maps.app.goo.gl/yQ3q89xQYq89xQYq8";
  const el = document.createElement("textarea");
  el.value = address;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("✅ 地址與地圖連結已複製！\n\n" + address);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderDayTabs();
  renderItineraryContent();
  if (document.getElementById('attractions-grid')) {
      renderCards();
  }
});

// Back to Top Logic
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "translate-y-10");
  } else {
    backToTopBtn.classList.add("opacity-0", "translate-y-10");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 🗺️ Attractions & Food Gallery Logic
// ==========================================
const db = [
    // 區域 1：名站區 (景點)
    { id: 1, area: "名站區", type: "attraction", name: "Bic Camera (玩具模型/電器)", hours: "10:00–21:00", location: "名站西口 (太閤通口)", transport: "從飯店步行 2 分鐘", notes: "買電器與藥妝首選！樓上擁有極大的玩具模型與鋼普拉區，距離 VIA INN 飯店極近。", icon: "fa-camera", color: "bg-purple-100 text-purple-600", mapQuery: "ビックカメラ 名古屋駅西店" },
    { id: 2, area: "名站區", type: "attraction", name: "Animate & 羅針盤 (動漫尋寶)", hours: "10:00–21:00 (依店鋪不同)", location: "名站西口周邊", transport: "從飯店步行 3 分鐘", notes: "動漫周邊、同人誌與二手公仔的集散地，建議利用每天早晚的零碎時間去挖寶。", icon: "fa-gamepad", color: "bg-purple-100 text-purple-600", mapQuery: "アニメイト名古屋" },
    { id: 3, area: "名站區", type: "attraction", name: "JR Gate Tower 雙塔 & 地下街", hours: "10:00–20:00", location: "名站東口 (櫻通口)", transport: "穿過車站大廳即達", notes: "結合 Unimall 等超長地下街，日系服飾、雜貨天堂。Gate Tower 15樓有免費的高空夜景可以看！", icon: "fa-building", color: "bg-blue-100 text-blue-600", mapQuery: "JRゲートタワー" },
    { id: 4, area: "名站區", type: "attraction", name: "名鐵百貨 (Nana 醬巨型人偶)", hours: "10:00–20:00", location: "名站東口 (櫻通口)", transport: "車站外步行 3 分鐘", notes: "名古屋站最具代表性的打卡地標「Nana醬人形」，她經常會換上各種奇特的服裝。", icon: "fa-person-dress", color: "bg-indigo-100 text-indigo-600", mapQuery: "名鉄百貨店 本店 ナナちゃん人形" },

    // 區域 1：名站區 (美食)
    { id: 5, area: "名站區", type: "food", name: "馬喰一代 (WEST店 - 炭火燒肉)", hours: "11:30–15:00 / 17:00–23:00", location: "名站西口步行 3 分鐘", category: "午餐 (高CP值) / 晚餐", notes: "主打【極致炭火燒肉】！想吃頂級 A5 飛驒牛燒肉請選這間，平日商業午餐極度划算，強烈建議出發前一個月上網預約。", icon: "fa-fire-burner", color: "bg-red-100 text-red-600", mapQuery: "飛騨牛一頭家 馬喰一代 名古屋WEST" },
    { id: 6, area: "名站區", type: "food", name: "馬喰一代 (名古屋店 - 壽喜燒)", hours: "11:30–15:00 / 17:00–23:00", location: "名站東口步行 3 分鐘 (BINO 5F)", category: "午餐 / 晚餐", notes: "主打【關西風壽喜燒 / 涮涮鍋】！想體驗醬汁濃郁煎烤的和牛，或是清爽的高湯涮肉請選這間。環境優雅，同樣需預約。", icon: "fa-bowl-food", color: "bg-orange-100 text-orange-600", mapQuery: "飛騨牛一頭家 馬喰一代 名古屋 寿喜焼" },
    { id: 7, area: "名站區", type: "food", name: "梅丘壽司美登利", hours: "11:00–22:00", location: "JR Gate Tower 12 樓", category: "午餐 / 晚餐", notes: "東京來的排隊霸主！主打巨無霸浮誇握壽司，星鰻一整條。預算約 4500 日圓可吃極好。抵達12樓請務必【先抽號碼牌】再去逛街。", icon: "fa-fish", color: "bg-orange-100 text-orange-600", mapQuery: "梅丘寿司の美登利 JRゲートタワー店" },
    { id: 8, area: "名站區", type: "food", name: "麵家 獅子丸", hours: "11:00–14:30 / 17:30–21:30", location: "地鐵「龜島站」步行 2 分鐘", category: "午餐 / 晚餐", notes: "Tabelog百名店。洋風泡系白湯拉麵，湯頭細緻綿密如卡布奇諾。無法預約，開門前20分鐘就會排隊。", icon: "fa-bowl-food", color: "bg-amber-100 text-amber-600", mapQuery: "麺家 獅子丸 名古屋" },
    { id: 9, area: "名站區", type: "food", name: "味仙拉麵 (驛麵通 / 大名古屋大廈店)", hours: "11:00–22:00", location: "名古屋車站內 / 東口對面", category: "午餐 / 晚餐 / 宵夜", notes: "大蒜與辣椒爆炒的湯頭，極度重口味、爆汗過癮。非常適合當作一整天行程結束、回飯店洗澡前吃的一餐。", icon: "fa-pepper-hot", color: "bg-red-100 text-red-600", mapQuery: "味仙 JR名古屋駅店" },
    { id: 10, area: "名站區", type: "food", name: "燕子麵包＆Milk (Tsubame Bread)", hours: "08:00–20:00", location: "名站 4 丁目 (東口步行 5 分鐘)", category: "早餐 / 午餐 / 下午茶", notes: "天然酵母吐司專賣！IG爆紅的【爆漿起司厚蛋三明治】早上 11:00 後才開賣。早上8-11點提供的是點飲料送吐司的早餐。", icon: "fa-bread-slice", color: "bg-yellow-100 text-yellow-600", mapQuery: "つばめパン＆Milk 名駅店" },
    { id: 11, area: "名站區", type: "food", name: "ÉCHIRÉ 艾許奶油專賣店", hours: "10:00–20:00", location: "JR 名古屋高島屋 1 樓", category: "甜點 / 伴手禮", notes: "法國奶油界LV！必買邊緣酥脆的「費南雪」與「瑪德蓮」，以及名古屋限定奶油夾心餅乾。", icon: "fa-cookie", color: "bg-amber-100 text-amber-700", mapQuery: "ÉCHIRÉ PÂTISSERIE AU BEURRE JR名古屋タカシマヤ店" },
    { id: 12, area: "名站區", type: "food", name: "山本屋本店 (味噌煮込みうどん)", hours: "11:00–22:00", location: "西口 ESCA 地下街", category: "午/晚餐", notes: "正宗名古屋紅味噌烏龍麵！注意：它的特色是麵條「極度有嚼勁（生麵煮法）」，湯頭濃郁非常下飯。", icon: "fa-bowl-rice", color: "bg-orange-100 text-orange-700", mapQuery: "山本屋本店 エスカ店" },
    { id: 13, area: "名站區", type: "food", name: "世界的山將 / 風來坊", hours: "17:00–24:00 (依店鋪不同)", location: "名站周邊多間分店", category: "宵夜", notes: "宵夜必買！極度酥脆、胡椒嗆辣的炸雞翅(手羽先)，帶回 VIA INN 飯店配啤酒的完美組合。", icon: "fa-drumstick-bite", color: "bg-orange-100 text-orange-700", mapQuery: "世界の山ちゃん 名駅西口店" },
    { id: 14, area: "名站區", type: "food", name: "客美多咖啡 (Komeda) / 喫茶 Riyon", hours: "07:00–21:00", location: "西口 ESCA 地下街 / 車站周邊", category: "早餐", notes: "點咖啡免費送烤吐司與紅豆泥，體驗最道地的名古屋 Morning Service 早餐文化，順便補眠。", icon: "fa-mug-hot", color: "bg-stone-100 text-stone-600", mapQuery: "コメダ珈琲店 エスカ店" },
    { id: 15, area: "名站區", type: "food", name: "コンパル (Konparu) 炸蝦三明治", hours: "08:00–20:00", location: "名站地下街 (メイチカ等)", category: "輕食 / 早餐", notes: "老字號喫茶店的神級「炸蝦三明治」，塔塔醬與現炸大蝦完美結合，咬下去會爆汁，也可外帶。", icon: "fa-sandwich", color: "bg-yellow-100 text-yellow-700", mapQuery: "コンパル メイチカ店" },
    { id: 16, area: "名站區", type: "food", name: "ぴよりん (Piyorin 小雞蛋糕)", hours: "10:00–20:00", location: "名古屋車站中央通道", category: "甜點", notes: "名站限定的超萌小雞布丁蛋糕。因為極度脆弱，可以試著挑戰把它「無傷」提回飯店吃！", icon: "fa-cake-candles", color: "bg-pink-100 text-pink-500", mapQuery: "ぴよりんSTATION カフェジャンシアーヌ" },
    { id: 17, area: "名站區", type: "food", name: "千壽 炸蝦飯糰", hours: "08:00–20:00", location: "西口 ESCA 地下街", category: "早餐 / 外帶", notes: "一口大小的美味炸蝦飯糰。非常適合早上買好帶上新幹線 (去京都時) 當早餐吃！", icon: "fa-bowl-rice", color: "bg-rose-100 text-rose-600", mapQuery: "めいふつ 天むす 千寿 エスカ店" },

    // 區域 2：大須 / 榮商圈
    { id: 18, area: "大須 / 榮商圈", type: "attraction", name: "大須商店街 (Mandarake、Tsukumo)", hours: "10:30–19:00", location: "地鐵「大須觀音站」或「上前津站」", transport: "名站搭東山線至伏見轉鶴舞線", notes: "中部的秋葉原！Tsukumo、Dospara有高階PC零件；Mandarake、駿河屋、Joshin是尋找絕版公仔與模型的終極聖地！", icon: "fa-store", color: "bg-teal-100 text-teal-600", mapQuery: "大須商店街" },
    { id: 19, area: "大須 / 榮商圈", type: "attraction", name: "榮商圈百貨 (寶可夢中心 / JUMP SHOP)", hours: "10:00–20:00", location: "地鐵「矢場町站」或「榮站」", transport: "從大須步行即可達", notes: "松坂屋頂樓有超巨大的寶可夢中心；PARCO有潮牌與 JUMP SHOP 官方周邊。", icon: "fa-bag-shopping", color: "bg-pink-100 text-pink-600", mapQuery: "松坂屋名古屋店 ポケモンセンター" },
    { id: 20, area: "大須 / 榮商圈", type: "attraction", name: "綠洲 21 (Oasis 21) & 名古屋電視塔", hours: "水之宇宙船開放至 21:00", location: "地鐵「榮站」直結", transport: "榮商圈內步行", notes: "榮商圈必看浪漫都市夜景，以電視塔為背景的玻璃水池是經典打卡點。吃飽飯後散步極佳。", icon: "fa-tower-observation", color: "bg-sky-100 text-sky-600", mapQuery: "オアシス21" },
    { id: 21, area: "大須 / 榮商圈", type: "food", name: "和牛たんじ (榮錦店)", hours: "17:00–23:00", location: "榮商圈 (錦三丁目)", category: "晚餐", notes: "限時 100 分鐘的【厚切仙台牛舌】與和牛大腹肉壽司吃到飽。高人氣名店，必須上網預約！", icon: "fa-cow", color: "bg-red-100 text-red-700", mapQuery: "和牛たんじ 名古屋栄錦店" },
    { id: 22, area: "大須 / 榮商圈", type: "food", name: "にぎりの徳兵衛 (Oasis 21 店)", hours: "11:00–22:00", location: "榮商圈綠洲 21 地下一樓", category: "晚餐 / 午餐", notes: "動線極佳，看完夜景可直接下樓吃。平板輕鬆點餐，食材精緻，是逛街後毫無壓力的中高級迴轉壽司。", icon: "fa-plate-wheat", color: "bg-blue-100 text-blue-600", mapQuery: "にぎりの徳兵衛 オアシス21店" },
    { id: 23, area: "大須 / 榮商圈", type: "food", name: "やきとり千亀 (Yakitori Sengame)", hours: "17:00–24:00 (週日休)", location: "榮站步行約 7 分鐘巷弄內", category: "晚餐 / 宵夜", notes: "Tabelog燒鳥百名店！使用高級名古屋交趾雞，炭火烤功出神入化。必點爆漿的【提燈】。極度難訂位。", icon: "fa-fire", color: "bg-orange-100 text-orange-600", mapQuery: "やきとり千亀 名古屋" },
    { id: 24, area: "大須 / 榮商圈", type: "food", name: "いば昇 (Ibasho) 鰻魚飯", hours: "11:00–14:30 / 16:00–20:00", location: "榮商圈 (錦本店)", category: "午 / 晚餐", notes: "榮商圈的百年關西風脆皮鰻魚飯老店。如果你不想去熱田神宮排蓬萊軒，這家是逛街時完美的備案。", icon: "fa-fish-fins", color: "bg-amber-100 text-amber-700", mapQuery: "いば昇 錦本店" },
    { id: 25, area: "大須 / 榮商圈", type: "food", name: "HARBS 榮本店", hours: "11:00–20:00", location: "榮站步行 3 分鐘", category: "甜點 / 下午茶", notes: "台灣人最愛的水果千層蛋糕「創始總店」，來這裡吃一塊招牌蛋糕，絕對是最高級的下午茶享受。", icon: "fa-cake-candles", color: "bg-pink-100 text-pink-500", mapQuery: "HARBS 栄本店" },
    { id: 26, area: "大須 / 榮商圈", type: "food", name: "大須街頭小吃 (糰子/炸雞/蒙布朗)", hours: "11:00–18:00 (配合商店街)", location: "大須商店街內", category: "小吃", notes: "新雀本店(烤糰子)、李さんの台湾名物屋(人氣排隊唐揚雞)、和栗モンブラン専門店 栗りん(現擠瀑布栗子蒙布朗)。", icon: "fa-ice-cream", color: "bg-pink-100 text-pink-600", mapQuery: "新雀本店 大須" },

    // 區域 3：名古屋城區
    { id: 27, area: "名古屋城區", type: "attraction", name: "名古屋城 ＆ 本丸御殿", hours: "09:00–16:30 (最後入場 16:00)", location: "地鐵「名古屋城站」7 號出口", transport: "名站搭櫻通線轉名城線", notes: "天守閣因耐震無法進入，但耗資百億全木造復原的「本丸御殿」極其華麗，室內冷氣充足，是夏日避暑絕佳景點。", icon: "fa-chess-rook", color: "bg-slate-200 text-slate-700", mapQuery: "名古屋城 本丸御殿" },
    { id: 28, area: "名古屋城區", type: "attraction", name: "德川園 ＆ 德川美術館", hours: "09:30–17:30 (週一休)", location: "名古屋城東側", transport: "觀光巴士 Me～guru", notes: "池泉迴遊式大名庭園。如果逛完名古屋城還有時間，可以來欣賞精緻的日式造景，綠意盎然且非常幽靜。", icon: "fa-tree", color: "bg-green-100 text-green-700", mapQuery: "徳川園" },
    { id: 29, area: "名古屋城區", type: "food", name: "金鯱橫丁 (義直區 / 宗春區)", hours: "10:30–17:30 (依店家不同)", location: "名古屋城正門與東門外", category: "美食街 / 小吃", notes: "城外的仿古美食街。義直區主打名古屋傳統老店（如矢場豬排）；宗春區偏向現代新銳餐廳與甜點。", icon: "fa-store", color: "bg-amber-100 text-amber-700", mapQuery: "金シャチ横丁" },
    { id: 30, area: "名古屋城區", type: "food", name: "備長鰻魚飯 (金鯱橫丁店)", hours: "10:30–15:30 / 17:00–20:00", location: "金鯱橫丁內", category: "午餐 / 晚餐", notes: "全程無蒸煮、直火強烤，表皮極度焦脆！如果沒排到熱田蓬萊軒，逛完名古屋城直接來吃這家絕佳。", icon: "fa-fish-fins", color: "bg-amber-100 text-amber-800", mapQuery: "ひつまぶし名古屋備長 金シャチ横丁店" },

    // 區域 4：熱田神宮區
    { id: 31, area: "熱田神宮區", type: "attraction", name: "熱田神宮 ＆ 草薙館", hours: "神宮 24H；草薙館 09:00–16:30", location: "地鐵「熱田神宮傳馬町站」", transport: "搭乘地鐵名城線", notes: "供奉日本三大神器之一「草薙劍」的聖地。境內有千年神木；草薙館可親手體驗武士刀重量。", icon: "fa-torii-gate", color: "bg-green-100 text-green-700", mapQuery: "熱田神宮" },
    { id: 32, area: "熱田神宮區", type: "attraction", name: "白鳥庭園", hours: "09:00–17:00 (週一休)", location: "熱田神宮西側步行 10 分鐘", transport: "從神宮步行即達", notes: "市內最大日式庭園。如果等待鰻魚飯的時間超過兩小時，除了逛神宮，也可散步來這裡喝杯日式抹茶。", icon: "fa-leaf", color: "bg-emerald-100 text-emerald-600", mapQuery: "白鳥庭園" },
    { id: 33, area: "熱田神宮區", type: "food", name: "熱田蓬萊軒 (神宮店)", hours: "11:30–14:30 / 16:30–20:30", location: "熱田神宮南門旁 (步行1分)", category: "午餐 / 晚餐", notes: "150年歷史的神級鰻魚飯三吃！【不接受預約，採現場人工登記】。抵達後務必先拿時間單，再去逛神宮抵銷排隊時間。", icon: "fa-bowl-rice", color: "bg-orange-100 text-orange-800", mapQuery: "あつた蓬莱軒 神宮店" },
    { id: 34, area: "熱田神宮區", type: "food", name: "宮きしめん (宮棊子麵)", hours: "09:00–16:30", location: "熱田神宮森林境內", category: "午餐 / 輕食", notes: "在神木環繞的半露天座位，吃清甜柴魚湯頭的名古屋特色寬扁麵。氣氛極佳且不需大排長龍。", icon: "fa-water", color: "bg-blue-100 text-blue-700", mapQuery: "宮きしめん 神宮店" },
    { id: 35, area: "熱田神宮區", type: "food", name: "きよめ餅總本家 (Kiyome Mochi)", hours: "09:00–18:00", location: "名鐵神宮前站周邊", category: "伴手禮", notes: "熱田神宮最具代表性的名產！雪白的羽二重餅皮包著細緻紅豆泥，可內用搭配抹茶套餐。", icon: "fa-cookie", color: "bg-pink-100 text-pink-600", mapQuery: "きよめ餅総本家" },

    // 區域 5：犬山區
    { id: 36, area: "犬山區", type: "attraction", name: "犬山城 ＆ 三光稻荷神社", hours: "09:00–17:00", location: "名鐵「犬山站」步行約 15 分", transport: "名站搭名鐵特急約 30 分鐘直達", notes: "日本現存最古老的木造國寶天守閣，木製階梯極陡。山腳有著名的「洗錢」池與粉紅愛心繪馬。", icon: "fa-monument", color: "bg-orange-100 text-orange-600", mapQuery: "国宝 犬山城" },
    { id: 37, area: "犬山區", type: "food", name: "犬山城下町老街小吃", hours: "10:00–17:00", location: "犬山城外老街", category: "小吃", notes: "推薦「犬山牛太郎」的A5飛驒牛握壽司，以及塗滿濃郁醬汁現烤的「山田五平餅」。", icon: "fa-burger", color: "bg-red-100 text-red-500", mapQuery: "犬山牛太郎" },

    // 區域 6：京都 / 市郊 / 機場
    { id: 38, area: "京都 / 市郊", type: "attraction", name: "吉卜力公園", hours: "平日 10:00–17:00 (週二休)", location: "愛・地球博紀念公園", transport: "地鐵東山線轉乘 Linimo", notes: "需提前兩個月於官網預購大倉庫等門票。必拍無臉男與貓巴士，建議預留一整天慢慢逛。", icon: "fa-tree", color: "bg-emerald-100 text-emerald-700", mapQuery: "ジブリパーク" },
    { id: 39, area: "京都 / 市郊", type: "attraction", name: "長島三井 Outlet", hours: "10:00–20:00", location: "三重縣", transport: "名鐵巴士中心搭高速巴士直達", notes: "發揮 46kg 行李額度的終極血拚戰場！買完務必先回飯店卸貨再安排後續行程。", icon: "fa-bag-shopping", color: "bg-pink-100 text-pink-600", mapQuery: "三井アウトレットパーク ジャズドリーム長島" },
    { id: 40, area: "京都 / 市郊", type: "attraction", name: "京都 (伏見稻荷 ➔ 清水寺 ➔ 祇園)", hours: "早上 08:30 前抵達伏見稻荷", location: "日本京都", transport: "名古屋搭新幹線至京都 (35分)", notes: "神級避暑動線：伏見稻荷搭「京阪本線」至清水五條後，直接攔計程車至清水寺上方順坡而下。", icon: "fa-train", color: "bg-purple-100 text-purple-600", mapQuery: "清水寺" },
    { id: 41, area: "京都 / 市郊", type: "food", name: "清水順正 Okabe 家", hours: "10:30–17:00", location: "清水寺參道周邊", category: "午餐", notes: "庭園氛圍極佳的湯豆腐定食，建議事先網路預約避開清水寺中午人潮。", icon: "fa-leaf", color: "bg-green-100 text-green-600", mapQuery: "清水順正 おかべ家" },
    { id: 42, area: "京都 / 市郊", type: "food", name: "京都勝牛 (京都站前店)", hours: "11:00–22:00", location: "京都車站中央口對面", category: "晚餐", notes: "經典和牛炸牛排定食。吃完剛好去京都車站買伴手禮，直接搭新幹線回名古屋。", icon: "fa-utensils", color: "bg-orange-100 text-orange-600", mapQuery: "牛カツ京都勝牛 京都駅前" },
    { id: 43, area: "京都 / 市郊", type: "food", name: "東洋亭 (京都 Porta店)", hours: "11:00–22:00", location: "京都車站地下街 Porta", category: "晚餐", notes: "百年洋食老店！招牌是「鋁箔紙包漢堡排」與「冰鎮番茄沙拉」。若不想吃炸牛排，這家是完美備案。", icon: "fa-hamburger", color: "bg-red-100 text-red-600", mapQuery: "東洋亭 京都ポルタ店" },
    { id: 44, area: "京都 / 市郊", type: "food", name: "祢ざめ家 (Nezameya)", hours: "10:00–17:30", location: "伏見稻荷大社旁", category: "小吃 / 午餐", notes: "近 500 年歷史的老店。來伏見稻荷必吃吸滿高湯的豆皮壽司 (稻荷壽司)，走完鳥居吃幾顆剛好。", icon: "fa-box-open", color: "bg-amber-100 text-amber-600", mapQuery: "祢ざめ家" },
    { id: 45, area: "京都 / 市郊", type: "food", name: "GOKAGO 抹茶拿鐵", hours: "10:00–18:00", location: "清水寺/祇園周邊", category: "飲品", notes: "網美風現刷宇治抹茶拿鐵加冰淇淋，是漫步清水寺與祇園時消暑的最佳聖品。", icon: "fa-mug-hot", color: "bg-green-100 text-green-800", mapQuery: "GOKAGO 京都" },
    { id: 46, area: "京都 / 市郊", type: "food", name: "矢場味噌豬排", hours: "11:00–21:00", location: "長島三井 Outlet 內", category: "午餐", notes: "Outlet 逛累了就來吃名古屋代表味。招牌草鞋特大豬排淋上紅味噌醬，甜鹹濃郁。", icon: "fa-piggy-bank", color: "bg-rose-100 text-rose-700", mapQuery: "矢場とん ジャズドリーム長島店" },
    { id: 47, area: "京都 / 市郊", type: "food", name: "桂新堂 蝦仙貝之里", hours: "08:00–20:00 (依機場規定)", location: "中部國際機場 4 樓", category: "伴手禮", notes: "體積大但極輕，直接當手提行李上機，完美保留你的 46kg 托運額度裝其他重物！", icon: "fa-gift", color: "bg-blue-100 text-blue-500", mapQuery: "えびせんべいの里 中部国際空港店" }
];

function renderCards(filter = 'All') {
    const attractionsGrid = document.getElementById('attractions-grid');
    const foodGrid = document.getElementById('food-grid');
    if (!attractionsGrid || !foodGrid) return;
    
    attractionsGrid.innerHTML = '';
    foodGrid.innerHTML = '';

    const filteredData = filter === 'All' ? db : db.filter(item => item.area === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white p-5 rounded-2xl shadow-sm border border-stone-100 cursor-pointer hover:shadow-xl hover:border-stone-200 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4 group";
        card.onclick = () => openModal(item);

        const iconDiv = document.createElement('div');
        iconDiv.className = `w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color} transform group-hover:scale-110 transition-transform duration-300`;
        iconDiv.innerHTML = `<i class="fa-solid ${item.icon} text-2xl"></i>`;

        const contentDiv = document.createElement('div');
        contentDiv.className = "flex-1";
        contentDiv.innerHTML = `
            <div class="text-xs font-bold text-stone-400 mb-1 uppercase tracking-wider">${item.area}</div>
            <h3 class="text-lg font-bold text-stone-800 leading-tight mb-2 group-hover:text-rose-600 transition-colors">${item.name}</h3>
            <p class="text-sm text-stone-500 line-clamp-2">${item.notes}</p>
        `;

        card.appendChild(iconDiv);
        card.appendChild(contentDiv);

        if (item.type === 'attraction') {
            attractionsGrid.appendChild(card);
        } else {
            foodGrid.appendChild(card);
        }
    });

    if(attractionsGrid.innerHTML === '') attractionsGrid.innerHTML = '<p class="text-stone-400 text-sm py-4 col-span-full">此區域目前無景點資料</p>';
    if(foodGrid.innerHTML === '') foodGrid.innerHTML = '<p class="text-stone-400 text-sm py-4 col-span-full">此區域目前無美食資料</p>';
}

function filterByArea(area) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-area') === area) {
            btn.classList.add('active-filter');
            btn.classList.remove('text-stone-600', 'bg-white');
        } else {
            btn.classList.remove('active-filter');
            btn.classList.add('text-stone-600', 'bg-white');
        }
    });
    renderCards(area);
}

function openModal(item) {
    const modalBg = document.getElementById('modal-bg');
    const modalContent = document.getElementById('modal-content');
    const modalBody = document.getElementById('modal-body');
    const exactQuery = item.mapQuery || item.name;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exactQuery)}`;
    
    let extraDetails = '';
    if (item.type === 'attraction') {
        extraDetails = `
            <div class="mb-3 flex"><span class="font-bold text-stone-700 w-20 shrink-0"><i class="fa-regular fa-clock mr-2 text-stone-400"></i>時間:</span> <span class="text-stone-600">${item.hours}</span></div>
            <div class="mb-3 flex"><span class="font-bold text-stone-700 w-20 shrink-0"><i class="fa-solid fa-train mr-2 text-stone-400"></i>交通:</span> <span class="text-stone-600">${item.transport}</span></div>
        `;
    } else {
        extraDetails = `
            <div class="mb-3 flex"><span class="font-bold text-stone-700 w-20 shrink-0"><i class="fa-solid fa-tag mr-2 text-stone-400"></i>分類:</span> <span class="text-rose-600 bg-rose-50 px-2 py-0.5 rounded text-sm font-medium">${item.category}</span></div>
            <div class="mb-3 flex"><span class="font-bold text-stone-700 w-20 shrink-0"><i class="fa-regular fa-clock mr-2 text-stone-400"></i>時間:</span> <span class="text-stone-600">${item.hours}</span></div>
        `;
    }

    modalBody.innerHTML = `
        <div class="flex items-center space-x-4 mb-6">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}">
                <i class="fa-solid ${item.icon} text-2xl"></i>
            </div>
            <div>
                <span class="text-xs font-bold text-rose-500 uppercase tracking-wider bg-rose-50 px-2 py-1 rounded-md mb-1 inline-block">${item.area}</span>
                <h2 class="text-2xl font-extrabold text-stone-900 leading-snug">${item.name}</h2>
            </div>
        </div>
        
        <div class="bg-stone-50 p-5 rounded-2xl mb-6 text-sm border border-stone-100">
            <div class="mb-3 flex"><span class="font-bold text-stone-700 w-20 shrink-0"><i class="fa-solid fa-location-dot mr-2 text-stone-400"></i>地點:</span> <span class="text-stone-600">${item.location}</span></div>
            ${extraDetails}
        </div>

        <div class="mb-8 relative">
            <div class="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
            <h4 class="font-bold text-stone-900 mb-2 flex items-center">專家筆記 <i class="fa-solid fa-pen-to-square text-yellow-500 ml-2"></i></h4>
            <p class="text-stone-600 leading-relaxed bg-yellow-50/50 p-4 rounded-xl border border-yellow-100/50">${item.notes}</p>
        </div>

        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="block w-full bg-stone-900 hover:bg-rose-500 text-white text-center font-bold py-4 rounded-2xl transition-colors shadow-md flex items-center justify-center gap-2 group">
            <i class="fa-solid fa-map-location-dot transform group-hover:scale-110 transition-transform"></i>
            精準開啟 Google Maps
        </a>
    `;
    
    modalBg.classList.remove('hidden');
    void modalBg.offsetWidth; // trigger reflow
    modalBg.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95', 'opacity-0');
    modalContent.classList.add('scale-100', 'opacity-100');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalBg = document.getElementById('modal-bg');
    const modalContent = document.getElementById('modal-content');
    modalBg.classList.add('opacity-0');
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modalBg.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

document.addEventListener('click', (e) => {
    const modalBg = document.getElementById('modal-bg');
    if (e.target === modalBg) {
        closeModal();
    }
});
