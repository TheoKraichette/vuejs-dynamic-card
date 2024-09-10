# Test VueJs

Le but de ce test est d'intégrer la maquette présente à la racine (DESIGN DU TEST.png).

## Rendre le test

Le projet doit être renvoyé, au maximum, 1h après le téléchargement.
Créer un .zip (en supprimant le dossier "node_modules") et l'uploader sur https://www.grosfichiers.com/ à destination de james.hadjadj@k-tns.com.

## Init et démarrage du projet

```bash
npm install     # 1. Installer les dépendances du projet
quasar dev      # 2. Lancer le serveur de développement
```

## Instructions

Créer un composant "PrincingCard.vue" avec les props suivantes :

- title: string
- color: string
- usersmax: integer
- refmax: integer
- price: integer
- enterprise: boolean

Attention à mettre tous les détails du bloc "Entreprise" avec des comditions par rapport à la props "enterprise".

Les lignes de 7 à 10 présentes dans pages/PricingPage.vue sont commentées pour le bon démarrage du projet.
Elles devront être décommentées pour avoir le rendu final.

Pour implémenter le slider du nombre d'utilisateurs (si vous avez le temps) :

- utiliser le composant "Quasar Slider": https://quasar.dev/vue-components/slider
- le prix total (total = price \* users) présent dans le composant doit s'actualiser quand le slider des utilisateurs change.
