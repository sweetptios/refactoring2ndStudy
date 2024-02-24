// province.spec.js
import { expect } from 'chai';
import { Province, sampleProvinceData } from './province.js';
import Producer from './producer.js';

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });
});
