const { ESLint } = require('eslint');

module.exports = {
    env: {
        browser: true,
        es202: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'max-len': ['error', { code: 180 }],
        'linebreak-style': ['error', 'windows'],
        'no-param-reassign': [2, { props: false }],
        'jsx-quotes': [2, 'prefer-single'],
      },
  };
  