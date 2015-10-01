// test/reform-test.js
var should = require('chai').should();
var reform = require('../src/modules/reform');

describe('reform', function () {
 it('converts an object (string, date, or number) to a gregorian object', function() {
   reform('04/11/1988 00:00 UTC').d.toISOString().should.equal('1988-04-11T00:00:00.000Z');
	 reform(new Date('04/11/1988 00:00 UTC')).d.toISOString().should.equal('1988-04-11T00:00:00.000Z');
	 Date.parse(reform('September 25, 2015 00:00 UTC').d).should.equal(1443139200000);
	 Date.parse(reform(1443139200000).d).should.equal(1443139200000);
	 (function(){reform('next Tuesday')}).should.throw(TypeError);
 });
});