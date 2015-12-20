// test/reform-restart-test.js
import chai from 'chai';
import gregorian from '../src/gregorian';

chai.should();
describe('restart', () => {
	it('sets the date/time to the start of the year', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('y').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-01-01 00:00:00.000');
	});
	it('sets the date/time to the start of the month', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('m').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-04-01 00:00:00.000');
	});
	it('sets the date/time to the start of the week', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('w').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-04-10 00:00:00.000');
	});
	it('sets the date/time to the start of the day', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('d').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-04-11 00:00:00.000');
	});
	it('sets the date/time to the start of the hour', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('h').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-04-11 08:00:00.000');
	});
	it('sets the date/time to the start of the minute', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('t').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-04-11 08:23:00.000');
	});
	it('sets the date/time to the start of the second', () => {
		gregorian.reform('April 11, 1988 8:23:15').restart('s').to('yyyy-mm-dd HH:tt:ss.ll')
			.should.equal('1988-04-11 08:23:15.000');
	});
});
