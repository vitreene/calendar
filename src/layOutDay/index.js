import React from "react";
import Layout from './Layout/layout';
import Events from './Events';


export default function LayOutDay(props) {
    return(
        <Layout>
        <Events dayEvents = {props.dayEvents} />
        </Layout>
    )
}