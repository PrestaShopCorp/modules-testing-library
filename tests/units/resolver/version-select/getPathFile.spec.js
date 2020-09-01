require('module-alias/register');

const VersionSelectResolver = require('@resolvers/versionSelectResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('@unitTests/data/getFilePath/baseFilePath');
const getRequireCustomClassExtends = require('@unitTests/data/getFilePath/customFilePath');

describe('Testing resolver retroCompact getRequire', () => {
  it('should call common path file', () => {
    const versionSelectResolver = new VersionSelectResolver('177');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/common/BO/login/index.js',
    );
  });

  it('should call specific version path file', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.8');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v178/BO/login/index.js',
    );
  });

  it('should call specific version path file with directory', () => {
    const versionSelectResolver = new VersionSelectResolver('1.7.8', getRequireClassExtends);
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v178/BO/login/index.js',
    );
  });

  it('should call custom path file', () => {
    const versionSelectResolver = new VersionSelectResolver('177');
    assert.strictEqual(versionSelectResolver.getFilePath(
      'BO/login/index.js',
      getRequireCustomClassExtends,
    ),
    `${process.cwd()}/myFile.js`,
    );
  });
});
