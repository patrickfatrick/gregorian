// __tests__/reform-subtract-test.js
jest.dontMock('../src/modules/reform-subtract');
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-to');

describe('reformAdd', function () {
 it('adds specified increments to the date', function () {
	 var reform = require('../src/modules/reform');
   expect(reform('April 11, 1988 00:00 UTC').subtract(1, 'd').d.toISOString()).toBe('1988-04-10T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').subtract(1, 'd').subtract(1, 'm').d.toISOString()).toBe('1988-03-10T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').subtract(3, 'h').d.toISOString()).toBe('1988-04-10T21:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').subtract(11, 'm').subtract(5, 'd').d.toISOString()).toBe('1987-05-06T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').subtract(3, 'm').subtract(5, 'd').subtract(10, 'min').d.toISOString()).toBe('1988-01-05T23:50:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').subtract(12, 'm').d.toISOString()).toBe('1987-04-11T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').subtract(3, 'y').d.toISOString()).toBe('1985-04-11T00:00:00.000Z');
	 expect(reform('March 1, 1988 00:00 UTC').subtract(3, 'd').d.toISOString()).toBe('1988-02-27T00:00:00.000Z');
 });
});