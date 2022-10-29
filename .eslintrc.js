module.exports = {
    parser: "@typescript-eslint/parser", // задаем парсер для eslint что бы знал что делать с ts файлами, запускай еще раз
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended", 
        "plugin: i18next/recommended",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "i18next"],
    rules: {
        "no-var": 2,
        "react/jsx-indent": [2,4],
        // indent: [2,4],
        "react/jsx-filename-extension":[2, {"extensions": [".js", ".jsx", ".tsx"]}], 
        "react/require-default-props":'off',
        "react/react-in-jsx-scope":'off',
        "react/jsx-props-no-spreading":'warn',
        "react/function-component-definition":'off',
        "no-underscore-dangle":'off ',
        "18next/no-literal-string": ['error', {markupOnly:true}]
    },
    globals: {
    '__IS_DEV__':true
    }
};
