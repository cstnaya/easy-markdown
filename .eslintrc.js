module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    browser: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
  },
  "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
};
