import React, { SFC } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About } from "./components";
import { StyledApp } from "./app";

export const AppRouter: SFC<{}> = () => (
  <Router>
    <div>
      <Route component={StyledApp} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);
