# Caliza — systèmes visuels

Le dépôt porte **deux pages** qui partagent `script.js` + `i18n.js` (carrousel,
galerie, lightbox, filtres, FR/EN/NL, révélation au défilement) :

| Page | Feuille de style | Monde visuel |
|---|---|---|
| `index.html` | `style.css` | **Vitrine chaleureuse** (existante, passe légère : polices Fraunces + Inter Tight, héros agrandi). |
| `atelier.html` | `atelier.css` | **Monographie** (redesign : papier éditorial). |

---

## Monde « Monographie » (`atelier.html` / `atelier.css`)

### Thèse
Le travail catalogué comme le portfolio d'un artisan, pas une devanture de
boulangerie. Refuse : la grille de cartes crème, les puces de filtre en pilule,
les intitulés en capitales espacées.

### Palette (tokens dans `:root` de `atelier.css`)
| Rôle | Token | Valeur |
|---|---|---|
| Fond papier | `--paper` | `#efe8dc` |
| Fond « zone de travail » (formulaire, contact) | `--paper-work` | `#e9e0cf` |
| Fond image / panneau discret | `--paper-2` | `#e6dccb` |
| Encre | `--ink` | `#211c16` |
| Texte secondaire | `--ink-70` | `#514840` |
| Libellés discrets | `--ink-45` | `#6a6156` |
| Filet | `--rule` | `rgba(33,28,22,.16)` |
| Soulignement de champ | `--rule-strong` | `rgba(33,28,22,.30)` |
| Accent unique | `--sienna` | `#a94a28` |
| Accent survol | `--sienna-deep` | `#853717` |

Contraste : tous les textes visés ≥ 4.5:1 (sur `--paper` **et** `--paper-work`).
L'accent sienna ne sert **que** pour les actions, l'état actif et les numéros.

### Typographie
- **Fraunces** (`opsz` auto, `SOFT` 20–46, `WONK` 1 sur les grands titres) :
  mot-symbole, titres de section, légendes de plaque, numéros d'index.
- **Inter Tight** (400 / 500 / 600) : corps, UI, formulaire.
- Choix explicite du client parmi 3 options (dont une plus sobre).

### Langage de composition
- **Aucun arrondi** (`border-radius:0` partout).
- Filets 1 px (`--rule`) comme seuls séparateurs — pas de bandes colorées, pas
  d'ombres portées, pas de cartes.
- **Colophon** : pied de page sur fond `--ink` — le seul bloc sombre, comme la
  4ᵉ de couverture d'un livre.
- Photos : cadre **4:5**, `object-fit:cover`, grade uniforme
  `saturate(1.05) contrast(1.02)`, filet intérieur 1 px (sienna au survol) ;
  même traitement dans la lightbox.
- Grille galerie : index numéroté 3-up (`decimal-leading-zero` en Fraunces),
  légende sous l'image, tags en texte simple séparés par « · », lien souligné.
- Filtres : onglets texte, actif = soulignement sienna 2 px.
- Formulaire : champs à **soulignement seul** (textarea encadré), boutons blocs
  nets, `.button` plein sienna / `.button-outline` filet encre.

### Mouvement signature
Chaque image de galerie se révèle par un **balayage `clip-path`** de bas en haut
(`.85s`), légende et numéro en fondu décalé. Lightbox = image agrandie depuis sa
position. Rien d'autre ne bouge. Neutralisé sous `prefers-reduced-motion`.

### Surfaces navigateur
Sélection, barre de défilement, curseur et anneaux de focus repris sur `--ink` /
`--sienna`.

### Risque assumé
Le monde « papier chaud + serif éditorial » est un défaut reconnu de la
catégorie ; il est ici un **choix explicite du client** (alternatives sombre et
colorée présentées puis écartées). Rendu au maximum d'engagement : papier dense,
encre franche, bords nets, colophon sombre — pas la version timide.

### Exceptions détecteur consignées (`.impeccable/config.json`)
- `cream-palette`, `overused-font (fraunces / inter)` : direction choisie par le client.
- `clipped-overflow-container` : `body{overflow-x:clip}` volontaire, en-tête collant vérifié.
- `cramped-padding` (`order-info`) : bloc de 3 colonnes à filets, padding 32×38 px, non serré à l'inspection.

### Images
Toutes les photos sont fournies par le client (`assets/gateaux/…`, versions
optimisées à 1400 px). Aucun asset généré.
