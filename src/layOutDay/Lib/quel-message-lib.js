import {HEURE_MIN} from '../Config'

export default function quelMessage(alert, event) {
    switch (alert) {

        case 'too much cols':
            return `Too much events at the same time !`;

        case 'low':
            return `No event today. Cool !`;
        case 'high':
            return `Too much events today to display. You work too much.`;
            
        case 'très tôt':
            return `office is closed now ! \n (${heure(event.start)} to ${heure(event.end)})`;
        
        case 'très tard':
            return `office is closed now ! \n (${heure(event.start)} to ${heure(event.end)})`;

        case 'tôt':
            return `this event starts at ${heure(event.start)}` ;
            
        case 'tard':
            return `this event ends at ${heure(event.end)}`;

        case 'jour':
        return `this event lasts the day \n from ${heure(event.start)} to ${heure(event.end)} `;
        
        case 'bureau':
        return `this event is scheduled \n from ${heure(event.start)} to ${heure(event.end)}`; 

        default:
        return 'nothing';
    }
}


export function heure(temps) {
    const t = HEURE_MIN * 60 + temps;
    const m = t % 60;
    const h = Math.floor(t / 60);
    return ( twoDigits(h) + ':' + twoDigits(m) )
}

function twoDigits(val) {
    return ('0' + val).slice(-2);
}