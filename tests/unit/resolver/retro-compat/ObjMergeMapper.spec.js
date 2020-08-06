/* eslint-disable */
require('module-alias/register');

const RetroCompatResolver = require('@resolvers/RetroCompatResolver.js');
const baseClassExtends = require('@unitTests/data/baseClassExtends');
const overrideClassExtends = require('@unitTests/data/overrideClassExtends');
const resultatClassExtends = require('@unitTests/data/resultatClassExtends');

const { expect } = require('chai');

describe('Testing resolver retroCompact mergeMapping', function () {
    it('I have not file override extends-class', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        expect(
            retroCompatResolver.mergeMapping(
                baseClassExtends
            )
        ).to.eql(
            baseClassExtends
        );
    });

    it('I have override file extends-class', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        expect(
            retroCompatResolver.mergeMapping(
                baseClassExtends,
                overrideClassExtends
            )
        ).to.eql(
            resultatClassExtends
        );
    });
});
