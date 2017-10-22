import validate from './validate-events-lib'
import quelMessage from './quel-message-lib'
import {CONTENEUR_L, QTE__COL_MAX} from '../Config'

export default function checkEventsPosition(dayEvents) {
    const cleanEvents = validate(dayEvents);
    if (cleanEvents.hasOwnProperty('reject')) return cleanEvents;
    
    const rangs = checkEventsRang(cleanEvents);
    const groupEvents = positionEvents(rangs, cleanEvents);
    return groupEvents;
}

function positionEvents(groupes, events) {
    let curseur = 0;
    let qteError= false;

    const evts = groupes.map(rangs => {
        // retirer les positions vides, 
        const cleanRangs = rangs.filter(String);
        // le rang le plus élevé donnera le nombre de colonnes
        const cols = Math.max(...cleanRangs);
        if (cols >= QTE__COL_MAX) qteError = true;
        
        // calculer les dimensions des events.
        const l = CONTENEUR_L / (cols + 1);
        const event = cleanRangs.map( (rang, index) => {
            const ev = events[curseur + index];
            const x = l * rang;
            const y = ev.start;
            const h = ev.end - y;
            return { ...ev, x, y, l, h}
        })
        curseur = rangs.length;
        return event;
    })
    if (qteError) return {
        reject: true,
        message: quelMessage('too much cols')
    };

    return evts.reduce( (p, c) => [...p, ...c], [] );
}


export 
function checkEventsRang(dayEvents) {
    if (!dayEvents.length) return false;
    // regrouper tous les events liés entre eux
    // si un évenement n'est relié à aucun autre avant lui, créer un nouveau groupe
    const groupEvents = [ [] ];
    let currentGroup = 0;
    // limiter les recherches de collision au groupe courant
    let curseur = 0;

    // grouper les events et leur attribuer un rang
    // eslint-disable-next-line
    dayEvents.map( (event, index, array) => {
        // identifier les positions occupées
        let occupe = [];
        let noCollision = true;
        // parcourir de l'élément vers le début du groupe;
        for (let i = curseur; i < index ; i++) {
            // test de collision
            if ( hasCollision(array[i], event) ) {
                noCollision = false;
                occupe[ groupEvents[currentGroup][i] ] = false;
            } else {
                //ajouter le rang disponible
                occupe[ groupEvents[currentGroup][i] ] = true;
            }
        }
        if (noCollision && index) {
            curseur = groupEvents[currentGroup].length;
            currentGroup++;
            groupEvents[currentGroup] = [];
            occupe = [];
        }
        groupEvents[currentGroup][index] = quelRang(occupe);
    })
    return groupEvents;
}

// si un event débute avant la fin d'un autre
export function hasCollision(arr1, arr2) {
    // const h = ((arr1.end - arr2.start) > HAUTEUR_MIN) ? 0 : HAUTEUR_MIN;
    // return arr2.start < (arr1.end + h);
    return arr2.start < (arr1.end );
}

// renvoie l'index de la première valeur true rencontrée
export function quelRang(array) {
    const res = array.findIndex( x => x );
    return (res < 0) ? array.length : res;
}

