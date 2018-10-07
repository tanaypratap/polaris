import React, { SFC } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, ErrorPage } from "./components";
import { App } from "./app";

export const AppRouter: SFC<{}> = () => (
  <Router>
    <div>
      <Route component={App} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
);
