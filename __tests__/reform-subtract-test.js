// __tests__/reform-unix-test.js
jest.dontMock('../src/modules/reform-subtract');
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-to');

describe('reformAdd', function () {
 it('adds specified increments to the date', function () {
	 var reform = require('../src/modules/reform');
   expect(Date.parse(reform('April 11, 1988 00:00 UTC').subtract(1, 'd').d)).toBe(576633600000);
	 expect(Date.parse(reform('April 11, 1988 00:00 UTC').subtract(1, 'd').subtract(1, 'm').d)).toBe(574005600000);
	 expect(Date.parse(reform('April 11, 1988 00:00 UTC').subtract(3, 'h').d)).toBe(576709200000);
 });
});