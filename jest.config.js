"use strict";

module.exports = {
  displayName: { color: "blue", name: "CLIENT" },
  errorOnDeprecated: true,
  moduleNameMapper: {
    "\\.(scss|png|jpg|css|svg)": "<rootDir>/__mocks__/mockFile.js",
  },
  resetModules: true,
  restoreMocks: true,
  rootDir: "src",
  // setupFilesAfterEnv: ["@testing-library/jest-dom"],
  setupFilesAfterEnv: ["<rootDir>/__mocks__/jest-setup.js"],
  verbose: true,
};
