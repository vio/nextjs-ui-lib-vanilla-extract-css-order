import { createTheme } from "@vanilla-extract/css";

export const [baseTheme, baseTokens] = createTheme({
  space: {
    small: "16px",
    medium: "24px",
    large: "32px",
  },
});
