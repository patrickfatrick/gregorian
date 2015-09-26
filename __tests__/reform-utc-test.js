// __tests__/reform-iso-test.js
jest.dontMock('../src/modules/reform-utc');

describe('reformUTC', function () {
 it('converts a string to a UTC string', function () {
	 var reformUTC = require('../src/modules/reform-utc');
   expect(reformUTC(new Date('April 11, 1988 00:00 UTC'))).toBe('Mon, 11 Apr 1988 00:00:00 GMT');
	 expect(reformUTC(new Date('April 11, 1988 00:00 UTC'), 'short')).toBe('Mon, 11 Apr 1988');
 });
});