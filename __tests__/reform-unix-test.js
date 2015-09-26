// __tests__/reform-unix-test.js
jest.dontMock('../src/modules/reform-unix');

describe('reformUnix', function () {
 it('converts a string to a unix timestamp', function () {
	 var reformUnix = require('../src/modules/reform-unix');
   expect(reformUnix(new Date('April 11, 1988 00:00 UTC'))).toBe(576720000000);
 });
});