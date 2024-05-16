import { globalFontFace } from "@vanilla-extract/css";

export const fontName = "Yay";

globalFontFace(fontName, {
  fontDisplay: "swap",
  fontWeight: "400 700",
  src: 'local("/fonts/yay.ttf")',
});
