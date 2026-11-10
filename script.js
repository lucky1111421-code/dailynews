document.addEventListener("DOMContentLoaded", () => {
  // PRE-FED COMPREHENSIVE NEWS DATABASE
  const NEWS_DATABASE = [
    // GENERAL / TOP STORIES
    {
      id: "gen-1",
      category: "general",
      categoryLabel: "Global Dispatch",
      source: "Reuters",
      title: "Global Summit Agrees on New Framework for Artificial Intelligence Safety",
      readTime: "4 min read",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
      description: "Delegates from 28 nations have signed a landmark international agreement establishing shared safety evaluations for frontier artificial intelligence models.",
      content: "GENEVA — In what international observers are calling a major milestone in digital multilateralism, representatives from twenty-eight nations have finalized a comprehensive consensus framework for frontier AI testing.\n\nThe treaty establishes independent evaluation protocols for autonomous reasoning systems, mandatory transparency on training datasets exceeding frontier thresholds, and international incident reporting mechanisms. Technical working groups will convene bi-annually to review safety milestones and update computational limits.",
      takeaway: "Nations pledge coordinated safety assessments and cross-border research on frontier AI models."
    },
    {
      id: "gen-2",
      category: "general",
      categoryLabel: "Clean Energy",
      source: "Associated Press",
      title: "Global Renewable Generation Surpasses 35% of Total Grid Output in 2026",
      readTime: "3 min read",
      date: "4 hours ago",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=80",
      description: "Accelerated solar deployment and offshore wind additions in Europe and Asia propel renewable energy to historic production milestones.",
      content: "BRUSSELS — A joint report released this morning by international energy consortiums confirms that renewable generation provided more than thirty-five percent of global electricity across the past twelve months.\n\nRapid cost declines in utility-scale battery storage and advanced grid orchestration systems enabled countries to integrate intermittent renewable sources with minimal curtailment, setting a viable trajectory toward carbon reduction targets.",
      takeaway: "Grid-scale battery storage and solar expansion drive record renewable share worldwide."
    },
    {
      id: "gen-3",
      category: "general",
      categoryLabel: "Infrastructure",
      source: "BBC News",
      title: "Trans-Continental High-Speed Rail Corridor Opens Ahead of Schedule",
      readTime: "5 min read",
      date: "6 hours ago",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop&q=80",
      description: "The 1,200-kilometer electrified high-speed rail corridor connects major trade hubs with zero direct emissions and speeds exceeding 320 km/h.",
      content: "PARIS — Commercial operations commenced today on the newly commissioned high-speed rail link connecting five metropolitan hubs across Central Europe. The project, funded through public-private partnerships, represents one of the largest sustainable transit investments of the decade.",
      takeaway: "High-speed rail expansion significantly reduces short-haul aviation travel across commercial corridors."
    },

    // TECHNOLOGY
    {
      id: "tech-1",
      category: "technology",
      categoryLabel: "Software Engineering",
      source: "TechCrunch",
      title: "Open-Source AI Models Match Proprietary Benchmarks with 10x Less Compute",
      readTime: "4 min read",
      date: "1 hour ago",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      description: "Novel architectural pruning and synthetic distillation techniques allow sub-10-billion parameter models to rival frontier commercial systems.",
      content: "SAN FRANCISCO — AI researchers have open-sourced a suite of lightweight reasoning models that score within margin of error of commercial API models on standard code generation and STEM evaluation benchmarks.\n\nBy leveraging multi-token prediction heads, speculative decoding, and high-fidelity synthetic reasoning chains, the research team demonstrated that open-source models can run locally on consumer workstations at blazing inference speeds.",
      takeaway: "Efficient model architectures allow high-capability AI to run entirely on local developer hardware."
    },
    {
      id: "tech-2",
      category: "technology",
      categoryLabel: "Hardware",
      source: "Wired",
      title: "Quantum Processors Demonstrate Real-World Error Correction in Chemistry Simulations",
      readTime: "5 min read",
      date: "3 hours ago",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80",
      description: "A team of physicists successfully demonstrates logical qubits with fault-tolerant error suppression running complex molecular bonding equations.",
      content: "OXFORD — In a major breakthrough published in Nature today, quantum engineers showed that a logical qubit system using surface code error correction survived through 10,000 algorithmic cycles without decoherence failure, modeling enzymatic catalyst reactions accurately.",
      takeaway: "Fault-tolerant logical qubits transition quantum computing from theoretical physics to practical chemistry."
    },
    {
      id: "tech-3",
      category: "technology",
      categoryLabel: "Cybersecurity",
      source: "The Verge",
      title: "Web Standards Body Ratifies Post-Quantum Cryptography for All Major Browsers",
      readTime: "3 min read",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
      description: "Next-generation lattice-based cryptographic algorithms become standard in TLS handshakes across Chromium, Safari, and Firefox.",
      content: "REDMOND — The World Wide Web Consortium and IETF have officially approved post-quantum key exchange mechanisms to secure internet communications against prospective quantum decryption attacks, with automatic rollout scheduled across standard browser builds.",
      takeaway: "The entire web infrastructure is proactively migrating to quantum-resistant encryption algorithms."
    },

    // BUSINESS
    {
      id: "biz-1",
      category: "business",
      categoryLabel: "Venture Capital",
      source: "Bloomberg",
      title: "Venture Investment in Climate Tech Reaches Highest Level Since 2021",
      readTime: "4 min read",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80",
      description: "Capital allocators double down on geothermal drilling, industrial decarbonization, and solid-state battery manufacturing startups.",
      content: "NEW YORK — Global venture capital investments in sustainability infrastructure and industrial hardware surpassed thirty-eight billion dollars this quarter, as institutional funds prioritize tangible physical assets alongside automated digital platforms.",
      takeaway: "Investors pivot heavily toward hardware, grid storage, and direct carbon utilization ventures."
    },
    {
      id: "biz-2",
      category: "business",
      categoryLabel: "Semiconductors",
      source: "Financial Times",
      title: "New 2nm Fabrication Facilities Ramp Up Production in Record Time",
      readTime: "4 min read",
      date: "7 hours ago",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
      description: "High-NA EUV lithography achieves commercial yields, paving the way for 30% more power-efficient mobile and cloud processors.",
      content: "HSINCHU — Semiconductor fabrication giants have begun mass shipping commercial wafers built on next-generation gate-all-around 2nm transistors. The advancements allow datacenter accelerators to cut thermal footprints substantially while increasing throughput.",
      takeaway: "Commercial 2nm chips deliver dramatic efficiency boosts for edge and cloud workloads."
    },

    // SCIENCE
    {
      id: "sci-1",
      category: "science",
      categoryLabel: "Astrophysics",
      source: "Nature",
      title: "James Webb Telescope Discovers Atmospheric Water Vapor on Terrestrial Exoplanet",
      readTime: "5 min read",
      date: "3 hours ago",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80",
      description: "Spectroscopic transmission data from a rocky planet 42 light-years away confirms water vapor and chemical disequilibria in its atmosphere.",
      content: "BALTIMORE — Deep infrared spectra captured during four planetary transits across star LHS 1140 have revealed conclusive signatures of a thick atmospheric envelope containing steam, nitrogen, and carbon dioxide, making it the most promising temperate terrestrial world studied to date.",
      takeaway: "Spectroscopy confirms a rich atmosphere on a nearby rocky planet within the habitable zone."
    },
    {
      id: "sci-2",
      category: "science",
      categoryLabel: "Oceanography",
      source: "Scientific American",
      title: "Deep-Sea Expedition Maps Over 100 Previously Unknown Marine Species",
      readTime: "4 min read",
      date: "8 hours ago",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80",
      description: "Robotic submersibles exploring the Salas y Gómez Ridge in the Pacific document bioluminescent corals, glass sponges, and uncharted sea life.",
      content: "VALPARAÍSO — An international marine expedition utilizing high-definition remote submersibles reached ocean depths of 4,500 meters along underwater mountain ranges off South America, documenting thriving hydrothermal ecosystems untouched by human activity.",
      takeaway: "Abyssal biodiversity surveys reveal thriving ecosystems in remote underwater mountain ranges."
    },

    // HEALTH
    {
      id: "health-1",
      category: "health",
      categoryLabel: "Neuroscience",
      source: "The Lancet",
      title: "Targeted Sleep Wave Stimulation Shown to Accelerate Memory Consolidation",
      readTime: "3 min read",
      date: "4 hours ago",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80",
      description: "Non-invasive acoustic closed-loop stimulation during deep sleep boosts long-term synaptic retention by 28% in randomized clinical trials.",
      content: "BOSTON — Clinical researchers have validated a wearable neurotechnology protocol that synchronizes pink noise micro-bursts with slow-wave sleep oscillations, demonstrating marked improvements in both cognitive recall and neural cellular repair.",
      takeaway: "Non-invasive neuro-stimulation during deep sleep measurably enhances recall and cellular recovery."
    },
    {
      id: "health-2",
      category: "health",
      categoryLabel: "Genomics",
      source: "Stat News",
      title: "Single-Dose Gene Therapy Approved for Rare Congenital Vision Disorder",
      readTime: "4 min read",
      date: "9 hours ago",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80",
      description: "Regulatory authorities grant unanimous approval for a precision base-editing treatment that halts retinal degeneration.",
      content: "LONDON — In a landmark decision for genomic medicine, European medicines regulators have authorized commercial use of a CRISPR-derived base editing therapeutic that permanently rectifies mutated rod photoreceptor proteins in pediatric patients.",
      takeaway: "Base-editing treatments demonstrate permanent, safe restoration of sensory neural pathways."
    },

    // SPORTS
    {
      id: "sports-1",
      category: "sports",
      categoryLabel: "Football / Soccer",
      source: "ESPN",
      title: "Champions League Quarter-Finals Deliver Historic 9-Goal Classic",
      readTime: "3 min read",
      date: "1 hour ago",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80",
      description: "A stoppage-time volley seals a dramatic 5-4 aggregate triumph before an electric capacity crowd in Munich.",
      content: "MUNICH — In one of the most thrilling European knockouts in modern football history, two continental giants traded lead changes five times across ninety minutes of relentless counter-attacking play before a 94th-minute screamer decided the tie.",
      takeaway: "An unforgettable European night capped with stoppage-time brilliance captivates football fans."
    },
    {
      id: "sports-2",
      category: "sports",
      categoryLabel: "Formula 1",
      source: "Sky Sports",
      title: "New Aerodynamic Regulations Create Closest Qualifying Grid in 15 Years",
      readTime: "3 min read",
      date: "6 hours ago",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80",
      description: "Less than three-tenths of a second separates the top ten cars in qualifying ahead of the Grand Prix.",
      content: "SILVERSTONE — Technical regulations mandating simplified active front wings and standardized underfloor venturi tunnels produced historic parity, with four different constructors qualifying within a tenth of a second for pole position.",
      takeaway: "Stricter aerodynamic regulations deliver unprecedented competitive parity across Formula 1."
    }
  ];

  // PERSISTED SAVED ARTICLES (BOOKMARKS)
  const SAVED_KEY = "dailybrief-saved-stories";
  let savedIds = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");

  function saveBookmarks() {
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedIds));
    updateSavedCount();
  }

  function updateSavedCount() {
    const badge = document.getElementById("savedCount");
    if (badge) badge.textContent = savedIds.length;
  }
  updateSavedCount();

  // DOM Elements
  const dateEl = document.getElementById("date");
  const yearEl = document.getElementById("year");
  const categoriesContainer = document.getElementById("categories");
  const searchInput = document.getElementById("newsSearch");
  const clearSearchBtn = document.getElementById("clearSearch");
  const articlesGrid = document.getElementById("articles");
  const noticeEl = document.getElementById("notice");
  const noArticlesEl = document.getElementById("noArticles");
  const resetNewsBtn = document.getElementById("resetNewsBtn");
  const savedStoriesBtn = document.getElementById("savedStoriesBtn");

  // Modal Elements
  const articleModal = document.getElementById("articleModal");
  const modalClose = document.getElementById("modalClose");
  const modalContent = document.getElementById("modalContent");

  // State
  let currentCategory = "general";
  let currentSearch = "";
  let isSavedOnly = false;

  // Set date banner
  if (dateEl) {
    dateEl.textContent = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date());
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Fallback SVG Generator for images
  function getFallbackCoverSvg(category, title) {
    const encoded = encodeURIComponent(title.slice(0, 30));
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="350" viewBox="0 0 600 350"><rect width="600" height="350" fill="%23232622"/><text x="50" y="160" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="%23f6f3eb">${encoded}...</text><text x="50" y="210" font-family="sans-serif" font-size="14" font-weight="bold" fill="%23c84b2c" letter-spacing="2">DAILYBRIEF &bull; ${category.toUpperCase()}</text></svg>`;
  }

  // RENDER ARTICLES
  function renderArticles() {
    let list = [...NEWS_DATABASE];

    // Filter by saved stories
    if (isSavedOnly) {
      list = list.filter((a) => savedIds.includes(a.id));
    } else if (currentCategory !== "all") {
      list = list.filter((a) => a.category === currentCategory);
    }

    // Filter by search query
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      list = list.filter((a) => {
        return (
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.content.toLowerCase().includes(q) ||
          a.source.toLowerCase().includes(q) ||
          a.categoryLabel.toLowerCase().includes(q)
        );
      });
    }

    articlesGrid.innerHTML = "";

    if (list.length === 0) {
      noArticlesEl.hidden = false;
      articlesGrid.hidden = true;
      noticeEl.textContent = `0 articles found`;
      return;
    }

    noArticlesEl.hidden = true;
    articlesGrid.hidden = false;

    let noticeText = `${list.length} stories`;
    if (isSavedOnly) noticeText += ` saved in bookmarks`;
    else noticeText += ` in ${currentCategory}`;
    if (currentSearch) noticeText += ` matching "${currentSearch}"`;
    noticeEl.textContent = noticeText;

    list.forEach((article) => {
      const card = document.createElement("article");
      card.className = "article-card";
      card.dataset.id = article.id;

      const isSaved = savedIds.includes(article.id);

      card.innerHTML = `
        <div class="article-thumb-wrap">
          <img 
            class="article-thumb" 
            src="${article.image}" 
            alt="${article.title}" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${getFallbackCoverSvg(article.category, article.title)}'"
          >
          <span class="article-category-tag">${article.categoryLabel}</span>
        </div>
        <div class="article-body">
          <div class="article-meta">
            <span>${article.source} &bull; ${article.date}</span>
            <span>${article.readTime}</span>
          </div>
          <h2 class="article-title">${article.title}</h2>
          <p class="article-desc">${article.description}</p>
          <div class="article-footer">
            <span class="read-btn">READ STORY &rarr;</span>
            <button 
              type="button" 
              class="save-card-btn ${isSaved ? "saved" : ""}" 
              data-id="${article.id}"
              title="${isSaved ? "Remove bookmark" : "Save article"}"
              aria-label="Bookmark article"
            >${isSaved ? "🔖 Saved" : "🔖 Save"}</button>
          </div>
        </div>
      `;

      // Click card to open full reader modal
      card.addEventListener("click", (e) => {
        if (e.target.closest(".save-card-btn")) return;
        openArticleModal(article);
      });

      // Bookmark button
      const saveBtn = card.querySelector(".save-card-btn");
      saveBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSaveArticle(article.id);
      });

      articlesGrid.append(card);
    });
  }

  function toggleSaveArticle(articleId) {
    if (savedIds.includes(articleId)) {
      savedIds = savedIds.filter((id) => id !== articleId);
    } else {
      savedIds.push(articleId);
    }
    saveBookmarks();
    renderArticles();
  }

  // OPEN ARTICLE MODAL
  function openArticleModal(article) {
    const isSaved = savedIds.includes(article.id);

    modalContent.innerHTML = `
      <div class="modal-header-meta">${article.categoryLabel} &bull; ${article.readTime}</div>
      <h1 class="modal-title">${article.title}</h1>
      <div class="modal-byline">Reported by <strong>${article.source}</strong> &bull; Published ${article.date}</div>
      <img 
        class="modal-img" 
        src="${article.image}" 
        alt="${article.title}"
        onerror="this.onerror=null; this.src='${getFallbackCoverSvg(article.category, article.title)}'"
      >
      <div class="modal-takeaway">
        <strong>Key Takeaway</strong>
        ${article.takeaway}
      </div>
      <div class="modal-text">
        ${article.content.split("\n\n").map((p) => `<p style="margin-bottom:18px;">${p}</p>`).join("")}
      </div>
      <div style="margin-top:28px; display:flex; gap:12px; align-items:center;">
        <button type="button" id="modalSaveBtn" class="saved-stories-btn ${isSaved ? "active" : ""}">
          ${isSaved ? "🔖 Saved to Reading List" : "🔖 Save for Later"}
        </button>
      </div>
    `;

    const modalSaveBtn = document.getElementById("modalSaveBtn");
    modalSaveBtn.addEventListener("click", () => {
      toggleSaveArticle(article.id);
      const nowSaved = savedIds.includes(article.id);
      modalSaveBtn.classList.toggle("active", nowSaved);
      modalSaveBtn.textContent = nowSaved ? "🔖 Saved to Reading List" : "🔖 Save for Later";
    });

    articleModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    articleModal.hidden = true;
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  articleModal.addEventListener("click", (e) => {
    if (e.target === articleModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !articleModal.hidden) closeModal();
  });

  // CATEGORY TABS
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      isSavedOnly = false;
      savedStoriesBtn.classList.remove("active");
      renderArticles();
    });
  });

  // SAVED STORIES TOGGLE
  savedStoriesBtn.addEventListener("click", () => {
    isSavedOnly = !isSavedOnly;
    savedStoriesBtn.classList.toggle("active", isSavedOnly);
    if (isSavedOnly) {
      document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
    } else {
      document.querySelector(`[data-cat="${currentCategory}"]`)?.classList.add("active");
    }
    renderArticles();
  });

  // SEARCH INPUT
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    clearSearchBtn.hidden = currentSearch.length === 0;
    renderArticles();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearSearchBtn.hidden = true;
    renderArticles();
    searchInput.focus();
  });

  // RESET
  resetNewsBtn.addEventListener("click", () => {
    currentSearch = "";
    searchInput.value = "";
    clearSearchBtn.hidden = true;
    currentCategory = "general";
    isSavedOnly = false;
    savedStoriesBtn.classList.remove("active");
    document.querySelectorAll(".cat-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.cat === "general");
    });
    renderArticles();
  });

  // INITIAL LOAD
  renderArticles();
});