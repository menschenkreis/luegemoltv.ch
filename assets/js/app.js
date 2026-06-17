// =========================================
// LuegemolTV – Traditionelle Schweiz
// Swiss Travel Blog JavaScript
// =========================================

// Video data – hardcoded from YouTube channel
const VIDEOS = [
    // --- 5 Neueste Videos ---
    {
        id: "jB_Id5y2b2c",
        title: "Gotthelf Märit 2026 | Wie früecher – Handwerk, Musik und Emmentaler Köstlichkeiten in Sumiswald",
        duration: "4:59",
        category: "brauchtum",
        desc: "Handwerk, Musik und Emmentaler Köstlichkeiten – der Gotthelf Märit 2026 in Sumiswald wie zu früheren Zeiten."
    },
    {
        id: "qmbKNVlmZz8",
        title: "Alpaufzug im Val d'Hérens – Wenn Eringerkühe auf die Alpage d'Arbey ziehen",
        duration: "6:04",
        category: "alpaufzug",
        desc: "Eringerkühe auf dem Weg zur Alpage d'Arbey im wunderschönen Val d'Hérens."
    },
    {
        id: "u5A9KaIO4Tk",
        title: "Alpfahrt Appenzellerland 2026 – Mehrere Alpaufzüge zur Schwägalp und ins Alpsteingebiet",
        duration: "4:09",
        category: "alpaufzug",
        desc: "Mehrere traditionelle Alpaufzüge im Appenzellerland zur Schwägalp und ins Alpsteingebiet."
    },
    {
        id: "uJPDOp42Hu4",
        title: "Öberefahre in Urnäsch – Alpaufzug im Appenzellerland",
        duration: "5:31",
        category: "alpaufzug",
        desc: "Die Öberefahre in Urnäsch – ein traditionsreicher Alpaufzug im Appenzellerland."
    },
    {
        id: "bXv7LiUHJRM",
        title: "Teigwahlen, Feuer & Konfetti – Badener Fasnacht 2026 hautnah!",
        duration: "6:53",
        category: "fasnacht",
        desc: "Die Badener Fasnacht 2026 mit Teigwahlen, Feuer und Konfetti – hautnah miterlebt."
    },
    {
        id: "69pH5r6FewU",
        title: "Tschäggättä Lötschental 2026 – Tradition trotzt dem Bergsturz",
        duration: "8:26",
        category: "tschaeggattae",
        desc: "Die wilden Tschäggättä im Lötschental – ein Brauchtum, das trotz Bergsturz weiterlebt."
    },
    // --- 5 Meistangesehene Videos ---
    {
        id: "Qmi6_tt-a4M",
        title: "Alpabzug Engstligenalp 2025 – 68.500+ Aufrufe",
        duration: "7:28",
        category: "alpabzug",
        desc: "Der wunderschöne Alpabzug auf der Engstligenalp 2025 – das meistgesehene LuegemolTV-Video."
    },
    {
        id: "G0oUDRckGf4",
        title: "Alpaufzug Engstligenalp 2025 – 33.800+ Aufrufe",
        duration: "",
        category: "alpaufzug",
        desc: "Der Alpaufzug auf die Engstligenalp 2025 – über 33.000 Mal angesehen."
    },
    {
        id: "tS9PWTHDc_A",
        title: "Alpabzug Flimserstein 2025 – 22.000+ Aufrufe",
        duration: "12:45",
        category: "alpabzug",
        desc: "Der farbenfrohe Alpabzug am Flimserstein 2025 – ein Publikumsmagnet."
    },
    {
        id: "yXaxwHGVgaY",
        title: "Chästeilet Justistal 2025 – 20.000+ Aufrufe",
        duration: "7:46",
        category: "brauchtum",
        desc: "Der traditionelle Chästeilet im wunderschönen Justistal – über 20.000 Aufrufe."
    },
    {
        id: "XfpmrERRD68",
        title: "Bodäfahrt 2025 – 14.700+ Aufrufe",
        duration: "",
        category: "alpabzug",
        desc: "Die Bodäfahrt 2025 – ein schweizweit einzigartiges Erlebnis mit über 14.000 Aufrufen."
    },
    {
        id: "LwD5lzJVVUQ",
        title: "Entlebucher Alpabfahrt, Schüpfheim 2025 – 8.700+ Aufrufe",
        duration: "8:59",
        category: "alpabzug",
        desc: "Die wunderschöne Entlebucher Alpabfahrt in Schüpfheim 2025 – ein Farbspektakel."
    }
];

const CATEGORY_LABELS = {
    alpaufzug: "🐄 Alpaufzüge",
    alpabzug: "🔔 Alpabzüge",
    trachtenfest: "👗 Trachtenfeste",
    jodelfest: "🎵 Jodelfeste",
    fasnacht: "🎭 Fasnacht",
    tschaeggattae: "👹 Tschäggättä",
    carnaval: "🎊 Carnaval",
    bekanntmachen: "📣 Brauchtümer bekannt machen",
    bewahren: "🏛️ Traditionen bewahren",
    brauchtum: "🕯️ Brauchtum",
    alp: "🏔️ Alpen",
    alpabzug: "🔔 Alpabzüge",
    natur: "🎵 Volklore"
};

const HASH_ALIASES = {
    "#home": "#start",
    "#about": "#ueber-uns",
    "#traditions": "#brauchtum",
    "#contact": "#kontakt"
};

// ---- Initialize ----
document.addEventListener("DOMContentLoaded", () => {
    normalizeHashAlias();
    initNavbar();
    initVideoGrid();
    initFilters();
    initAboutImageLinks();
    initModal();
    initScrollReveal();
    initCountUp();
    initIntroPlay();
    window.addEventListener("hashchange", normalizeHashAlias);
});

function normalizeHashAlias() {
    const targetHash = HASH_ALIASES[window.location.hash];
    if (!targetHash) return;

    history.replaceState(null, "", targetHash);
    requestAnimationFrame(() => {
        document.querySelector(targetHash)?.scrollIntoView();
    });
}

// ---- Navbar ----
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
    });

    toggle.addEventListener("click", () => {
        links.classList.toggle("open");
        toggle.classList.toggle("active");
    });

    // Close mobile menu on link click
    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
            toggle.classList.remove("active");
        });
    });
}

// ---- Video Grid ----
function initVideoGrid() {
    const grid = document.getElementById("videoGrid");
    renderVideos(VIDEOS, grid);
}

function renderVideos(videos, container) {
    container.innerHTML = "";
    if (!videos.length) {
        const empty = document.createElement("div");
        empty.className = "video-empty";
        empty.innerHTML = `
            <strong>Aktuell sind in dieser Kategorie keine Videos ausgewählt.</strong>
            <span>Über den YouTube-Kanal findest du weitere Filme von LuegemolTV.</span>
        `;
        container.appendChild(empty);
        return;
    }

    videos.forEach((video, index) => {
        const card = createVideoCard(video, index);
        container.appendChild(card);
    });
}

function createVideoCard(video, index) {
    const card = document.createElement("div");
    card.className = "video-card reveal";
    card.dataset.category = video.category;
    card.style.transitionDelay = `${index * 0.05}s`;

    const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

    card.innerHTML = `
        <div class="video-thumb">
            <img src="${thumb}" alt="${video.title}" loading="lazy">
            <div class="video-play">
                <div class="video-play-circle">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
            <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-meta">
                <span class="video-category">${CATEGORY_LABELS[video.category] || video.category}</span>
                <span>LuegemolTV</span>
            </div>
        </div>
    `;

    card.addEventListener("click", () => openModal(video));

    return card;
}

// ---- Filters ----
function getFilteredVideos(filter) {
    if (filter === "all") return VIDEOS;
    return VIDEOS.filter(video =>
        video.category === filter || (Array.isArray(video.tags) && video.tags.includes(filter))
    );
}

function setActiveFilter(filter) {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === filter);
    });
}

function applyVideoFilter(filter, options = {}) {
    const grid = document.getElementById("videoGrid");
    if (!grid) return;

    setActiveFilter(filter);
    renderVideos(getFilteredVideos(filter), grid);
    setTimeout(() => initScrollReveal(), 50);

    if (options.scroll) {
        document.getElementById("videos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            applyVideoFilter(btn.dataset.filter);
        });
    });
}

function initAboutImageLinks() {
    document.querySelectorAll("[data-video-filter]").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            history.pushState(null, "", "#videos");
            applyVideoFilter(link.dataset.videoFilter, { scroll: true });
        });
    });
}

// ---- Modal ----
function initModal() {
    const modal = document.getElementById("videoModal");
    const backdrop = modal.querySelector(".modal-backdrop");
    const closeBtn = document.getElementById("modalClose");

    const closeModal = () => {
        modal.classList.remove("active");
        document.getElementById("videoIframe").src = "";
        const videoLocal = document.getElementById("videoLocal");
        if (videoLocal) {
            videoLocal.pause();
            videoLocal.src = "";
        }
        document.body.style.overflow = "";
    };

    backdrop.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

function openModal(video) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoIframe");
    const videoLocal = document.getElementById("videoLocal");
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDesc");
    const modalContent = modal.querySelector(".modal-content");
    const modalVideo = modal.querySelector(".modal-video");

    if (video.isLocal) {
        iframe.style.display = "none";
        iframe.src = "";
        
        if (videoLocal) {
            videoLocal.style.display = "block";
            videoLocal.src = video.url;
            videoLocal.play();
        }
        
        // Adapt modal styling for vertical/portrait aspect ratio
        if (modalContent) modalContent.style.maxWidth = "450px";
        if (modalVideo) modalVideo.style.aspectRatio = "9/16";
    } else {
        if (videoLocal) {
            videoLocal.style.display = "none";
            videoLocal.pause();
            videoLocal.src = "";
        }
        
        iframe.style.display = "block";
        iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
        
        // Reset modal styling for wide 16:9 aspect ratio
        if (modalContent) modalContent.style.maxWidth = "900px";
        if (modalVideo) modalVideo.style.aspectRatio = "16/9";
    }

    title.textContent = video.title;
    desc.textContent = video.desc || "";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ---- Intro Play ----
function initIntroPlay() {
    const playBtn = document.getElementById("playIntroBtn");
    const heroVideo = document.querySelector(".hero-video");
    
    const openIntro = (e) => {
        if (e) e.preventDefault();
        openModal({
            isLocal: true,
            url: "assets/images/luegemoltv-intro.mp4?v=3",
            title: "LuegemolTV – Intro-Film",
            desc: "Das offizielle LuegemolTV Intro-Video in voller Auflösung."
        });
    };

    if (playBtn) {
        playBtn.addEventListener("click", openIntro);
    }
    if (heroVideo) {
        heroVideo.style.cursor = "pointer";
        heroVideo.addEventListener("click", openIntro);
        // Make the container indicate clickability
        const heroBg = document.querySelector(".hero-bg");
        if (heroBg) {
            heroBg.style.cursor = "pointer";
            heroBg.addEventListener("click", openIntro);
        }
    }
}

// ---- Scroll Reveal ----
function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal:not(.visible)");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    elements.forEach(el => observer.observe(el));
}

// ---- Count Up Animation ----
function initCountUp() {
    const counters = document.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                animateCount(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function animateCount(el, target) {
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 30);
}
