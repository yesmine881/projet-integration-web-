# Loca Move (Loca Mode) — Site de location de voitures

## Présentation
Ce projet est un site web statique (HTML/CSS/JavaScript) pour une agence de location de voitures.
Il contient plusieurs pages (accueil, catalogue, réservation, agences, contact), une charte graphique orange, et des fonctionnalités interactives en JavaScript.

## Pages
- **`index.html`** : page d’accueil + barre de recherche.
- **`catalogue.html`** : catalogue des véhicules + filtres (marque / catégorie) + modal “voir plus”.
- **`reservation.html`** : formulaire de réservation.
- **`agence.html`** : présentation des agences.
- **`contact.html`** : formulaire de contact + coordonnées.

## Fonctionnalités principales (JavaScript)
- **Recherche** depuis l’accueil vers le catalogue.
- **Catalogue** : filtres (marque / catégorie), recherche via paramètre URL, modal de détails, redirection vers la réservation.
- **Réservation** :
  - pré‑sélection du véhicule depuis le catalogue (via `localStorage`),
  - calcul automatique du **nombre de jours** à partir des dates (récupération / retour),
  - calcul du **total** selon prix/jour et durée,
  - vérification de disponibilité (liste de véhicules loués) + blocage du bouton si indisponible,
  - modales Bootstrap (confirmation / succès),
  - champs de contact ajoutés: **téléphone 1**, **téléphone 2 (optionnel)**, **email**.

## Technologies utilisées
- **HTML5** (balises sémantiques, médias/images).
- **CSS3** (variables CSS, composants, styles personnalisés, responsive).
- **Bootstrap 5.3** (grille, composants, modales).
- **Google Fonts** (Poppins, Roboto).
- **Font Awesome** (icônes).
- **JavaScript** (interactivité: recherche, filtres, modales, calculs).

## Responsive (3 mises en page)
Le site adapte l’affichage selon la largeur d’écran :
- **Grands écrans** (desktop)
- **Écrans moyens** (tablettes / petits laptops)
- **Petits écrans** (mobiles)

Les breakpoints sont gérés dans `style.css`.

## Accessibilité (objectif WCAG AA)
Quelques bonnes pratiques intégrées :
- **Skip link** “Aller au contenu principal”.
- Styles de **focus** visibles au clavier.
- Liens d’icônes (réseaux sociaux) avec **`aria-label`**.
- Formulaires: labels associés (`for`), champs requis (`aria-required`), aide via placeholders.

## Comment exécuter / tester
1. Ouvrir le dossier du projet.
2. Ouvrir **`index.html`** dans un navigateur (double‑clic).
3. Tester le parcours:
   - Accueil → Recherche → Catalogue
   - Catalogue → “Réserver” → Réservation
   - Réservation → choisir dates → vérifier calcul jours + total → confirmer

> Optionnel : utiliser l’extension VS Code “Live Server” pour un rechargement automatique.

## Structure des fichiers (simplifiée)
- `index.html`, `catalogue.html`, `reservation.html`, `agence.html`, `contact.html`
- `style.css` (style principal)
- `script/app.js` (logique JavaScript)
- Images: `logo.png`, `location.jpg`, etc.

## Auteurs
Projet réalisé en binôme (à compléter: noms/prénoms).