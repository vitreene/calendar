import {HORAIRE_MIN,HORAIRE_MAX, HAUTEUR_MIN, QTE_MIN, QTE_MAX} from '../Config'
import quelMessage from './quel-message-lib'

export default function validateEvents(events) {
    const minMax = limitEvents(events);
    if (minMax.reject) return minMax;

    return events.map( event => {
        const status = fixEvent(event);
        const {start, end} = setStartEnd(status, event);
        const message = quelMessage(status[0], event);
        const {select} = selectEvent(status[0]);

        return {
            start,
            end,
            alert: status[0],
            message, 
            select
        }
    })
}

// pas d'event, ou trop ?
export function limitEvents(events){
    const low = events.length < QTE_MIN;
    const high = events.length > QTE_MAX;
    const reject = low || high;
    const alert = (low && 'low') || (high && 'high') || '';
    const message = quelMessage(alert);
    return {
        reject,
        message
    }
}

export function isOneOf(item, array) {
    return array.find(i => i === item)
}

// decrit l'event
export function fixEvent(event) {
    const desc = (a,b) => b.priority - a.priority;
    const rules = [       
        {
            id: 'bureau',
            test: event.start > HORAIRE_MIN && event.end < HORAIRE_MAX,
            priority: 1
        },          
        {
            id: 'tot',
            test: event.start < HORAIRE_MIN,
            priority: 10
        },          
        {
            id: 'tard',
            test: event.end > HORAIRE_MAX,
            priority: 11
        },
        {
            id: 'jour',
            test: event.start < HORAIRE_MIN && event.end > HORAIRE_MAX,
            priority: 100
        },
        {
            id: 'très tot',
            test: event.end < HORAIRE_MIN,
            priority: 50
        },
        {
            id: 'très tard',
            test: event.start > HORAIRE_MAX,
            priority: 51
        },
        
        {
            id: 'court',
            test: HAUTEUR_MIN > (event.end - event.start),
            // test: false,
            priority: 0
        },
    ];

    const status = rules
        .sort(desc)
        .map( rule => (rule.test) ? rule.id : null)
        .filter(Boolean);
        // [0] // plus haute priorité;
    return status;
}

// l event est-il hors limites ?
export function selectEvent(status) {
   return {
       select: (status ==='très tot' || status ==='très tard')
       ? 'rejected'
       : 'accepted'
     }
}

// révise les debut et fin d'event en fonction de son statut
export function setStartEnd(st, event) {
    const status = Array.isArray(st) ? st : [st];

    const isStart = {
        bureau: event.start,
        jour: HORAIRE_MIN,
        tot: HORAIRE_MIN,
        defaut: event.start
    }
    const start = isProp(status[0], isStart);

    const isEnd = {
        bureau: event.end,
        jour: HORAIRE_MAX,
        tard: HORAIRE_MAX,
        defaut: event.end,
        court: start + HAUTEUR_MIN
    }

    // un event garde une hauteur minimum pour etre visible.
    const end = (status[1] === 'court') 
        ? isEnd['court']
        : isProp(status[0], isEnd);

    return {start, end}
}

export function isProp(term, obj){
    return obj.hasOwnProperty(term) ? obj[term] : obj.defaut;
} 
