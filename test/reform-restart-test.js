// test/reform-restart-test.js
var should = require('chai').should();
var reform = require('../src/modules/reform');

describe('reformRestart', function () {
 it('sets the date and time to the start of the specified increment', function () {
	 reform('April 11, 1988 8:23:15.123 UTC').restart('s').d.toISOString().should.equal('1988-04-11T08:23:15.000Z');
	 reform('April 11, 1988 8:23:15.123 UTC').restart('t').d.toISOString().should.equal('1988-04-11T08:23:00.000Z');
	 reform('April 11, 1988 8:23:15.123 UTC').restart('h').d.toISOString().should.equal('1988-04-11T08:00:00.000Z');
	 reform('April 11, 1988 8:23:15.123').restart('d').d.toISOString().should.equal('1988-04-11T06:00:00.000Z');
	 reform('April 11, 1988 8:23:15.123').restart('w').d.toISOString().should.equal('1988-04-10T06:00:00.000Z');
	 reform('April 11, 1988 8:23:15.123').restart('m').d.toISOString().should.equal('1988-04-01T07:00:00.000Z');
	 reform('April 11, 1988 8:23:15.123').restart('y').d.toISOString().should.equal('1988-01-01T07:00:00.000Z');
 });
});