# Présentation du site — LOCA‑MOVE (Loca Mode)

## 1) Objectif du projet
Créer un site web **responsive**, avec une **charte graphique**, des **médias**, des **polices Google**, des **icônes Font Awesome**, et de l’**interactivité JavaScript**.

## 2) Technologies utilisées
- **HTML5** : balises sémantiques (`header`, `nav`, `main`, `section`, `footer`).
- **CSS3** : variables CSS, styles personnalisés, responsive (plusieurs breakpoints).
- **Bootstrap 5.3** : grille, composants, modales.
- **Google Fonts** : Poppins / Roboto.
- **Font Awesome** : icônes.
- **JavaScript** : recherche, filtres, calculs, modales, `localStorage`.

## 3) Structure du site (pages)
- **Accueil** : `index.html`
- **Catalogue** : `catalogue.html`
- **Réservation** : `reservation.html`
- **Agences** : `agence.html`
- **Contact** : `contact.html`

## 4) Charte graphique & design
- Palette dominante: orange (variables CSS dans `style.css`).
- Boutons et éléments interactifs harmonisés.
- Mise en page moderne avec cartes, ombres, arrondis, sections.

## 5) Responsive (3 mises en page)
Le site s’adapte selon la largeur d’écran:
- **Grand écran (desktop)** : menu horizontal, cartes sur plusieurs colonnes.
- **Écran moyen (tablette)** : espacements réduits, éléments redimensionnés.
- **Petit écran (mobile)** : menu en colonne, barre de recherche empilée, images adaptées.

## 6) Accessibilité (objectif WCAG AA)
- Lien d’évitement (**skip link**) vers le contenu principal.
- Focus clavier visible.
- Icônes des réseaux sociaux accessibles (`aria-label` sur les liens).
- Formulaires: labels associés (`for`), champs requis (`aria-required`), aides (`autocomplete`).

## 7) Fonctionnalités JavaScript (interactivité)
### 7.1 Accueil
- Barre de recherche: redirection vers le catalogue avec un paramètre URL.

### 7.2 Catalogue
- Filtres par **marque** et **catégorie**.
- Recherche (paramètre `?search=`).
- Modal “Voir plus” (détails véhicule).
- Bouton “Réserver” → transfert vers la page réservation via `localStorage`.

### 7.3 Réservation
- Pré‑sélection du véhicule depuis le catalogue.
- Calcul automatique:
  - **nombre de jours** (date récupération / date retour)
  - **total** (prix/jour × jours)
- Vérification de disponibilité et message visuel.
- Modales de confirmation/succès.
- Champs utilisateur: nom, prénom, **téléphones**, **email**, dates.

## 8) Captures d’écran (à déposer dans `captures/`)
> Fais les captures avec Windows: `Win + Shift + S`, puis sauvegarde dans le dossier `captures/`.

### A) Accueil
1. `captures/01-accueil-desktop.png` — page d’accueil (menu + hero + recherche)
2. `captures/02-accueil-mobile.png` — page d’accueil en mobile (responsive)

### B) Catalogue
3. `captures/03-catalogue-desktop.png` — catalogue (cartes visibles)
4. `captures/04-catalogue-filtres.png` — filtres marque/catégorie utilisés
5. `captures/05-catalogue-modal-details.png` — modal “Voir plus”

### C) Réservation
6. `captures/06-reservation-form.png` — formulaire complet (tel + email)
7. `captures/07-reservation-calcul.png` — dates + calcul jours + total
8. `captures/08-reservation-indispo.png` — véhicule indisponible (bouton bloqué)
9. `captures/09-reservation-confirmation.png` — modal de confirmation
10. `captures/10-reservation-succes.png` — modal de succès

### D) Agences & Contact
11. `captures/11-agences.png` — page agences
12. `captures/12-contact.png` — page contact (formulaire + coordonnées)

## 9) Explications (choix et justification)
- **Pourquoi Bootstrap**: accélère la mise en page et les composants (grille, modales).
- **Pourquoi CSS personnalisé**: identité visuelle (charte orange), cohérence UI, responsive spécifique.
- **Pourquoi JS**: rendre le site interactif (recherche, filtres, calculs réservation, modales).

---

## 10) Comment tester rapidement
1. Ouvrir `index.html`.
2. Rechercher un véhicule → vérifier redirection.
3. Dans le catalogue: appliquer filtres + ouvrir la modal.
4. Cliquer “Réserver” → vérifier pré‑sélection.
5. Choisir les dates → vérifier jours + total.
6. Tester disponibilité (véhicules loués) + modales.
