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
