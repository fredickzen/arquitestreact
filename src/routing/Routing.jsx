import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RoutingAdmin from "./role/RoutingAdmin";
import RoutingUser from "./role/RoutingUser";

export default function Routing() {
  const usuario = 1;
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {usuario === 1 && <RoutingAdmin />}
        {usuario === 2 && <RoutingUser />}
      </Switch>
    </Router>
  );
}
