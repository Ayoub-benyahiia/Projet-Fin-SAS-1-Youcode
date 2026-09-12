# 🚆 Railway Manager — Gestion d'un Train en Console

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript%20(Node.js)-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Environment-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/School-YouCode%20Maroc-blue?style=for-the-badge" alt="YouCode" />
  <img src="https://img.shields.io/badge/Project-SAS%201%20Final%20Project-orange?style=for-the-badge" alt="Project" />
</p>

---

## 📌 Description du Projet

**Railway Manager** est une application console développée en **JavaScript (Node.js)** dans le cadre du **Projet de Fin de SAS 1 à YouCode**. 

L'application permet de simuler la gestion complète d'une gare ferroviaire marocaine : consultation des horaires et des tarifs, réservation et achat de billets avec attribution automatique de sièges, annulation, recherche personnalisée, filtrage par ville de départ et tri des trajets par prix.

Toutes les données sont gérées en mémoire vive (structures de données en tableaux d'objets) conformément aux contraintes techniques du sujet.

---

## 📋 Table des Matières

1. [Menu Principal](#-menu-principal)
2. [Fonctionnalités & Spécifications](#-fonctionnalités--spécifications)
3. [Structure des Données](#-structure-des-données)
4. [Contraintes Techniques Respectées](#-contraintes-techniques-respectées)
5. [Installation & Exécution](#-installation--exécution)
6. [Guide d'Utilisation Détaillé](#-guide-dutilisation-détaillé)
7. [Fonctionnalités Bonus (Statistiques)](#-fonctionnalités-bonus-statistiques)
8. [Arborescence du Projet](#-arborescence-du-projet)
9. [Auteur](#-auteur)

---

## 🖥 Menu Principal

Au lancement du programme, un menu interactif en boucle est affiché dans le terminal :

```text
=================================
        RAILWAY MANAGER
=================================

1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter

Votre choix :
```

> 💡 *Le programme revient automatiquement au menu après chaque opération et ne s'arrête que lorsque l'utilisateur choisit l'option `0`.*

---

## ⚙️ Fonctionnalités & Spécifications

### 1. 🗺️ Afficher les trajets
- Affiche l'ensemble des trajets disponibles pré-enregistrés.
- Présentation claire avec identifiant, villes (départ $\rightarrow$ destination), horaires, tarifs en DH et nombre de places disponibles.

### 2. 🎟️ Acheter un ticket
- Saisie du **Nom du passager** et de l'**Identifiant du trajet**.
- **Contrôles effectués :**
  - Vérification de l'existence du trajet (message : `Trajet introuvable`).
  - Vérification de la disponibilité des places (message : `Train complet` si 0 place).
- **Actions réalisées :**
  - Génération d'un ticket avec un identifiant unique.
  - Attribution automatique du numéro de siège ($1 \rightarrow 50$).
  - Décrémentation du nombre de places disponibles sur le trajet.
  - Ajout du ticket dans la collection `tickets`.

### 3. 📋 Afficher les tickets
- Liste tous les billets achetés au cours de la session.
- Si aucun billet n'a été acheté, affichage d'un message indicatif (`Aucun ticket enregistré`).

### 4. ❌ Annuler un ticket
- Saisie de l'**Identifiant du ticket**.
- Vérification de l'existence du ticket (`Ticket introuvable` si inexistant).
- Suppression du ticket de la liste et **ré-incrémentation (+1)** des places disponibles pour le trajet correspondant.

### 5. 🔍 Rechercher un ticket
- Recherche rapide par **nom de passager**.
- Affiche tous les billets associés au nom recherché.

### 6. 🔎 Filtrer les trajets
- Filtrage du tableau `trips` par **ville de départ** (ex: *Safi*, *Casablanca*, *Marrakech*).
- Affichage des destinations directes et des prix correspondants.

### 7. 🏷️ Trier les trajets
- Tri de tous les trajets disponibles par **prix croissant**.
- Utilisation d'un algorithme de tri (Bubble Sort / Tri à bulles).

---

## 📊 Structure des Données

### 🚆 Structure d'un Trajet (`trips`)
```javascript
{
  id: 1,
  departure: "Safi",
  destination: "Youssoufia",
  departureTime: "07:30",
  arrivalTime: "08:30",
  price: 25,
  availableSeats: 50
}
```

### 🎫 Structure d'un Ticket (`tickets`)
```javascript
{
  idTicket: 1,
  userName: "ahmed",
  start: "Safi",
  End: "Marrakech",
  tripId: 2,
  seatNumber: 1,
  price: 90
}
```

---

## 💻 Contraintes Techniques Respectées

Conformément au cahier des charges YouCode :
- [x] Développé exclusivement en **JavaScript avec Node.js**.
- [x] Application 100% console / terminal (pas de DOM, HTML, CSS ni de base de données externe).
- [x] Gestion des entrées utilisateurs via [`prompt-sync`](https://www.npmjs.com/package/prompt-sync).
- [x] Utilisation rigoureuse des notions fondamentales :
  - Variables (`let`, `const`) et opérateurs.
  - Structures de contrôle : `if / else`, `switch`, boucles `for`, `do ... while`.
  - Fonctions modulaires et réutilisables.
  - Manipulation de tableaux d'objets (`push`, `splice`, `filter`, etc.).
  - Algorithmes de recherche, filtrage et tri.

---

## 🚀 Installation & Exécution

### 1. Prérequis
- Avoir [Node.js](https://nodejs.org/) installé sur votre machine.

### 2. Cloner le projet
```bash
git clone https://github.com/Ayoub-benyahiia/Projet-Fin-SAS-1-Youcode.git
cd Projet-Fin-SAS-1-Youcode
```

### 3. Installer les dépendances
```bash
npm install prompt-sync
```

### 4. Lancer l'application
```bash
node railway-manager.js
```

---

## 📖 Guide d'Utilisation Détaillé

### Exemple 1 : Consultation des trajets
```text
votre choix: 1

1 Safi --->  Youssoufia
 Départ : 07:30
 Arrivée : 08:30
 Prix : 25DH
 Places disponibles : 50
_____________________________________________
2 Safi --->  Marrakech
 Départ : 08:00
 Arrivée : 10:30
 Prix : 90DH
 Places disponibles : 50
```

### Exemple 2 : Achat d'un billet
```text
votre choix: 2
entrer uour Identifiant du trajet : 2
entrer your name : Ahmed

 Ticket acheté avec succès !
Ticket #1 : Passager Ahmed | Safi ---> Marrakech | Place 1 | 90 DH
```

### Exemple 3 : Filtrage par ville de départ
```text
votre choix: 6
entre your ville de depart to filtre trajet : Safi

 depart : Safi ----> Youssoufia : 25 DH
 depart : Safi ----> Marrakech : 90 DH
 depart : Safi ----> Casablanca : 140 DH
```

---

## 🎁 Fonctionnalités Bonus (Statistiques)

Des statistiques analytiques peuvent être générées à partir des réservations en mémoire :
- **Nombre total de tickets vendus :** Compteur global des réservations actives.
- **Chiffre d'affaires total :** Somme cumulée du prix de l'ensemble des billets achetés (en DH).
- **Trajet le plus populaire :** Identification du trajet ayant enregistré le plus grand volume de réservations.

---

## 📂 Arborescence du Projet

```text
📁 Projet-Fin-SAS-1-Youcode/
│
├── 📄 railway-manager.js     # Script principal (logique applicative & menu CLI)
├── 📄 package.json           # Dépendances du projet (prompt-sync)
├── 📄 .gitignore             # Exclusion de node_modules
└── 📄 README.md              # Documentation complète du projet
```

---

## 👤 Auteur

- **Ayoub Benyahia**
- Formation : **YouCode Maroc (SAS 1)**
- GitHub : [@Ayoub-benyahiia](https://github.com/Ayoub-benyahiia)

---

*Projet réalisé dans le cadre de l'évaluation finale du SAS 1 — YouCode.*
