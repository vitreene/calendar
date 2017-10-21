
/*

Pour chaque élément de rang n, tester z de n -1 vers 0 :
si collision :
 ajouter l’item au groupe, rang = rang oZ + 1;
flag collision : true.

Si pas de collision, creer un nouveau groupe avec oN, rang 0.

*/
export default function checkEventsPosition(dayEvents) {
    const rangs = checkEventsRang(events);
    console.log(rangs);
    const groupEvents = positionEvents(rangs, events);
return groupEvents;
}




export function positionEvents(groupes, events) {
    let curseur = 0;

    const evts = groupes.map(rangs => {
        const cleanRangs = rangs.filter(String);
        const cols = Math.max(...cleanRangs);
        // le rang le plus élévé donnera la largeur des éléments du groupe.
        // resoudre la proportion au niveau des css.
        // const l = cols + 1;
        const l = CONTENEUR_L / (cols + 1);
        const event = cleanRangs.map( (rang, index) => {
            // if(rang === undefined) return;
            const ev = events[curseur + index];
            // console.log('events', ev, curseur, index);
            const x = l * rang;
            const y = ev.start;
            const h = ev.end - y;
            return { ...ev, x, y, l, h}
        })
        curseur += rangs.length;
        return event;
    })
    // return [...evts];
    return evts.reduce( (p, c) => [...p, ...c], [] );
}


export function checkEventsRang(dayEvents) {

    // regrouper tous les events liés entre eux
    const groupEvents = [[]];
    let indexGroup = 0;
    let curseur = 0;

    // grouper les events et attribuer un rang
    dayEvents.map( (event, index, array) => {
        let rang = 0;
        let isCollision = false;

        // parcourir de l'élément vers le début du groupe;
        for (let i = index - 1; i >= curseur ; i--) {
            // test de collision sur les extrémités
            const collision = hasCollision(event, array[i]);
            if (collision) {
                isCollision = true;
                rang = Math.max(groupEvents[indexGroup][i] + 1, rang);
            } else {
                rang = groupEvents[indexGroup][i];
            }
            // console.log(event, array[i]);
            // console.log("rang", rang , index, collision);
            // console.log("indexGroup", indexGroup, ", i ", i );
        }

        if (!isCollision && index) {
            curseur += groupEvents[indexGroup].length;
            indexGroup++;
            groupEvents[indexGroup]= [];
        }
        // console.log('rang', rang, 'index', index, '-------');
        groupEvents[indexGroup][index] = rang;
    })
return groupEvents;
}

export function hasCollision(arr1, arr2) {
    // placer l'event le plus tôt en premier
    const [source, dest] = (arr1.start > arr2.start)
    ? [arr2, arr1]
    : [arr1, arr2];
    const {start, end} = source;
    return [start, end].reduce(
        (p, c) => (c >= dest.start && c <= dest.end),
        false )
}