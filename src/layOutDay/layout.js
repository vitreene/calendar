import React from 'react';
import Horaires from './horaires'
export default function Layout(props) {

    return (
        <div className="f-layout">
            <aside className="f-layout__heures">
                horaires
                <Horaires/>
            </aside>
            <main className="f-layout__conteneur">
                {props.children}
            </main>

        </div>
    )
}