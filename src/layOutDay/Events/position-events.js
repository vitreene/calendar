import React from 'react';
import PropTypes from 'prop-types';

import checkEventsPosition from '../Lib/position-events-lib';

export default function PositionEvents(Component) {
    return function (props) {
        const dayEvents = checkEventsPosition(props.dayEvents)
        const newProps = {...props, dayEvents}
        return (
            <Component {...newProps} />
        );
    };
}

PositionEvents.propTypes = {
    Component: PropTypes.element
}
