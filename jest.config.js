module.exports = {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "testRegex": ".(e2e-)?spec.ts$",
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "setupFiles": [
      "./test/utils/jest-setupFiles/setLocalEnvironment.js"
    ],
    "testTimeout": 20000
  }