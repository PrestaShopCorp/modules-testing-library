require('module-alias/register');

const VersionSelectedResolver = require('@resolvers/VersionSelectedResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('@unitTests/data/getFilePath/baseFilePath');
const getRequireCustomClassExtends = require('@unitTests/data/getFilePath/customFilePath');

describe('Testing resolver retroCompact getRequire', () => {
  it('should call common pathfile', () => {
    const versionSelectedResolver = new VersionSelectedResolver('177');
    assert.equal(versionSelectedResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireClassExtends,
    ),
    '@kernel/common/BO/login/index.js',
    );
  });

  it('should call specific version pathfile', () => {
    const versionSelectedResolver = new VersionSelectedResolver('1.7.8');
    assert.equal(versionSelectedResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireClassExtends,
    ),
    '@versions/v178/BO/login/index.js',
    );
  });

  it('should call custom pathfile', () => {
    const versionSelectedResolver = new VersionSelectedResolver('177');
    assert.equal(versionSelectedResolver.getFilePath(
      'kernel/common/BO/login/index.js',
      getRequireCustomClassExtends,
    ),
    'myfile.js',
    );
  });
});
