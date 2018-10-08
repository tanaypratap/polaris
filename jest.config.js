module.exports = {
    "roots": [
      "<rootDir>/client",
      "<rootDir>/_server"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "setupTestFrameworkScriptFile": "<rootDir>/client/setupTests.ts",
    "snapshotSerializers": [
      "enzyme-to-json/serializer" 
    ],
  }