module.exports = {
  transform: {
    "^.+\\.ts$": "babel-jest"
  },
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/?(*.)(spec|test).ts"],
  testEnvironment: "node"
};
