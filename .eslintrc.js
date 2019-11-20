module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "globalRequire": 0,
    "no-underscore-dangle": [
      2,
      {
        "allow": [
          "_id",
          "_json"
        ]
      }
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectPattern": {
          "multiline": true,
          "minProperties": 5
        }
      }
    ]
  },
};
