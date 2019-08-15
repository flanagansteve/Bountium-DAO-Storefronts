module.exports = {
  "extends": [
    "eslint:recommended",
    // "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true,
  },
  // "plugins": [
  //   "react"
  // ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 10,
  },
  "rules": {
    // "react/jsx-curly-spacing": ["error", {"when": "always", "children": true}]
    "object-curly-spacing": ["error", "always"],
    "key-spacing": ["error"],
    "space-in-parens": ["error", "always"],
    "no-unused-vars": 0,
  },
  "globals": {
    "React": "readonly",
    "ReactDOM": "readonly",
    "web3": "readonly",
  },
};