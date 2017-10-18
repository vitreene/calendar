import React from 'react';
import PropTypes from 'prop-types';

// intervalle : 720px / 24 = 30px 

const sample = {
    item: 'Sample Item',
    location: 'Sample location'
};

export default function Event({event}) {
    const position = {
        top: event.start,
        left: event.shifted ? '50%' : 0,
        height: event.end - event.start,
        width: event.divide ? '50%' :'100%'
    };
    // prêt à recevoir de vraies infos
    const {item = sample.item, location = sample.location} = event;

    return(
        <article className="f-event-block"
        style={position}>
        <h3 className="f-event-block__item">{item}</h3>
        <p className="f-event-block__location">{location}</p>
         </article>
    );
}

Event.propTypes = {
    event: PropTypes.object
}
