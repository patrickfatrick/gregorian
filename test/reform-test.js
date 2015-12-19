// test/reform-test.js
import chai from 'chai';
import gregorian from '../src/gregorian';

chai.should();
describe('reform', () => {
	it('converts an object (string, date, or number) to a gregorian object', () => {
		gregorian.reform('04/11/1988 00:00 UTC').d.toISOString().should.equal('1988-04-11T00:00:00.000Z');
		gregorian.reform(new Date('04/11/1988 00:00 UTC')).d.toISOString().should.equal('1988-04-11T00:00:00.000Z');
		Date.parse(gregorian.reform('September 25, 2015 00:00 UTC').d).should.equal(1443139200000);
		Date.parse(gregorian.reform(1443139200000).d).should.equal(1443139200000);
		gregorian.reform().d.should.respondTo('getTime');
		gregorian.reform('next Tuesday').d.getTime().should.not.be.an.instanceOf(Number);
	});
});