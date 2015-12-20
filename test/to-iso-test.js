// test/reform-to-iso-test.js
import chai from 'chai';
import {iso} from '../src/modules/reformat';

chai.should();
describe('iso', () => {
	it('converts a date to an ISO string', () => {
		iso(new Date('April 11, 1988 00:00 UTC')).should.equal('1988-04-11T00:00:00.000Z');
	});
	it('converts a date to a shortened ISO string', () => {
		iso(new Date('April 11, 1988 00:00 UTC'), 'short').should.equal('1988-04-11');
	});
});