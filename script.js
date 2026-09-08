(function () {
  "use strict";

  var WHATSAPP_NUMBER = "32476781586";
  var EMAIL_ADDRESS = "caliza-pat@hotmail.com";

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var cakes = [
    {
      title: "Mariage « E & L », roses rouges",
      desc: "Pièce montée deux étages, finition perlée et éclats d'or, ruban rouge, monogramme et roses rouges fraîches. Pensée pour une table de mariage.",
      tags: ["Mariage", "Chic"],
      img: "assets/gateaux/mariage-e-l-roses.jpg",
      feature: true,
    },
    {
      title: "Cœur fruits rouges",
      desc: "Chantilly légère, framboises, myrtilles, grenade et physalis pour une pièce généreuse et fraîche.",
      tags: ["Anniversaire", "Fruité"],
      img: "assets/gateaux/coeur-fruits-rouges.jpg",
      feature: true,
    },
    {
      title: "Drip cake macarons",
      desc: "Coulures dorées, crème rose et macarons violets pour une création chic et gourmande.",
      tags: ["Anniversaire", "Chic"],
      img: "assets/gateaux/drip-macarons.jpg",
      feature: true,
    },
    {
      title: "Lettre « M » fruitée",
      desc: "Cake lettre garni de mangue, abricot, grenade et fleurs comestibles. Idéal pour un prénom ou une initiale.",
      tags: ["Lettres & chiffres", "Fruité"],
      img: "assets/gateaux/lettre-m-fruits.jpg",
    },
    {
      title: "Chiffre gourmand chocolat",
      desc: "Number cake tout chocolat, biscuits, chamallows et éclats dorés pour marquer un cap important.",
      tags: ["Anniversaire", "Chocolat", "Lettres & chiffres"],
      img: "assets/gateaux/chiffre-chocolat.jpg",
      feature: true,
    },
    {
      title: "Lettre « S » chantilly",
      desc: "Cake lettre garni de rosaces chocolat/vanille, biscuits et perles dorées.",
      tags: ["Lettres & chiffres", "Chocolat"],
      img: "assets/gateaux/lettre-s-chantilly.jpg",
    },
    {
      title: "Pièce « 75 ans »",
      desc: "Gâteau rond parme, macarons, fruits rouges et fleurs en pâte à sucre pour un anniversaire marquant.",
      tags: ["Anniversaire", "Chic"],
      img: "assets/gateaux/75-ans-macarons.jpg",
      feature: true,
    },
    {
      title: "Roses meringuées pastel",
      desc: "Grandes roses en meringue scintillante sur un entremets tout en douceur.",
      tags: ["Anniversaire", "Chic"],
      img: "assets/gateaux/meringues-roses.jpg",
    },
    {
      title: "Blanc & rose, nœuds satinés",
      desc: "Finition épurée, cœurs pastel et nœuds en ruban pour une pièce délicate.",
      tags: ["Anniversaire", "Chic"],
      img: "assets/gateaux/blanc-rose-noeuds.jpg",
    },
    {
      title: "Éventail doré, roses rouges",
      desc: "Motif en éventail pailleté et bouquet de roses rouges fraîches pour une occasion élégante.",
      tags: ["Chic", "Mariage"],
      img: "assets/gateaux/eventail-roses-rouges.jpg",
      feature: true,
    },
    {
      title: "Cœur fraises & fleurs fraîches",
      desc: "Chantilly, fraises fraîches, myrtilles et fleurs comestibles sur une base en forme de cœur.",
      tags: ["Anniversaire", "Fruité"],
      img: "assets/gateaux/coeur-fraises-fleurs.jpg",
    },
    {
      title: "Pièce de mariage « Mr & Mrs »",
      desc: "Cake cœur aux fruits rouges et roses fraîches, pensé pour sublimer une table de mariage.",
      tags: ["Mariage", "Fruité"],
      img: "assets/gateaux/mariage-coeur.jpg",
      feature: true,
    },
    {
      title: "Bouquet fleuri surprise",
      desc: "Un gâteau qui se dévoile en bouquet de fleurs fraîches à l'ouverture. Effet garanti.",
      tags: ["Anniversaire", "Chic"],
      img: "assets/gateaux/bouquet-fleuri.jpg",
    },
    {
      title: "Gâteau nu au chocolat",
      desc: "Génoise chocolat et crème mousseline entre les couches, dans un style « naked cake » brut et gourmand.",
      tags: ["Chocolat", "Anniversaire"],
      img: "assets/gateaux/gateau-nu-chocolat.jpg",
    },
    {
      title: "Bûche au chocolat croustillant",
      desc: "Biscuit croquant, mousse chocolat et enrobage chocolat-noisette. Un classique revisité pour les fêtes.",
      tags: ["Chocolat", "Fêtes"],
      img: "assets/gateaux/buche-chocolat.jpg",
    },
  ];

  var ALL_FILTER = "Tous";

  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  function getCategories() {
    var set = [ALL_FILTER];
    cakes.forEach(function (cake) {
      cake.tags.forEach(function (tag) {
        if (set.indexOf(tag) === -1) set.push(tag);
      });
    });
    return set;
  }

  /* ---------- Lightbox (voir les photos en entier) ---------- */

  var lightbox = {
    el: null,
    img: null,
    caption: null,
    list: [],
    index: 0,
    lastFocused: null,
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
    lightbox.img.alt = item.title + ", création Caliza";
    lightbox.caption.textContent =
      item.title +
      "  ·  " +
      (lightbox.index + 1) +
      " / " +
      lightbox.list.length;
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
        // Simple focus trap within the dialog controls
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

  function setupCarousel() {
    var root = document.getElementById("heroCarousel");
    var track = document.getElementById("heroTrack");
    var dotsWrap = document.getElementById("heroDots");
    if (!root || !track || !dotsWrap) return;

    var featured = cakes.filter(function (c) { return c.feature; });
    if (!featured.length) featured = cakes.slice(0, 6);

    track.innerHTML = featured
      .map(function (cake, i) {
        return (
          '<figure class="carousel-slide" data-index="' + i +
          '" style="--slide-bg:url(&quot;' + cake.img + '&quot;)">' +
          '<img src="' + cake.img + '" alt="' + escapeAttr(cake.title) +
          ', création Caliza"' + (i === 0 ? "" : ' loading="lazy"') + ">" +
          "<figcaption>" + cake.title + "</figcaption>" +
          "</figure>"
        );
      })
      .join("");

    dotsWrap.innerHTML = featured
      .map(function (cake, i) {
        return (
          '<button type="button" class="carousel-dot' + (i === 0 ? " active" : "") +
          '" data-index="' + i + '" role="tab" aria-label="Photo ' + (i + 1) +
          '" aria-selected="' + (i === 0 ? "true" : "false") + '"></button>'
        );
      })
      .join("");

    var current = 0;
    var timer = null;

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

    // Clic sur une photo -> agrandir
    track.addEventListener("click", function (e) {
      var slide = e.target.closest(".carousel-slide");
      if (!slide) return;
      var idx = parseInt(slide.getAttribute("data-index"), 10) || 0;
      var list = featured.map(function (c) {
        return { img: c.img, title: c.title };
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
      if (document.hidden) stop();
      else start();
    });

    // Support tactile : balayage horizontal
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

    goTo(0);
    start();
  }

  /* ---------- Galerie d'inspiration ---------- */

  function renderFilters() {
    var container = document.getElementById("galleryFilters");
    if (!container) return;
    var categories = getCategories();
    container.innerHTML = categories
      .map(function (cat, i) {
        return (
          '<button type="button" class="filter-btn' +
          (i === 0 ? " active" : "") +
          '" data-filter="' + escapeAttr(cat) + '">' + cat + "</button>"
        );
      })
      .join("");

    container.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      container.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      applyFilter(btn.getAttribute("data-filter"));
    });
  }

  function applyFilter(filter) {
    document.querySelectorAll(".cake-card").forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split("|");
      var show = filter === ALL_FILTER || tags.indexOf(filter) !== -1;
      card.classList.toggle("hidden", !show);
    });
  }

  function fillInspiration(title) {
    var inspirationField = document.getElementById("inspiration");
    var noteField = document.getElementById("note");
    if (inspirationField) inspirationField.value = title;
    if (noteField && !noteField.value.trim()) {
      noteField.value =
        "Je m'inspire de votre création « " + title + " ». " +
        "Voici ce que j'aimerais adapter : ";
    }
    var section = document.getElementById("commander");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (noteField) noteField.focus();
  }

  function renderGallery() {
    var gallery = document.getElementById("gallery");
    if (!gallery) return;
    gallery.innerHTML = cakes
      .map(function (cake) {
        return (
          '<article class="cake-card" data-tags="' + cake.tags.join("|") + '">' +
          '<button type="button" class="cake-visual" data-img="' + escapeAttr(cake.img) +
          '" data-title="' + escapeAttr(cake.title) +
          '" aria-label="Voir la photo en entier : ' + escapeAttr(cake.title) + '">' +
          '<img src="' + cake.img + '" alt="' + escapeAttr(cake.title) +
          ', création Caliza" loading="lazy"></button>' +
          '<div class="cake-body">' +
          "<h3>" + cake.title + "</h3>" +
          "<p>" + cake.desc + "</p>" +
          '<div class="cake-tags">' +
          cake.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") +
          "</div>" +
          '<button type="button" class="cake-pick" data-title="' + escapeAttr(cake.title) +
          '">M\'inspirer de celui-ci →</button>' +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    gallery.addEventListener("click", function (e) {
      var pick = e.target.closest(".cake-pick");
      if (pick) {
        fillInspiration(pick.getAttribute("data-title"));
        return;
      }
      var visual = e.target.closest(".cake-visual");
      if (visual) {
        var visibleCards = Array.prototype.slice.call(
          gallery.querySelectorAll(".cake-card")
        ).filter(function (c) { return !c.classList.contains("hidden"); });
        var list = visibleCards.map(function (card) {
          var v = card.querySelector(".cake-visual");
          return {
            img: v.getAttribute("data-img"),
            title: v.getAttribute("data-title"),
          };
        });
        var startIndex = Math.max(
          0,
          visibleCards.indexOf(visual.closest(".cake-card"))
        );
        openLightbox(list, startIndex);
      }
    });
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

  /* ---------- Formulaire de commande ---------- */

  function eventLabel(data) {
    if (data.eventType === "Autre occasion" && data.eventOther) {
      return "Autre occasion — " + data.eventOther;
    }
    return data.eventType || "-";
  }

  function buildMessage(data) {
    var lines = [
      "Bonjour Caliza, je souhaite passer commande :",
      "",
      "Nom : " + data.name,
      "Téléphone : " + data.phone,
      "Type d'événement : " + eventLabel(data),
      "Date souhaitée : " + (data.date || "à préciser"),
      "Nombre de parts : " + (data.servings || "à préciser"),
      "Forme souhaitée : " + (data.shape || "à discuter"),
      "Parfum(s) : " + (data.flavor || "à discuter"),
      "Budget approximatif : " + (data.budget || "non précisé"),
      "Palette / thème : " + (data.colors || "à discuter"),
      "Mode de retrait : " + (data.fulfilment || "-"),
    ];
    if (data.fulfilment === "Livraison souhaitée") {
      lines.push(
        "Adresse de livraison : " + (data.address || "à communiquer")
      );
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
        var show = eventType.value === "Autre occasion";
        eventOtherField.classList.toggle("hidden", !show);
      };
      eventType.addEventListener("change", syncEventOther);
      syncEventOther();
    }

    var group = document.getElementById("fulfilmentGroup");
    var addressField = document.getElementById("addressField");
    if (group && addressField) {
      group.addEventListener("change", function (e) {
        if (e.target.name !== "fulfilment") return;
        addressField.classList.toggle(
          "hidden",
          e.target.value !== "Livraison souhaitée"
        );
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
        var url =
          "mailto:" + EMAIL_ADDRESS +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(message);
        window.location.href = url;
      } else {
        var waUrl =
          "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
        window.open(waUrl, "_blank", "noopener");
      }
    });
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupLightbox();
    setupCarousel();
    renderGallery();
    renderFilters();
    setupNav();
    setupForm();
    setupConditionalFields();
    setYear();
  });
})();
