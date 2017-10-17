import React from "react";

import Event from './event';
import PositionEvents from '../Lib/position-events';

function Events(props) {
    return (
        <section className="f-layout__conteneur__inner"> 
            {props.dayEvents.map( ev => (
                <Event event={ev} 
                key={ev.start + ev.end}/>
            ) )}
        </section>
    );
}

export default PositionEvents(Events);
