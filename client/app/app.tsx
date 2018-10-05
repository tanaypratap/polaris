import React, { SFC } from "react";
import { Header } from "./components";

export const App: SFC<{}> = props => (
  <div>
    <Header />
    {props.children}
  </div>
);
