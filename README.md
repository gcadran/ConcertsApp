# ConcertsApp

Application mobile développée avec **React Native** et **Expo** permettant de consulter et de rechercher des concerts à partir d'une liste de données.

## Présentation

ConcertsApp propose une interface simple pour parcourir un catalogue de concerts, retrouver les informations sur les artistes et filtrer les résultats selon le nom du groupe.

L'application s'articule autour de plusieurs écrans, depuis l'accueil jusqu'à la consultation des concerts.

## Fonctionnalités

- **Navigation entre les écrans** : passage de l'accueil au formulaire, puis à la liste des concerts.
- **Formulaire utilisateur** : saisie du nom, du prénom, de l'âge et du lieu de naissance.
- **Liste de concerts** : affichage des concerts à partir de données JSON avec une `FlatList`.
- **Recherche dynamique** : filtrage des concerts selon le nom du groupe.
- **Message de bienvenue personnalisé** : affichage du prénom et du nom de l'utilisateur.

## Technologies

- React Native
- Expo
- TypeScript / JavaScript
- JSON
- Expo Router

## Installation

### Prérequis

- Node.js et npm
- Expo Go ou un émulateur compatible, selon la configuration utilisée

### Cloner le dépôt

```bash
git clone <URL_DU_DEPOT>
cd ConcertsApp
```

### Installer les dépendances

```bash
npm install
```

### Démarrer l'application

```bash
npx expo start
```

Suivez les instructions affichées dans le terminal pour lancer l'application sur un appareil ou un émulateur compatible.

## Structure du projet

Le projet est organisé autour de plusieurs écrans et d'un fichier JSON contenant les données des concerts :

- **Accueil** : point d'entrée de l'application.
- **Formulaire utilisateur** : saisie des informations personnelles.
- **Liste des concerts** : affichage et recherche des concerts.
- **Données JSON** : source locale des informations affichées.

## Données

Les concerts sont chargés depuis un fichier JSON local. Cette organisation sépare les données de l'interface et facilite leur modification.

## Améliorations possibles

- Ajouter des filtres par date, genre musical ou artiste.
- Afficher le détail d'un concert.
- Ajouter une liste de favoris.
- Persister localement les informations de l'utilisateur et les concerts.
- Améliorer l'interface et l'expérience de navigation.

## Licence

Projet de développement mobile.
