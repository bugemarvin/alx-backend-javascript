export const env = {
  browser: false,
  es6: true,
  jest: true,
};
export const extends = [
  'airbnb-base',
  'plugin:jest/all',
];
export const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
};
export const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
};
export const plugins = ['jest'];
export const rules = {
  'no-console': 'off',
  'no-shadow': 'off',
  'no-restricted-syntax': [
    'error',
    'LabeledStatement',
    'WithStatement',
  ],
};
export const overrides = [
  {
    files: ['*.js'],
    excludedFiles: 'babel.config.js',
  }
];