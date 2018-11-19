module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "<rootDir>/generated/",
    "<rootDir>/node_modules/"
  ],
  collectCoverageFrom: [
    "src/**/*.{ts}",
    "!**/node_modules/**",
    "!**/generated/**"
  ]
};
