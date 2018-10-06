import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppRouter } from "./router";
import { injectGlobal, ThemeProvider, theme } from "./theme";

injectGlobal`
  * { margin: 0; padding: 0; font-family: 'Roboto', sans-serif;}
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppRouter />
  </ThemeProvider>,
  document.getElementById("root")
);
