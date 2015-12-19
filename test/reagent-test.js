// test/reagent-test.js
import chai from 'chai';
import gregorian from '../src/gregorian';

chai.should();
describe('reagent', () => {
	it('checks that the gregorian object has a valid date', () => {
		gregorian.reform('04/11/1988 00:00 UTC').reagent().should.be.true;
		gregorian.reform(new Date('04/11/1988 00:00 UTC')).reagent().should.be.true;
		gregorian.reform('September 25, 2015 00:00 UTC').reagent().should.be.true;
		gregorian.reform(1443139200000).reagent().should.be.true;
		gregorian.reform().reagent().should.be.true;
		gregorian.reform('a year ago').reagent().should.be.false;
		gregorian.reform('next Tuesday').reagent().should.be.false;
	});
});