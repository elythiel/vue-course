# Application réelle

## 1. Accueil
### Afficher la liste des cartes
- v-for pour l'affichage des cartes
- @click - permettant l'affichage d'un autre composant
  - Aperçu de la carte en gros

## 2. Système permettant d'ajouter une carte
### 2.a. Ajout de vue-router au projet

### 2.b. Page de création de carte
Formulaire de création :
- inputs v-model
- @submit sur le formulaire
- Modifier les datas du store à l'enregistrement
- Changement de page procédural

> N.B. : Voir comment gérer les images

## Système de filtres

- onMounted -> fetch des datas
- store pinia
    - enregistrer les datas fetch dans le store

- computed
- Enregistrement des filtres dans le store

### 2.c. Réinitialisation des filtres
- Ajout d'un watcher dans les filtres
  - Déclenché quand le nombre de cartes du store change
- Réinitialise les filtres : `store.$reset()`