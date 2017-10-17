import React from 'react';

export default function Horaires(props) {
    const {debut = 9, fin = 21, intervalle = 30 } = props;
    const options = {
        hour: 'numeric', minute: 'numeric', 
        timeZone: 'Europe/London',
    };
    const horaires = [];

    for ( let i = debut; i < fin+1; i++ ){
        // ne pas ajouter la dernière demi-heure
        const inter = (i < fin) ? intervalle : 60;

        for(let j = 0; j < 60 ; j+= inter) {
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
            );
        }
    }
    
    return (
        <ul className= "f-layout__horaires">
            {horaires}
            </ul>
    );
}