// test.js
const assert = require('assert');
const{ Province, sampleProvinceData } = require('./province');
const Producer = require('./producer');

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});
