"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier", "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
