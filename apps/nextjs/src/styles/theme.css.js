import { createTheme } from "@vanilla-extract/css";
import { baseTheme } from "@test-css-order/ui/themes";

import { defaultTokens } from "./default-theme";

const [projectTheme, projectTokens] = createTheme(defaultTokens);

export const theme = `${baseTheme} ${projectTheme}`;

export const tokens = projectTokens;
