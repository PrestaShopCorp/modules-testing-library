/* eslint-disable */

const RetroCompatResolver = require('../../resolvers/RetroCompatResolver.js');
const assert = require('assert');
const overrideMapping = require('./class-extends');

describe('Testing resolver retroCompact', function () {
    it('should call method with class extends', function () {
        const retroCompatResolver = new RetroCompatResolver('177');
        // method not override
        assert.equal(retroCompatResolver.getRequire('youpi.js', overrideMapping), process.cwd() + '/' + 'youpi.js');
        // method override in this prestashop version
        assert.equal(retroCompatResolver.getRequire('tralala.js', overrideMapping), 'tralala-override.js');
    });
    it('should not call method with class extends', function () {
        const retroCompatResolver = new RetroCompatResolver('178');
        // method not override
        assert.equal(retroCompatResolver.getRequire('youpi.js', overrideMapping), process.cwd() + '/' + 'youpi.js');
        // method not override in this prestashop version
        assert.equal(retroCompatResolver.getRequire('tralala.js', overrideMapping), process.cwd() + '/' + 'tralala.js');
    });
});
