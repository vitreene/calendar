import React from "react";
import PropTypes from 'prop-types';

import Event from './event';
import PositionEvents from './position-events';

function Events(props) {
    return (
        <section className="f-layout__conteneur__inner"> 
            {props.dayEvents.map( (ev, index) => (
                <Event event={ev} 
                key={ev.x + ev.y}/>
            ) )}
        </section>
    );
}

export default PositionEvents(Events);

Events.propTypes = {
    dayEvents: PropTypes.array
}