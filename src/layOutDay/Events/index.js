import React from "react";
import PropTypes from 'prop-types';

import Event from './event';
import EventOut from './event-out';
import PositionEvents from './position-events';

function Events(props) {
    const events = props.dayEvents.map( (ev, index) => (
        (ev.select === 'accepted') 
        ? ( <Event event={ev} key={ev.x + ev.y}/> )
        : ( <EventOut event={ev} key={ev.x + ev.y} /> )
     ) )

    return (
        <section className="f-layout__conteneur__inner"> 
            {events}
        </section>
    );
}

export default PositionEvents(Events);

Events.propTypes = {
    dayEvents: PropTypes.array
}