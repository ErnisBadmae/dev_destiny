module.exports = {
  parser: "@typescript-eslint/parser", // задаем парсер для eslint что бы знал что делать с ts файлами, запускай еще раз
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-var": 2,
  },
};
