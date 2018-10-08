import React, { SFC } from "react";
import { Header } from "./components";

interface AppProps {
  className?: string;
  children: JSX.Element[];
}

const appStyling = {
  paddingTop: "66px",
  fontSize: "1em",
  lineHeight: "1.4"
};

export const App: SFC<AppProps> = (props: AppProps) => (
  <div>
    <Header />
    <div style={appStyling}>{props.children}</div>
  </div>
);
