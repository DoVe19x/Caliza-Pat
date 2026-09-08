# Caliza — site vitrine

Site vitrine statique (HTML / CSS / JS, sans dépendance) pour **Caliza**, atelier
artisanal de pâtisserie sur mesure à Wauthier-Braine (Braine-le-Château, Belgique).

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique du site (textes marqués `data-i18n`) |
| `style.css` | Styles (responsive, mobile / iOS / navigateurs modernes) |
| `i18n.js` | Traductions FR / EN / NL (dictionnaire + textes des gâteaux) |
| `script.js` | Carrousel, galerie, lightbox, filtres, sélecteur de langue, formulaire (WhatsApp / email) |
| `assets/` | Logo et photos utilisées par le site |

## Langues

Le site est en **français par défaut**. Le sélecteur **FR / EN / NL** (en-tête) bascule
tout le contenu visible et mémorise le choix du visiteur (`localStorage`). Le message
de commande envoyé à Caliza reste toujours en français.

Pour modifier un texte : chercher sa clé dans `index.html` (`data-i18n="..."`) puis
éditer les trois langues dans `i18n.js`. Les titres/descriptions des gâteaux sont
dans `i18n.js` (objet `cakes`), la liste des photos dans `script.js` (tableau `cakes`).

## Aperçu en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déploiement (GitHub Pages)

Le déploiement est automatique via GitHub Actions (`.github/workflows/deploy.yml`) :
chaque `git push` sur `main` republie le site.

**Activation (une seule fois) :** dans le dépôt GitHub →
**Settings → Pages → Build and deployment → Source : GitHub Actions**.

URL publique : `https://dove19x.github.io/Caliza-Pat/`

## Mise à jour du contenu

- Textes : `i18n.js` (les 3 langues) ; la clé se trouve dans `index.html` (`data-i18n`).
- Galerie de gâteaux : photos dans `script.js` (tableau `cakes`), titres/descriptions dans `i18n.js` (`cakes`).
- Coordonnées / n° WhatsApp : `script.js` (`WHATSAPP_NUMBER`, `EMAIL_ADDRESS`) et `index.html`.
