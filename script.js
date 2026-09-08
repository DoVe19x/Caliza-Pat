(function () {
  "use strict";

  var WHATSAPP_NUMBER = "32476781586";
  var EMAIL_ADDRESS = "caliza-pat@hotmail.com";

  var cakes = [
    {
      title: "Cœur fruits rouges",
      desc: "Chantilly légère, framboises, myrtilles, grenade et physalis pour une pièce généreuse et fraîche.",
      tags: ["Anniversaire", "Fruité"],
      img: "assets/gateaux/coeur-fruits-rouges.jpg",
    },
    {
      title: "Drip cake macarons",
      desc: "Coulures dorées, crème rose et macarons violets pour une création chic et gourmande.",
      tags: ["Anniversaire", "Chic"],
      img: "assets/gateaux/drip-macarons.jpg",
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

  function getCategories() {
    var set = [ALL_FILTER];
    cakes.forEach(function (cake) {
      cake.tags.forEach(function (tag) {
        if (set.indexOf(tag) === -1) set.push(tag);
      });
    });
    return set;
  }

  function renderFilters() {
    var container = document.getElementById("galleryFilters");
    if (!container) return;
    var categories = getCategories();
    container.innerHTML = categories
      .map(function (cat, i) {
        return (
          '<button type="button" class="filter-btn' +
          (i === 0 ? " active" : "") +
          '" data-filter="' + cat.replace(/"/g, "&quot;") + '">' + cat + "</button>"
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

  function renderGallery() {
    var gallery = document.getElementById("gallery");
    if (!gallery) return;
    gallery.innerHTML = cakes
      .map(function (cake) {
        return (
          '<article class="cake-card" data-tags="' + cake.tags.join("|") + '">' +
          '<div class="cake-visual"><img src="' + cake.img + '" alt="' + cake.title.replace(/"/g, "&quot;") + ', création Caliza" loading="lazy"></div>' +
          '<div class="cake-body">' +
          "<h3>" + cake.title + "</h3>" +
          "<p>" + cake.desc + "</p>" +
          '<div class="cake-tags">' +
          cake.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") +
          "</div>" +
          '<button type="button" class="cake-pick" data-title="' + cake.title.replace(/"/g, "&quot;") + '">M\'inspirer de celui-ci →</button>' +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    gallery.addEventListener("click", function (e) {
      var btn = e.target.closest(".cake-pick");
      if (!btn) return;
      var title = btn.getAttribute("data-title");
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
    });
  }

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

  function buildMessage(data) {
    var lines = [
      "Bonjour Caliza, je souhaite passer commande :",
      "",
      "Nom : " + data.name,
      "Téléphone : " + data.phone,
      "Type d'événement : " + (data.eventType || "-"),
      "Date souhaitée : " + (data.date || "à préciser"),
      "Nombre de parts : " + (data.servings || "à préciser"),
      "Forme souhaitée : " + (data.shape || "à discuter"),
      "Parfum(s) : " + (data.flavor || "à discuter"),
      "Budget approximatif : " + (data.budget || "non précisé"),
      "Palette / thème : " + (data.colors || "à discuter"),
      "Mode de retrait : " + (data.fulfilment || "-"),
    ];
    if (data.fulfilment === "Livraison souhaitée" && data.address) {
      lines.push("Adresse de livraison : " + data.address);
    }
    lines.push("Allergies / régimes : " + (data.allergies || "aucune signalée"));
    if (data.cakeText) lines.push("Texte sur le gâteau : " + data.cakeText);
    if (data.inspiration) lines.push("Inspiration : " + data.inspiration);
    lines.push("", "Ma note :", data.note);
    return lines.join("\n");
  }

  function setupFulfilment() {
    var group = document.getElementById("fulfilmentGroup");
    var addressField = document.getElementById("addressField");
    if (!group || !addressField) return;
    group.addEventListener("change", function (e) {
      if (e.target.name !== "fulfilment") return;
      addressField.classList.toggle("hidden", e.target.value !== "Livraison souhaitée");
    });
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
        var waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
        window.open(waUrl, "_blank", "noopener");
      }
    });
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderGallery();
    renderFilters();
    setupNav();
    setupForm();
    setupFulfilment();
    setYear();
  });
})();
