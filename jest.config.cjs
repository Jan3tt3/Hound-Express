/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  roots: ["<rootDir>/src/tests"],

  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],

  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/src/tests/fileMock.ts",
  },

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  testMatch: ["**/*.test.ts", "**/*.test.tsx"],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
