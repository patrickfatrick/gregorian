// __tests__/reform-restart-test.js
jest.dontMock('../src/modules/reform-restart');
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-to');

describe('reformRestart', function () {
 it('sets the date and time to the start of the specified increment', function () {
	 var reform = require('../src/modules/reform');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('s').d.toISOString()).toBe('1988-04-11T08:23:15.000Z');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('t').d.toISOString()).toBe('1988-04-11T08:23:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('h').d.toISOString()).toBe('1988-04-11T08:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('d').d.toISOString()).toBe('1988-04-11T00:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('w').d.toISOString()).toBe('1988-04-10T00:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('m').d.toISOString()).toBe('1988-04-01T00:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123 UTC').restart('y').d.toISOString()).toBe('1988-01-01T00:00:00.000Z');
 });
});