import React from 'react';

export default function PositionEvents(Component) {
    return function (props) {
        const dayEvents = checkEventsPosition(props.dayEvents)
        const newProps = {...props, dayEvents}
        return (
            <Component {...newProps} />
        );
    };
}

export function checkEventsPosition(dayEvents) {
    const result = [];
    
    function evList( de, index = 0 ) {
        if (!de.length) return;
        const current = de[0];
        const reste = de.slice(1);
        
        // faut-il décaler le composant ?
        const shifted = !!index &&
        result[index-1].divide &&
        !result[index-1].shifted;
        
        // si juxtaposition, diviser la largeur
        const divide = (reste.length)
        ? hasCollision(current, reste)
        : result[index-1].divide;
        
        result[index] = {
            ...current,
            divide,
            shifted,
        };
        // récursion sur le restant
        evList( reste, ++index );
    }
    
    evList(dayEvents);
    return result; 
}

// recherche une intersection entre l'obet courant et les suivants
export function hasCollision({start, end}, array) {
    return [start, end].reduce(
        (p,c) => array.reduce(
            (pp, cc) => pp || (c > cc.start && c < cc.end),
            false ),
        false);
}