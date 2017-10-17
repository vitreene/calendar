import React from 'react';

export default function Horaires(props) {

    const interval = {
        debut: 9,
        fin: 21,
        inter: 30
    }
    const options = {
        hour: 'numeric', minute: 'numeric', 
        timeZone: 'Europe/London',
    };
    const horaires = [];

    for ( let i = interval.debut; i < interval.fin+1; i++ ){

        // ne pas ajouter la dernière demi-heure
        const inter = (i < interval.fin) ? interval.inter : 60;

        for( let j = 0; j < 60 ; j+= inter) {
            const date = new Date(Date.UTC(2000, 0, 1, i, j, 0));
            const hour = new Intl.DateTimeFormat('en-US', options).format(date);
            const halfHour = (j) ? 'f-heures-detail-half' : 'f-heures-detail';
            const [heure, midi] = hour.split(' ');
            horaires.push(
            <li 
            className={halfHour}
            key={hour}>
                {heure} 
                <span>{midi}</span>
            </li>
        )
        }
    }
    // console.log('horaires', horaires);
    
    return (
        <ul className= "f-layout__horaires">
            {horaires}
            </ul>
    )
}