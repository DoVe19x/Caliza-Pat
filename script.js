(function () {
  "use strict";

  // Marque le document : active la révélation au défilement (CSS .js .cake-card).
  document.documentElement.classList.add("js");

  var WHATSAPP_NUMBER = "32470841257";
  var EMAIL_ADDRESS = "caliza-pat@hotmail.com";
  var LANG_KEY = "caliza-lang";

  var I18N = window.CALIZA_I18N || { fr: { t: {}, cakes: {}, tagLabels: {}, meta: {} } };
  var LANGS = window.CALIZA_LANGS || ["fr"];
  var FALLBACK = I18N.fr;

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Ordre = ordre d'affichage dans la galerie. Le nouveau gâteau de mariage
  // est la 1re photo (photo de présentation principale du carrousel).
  var cakes = [
    { id: "mer-coquillages", img: "assets/gateaux/mer-coquillages.jpg", tags: ["Mariage", "Chic"], feature: true },
    { id: "mariage-el", img: "assets/gateaux/mariage-e-l-roses.jpg", tags: ["Mariage", "Chic"], feature: true },
    { id: "coeur-fraises-framboises", img: "assets/gateaux/coeur-fraises-framboises.jpg", tags: ["Anniversaire", "Fruité", "Mariage"] },
    { id: "prairie-fleurie", img: "assets/gateaux/prairie-fleurie.jpg", tags: ["Anniversaire", "Chic"], feature: true },
    { id: "lettre-s-fruits", img: "assets/gateaux/lettre-s-fruits.jpg", tags: ["Lettres & chiffres", "Fruité"], feature: true },
    { id: "eventail", img: "assets/gateaux/eventail-roses-rouges.jpg", tags: ["Chic", "Mariage"], feature: true },
    { id: "piece-75", img: "assets/gateaux/75-ans-macarons.jpg", tags: ["Anniversaire", "Chic"], feature: true },
    { id: "mariage-mrmrs-etages", img: "assets/gateaux/mariage-mrmrs-etages.jpg", tags: ["Mariage", "Chic"], feature: true },
    { id: "jack-daniels-50", img: "assets/gateaux/jack-daniels-50.jpg", tags: ["Anniversaire"] },
    { id: "buche-noel-chocolat", img: "assets/gateaux/buche-noel-chocolat.jpg", tags: ["Fêtes", "Chocolat"], feature: true },
    { id: "blanc-fraises-chocolat", img: "assets/gateaux/blanc-fraises-chocolat.jpg", tags: ["Anniversaire", "Chic"] },
    { id: "lettre-n-fruits", img: "assets/gateaux/lettre-n-fruits.jpg", tags: ["Lettres & chiffres", "Fruité"] },
    { id: "drip-macarons", img: "assets/gateaux/drip-macarons.jpg", tags: ["Anniversaire", "Chic"] },
    { id: "bouquet", img: "assets/gateaux/bouquet-fleuri.jpg", tags: ["Anniversaire", "Chic"] },
    { id: "coeur-fruits-rouges", img: "assets/gateaux/coeur-fruits-rouges.jpg", tags: ["Anniversaire", "Fruité"] },
    { id: "buche-framboise-glacee", img: "assets/gateaux/buche-framboise-glacee.jpg", tags: ["Chic", "Fruité"] },
    { id: "meringues-roses", img: "assets/gateaux/meringues-roses.jpg", tags: ["Anniversaire", "Chic"] },
    { id: "mauve-fruits-rouges", img: "assets/gateaux/mauve-fruits-rouges.jpg", tags: ["Anniversaire", "Fruité", "Chic"] },
    { id: "drip-bonbons", img: "assets/gateaux/drip-bonbons.jpg", tags: ["Enfants", "Anniversaire"] },
    { id: "blanc-rose", img: "assets/gateaux/blanc-rose-noeuds.jpg", tags: ["Anniversaire", "Chic"] },
    { id: "lettre-m", img: "assets/gateaux/lettre-m-fruits.jpg", tags: ["Lettres & chiffres", "Fruité"] },
    { id: "chiffre-chocolat", img: "assets/gateaux/chiffre-chocolat.jpg", tags: ["Anniversaire", "Chocolat", "Lettres & chiffres"] },
    { id: "lettre-s", img: "assets/gateaux/lettre-s-chantilly.jpg", tags: ["Lettres & chiffres", "Chocolat"] },
    { id: "coeur-fraises", img: "assets/gateaux/coeur-fraises-fleurs.jpg", tags: ["Anniversaire", "Fruité"], feature: true },
    { id: "mariage-mrmrs", img: "assets/gateaux/mariage-coeur.jpg", tags: ["Mariage", "Fruité"] },
    { id: "reine-des-neiges", img: "assets/gateaux/reine-des-neiges.jpg", tags: ["Enfants"] },
    { id: "cheval-portrait", img: "assets/gateaux/cheval-portrait.jpg", tags: ["Enfants", "Anniversaire"] },
    { id: "sonic", img: "assets/gateaux/sonic.jpg", tags: ["Enfants"] },
    { id: "stitch", img: "assets/gateaux/stitch.jpg", tags: ["Enfants"] },
    { id: "gateau-nu", img: "assets/gateaux/gateau-nu-chocolat.jpg", tags: ["Chocolat", "Anniversaire"] },
    { id: "buche", img: "assets/gateaux/buche-chocolat.jpg", tags: ["Chocolat", "Fêtes"] },
  ];

  var ALL_FILTER = "__ALL__";
  var currentLang = "fr";
  var currentFilter = ALL_FILTER;
  var galleryOpen = true;
  var galleryToggleApply = null;

  /* ---------- Helpers i18n ---------- */

  function dict() { return I18N[currentLang] || FALLBACK; }

  function t(key, vars) {
    var d = dict();
    var s =
      (d.t && d.t[key] != null ? d.t[key] : null) ||
      (FALLBACK.t && FALLBACK.t[key] != null ? FALLBACK.t[key] : null) ||
      key;
    if (vars) {
      s = s.replace(/\{(\w+)\}/g, function (_, k) {
        return vars[k] != null ? vars[k] : "{" + k + "}";
      });
    }
    return s;
  }

  function cakeCopy(id) {
    var d = dict();
    return (d.cakes && d.cakes[id]) ||
      (FALLBACK.cakes && FALLBACK.cakes[id]) ||
      { title: id, desc: "" };
  }

  function tagLabel(tag) {
    var d = dict();
    return (d.tagLabels && d.tagLabels[tag]) ||
      (FALLBACK.tagLabels && FALLBACK.tagLabels[tag]) ||
      tag;
  }

  function escapeAttr(str) {
    return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }

  function getCategories() {
    var set = [];
    cakes.forEach(function (cake) {
      cake.tags.forEach(function (tag) {
        if (set.indexOf(tag) === -1) set.push(tag);
      });
    });
    return set;
  }

  /* ---------- Application d'une langue ---------- */

  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
  }

  function applyMeta() {
    var m = dict().meta || FALLBACK.meta || {};
    if (m.title) document.title = m.title;
    setMeta('meta[name="description"]', "content", m.description);
    setMeta('meta[property="og:title"]', "content", m.ogTitle);
    setMeta('meta[property="og:description"]', "content", m.ogDescription);
    setMeta('meta[name="twitter:title"]', "content", m.ogTitle);
    setMeta('meta[name="twitter:description"]', "content", m.ogDescription);
    setMeta('meta[property="og:locale"]', "content", m.ogLocale);
    document.documentElement.setAttribute("lang", currentLang);
  }

  function setMeta(selector, attr, value) {
    if (value == null) return;
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  function updateLangButtons() {
    document.querySelectorAll("#langSwitch .lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLanguage(lang, opts) {
    if (LANGS.indexOf(lang) === -1) lang = "fr";
    currentLang = lang;
    if (!opts || opts.save !== false) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    }
    applyStaticI18n();
    applyMeta();
    renderFilters();
    renderGallery();
    if (carouselApi) carouselApi.render();
    if (galleryToggleApply) galleryToggleApply(false);
    updateLangButtons();
  }

  /* ---------- Galerie repliable ---------- */

  function setupGalleryToggle() {
    var panel = document.getElementById("galleryPanel");
    var btns = document.querySelectorAll("[data-gallery-toggle]");
    if (!panel || !btns.length) return;
    var KEY = "caliza-gallery-open";
    try { galleryOpen = localStorage.getItem(KEY) !== "0"; } catch (e) { galleryOpen = true; }

    function apply(userAction) {
      panel.hidden = !galleryOpen;
      btns.forEach(function (b) {
        b.setAttribute("aria-expanded", String(galleryOpen));
        var lbl = b.querySelector(".gallery-toggle-label") || b;
        lbl.textContent = t(galleryOpen ? "gallery.collapse" : "gallery.expand");
      });
      if (galleryOpen) {
        panel.querySelectorAll(".cake-card:not(.is-in)").forEach(function (c) {
          c.classList.add("is-in");
        });
      }
      if (userAction && !galleryOpen) {
        var sec = document.getElementById("inspiration-gallery");
        if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        galleryOpen = !galleryOpen;
        try { localStorage.setItem(KEY, galleryOpen ? "1" : "0"); } catch (e) {}
        apply(true);
      });
    });

    galleryToggleApply = apply;
    apply(false);
  }

  function detectLang() {
    // Langue par défaut : français (contenu de référence du site).
    // On ne bascule que si le visiteur a explicitement choisi une langue,
    // ce choix étant mémorisé pour ses prochaines visites.
    var stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    return "fr";
  }

  function setupLangSwitch() {
    var box = document.getElementById("langSwitch");
    if (!box) return;
    box.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang-btn");
      if (!btn) return;
      setLanguage(btn.getAttribute("data-lang"));
    });
  }

  /* ---------- Lightbox (voir les photos en entier) ---------- */

  var lightbox = {
    el: null, img: null, caption: null, list: [], index: 0, lastFocused: null,
  };

  function openLightbox(list, index) {
    if (!lightbox.el || !list.length) return;
    lightbox.list = list;
    lightbox.index = index;
    lightbox.lastFocused = document.activeElement;
    renderLightbox();
    lightbox.el.hidden = false;
    lightbox.el.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    var closeBtn = document.getElementById("lightboxClose");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox.el || lightbox.el.hidden) return;
    lightbox.el.hidden = true;
    lightbox.el.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lightbox.lastFocused && typeof lightbox.lastFocused.focus === "function") {
      lightbox.lastFocused.focus();
    }
  }

  function lightboxGo(delta) {
    if (!lightbox.list.length) return;
    lightbox.index =
      (lightbox.index + delta + lightbox.list.length) % lightbox.list.length;
    renderLightbox();
  }

  function renderLightbox() {
    var item = lightbox.list[lightbox.index];
    if (!item) return;
    lightbox.img.src = item.img;
    lightbox.img.alt = item.title;
    lightbox.caption.textContent =
      item.title + "  ·  " + (lightbox.index + 1) + " / " + lightbox.list.length;
    var multiple = lightbox.list.length > 1;
    var prev = document.getElementById("lightboxPrev");
    var next = document.getElementById("lightboxNext");
    if (prev) prev.hidden = !multiple;
    if (next) next.hidden = !multiple;
  }

  function setupLightbox() {
    lightbox.el = document.getElementById("lightbox");
    lightbox.img = document.getElementById("lightboxImg");
    lightbox.caption = document.getElementById("lightboxCaption");
    if (!lightbox.el) return;

    lightbox.el.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]") || e.target === lightbox.el) {
        closeLightbox();
      }
    });
    var closeBtn = document.getElementById("lightboxClose");
    var prevBtn = document.getElementById("lightboxPrev");
    var nextBtn = document.getElementById("lightboxNext");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", function () { lightboxGo(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { lightboxGo(1); });

    document.addEventListener("keydown", function (e) {
      if (lightbox.el.hidden) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        lightboxGo(-1);
      } else if (e.key === "ArrowRight") {
        lightboxGo(1);
      } else if (e.key === "Tab") {
        var focusables = Array.prototype.slice
          .call(lightbox.el.querySelectorAll("button"))
          .filter(function (b) { return !b.hidden; });
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---------- Carrousel de présentation ---------- */

  var carouselApi = null;

  function setupCarousel() {
    var root = document.getElementById("heroCarousel");
    var track = document.getElementById("heroTrack");
    var dotsWrap = document.getElementById("heroDots");
    if (!root || !track || !dotsWrap) return;

    var featured = cakes.filter(function (c) { return c.feature; });
    if (!featured.length) featured = cakes.slice(0, 6);

    var current = 0;
    var timer = null;

    function render() {
      current = 0;
      track.innerHTML = featured
        .map(function (cake, i) {
          var copy = cakeCopy(cake.id);
          return (
            '<figure class="carousel-slide" data-index="' + i +
            '" style="--slide-bg:url(&quot;' + cake.img + '&quot;)">' +
            '<img src="' + cake.img + '" alt="' + escapeAttr(copy.title) + '"' +
            (i === 0 ? "" : ' loading="lazy"') + ">" +
            "<figcaption>" + escapeHtml(copy.title) + "</figcaption>" +
            "</figure>"
          );
        })
        .join("");

      dotsWrap.innerHTML = featured
        .map(function (cake, i) {
          var copy = cakeCopy(cake.id);
          return (
            '<button type="button" class="carousel-dot' + (i === 0 ? " active" : "") +
            '" data-index="' + i + '" role="tab" aria-label="' + escapeAttr(copy.title) +
            '" aria-selected="' + (i === 0 ? "true" : "false") + '"></button>'
          );
        })
        .join("");

      track.style.transform = "translateX(0)";
      start();
    }

    function goTo(i) {
      current = (i + featured.length) % featured.length;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dotsWrap.querySelectorAll(".carousel-dot").forEach(function (d, di) {
        var active = di === current;
        d.classList.toggle("active", active);
        d.setAttribute("aria-selected", active ? "true" : "false");
      });
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function start() {
      if (prefersReducedMotion || featured.length < 2) return;
      stop();
      timer = window.setInterval(next, 5000);
    }
    function stop() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    var prevBtn = document.getElementById("heroPrev");
    var nextBtn = document.getElementById("heroNext");
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); start(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); start(); });

    dotsWrap.addEventListener("click", function (e) {
      var dot = e.target.closest(".carousel-dot");
      if (!dot) return;
      goTo(parseInt(dot.getAttribute("data-index"), 10));
      start();
    });

    track.addEventListener("click", function (e) {
      var slide = e.target.closest(".carousel-slide");
      if (!slide) return;
      var idx = parseInt(slide.getAttribute("data-index"), 10) || 0;
      var list = featured.map(function (c) {
        return { img: c.img, title: cakeCopy(c.id).title };
      });
      stop();
      openLightbox(list, idx);
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { prev(); start(); }
      else if (e.key === "ArrowRight") { next(); start(); }
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });

    var startX = null;
    track.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
      stop();
    }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
      startX = null;
      start();
    });

    carouselApi = { render: render };
    render();
  }

  /* ---------- Galerie d'inspiration ---------- */

  function renderFilters() {
    var container = document.getElementById("galleryFilters");
    if (!container) return;
    var cats = [ALL_FILTER].concat(getCategories());
    if (cats.indexOf(currentFilter) === -1) currentFilter = ALL_FILTER;
    container.innerHTML = cats
      .map(function (cat) {
        var label = cat === ALL_FILTER ? t("gallery.filterAll") : tagLabel(cat);
        return (
          '<button type="button" class="filter-btn' +
          (cat === currentFilter ? " active" : "") +
          '" data-filter="' + escapeAttr(cat) + '">' + escapeHtml(label) + "</button>"
        );
      })
      .join("");
  }

  function applyFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll(".cake-card").forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split("|");
      var show = filter === ALL_FILTER || tags.indexOf(filter) !== -1;
      card.classList.toggle("hidden", !show);
    });
    updateGalleryCount();
  }

  function updateGalleryCount() {
    var el = document.getElementById("galleryCount");
    if (!el) return;
    var total = cakes.length;
    if (currentFilter === ALL_FILTER) {
      el.textContent = t("gallery.countAll", { total: total });
    } else {
      var visible = document.querySelectorAll(".cake-card:not(.hidden)").length;
      el.textContent = t("gallery.countFiltered", { n: visible, total: total });
    }
  }

  function fillInspiration(title) {
    var inspirationField = document.getElementById("inspiration");
    var noteField = document.getElementById("note");
    if (inspirationField) inspirationField.value = title;
    if (noteField && !noteField.value.trim()) {
      noteField.value = defaultPrefill(title);
    }
    var section = document.getElementById("commander");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (noteField) noteField.focus();
  }

  function defaultPrefill(title) {
    var byLang = {
      fr: "Je m'inspire de votre création « " + title + " ». Voici ce que j'aimerais adapter : ",
      en: "I'm taking inspiration from your creation “" + title + "”. Here's what I'd like to adapt: ",
      nl: "Ik laat me inspireren door jullie creatie “" + title + "”. Dit zou ik graag aanpassen: ",
    };
    return byLang[currentLang] || byLang.fr;
  }

  function renderGallery() {
    var gallery = document.getElementById("gallery");
    if (!gallery) return;
    gallery.innerHTML = cakes
      .map(function (cake) {
        var copy = cakeCopy(cake.id);
        var chips = cake.tags
          .map(function (tg) { return '<span class="tag">' + escapeHtml(tagLabel(tg)) + "</span>"; })
          .join("");
        return (
          '<article class="cake-card" data-tags="' + escapeAttr(cake.tags.join("|")) + '">' +
          '<button type="button" class="cake-visual" data-img="' + escapeAttr(cake.img) +
          '" data-title="' + escapeAttr(copy.title) +
          '" aria-label="' + escapeAttr(t("a11y.viewFull", { title: copy.title })) + '">' +
          '<img src="' + cake.img + '" alt="' + escapeAttr(copy.title) + '" loading="lazy" decoding="async"></button>' +
          '<div class="cake-body">' +
          "<h3>" + escapeHtml(copy.title) + "</h3>" +
          "<p>" + escapeHtml(copy.desc) + "</p>" +
          '<div class="cake-tags">' + chips + "</div>" +
          '<button type="button" class="cake-pick" data-title="' + escapeAttr(copy.title) +
          '">' + escapeHtml(t("gallery.pick")) + "</button>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    applyFilter(currentFilter);
    revealCards();
  }

  function setupGalleryEvents() {
    var gallery = document.getElementById("gallery");
    var filters = document.getElementById("galleryFilters");

    if (filters) {
      filters.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-btn");
        if (!btn) return;
        filters.querySelectorAll(".filter-btn").forEach(function (b) {
          b.classList.toggle("active", b === btn);
        });
        applyFilter(btn.getAttribute("data-filter"));
      });
    }

    if (gallery) {
      gallery.addEventListener("click", function (e) {
        var pick = e.target.closest(".cake-pick");
        if (pick) {
          fillInspiration(pick.getAttribute("data-title"));
          return;
        }
        var visual = e.target.closest(".cake-visual");
        if (visual) {
          var visibleCards = Array.prototype.slice
            .call(gallery.querySelectorAll(".cake-card"))
            .filter(function (c) { return !c.classList.contains("hidden"); });
          var list = visibleCards.map(function (card) {
            var v = card.querySelector(".cake-visual");
            return { img: v.getAttribute("data-img"), title: v.getAttribute("data-title") };
          });
          var startIndex = Math.max(0, visibleCards.indexOf(visual.closest(".cake-card")));
          openLightbox(list, startIndex);
        }
      });
    }
  }

  /* ---------- Navigation mobile ---------- */

  function setupNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Formulaire de commande ----------
     Le message envoyé à Caliza reste toujours en français, quelle que soit
     la langue d'affichage, pour qu'elle le lise de la même manière. */

  function eventLabelFr(data) {
    if (data.eventType === "Autre occasion" && data.eventOther) {
      return "Autre occasion : " + data.eventOther;
    }
    return data.eventType || "-";
  }

  function buildMessage(data) {
    var lines = [
      "Bonjour Caliza, je souhaite passer commande :",
      "",
      "Nom : " + data.name,
      "Téléphone : " + data.phone,
      "Type d'événement : " + eventLabelFr(data),
      "Date souhaitée : " + (data.date || "à préciser"),
      "Nombre de parts : " + (data.servings || "à préciser"),
      "Forme souhaitée : " + (data.shape || "à discuter"),
      "Parfum(s) : " + (data.flavor || "à discuter"),
      "Budget approximatif : " + (data.budget || "non précisé"),
      "Palette / thème : " + (data.colors || "à discuter"),
      "Mode de retrait : " + (data.fulfilment || "-"),
    ];
    if (data.fulfilment === "Livraison souhaitée") {
      lines.push("Adresse de livraison : " + (data.address || "à communiquer"));
    }
    lines.push("Allergies / régimes : " + (data.allergies || "aucune signalée"));
    if (data.cakeText) lines.push("Texte sur le gâteau : " + data.cakeText);
    if (data.inspiration) lines.push("Inspiration : " + data.inspiration);
    lines.push("", "Ma note :", data.note);
    return lines.join("\n");
  }

  function setupConditionalFields() {
    var eventType = document.getElementById("eventType");
    var eventOtherField = document.getElementById("eventOtherField");
    if (eventType && eventOtherField) {
      var syncEventOther = function () {
        eventOtherField.classList.toggle("hidden", eventType.value !== "Autre occasion");
      };
      eventType.addEventListener("change", syncEventOther);
      syncEventOther();
    }

    var group = document.getElementById("fulfilmentGroup");
    var addressField = document.getElementById("addressField");
    if (group && addressField) {
      group.addEventListener("change", function (e) {
        if (e.target.name !== "fulfilment") return;
        addressField.classList.toggle("hidden", e.target.value !== "Livraison souhaitée");
      });
    }
  }

  function setupForm() {
    var form = document.getElementById("orderForm");
    if (!form) return;

    var lastChannel = "whatsapp";
    form.querySelectorAll("[data-channel]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        lastChannel = btn.getAttribute("data-channel");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = Object.fromEntries(new FormData(form).entries());
      if (!data.name || !data.phone || !data.note) {
        form.reportValidity();
        return;
      }
      var message = buildMessage(data);
      if (lastChannel === "email") {
        var subject = "Demande de devis : " + data.name;
        window.location.href =
          "mailto:" + EMAIL_ADDRESS +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(message);
      } else {
        window.open(
          "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
          "_blank", "noopener"
        );
      }
    });
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Révélation au défilement (un seul mouvement) ---------- */

  var revealSupported =
    !prefersReducedMotion && "IntersectionObserver" in window;

  var revealObserver = revealSupported
    ? new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              revealObserver.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      )
    : null;

  // Révèle (ou observe) les cartes de la galerie.
  // L'animation ne joue qu'au premier rendu ; un changement de langue
  // réaffiche les cartes immédiatement, sans re-fondu.
  var galleryRevealed = false;
  function revealCards() {
    var cards = document.querySelectorAll("#gallery .cake-card");
    if (!revealObserver || galleryRevealed) {
      cards.forEach(function (el) { el.classList.add("is-in"); });
      galleryRevealed = true;
      return;
    }
    cards.forEach(function (el) { revealObserver.observe(el); });
    galleryRevealed = true;
  }

  function setupReveal() {
    var marks = document.querySelectorAll(
      ".section-title, .section-lede, .order-info, .order-form, .about-deco, .contact-card, .map-embed, .gallery-count"
    );
    if (!revealObserver) {
      marks.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    marks.forEach(function (el) {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });

    // Filet de sécurité : tout révéler après 3 s si l'observer reste muet.
    window.setTimeout(function () {
      document
        .querySelectorAll(".reveal:not(.is-in), #gallery .cake-card:not(.is-in)")
        .forEach(function (el) { el.classList.add("is-in"); });
    }, 3000);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  document.addEventListener("DOMContentLoaded", function () {
    currentLang = detectLang();
    setupLightbox();
    setupGalleryEvents();
    setupCarousel();
    setupNav();
    setupLangSwitch();
    setupForm();
    setupConditionalFields();
    setYear();
    setupGalleryToggle();
    setLanguage(currentLang, { save: false });
    setupReveal();
  });
})();
