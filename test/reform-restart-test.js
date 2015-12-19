// test/reform-restart-test.js
import chai from 'chai';
import gregorian from '../src/gregorian';

chai.should();
describe('restart', () => {
	it('sets the date and time to the start of the specified increment', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('s').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 08:23:15.000');
		gregorian.reform('April 11, 1988 8:23:15').restart('t').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 08:23:00.000');
		gregorian.reform('April 11, 1988 8:23:15').restart('h').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 08:00:00.000');
		gregorian.reform('April 11, 1988 8:23:15').restart('d').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-11 00:00:00.000');
		gregorian.reform('April 11, 1988 8:23:15').restart('w').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-10 00:00:00.000');
		gregorian.reform('April 11, 1988 8:23:15').restart('m').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-04-01 00:00:00.000');
		gregorian.reform('April 11, 1988 8:23:15').restart('y').to('yyyy-mm-dd HH:tt:ss.ll').should.equal('1988-01-01 00:00:00.000');
	});
});
