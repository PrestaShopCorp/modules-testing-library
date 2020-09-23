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
      '1.7.7.0': {
        type: 'version',
        target: '1.7.8.0',
      },
      '1.7.6.8': {
        type: 'version',
        target: '1.7.7.0',
      },
      '1.7.5.2': {
        type: 'version',
        target: '1.7.6.8',
      },
      '1.7.4.4': {
        type: 'version',
        target: '1.7.5.2',
      },
      '1.7.3.4': {
        type: 'version',
        target: '1.7.4.4',
      },
      '1.7.2.5': {
        type: 'version',
        target: '1.7.3.4',
      },
      '1.7.1.2': {
        type: 'version',
        target: '1.7.2.5',
      },
      '1.7.0.6': {
        type: 'version',
        target: '1.7.1.2',
      },
    },
  },
];
