// __tests__/reform-test.js
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-date');

describe('reform', function () {
 it('converts an object (string, date, or number) to a gregorian object', function() {
	 var reform = require('../src/modules/reform');
   expect(reform('04/11/1988 00:00 UTC').d.toISOString()).toBe('1988-04-11T00:00:00.000Z');
	 expect(reform(new Date('04/11/1988 00:00 UTC')).d.toISOString()).toBe('1988-04-11T00:00:00.000Z');
	 expect(Date.parse(reform('September 25, 2015 00:00 UTC').d)).toBe(1443139200000);
	 expect(Date.parse(reform(1443139200000).d)).toBe(1443139200000);
	 expect(function(){reform('next Tuesday')}).toThrow(new TypeError('This is not a valid date'));
 });
});