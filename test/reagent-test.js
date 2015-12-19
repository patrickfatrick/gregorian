// test/reagent-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('reagent', () => {
	it('checks that the gregorian object has a valid date', () => {
		reform('04/11/1988 00:00 UTC').reagent().should.be.true;
		reform(new Date('04/11/1988 00:00 UTC')).reagent().should.be.true;
		reform('September 25, 2015 00:00 UTC').reagent().should.be.true;
		reform(1443139200000).reagent().should.be.true;
		reform().reagent().should.be.true;
		reform('a year ago').reagent().should.be.false;
		reform('next Tuesday').reagent().should.be.false;
	});
});