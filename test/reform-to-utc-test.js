// test/reform-to-utc-test.js
import chai from 'chai';
import {utc} from '../src/modules/reform-to-functions';

chai.should();
describe('utc', () => {
	it('converts a string to a UTC string', () => {
		utc(new Date('April 11, 1988 00:00 UTC')).should.equal('Mon, 11 Apr 1988 00:00:00 GMT');
		utc(new Date('April 11, 1988 00:00 UTC'), 'short').should.equal('Mon, 11 Apr 1988');
	});
});