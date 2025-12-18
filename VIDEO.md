# Vidéo Drive — démonstration des fonctionnalités (script + plan)

## Objectif
Enregistrer une courte vidéo (3 à 6 minutes) qui montre **toutes les fonctionnalités** du site.

## Outils recommandés
- **OBS Studio** (recommandé) ou **Xbox Game Bar** (Windows: `Win + G`).
- Navigateur: Chrome/Edge.

## Réglages conseillés
- Résolution: **1920×1080** (ou 1280×720 si PC lent)
- FPS: **30**
- Audio: micro activé (optionnel mais mieux)

## Plan de la vidéo (timing indicatif)
### 0:00 – 0:20 Introduction
- Présenter le projet: “Site de location de voitures LOCA‑MOVE/Loca Mode.”
- Dire les technos: HTML/CSS/JS + Bootstrap + Google Fonts + FontAwesome.

### 0:20 – 1:05 Accueil (`index.html`)
- Montrer le menu + hero.
- Tester la **barre de recherche**: taper un nom de voiture puis rechercher.
- Expliquer: redirection vers le catalogue avec paramètre URL.

### 1:05 – 2:30 Catalogue (`catalogue.html`)
- Montrer les cartes.
- Tester les **filtres** (marque puis catégorie).
- Ouvrir “Voir plus” → montrer la **modal** (détails).
- Cliquer “Réserver” → expliquer que le véhicule est envoyé à la page réservation via `localStorage`.

### 2:30 – 4:30 Réservation (`reservation.html`)
- Montrer que le véhicule est **pré‑sélectionné**.
- Remplir: nom, prénom, **téléphone 1**, téléphone 2 (optionnel), **email**.
- Choisir dates récupération/retour:
  - montrer calcul automatique **jours** + **total**.
- Tester un véhicule **indisponible**: expliquer message + bouton confirmer désactivé.
- Cliquer “Confirmer” → modal de confirmation → “Oui, confirmer” → modal succès.

### 4:30 – 5:20 Agences (`agence.html`)
- Montrer les agences et informations.

### 5:20 – 6:00 Contact (`contact.html`)
- Montrer formulaire et coordonnées.

### 6:00 Conclusion
- Rappeler: responsive + charte graphique + interactivité JS.

## Responsive (obligatoire à montrer)
Pendant la vidéo, fais **au moins 1 démonstration responsive**:
- Ouvrir les DevTools (`F12`) → mode mobile.
- Montrer le menu et la barre de recherche en petit écran.

## Export et dépôt sur Drive
1. Exporter en **MP4**.
2. Renommer le fichier: `Demo-LOCA-MOVE.mp4`.
3. Mettre sur Google Drive (Mon Drive).
4. Clic droit → Partager → “Toute personne disposant du lien (lecture)”.
5. Copier le lien et le déposer sur la plateforme.

## Checklist finale
- [ ] La vidéo montre accueil, catalogue, réservation, agences, contact
- [ ] Filtres + modal détails montrés
- [ ] Pré‑sélection véhicule + calcul jours + total montrés
- [ ] Modales (confirmation/succès) montrées
- [ ] Responsive démontré (mode mobile)
- [ ] Lien Drive partagé en lecture
