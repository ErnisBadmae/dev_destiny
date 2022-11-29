import path from "path";

export default {
    globals:{
        '__IS_DEV__':true,
        '__API__': ''
    },
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleDirectories: [
        "node_modules",
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
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts'
    ],
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    }
   
};
