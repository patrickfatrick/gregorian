// test/reform-subtract-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('subtract', () => {
 it('subtracts specified increments to the date', () => {
   reform('April 11, 1988 00:00 UTC').subtract(1, 'd').d.toISOString().should.equal('1988-04-10T00:00:00.000Z');
	 reform('April 11, 1988 06:00 UTC').subtract(1, 'd').subtract(1, 'm').d.toISOString().should.equal('1988-03-10T06:00:00.000Z');
	 reform('February 29, 1988 00:00 UTC').subtract(1, 'y').d.toISOString().should.equal('1987-02-28T00:00:00.000Z');
	 reform('April 11, 1988 00:00 UTC').subtract(3, 'h').d.toISOString().should.equal('1988-04-10T21:00:00.000Z');
	 reform('April 11, 1988 00:00 UTC').subtract(11, 'm').subtract(5, 'd').d.toISOString().should.equal('1987-05-06T00:00:00.000Z');
	 reform('April 11, 1988 00:00 UTC').subtract(3, 'm').subtract(5, 'd').subtract(10, 't').d.toISOString().should.equal('1988-01-05T23:50:00.000Z');
	 reform('April 11, 1988 00:00 UTC').subtract(12, 'm').d.toISOString().should.equal('1987-04-11T00:00:00.000Z');
	 reform('April 11, 1988 00:00 UTC').subtract(3, 'y').d.toISOString().should.equal('1985-04-11T00:00:00.000Z');
	 reform('March 1, 1988 00:00 UTC').subtract(3, 'd').d.toISOString().should.equal('1988-02-27T00:00:00.000Z');
	 reform('October 31, 2015 00:00 UTC').subtract(1, 'm').d.toISOString().should.equal('2015-09-30T00:00:00.000Z');
	 reform('October 31, 2015 00:00 UTC').subtract(15, 'm').d.toISOString().should.equal('2014-07-31T00:00:00.000Z');
	 reform('2015-10-31T04:56:15.123Z').subtract(123, 'l').d.toISOString().should.equal('2015-10-31T04:56:15.000Z');
	 reform('2015-10-31T04:56:14.877Z').subtract(2, 'w').d.toISOString().should.equal('2015-10-17T04:56:14.877Z');
	 reform('2015-10-31T04:56:14.877Z').subtract(8, 'w').d.toISOString().should.equal('2015-09-05T04:56:14.877Z');
 });
});