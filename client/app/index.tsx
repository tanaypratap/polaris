import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppRouter } from "./router";

/*injectGlobal`
  * { margin: 0; padding: 0; font-family: 'Roboto', sans-serif;}
`;
*/

ReactDOM.render(<AppRouter />, document.getElementById("root"));
