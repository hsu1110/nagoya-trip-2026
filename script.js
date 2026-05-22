// ==========================================
// Currency Calculator Logic
// ==========================================
const rateInput = document.getElementById("exchangeRate");
const twdInput = document.getElementById("inputTWD");
const jpyInput = document.getElementById("inputJPY");
const displayRateText = document.getElementById("displayRateText");

function updateCalc(source) {
  const rate = parseFloat(rateInput.value) || 0;
  if (displayRateText) displayRateText.innerText = rate;

  if (source === "jpy") {
    const jpy = parseFloat(jpyInput.value);
    if (!isNaN(jpy)) {
      twdInput.value = (jpy * rate).toFixed(0);
    } else {
      twdInput.value = "";
    }
  } else if (source === "twd") {
    const twd = parseFloat(twdInput.value);
    if (!isNaN(twd) && rate > 0) {
      jpyInput.value = (twd / rate).toFixed(0);
    } else {
      jpyInput.value = "";
    }
  } else if (source === "rate") {
    if (jpyInput.value) {
      const jpy = parseFloat(jpyInput.value);
      twdInput.value = (jpy * rate).toFixed(0);
    }
  }
}

if (rateInput) rateInput.addEventListener("input", () => updateCalc("rate"));
if (twdInput) twdInput.addEventListener("input", () => updateCalc("twd"));
if (jpyInput) jpyInput.addEventListener("input", () => updateCalc("jpy"));

// 引用外部資料庫
const itineraryData = window.itineraryData || [];
const db = window.db || window.travelDb || [];


// ==========================================
// 📅 Itinerary Rendering Logic
// ==========================================
let currentDayIndex = 0;

function renderDayTabs() {
  const tabsContainer = document.getElementById("dayTabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = "";

  itineraryData.forEach((day, index) => {
    const isSelected = index === currentDayIndex;
    const btn = document.createElement("button");
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
  if (!contentContainer) return;
  const data = itineraryData[currentDayIndex];
  if (!data) return;

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

  data.details.forEach((item, index) => {
    const isLast = index === data.details.length - 1;
    html += `
      <div class="relative animate-fade-in-up opacity-0" style="animation-delay: ${index * 0.1}s">
        ${!isLast ? `<div class="absolute w-0.5 bg-stone-200 z-0" style="left:-2.1rem;top:2.4rem;bottom:-2rem;"></div>` : ""}
        <div class="absolute w-9 h-9 rounded-full bg-white border-2 border-stone-300 z-10 flex items-center justify-center text-base shadow-sm" style="left:-2.75rem;top:0;">${item.icon}</div>
        <div class="space-y-1.5">
          <span class="text-xs font-mono font-bold text-rose-500 tracking-wider">${item.time}</span>
          <div class="flex items-center flex-wrap gap-2">
            <h4 class="font-bold text-stone-900">${item.title}</h4>
            ${item.dbId ? `<button onclick="openModal(db.find(x => x.id === ${item.dbId}))" class="text-[10px] sm:text-xs bg-rose-50 text-rose-600 border border-rose-200 px-2 py-0.5 rounded-md hover:bg-rose-100 hover:shadow-sm transition-all shadow-sm"><i class="fa-solid fa-map-location-dot mr-1"></i>查看地圖</button>` : ""}
          </div>
          <div class="text-stone-500 text-sm leading-relaxed bg-stone-50 rounded-xl p-3 border border-stone-100 hover:bg-white hover:shadow-sm transition-all duration-200">${item.desc}</div>
        </div>
      </div>
    `;
  });

  const footerParts = [];
  if (data.logistics) {
    footerParts.push(`
      <div class="flex items-start gap-3 bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
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
    html += `</div></div><div class="border-t border-stone-100 px-8 py-6 flex flex-col gap-4">${footerParts.join("")}</div>`;
  } else {
    html += `</div></div>`;
  }

  contentContainer.innerHTML = html;
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

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

// ==========================================
// 🗺️ Attractions & Food Gallery Logic
// ==========================================
function renderCards(filter = 'All') {
  const attractionsGrid = document.getElementById('attractions-grid');
  const foodGrid = document.getElementById('food-grid');
  if (!attractionsGrid || !foodGrid) return;
  
  attractionsGrid.innerHTML = '';
  foodGrid.innerHTML = '';

  const filteredData = filter === 'All' ? db : db.filter(item => item.area === filter);

  filteredData.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = "bg-white p-5 rounded-2xl shadow-sm border border-stone-100 cursor-pointer hover:shadow-xl hover:border-stone-200 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4 group animate-fade-in-up opacity-0";
    card.style.animationDelay = `${i * 0.05}s`;
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
  if (!item) return;
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

  // 吉卜力專屬高亮導覽按鈕
  let ghibliLinkHtml = '';
  if (item.id === 38) {
    ghibliLinkHtml = `
      <button onclick="closeModal(); switchView('ghibli'); setTimeout(() => selectGhibliItineraryStep('ghibli-warehouse'), 300);" class="w-full mb-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 group animate-pulse">
          <span class="text-lg">🍃</span>
          開啟「吉卜力大補帖」互動導覽專區
      </button>

    `;
  }

    const mapHtml = `
      <div class="mb-6 rounded-2xl overflow-hidden shadow-inner border border-stone-200 relative animate-fade-in-up" style="animation-delay: 0.2s">
        <iframe 
          width="100%" 
          height="250" 
          style="border:0;" 
          loading="lazy" 
          allowfullscreen 
          src="https://maps.google.com/maps?q=${encodeURIComponent(exactQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed">
        </iframe>
      </div>
    `;

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
      
      ${ghibliLinkHtml}

      <div class="bg-stone-50 p-5 rounded-2xl mb-6 text-sm border border-stone-100">
        <div class="mb-3 flex"><span class="font-bold text-stone-700 w-20 shrink-0"><i class="fa-solid fa-location-dot mr-2 text-stone-400"></i>地點:</span> <span class="text-stone-600">${item.location}</span></div>
        ${extraDetails}
      </div>

      <div class="mb-8 relative">
        <div class="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full"></div>
        <h4 class="font-bold text-stone-900 mb-2 flex items-center">專家筆記 <i class="fa-solid fa-pen-to-square text-yellow-500 ml-2"></i></h4>
        <p class="text-stone-600 leading-relaxed bg-yellow-50/50 p-4 rounded-xl border border-yellow-100/50">${item.notes}</p>
      </div>

      ${mapHtml}



    <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="block w-full bg-stone-900 hover:bg-rose-500 text-white text-center font-bold py-4 rounded-2xl transition-colors shadow-md flex items-center justify-center gap-2 group animate-fade-in-up" style="animation-delay: 0.3s">
      <i class="fa-solid fa-map-location-dot transform group-hover:scale-110 transition-transform"></i>
      開啟 Google Maps App 導航
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
  if (!modalBg || !modalContent) return;
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
  if (modalBg && e.target === modalBg) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  const modalBg = document.getElementById('modal-bg');
  if (modalBg && e.key === 'Escape' && !modalBg.classList.contains('hidden')) {
    closeModal();
  }
});


// ==========================================
// 🍃 Ghibli Park SPA Integration Logic
// ==========================================

// SPA 視圖切換機制
function switchView(viewName) {
  const mainView = document.getElementById("main-travel-view");
  const ghibliView = document.getElementById("ghibli-guide-view");
  const body = document.body;
  if (!mainView || !ghibliView) return;

  if (viewName === "ghibli") {
    mainView.classList.add("hidden");
    ghibliView.classList.remove("hidden");
    body.className = "text-slate-800 antialiased ghibli-theme";
    initGhibliView();
  } else if (viewName === "valley") {
    // 容錯防呆：如果調用 valley，自動重定向至 ghibli 視圖，並拉開魔女之谷折疊區平滑滾動聚焦
    mainView.classList.add("hidden");
    ghibliView.classList.remove("hidden");
    body.className = "text-slate-800 antialiased ghibli-theme";
    initGhibliView();
    setTimeout(() => {
      expandValleyAndScroll();
    }, 150);
  } else {
    ghibliView.classList.add("hidden");
    mainView.classList.remove("hidden");
    body.className = "bg-stone-50 text-stone-800 antialiased selection:bg-rose-200 selection:text-rose-900 transition-colors duration-500";
  }

  // 同步導覽列 Active 狀態
  updateNavbarActive(viewName);
}


function updateNavbarActive(viewName) {
  const ghibliBtn = document.getElementById("nav-ghibli-btn");
  if (ghibliBtn) {
      if (viewName === "ghibli" || viewName === "valley") {
          ghibliBtn.className = "px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 shadow-sm transition-all duration-300 flex items-center gap-1.5";
      } else {
          ghibliBtn.className = "px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 hover:text-emerald-800 shadow-sm transition-all duration-300 flex items-center gap-1.5";
      }
  }
}

// 輔助函式：動態創建帶有 XML Namespace 的 SVG 元素
function createSVGElement(tagName, attributes = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value);
  }
  return el;
}

// 初始化吉卜力專區
let isGhibliInitialized = false;

function initGhibliView() {
  renderGhibliOneDayItinerary();
  if (!isGhibliInitialized) {
    renderGhibliMap();
    renderWarehouseMap();
    selectZone('ghibli-warehouse', false);
    isGhibliInitialized = true;
  } else {
    // 每次進入時重新刷新圖標，以防 SPA 動態結構丟失
    lucide.createIcons();
  }
}


// 繪製吉卜力公園主實景地圖
function renderGhibliMap() {
  const landmarksGroup = document.getElementById('landmarks-group');
  if (!landmarksGroup) return;
  landmarksGroup.innerHTML = '';

  const landmarks = window.ghibliLandmarks || {};
  const routes = window.ghibliRoutes || {};

  // 1. 繪製所有地標點 (圓形/長方形) 及名稱標籤
  for (const [key, item] of Object.entries(landmarks)) {
    const clickHandler = key === 'ghibli-warehouse' 
        ? `selectZone('${key}', false); expandWarehouseAndScroll();` 
        : (key === 'valley-witches' 
            ? `selectZone('${key}', false); expandValleyAndScroll();` 
            : `selectZone('${key}')`);

    const g = createSVGElement('g', {
        'id': `landmark-${key}`,
        'class': 'cursor-pointer group',
        'onclick': clickHandler
    });

    if (item.isRect) {
        const x = item.cx - item.width / 2;
        const y = item.cy - item.height / 2;
        const rect = createSVGElement('rect', {
            'x': x,
            'y': y,
            'width': item.width,
            'height': item.height,
            'rx': 5,
            'fill': item.color,
            'stroke': '#ffffff',
            'stroke-width': 2
        });
        g.appendChild(rect);

        const shortText = createSVGElement('text', {
            'x': item.cx,
            'y': item.cy + 3,
            'fill': 'white',
            'class': 'text-[9px] font-bold',
            'text-anchor': 'middle'
        });
        shortText.textContent = item.short;
        g.appendChild(shortText);
    } else {
        const circle = createSVGElement('circle', {
            'cx': item.cx,
            'cy': item.cy,
            'r': item.r,
            'fill': item.color,
            'stroke': '#ffffff',
            'stroke-width': (key === 'elevator-tower' ? 2 : 2.5)
        });
        g.appendChild(circle);

        const shortText = createSVGElement('text', {
            'x': item.cx,
            'y': item.cy + 4,
            'fill': 'white',
            'class': `${item.r <= 15 ? 'text-[10px]' : (item.r >= 26 ? 'text-base' : 'text-sm')} font-bold`,
            'text-anchor': 'middle'
        });
        shortText.textContent = item.short;
        g.appendChild(shortText);
    }

    const nameText = createSVGElement('text', {
        'x': item.cx + item.textOffset.x,
        'y': item.cy + item.textOffset.y,
        'fill': item.color,
        'class': 'text-xs font-bold',
        'text-anchor': 'middle',
        'filter': 'url(#bg-white)'
    });
    nameText.textContent = item.name;
    g.appendChild(nameText);

    landmarksGroup.appendChild(g);
  }

  // 2. 繪製所有交通路線與時間標記
  for (const [type, list] of Object.entries(routes)) {
    const group = document.getElementById(`route-${type}`);
    if (!group) continue;
    group.innerHTML = '';

    list.forEach((route) => {
        const fromPt = landmarks[route.from];
        const toPt = landmarks[route.to];
        if (!fromPt || !toPt) return;

        let d = '';
        const midX = (fromPt.cx + toPt.cx) / 2;
        const midY = (fromPt.cy + toPt.cy) / 2;
        let textX = 0;
        let textY = 0;

        const stroke = type === 'walk' ? '#1e293b' : (type === 'bus' ? '#ef4444' : '#d97706');
        const strokeWidth = type === 'walk' ? '4.5' : (type === 'bus' ? '3.5' : '4.5');
        const strokeDash = type === 'walk' ? '6,6' : (type === 'catbus' ? '2, 8' : 'none');

        if (route.isQuad) {
            const ctrlX = midX + route.controlOffset.x;
            const ctrlY = midY + route.controlOffset.y;
            d = `M ${fromPt.cx} ${fromPt.cy} Q ${ctrlX} ${ctrlY} ${toPt.cx} ${toPt.cy}`;
            textX = ctrlX + route.textOffset.x;
            textY = ctrlY + route.textOffset.y;

            if (route.hasSpot) {
                const spotG = createSVGElement('g');
                const spotCircle = createSVGElement('circle', {
                    'cx': ctrlX,
                    'cy': ctrlY,
                    'r': 6,
                    'fill': '#475569',
                    'stroke': '#ffffff',
                    'stroke-width': 1.5
                });
                spotG.appendChild(spotCircle);

                const spotName = createSVGElement('text', {
                    'x': ctrlX + route.hasSpot.textOffset.x,
                    'y': ctrlY + route.hasSpot.textOffset.y,
                    'fill': '#334155',
                    'class': 'text-[10px] font-bold',
                    'filter': 'url(#bg-white)'
                });
                spotName.textContent = route.hasSpot.text;
                spotG.appendChild(spotName);

                group.appendChild(spotG);
            }
        } else {
            d = `M ${fromPt.cx} ${fromPt.cy} L ${toPt.cx} ${toPt.cy}`;
            textX = midX + route.textOffset.x;
            textY = midY + route.textOffset.y;
        }

        const path = createSVGElement('path', {
            'd': d,
            'stroke': stroke,
            'stroke-width': strokeWidth,
            'fill': 'none'
        });
        if (strokeDash !== 'none') {
            path.setAttribute('stroke-dasharray', strokeDash);
        }
        if (type === 'catbus') {
            path.setAttribute('stroke-linecap', 'round');
        }
        group.appendChild(path);

        const text = createSVGElement('text', {
            'x': textX,
            'y': textY,
            'fill': type === 'walk' ? '#1e293b' : (type === 'bus' ? '#ef4444' : '#d97706'),
            'class': 'text-xs font-bold',
            'filter': 'url(#bg-white)',
            'text-anchor': 'middle'
        });
        text.textContent = route.text;
        group.appendChild(text);
    });
  }
}

// 繪製吉卜力大倉庫深度導覽
function renderWarehouseMap() {
  const linesGroup = document.getElementById('warehouse-route-lines');
  if (!linesGroup) return;
  linesGroup.innerHTML = '';
  
  const warehouseSteps = window.ghibliWarehouseSteps || {};
  const warehouseLines = window.ghibliWarehouseLines || [];

  // 1. 繪製路線
  warehouseLines.forEach(line => {
      const fromPt = warehouseSteps[line.from];
      const toPt = warehouseSteps[line.to];
      if (!fromPt || !toPt) return;

      const midX = (fromPt.cx + toPt.cx) / 2;
      const midY = (fromPt.cy + toPt.cy) / 2;
      let d = '';

      if (line.type === 'Q') {
          const ctrlX = midX + line.controlOffset.x;
          const ctrlY = midY + line.controlOffset.y;
          d = `M ${fromPt.cx} ${fromPt.cy} Q ${ctrlX} ${ctrlY} ${toPt.cx} ${toPt.cy}`;
      } else if (line.type === 'C') {
          const ctrl1X = midX + line.controlOffsets[0].x;
          const ctrl1Y = midY + line.controlOffsets[0].y;
          const ctrl2X = midX + line.controlOffsets[1].x;
          const ctrl2Y = midY + line.controlOffsets[1].y;
          d = `M ${fromPt.cx} ${fromPt.cy} C ${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${toPt.cx} ${toPt.cy}`;
      }

      const path = createSVGElement('path', {
          'd': d,
          'stroke': '#dc2626',
          'stroke-width': '5',
          'stroke-dasharray': '2, 6',
          'stroke-linecap': 'round',
          'fill': 'none'
      });
      linesGroup.appendChild(path);
  });

  // 2. 繪製節點
  const nodesGroup = document.getElementById('warehouse-nodes-group');
  if (nodesGroup) {
    nodesGroup.innerHTML = '';
    for (const [key, step] of Object.entries(warehouseSteps)) {
        const g = createSVGElement('g', {
            'id': `wh-node-${key}`,
            'class': 'cursor-pointer group',
            'onclick': `selectWarehouseStep('${key}')`
        });

        const glowColor = key === 'cafe' ? '#eab308' : (key === '1' || key === '7' ? '#f97316' : '#22c55e');
        const glow = createSVGElement('circle', {
            'cx': step.cx,
            'cy': step.cy,
            'r': step.r + 5,
            'fill': 'none',
            'stroke': glowColor,
            'stroke-width': '2.5',
            'stroke-opacity': '0.7',
            'stroke-dasharray': key === 'cafe' ? '2,2' : 'none'
        });
        g.appendChild(glow);

        const circle = createSVGElement('circle', {
            'cx': step.cx,
            'cy': step.cy,
            'r': step.r,
            'fill': key === 'cafe' ? '#eab308' : '#dc2626',
            'stroke': '#ffffff',
            'stroke-width': '2'
        });
        g.appendChild(circle);

        const text = createSVGElement('text', {
            'x': step.cx,
            'y': step.cy + (key === 'cafe' ? 4 : 5),
            'fill': 'white',
            'class': `${key === 'cafe' ? 'text-[10px]' : 'text-sm'} font-bold`,
            'text-anchor': 'middle'
        });
        text.textContent = key === 'cafe' ? '餐' : key;
        g.appendChild(text);

        nodesGroup.appendChild(g);
    }
  }

  // 3. 繪製右側步驟時間軸
  const timelineList = document.getElementById('timeline-list');
  if (timelineList) {
    timelineList.innerHTML = '';
    const keysOrdered = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    keysOrdered.forEach(key => {
        const step = warehouseSteps[key];
        const itemDiv = document.createElement('div');
        itemDiv.id = `wh-timeline-item-${key}`;
        itemDiv.className = 'relative pl-2 cursor-pointer group/item hover:translate-x-1 transition-transform py-1';
        itemDiv.setAttribute('onclick', `selectWarehouseStep('${key}')`);
        
        itemDiv.innerHTML = `
            <span class="absolute -left-[30px] top-2.5 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white group-hover/item:scale-125 transition-transform"></span>
            <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 group-hover/item:text-orange-700 transition-colors">
                    步驟 ${key} - ${step.title}
                </span>
                <span class="text-[9px] font-medium text-slate-400 scale-90">${step.level.split(' ')[0]}</span>
            </div>
        `;
        timelineList.appendChild(itemDiv);
    });
  }
}

// 大倉庫詳情聚焦
function selectWarehouseStep(stepKey) {
  const warehouseSteps = window.ghibliWarehouseSteps || {};
  const step = warehouseSteps[stepKey];
  if (!step) return;

  document.querySelectorAll('#timeline-list > div').forEach(el => {
      el.className = 'relative pl-2 cursor-pointer group/item hover:translate-x-1 transition-transform py-1';
  });
  const activeItem = document.getElementById(`wh-timeline-item-${stepKey}`);
  if (activeItem) {
      activeItem.className = 'relative pl-2 cursor-pointer group/item hover:translate-x-1 transition-transform py-1 bg-orange-50/70 border-l-4 border-orange-500 p-2 rounded-lg';
  }

  document.querySelectorAll('#warehouse-nodes-group > g').forEach(el => el.classList.remove('active'));
  const activeNode = document.getElementById(`wh-node-${stepKey}`);
  if (activeNode) {
      activeNode.classList.add('active');
  }

  const badge = document.getElementById('wh-step-badge');
  if (badge) badge.innerText = stepKey === 'cafe' ? '☕' : stepKey;
  
  const title = document.getElementById('wh-step-title');
  if (title) title.innerText = step.title;
  
  const levelBadge = document.getElementById('wh-step-level');
  if (levelBadge) {
    levelBadge.innerText = step.level;
    levelBadge.className = `text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${step.levelClass}`;
  }

  const desc = document.getElementById('wh-step-desc');
  if (desc) desc.innerText = step.desc;

  const tip = document.getElementById('wh-step-tip');
  if (tip) tip.innerHTML = step.tip;
}

// 摺疊與展開大倉庫面版
function toggleWarehouseAccordion(forceState = null) {
  const accordion = document.getElementById('warehouse-accordion-content');
  const arrow = document.getElementById('warehouse-arrow');
  if (!accordion || !arrow) return;

  let shouldOpen = accordion.classList.contains('hidden');
  if (forceState !== null) {
      shouldOpen = (forceState === 'open');
  }

  if (shouldOpen) {
      accordion.classList.remove('hidden');
      arrow.style.transform = 'rotate(180deg)';
      selectWarehouseStep('1');
  } else {
      accordion.classList.add('hidden');
      arrow.style.transform = 'rotate(0deg)';
  }
}

// 當點擊主圖大倉庫時，自動拉開大倉庫專區並滾動聚焦
function expandWarehouseAndScroll() {
  toggleWarehouseAccordion('open');
  const depthSection = document.getElementById('warehouse-depth-section');
  if (depthSection) {
      setTimeout(() => {
          depthSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
  }
}

// 路線圖層顯示開關
function toggleRouteLayer(type) {
  const checkbox = document.getElementById(`toggle-${type}`);
  const layer = document.getElementById(`route-${type}`);
  if (checkbox && layer) {
      layer.style.opacity = checkbox.checked ? '1' : '0';
      layer.style.pointerEvents = checkbox.checked ? 'auto' : 'none';
  }
}

// 地標圖層顯示開關
// 通用圖層顯示與滑鼠事件開關 (DRY 原則優化)
function toggleMapLayer(checkboxId, elementId) {
  const checkbox = document.getElementById(checkboxId);
  const element = document.getElementById(elementId);
  if (checkbox && element) {
      element.style.opacity = checkbox.checked ? '1' : '0';
      element.style.pointerEvents = checkbox.checked ? 'auto' : 'none';
  }
}

// 園區地標聚焦與景點渲染
function selectZone(zoneKey, shouldScroll = true) {
  const zoneData = window.ghibliZoneData || {};
  const data = zoneData[zoneKey];
  if (!data) return;

  document.querySelectorAll('#landmarks-group > g').forEach(el => el.classList.remove('active'));
  const activeG = document.getElementById(`landmark-${zoneKey}`);
  if (activeG) {
      activeG.classList.add('active');
  }

  const emptyState = document.getElementById('empty-state');
  if (emptyState) emptyState.classList.add('hidden');
  
  const contentArea = document.getElementById('content-area');
  if (contentArea) contentArea.classList.remove('hidden');

  const badge = document.getElementById('zone-badge');
  if (badge) {
      badge.innerText = data.badge;
      badge.className = `px-3 py-1 text-xs font-bold rounded-full text-white ${data.badgeColor}`;
  }
  
  const zoneTitle = document.getElementById('zone-title');
  if (zoneTitle) zoneTitle.innerText = data.title;
  
  const zoneTransport = document.getElementById('zone-transport');
  if (zoneTransport) {
      zoneTransport.innerHTML = `
          <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
          <span>${data.transport}</span>
      `;
  }

  const spotList = document.getElementById('spot-list');
  if (spotList) {
      spotList.innerHTML = '';
      data.spots.forEach(spot => {
          const li = document.createElement('li');
          li.className = 'p-3 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-sm transition-all';
          li.innerHTML = `
              <div class="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                  <span class="text-emerald-600">✦</span> ${spot.name}
              </div>
              <div class="text-xs text-slate-500 mt-1 pl-4 leading-relaxed">${spot.desc}</div>
          `;
          spotList.appendChild(li);
      });
  }

  const navList = document.getElementById('navigation-list');
  if (navList) {
      navList.innerHTML = '';
      data.navs.forEach(nav => {
          const div = document.createElement('div');
          div.className = 'flex items-center gap-2 p-1.5 border-b border-slate-50 last:border-b-0';
          div.innerHTML = `
              <span class="text-emerald-600 text-[10px] font-bold">▶</span>
              <span class="text-xs">${nav}</span>
          `;
          navList.appendChild(div);
      });
  }

  // 魔女之谷專屬深度導覽連動
  const deepLink = document.getElementById('valley-deep-link-container');
  if (deepLink) {
    if (zoneKey === 'valley-witches') {
      deepLink.classList.remove('hidden');
      deepLink.innerHTML = `
          <button onclick="expandValleyAndScroll()" class="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-0.5 transition-all animate-pulse border border-amber-500/30">
            🔮 點擊查看下方「魔女之谷」深度互動地圖 ➔
          </button>
      `;
    } else {
      deepLink.classList.add('hidden');
    }
  }

  lucide.createIcons();

  if (shouldScroll) {
      const detailPanel = document.getElementById('detail-panel');
      if (detailPanel) detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}


// ==========================================
// 🚀 Global Application Bootstrapper
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderDayTabs();
  renderItineraryContent();
  if (document.getElementById('attractions-grid')) {
      renderCards();
  }

  // 同步初始化 Lucide Icons（適用於主視圖中的圖標）
  lucide.createIcons();
});

// 滾動回到頂部按鈕狀態
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (backToTopBtn) {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0", "translate-y-10");
    } else {
      backToTopBtn.classList.add("opacity-0", "translate-y-10");
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 📅 吉卜力一日黃金踩點實戰路線渲染與互動邏輯
// ==========================================
function renderGhibliOneDayItinerary() {
  const container = document.getElementById("ghibli-itinerary-timeline");
  if (!container) return;

  const steps = window.ghibliOneDayItinerary || [];
  container.innerHTML = steps.map((step, idx) => {
    // 必吃美食標籤
    let foodHtml = '';
    if (step.foods && step.foods.length > 0) {
      foodHtml = `
        <div class="mt-2 text-[10px]">
          <div class="text-[9px] font-bold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded inline-block mb-1">🍭 必吃美食推薦</div>
          <div class="flex flex-wrap gap-1">
            ${step.foods.map(f => `<span class="bg-amber-50 text-amber-800 border border-amber-200/50 text-[9px] px-1.5 py-0.5 rounded font-bold">${f}</span>`).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div 
        onclick="selectGhibliItineraryStep('${step.zoneId}', this)" 
        class="ghibli-step-card bg-slate-50/50 hover:bg-emerald-50/30 border border-slate-100/80 hover:border-emerald-300 p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-sm flex flex-col justify-between relative group"
        id="ghibli-step-${step.zoneId}"
      >
        <div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-[10px] font-bold font-mono text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full">${step.time}</span>
            <span class="text-base group-hover:scale-125 transition-transform duration-300">${step.icon}</span>
          </div>
          <h4 class="font-bold text-slate-800 text-sm group-hover:text-emerald-800 transition-colors">${step.title}</h4>
          <p class="text-[10px] text-slate-500 mt-1 leading-relaxed">${step.desc}</p>
          ${foodHtml}
        </div>
        
        <div class="mt-4 pt-2 border-t border-slate-100/60 text-[9px] text-slate-400 group-hover:text-emerald-600 transition-colors flex items-center gap-1 font-bold">
          <i class="fa-solid fa-arrow-up-right-from-square text-[8px]"></i> 點擊地圖定位與詳情
        </div>
      </div>
    `;
  }).join('');
}

function selectGhibliItineraryStep(zoneId, element) {
  // 1. 移除所有步驟卡片的高亮樣式
  document.querySelectorAll('.ghibli-step-card').forEach(card => {
    card.classList.remove('border-emerald-500', 'bg-emerald-50/40', 'ring-2', 'ring-emerald-100');
    card.classList.add('border-slate-100/80', 'bg-slate-50/50');
  });

  // 2. 為當前選中的卡片加上高亮樣式
  let activeCard = element;
  if (!activeCard) {
    activeCard = document.getElementById(`ghibli-step-${zoneId}`);
  }
  if (activeCard) {
    activeCard.classList.remove('border-slate-100/80', 'bg-slate-50/50');
    activeCard.classList.add('border-emerald-500', 'bg-emerald-50/40', 'ring-2', 'ring-emerald-100');
  }

  // 3. 調用原本的 selectZone 進行地圖連動高亮與滾動聚焦！
  selectZone(zoneId, true);
}

// ==========================================
// 🔮 魔女之谷 (Valley of Witches) 獨立見學互動邏輯
// ==========================================
let currentValleyFilter = 'all';

function initValleyView() {
  renderValleyMap();
  // 預先選取霍爾的移動城堡
  setTimeout(() => selectValleyZone('howl-castle', false), 100);
}

// 輔助函式：動態創建帶有 XML Namespace 的 SVG 元素
function createValleySVGElement(tagName, attributes = {}) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, value);
    }
    return el;
}

function renderValleyMap() {
    const group = document.getElementById('valley-landmarks-group');
    if (!group) return;
    group.innerHTML = '';

    const valleyLandmarks = window.valleyLandmarks || {};

    for (const [key, item] of Object.entries(valleyLandmarks)) {
        const g = createValleySVGElement('g', {
            'id': `valley-landmark-${key}`,
            'class': 'cursor-pointer group transition-all duration-300 opacity-100',
            'onclick': `selectValleyZone('${key}', true)`
        });

        // 核心地標圓圈
        const circle = createValleySVGElement('circle', {
            'cx': item.cx,
            'cy': item.cy,
            'r': item.r,
            'fill': item.category === 'premium' ? '#d97706' : (item.category === 'food' ? '#ef4444' : (item.category === 'shop' ? '#a855f7' : '#3b82f6')),
            'stroke': '#ffffff',
            'stroke-width': 2.5
        });
        g.appendChild(circle);

        // 內部符號/文字
        const text = createValleySVGElement('text', {
            'x': item.cx,
            'y': item.cy + (item.short === '🐾' || item.short === '🏰' || item.short === '🏡' || item.short === '🔮' || item.short === '🍿' ? 4.5 : 4),
            'fill': 'white',
            'class': 'text-xs font-bold',
            'text-anchor': 'middle'
        });
        text.textContent = item.short;
        g.appendChild(text);

        // 名稱標籤
        const nameText = createValleySVGElement('text', {
            'x': item.cx,
            'y': item.cy + item.r + 15,
            'fill': item.category === 'premium' ? '#78350f' : (item.category === 'food' ? '#991b1b' : (item.category === 'shop' ? '#6b21a8' : '#1e3a8a')),
            'class': 'text-[11px] font-bold',
            'text-anchor': 'middle',
            'filter': 'url(#valley-bg-white)'
        });
        nameText.textContent = item.name;
        g.appendChild(nameText);

        group.appendChild(g);
    }

    // 繪製右側魔女之谷步驟清單
    const valleyTimelineList = document.getElementById('valley-timeline-list');
    if (valleyTimelineList) {
        valleyTimelineList.innerHTML = '';
        for (const [key, item] of Object.entries(valleyLandmarks)) {
            const itemDiv = document.createElement('div');
            itemDiv.id = `valley-timeline-item-${key}`;
            itemDiv.className = 'relative pl-2 cursor-pointer group/item hover:translate-x-1 transition-transform py-1';
            itemDiv.setAttribute('onclick', `selectValleyZone('${key}', true)`);
            
            itemDiv.className += ' opacity-100';

            const dotColor = item.category === 'premium' ? 'bg-amber-600' : (item.category === 'food' ? 'bg-red-500' : (item.category === 'shop' ? 'bg-purple-500' : 'bg-blue-500'));

            itemDiv.innerHTML = `
                <span class="absolute -left-[30px] top-2.5 w-3 h-3 rounded-full ${dotColor} border-2 border-white group-hover/item:scale-125 transition-transform"></span>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-800 group-hover/item:text-amber-800 transition-colors">
                        ${item.short} ${item.name}
                    </span>
                    <span class="text-[9px] font-medium text-slate-400 scale-90">
                        ${item.category === 'premium' ? '核心' : (item.category === 'food' ? '美食' : (item.category === 'shop' ? '購物' : '遊樂'))}
                    </span>
                </div>
            `;
            valleyTimelineList.appendChild(itemDiv);
        }
    }
}

// 點擊地標
function selectValleyZone(zoneKey, shouldScroll = true) {
    const valleyLandmarks = window.valleyLandmarks || {};
    const data = valleyLandmarks[zoneKey];
    if (!data) return;
    // 2. 切換 active 地標狀態，高亮顯示
    document.querySelectorAll('#valley-landmarks-group > g').forEach(el => el.classList.remove('active'));
    const activeG = document.getElementById(`valley-landmark-${zoneKey}`);
    if (activeG) {
        activeG.classList.add('active');
    }

    // 2.2 同步高亮右側清單選項
    document.querySelectorAll('#valley-timeline-list > div').forEach(el => {
        el.className = el.className
            .replace(' bg-amber-50/70 border-l-4 border-amber-600 p-2 rounded-lg', '')
            .replace(' p-2 rounded-lg', '');
    });
    const activeItem = document.getElementById(`valley-timeline-item-${zoneKey}`);
    if (activeItem) {
        activeItem.className += ' bg-amber-50/70 border-l-4 border-amber-600 p-2 rounded-lg';
    }

    // 3. 隱藏空狀態提示，顯露內容區
    const emptyState = document.getElementById('valley-empty-state');
    if (emptyState) emptyState.classList.add('hidden');
    const contentArea = document.getElementById('valley-content-area');
    if (contentArea) contentArea.classList.remove('hidden');

    // 4. 渲染 Badge 與標題
    const badge = document.getElementById('valley-zone-badge');
    if (badge) {
        badge.innerText = data.short;
        badge.className = `w-6 h-6 flex items-center justify-center font-bold rounded-xl text-xs text-white ${data.badgeColor}`;
    }
    
    const zoneTitle = document.getElementById('valley-zone-title');
    if (zoneTitle) zoneTitle.innerText = data.name;

    const zoneType = document.getElementById('valley-zone-type');
    if (zoneType) {
        const typeText = data.category === 'premium' ? '🏛️ 核心見學建築' : (data.category === 'food' ? '🍔 美食餐飲' : (data.category === 'shop' ? '🛍️ 限定購物官方店' : '🎡 戶外特色遊樂'));
        zoneType.innerHTML = `
            <i data-lucide="tag" class="w-3 h-3"></i>
            <span>${typeText}</span>
        `;
    }

    // 5. 渲染景點列表
    const spotList = document.getElementById('valley-spot-list');
    if (spotList) {
        spotList.innerHTML = '';
        data.spots.forEach(spot => {
            const li = document.createElement('li');
            li.className = 'p-2 bg-slate-50/80 rounded-xl border border-slate-100/60 hover:border-amber-200 transition-all';
            li.innerHTML = `
                <div class="font-bold text-slate-800 text-xs flex items-center gap-1">
                    <span class="text-amber-600">✦</span> ${spot.name}
                </div>
                <div class="text-[10px] text-slate-500 mt-0.5 pl-3 leading-relaxed">${spot.desc}</div>
            `;
            spotList.appendChild(li);
        });
    }

    // 6. 渲染見學祕笈 (過濾掉 excessive Premium 詞彙)
    const premiumTipBox = document.getElementById('valley-premium-tip-box');
    if (premiumTipBox) {
        let cleanedTip = data.premiumTip
            .replace(/👑 <strong>尊榮福利<\/strong>：/g, '✦ <strong>見學祕笈<\/strong>：')
            .replace(/持 Premium 的遊客，/g, '')
            .replace(/Premium 參觀路線中/g, '參觀內部時')
            .replace(/普通大散步票無法參觀的極佳福利/g, '極富教育與參觀價值的體驗');

        premiumTipBox.innerHTML = cleanedTip;
    }

    // 7. 若為 13 人魔女團，顯示 7 月夏季玩偶停售警報，其他則隱藏
    const alertBox = document.getElementById('valley-summer-alert-box');
    if (alertBox) {
        if (zoneKey === 'witches-13') {
            alertBox.classList.remove('hidden');
            alertBox.innerHTML = `
                <span class="font-bold text-red-800 flex items-center gap-1 mb-1 text-[10px]">
                    <i data-lucide="alert-circle" class="w-3 h-3"></i> 7 月出遊特別提醒
                </span>
                人氣周邊「菌菌」玩偶夏季期間（7~10月）暫停售賣！可轉為收藏店內限定、帶有13人魔女章印的馬克杯或精緻刺繡托特包。
            `;
        } else {
            alertBox.classList.add('hidden');
        }
    }

    // 重新刷新 Lucide 圖標
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // 平滑滾動讓遊客更易閱讀
    if (shouldScroll) {
      const detailPanel = document.getElementById('valley-detail-panel');
      if (detailPanel) detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 摺疊與展開魔女之谷面版
function toggleValleyAccordion(forceState = null) {
  const accordion = document.getElementById('valley-accordion-content');
  const arrow = document.getElementById('valley-arrow');
  if (!accordion || !arrow) return;

  let shouldOpen = accordion.classList.contains('hidden');
  if (forceState !== null) {
      shouldOpen = (forceState === 'open');
  }

  if (shouldOpen) {
      accordion.classList.remove('hidden');
      arrow.style.transform = 'rotate(180deg)';
      initValleyView();
  } else {
      accordion.classList.add('hidden');
      arrow.style.transform = 'rotate(0deg)';
  }
}

// 當點擊主圖魔女之谷時，自動拉開魔女之谷專區並滾動聚焦
function expandValleyAndScroll() {
  toggleValleyAccordion('open');
  const depthSection = document.getElementById('valley-depth-section');
  if (depthSection) {
      setTimeout(() => {
          depthSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
  }
}





