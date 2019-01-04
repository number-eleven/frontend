module.exports = {
  'extends': 'airbnb',
  'rules': {
    'comma-dangle': 'off'
  },
  'parser': 'babel-eslint',
  'plugins': ['react'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true
  }
};