const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import("jest").Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "node",
  preset: "ts-jest",
  verbose: true,
};

module.exports = createJestConfig(config);
