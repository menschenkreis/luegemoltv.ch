// =========================================
// LuegemolTV – Traditionelle Schweiz
// Swiss Travel Blog JavaScript
// =========================================

// Video data – hardcoded from YouTube channel
const VIDEOS = [
    {
        id: "qmbKNVlmZz8",
        title: "Alpaufzug im Val d'Hérens – Wenn Eringerkühe auf die Alpage d'Arbey ziehen",
        duration: "6:04",
        category: "alp",
        desc: "Eringerkühe auf dem Weg zur Alpage d'Arbey im wunderschönen Val d'Hérens."
    },
    {
        id: "u5A9KaIO4Tk",
        title: "Alpfahrt Appenzellerland 2026 – Mehrere Alpaufzüge zur Schwägalp und ins Alpsteingebiet",
        duration: "4:09",
        category: "alp",
        desc: "Mehrere traditionelle Alpaufzüge im Appenzellerland zur Schwägalp und ins Alpsteingebiet."
    },
    {
        id: "uJPDOp42Hu4",
        title: "Öberefahre in Urnäsch – Alpaufzug im Appenzellerland",
        duration: "5:31",
        category: "alp",
        desc: "Die Öberefahre in Urnäsch – ein traditionsreicher Alpaufzug im Appenzellerland."
    },
    {
        id: "bXv7LiUHJRM",
        title: "Teigwahlen, Feuer & Konfetti – Badener Fasnacht 2026 hautnah!",
        duration: "6:53",
        category: "brauchtum",
        desc: "Die Badener Fasnacht 2026 mit Teigwahlen, Feuer und Konfetti – hautnah miterlebt."
    },
    {
        id: "69pH5r6FewU",
        title: "Tschäggättä Lötschental 2026 – Tradition trotzt dem Bergsturz",
        duration: "8:26",
        category: "brauchtum",
        desc: "Die wilden Tschäggättä im Lötschental – ein Brauchtum, das trotz Bergsturz weiterlebt."
    },
    {
        id: "Oj4yprTeqyI",
        title: "Altsilvesterchlausen Waldstatt 2026 – Appenzeller Brauchtum live erleben",
        duration: "7:22",
        category: "brauchtum",
        desc: "Altsilvesterchlausen in Waldstatt 2026 – Appenzeller Brauchtum zum Anfassen."
    },
    {
        id: "I3O15lHTsbk",
        title: "Silvesterchlausen Urnäsch 2025 – Neuer Silvester – Appenzeller Brauchtum 4K",
        duration: "8:04",
        category: "brauchtum",
        desc: "Silvesterchlausen in Urnäsch zum Neuen Silvester – in brillanter 4K-Qualität."
    },
    {
        id: "GLGC4_pkYNg",
        title: "Neujahrskonzert Dulliken 2025 – Jodeln mit Jodlerfründe Aaretal",
        duration: "7:11",
        category: "natur",
        desc: "Neujahrskonzert in Dulliken mit den Jodlerfründen Aaretal und der Familie Krummenacher."
    },
    {
        id: "cGydfsAFmjA",
        title: "Klausjagen Küssnacht 2025",
        duration: "7:47",
        category: "brauchtum",
        desc: "Das traditionsreiche Klausjagen in Küssnacht – ein spektakuläres Brauchtum."
    },
    {
        id: "xae3o5wD4Yo",
        title: "Trinklerumzug Kerns 2025 – 700 Treicheln – Kaffeebähnchen-Geheimnis gelüftet!",
        duration: "9:04",
        category: "brauchtum",
        desc: "700 Treicheln beim Trinklerumzug in Kerns – inklusive Kaffeebähnchen-Geheimnis."
    },
    {
        id: "59mcuFCqL0M",
        title: "Kuh Grand Prix Flumserberg 2025 – Spektakuläres Kuhrennen am Alpkäsemarkt!",
        duration: "9:14",
        category: "alp",
        desc: "Ein spektakuläres Kuhrennen am Alpkäsemarkt auf dem Flumserberg."
    },
    {
        id: "LwD5lzJVVUQ",
        title: "Entlebucher Alpabfahrt, Schüpfheim 2025",
        duration: "8:59",
        category: "alp",
        desc: "Die wunderschöne Entlebucher Alpabfahrt in Schüpfheim 2025."
    },
    {
        id: "tS9PWTHDc_A",
        title: "Alpabzug Flimserstein 2025",
        duration: "12:45",
        category: "alp",
        desc: "Der farbenfrohe Alpabzug am Flimserstein 2025."
    },
    {
        id: "yXaxwHGVgaY",
        title: "Chästeilet Justistal 2025",
        duration: "7:46",
        category: "brauchtum",
        desc: "Der traditionelle Chästeilet im wunderschönen Justistal."
    },
    {
        id: "oZctEypwQsc",
        title: "Alpabfahrt Mels 2025 – Von Kohlschlag bis Walabütz – 6 Alpen an einem Tag",
        duration: "8:05",
        category: "alp",
        desc: "6 Alpen an einem Tag – die Alpabfahrt in Mels von Kohlschlag bis Walabütz."
    }
];

const CATEGORY_LABELS = {
    alp: "🏔️ Alpen",
    brauchtum: "🎭 Brauchtum",
    natur: "🌿 Natur"
};

// ---- Initialize ----
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initVideoGrid();
    initFilters();
    initModal();
    initScrollReveal();
    initCountUp();
});

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
    });

    // Close mobile menu on link click
    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("open");
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
function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            const grid = document.getElementById("videoGrid");
            const filtered = filter === "all"
                ? VIDEOS
                : VIDEOS.filter(v => v.category === filter);

            renderVideos(filtered, grid);
            // Re-trigger reveal
            setTimeout(() => initScrollReveal(), 50);
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
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDesc");

    iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
    title.textContent = video.title;
    desc.textContent = video.desc || "";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
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
