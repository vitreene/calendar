import {HORAIRE_MIN,HORAIRE_MAX, HAUTEUR_MIN, QTE_MIN, QTE_MAX} from '../Config'
import quelMessage from './quel-message-lib'

export default function validateEvents(events){
    const minMax = acceptEvents(events);
    if (minMax.reject) return minMax;
    return events.map( event => {

        const tot = event.start < HORAIRE_MIN;
        const tard = event.end > HORAIRE_MAX;
        const tresTard = event.start > HORAIRE_MAX;
        const tresTot = event.end < HORAIRE_MIN;
        const jour = tot && tard;

        const isStart = tot ? HORAIRE_MIN : event.start;
        const isEnd = tard ? HORAIRE_MAX : event.end;

        const start = tresTard ? HORAIRE_MAX - HAUTEUR_MIN : isStart;
        const court = tresTot || HAUTEUR_MIN > (isEnd - start);
        const end = court ? (start + HAUTEUR_MIN) : isEnd ;

        const alert =
            (jour && 'jour') ||
            (tresTard && 'très tard') ||
            (tresTot && 'très tôt') ||
            (tot && 'tôt') ||
            (tard && 'tard') ||
            (court && 'court' )||
             'bureau';
        console.log('alert', alert);
        
        const message = quelMessage(alert, event);
        return {
            start,
            end,
            alert,
            message
        }
    })
}


export function acceptEvents(events){
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