const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    filename: "config.js",
    path: __dirname,
  },
  entry: path.resolve(__dirname, "config/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      __NEXT_TRAILING_SLASH: 0,
      __NEXT_I18N_SUPPORT: 0,
      __NEXT_ROUTER_BASEPATH: "",
      __NEXT_SCROLL_RESTORATION: 0,
    }),
  ],
  optimization: {
    minimize: false,
  },
};
