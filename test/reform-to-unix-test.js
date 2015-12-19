// test/reform-to-unix-test.js
import chai from 'chai';
import {unix} from '../src/modules/reform-to-functions';

chai.should();
describe('unix', () => {
	it('converts a string to a unix timestamp', () => {
		unix(new Date('April 11, 1988 00:00 UTC')).should.equal(576720000000);
	});
});