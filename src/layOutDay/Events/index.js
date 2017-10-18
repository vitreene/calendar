import React from "react";
import PropTypes from 'prop-types';

import Event from './event';
import PositionEvents from '../Lib/position-events';

function Events(props) {
    return (
        <section className="f-layout__conteneur__inner"> 
            {props.dayEvents.map( (ev, index) => (
                <Event event={ev} 
                key={ev.start + ev.end + index}/>
            ) )}
        </section>
    );
}

export default PositionEvents(Events);

Events.propTypes = {
    dayEvents: PropTypes.array
}