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
	 expect(reform('April 11, 1988 8:23:15.123').restart('d').d.toISOString()).toBe('1988-04-11T06:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123').restart('w').d.toISOString()).toBe('1988-04-10T06:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123').restart('m').d.toISOString()).toBe('1988-04-01T07:00:00.000Z');
	 expect(reform('April 11, 1988 8:23:15.123').restart('y').d.toISOString()).toBe('1988-01-01T07:00:00.000Z');
 });
});