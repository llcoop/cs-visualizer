"use strict";

module.exports = {
  displayName: { color: "blue", name: "CLIENT" },
  errorOnDeprecated: true,
  setupFiles: ["<rootDir>/__mocks__/setup.js"],
  moduleNameMapper: {
    "\\.(scss|png|jpg|css|svg)": "<rootDir>/__mocks__/mockFile.js",
  },
  resetModules: true,
  restoreMocks: true,
  rootDir: "src",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  verbose: true,
};
