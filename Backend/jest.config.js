const jestConfig = {
  testEnvironment: "node", // This specifies the test environment
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$", // Regex to find test files
  moduleFileExtensions: ["js", "json", "node"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};

export default jestConfig;
