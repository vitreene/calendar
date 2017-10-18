import React from "react";
import PropTypes from 'prop-types';

import Layout from './Layout/layout';
import Events from './Events';


export default function LayOutDay(props) {
    return(
        <Layout>
        <Events dayEvents = {props.dayEvents} />
        </Layout>
    )
}

LayOutDay.propTypes = {
    dayEvents: PropTypes.array.isRequired
}