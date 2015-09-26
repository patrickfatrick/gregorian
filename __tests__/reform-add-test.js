// __tests__/reform-unix-test.js
jest.dontMock('../src/modules/reform-add');
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-to');

describe('reformAdd', function () {
 it('adds specified increments to the date', function () {
	 var reform = require('../src/modules/reform');
   expect(Date.parse(reform('April 11, 1988 00:00 UTC').add(1, 'd').d)).toBe(576806400000);
	 expect(Date.parse(reform('April 11, 1988 00:00 UTC').add(1, 'd').add(1, 'm').d)).toBe(579434400000);
	 expect(Date.parse(reform('April 11, 1988 00:00 UTC').add(3, 'h').d)).toBe(576730800000);
 });
});