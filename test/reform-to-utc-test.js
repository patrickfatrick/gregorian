// test/reform-to-utc-test.js
var should = require('chai').should();
var reformUTC = require('../src/modules/reform-to-utc');

describe('reformUTC', function () {
 it('converts a string to a UTC string', function () {
   reformUTC(new Date('April 11, 1988 00:00 UTC')).should.equal('Mon, 11 Apr 1988 00:00:00 GMT');
	 reformUTC(new Date('April 11, 1988 00:00 UTC'), 'short').should.equal('Mon, 11 Apr 1988');
 });
});