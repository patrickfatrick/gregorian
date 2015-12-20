// test/reagent-test.js
import chai from 'chai';
import gregorian from '../src/gregorian';

chai.should();
describe('reagent', () => {
	it('validates dd/mm/yyyy dates', () => {
		gregorian.reform('04/11/1988 00:00 UTC').reagent().should.be.true;
	});
	it('validates date objects', () => {
		gregorian.reform(new Date('04/11/1988 00:00 UTC')).reagent().should.be.true;
	});
	it('validates UTC dates', () => {
		gregorian.reform('September 25, 2015 00:00 UTC').reagent().should.be.true;
	});
	it('validates unix timestamps', () => {
		gregorian.reform(1443139200000).reagent().should.be.true;
	});
	it('validates the current date/time by default', () => {
		gregorian.reform().reagent().should.be.true;
	});
	it('does not validate colloquialisms', () => {
		gregorian.reform('a year ago').reagent().should.be.false;
		gregorian.reform('next Tuesday').reagent().should.be.false;
	});
});