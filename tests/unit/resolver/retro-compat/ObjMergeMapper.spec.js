/* eslint-disable */

const RetroCompatResolver = require('../../../../kernel/resolvers/RetroCompatResolver.js');
const baseClassExtends = require('../../data/baseClassExtends');
const overrideClassExtends = require('../../data/getRequireClassExtends');
const resultatClassExtends = require('../../data/resultatClassExtends');

const { expect } = require('chai');

describe('Testing resolver retroCompact mergeMapping', function () {
    it('I have not file extends-class override', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        expect(
            retroCompatResolver.mergeMapping(
                baseClassExtends
            )
        ).to.eql(
            baseClassExtends
        );
    });

    it('I have file extends-class override', function () {
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
