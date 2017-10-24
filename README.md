# Notes
# V. 0.2
La première version ne prenait en compte que l’ensemble de test proposé. Cette version mise à jour accepte un ensemble plus vaste de cas.


## La réponse
Chaque event est comparé aux précédents, à la recherche d’une collision. Chaque collision trouvée est répertoriée dans un tableau comme position occupée. 
A l’issue de la recherche, l’event va occuper la première position disponible.

Si aucune collision n’est trouvée, on peut être sûr que les events suivants n’entreront pas non plus en collision avec les précédents, puisque les events sont présentés dans leur ordre d’apparition.
On peut alors les regrouper et calculer le nombre de rangs occupés. Ce nombre donnera la largeur en pourcentage des  events du groupe.

On peut enfin calculer les positions de chaque event et les afficher.
La complexité de l’algo est factorielle n.


## Contraintes et validation 
Il est assumé que les données reçues sont déjà triées selon leur ordre d’apparition, et que la valeur *start* est toujours inférieure à la valeur *end*.

Les events ont une **taille minimum** de 15 x 25px pour être bien visibles&nbsp;; cela autorise un maximum théorique de 1152 events. Une limite supplémentaire de 24 events en collision au maximum affiche un message d’alerte au delà de ces seuils. 

Un message signale aussi l’absence d’events.
Ces seuils ne correspondent à pas à une usage standard d’un tel composant ; il est probable qu’une limite inférieure soit choisie.

Les réunions courtes (moins d’un quart d’heure) sont affichées à la taille minimum.
A cette taille, le contenu n’est pas lisible. un survol à la souris révèle le contenu *(au risque d’une superposition, j’en conviens.)*
L’attribut title qui apparait au survol contient l’heure de début et de fin de l’event.

Les events qui commencent ou se terminent en dehors des heures limites s’affichent au bord. Un tiret pointillé prévient de l’affichage partiel. le title donne les horaires réels.

Enfin, les events totalement en dehors des horaires sont signalés par une petite puce au-dessus, ou au dessous de la zone d’affichage.




# V. 0.1
## Sur l’algo de position
Je présume que les données en entrée sont correctement formées. 

Pour cet exercice, je n’ai pas placé de tests pour détecter si: 
- les données sont présentes, 
- il n’y a pas plus de deux événements simultanés, 
- les données sont hors limites,
- les événements sont triés par ordre d’apparition. (j’ai ajouté ce test)

L’algo tel qu’il est conçu génère factorielle(events). 

En examinant les possibilités, il m’a semblé que pour tenir compte de ces tests, il faudrait envisager un algo plus complexe, gérant n événements simultanés.

Je le représente selon un système de rangs : chaque élément est comparé à ses prédécesseurs :
- s’il entre en collision, il prend le rang n + 1,
- s’il n’est pas en collision, il prend le rang n

Cet algo générerait plus de traitements, ce qui n’est pas voulu.


## Typo
J’ai identifié la police de caractères employée dans l’image comme *Lucida Grande*. Elle est disponible par défaut sur Mac mais pas sur les autres plateformes. Je préconiserai éventuellement l’emploi de Trebuchet ou Tahoma, ou bien encore une fonte Google.


## Horaires
Comme cet exercice est sans limite de temps, j’ai exploré l’idée d’utiliser un format de date pour générer les heures, plutôt que de générer directement des chaines de caractères. 
Cela autorise l’évolution de cet affichage selon la localisation, si l’on devait ajouter cette variable. 
Le composant accepte la plage horaire et l’intervalle en entrée, avec les valeurs par défaut telles que demandées.


## Evénements
Comme pour les horaires, les données item et location prennent des valeurs par défaut, le composant est prêt pour accepter les valeurs réelles.

## CSS
Dans le cadre de cet exercice, je suis resté sur la solution la plus simple d’un fichier unique. Les styles ont un namespace pour éviter une éventuelle collision de contexte.
Une approche *css-in-js* serait sans doute mieux appropriée pour le composant d’une webapp.