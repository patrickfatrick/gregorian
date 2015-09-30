// __tests__/reform-to-iso-test.js
jest.dontMock('../src/modules/reform-to-iso');

describe('reformISO', function () {
 it('converts a string to an ISO string', function () {
	 var reformISO = require('../src/modules/reform-to-iso');
   expect(reformISO(new Date('April 11, 1988 00:00 UTC'))).toBe('1988-04-11T00:00:00.000Z');
	 expect(reformISO(new Date('April 11, 1988 00:00 UTC'), 'short')).toBe('1988-04-11');
 });
});