// test/reform-restart-test.js
var should = require('chai').should();
var reform = require('../src/modules/reform');

describe('reformRestart', function () {
 it('sets the date and time to the start of the specified increment', function () {
	 reform('April 11, 1988 8:23:15.123').restart('s').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 08:23:15.000');
	 reform('April 11, 1988 8:23:15.123').restart('t').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 08:23:00.000');
	 reform('April 11, 1988 8:23:15.123').restart('h').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 08:00:00.000');
	 reform('April 11, 1988 8:23:15.123').restart('d').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 00:00:00.000');
	 reform('April 11, 1988 8:23:15.123').restart('w').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-10 00:00:00.000');
	 reform('April 11, 1988 8:23:15.123').restart('m').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-01 00:00:00.000');
	 reform('April 11, 1988 8:23:15.123').restart('y').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-01-01 00:00:00.000');
 });
});