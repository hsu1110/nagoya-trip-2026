// Currency Calculator Logic
const rateInput = document.getElementById("exchangeRate");
const twdInput = document.getElementById("inputTWD");
const jpyInput = document.getElementById("inputJPY");
const displayRateText = document.getElementById("displayRateText");

function updateCalc(source) {
  const rate = parseFloat(rateInput.value) || 0;
  displayRateText.innerText = rate;

  if (source === "twd") {
    const twd = parseFloat(twdInput.value);
    if (!isNaN(twd)) {
      jpyInput.value = (twd * rate).toFixed(0);
    } else {
      jpyInput.value = "";
    }
  } else if (source === "jpy") {
    const jpy = parseFloat(jpyInput.value);
    if (!isNaN(jpy)) {
      twdInput.value = (jpy / rate).toFixed(0);
    } else {
      twdInput.value = "";
    }
  } else if (source === "rate") {
    if (twdInput.value) {
      const twd = parseFloat(twdInput.value);
      jpyInput.value = (twd * rate).toFixed(0);
    }
  }
}

if (rateInput) rateInput.addEventListener("input", () => updateCalc("rate"));
if (twdInput) twdInput.addEventListener("input", () => updateCalc("twd"));
if (jpyInput) jpyInput.addEventListener("input", () => updateCalc("jpy"));

// --- DETAILED ITINERARY DATA ---
const itineraryData = [
  {
    day: 1,
    date: "7/01 (三)",
    title: "Day 1: 紅眼抵達，飛驒牛衝刺",
    focus: "抵達名古屋、馬喰一代飛驒牛、麵家獅子丸",
    logistics: "樂桃 MM722 (02:45 TPE ➔ 06:20 NGO)，名鐵 μ-SKY 至名古屋站（28 分鐘，1,250 日圓）",
    meals: "午餐：飛驒牛一頭家 馬喰一代（名古屋WEST店）商業午餐<br>晚餐：麵家 獅子丸（泡系拉麵）",
    warnings: "紅眼航班體力消耗大，首日行程不宜過度緊湊，隨時保持彈性以便回飯店補眠。",
    details: [
      { time: "06:20", icon: "🛬", title: "抵達中部國際機場 (NGO)", desc: "樂桃 MM722 降落。出關後搭名鐵 μ-SKY 特急直達名古屋站（約 28 分鐘）。" },
      { time: "08:00", icon: "🏨", title: "VIA INN 寄放行李", desc: "Check-in 時間為 15:00，先至前台寄放行李，輕裝出發。" },
      { time: "09:30", icon: "🏯", title: "大須商店街初探（可選）", desc: "若體力允許可至大須初步探勘地形，否則可在名古屋車站周邊的咖啡廳享用 Morning Service 休息。" },
      { time: "12:00", icon: "🥩", title: "午餐：飛驒牛一頭家 馬喰一代", desc: "<strong>地點：</strong>名古屋WEST店。<br><strong>推薦：</strong>商業午餐套餐，性價比極高的飛驒牛體驗，比晚餐划算許多。" },
      { time: "15:00", icon: "🛏️", title: "飯店 Check-in & 充電休息", desc: "辦理入住，補充紅眼班機消耗的體力。此為首日最重要的行程之一。" },
      { time: "18:30", icon: "🍜", title: "晚餐：麵家 獅子丸", desc: "<strong>特色：</strong>名古屋超人氣「泡系拉麵」，湯頭濃厚綿密。<br><strong>位置：</strong>飯店附近步行可達，人氣高可能需稍候。" }
    ]
  },
  {
    day: 2,
    date: "7/02 (四)",
    title: "Day 2: 走進動畫世界 — 吉卜力公園",
    focus: "吉卜力大倉庫、園區限定紀念商品採購",
    logistics: "名古屋市營地下鐵至藤が丘，轉乘東部丘陵線 Linimo 至「愛・地球博紀念公園」站",
    meals: "午餐：園區內或周邊簡餐<br>晚餐：返回名古屋市區後彈性選擇",
    warnings: "魔女之谷「茵茵狗」已確認停賣，不需要提早狂奔。但<strong>吉卜力大倉庫門票須提前於官網預購特定時段</strong>（目標 14:00 或 15:00 場次），請務必事先確認。",
    details: [
      { time: "09:30", icon: "☕", title: "市區悠閒早餐", desc: "今日門票時間充裕，可在名古屋市區享用名古屋特色的 Morning Service（點咖啡附贈厚片吐司）。" },
      { time: "11:00", icon: "🚇", title: "出發前往吉卜力公園", desc: "搭乘市營地下鐵至藤が丘，轉乘 Linimo（磁浮列車）至愛・地球博紀念公園。<br><strong>費用：</strong>來回約 1,000 日圓。" },
      { time: "12:00", icon: "🌿", title: "園區外圍散步 & 午餐", desc: "提早抵達，先於公園周邊覓食，保留體力準備下午入場。" },
      { time: "14:00", icon: "🏠", title: "吉卜力大倉庫入場", desc: "<strong>重點區域：</strong>尼茲之家、貓咪巴士、電影場景復原區。<br><strong>提醒：</strong>標示不可拍照的展示區請遵守規定。" },
      { time: "16:30", icon: "🛍️", title: "出口商店採購衝刺", desc: "限定紀念商品在出口商店選購，品項豐富，早點挑選避免缺貨。" },
      { time: "18:00", icon: "🚋", title: "返回名古屋市區", desc: "搭乘 Linimo 返回藤が丘，轉地下鐵回市區享用晚餐。" }
    ]
  },
  {
    day: 3,
    date: "7/03 (五)",
    title: "Day 3: 新幹線急行 — 京都古都巡禮",
    focus: "清水寺、祇園、Yojiya 美妝、抹茶伴手禮",
    logistics: "東海道新幹線（名古屋 ➔ 京都，約 35 分鐘，自由席約 3,340 日圓）",
    meals: "午餐：錦市場周邊小食<br>晚餐：視進度於京都或返回名古屋後用餐",
    warnings: "京都夏季極為炎熱，步行時間長，務必做好防曬並隨時補充水分。需注意東海道新幹線末班車時間，<strong>建議最晚 19:00 前從京都出發</strong>返回名古屋。",
    details: [
      { time: "07:30", icon: "🚄", title: "搭乘新幹線前往京都", desc: "從名古屋站搭乘東海道新幹線，約 35 分鐘即達京都站。建議購買自由席以節省費用。" },
      { time: "09:00", icon: "⛩️", title: "清水寺參拜", desc: "搭乘市巴士至清水坂。<br><strong>路線：</strong>清水坂 → 清水寺正殿（舞台）→ 子安塔。<br><strong>提醒：</strong>早晨人潮相對少，適合拍照留念。" },
      { time: "11:00", icon: "🏘️", title: "二年坂・三年坂漫步採買", desc: "沿古石板坂道漫步，兩旁有各式傳統工藝品、陶器、扇子。<br><strong>採買重點：</strong>抹茶製品（茶葉、茶點）、傳統工藝伴手禮。" },
      { time: "13:00", icon: "🍢", title: "錦市場午餐掃食", desc: "「京都廚房」錦市場，邊散步邊品嚐各式京都小食：玉子燒、漬物、烤麻糬。" },
      { time: "14:30", icon: "🌸", title: "祇園・花見小路散策", desc: "體驗古都氛圍，有機會目睹舞妓。沿花見小路漫步感受江戶風情。" },
      { time: "16:00", icon: "💄", title: "Yojiya (優佳雅) 美妝採買", desc: "<strong>地點：</strong>祇園本店（推薦）或京都站店。<br><strong>必買：</strong>吸油面紙、潤膚面膜、臉部保養系列。" },
      { time: "19:00", icon: "🚄", title: "搭乘新幹線返回名古屋", desc: "把握時間搭車返回，避免錯過末班車。回程在名古屋站地下街或飯店附近覓食。" }
    ]
  },
  {
    day: 4,
    date: "7/04 (六)",
    title: "Day 4: 戰力全開 — 名古屋重度血拚日",
    focus: "高島屋、Gate Tower、榮商圈 Parco 三越、藥妝掃貨",
    logistics: "名古屋市營地下鐵，建議購買一日乘車券（740 日圓）",
    meals: "午/晚餐：百貨地下街美食或商場內餐廳，隨機應變以節省購物時間",
    warnings: "善用飯店地理優勢，購買物品過多可先回飯店放置再出發。消費滿 5,000 日圓（未稅）即可辦理退稅，記得攜帶護照正本。",
    details: [
      { time: "10:00", icon: "🏬", title: "車站周邊：高島屋・Gate Tower", desc: "<strong>高島屋 B1-B2：</strong>名古屋最強地下美食街，各式甜點伴手禮首選。<br><strong>Gate Tower / JR Central Towers：</strong>日系服飾潮牌與精品雜貨。" },
      { time: "13:00", icon: "🍱", title: "午餐休整", desc: "在百貨地下街選購午餐，補充體力的同時調整下午購物清單。" },
      { time: "14:30", icon: "🚇", title: "移動至榮商圈", desc: "搭乘地下鐵東山線至榮站。<br><strong>戰鬥動線：</strong>Parco → 三越 → 松坂屋 → 名鐵百貨。" },
      { time: "15:00", icon: "🛍️", title: "榮商圈全力掃蕩", desc: "<strong>Parco：</strong>潮流品牌、日系服飾。<br><strong>三越：</strong>高端品牌與精品食品。<br><strong>藥妝店：</strong>Matsumoto Kiyoshi、千里馬藥妝，補齊藥妝清單。" },
      { time: "18:00", icon: "🏨", title: "返回飯店放置戰利品", desc: "利用飯店極佳地理位置，將戰利品卸貨，輕裝繼續二次出擊或享用晚餐。" }
    ]
  },
  {
    day: 5,
    date: "7/05 (日)",
    title: "Day 5: Outlet 終極血拚與鰻魚飯盛宴",
    focus: "三井 Outlet 爵士之夢長島、熱田蓬萊軒鰻魚飯三吃",
    logistics: "名鐵巴士中心搭乘直達高速巴士前往「長島溫泉」（約 50 分鐘）。返回後搭地下鐵名城線至「神宮西」站（熱田蓬萊軒）",
    meals: "午餐：Outlet 內美食街<br>晚餐：熱田蓬萊軒（ひつまぶし 鰻魚飯三吃）",
    warnings: "Outlet 佔地廣大，建議先上網下載地圖並標記目標品牌。<strong>從 Outlet 回程時請注意時間掌控</strong>，熱田蓬萊軒需 16:30 前登記候位，今晚是旅程最後大餐！",
    details: [
      { time: "09:00", icon: "🚌", title: "搭乘高速直達巴士至長島", desc: "從名鐵巴士中心搭乘直達「長島溫泉」的高速巴士，約 50 分鐘抵達。<br><strong>提醒：</strong>建議事先查好班次，避免等待時間過長。" },
      { time: "10:00", icon: "🏷️", title: "三井 Outlet Park 爵士之夢長島", desc: "<strong>規模：</strong>日本最大級 Outlet，超過 300 家國內外知名品牌。<br><strong>戰略：</strong>事先標記目標品牌位置，有效率地掃蕩。<br><strong>必訪：</strong>國際精品、運動品牌（Nike、Adidas）、日系服飾。" },
      { time: "13:00", icon: "🍱", title: "午餐：Outlet 內美食街", desc: "Outlet 內有豐富的餐飲選擇，邊休息邊補充體力，為下午的採購繼續衝刺。" },
      { time: "15:30", icon: "🛍️", title: "最後衝刺 & 打包戰利品", desc: "確認行李重量，為 46kg 回程做最終規劃。將戰利品分裝整理，準備搭車返回市區。" },
      { time: "16:00", icon: "🚌", title: "搭車返回名古屋市區", desc: "把握時間搭乘巴士返回，預留足夠時間前往熱田蓬萊軒登記候位。" },
      { time: "16:30", icon: "🚇", title: "前往熱田蓬萊軒登記候位", desc: "<strong>地點：</strong>地下鐵名城線「神宮西」站附近。<br><strong>策略：</strong>提早登記，等待期間可步行至熱田神宮參拜。" },
      { time: "18:30", icon: "🍣", title: "晚餐：熱田蓬萊軒 ひつまぶし", desc: "<strong>三吃順序：</strong>①原味品嚐 ②加薬味（芥末、海苔、蔥花）③加高湯茶泡飯。三種吃法各有風味，是名古屋最具代表性的美食體驗。" }
    ]
  },
  {
    day: 6,
    date: "7/06 (一)",
    title: "Day 6: 滿載而歸 — 機場最後採買",
    focus: "桂新堂蝦餅、Royce 巧克力、CI 155 華航回程",
    logistics: "名鐵特急至中部國際機場（37 分鐘，890 日圓）。航班：CI 155 (12:20 NGO ➔ 14:30 TPE)",
    meals: "早餐：飯店或超商<br>午餐：機場內餐廳或機上餐點",
    warnings: "請預留充足時間辦理行李託運（46kg 額度）。建議 09:30 前離開飯店，避免因購物導致包裝不及或行李超重。",
    details: [
      { time: "08:00", icon: "🌅", title: "享用最後早餐", desc: "飯店早餐或附近超商，為漫長回程蓄積體力。" },
      { time: "09:00", icon: "🧳", title: "辦理退房，整理行李", desc: "最終打包，確認 46kg 重量分配合理。貴重物品與換洗衣物放手提行李。" },
      { time: "09:30", icon: "🚃", title: "搭乘名鐵前往中部國際機場", desc: "從名古屋站搭乘名鐵特急（890 日圓，約 37 分鐘）或 μ-SKY（1,250 日圓，約 28 分鐘）。" },
      { time: "10:15", icon: "🛂", title: "CI 155 報到 & 行李託運", desc: "辦理登機手續，托運行李（最多 46kg）。完成後即可輕身前往免稅區最後衝刺。" },
      { time: "10:45", icon: "🛒", title: "機場免稅最後衝刺", desc: "<strong>必買清單：</strong><br>• 桂新堂（蝦仙貝之里）機場限定蝦餅<br>• Royce 生巧克力（需冷藏，登機前最後購買）<br>• 名古屋地區限定零食伴手禮<br>• 免稅化妝品最後補貨" },
      { time: "12:20", icon: "✈️", title: "起飛：CI 155 返回台北", desc: "帶著 46kg 的戰利品與滿滿回憶起飛！預計 14:30 抵達桃園機場，旅程圓滿結束。" }
    ]
  }
];

// Chart.js Configuration

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
      <div>
        <h4 class="font-bold text-stone-800 mb-2 flex items-center text-sm"><span class="mr-2">🍽️</span> 餐飲規劃</h4>
        <p class="text-stone-600 text-sm leading-loose">${data.meals}</p>
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
