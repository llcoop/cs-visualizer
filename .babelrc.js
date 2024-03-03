"use strict";

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      // Enable async code
      "@babel/plugin-transform-runtime",
      {
        useESModules: true,
        regenerator: true,
      },
    ],
  ],
  env: {
    development: {
      compact: false,
    },
    test: {
      presets: [["@babel/preset-env", { targets: "current node" }]],
    },
  },
};
