require('module-alias/register');

const VersionSelectResolver = require('@resolvers/versionSelectResolver.js');
const assert = require('assert');
const configClassMap = require('@unitTests/data/configClassMap');

// These tests call directly `getFilePath` and pass it the getRequireClassExtends map file

describe('Testing resolver getFilePath', () => {
  it('should get the correct file with discover for 1.7.7', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.7');
    assert.strictEqual(versionSelectResolver.getFilePath('BO/login/index.js'),
      `${process.cwd()}/versions/77/BO/login/index.js`,
    );
  });

  it('should get the overriden file (with configClassMap) for 1.7.4', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.4', configClassMap);
    assert.strictEqual(versionSelectResolver.getFilePath('BO/dashboard/index.js'),
      '/versions/74/BO/dashboard/index_overriden.js',
    );
  });

  it('should not find the folder for version 195 and throw an error', () => {
    const versionSelectResolver = new VersionSelectResolver('1.9.5');
    function resolveFilePathFolderNonExistent() {
      return versionSelectResolver.getFilePath('BO/login/index.js');
    }
    assert.throws(resolveFilePathFolderNonExistent,
      {
        name: 'Error',
        message: "Couldn't find the folder for version '1.9.5'",
      },
    );
  });

  it('should not find the file orders/index.js for version 76 and throw an error', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.6');
    function resolveFilePathFileNonExistent() {
      return versionSelectResolver.getFilePath('BO/orders/index.js');
    }
    assert.throws(resolveFilePathFileNonExistent,
      {
        name: 'Error',
        // eslint-disable-next-line max-len
        message: "Couldn't find the file 'BO/orders/index.js' in version folder '1.7.6'",
      },
    );
  });
});
