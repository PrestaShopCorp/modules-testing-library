module.exports = [
  {
    file: 'BO/BObasePage.js',
    combinations: {
      latest: {
        filepath: '@versions/latest/BO/BObasePage.js',
      },
    },
  },
  {
    file: 'BO/login/index.js',
    combinations: {
      latest: {
        filepath: '@versions/latest/BO/login/index.js',
      },
      '1.7.7.0': {
        filepath: '@versions/v177/BO/login/index.js',
      },
      '1.7.6.8': {
        version: '1.7.7.0',
      },
      '1.7.5.2': {
        version: '1.7.6.8',
      },
      '1.7.4.4': {
        version: '1.7.5.2',
      },
      '1.7.3.4': {
        version: '1.7.4.4',
      },
      '1.7.2.5': {
        version: '1.7.3.4',
      },
      '1.7.1.2': {
        version: '1.7.2.5',
      },
      '1.7.0.6': {
        filepath: '@versions/v170/BO/login/index.js',
      },
    },
  },
];
