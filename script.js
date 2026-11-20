/* ============================================================
   Maria Alamoudi — Personal CV Website
   Language switching (AR/EN + RTL/LTR), nav, reveal animations
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "maria-cv-lang";

  /* ---------------- Translations ---------------- */
  var dict = {
    ar: {
      "doc.title": "ماريا العمودي | الإدارة المالية",
      "doc.desc": "الموقع الشخصي لماريا العمودي — الإدارة المالية والتحليل المالي والعمليات الإدارية.",

      "a11y.skip": "تخطّي إلى المحتوى",
      "nav.aria": "التنقل الرئيسي",
      "nav.toggle": "فتح القائمة",
      "nav.close": "إغلاق القائمة",
      "nav.home": "الرئيسية",
      "nav.about": "نبذة عني",
      "nav.education": "التعليم",
      "nav.skills": "المهارات",
      "nav.contact": "التواصل",
      "nav.language": "تغيير اللغة",

      "hero.name": "ماريا العمودي",
      "hero.title": "الإدارة المالية | التحليل المالي والعمليات الإدارية",
      "hero.lead": "أسعى إلى تطوير مهاراتي المالية والرقمية وتطبيقها في بيئات عملية تساهم في تحسين الأداء ودعم اتخاذ القرار.",
      "hero.cta1": "استكشف سيرتي",
      "hero.cta2": "تواصل معي",

      "about.eyebrow": "نظرة عامة",
      "about.title": "نبذة عني",
      "about.text": "أهتم بالمجالات المالية والإدارية، مع تركيز على تطوير مهاراتي في إعداد الميزانيات ودراسات الجدوى وتنظيم البيانات المالية. كما أعمل على تعزيز قدراتي في استخدام الأدوات الرقمية، وخاصة Microsoft Excel، بهدف تحويل المعرفة الأكاديمية إلى تطبيقات عملية وبناء أساس مهني قوي.",

      "edu.eyebrow": "المؤهلات الدراسية",
      "edu.title": "التعليم",
      "edu.uni": "الجامعة الإسلامية بمنيسوتا – أمريكا",
      "edu.1.degree": "بكالوريوس الإدارة المالية",
      "edu.1.status": "قيد الدراسة",
      "edu.1.mode": "تعليم عن بُعد",
      "edu.2.degree": "دبلوم اللغة الإنجليزية المكثف",
      "edu.2.note": "بالتزامن مع برنامج البكالوريوس",

      "skills.eyebrow": "الكفاءات",
      "skills.title": "المهارات والتطبيق الأكاديمي",
      "skills.tech": "المهارات التقنية",
      "skills.academic": "التطبيق الأكاديمي",
      "skills.note": "تطبيقات أكاديمية ناتجة عن الدراسة، وليست خبرة عملية.",
      "skill.excel": "Microsoft Excel",
      "skill.computer": "استخدام الحاسب والبرامج المكتبية",
      "skill.data": "تنظيم وتحليل البيانات المالية",
      "level.intermediate": "متوسط",
      "app.1.name": "إعداد الميزانيات",
      "app.1.desc": "إعداد وتنظيم الميزانيات ضمن التطبيقات الدراسية.",
      "app.2.name": "دراسات الجدوى",
      "app.2.desc": "إعداد دراسات الجدوى كتطبيق أكاديمي.",
      "app.3.name": "تطبيقات Excel المالية",
      "app.3.desc": "تنظيم وحساب البيانات المالية باستخدام Excel.",

      "contact.eyebrow": "للتواصل",
      "contact.title": "اللغات والتواصل",
      "lang.title": "اللغات",
      "lang.ar": "العربية",
      "lang.ar.level": "اللغة الأم",
      "lang.en": "الإنجليزية",
      "lang.en.level": "جيد",
      "contact.info": "بيانات التواصل",
      "contact.location.label": "الموقع",
      "contact.location.value": "مكة المكرمة، المملكة العربية السعودية",
      "contact.email.label": "البريد الإلكتروني",
      "contact.email.aria": "راسليني عبر البريد الإلكتروني",
      "contact.phone.label": "رقم الهاتف",
      "contact.phone.aria": "اتصلي بي",

      "footer.copy": "© 2026 Maria Alamoudi",

      "theme.toDark": "تفعيل الوضع الليلي",
      "theme.toLight": "تفعيل الوضع النهاري",

      "lang.switchLabel": "English"
    },

    en: {
      "doc.title": "Maria Alamoudi | Financial Management",
      "doc.desc": "The personal website of Maria Alamoudi — Financial Management, financial analysis and administrative operations.",

      "a11y.skip": "Skip to content",
      "nav.aria": "Main navigation",
      "nav.toggle": "Open menu",
      "nav.close": "Close menu",
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.language": "Change language",

      "hero.name": "Maria Alamoudi",
      "hero.title": "Financial Management | Financial Analysis & Administrative Operations",
      "hero.lead": "I aim to develop my financial and digital skills and apply them in professional environments that contribute to improving performance and supporting decision-making.",
      "hero.cta1": "Explore My Profile",
      "hero.cta2": "Get in Touch",

      "about.eyebrow": "Overview",
      "about.title": "About Me",
      "about.text": "I am interested in financial and administrative fields, with a focus on developing my skills in budget preparation, feasibility studies, and organizing financial data. I also work on strengthening my ability to use digital tools, particularly Microsoft Excel, in order to turn academic knowledge into practical applications and build a strong professional foundation.",

      "edu.eyebrow": "Academic Background",
      "edu.title": "Education",
      "edu.uni": "Islamic University of Minnesota – USA",
      "edu.1.degree": "Bachelor's in Financial Management",
      "edu.1.status": "In Progress",
      "edu.1.mode": "Distance Learning",
      "edu.2.degree": "Intensive English Diploma",
      "edu.2.note": "Studied concurrently with the Bachelor's program",

      "skills.eyebrow": "Competencies",
      "skills.title": "Skills & Academic Application",
      "skills.tech": "Technical Skills",
      "skills.academic": "Academic Application",
      "skills.note": "Academic applications drawn from my studies, not professional experience.",
      "skill.excel": "Microsoft Excel",
      "skill.computer": "Computer & Office Software Skills",
      "skill.data": "Organizing & Analyzing Financial Data",
      "level.intermediate": "Intermediate",
      "app.1.name": "Budget Preparation",
      "app.1.desc": "Preparing and organizing budgets as part of academic coursework.",
      "app.2.name": "Feasibility Studies",
      "app.2.desc": "Preparing feasibility studies as an academic application.",
      "app.3.name": "Financial Excel Applications",
      "app.3.desc": "Organizing and calculating financial data using Excel.",

      "contact.eyebrow": "Get in Touch",
      "contact.title": "Languages & Contact",
      "lang.title": "Languages",
      "lang.ar": "Arabic",
      "lang.ar.level": "Native",
      "lang.en": "English",
      "lang.en.level": "Good",
      "contact.info": "Contact Details",
      "contact.location.label": "Location",
      "contact.location.value": "Makkah, Saudi Arabia",
      "contact.email.label": "Email",
      "contact.email.aria": "Email me",
      "contact.phone.label": "Phone",
      "contact.phone.aria": "Call me",

      "footer.copy": "© 2026 Maria Alamoudi",

      "theme.toDark": "Switch to dark mode",
      "theme.toLight": "Switch to light mode",

      "lang.switchLabel": "العربية"
    }
  };

  var html = document.documentElement;
  var langToggle = document.getElementById("langToggle");
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  var header = document.getElementById("site-header");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  var currentLang = "ar";

  function getStoredLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") return stored;
    } catch (e) { /* storage unavailable */ }
    return null;
  }

  function storeLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function t(key) {
    return (dict[currentLang] && dict[currentLang][key]) || dict.ar[key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(el.getAttribute("data-i18n"));
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var value = t(key);
        if (value) el.setAttribute(attr, value);
      });
    });
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ar";
    html.setAttribute("lang", currentLang);
    html.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
    document.title = t("doc.title");
    applyTranslations();

    if (langToggle) {
      var switchLabel = t("lang.switchLabel");
      langToggle.textContent = switchLabel;
      langToggle.setAttribute("aria-label", switchLabel + " — " + t("nav.language"));
    }
    updateToggleAria();
    updateThemeButton();

    storeLang(currentLang);
  }

  /* ---------------- Mobile menu ---------------- */
  function isMobileNav() {
    return window.matchMedia("(max-width: 760px)").matches;
  }

  function updateToggleAria() {
    if (!navToggle) return;
    var open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", open ? t("nav.close") : t("nav.toggle"));
  }

  function setMenu(open) {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", String(open));
    navMenu.classList.toggle("is-open", open);
    updateToggleAria();
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setMenu(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  if (navMenu) {
    navMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", function () {
    if (!isMobileNav()) setMenu(false);
  });

  /* ---------------- Sticky header state ---------------- */
  function onScroll() {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Active nav link ---------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 5, 4) * 60 + "ms";
      revealObserver.observe(el);
    });
  }

  /* ---------------- Language toggle ---------------- */
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      setLanguage(currentLang === "ar" ? "en" : "ar");
    });
  }

  /* ---------------- Theme (dark / light) ---------------- */
  var themeToggle = document.getElementById("themeToggle");
  var THEME_KEY = "maria-cv-theme";

  function isDarkMode() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function getStoredTheme() {
    try {
      var stored = window.localStorage.getItem(THEME_KEY);
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) { /* storage unavailable */ }
    return null;
  }

  function updateThemeButton() {
    if (!themeToggle) return;
    var dark = isDarkMode();
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", t(dark ? "theme.toLight" : "theme.toDark"));
  }

  function setTheme(dark, persist) {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    if (persist) {
      try { window.localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch (e) { /* ignore */ }
    }
    updateThemeButton();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      setTheme(!isDarkMode(), true);
    });
  }

  /* The system preference is intentionally not followed: light is the default
     and dark mode only activates when the visitor presses the toggle (persisted above). */

  /* ---------------- Init ---------------- */
  updateThemeButton();
  setLanguage(getStoredLang() || "ar");
})();
