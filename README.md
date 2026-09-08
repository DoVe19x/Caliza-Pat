# Caliza — site vitrine

Site vitrine statique (HTML / CSS / JS, sans dépendance) pour **Caliza**, atelier
artisanal de pâtisserie sur mesure à Wauthier-Braine (Braine-le-Château, Belgique).

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique du site |
| `style.css` | Styles (responsive, mobile / iOS / navigateurs modernes) |
| `script.js` | Galerie d'inspiration, filtres, formulaire de commande (WhatsApp / email) |
| `assets/` | Logo et photos utilisées par le site |

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

- Textes : directement dans `index.html`.
- Galerie de gâteaux : tableau `cakes` en haut de `script.js`.
- Coordonnées / n° WhatsApp : `script.js` (`WHATSAPP_NUMBER`, `EMAIL_ADDRESS`) et `index.html`.
