import { createTheme } from "@vanilla-extract/css";
import { baseTheme, baseTokens } from "@test-css-order/ui/themes";

const [projectTheme, projectTokens] = createTheme({
  space: baseTokens.space,
});

export const theme = `${baseTheme} ${projectTheme}`;

export const tokens = projectTokens;
