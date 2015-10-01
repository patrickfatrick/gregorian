// test/reform-to-iso-test.js
var should = require('chai').should();
var reformISO = require('../src/modules/reform-to-iso');

describe('reformISO', function () {
 it('converts a string to an ISO string', function () {
   reformISO(new Date('April 11, 1988 00:00 UTC')).should.equal('1988-04-11T00:00:00.000Z');
	 reformISO(new Date('April 11, 1988 00:00 UTC'), 'short').should.equal('1988-04-11');
 });
});