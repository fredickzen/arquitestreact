import React from 'react';
import { Route } from 'react-router-dom';
import MasterPrivate from '../../components/layout/MasterPrivate/MasterPrivate';
import Users from '../../components/page/Users/Users';
import RoutingGlobal from './RoutingGlobal';

const RoutingAdmin = () => {
    return (
        <MasterPrivate>
            <RoutingGlobal/>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>

          </MasterPrivate>
    );
}

export default RoutingAdmin;


function About() {
    return <h2>About</h2>;
  }
