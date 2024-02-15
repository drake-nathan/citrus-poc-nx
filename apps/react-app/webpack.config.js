const path = require("path");
const { NxWebpackPlugin } = require("@nx/webpack");
const { NxReactWebpackPlugin } = require("@nx/react");

module.exports = {
  devServer: {
    port: 4200,
  },
  output: {
    path: path.join(__dirname, "../../dist/apps/citrus-poc-nx"),
  },
  plugins: [
    new NxWebpackPlugin({
      assets: ["./src/favicon.ico", "./src/assets"],
      baseHref: "/",
      compiler: "babel",
      index: "./src/index.html",
      main: "./src/main.tsx",
      optimization: process.env.NODE_ENV === "production",
      outputHashing: process.env.NODE_ENV === "production" ? "all" : "none",
      styles: ["./src/styles.css"],
      tsConfig: "./tsconfig.app.json",
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
