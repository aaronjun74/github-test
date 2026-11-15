// ===== 행성 데이터 (NASA 자료 기준 근삿값) =====
const planets = [
  {
    name: "수성", en: "Mercury", type: "rocky", diameter: 4879,
    color: "radial-gradient(circle at 30% 30%, #d9d4cc, #8c8680 60%, #4a4642)",
    desc: "태양에 가장 가까운 가장 작은 행성입니다. 대기가 거의 없어 낮에는 430°C, 밤에는 -180°C까지 떨어집니다.",
    facts: { "지름": "4,879 km", "태양까지 거리": "약 5,800만 km", "공전 주기": "88일", "하루 길이": "약 176일", "위성": "0개", "평균 온도": "167°C" },
    fun: "수성의 1년(88일)은 수성의 하루(약 176일)보다 짧습니다."
  },
  {
    name: "금성", en: "Venus", type: "rocky", diameter: 12104,
    color: "radial-gradient(circle at 30% 30%, #fff1c9, #e3bb76 55%, #a0703a)",
    desc: "두꺼운 이산화탄소 대기가 열을 가두어 태양계에서 가장 뜨거운 행성입니다. 밤하늘에서 달 다음으로 밝게 보입니다.",
    facts: { "지름": "12,104 km", "태양까지 거리": "약 1억 820만 km", "공전 주기": "225일", "자전 주기": "243일 (거꾸로 돎)", "위성": "0개", "평균 온도": "464°C" },
    fun: "금성은 다른 행성과 반대 방향으로 자전해서, 해가 서쪽에서 뜹니다."
  },
  {
    name: "지구", en: "Earth", type: "rocky", diameter: 12742,
    color: "radial-gradient(circle at 30% 30%, #9be7ff, #2f7fd8 45%, #2e8b57 65%, #0b2a5b)",
    desc: "표면에 액체 상태의 물이 있고, 지금까지 생명체가 확인된 유일한 행성입니다.",
    facts: { "지름": "12,742 km", "태양까지 거리": "약 1억 4,960만 km", "공전 주기": "365.25일", "하루 길이": "24시간", "위성": "1개 (달)", "평균 온도": "15°C" },
    fun: "태양에서 지구까지의 거리를 1 AU(천문단위)라고 부르고, 행성 사이 거리를 잴 때 씁니다."
  },
  {
    name: "화성", en: "Mars", type: "rocky", diameter: 6779,
    color: "radial-gradient(circle at 30% 30%, #ffb08a, #d0532c 55%, #7a2410)",
    desc: "산화철(녹) 먼지 때문에 붉게 보이는 행성입니다. 탐사 로버들이 지금도 표면을 조사하고 있습니다.",
    facts: { "지름": "6,779 km", "태양까지 거리": "약 2억 2,790만 km", "공전 주기": "687일", "하루 길이": "24시간 37분", "위성": "2개", "평균 온도": "-65°C" },
    fun: "태양계에서 가장 높은 산인 올림푸스 산(약 22 km)이 화성에 있습니다. 에베레스트의 약 2.5배입니다."
  },
  {
    name: "목성", en: "Jupiter", type: "gas", diameter: 139820,
    color: "repeating-linear-gradient(170deg, #e8c9a0 0 8%, #b97d4b 8% 14%, #f1dcc0 14% 22%, #a86b3c 22% 27%), radial-gradient(circle, #d9a877, #8a5a33)",
    desc: "태양계에서 가장 큰 행성으로, 다른 모든 행성을 합친 것보다 두 배 넘게 무겁습니다.",
    facts: { "지름": "139,820 km", "태양까지 거리": "약 7억 7,850만 km", "공전 주기": "약 11.9년", "하루 길이": "약 9시간 56분", "위성": "95개 이상", "평균 온도": "-110°C" },
    fun: "목성의 '대적점'은 지구보다 큰 폭풍으로, 수백 년째 계속되고 있습니다."
  },
  {
    name: "토성", en: "Saturn", type: "gas", diameter: 116460, ring: true,
    color: "repeating-linear-gradient(170deg, #f3e2b8 0 10%, #d8b878 10% 16%, #efd9a6 16% 26%), radial-gradient(circle, #e6cc8f, #a8844a)",
    desc: "얼음과 암석 조각으로 된 아름다운 고리를 가진 행성입니다. 밀도가 물보다 낮습니다.",
    facts: { "지름": "116,460 km", "태양까지 거리": "약 14억 3,000만 km", "공전 주기": "약 29.4년", "하루 길이": "약 10시간 33분", "위성": "270개 이상", "평균 온도": "-140°C" },
    fun: "토성을 담을 만큼 큰 욕조가 있다면 토성은 물에 뜰 것입니다."
  },
  {
    name: "천왕성", en: "Uranus", type: "ice", diameter: 50724,
    color: "radial-gradient(circle at 30% 30%, #e0ffff, #8fd8e0 55%, #3b8f9c)",
    desc: "자전축이 약 98° 기울어 옆으로 누운 채 태양을 도는 얼음 거인입니다.",
    facts: { "지름": "50,724 km", "태양까지 거리": "약 28억 7,000만 km", "공전 주기": "약 84년", "하루 길이": "약 17시간 14분", "위성": "28개 이상", "평균 온도": "-195°C" },
    fun: "누워서 돌기 때문에 한쪽 극은 42년 동안 낮, 42년 동안 밤이 이어집니다."
  },
  {
    name: "해왕성", en: "Neptune", type: "ice", diameter: 49244,
    color: "radial-gradient(circle at 30% 30%, #9ab8ff, #3b5bdb 55%, #14246b)",
    desc: "태양에서 가장 먼 행성입니다. 태양계에서 가장 빠른 바람이 붑니다.",
    facts: { "지름": "49,244 km", "태양까지 거리": "약 45억 km", "공전 주기": "약 165년", "하루 길이": "약 16시간", "위성": "16개 이상", "평균 온도": "-200°C" },
    fun: "해왕성은 망원경으로 찾기 전에 수학 계산으로 위치를 먼저 예측한 행성입니다."
  }
];

const typeLabel = { rocky: "암석 행성", gas: "가스 행성", ice: "얼음 행성" };

// 행성 원 만들기
function makePlanet(p, size) {
  const el = document.createElement("div");
  el.className = "planet" + (p.ring ? " ringed" : "");
  el.style.background = p.color;
  if (size) el.style.width = size + "px";
  return el;
}

// ===== 1. 행성 카드 =====
const grid = document.getElementById("grid");

planets.forEach((p, i) => {
  const card = document.createElement("button");
  card.className = "card";
  card.dataset.type = p.type;
  card.append(makePlanet(p));
  card.insertAdjacentHTML("beforeend", `
    <p class="num">PLANET 0${i + 1}</p>
    <h3>${p.name}</h3>
    <p class="en">${p.en}</p>
    <span class="tag">${typeLabel[p.type]}</span>
  `);
  card.addEventListener("click", () => openModal(p));
  grid.append(card);
});

// ===== 2. 필터 =====
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    const t = btn.dataset.type;
    document.querySelectorAll(".card").forEach(c => {
      c.classList.toggle("hide", t !== "all" && c.dataset.type !== t);
    });
  });
});

// ===== 3. 크기 비교 (목성 = 160px 기준) =====
const compare = document.getElementById("compare");
const maxD = Math.max(...planets.map(p => p.diameter));

planets.forEach(p => {
  const item = document.createElement("div");
  item.className = "compare-item";
  const size = Math.max(4, (p.diameter / maxD) * 160);
  item.append(makePlanet({ ...p, ring: false }, size));
  item.insertAdjacentHTML("beforeend", `<span>${p.name}</span>`);
  compare.append(item);
});

// ===== 4. 상세 창 =====
const modal = document.getElementById("modal");

function openModal(p) {
  const big = document.getElementById("m-planet");
  big.className = "modal-planet planet" + (p.ring ? " ringed" : "");
  big.style.background = p.color;

  document.getElementById("m-en").textContent = p.en;
  document.getElementById("m-name").textContent = p.name;
  document.getElementById("m-desc").textContent = p.desc;
  document.getElementById("m-fun").textContent = "💡 " + p.fun;
  document.getElementById("m-facts").innerHTML = Object.entries(p.facts)
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  modal.hidden = false;
  document.getElementById("close").focus();
}

function closeModal() { modal.hidden = true; }

document.getElementById("close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ===== 5. 첫 화면 궤도 애니메이션 =====
const system = document.querySelector(".orbit-system");

planets.forEach((p, i) => {
  const orbit = document.createElement("div");
  orbit.className = "orbit";
  const r = 22 + i * 10;                       // 궤도 크기(%)
  orbit.style.width = orbit.style.height = r + "%";
  orbit.style.animationDuration = (6 + i * 4) + "s";

  const dot = document.createElement("div");
  dot.className = "dot";
  const s = [6, 9, 9, 7, 18, 15, 11, 11][i];  // 점 크기(px)
  dot.style.width = dot.style.height = s + "px";
  dot.style.background = p.color;
  orbit.append(dot);
  system.append(orbit);
});

// ===== 6. 반짝이는 별 배경 =====
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  stars = Array.from({ length: Math.floor(innerWidth * innerHeight / 4000) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.2,
    phase: Math.random() * Math.PI * 2
  }));
}

function draw(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    ctx.globalAlpha = 0.4 + 0.6 * Math.abs(Math.sin(t / 1500 + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

addEventListener("resize", resize);
resize();
requestAnimationFrame(draw);
