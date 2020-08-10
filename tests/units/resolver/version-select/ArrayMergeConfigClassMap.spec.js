require('module-alias/register');

const VersionSelectResolver = require('@resolvers/VersionSelectResolver.js');
const baseArray = require('@unitTests/data/arrayMerge/baseArray');
const mergeArray = require('@unitTests/data/arrayMerge/mergeArray');
const resultArray = require('@unitTests/data/arrayMerge/resultArray');

const {expect} = require('chai');

describe('Testing resolver retroCompact arrayMerge', () => {
  it('I have not file override configClassMap', () => {
    const versionSelectResolver = new VersionSelectResolver('177');
    expect(
      versionSelectResolver.arrayMerge(
        baseArray,
      ),
    ).to.eql(
      baseArray,
    );
  });

  it('I have override file configClassMap', () => {
    const versionSelectResolver = new VersionSelectResolver('177');
    expect(
      versionSelectResolver.arrayMerge(
        baseArray,
        mergeArray,
      ),
    ).to.eql(
      resultArray,
    );
  });
});
