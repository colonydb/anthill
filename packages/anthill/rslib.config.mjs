import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: true,
      format: "esm",
      syntax: "es2022",
    },
  ],
  output: {
    emitCss: true,
  },
  source: {
    entry: {
      index: "./src/**/*.{css,ts,tsx}",
    },
  },
  plugins: [pluginReact()],
  tools: {
    lightningcssLoader: {
      targets: ["last 2 Chrome versions"],
    },
  },
});
