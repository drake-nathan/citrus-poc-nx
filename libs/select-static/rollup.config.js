const ts = require("rollup-plugin-ts");
const styles = require("rollup-plugin-styles");

module.exports = (config) => {
  /** @type {import('rollup').RollupOptions} */
  const returnConfig = {
    input: config.input,
    output: {
      ...config.output,
      sourcemap: true,
    },
    plugins: [
      ts({ tsconfig: "libs/select-static/tsconfig.lib.json" }),
      styles(),
    ],
  };

  return returnConfig;
};
