// test/reform-add-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('add', () => {
	it('adds specified increments to the date', () => {
		reform('April 11, 1988 00:00 UTC').add(1, 'd').d.toISOString().should.equal('1988-04-12T00:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').add(1, 'd').add(1, 'm').d.toISOString().should.equal('1988-05-12T00:00:00.000Z');
		reform('February 29, 1988 00:00 UTC').add(1, 'y').d.toISOString().should.equal('1989-02-28T00:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').add(3, 'h').d.toISOString().should.equal('1988-04-11T03:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').add(11, 'm').add(5, 'd').d.toISOString().should.equal('1989-03-16T00:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').add(3, 'm').add(5, 'd').add(10, 't').d.toISOString().should.equal('1988-07-16T00:10:00.000Z');
		reform('April 11, 1988 00:00 UTC').add(5, 'y').d.toISOString().should.equal('1993-04-11T00:00:00.000Z');
		reform('February 27, 1988 00:00 UTC').add(3, 'd').d.toISOString().should.equal('1988-03-01T00:00:00.000Z');
		reform('October 31, 2015 00:00 UTC').add(1, 'm').d.toISOString().should.equal('2015-11-30T00:00:00.000Z');
		reform('October 31, 2015 00:00 UTC').add(15, 'm').d.toISOString().should.equal('2017-01-31T00:00:00.000Z');
		reform('2015-10-31T04:56:14.877Z').add(123, 'l').d.toISOString().should.equal('2015-10-31T04:56:15.000Z');
		reform('2015-10-31T04:56:14.877Z').add(8, 's').d.toISOString().should.equal('2015-10-31T04:56:22.877Z');
		reform('2015-10-31T04:56:14.877Z').add(8, 't').d.toISOString().should.equal('2015-10-31T05:04:14.877Z');
		reform('2015-10-31T04:56:14.877Z').add(8, 'h').d.toISOString().should.equal('2015-10-31T12:56:14.877Z');
		reform('2015-10-31T04:56:14.877Z').add(8, 'd').d.toISOString().should.equal('2015-11-08T04:56:14.877Z');
		reform('2015-10-31T04:56:14.877Z').add(2, 'w').d.toISOString().should.equal('2015-11-14T04:56:14.877Z');
		reform('2015-10-31T04:56:14.877Z').add(8, 'w').d.toISOString().should.equal('2015-12-26T04:56:14.877Z');
	});
});
