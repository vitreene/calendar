import React from 'react';
import PropTypes from 'prop-types';
import {isOneOf}  from '../Lib/validate-events-lib'
import {SAMPLE, HORAIRE_MIN, HORAIRE_MAX, HAUTEUR_MIN,  LARGEUR_MIN}  from '../Config'

export default function EventOut({event}) {
    const top = isOneOf(event.alert, ['très tot']) ? HORAIRE_MIN - (HAUTEUR_MIN + 5) : HORAIRE_MAX + 5;

    const position = {
        // top: event.y,
        top,
        left: event.x,
        height: HAUTEUR_MIN,
        width: LARGEUR_MIN,
    };
    // prêt à recevoir de vraies infos
    const {item = SAMPLE.item, location = SAMPLE.location} = event;
    const title = `${event.message} \n ${item} | ${location}`;
    return(
        <article className="f-event-block-out"
        title={title}
        style={position}>
         </article>
    );
}

Event.propTypes = {
    event: PropTypes.object
}
