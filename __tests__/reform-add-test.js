// __tests__/reform-add-test.js
jest.dontMock('../src/modules/reform-add');
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-to');

describe('reformAdd', function () {
 it('adds specified increments to the date', function () {
	 var reform = require('../src/modules/reform');
   expect(reform('April 11, 1988 00:00 UTC').add(1, 'd').d.toISOString()).toBe('1988-04-12T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').add(1, 'd').add(1, 'm').d.toISOString()).toBe('1988-05-12T00:00:00.000Z');
	 expect(reform('February 29, 1988 00:00 UTC').add(1, 'y').d.toISOString()).toBe('1989-02-28T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').add(3, 'h').d.toISOString()).toBe('1988-04-11T03:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').add(11, 'm').add(5, 'd').d.toISOString()).toBe('1989-03-16T00:00:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').add(3, 'm').add(5, 'd').add(10, 'min').d.toISOString()).toBe('1988-07-16T00:10:00.000Z');
	 expect(reform('April 11, 1988 00:00 UTC').add(5, 'y').d.toISOString()).toBe('1993-04-11T00:00:00.000Z');
	 expect(reform('February 27, 1988 00:00 UTC').add(3, 'd').d.toISOString()).toBe('1988-03-01T00:00:00.000Z');
	 expect(reform('October 31, 2015 00:00 UTC').add(1, 'm').d.toISOString()).toBe('2015-11-30T00:00:00.000Z');
	 expect(reform('October 31, 2015 00:00 UTC').add(15, 'm').d.toISOString()).toBe('2017-01-31T00:00:00.000Z');
 });
});