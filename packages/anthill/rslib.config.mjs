import { defineConfig } from "@rslib/core";
import { pluginReact } from "@rsbuild/plugin-react";

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
      index: "./src/**",
    },
  },
  plugins: [pluginReact()],
});
