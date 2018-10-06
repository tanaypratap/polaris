import React, { SFC } from "react";
import { StyledHeader } from "./components";

export const App: SFC<{}> = props => (
  <div className="site-container">
    <StyledHeader />
    {props.children}
  </div>
);
