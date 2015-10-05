// test/reform-date-test.js
import chai from 'chai';
import reformDate from '../src/modules/reform-date';

chai.should();
describe('reformDate', () => {
 it('converts a string to a date object', () => { 
   reformDate('04/11/1988 00:00 UTC').toISOString().should.equal('1988-04-11T00:00:00.000Z');
 });
});