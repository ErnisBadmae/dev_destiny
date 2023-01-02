module.exports = {
    parser: "@typescript-eslint/parser",
    // задаем парсер для eslint что бы знал что делать с ts файлами
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 
        'plugin:i18next/recommended', 
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react", 
        "i18next",
        "react-hooks"
    ],
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to']
        }],
        'max-len': ['error', {
            ignoreComments: true,
            code: 100
        }],
        'jsx-a11y/no-static-element-interactions':'off',
        'jsx-a11y/click-events-have-key-events':'off',
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error" ,// Checks effect dependencies
        "react/display-name": "off"
    },
    globals: {
        '__IS_DEV__': true,
        '__API__': true,
        '__PROJECT__': true
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts.tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len':'off',
        }
    }]
};