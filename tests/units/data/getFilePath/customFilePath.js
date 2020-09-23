module.exports = [
  {
    file: 'BO/BObasePage.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/BObasePage.js',
      },
    },
  },
  {
    file: 'BO/login/index.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/login/index.js',
      },
      '1.7.8.0': {
        type: 'filepath',
        target: '@versions/v178/BO/login/index.js',
      },
      'custom': {
        type: 'filepath',
        target: 'myFile.js',
      },
    },
  },
];
