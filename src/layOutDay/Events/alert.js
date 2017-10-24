import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
    return (
        <section className="f-layout__conteneur__alert"> 
            <h3 className="f-conteneur__alert">{props.message}</h3>
            </section>
    )
}

Alert.propTypes = {
    message: PropTypes.string
}