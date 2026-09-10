# Caliza — produit

## En une phrase
Site vitrine d'un atelier de pâtisserie artisanale sur mesure (Caliza,
Braine-le-Château, Belgique) : montrer les créations, donner envie, et amener le
visiteur à envoyer une demande de devis par WhatsApp ou email.

## Public
- Particuliers belges qui organisent un événement (anniversaire, mariage,
  baptême/communion, fête). Majoritairement sur téléphone, arrivant de Facebook.
- Langue principale : français. Aussi néerlandais et anglais (sélecteur FR/EN/NL).

## Ce que le visiteur fait
1. Parcourt la galerie de créations (31 pièces, filtrables, clic = photo en grand).
2. Remplit un formulaire de commande (aucun paiement en ligne).
3. Le formulaire compose un message **en français** (toujours) envoyé à Caliza
   via WhatsApp ou email ; Caliza rappelle et établit un devis gratuit.

## Contraintes
- Site **statique**, hébergé sur GitHub Pages, **sans build**. Polices via Google Fonts.
- Propriétaire non-développeuse : elle ajoute des gâteaux en éditant un tableau
  dans `script.js` (id + image + tags) et les textes dans `i18n.js`.
- **Vie privée** : jamais l'adresse exacte de l'atelier ni d'épingle sur la
  maison ; la carte montre la commune, l'adresse est donnée à la confirmation.
- Numéro pro : +32 470 84 12 57 (appel + WhatsApp).

## Direction visuelle retenue (redesign)
Choix explicites du client, via menu à options :
- **Ampleur** : passe légère sur `index.html` + redesign complet sur un
  nouveau fichier (`atelier.html`).
- **Ambiance** : « Clair papier » (éditorial, fond papier chaud) — écarté :
  sombre, coloré.
- **Typographie** : Fraunces + Inter Tight — écarté : tout-Fraunces, alternative
  plus sobre (Newsreader / Bricolage Grotesque).

Détail du monde visuel : voir `DESIGN.md`.
