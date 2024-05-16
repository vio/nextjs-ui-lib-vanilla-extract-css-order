import { style } from "@vanilla-extract/css";

import { tokens } from "../theme.css";

export const root = style({
  border: "3px solid lime",
  padding: tokens.space.large,
  background: "lightseagreen",
});
