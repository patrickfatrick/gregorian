// test/reform-set-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('set', () => {
	it('sets specified increments to the value provided', () => {
		reform('April 11, 1988 00:00 UTC').set(1, 'd').d.toISOString().should.equal('1988-04-01T00:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').set(15, 'd').set(3, 'm').d.toISOString().should.equal('1988-03-15T00:00:00.000Z');
		reform('February 29, 1988 00:00 UTC').set(1989, 'y').d.toISOString().should.equal('1989-02-28T00:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').set(3, 'h').d.toISOString().should.equal('1988-04-11T03:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').set(11, 'm').set(5, 'd').d.toISOString().should.equal('1988-11-05T00:00:00.000Z');
		reform('April 11, 1988 00:00 UTC').set(3, 'm').set(5, 'd').set(10, 't').d.toISOString().should.equal('1988-03-05T00:10:00.000Z');
		reform('April 11, 1988 00:00 UTC').set(1993, 'y').d.toISOString().should.equal('1993-04-11T00:00:00.000Z');
		reform('February 27, 1988 00:00 UTC').set(29, 'd').d.toISOString().should.equal('1988-02-29T00:00:00.000Z');
		reform('October 31, 2015 00:00 UTC').set(11, 'm').d.toISOString().should.equal('2015-11-30T00:00:00.000Z');
		reform('October 31, 2015 00:00 UTC').set(15, 'm').d.toISOString().should.equal('2016-03-31T00:00:00.000Z');
		reform('2015-10-31T04:56:14.877Z').set(123, 'l').d.toISOString().should.equal('2015-10-31T04:56:14.123Z');
		reform('2015-10-31T04:56:14.877Z').set(8, 's').d.toISOString().should.equal('2015-10-31T04:56:08.877Z');
		reform('2015-10-31T04:56:14.877Z').set(8, 't').d.toISOString().should.equal('2015-10-31T04:08:14.877Z');
		reform('2015-10-31T04:56:14.877Z').set(8, 'h').d.toISOString().should.equal('2015-10-31T08:56:14.877Z');
		reform('2015-10-31T04:56:14.877Z').set(8, 'd').d.toISOString().should.equal('2015-10-08T04:56:14.877Z');
		reform('2015-10-31T04:56:14.877Z').set(15, 'w').d.toISOString().should.include('2015-04-18T04:56:14.');
		reform('2015-10-31T04:56:14.877Z').set(48, 'w').d.toISOString().should.include('2015-12-05T04:56:14.');
		reform('2015-10-31T04:56:14.877Z').set(8, 'w').d.toISOString().should.include('2015-02-28T04:56:14.');
	});
});
