# Architecture du projet

Ce fichier décrit les dossiers, fichiers et l'architecture du projet en général.

## Racine du projet

- e2e/src : ce dossier contient les tests d'intégration généré automatiquement par Angular CLI lors de la création du projet
- src : ce dossier contient tout le code du projet
- .gitignore : contient les fichiers à exclure lors des commits
- angular.json : fichier de configuration du client angular
- package.json & package-lock.json : contiennent les dépendances du projet
- tsconfig.json : contient la configuration du Typescript
- tslint.json : contient les règles de "surlignage"du Typescript

## Dossier src

- app : dossier contenant les différents composants, services et modules utilisés
- assets : dossier inutilisé dans ce projet, sert habituellement à stocker les ressources
- environments : dossier contenant les environnements disponibles pour le lancement de l'application
- index.html : permet de définir des éléments clés de l'application, dont le titre, l'emplacement de la favicon ou encore le thème Angular Material à utiliser

## Dossier app

Contient de nombreux dossiers, un pour chaque composant.

- app-routing.module.ts est le module définissant les routes utilisables par l'utilisateur et pour chacune le composant qui sera instancié.
- app.module.ts est le fichier qui définit les composants et modules qui seront utilisables partout dans l'application.

### Dossier pokemon

- api.service.ts est le service permettant de communiquer avec l'api REST. Il est utilisé par les composants quand ceux-ci ont besoin ou de recevoir des données.
