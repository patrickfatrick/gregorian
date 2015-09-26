// __tests__/reform-date-test.js
jest.dontMock('../src/modules/reform-date');

describe('reformDate', function () {
 it('converts a string to a date object', function() {
	 var reformDate = require('../src/modules/reform-date');
   expect(reformDate('04/11/1988 00:00 UTC').toISOString()).toBe('1988-04-11T00:00:00.000Z');
 });
});