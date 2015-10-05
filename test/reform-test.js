// test/reform-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('reform', () => {
 it('converts an object (string, date, or number) to a gregorian object', () => {
   reform('04/11/1988 00:00 UTC').d.toISOString().should.equal('1988-04-11T00:00:00.000Z');
	 reform(new Date('04/11/1988 00:00 UTC')).d.toISOString().should.equal('1988-04-11T00:00:00.000Z');
	 Date.parse(reform('September 25, 2015 00:00 UTC').d).should.equal(1443139200000);
	 Date.parse(reform(1443139200000).d).should.equal(1443139200000);
	 (() => {reform('next Tuesday')}).should.throw(TypeError);
 });
});