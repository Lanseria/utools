module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts"],
  moduleNameMapper: {
    "^@lanseria/utools(.*)$": "<rootDir>/src$1",
  },
};
