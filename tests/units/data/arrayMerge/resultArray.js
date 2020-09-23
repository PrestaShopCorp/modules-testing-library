module.exports = [
  {
    file: 'BO/BObasePage.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/BObasePage.js',
      },
      '1.7.8.0': {
        type: 'filepath',
        target: '@versions/v178/BO/BObasePage.js',
      },
      '1.7.3.4': {
        type: 'filepath',
        target: '@versions/v173/BO/BObasePage.js',
      },
      '1.7.2.5': {
        type: 'filepath',
        target: '@versions/myVersion/BO/BObasePage.js',
      },
      '1.7.1.2': {
        type: 'version',
        target: '1.7.2.5',
      },
      '1.7.0.6': {
        type: 'version',
        target: '1.7.2.5',
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
      '1.7.3.4': {
        type: 'filepath',
        target: '@versions/v173/BO/login/index.js',
      },
      '1.7.2.5': {
        type: 'filepath',
        target: '@versions/v172/BO/login/index.js',
      },
      '1.7.1.2': {
        type: 'version',
        target: '1.7.2.5',
      },
      '1.7.0.6': {
        type: 'version',
        target: '1.7.2.5',
      },
    },
  },
  {
    file: 'BO/dashboard/index.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/dashboard/index.js',
      },
    },
  },
];
