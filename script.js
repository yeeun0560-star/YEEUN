/* ============================================================
   Image helper — maps PDF page numbers to file paths
   ============================================================ */
const pageImg = (n) => `images/test1_page-${String(n).padStart(4, "0")}.jpg`;
const pages = (from, to) => {
  const arr = [];
  for (let n = from; n <= to; n++) arr.push(pageImg(n));
  return arr;
};

/* ============================================================
   Portfolio data — 6 projects, each with its slide gallery
   ============================================================ */
const PROJECTS = [
  {
    index: "01",
    category: "APP 리뉴얼",
    title: "롯데백화점 앱 리뉴얼",
    sub: "개인화 디스커버와 고객 중심 UX로 재편한 앱 리뉴얼 프로젝트",
    color: "#4a3f34",
    tags: ["UI/UX", "GNB 개편", "쉬움모드"],
    cover: pageImg(14),
    slides: pages(14, 19),
    overview:
      "생애주기·관심사 기반 개인화 영역을 강화하고 지점별 콘텐츠를 메인에 적극 활용했습니다. GNB를 개편하고 시니어를 위한 '쉬움모드'를 도입해 사용성을 넓혔습니다.",
    roles: [
      "디스커버 기반 개인화 취향 조사 및 메인화면 구성",
      "지점별 콘텐츠·찜하기 중심의 고객 중심 UX 설계",
      "GNB 개편 및 채널 간 일관성 확보, 앱 설치 유도 UI",
      "파트너사 어드민 및 IA 메뉴 구조 설계",
    ],
    results: [
      { num: "41%", label: "리뉴얼 후 마이롯데 클릭 구성비" },
      { num: "20%", label: "쉬움모드 쿠폰 메뉴 이용률" },
    ],
  },
  {
    index: "02",
    category: "마이크로 사이트 구축",
    title: "타임빌라스 마이크로 사이트",
    sub: "복합 쇼핑 문화공간의 브랜드 경험을 담은 MOW / PC 홈페이지 개발",
    color: "#0f2d8c",
    tags: ["브랜딩", "UI/UX", "Figma"],
    cover: pageImg(10),
    slides: pages(10, 11),
    overview:
      "기존 백화점 웹페이지와 차별화하기 위해 비주얼 브랜딩을 강화하고, '특별한 시간(Time you deserve)'이라는 브랜드 메시지를 시각적으로 풀어낸 마이크로 플랫폼입니다.",
    roles: [
      "타임빌라스 브랜드 웹사이트 컨셉 및 정보구조 설계",
      "모바일·PC 화면 설계 및 UI/UX 정의 (Figma)",
      "Avenue 카테고리 중심의 인터랙션·플로팅 버튼 기획",
      "브랜드 무드에 맞춘 메인 모션 영상 루프 구성",
    ],
    results: [
      { num: "MOW+PC", label: "반응형 채널 동시 구축" },
      { num: "1.1v", label: "화면설계 상세 버전 관리" },
    ],
  },
  {
    index: "03",
    category: "APP Push · 마케팅",
    title: "APP Push 활성화 마케팅",
    sub: "마케팅 수신 동의 프로세스 개선과 유도 팝업으로 동의 고객 확대",
    color: "#33611f",
    tags: ["프로세스 개선", "그로스", "데이터 분석"],
    cover: pageImg(12),
    slides: pages(12, 13),
    overview:
      "알림 동의 프로세스를 기존 5단계에서 3단계로 축소하고, 고객 행동이 발생하는 영역(FAN 브랜드 설정·좋아요·쿠폰 다운로드)에 유도 팝업을 노출해 동의율을 끌어올렸습니다.",
    roles: [
      "기기·광고 알림 동의 프로세스 5단계 → 3단계 간소화",
      "고객 행동 맥락에 맞춘 동의 유도 팝업 설계",
      "월별 동의 고객 증가 추이 분석 및 성과 리포팅",
    ],
    results: [
      { num: "+45.4%", label: "동의 고객 증가" },
      { num: "+92만", label: "신규 동의 고객 수" },
      { num: "292만", label: "누적 동의 고객" },
    ],
  },
  {
    index: "04",
    category: "우수고객 · 모바일 서비스",
    title: "우수고객 모바일 서비스",
    sub: "APP을 활용한 우수고객 편의 서비스 기획 · 온·오프라인 통합 운영",
    color: "#17786c",
    tags: ["앱 서비스 기획", "가이드북", "초대회 운영"],
    cover: pageImg(5),
    slides: pages(4, 9),
    overview:
      "백화점 매출의 47%가 APP 고객을 통해 발생하고, 상위 2%의 우수고객이 전체 매출의 1/4을 견인합니다. 이 데이터를 근거로 APP을 중심에 둔 우수고객 전용 편의 서비스를 기획했습니다.",
    roles: [
      "AVENUEL POINT, 주차 혜택 등록 등 우수고객 전용 서비스 설계",
      "추첨형 리조트 · 프라이빗룸 예약 · 스마트오더 편의 기능 기획",
      "우수고객 초대회의 온·오프라인 통합 모바일 서비스 운영",
      "등급별 베네핏을 담은 우수고객 모바일 가이드북 개발",
    ],
    results: [
      { num: "47%", label: "APP 고객 통해 발생한 매출" },
      { num: "70%", label: "월간 APP 사용자 → 구매 전환" },
      { num: "99%", label: "초대회 QR 인증 입장률" },
    ],
  },
  {
    index: "05",
    category: "모바일 DM",
    title: "지점별 쇼핑정보 서비스 (Shop Now)",
    sub: "지점 주요 행사를 큐레이션하는 본사 주도 모바일 DM 서비스 기획",
    color: "#0f5238",
    tags: ["큐레이션", "어드민", "QA"],
    cover: pageImg(23),
    slides: pages(20, 26),
    overview:
      "월평균 150건 이상 무작위로 노출되던 지점별 쇼핑정보를, 본사 주도의 일관된 컨셉으로 큐레이션할 수 있는 서비스로 개선했습니다. 어드민에서 언제나 수정 가능하고 광고 기간이 자동 설정됩니다.",
    roles: [
      "'#Shop Now' 메인·리스트·상세 화면 설계 (Figma)",
      "콘텐츠·이미지·HTML 유형별 등록 어드민 프로세스 구축",
      "테스트 시나리오 작성 및 개발 QA 진행",
      "광고 효과 분석 대시보드 기반 성과 검증",
    ],
    results: [
      { num: "8만", label: "월 샵나우 이용자" },
      { num: "21만", label: "월 PV" },
    ],
  },
  {
    index: "06",
    category: "매장안내 키오스크",
    title: "인터랙티브 매장안내 키오스크",
    sub: "전점 일원화 플랫폼과 App 데이터 연동으로 재설계한 키오스크",
    color: "#1d2c45",
    tags: ["플랫폼화", "API 연동", "다국어"],
    cover: pageImg(28),
    slides: pages(27, 32),
    overview:
      "점별로 상이하던 어드민·하드웨어·UI를 하나의 플랫폼으로 통합했습니다. 키오스크용 API 연동으로 App 데이터를 자동 반영하고, 매장 환경과 사용성을 고려해 직접 디자인·설계했습니다.",
    roles: [
      "메인·매장검색·위치안내 등 9개 핵심 기능 화면설계",
      "행사안내(Shop Now)·식당가예약·롯백리뷰 API 연동 기획",
      "투어맵·외국인 쇼핑뉴스·AI FAQ 다국어 서비스 기획",
      "WBS 일정 관리 및 API·데이터 연동 코드 분류",
    ],
    results: [
      { num: "전점", label: "단일 시스템 일원화" },
      { num: "다국어", label: "외국인 고객 대응" },
      { num: "API", label: "App 데이터 자동 반영" },
    ],
  },
];

/* Gradient backgrounds for the Work cards (image-free thumbnails) */
const GRADIENT = {
  "01": "linear-gradient(135deg, #6b5c4d, #4a3f34)",
  "02": "linear-gradient(135deg, #2a5bd7, #0f2d8c)",
  "03": "linear-gradient(135deg, #5a8f3c, #33611f)",
  "04": "linear-gradient(135deg, #2bb0a1, #17786c)",
  "05": "linear-gradient(135deg, #1f8a68, #0f5238)",
  "06": "linear-gradient(135deg, #34496b, #1d2c45)",
};

/* ============================================================
   Render projects (image-free gradient cards)
   ============================================================ */
const projectsWrap = document.getElementById("projects");

projectsWrap.innerHTML = PROJECTS.map(
  (p, i) => `
  <article class="project reveal" style="--pj:${GRADIENT[p.index]};--pjSolid:${p.color}" data-index="${i}" tabindex="0" role="button" aria-label="${p.title} 자세히 보기">
    <div class="project__top">
      <span class="project__index">PROJECT ${p.index}</span>
      <span class="project__cat">${p.category}</span>
    </div>
    <div class="project__body">
      <h3 class="project__title">${p.title}</h3>
      <p class="project__sub">${p.sub}</p>
      <div class="project__meta">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
    <span class="project__cta" aria-hidden="true">↗</span>
  </article>`
).join("");

/* ============================================================
   Modal (project detail + slide gallery)
   ============================================================ */
const modal = document.createElement("div");
modal.className = "modal";
modal.setAttribute("aria-hidden", "true");
modal.innerHTML = `
  <div class="modal__backdrop" data-close></div>
  <div class="modal__panel" role="dialog" aria-modal="true">
    <button class="modal__close" data-close aria-label="닫기">×</button>
    <div class="modal__hero" id="modalHero">
      <span class="modal__cat" id="modalCat"></span>
      <h3 class="modal__title" id="modalTitle"></h3>
      <p class="modal__sub" id="modalSub"></p>
    </div>
    <div class="modal__content" id="modalContent"></div>
  </div>`;
document.body.appendChild(modal);

let currentProject = null;

function openModal(i) {
  const p = PROJECTS[i];
  currentProject = p;
  modal.querySelector("#modalHero").style.background = GRADIENT[p.index];
  modal.querySelector("#modalCat").textContent = `PROJECT ${p.index} · ${p.category}`;
  modal.querySelector("#modalTitle").textContent = p.title;
  modal.querySelector("#modalSub").textContent = p.sub;
  modal.querySelector(".modal__panel").style.setProperty("--pjSolid", p.color);

  modal.querySelector("#modalContent").innerHTML = `
    <div class="modal__block">
      <div class="modal__label">Slides · ${p.slides.length}</div>
      <div class="carousel" id="carousel">
        <div class="carousel__viewport" id="carouselViewport">
          <div class="carousel__track" id="carouselTrack">
            ${p.slides
              .map(
                (src, idx) =>
                  `<div class="carousel__slide">
                     <img src="${src}" alt="${p.title} 슬라이드 ${idx + 1}" data-slide="${idx}" loading="lazy" draggable="false" />
                   </div>`
              )
              .join("")}
          </div>
        </div>
        <button class="carousel__nav carousel__nav--prev" id="carouselPrev" aria-label="이전 슬라이드">‹</button>
        <button class="carousel__nav carousel__nav--next" id="carouselNext" aria-label="다음 슬라이드">›</button>
        <span class="carousel__count" id="carouselCount"></span>
        <div class="carousel__dots" id="carouselDots">
          ${p.slides.map((_, idx) => `<button class="carousel__dot" data-dot="${idx}" aria-label="${idx + 1}번째 슬라이드로 이동"></button>`).join("")}
        </div>
      </div>
      <p class="carousel__hint">이미지를 좌우로 스와이프하거나 클릭해 크게 볼 수 있어요</p>
    </div>
    <div class="modal__block">
      <div class="modal__label">Overview</div>
      <p>${p.overview}</p>
    </div>
    <div class="modal__block">
      <div class="modal__label">My Role</div>
      <ul class="modal__list">${p.roles.map((r) => `<li>${r}</li>`).join("")}</ul>
    </div>
    <div class="modal__block">
      <div class="modal__label">Results</div>
      <div class="modal__results">
        ${p.results.map((r) => `<div class="modal__result"><b>${r.num}</b><span>${r.label}</span></div>`).join("")}
      </div>
    </div>`;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.scrollTop = 0;
  initCarousel(p);
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (!lightbox.classList.contains("is-open")) document.body.style.overflow = "";
}

projectsWrap.addEventListener("click", (e) => {
  const card = e.target.closest(".project");
  if (card) openModal(+card.dataset.index);
});
projectsWrap.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".project");
    if (card) {
      e.preventDefault();
      openModal(+card.dataset.index);
    }
  }
});
modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeModal();
});

/* ============================================================
   Carousel (one slide at a time · arrows · dots · swipe)
   ============================================================ */
let carousel = {};

function initCarousel(p) {
  const viewport = document.getElementById("carouselViewport");
  const track = document.getElementById("carouselTrack");
  const prev = document.getElementById("carouselPrev");
  const next = document.getElementById("carouselNext");
  const count = document.getElementById("carouselCount");
  const dots = [...document.querySelectorAll("#carouselDots .carousel__dot")];
  const total = p.slides.length;

  carousel = { index: 0, total };

  function update() {
    track.style.transform = `translateX(-${carousel.index * 100}%)`;
    count.textContent = `${carousel.index + 1} / ${total}`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === carousel.index));
    prev.classList.toggle("is-hidden", carousel.index === 0);
    next.classList.toggle("is-hidden", carousel.index === total - 1);
  }
  function goTo(i) {
    carousel.index = Math.max(0, Math.min(total - 1, i));
    update();
  }
  carousel.goTo = goTo;

  prev.addEventListener("click", () => goTo(carousel.index - 1));
  next.addEventListener("click", () => goTo(carousel.index + 1));
  dots.forEach((d) => d.addEventListener("click", () => goTo(+d.dataset.dot)));

  /* pointer / touch swipe — listeners bound only while dragging */
  let startX = 0, dx = 0, moved = false;
  const width = () => viewport.clientWidth;

  function onMove(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    dx = x - startX;
    if (Math.abs(dx) > 6) moved = true;
    track.style.transform = `translateX(calc(-${carousel.index * 100}% + ${dx}px))`;
  }
  function onUp() {
    track.style.transition = "";
    const threshold = width() * 0.18;
    if (dx <= -threshold) goTo(carousel.index + 1);
    else if (dx >= threshold) goTo(carousel.index - 1);
    else update();
    dx = 0;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", onUp);
  }
  function onDown(e) {
    moved = false;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    track.style.transition = "none";
    if (e.type === "mousedown") {
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    } else {
      document.addEventListener("touchmove", onMove, { passive: true });
      document.addEventListener("touchend", onUp);
    }
  }

  viewport.addEventListener("mousedown", onDown);
  viewport.addEventListener("touchstart", onDown, { passive: true });

  /* click a slide (without dragging) → full-size lightbox */
  track.addEventListener("click", (e) => {
    const img = e.target.closest("img[data-slide]");
    if (img && !moved) openLightbox(+img.dataset.slide);
  });

  update();
}

/* ============================================================
   Lightbox (full-size slide viewer with prev/next)
   ============================================================ */
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("aria-hidden", "true");
lightbox.innerHTML = `
  <button class="lightbox__close" data-lb-close aria-label="닫기">×</button>
  <button class="lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="이전">‹</button>
  <img class="lightbox__img" id="lightboxImg" alt="" />
  <button class="lightbox__nav lightbox__nav--next" data-lb-next aria-label="다음">›</button>
  <span class="lightbox__counter" id="lightboxCounter"></span>`;
document.body.appendChild(lightbox);

let lbIndex = 0;

function renderLightbox() {
  const slides = currentProject.slides;
  document.getElementById("lightboxImg").src = slides[lbIndex];
  document.getElementById("lightboxImg").alt = `${currentProject.title} 슬라이드 ${lbIndex + 1}`;
  document.getElementById("lightboxCounter").textContent = `${lbIndex + 1} / ${slides.length}`;
}
function openLightbox(idx) {
  if (!currentProject) return;
  lbIndex = idx;
  renderLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  if (!modal.classList.contains("is-open")) document.body.style.overflow = "";
}
function stepLightbox(dir) {
  const len = currentProject.slides.length;
  lbIndex = (lbIndex + dir + len) % len;
  renderLightbox();
}
lightbox.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-lb-close") || e.target === lightbox) closeLightbox();
  if (e.target.hasAttribute("data-lb-prev")) stepLightbox(-1);
  if (e.target.hasAttribute("data-lb-next")) stepLightbox(1);
});

/* ============================================================
   Keyboard
   ============================================================ */
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("is-open")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
    return;
  }
  if (modal.classList.contains("is-open")) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft" && carousel.goTo) carousel.goTo(carousel.index - 1);
    if (e.key === "ArrowRight" && carousel.goTo) carousel.goTo(carousel.index + 1);
  }
});

/* ============================================================
   Scroll reveal
   ============================================================ */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.querySelectorAll(".hero .reveal").forEach((el, i) => {
  el.style.transitionDelay = `${0.15 + i * 0.12}s`;
});

/* ============================================================
   Nav: scroll state + progress + mobile toggle
   ============================================================ */
const nav = document.getElementById("nav");
const progress = document.getElementById("scrollProgress");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("is-scrolled", y > window.innerHeight - 100);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(y / h) * 100}%`;
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

navToggle.addEventListener("click", () => navLinks.classList.toggle("is-open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("is-open"))
);
