import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/page/home/Home';

const RoutingGlobal = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
        </>
    );
}

export default RoutingGlobal;
