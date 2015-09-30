// __tests__/reform-to-unix-test.js
jest.dontMock('../src/modules/reform-to-unix');

describe('reformUnix', function () {
 it('converts a string to a unix timestamp', function () {
	 var reformUnix = require('../src/modules/reform-to-unix');
   expect(reformUnix(new Date('April 11, 1988 00:00 UTC'))).toBe(576720000000);
 });
});