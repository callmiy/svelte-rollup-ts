/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.(ts|svelte|js)",
    "!src/main.ts",
    "!src/__tests__/**",
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "svelte", "ts"],
  testEnvironment: "jest-environment-jsdom-sixteen",
  testRegex: "src/__tests__/.+?\\.test\\.[tj]s$",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
  },
  watchPathIgnorePatterns: [
    "<rootDir>/node_modules*",
    "<rootDir>/package.json",
    "<rootDir>/public/",
    "<rootDir>/jest\\.config\\.js",
    "<rootDir>/svelte\\.config\\.js",
    "<rootDir>/coverage/",
    "<rootDir>/tsconfig\\.json/",
  ],
};
