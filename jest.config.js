module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ["node_modules/(?!axios)"],
    "moduleNameMapper": {
      "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    }
  };
  