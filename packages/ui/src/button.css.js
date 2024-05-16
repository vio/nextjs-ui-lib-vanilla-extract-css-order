import { style } from "@vanilla-extract/css";

import { baseTokens } from "./themes";

export const root = style({
  border: "3px solid salmon",
  background: "lightsalmon",
  padding: baseTokens.space.medium,
});
