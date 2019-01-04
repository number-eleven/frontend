module.exports = {
  'extends': 'airbnb',
  'rules': {
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': [
      'error', {
        'devDependencies': true,
        'optionalDependencies': false,
        'peerDependencies': false
      }
    ]
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