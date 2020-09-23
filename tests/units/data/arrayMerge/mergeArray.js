module.exports = [
  {
    file: 'BO/BObasePage.js',
    combinations: {
      '1.7.2.5': {
        type: 'filepath',
        target: '@versions/myVersion/BO/BObasePage.js',
      },
    },
  },
  {
    file: 'BO/login/index.js',
    combinations: {
      '1.7.3.4': {
        type: 'filepath',
        target: '@versions/v173/BO/login/index.js',
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
