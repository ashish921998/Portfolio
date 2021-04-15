import React from "react";
import { Route, Switch } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
