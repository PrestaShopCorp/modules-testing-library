module.exports = [
  {
    file: 'BO/BObasePage.js',
    combinations: {
      latest: {
        filepath: '@versions/latest/BO/BObasePage.js',
      },
      '1.7.7.0': {
        filepath: '@versions/v177/BO/BObasePage.js',
      },
      '1.7.3.4': {
        filepath: '@versions/v173/BO/BObasePage.js',
      },
      '1.7.2.5': {
        filepath: '@versions/v172/BO/BObasePage.js',
      },
      '1.7.1.2': {
        version: '1.7.2.5',
      },
      '1.7.0.6': {
        version: '1.7.2.5',
      },
    },
  },
  {
    file: 'BO/login/index.js',
    combinations: {
      latest: {
        filepath: '@versions/latest/BO/login/index.js',
      },
      '1.7.2.5': {
        filepath: '@versions/v172/BO/login/index.js',
      },
      '1.7.1.2': {
        version: '1.7.2.5',
      },
      '1.7.0.6': {
        version: '1.7.2.5',
      },
    },
  },
];
