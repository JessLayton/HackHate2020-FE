module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/strict',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': ['error', { code: 180 }],
    'no-param-reassign': [2, { props: false }],
    'jsx-quotes': [2, 'prefer-single'],
    'consistent-return': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-console': 'off',
    'linebreak-style': 0,

  },
};
