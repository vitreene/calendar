import React from 'react';
import PropTypes from 'prop-types';
import {isOneOf}  from '../Lib/validate-events-lib'
import {SAMPLE}  from '../Config'

export default function Event({event}) {
    const tot = isOneOf(event.alert, ['tot', 'jour', 'très tot', 'très tard']);
    const tard = isOneOf(event.alert, ['tard', 'jour', 'très tot', 'très tard']);
    // const tard = (event.alert === 'tard') || (event.alert === 'jour');
    const position = {
        top: event.y,
        left: event.x,
        height: event.h,
        width: event.l,
        // signaler un event commencant hors plage horaire
        borderTop: (tot) ? 'grey 2px dashed' : null,
        borderBottom: (tard) ? 'grey 2px dashed' : null,
    };
    // prêt à recevoir de vraies infos
    const {item = SAMPLE.item, location = SAMPLE.location} = event;
    const title = `${event.message} \n ${item} | ${location}`;
    return(
        <article className="f-event-block"
        title={title}
        style={position}>
        <h3 className="f-event-block__item">{item}</h3>
        <p className="f-event-block__location">{location}</p>
         </article>
    );
}

Event.propTypes = {
    event: PropTypes.object
}
