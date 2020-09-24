require('module-alias/register');

const VersionSelectResolver = require('@resolvers/versionSelectResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('@unitTests/data/getFilePath/baseFilePath');
const getRequireCustomClassExtends = require('@unitTests/data/getFilePath/customFilePath');

// These tests call directly `getFilePath` and pass it the getRequireClassExtends map file

describe('Testing resolver retroCompact getRequire', () => {
  it('should call common path file when requesting unknown version 1.7.3.1', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.3.1');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/common/BO/login/index.js',
    );
  });

  it('should call specific version path file for version 1.7.7.0', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.7.0');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v177/BO/login/index.js',
    );
  });

  it('should call specific version path file for version 1.7.0.6 ', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.0.6');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v170/BO/login/index.js',
    );
  });

  it('should call custom path file', () => {
    const versionSelectResolver = new VersionSelectResolver('custom');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireCustomClassExtends,
    ),
    'myFile.js',
    );
  });

  it('should rebound to get the initial file path', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.5.2');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v177/BO/login/index.js',
    );
  });

  it('should not find the file Orders and throw an error', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.7.0');
    function resolveFilePathNonExistent() {
      return versionSelectResolver.getFilePath(
        'BO/orders/index.js',
        getRequireClassExtends,
      );
    }
    assert.throws(resolveFilePathNonExistent,
      {
        name: 'Error',
        message: "No reference found for file 'BO/orders/index.js'",
      },
    );
  });

  it('should rebound too much and throw an error', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.1.2');
    function resolveFilePathWithError() {
      return versionSelectResolver.getFilePath(
        'BO/login/index.js',
        getRequireClassExtends,
      );
    }
    assert.throws(resolveFilePathWithError,
      {
        name: 'Error',
        // eslint-disable-next-line max-len
        message: "Couldn't find a type file after 5 recursive searches for version '1.7.1.2' and file 'BO/login/index.js' (stopped at version '1.7.6.8')",
      },
    );
  });
});
