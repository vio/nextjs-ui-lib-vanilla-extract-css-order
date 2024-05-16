import { defineConfig } from "rollup";
import preserveDirectives from "rollup-plugin-preserve-directives";
import resolvePlugin from "@rollup/plugin-node-resolve";
import swcPlugin from "@rollup/plugin-swc";

const input = {
  index: "src/index.js",
  themes: "src/themes/index.js"
};

export default defineConfig([
  {
    input,
    output: {
      dir: "build",
      format: "es",
      preserveModules: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: [
      "@vanilla-extract/css",
      "@vanilla-extract/dynamic",
      "@vanilla-extract/recipes",
      "@vanilla-extract/sprinkles",
      "classnames",
      "react",
      "react-dom",
    ],
    plugins: [
      resolvePlugin({ extensions: ['.js', '.jsx'] }),
      swcPlugin({
        swc: {
          jsc: {
            parser: {
              syntax: "ecmascript",
              jsx: true,
            },
          },
        },
      }),
      preserveDirectives(),
    ],
  },
]);
