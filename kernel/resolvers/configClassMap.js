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
        target: '@versions/v172/BO/BObasePage.js',
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
      '1.7.2.5': {
        type: 'filepath',
        filepath: '@versions/v172/BO/login/index.js',
      },
      '1.7.1.2': {
        type: 'version',
        filepath: '1.7.2.5',
      },
      '1.7.0.6': {
        type: 'version',
        filepath: '1.7.2.5',
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
  {
    file: 'BO/modules/moduleCatalog/index.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/modules/moduleCatalog/index.js',
      },
    },
  },
  {
    file: 'BO/modules/moduleManager/index.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/modules/moduleManager/index.js',
      },
      '1.7.4.4': {
        type: 'filepath',
        target: '@versions/v174/BO/modules/moduleManager/index.js',
      },
      '1.7.3.4': {
        type: 'filepath',
        target: '@versions/v173/BO/modules/moduleManager/index.js',
      },
      '1.7.2.5': {
        type: 'version',
        target: '1.7.3.4',
      },
      '1.7.1.2': {
        type: 'filepath',
        target: '@versions/v171/BO/modules/moduleManager/index.js',
      },
      '1.7.0.6': {
        type: 'version',
        target: '1.7.1.2',
      },
    },
  },
  {
    file: 'BO/modules/moduleConfiguration/index.js',
    combinations: {
      common: {
        type: 'filepath',
        target: '@versions/common/BO/modules/moduleConfiguration/index.js',
      },
    },
  },
];
