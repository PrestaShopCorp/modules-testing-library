require('module-alias/register');

const VersionSelectResolver = require('@resolvers/versionSelectResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('@unitTests/data/getFilePath/baseFilePath');
const getRequireCustomClassExtends = require('@unitTests/data/getFilePath/customFilePath');

describe('Testing resolver retroCompact getRequire', () => {
  it('should call common path file', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.9.0');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/common/BO/login/index.js',
    );
  });

  it('should call specific version path file', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.8.0');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v178/BO/login/index.js',
    );
  });

  it('should call specific version path file with directory', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.8.0', getRequireClassExtends);
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v178/BO/login/index.js',
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
    '@versions/v178/BO/login/index.js',
    );
  });

  it('should rebound too much and throws an error', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.0.6');
    function resolveFilePathWithError() {
      return versionSelectResolver.getFilePath(
        'BO/login/index.js',
        getRequireClassExtends,
      );
    }
    assert.throws(resolveFilePathWithError,
      // eslint-disable-next-line max-len
      "Error: Couldn't find a type file after 5 recursive searches for version '1.7.0.6' and file 'BO/login/index.js' (stopped at version '1.7.5.2')",
    );
  });
});
