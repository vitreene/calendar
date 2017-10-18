import React from 'react';
import PropTypes from 'prop-types';

import Horaires from './horaires';

export default function Layout(props) {
    return (
        <div className="f-layout">
            <aside className="f-layout__heures">
                <Horaires/>
            </aside>
            <main className="f-layout__conteneur">
                {props.children}
            </main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.element
}