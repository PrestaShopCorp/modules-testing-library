module.exports = [
  {
    file: 'BO/BObasePage.js',
    combinations: {
      '1.7.7.0': {
        filepath: '@versions/v177/BO/BObasePage.js',
      },
    },
  },
  {
    file: 'BO/login/index.js',
    combinations: {
      custom: {
        filepath: 'myFile.js',
      },
      '1.7.0.6': {
        filepath: '@versions/v170/BO/login/index.js',
      },
    },
  },
];
