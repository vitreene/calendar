# Notes

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