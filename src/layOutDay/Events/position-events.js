import React from 'react';
import PropTypes from 'prop-types';

import Alert from './alert'
import checkEventsPosition from '../Lib/position-events-lib';

export default function PositionEvents(Component) {
    return function (props) {
        const dayEvents = checkEventsPosition(props.dayEvents);
        const newProps = {...props, dayEvents};

        const displayAlert = dayEvents.hasOwnProperty('reject');
        const displayComponent = displayAlert 
            ? (<Alert message={dayEvents.message}/>)
            : (<Component {...newProps} />);

        return ( displayComponent );
    };
}

PositionEvents.propTypes = {
    Component: PropTypes.element
}
