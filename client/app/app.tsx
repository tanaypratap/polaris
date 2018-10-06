import React, { SFC } from "react";
import { StyledHeader } from "./components";
import styled from "./theme";

interface AppProps {
  className?: string;
}

const App: SFC<AppProps> = props => (
  <div>
    <StyledHeader />
    <div className={props.className}>{props.children}</div>
  </div>
);

export const StyledApp = styled(App)`
  padding-top: 66px;
  font-size: 1em;
  line-height: 1.4;
`;
