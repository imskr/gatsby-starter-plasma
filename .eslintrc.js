module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier'
  ],
  parser: 'babel-eslint',
  rules: {
  	'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
  },
};
