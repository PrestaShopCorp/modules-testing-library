require('module-alias/register');

const VersionSelectResolver = require('@resolvers/versionSelectResolver.js');
const assert = require('assert');

const supportedVersions = ['1.7.4', '1.7.5', '1.7.6', '1.7.7', '1.7.8', '8.0'];

const pagesSelectors = [
  'BO/login/index.js',
  'BO/dashboard/index.js',
  'BO/modules/moduleManager/index.js',
  'BO/modules/moduleCatalog/index.js',
  'BO/modules/moduleConfiguration/index.js',
  'BO/catalog/products/index.js',
  'BO/catalog/products/add.js',
];

describe('Check supported versions and pages', async () => {
  supportedVersions.forEach((version) => {
    const versionSelectResolver = new VersionSelectResolver(version);

    describe(`Check supported pages for version '${version}'`, async () => {
      pagesSelectors.forEach((pageSelector) => {
        it(`Check that file '${pageSelector}' can be required`, () => {
          assert.doesNotThrow(() => versionSelectResolver.require(pageSelector));
        });
      });
    });
  });
});
