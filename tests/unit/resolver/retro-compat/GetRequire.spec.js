/* eslint-disable */

const RetroCompatResolver = require('../../../../kernel/resolvers/RetroCompatResolver.js');
const assert = require('assert');
const getRequireClassExtends = require('../../data/getRequireClassExtends');

describe('Testing resolver retroCompact getRequire', function () {
    it('should call method with class extends', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        // method not override
        assert.equal(retroCompatResolver.getRequire(
                'test.js',
                getRequireClassExtends
            ),
            'test.js'
        );
        // method override in this prestashop version
    });
});
