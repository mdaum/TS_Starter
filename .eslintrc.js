module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // es2018, compatible with node 10
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin"
  ],
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    "@typescript-eslint/array-type": ["error", {"default": "array-simple"}],
    "@typescript-eslint/brace-style": ["error", "1tbs"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/quotes": ["error", "single"],
    "curly": ["error", "all"],
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "always"]
  }
};
