// test/recite-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('recite', () => {
 it('outputs the gregorian object\'s date', () => {
   reform('04/11/1988 00:00 UTC').add(1, 'd').recite().toISOString().should.equal('1988-04-12T00:00:00.000Z');
	 reform('October 15, 2015 00:00 UTC').add(1, 'y').subtract(5, 'd').subtract(5, 't').restart('h').recite().toISOString().should.equal('2016-10-09T23:00:00.000Z');
 });
});