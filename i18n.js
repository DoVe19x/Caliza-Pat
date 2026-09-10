/* Traductions du site Caliza : FR / EN / NL
   Les valeurs (value="") des <select> et des radios restent en français :
   seule la partie visible est traduite, pour que le message envoyé à Caliza
   soit toujours dans la même langue. */
(function () {
  "use strict";

  var TAGS = ["Anniversaire", "Fruité", "Chic", "Lettres & chiffres", "Chocolat", "Mariage", "Fêtes"];

  var I18N = {
    fr: {
      meta: {
        title: "Caliza / Pâtisserie artisanale sur mesure",
        description:
          "Caliza, atelier artisanal de gâteaux personnalisés à Braine-le-Château. Anniversaires, mariages, entremets sur mesure. Décrivez votre gâteau de rêve, on s'occupe du reste.",
        ogTitle: "Caliza : Pâtisserie artisanale sur mesure",
        ogDescription:
          "Gâteaux personnalisés faits main à Braine-le-Château : anniversaires, mariages, entremets. Décrivez votre gâteau de rêve, on s'occupe du reste.",
        ogLocale: "fr_BE",
      },
      t: {
        "lang.label": "Langue",
        "nav.inspirations": "Inspirations",
        "nav.order": "Commander",
        "nav.atelier": "L'atelier",
        "nav.contact": "Contact",
        "a11y.skip": "Aller à la commande",
        "a11y.openMenu": "Ouvrir le menu",
        "a11y.langGroup": "Choix de la langue",
        "a11y.filterGroup": "Filtrer les inspirations",
        "a11y.carousel": "Créations Caliza",
        "a11y.carouselPick": "Choisir une photo",
        "a11y.prevPhoto": "Photo précédente",
        "a11y.nextPhoto": "Photo suivante",
        "a11y.close": "Fermer",
        "a11y.lightbox": "Photo agrandie",
        "a11y.fbCaliza": "Caliza sur Facebook",
        "a11y.viewFull": "Voir la photo en entier : {title}",
        "a11y.mapTitle": "Localisation approximative à Braine-le-Château",

        "hero.eyebrow": "Atelier artisanal · Braine-le-Château",
        "hero.title": "Le gâteau que vous avez <br class=\"br-md\">imaginé, réalisé sur mesure",
        "hero.lede":
          "Chez Caliza, chaque pièce est créée à la main pour votre événement : anniversaires, mariages, entremets et créations uniques. Décrivez-nous votre envie en quelques mots et on construit un devis rien que pour vous.",
        "hero.ctaOrder": "Commander mon gâteau",
        "hero.ctaGallery": "Voir toutes les inspirations",

        "strip.1num": "100%",
        "strip.1txt": "Sur mesure, aucune pièce standard",
        "strip.2num": "Belgique",
        "strip.2txt": "Braine-le-Château",
        "strip.3num": "Devis",
        "strip.3txt": "Personnalisé après échange téléphonique",

        "gallery.eyebrow": "Galerie d'inspiration",
        "gallery.title": "Besoin d'idées ? Piochez ici",
        "gallery.lede":
          "Voici quelques styles de créations possibles chez Caliza. Cliquez sur une photo pour la voir en entier, ou sur « M'inspirer de celui-ci » pour pré-remplir votre note de commande. Vous pourrez ensuite l'adapter à vos goûts, vos couleurs et vos saveurs.",
        "gallery.pick": "M'inspirer de celui-ci →",
        "gallery.filterAll": "Tous",
        "gallery.countAll": "{total} créations",
        "gallery.countFiltered": "{n} sur {total} créations",
        "gallery.collapse": "Réduire la galerie",
        "gallery.expand": "Voir les créations",

        "order.eyebrow": "Votre commande",
        "order.title": "Décrivez le gâteau de vos rêves",
        "order.lede":
          "Pas de catalogue à prix fixe ici : chaque création est unique. Remplissez le formulaire, votre demande sera préparée pour être envoyée directement à Caliza par WhatsApp ou par email. Vous recevrez ensuite un devis gratuit et sans engagement.",

        "oi.1t": "Devis gratuit",
        "oi.1d": "Aucun paiement en ligne : on confirme le prix ensemble avant toute commande.",
        "oi.2t": "Délai variable",
        "oi.2d": "Selon la période et la complexité. Pensez à anticiper pour les mariages et les fêtes.",
        "oi.3t": "Retrait ou livraison",
        "oi.3d": "Retrait à Braine-le-Château, ou livraison (souvent assurée par Caliza) selon la distance.",

        "form.name": "Votre nom",
        "form.phone": "Votre téléphone",
        "form.eventType": "Type d'événement",
        "form.eventOther": "Précisez l'occasion",
        "form.date": "Date souhaitée",
        "form.dateHint": "Idéalement 1 à 2 semaines à l'avance, plus pour les pièces montées.",
        "form.servings": "Nombre de parts (environ)",
        "form.shape": "Forme souhaitée",
        "form.flavor": "Parfum(s) souhaité(s)",
        "form.budget": "Budget approximatif",
        "form.colors": "Palette de couleurs / thème",
        "form.fulfilment": "Mode de retrait",
        "form.address": "Adresse de livraison",
        "form.addressHint": "Vous pouvez aussi nous la communiquer plus tard, de vive voix.",
        "form.allergies": "Allergies / régimes alimentaires",
        "form.cakeText": "Texte à écrire sur le gâteau",
        "form.inspiration": "Inspiration choisie",
        "form.note": "Votre note : décrivez le gâteau que vous imaginez",
        "form.optional": "(optionnel)",
        "form.important": "(important)",

        "ph.name": "Ex. Camille Dupont",
        "ph.phone": "Ex. 04XX XX XX XX",
        "ph.eventOther": "Ex. départ à la retraite, baby shower, Saint-Valentin…",
        "ph.servings": "Ex. 25",
        "ph.flavor": "Ex. vanille, chocolat, fruits rouges…",
        "ph.colors": "Ex. rose et doré, champêtre, pastel…",
        "ph.address": "Rue, numéro, code postal, ville",
        "ph.allergies": "Ex. allergie aux fruits à coque, sans lactose, aucune…",
        "ph.cakeText": "Ex. « Joyeux anniversaire Camille »",
        "ph.inspiration": "Cliquez une photo « M'inspirer de celui-ci » ou écrivez librement ici",
        "ph.note":
          "Décor, ambiance, inspiration, envies particulières… soyez aussi précis·e que vous le souhaitez. Ex : « Un gâteau rond deux étages, ganache chocolat noir, décor floral doré, pour les 30 ans de ma sœur, thème champêtre chic. »",

        "opt.event.anniv": "Anniversaire",
        "opt.event.wedding": "Mariage / pièce montée",
        "opt.event.entremets": "Entremets",
        "opt.event.bapteme": "Baptême / communion",
        "opt.event.autre": "Autre occasion",
        "opt.shape.any": "Peu importe / à discuter",
        "opt.shape.round": "Rond",
        "opt.shape.square": "Carré / rectangle",
        "opt.shape.heart": "Cœur",
        "opt.shape.letter": "Cake lettre ou chiffre",
        "opt.shape.tiered": "Pièce montée à étages",
        "opt.shape.other": "Autre",
        "opt.budget.none": "Pas de budget précis",
        "opt.budget.u30": "Moins de 30€",
        "opt.budget.b1": "30€ à 60€",
        "opt.budget.b2": "60€ à 100€",
        "opt.budget.b3": "100€ à 200€",
        "opt.budget.o200": "Plus de 200€",

        "radio.pickup": "Retrait à Braine-le-Château",
        "radio.delivery": "Livraison souhaitée",

        "btn.whatsapp": "Envoyer via WhatsApp",
        "btn.email": "Envoyer par email",
        "btn.call": "Ou appeler directement",

        "note.1":
          "En envoyant votre note, vous serez redirigé·e vers WhatsApp ou votre messagerie avec un message prérempli adressé à Caliza. Rien n'est envoyé automatiquement sans votre confirmation, et aucun paiement n'est demandé à ce stade. L'acompte éventuel se règle après confirmation du devis.",
        "note.2":
          "Nos gâteaux sont préparés dans un atelier artisanal non certifié « sans allergènes » : merci de nous signaler toute allergie sévère avant de commander.",

        "about.eyebrow": "L'atelier",
        "about.title": "Une pâtisserie pensée pour votre événement",
        "about.p1":
          "Caliza est un atelier artisanal belge basé à Braine-le-Château. Chaque gâteau (anniversaire, pièce montée de mariage ou entremets) est conçu à la main, en fonction de vos envies : saveurs, couleurs, thème, texture, contraintes alimentaires.",
        "about.p2":
          "Il n'existe pas de menu à prix fixe : après un échange par téléphone, nous définissons ensemble le type de pâtisserie, le nombre de parts et la personnalisation souhaitée pour construire un devis qui vous correspond.",
        "about.imgAlt": "Création Caliza : gâteau cœur, fraises et fleurs fraîches",

        "contact.eyebrow": "Contact",
        "contact.title": "Parlons de votre gâteau",
        "contact.labelPhone": "Téléphone",
        "contact.labelEmail": "Email",
        "contact.labelSector": "Secteur",
        "contact.labelVat": "Numéro d'entreprise",
        "contact.sectorText":
          "Braine-le-Château. Retrait sur place ou livraison. L'adresse exacte est communiquée lors de la confirmation de la commande.",
        "contact.btnWa": "Écrire sur WhatsApp",
        "contact.btnEmail": "Envoyer un email",
        "contact.fb": "Facebook",
        "cc.title": "Comment se passe une commande ?",
        "cc.step1": "Vous décrivez votre idée dans le formulaire (ou vous vous inspirez de la galerie).",
        "cc.step2": "Votre note est envoyée à Caliza via WhatsApp ou par téléphone.",
        "cc.step3": "Nous échangeons pour affiner le thème, les saveurs et le nombre de parts.",
        "cc.step4": "Vous recevez un devis personnalisé, sans engagement.",

        "footer.tagline": "Pâtisserie artisanale sur mesure. Braine-le-Château, Belgique.",
        "footer.legal1": "Caliza · Braine-le-Château, Belgique",
        "footer.legal2":
          "TVA / n° d'entreprise : BE 1019.119.711. Entreprise active depuis le 01/04/2025",
        "footer.rights": "Caliza. Tous droits réservés.",
        "footer.fb": "Suivre sur Facebook",
      },
      tagLabels: {
        "Anniversaire": "Anniversaire",
        "Fruité": "Fruité",
        "Chic": "Chic",
        "Lettres & chiffres": "Lettres & chiffres",
        "Chocolat": "Chocolat",
        "Mariage": "Mariage",
        "Fêtes": "Fêtes",
        "Enfants": "Enfants",
      },
      cakes: {
        "mariage-el": {
          title: "Mariage « E & L », roses rouges",
          desc: "Pièce montée deux étages, finition perlée et éclats d'or, ruban rouge, monogramme et roses rouges fraîches. Pensée pour une table de mariage.",
        },
        "coeur-fruits-rouges": {
          title: "Cœur fruits rouges",
          desc: "Chantilly légère, framboises, myrtilles, grenade et physalis pour une pièce généreuse et fraîche.",
        },
        "drip-macarons": {
          title: "Drip cake macarons",
          desc: "Coulures dorées, crème rose et macarons violets pour une création chic et gourmande.",
        },
        "lettre-m": {
          title: "Lettre « M » fruitée",
          desc: "Cake lettre garni de mangue, abricot, grenade et fleurs comestibles. Idéal pour un prénom ou une initiale.",
        },
        "chiffre-chocolat": {
          title: "Chiffre gourmand chocolat",
          desc: "Number cake tout chocolat, biscuits, chamallows et éclats dorés pour marquer un cap important.",
        },
        "lettre-s": {
          title: "Lettre « S » chantilly",
          desc: "Cake lettre garni de rosaces chocolat/vanille, biscuits et perles dorées.",
        },
        "piece-75": {
          title: "Pièce « 75 ans »",
          desc: "Gâteau rond parme, macarons, fruits rouges et fleurs en pâte à sucre pour un anniversaire marquant.",
        },
        "meringues-roses": {
          title: "Roses meringuées pastel",
          desc: "Grandes roses en meringue scintillante sur un entremets tout en douceur.",
        },
        "blanc-rose": {
          title: "Blanc & rose, nœuds satinés",
          desc: "Finition épurée, cœurs pastel et nœuds en ruban pour une pièce délicate.",
        },
        "eventail": {
          title: "Éventail doré, roses rouges",
          desc: "Motif en éventail pailleté et bouquet de roses rouges fraîches pour une occasion élégante.",
        },
        "coeur-fraises": {
          title: "Cœur fraises & fleurs fraîches",
          desc: "Chantilly, fraises fraîches, myrtilles et fleurs comestibles sur une base en forme de cœur.",
        },
        "mariage-mrmrs": {
          title: "Pièce de mariage « Mr & Mrs »",
          desc: "Cake cœur aux fruits rouges et roses fraîches, pensé pour sublimer une table de mariage.",
        },
        "bouquet": {
          title: "Bouquet fleuri surprise",
          desc: "Un gâteau qui se dévoile en bouquet de fleurs fraîches à l'ouverture. Effet garanti.",
        },
        "gateau-nu": {
          title: "Gâteau nu au chocolat",
          desc: "Génoise chocolat et crème mousseline entre les couches, dans un style « naked cake » brut et gourmand.",
        },
        "buche": {
          title: "Bûche au chocolat croustillant",
          desc: "Biscuit croquant, mousse chocolat et enrobage chocolat-noisette. Un classique revisité pour les fêtes.",
        },
        "mer-coquillages": {
          title: "Mer & coquillages",
          desc: "Deux étages en dégradé de bleu, coquillages et étoiles de mer en chocolat blanc, petit phare et tortue. Une pièce de fête façon bord de mer.",
        },
        "lettre-s-fruits": {
          title: "Lettre « S » aux fruits rouges",
          desc: "Génoise et chantilly, fraises, framboises, mûres et fleurs comestibles. Une lettre ou une initiale gourmande et fraîche.",
        },
        "lettre-n-fruits": {
          title: "Lettre « N » fruits & macarons",
          desc: "Sablé, crème vanille, fraises, myrtilles, mûres et macarons. Parfaite pour une initiale ou un âge.",
        },
        "mariage-mrmrs-etages": {
          title: "Pièce montée « Mr & Mrs »",
          desc: "Trois hauteurs en crème au beurre texturée, roses fraîches et cake topper doré. Sobre et élégante pour un mariage.",
        },
        "coeur-fraises-framboises": {
          title: "Cœur fraises & framboises",
          desc: "Crème onctueuse, fraises et framboises fraîches, meringues et cœurs en chocolat. Une pièce romantique et généreuse.",
        },
        "blanc-fraises-chocolat": {
          title: "Blanc, fraises au chocolat",
          desc: "Crème au beurre vanille, fraises enrobées de chocolat, rosaces et cœurs dorés. Chic pour un anniversaire ou des fiançailles.",
        },
        "prairie-fleurie": {
          title: "Prairie fleurie",
          desc: "Cake lettres façon prairie : herbes en crème, gerberas, roses et fleurs des champs. Un décor printanier plein de couleurs.",
        },
        "jack-daniels-50": {
          title: "Pièce « Jack Daniel's, 50 ans »",
          desc: "Étiquette et bouteilles reproduites en sucre, sphères dorées et effet glaçons. Un anniversaire marquant sur le thème whisky.",
        },
        "buche-framboise-glacee": {
          title: "Entremets glacé framboise",
          desc: "Bûche glacée nappée de velours blanc, cœur framboise et pensée cristallisée. Fraîcheur et finesse en fin de repas.",
        },
        "buche-noel-chocolat": {
          title: "Bûche de Noël chocolat & or",
          desc: "Biscuit et mousse chocolat, enrobage façon écorce et éclats d'or. Le grand classique des fêtes, revisité.",
        },
        "drip-bonbons": {
          title: "Drip cake bonbons",
          desc: "Coulure pastel, sucettes arc-en-ciel, guimauves et bonbons à volonté. La pièce qui fait briller les yeux des enfants.",
        },
        "mauve-fruits-rouges": {
          title: "Layer cake mauve & fruits rouges",
          desc: "Crème au beurre mauve travaillée à la poche, fraises et framboises fraîches, meringues et éclats d'or.",
        },
        "cheval-portrait": {
          title: "Gâteau portrait cheval",
          desc: "Impression comestible haute définition sur crème au beurre lisse. Idéal pour les passionnés d'équitation.",
        },
        "reine-des-neiges": {
          title: "Reine des Neiges",
          desc: "Impression Elsa, flocons en sucre et crème pastel bleu et rose. Un décor féérique pour les petites fans.",
        },
        "sonic": {
          title: "Sonic",
          desc: "Crème au beurre bleue, figurine Sonic et anneau doré, éclats d'étoiles. Un anniversaire qui file à toute vitesse.",
        },
        "stitch": {
          title: "Stitch, ambiance tropicale",
          desc: "Crème au beurre rose, Stitch, palmier et feuillage en sucre. Un décor Lilo & Stitch tout en douceur.",
        },
      },
    },

    en: {
      meta: {
        title: "Caliza / Bespoke artisan cakes",
        description:
          "Caliza, an artisan workshop for custom cakes in Braine-le-Château, Belgium. Birthdays, weddings, entremets made to order. Describe your dream cake and we handle the rest.",
        ogTitle: "Caliza: bespoke artisan cakes",
        ogDescription:
          "Hand-made custom cakes in Braine-le-Château, Belgium: birthdays, weddings, entremets. Describe your dream cake and we handle the rest.",
        ogLocale: "en_BE",
      },
      t: {
        "lang.label": "Language",
        "nav.inspirations": "Inspiration",
        "nav.order": "Order",
        "nav.atelier": "The workshop",
        "nav.contact": "Contact",
        "a11y.skip": "Skip to the order form",
        "a11y.openMenu": "Open the menu",
        "a11y.langGroup": "Language selection",
        "a11y.filterGroup": "Filter the inspiration",
        "a11y.carousel": "Caliza creations",
        "a11y.carouselPick": "Choose a photo",
        "a11y.prevPhoto": "Previous photo",
        "a11y.nextPhoto": "Next photo",
        "a11y.close": "Close",
        "a11y.lightbox": "Enlarged photo",
        "a11y.fbCaliza": "Caliza on Facebook",
        "a11y.viewFull": "View the full photo: {title}",
        "a11y.mapTitle": "Approximate location in Braine-le-Château",

        "hero.eyebrow": "Artisan workshop · Braine-le-Château",
        "hero.title": "The cake you imagined, <br class=\"br-md\">made just for you",
        "hero.lede":
          "At Caliza, every piece is made by hand for your occasion: birthdays, weddings, entremets and one-of-a-kind creations. Tell us what you have in mind in a few words and we'll build a quote just for you.",
        "hero.ctaOrder": "Order my cake",
        "hero.ctaGallery": "See all the inspiration",

        "strip.1num": "100%",
        "strip.1txt": "Bespoke, nothing off the shelf",
        "strip.2num": "Belgium",
        "strip.2txt": "Braine-le-Château",
        "strip.3num": "Quote",
        "strip.3txt": "Personalised after a phone chat",

        "gallery.eyebrow": "Inspiration gallery",
        "gallery.title": "Need ideas? Take your pick",
        "gallery.lede":
          "A few styles of creations that are possible at Caliza. Click a photo to see it in full, or click “Use this as inspiration” to pre-fill your order note. You can then adapt it to your tastes, colours and flavours.",
        "gallery.pick": "Use this as inspiration →",
        "gallery.filterAll": "All",
        "gallery.countAll": "{total} creations",
        "gallery.countFiltered": "{n} of {total} creations",
        "gallery.collapse": "Collapse the gallery",
        "gallery.expand": "Show the creations",

        "order.eyebrow": "Your order",
        "order.title": "Describe the cake of your dreams",
        "order.lede":
          "No fixed-price catalogue here: every creation is unique. Fill in the form and your request will be prepared to send straight to Caliza by WhatsApp or email. You'll then receive a free, no-obligation quote.",

        "oi.1t": "Free quote",
        "oi.1d": "No online payment: we agree the price together before any order.",
        "oi.2t": "Lead time varies",
        "oi.2d": "Depending on the season and complexity. Plan ahead for weddings and holidays.",
        "oi.3t": "Pick-up or delivery",
        "oi.3d": "Pick-up in Braine-le-Château, or delivery (often by Caliza herself) depending on distance.",

        "form.name": "Your name",
        "form.phone": "Your phone",
        "form.eventType": "Type of occasion",
        "form.eventOther": "Please specify the occasion",
        "form.date": "Preferred date",
        "form.dateHint": "Ideally 1 to 2 weeks ahead, more for tiered cakes.",
        "form.servings": "Number of servings (approx.)",
        "form.shape": "Preferred shape",
        "form.flavor": "Preferred flavour(s)",
        "form.budget": "Approximate budget",
        "form.colors": "Colour palette / theme",
        "form.fulfilment": "Pick-up or delivery",
        "form.address": "Delivery address",
        "form.addressHint": "You can also give it to us later, over the phone.",
        "form.allergies": "Allergies / dietary needs",
        "form.cakeText": "Text to write on the cake",
        "form.inspiration": "Chosen inspiration",
        "form.note": "Your note: describe the cake you have in mind",
        "form.optional": "(optional)",
        "form.important": "(important)",

        "ph.name": "e.g. Camille Dupont",
        "ph.phone": "e.g. 04XX XX XX XX",
        "ph.eventOther": "e.g. retirement party, baby shower, Valentine's Day…",
        "ph.servings": "e.g. 25",
        "ph.flavor": "e.g. vanilla, chocolate, red berries…",
        "ph.colors": "e.g. pink and gold, rustic, pastel…",
        "ph.address": "Street, number, postcode, town",
        "ph.allergies": "e.g. tree-nut allergy, lactose-free, none…",
        "ph.cakeText": "e.g. “Happy birthday Camille”",
        "ph.inspiration": "Click a photo's “Use this as inspiration”, or just type here",
        "ph.note":
          "Decor, mood, inspiration, special wishes… be as precise as you like. E.g.: “A round two-tier cake, dark chocolate ganache, gold floral decor, for my sister's 30th, rustic-chic theme.”",

        "opt.event.anniv": "Birthday",
        "opt.event.wedding": "Wedding / tiered cake",
        "opt.event.entremets": "Entremets",
        "opt.event.bapteme": "Christening / communion",
        "opt.event.autre": "Other occasion",
        "opt.shape.any": "No preference / to discuss",
        "opt.shape.round": "Round",
        "opt.shape.square": "Square / rectangle",
        "opt.shape.heart": "Heart",
        "opt.shape.letter": "Letter or number cake",
        "opt.shape.tiered": "Tiered cake",
        "opt.shape.other": "Other",
        "opt.budget.none": "No set budget",
        "opt.budget.u30": "Under €30",
        "opt.budget.b1": "€30 to €60",
        "opt.budget.b2": "€60 to €100",
        "opt.budget.b3": "€100 to €200",
        "opt.budget.o200": "Over €200",

        "radio.pickup": "Pick-up in Braine-le-Château",
        "radio.delivery": "Delivery requested",

        "btn.whatsapp": "Send via WhatsApp",
        "btn.email": "Send by email",
        "btn.call": "Or call directly",

        "note.1":
          "When you send your note, you'll be taken to WhatsApp or your email app with a pre-filled message addressed to Caliza. Nothing is sent automatically without your confirmation, and no payment is asked at this stage. Any deposit is settled after the quote is confirmed.",
        "note.2":
          "Our cakes are made in an artisan workshop that is not certified “allergen-free”: please tell us about any severe allergy before ordering.",

        "about.eyebrow": "The workshop",
        "about.title": "Pastry designed around your occasion",
        "about.p1":
          "Caliza is a Belgian artisan workshop based in Braine-le-Château. Every cake (birthday, tiered wedding cake or entremets) is designed by hand, around your wishes: flavours, colours, theme, texture, dietary needs.",
        "about.p2":
          "There is no fixed-price menu: after a phone chat, we define together the type of pastry, the number of servings and the personalisation, to build a quote that fits you.",
        "about.imgAlt": "Caliza creation: heart cake with strawberries and fresh flowers",

        "contact.eyebrow": "Contact",
        "contact.title": "Let's talk about your cake",
        "contact.labelPhone": "Phone",
        "contact.labelEmail": "Email",
        "contact.labelSector": "Area",
        "contact.labelVat": "Company number",
        "contact.sectorText":
          "Braine-le-Château. Pick-up on site or delivery. The exact address is shared once the order is confirmed.",
        "contact.btnWa": "Message on WhatsApp",
        "contact.btnEmail": "Send an email",
        "contact.fb": "Facebook",
        "cc.title": "How does an order work?",
        "cc.step1": "You describe your idea in the form (or take inspiration from the gallery).",
        "cc.step2": "Your note is sent to Caliza via WhatsApp or by phone.",
        "cc.step3": "We talk it through to refine the theme, flavours and number of servings.",
        "cc.step4": "You receive a personalised quote, with no obligation.",

        "footer.tagline": "Bespoke artisan pastry. Braine-le-Château, Belgium.",
        "footer.legal1": "Caliza · Braine-le-Château, Belgium",
        "footer.legal2":
          "VAT / company number: BE 1019.119.711. Trading since 01/04/2025",
        "footer.rights": "Caliza. All rights reserved.",
        "footer.fb": "Follow on Facebook",
      },
      tagLabels: {
        "Anniversaire": "Birthday",
        "Fruité": "Fruity",
        "Chic": "Elegant",
        "Lettres & chiffres": "Letters & numbers",
        "Chocolat": "Chocolate",
        "Mariage": "Wedding",
        "Fêtes": "Festive",
        "Enfants": "Kids",
      },
      cakes: {
        "mariage-el": {
          title: "“E & L” wedding cake, red roses",
          desc: "Two-tier tiered cake, pearl finish and gold flecks, red ribbon, monogram and fresh red roses. Designed for a wedding table.",
        },
        "coeur-fruits-rouges": {
          title: "Red-berry heart",
          desc: "Light whipped cream, raspberries, blueberries, pomegranate and physalis for a generous, fresh piece.",
        },
        "drip-macarons": {
          title: "Macaron drip cake",
          desc: "Gold drips, pink cream and purple macarons for an elegant, indulgent creation.",
        },
        "lettre-m": {
          title: "Fruity “M” letter cake",
          desc: "Letter cake topped with mango, apricot, pomegranate and edible flowers. Perfect for a name or an initial.",
        },
        "chiffre-chocolat": {
          title: "Indulgent chocolate number",
          desc: "All-chocolate number cake with biscuits, marshmallows and gold flecks to mark a big milestone.",
        },
        "lettre-s": {
          title: "Whipped-cream “S” letter cake",
          desc: "Letter cake with chocolate/vanilla rosettes, biscuits and gold pearls.",
        },
        "piece-75": {
          title: "“75 years” cake",
          desc: "Round mauve cake, macarons, red berries and sugar-paste flowers for a milestone birthday.",
        },
        "meringues-roses": {
          title: "Pastel meringue roses",
          desc: "Large shimmering meringue roses on a soft, delicate entremets.",
        },
        "blanc-rose": {
          title: "White & pink, satin bows",
          desc: "Clean finish, pastel hearts and ribbon bows for a delicate piece.",
        },
        "eventail": {
          title: "Gold fan, red roses",
          desc: "Glittering fan pattern and a bunch of fresh red roses for an elegant occasion.",
        },
        "coeur-fraises": {
          title: "Heart with strawberries & fresh flowers",
          desc: "Whipped cream, fresh strawberries, blueberries and edible flowers on a heart-shaped base.",
        },
        "mariage-mrmrs": {
          title: "“Mr & Mrs” wedding cake",
          desc: "Heart cake with red berries and fresh roses, made to elevate a wedding table.",
        },
        "bouquet": {
          title: "Surprise flower bouquet",
          desc: "A cake that opens into a bouquet of fresh flowers. Guaranteed effect.",
        },
        "gateau-nu": {
          title: "Chocolate naked cake",
          desc: "Chocolate sponge and mousseline cream between the layers, in a raw, indulgent naked-cake style.",
        },
        "buche": {
          title: "Crunchy chocolate yule log",
          desc: "Crunchy biscuit, chocolate mousse and chocolate-hazelnut coating. A classic with a twist for the holidays.",
        },
        "mer-coquillages": {
          title: "Sea & seashells",
          desc: "Two tiers in a blue ombré, white-chocolate shells and starfish, a little lighthouse and turtle. A seaside-themed celebration piece.",
        },
        "lettre-s-fruits": {
          title: "“S” letter cake with red berries",
          desc: "Sponge and whipped cream, strawberries, raspberries, blackberries and edible flowers. A fresh, indulgent letter or initial.",
        },
        "lettre-n-fruits": {
          title: "“N” letter cake, berries & macarons",
          desc: "Shortbread, vanilla cream, strawberries, blueberries, blackberries and macarons. Perfect for an initial or an age.",
        },
        "mariage-mrmrs-etages": {
          title: "“Mr & Mrs” tiered cake",
          desc: "Three tiers of textured buttercream, fresh roses and a gold cake topper. Understated and elegant for a wedding.",
        },
        "coeur-fraises-framboises": {
          title: "Heart with strawberries & raspberries",
          desc: "Smooth cream, fresh strawberries and raspberries, meringues and chocolate hearts. A romantic, generous piece.",
        },
        "blanc-fraises-chocolat": {
          title: "White, chocolate-dipped strawberries",
          desc: "Vanilla buttercream, chocolate-dipped strawberries, rosettes and gold hearts. Elegant for a birthday or an engagement.",
        },
        "prairie-fleurie": {
          title: "Flower meadow",
          desc: "A meadow-style letter cake: piped grass, gerberas, roses and wild flowers. A spring decor full of colour.",
        },
        "jack-daniels-50": {
          title: "“Jack Daniel's, 50th” cake",
          desc: "Sugar-made label and bottles, gold spheres and an ice-cube effect. A milestone birthday on a whiskey theme.",
        },
        "buche-framboise-glacee": {
          title: "Frozen raspberry entremets",
          desc: "An iced log coated in white velvet, a raspberry heart and a crystallised pansy. Fresh and refined to finish a meal.",
        },
        "buche-noel-chocolat": {
          title: "Chocolate & gold yule log",
          desc: "Chocolate sponge and mousse, a bark-style coating and gold flecks. The holiday classic, revisited.",
        },
        "drip-bonbons": {
          title: "Candy drip cake",
          desc: "Pastel drip, rainbow lollipops, marshmallows and all the sweets. The piece that makes children's eyes light up.",
        },
        "mauve-fruits-rouges": {
          title: "Mauve layer cake with red berries",
          desc: "Piped mauve buttercream, fresh strawberries and raspberries, meringues and gold flecks.",
        },
        "cheval-portrait": {
          title: "Horse portrait cake",
          desc: "A high-definition edible print on smooth buttercream. Ideal for horse-riding enthusiasts.",
        },
        "reine-des-neiges": {
          title: "Frozen",
          desc: "An Elsa print, sugar snowflakes and pastel blue-and-pink cream. A magical decor for little fans.",
        },
        "sonic": {
          title: "Sonic",
          desc: "Blue buttercream, a Sonic figure and gold ring, star confetti. A birthday at full speed.",
        },
        "stitch": {
          title: "Stitch, tropical vibe",
          desc: "Pink buttercream, Stitch, a palm tree and sugar foliage. A gentle Lilo & Stitch decor.",
        },
      },
    },

    nl: {
      meta: {
        title: "Caliza / Ambachtelijke taarten op maat",
        description:
          "Caliza, ambachtelijk atelier voor taarten op maat in Braine-le-Château, België. Verjaardagen, bruiloften, entremets op bestelling. Beschrijf je droomtaart, wij doen de rest.",
        ogTitle: "Caliza: ambachtelijke taarten op maat",
        ogDescription:
          "Handgemaakte taarten op maat in Braine-le-Château, België: verjaardagen, bruiloften, entremets. Beschrijf je droomtaart, wij doen de rest.",
        ogLocale: "nl_BE",
      },
      t: {
        "lang.label": "Taal",
        "nav.inspirations": "Inspiratie",
        "nav.order": "Bestellen",
        "nav.atelier": "Het atelier",
        "nav.contact": "Contact",
        "a11y.skip": "Naar het bestelformulier",
        "a11y.openMenu": "Menu openen",
        "a11y.langGroup": "Taalkeuze",
        "a11y.filterGroup": "Inspiratie filteren",
        "a11y.carousel": "Creaties van Caliza",
        "a11y.carouselPick": "Kies een foto",
        "a11y.prevPhoto": "Vorige foto",
        "a11y.nextPhoto": "Volgende foto",
        "a11y.close": "Sluiten",
        "a11y.lightbox": "Vergrote foto",
        "a11y.fbCaliza": "Caliza op Facebook",
        "a11y.viewFull": "Bekijk de volledige foto: {title}",
        "a11y.mapTitle": "Locatie bij benadering in Braine-le-Château",

        "hero.eyebrow": "Ambachtelijk atelier · Braine-le-Château",
        "hero.title": "De taart die jij bedacht, <br class=\"br-md\">op maat gemaakt",
        "hero.lede":
          "Bij Caliza wordt elk stuk met de hand gemaakt voor jouw gelegenheid: verjaardagen, bruiloften, entremets en unieke creaties. Vertel ons in een paar woorden wat je in gedachten hebt en we maken een offerte speciaal voor jou.",
        "hero.ctaOrder": "Mijn taart bestellen",
        "hero.ctaGallery": "Alle inspiratie bekijken",

        "strip.1num": "100%",
        "strip.1txt": "Op maat, niets standaard",
        "strip.2num": "België",
        "strip.2txt": "Braine-le-Château",
        "strip.3num": "Offerte",
        "strip.3txt": "Op maat na een telefoongesprek",

        "gallery.eyebrow": "Inspiratiegalerij",
        "gallery.title": "Ideeën nodig? Kies maar uit",
        "gallery.lede":
          "Enkele stijlen van creaties die mogelijk zijn bij Caliza. Klik op een foto om ze volledig te bekijken, of op “Als inspiratie gebruiken” om je bestelnota vooraf in te vullen. Daarna pas je alles aan naar je smaak, kleuren en smaken.",
        "gallery.pick": "Als inspiratie gebruiken →",
        "gallery.filterAll": "Alle",
        "gallery.countAll": "{total} creaties",
        "gallery.countFiltered": "{n} van {total} creaties",
        "gallery.collapse": "Galerij inklappen",
        "gallery.expand": "Creaties tonen",

        "order.eyebrow": "Je bestelling",
        "order.title": "Beschrijf de taart van je dromen",
        "order.lede":
          "Geen catalogus met vaste prijzen: elke creatie is uniek. Vul het formulier in en je aanvraag wordt klaargezet om rechtstreeks naar Caliza te sturen via WhatsApp of e-mail. Daarna krijg je een gratis en vrijblijvende offerte.",

        "oi.1t": "Gratis offerte",
        "oi.1d": "Geen online betaling: we spreken de prijs samen af vóór elke bestelling.",
        "oi.2t": "Variabele levertijd",
        "oi.2d": "Afhankelijk van het seizoen en de complexiteit. Denk vooruit voor bruiloften en feestdagen.",
        "oi.3t": "Afhalen of leveren",
        "oi.3d": "Afhalen in Braine-le-Château, of levering (vaak door Caliza zelf) afhankelijk van de afstand.",

        "form.name": "Je naam",
        "form.phone": "Je telefoon",
        "form.eventType": "Soort gelegenheid",
        "form.eventOther": "Verduidelijk de gelegenheid",
        "form.date": "Gewenste datum",
        "form.dateHint": "Idealiter 1 à 2 weken op voorhand, meer voor taarten met verdiepingen.",
        "form.servings": "Aantal porties (ongeveer)",
        "form.shape": "Gewenste vorm",
        "form.flavor": "Gewenste smaak(en)",
        "form.budget": "Geschat budget",
        "form.colors": "Kleurenpalet / thema",
        "form.fulfilment": "Afhalen of leveren",
        "form.address": "Leveringsadres",
        "form.addressHint": "Je mag het ons ook later doorgeven, telefonisch.",
        "form.allergies": "Allergieën / dieetwensen",
        "form.cakeText": "Tekst op de taart",
        "form.inspiration": "Gekozen inspiratie",
        "form.note": "Je nota: beschrijf de taart die je voor ogen hebt",
        "form.optional": "(optioneel)",
        "form.important": "(belangrijk)",

        "ph.name": "Bv. Camille Dupont",
        "ph.phone": "Bv. 04XX XX XX XX",
        "ph.eventOther": "Bv. pensioenfeest, babyshower, Valentijn…",
        "ph.servings": "Bv. 25",
        "ph.flavor": "Bv. vanille, chocolade, rode vruchten…",
        "ph.colors": "Bv. roze en goud, landelijk, pastel…",
        "ph.address": "Straat, nummer, postcode, gemeente",
        "ph.allergies": "Bv. notenallergie, lactosevrij, geen…",
        "ph.cakeText": "Bv. “Gelukkige verjaardag Camille”",
        "ph.inspiration": "Klik bij een foto op “Als inspiratie gebruiken”, of typ hier vrij",
        "ph.note":
          "Decor, sfeer, inspiratie, bijzondere wensen… wees zo precies als je wil. Bv.: “Een ronde taart met twee verdiepingen, ganache van pure chocolade, gouden bloemendecor, voor de 30ste verjaardag van mijn zus, landelijk-chique thema.”",

        "opt.event.anniv": "Verjaardag",
        "opt.event.wedding": "Bruiloft / taart met verdiepingen",
        "opt.event.entremets": "Entremets",
        "opt.event.bapteme": "Doop / communie",
        "opt.event.autre": "Andere gelegenheid",
        "opt.shape.any": "Maakt niet uit / te bespreken",
        "opt.shape.round": "Rond",
        "opt.shape.square": "Vierkant / rechthoekig",
        "opt.shape.heart": "Hart",
        "opt.shape.letter": "Letter- of cijfertaart",
        "opt.shape.tiered": "Taart met verdiepingen",
        "opt.shape.other": "Andere",
        "opt.budget.none": "Geen vast budget",
        "opt.budget.u30": "Minder dan €30",
        "opt.budget.b1": "€30 tot €60",
        "opt.budget.b2": "€60 tot €100",
        "opt.budget.b3": "€100 tot €200",
        "opt.budget.o200": "Meer dan €200",

        "radio.pickup": "Afhalen in Braine-le-Château",
        "radio.delivery": "Levering gewenst",

        "btn.whatsapp": "Versturen via WhatsApp",
        "btn.email": "Versturen per e-mail",
        "btn.call": "Of rechtstreeks bellen",

        "note.1":
          "Wanneer je je nota verstuurt, ga je naar WhatsApp of je e-mailprogramma met een vooraf ingevuld bericht gericht aan Caliza. Er wordt niets automatisch verstuurd zonder jouw bevestiging, en er wordt in dit stadium geen betaling gevraagd. Een eventueel voorschot wordt geregeld na bevestiging van de offerte.",
        "note.2":
          "Onze taarten worden gemaakt in een ambachtelijk atelier dat niet “allergeenvrij” gecertificeerd is: meld ons elke ernstige allergie vóór je bestelt.",

        "about.eyebrow": "Het atelier",
        "about.title": "Patisserie op maat van jouw gelegenheid",
        "about.p1":
          "Caliza is een Belgisch ambachtelijk atelier in Braine-le-Château. Elke taart (verjaardag, bruiloftstaart met verdiepingen of entremets) wordt met de hand ontworpen, rond jouw wensen: smaken, kleuren, thema, textuur, dieetwensen.",
        "about.p2":
          "Er is geen menu met vaste prijzen: na een telefoongesprek bepalen we samen het soort patisserie, het aantal porties en de personalisatie, om een offerte te maken die bij je past.",
        "about.imgAlt": "Creatie van Caliza: harttaart met aardbeien en verse bloemen",

        "contact.eyebrow": "Contact",
        "contact.title": "Laten we over je taart praten",
        "contact.labelPhone": "Telefoon",
        "contact.labelEmail": "E-mail",
        "contact.labelSector": "Regio",
        "contact.labelVat": "Ondernemingsnummer",
        "contact.sectorText":
          "Braine-le-Château. Afhalen ter plaatse of levering. Het exacte adres wordt meegedeeld bij de bevestiging van de bestelling.",
        "contact.btnWa": "Bericht via WhatsApp",
        "contact.btnEmail": "Een e-mail sturen",
        "contact.fb": "Facebook",
        "cc.title": "Hoe verloopt een bestelling?",
        "cc.step1": "Je beschrijft je idee in het formulier (of je haalt inspiratie uit de galerij).",
        "cc.step2": "Je nota wordt naar Caliza gestuurd via WhatsApp of telefonisch.",
        "cc.step3": "We overleggen om het thema, de smaken en het aantal porties te verfijnen.",
        "cc.step4": "Je ontvangt een gepersonaliseerde offerte, vrijblijvend.",

        "footer.tagline": "Ambachtelijke patisserie op maat. Braine-le-Château, België.",
        "footer.legal1": "Caliza · Braine-le-Château, België",
        "footer.legal2":
          "Btw / ondernemingsnummer: BE 1019.119.711. Actief sinds 01/04/2025",
        "footer.rights": "Caliza. Alle rechten voorbehouden.",
        "footer.fb": "Volgen op Facebook",
      },
      tagLabels: {
        "Anniversaire": "Verjaardag",
        "Fruité": "Fruitig",
        "Chic": "Chic",
        "Lettres & chiffres": "Letters & cijfers",
        "Chocolat": "Chocolade",
        "Mariage": "Bruiloft",
        "Fêtes": "Feestdagen",
        "Enfants": "Kinderen",
      },
      cakes: {
        "mariage-el": {
          title: "Bruiloftstaart “E & L”, rode rozen",
          desc: "Taart met twee verdiepingen, parelafwerking en goudschilfers, rood lint, monogram en verse rode rozen. Ontworpen voor een bruiloftstafel.",
        },
        "coeur-fruits-rouges": {
          title: "Hart met rode vruchten",
          desc: "Luchtige slagroom, frambozen, bosbessen, granaatappel en physalis voor een gul en fris stuk.",
        },
        "drip-macarons": {
          title: "Drip cake met macarons",
          desc: "Gouden druipsel, roze crème en paarse macarons voor een chique, gulle creatie.",
        },
        "lettre-m": {
          title: "Fruitige lettertaart “M”",
          desc: "Lettertaart met mango, abrikoos, granaatappel en eetbare bloemen. Ideaal voor een voornaam of initiaal.",
        },
        "chiffre-chocolat": {
          title: "Gulle chocoladecijfer",
          desc: "Cijfertaart volledig in chocolade, met koekjes, marshmallows en goudschilfers om een mijlpaal te vieren.",
        },
        "lettre-s": {
          title: "Lettertaart “S” met slagroom",
          desc: "Lettertaart met rozetten van chocolade/vanille, koekjes en gouden pareltjes.",
        },
        "piece-75": {
          title: "Taart “75 jaar”",
          desc: "Ronde mauve taart, macarons, rode vruchten en bloemen in suikerpasta voor een bijzondere verjaardag.",
        },
        "meringues-roses": {
          title: "Pastelroze meringuerozen",
          desc: "Grote glinsterende meringuerozen op een zachte, delicate entremets.",
        },
        "blanc-rose": {
          title: "Wit & roze, satijnen strikken",
          desc: "Strakke afwerking, pastelharten en lintstrikken voor een delicaat stuk.",
        },
        "eventail": {
          title: "Gouden waaier, rode rozen",
          desc: "Glinsterend waaiermotief en een boeket verse rode rozen voor een elegante gelegenheid.",
        },
        "coeur-fraises": {
          title: "Hart met aardbeien & verse bloemen",
          desc: "Slagroom, verse aardbeien, bosbessen en eetbare bloemen op een hartvormige basis.",
        },
        "mariage-mrmrs": {
          title: "Bruiloftstaart “Mr & Mrs”",
          desc: "Harttaart met rode vruchten en verse rozen, gemaakt om een bruiloftstafel op te fleuren.",
        },
        "bouquet": {
          title: "Verrassend bloemenboeket",
          desc: "Een taart die openvalt tot een boeket verse bloemen. Effect verzekerd.",
        },
        "gateau-nu": {
          title: "Naked cake met chocolade",
          desc: "Chocoladebiscuit en mousselinecrème tussen de lagen, in een rauwe, gulle naked-cake-stijl.",
        },
        "buche": {
          title: "Knapperige chocoladekerststronk",
          desc: "Knapperige biscuit, chocolademousse en een laagje chocolade-hazelnoot. Een klassieker in een nieuw jasje voor de feestdagen.",
        },
        "mer-coquillages": {
          title: "Zee & schelpen",
          desc: "Twee verdiepingen in blauw kleurverloop, schelpen en zeesterren van witte chocolade, een vuurtorentje en schildpad. Een feeststuk in zeethema.",
        },
        "lettre-s-fruits": {
          title: "Lettertaart “S” met rode vruchten",
          desc: "Biscuit en slagroom, aardbeien, frambozen, bramen en eetbare bloemen. Een frisse, gulle letter of initiaal.",
        },
        "lettre-n-fruits": {
          title: "Lettertaart “N”, vruchten & macarons",
          desc: "Zandkoek, vanillecrème, aardbeien, bosbessen, bramen en macarons. Perfect voor een initiaal of een leeftijd.",
        },
        "mariage-mrmrs-etages": {
          title: "Bruiloftstaart “Mr & Mrs”",
          desc: "Drie verdiepingen in getextureerde botercrème, verse rozen en een gouden cake topper. Sober en elegant voor een bruiloft.",
        },
        "coeur-fraises-framboises": {
          title: "Hart met aardbeien & frambozen",
          desc: "Zachte crème, verse aardbeien en frambozen, meringues en chocoladeharten. Een romantisch, gul stuk.",
        },
        "blanc-fraises-chocolat": {
          title: "Wit, aardbeien met chocolade",
          desc: "Vanillebotercrème, met chocolade omhulde aardbeien, rozetten en gouden hartjes. Chic voor een verjaardag of een verloving.",
        },
        "prairie-fleurie": {
          title: "Bloemenweide",
          desc: "Een lettertaart in weidestijl: gespoten gras, gerbera's, rozen en veldbloemen. Een lentedecor vol kleur.",
        },
        "jack-daniels-50": {
          title: "Taart “Jack Daniel's, 50 jaar”",
          desc: "Etiket en flessen nagemaakt in suiker, gouden bollen en een ijsblokjeseffect. Een bijzondere verjaardag met whiskythema.",
        },
        "buche-framboise-glacee": {
          title: "IJsentremets met framboos",
          desc: "Een ijsstronk met wit fluweelglazuur, een frambozenhart en een gekristalliseerd viooltje. Fris en verfijnd als afsluiter.",
        },
        "buche-noel-chocolat": {
          title: "Kerststronk chocolade & goud",
          desc: "Chocoladebiscuit en -mousse, een schorsafwerking en goudschilfers. De kerstklassieker in een nieuw jasje.",
        },
        "drip-bonbons": {
          title: "Drip cake met snoep",
          desc: "Pastelkleurig druipsel, regenboogsucettes, marshmallows en snoep in overvloed. Het stuk waar kinderen van gaan stralen.",
        },
        "mauve-fruits-rouges": {
          title: "Mauve layer cake met rode vruchten",
          desc: "Gespoten mauve botercrème, verse aardbeien en frambozen, meringues en goudschilfers.",
        },
        "cheval-portrait": {
          title: "Portrettaart paard",
          desc: "Een hogeresolutie eetbare print op gladde botercrème. Ideaal voor paardenliefhebbers.",
        },
        "reine-des-neiges": {
          title: "Frozen",
          desc: "Een Elsa-print, suikeren sneeuwvlokken en pastelblauwe en -roze crème. Een sprookjesachtig decor voor kleine fans.",
        },
        "sonic": {
          title: "Sonic",
          desc: "Blauwe botercrème, een Sonic-figuurtje en gouden ring, sterrenconfetti. Een verjaardag op topsnelheid.",
        },
        "stitch": {
          title: "Stitch, tropische sfeer",
          desc: "Roze botercrème, Stitch, een palmboom en suikeren gebladerte. Een zacht Lilo & Stitch-decor.",
        },
      },
    },
  };

  window.CALIZA_I18N = I18N;
  window.CALIZA_TAGS = TAGS;
  window.CALIZA_LANGS = ["fr", "en", "nl"];
})();
