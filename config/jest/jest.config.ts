export default {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],

    moduleDirectories: [
        "node_modules"
    ],
    modulePaths: [
        '<rootDir>src'
    ],

    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    rootDir: '../../',
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts'
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    }
   
};
