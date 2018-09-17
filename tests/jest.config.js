// Configuring Jest
// See: https://facebook.github.io/jest/docs/en/configuration.html

const aliases = require('../aliases.config')

module.exports = {
  // without this line rootDir will be `./tests`
  rootDir: '..',

  // without this line sometimes `jsdom` fails to run the tests:
  // see: https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost',
  testMatch: ['**/(*.)unit.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'client/**/*.{js,vue}',
    '!**/node_modules/**',
    '!client/plugins/*.js',
    '!client/store/index.js',
  ],
  coverageThreshold: {
    global: { statements: 90 },
  },

  testPathIgnorePatterns: ['/node_modules/', '/docker/testcafe/'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'vue', 'json'],
  moduleNameMapper: {
    ...aliases.jest,
    '^~/(.*)$': '<rootDir>/client/$1',
  },

  verbose: true,
}
