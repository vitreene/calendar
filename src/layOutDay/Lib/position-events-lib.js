// position-events-lib

export  function checkEventsPosition(dayEvents) {
    // si l'on n'est pas assuré de l'ordre des éléments
    const events = dayEvents.sort( (a,b) => a.start > b.start );

    const result = [{divide: false}];
    const res = events.map( (ev, index, arr) => {
        for (let i = index + 1; i < arr.length; i++) {
            // test de collision sur les extrémités
            const collision = hasCollision(ev, arr[i]);

            // reporter le résultat sur la cible
            result[i] = {divide: collision};
            // appliquer sur la source
            result[index].divide = collision ? collision : result[index].divide;
        }
        // faut-il décaler le composant ?
        // si l'element précedent est divisé et n'est pas décalé
        result[index].shifted = !!index &&
        result[index - 1].divide &&
        !result[index - 1].shifted;

        return {
            ...ev,
            ...result[index]
        }
    })   
    return res;
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
/*
export function hasCollision({start, end}, array) {
    return [start, end].reduce(
        (p, c) => (c >= array.start && c <= array.end),
        false )
}
*/