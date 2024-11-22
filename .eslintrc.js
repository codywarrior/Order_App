// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier", "jest"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { args: "none", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],
    curly: ["error", "all"],
    eqeqeq: "error",
    "prefer-arrow-callback": "error",
    "max-lines-per-function": [
      "warn",
      { max: 1000, skipBlankLines: true, skipComments: true },
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["/dist/*"],
};
