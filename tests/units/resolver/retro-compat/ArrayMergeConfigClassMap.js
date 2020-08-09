require('module-alias/register');

const VersionSelectedResolver = require('@resolvers/VersionSelectedResolver.js');
const baseArray = require('@unitTests/data/arrayMerge/baseArray');
const mergeArray = require('@unitTests/data/arrayMerge/mergeArray');
const resultArray = require('@unitTests/data/arrayMerge/resultArray');

const {expect} = require('chai');

describe('Testing resolver retroCompact arrayMerge', () => {
  it('I have not file override configClassMap', () => {
    const versionSelectedResolver = new VersionSelectedResolver('177');
    expect(
      versionSelectedResolver.arrayMerge(
        baseArray,
      ),
    ).to.eql(
      baseArray,
    );
  });

  it('I have override file configClassMap', () => {
    const versionSelectedResolver = new VersionSelectedResolver('177');
    expect(
      versionSelectedResolver.arrayMerge(
        baseArray,
        mergeArray,
      ),
    ).to.eql(
      resultArray,
    );
  });
});
