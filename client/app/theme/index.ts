import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export const theme: ThemeInterface = {
  primaryColor: "#24292e"
};

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
