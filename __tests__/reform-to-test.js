// __tests__/reform-to-test.js
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-to');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-to-yyyy');
jest.dontMock('../src/modules/reform-to-yy');
jest.dontMock('../src/modules/reform-to-mm');
jest.dontMock('../src/modules/reform-to-m');
jest.dontMock('../src/modules/reform-to-_mm_');
jest.dontMock('../src/modules/reform-to-_m_');
jest.dontMock('../src/modules/reform-to-dd');
jest.dontMock('../src/modules/reform-to-d');
jest.dontMock('../src/modules/reform-to-_dd_');
jest.dontMock('../src/modules/reform-to-_d_');
jest.dontMock('../src/modules/reform-to-hh');
jest.dontMock('../src/modules/reform-to-h');
jest.dontMock('../src/modules/reform-to-_hh_');
jest.dontMock('../src/modules/reform-to-_h_');
jest.dontMock('../src/modules/reform-to-tt');
jest.dontMock('../src/modules/reform-to-t');
jest.dontMock('../src/modules/reform-to-ap');
jest.dontMock('../src/modules/reform-to-_ap_');
jest.dontMock('../src/modules/reform-to-ss');
jest.dontMock('../src/modules/reform-to-s');
jest.dontMock('../src/modules/reform-to-ll');
jest.dontMock('../src/modules/reform-to-l');
jest.dontMock('../src/modules/reform-to-zz');
jest.dontMock('../src/modules/reform-to-unix');
jest.dontMock('../src/modules/reform-to-utc');
jest.dontMock('../src/modules/reform-to-iso');


describe('reformTo', function () {
	it('converts a date to a string with a specified format', function () {
		var reform = require('../src/modules/reform');
		expect(reform('April 11, 1988 07:45 UTC').to('unix')).toBe(576747900000);
		expect(reform('April 11, 1988 07:45 UTC').to('iso')).toBe('1988-04-11T07:45:00.000Z');
		expect(reform('April 11, 1988 00:00 UTC').to('iso-short')).toBe('1988-04-11');
		expect(reform('09/25/2015 00:00 UTC -06:00').to('DD, yyyy-m-d hh:tt.ll+ap zz')).toBe('Friday, 2015-9-25 12:00.000am UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('D, yy-mm#dd h:t.l#AP zz', '#')).toBe('Fri, 15-0925 12:0.0AM UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('D#_#yy#_#mm#_#dd#_#h:t.l#AP#_#zz', '#')).toBe('Fri_15_09_25_12:0.0AM_UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('DD, MM yyyy-m-d hh:tt.ll+ap zz')).toBe('Friday, September 2015-9-25 12:00.000am UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('DD, M yyyy-m-d hh:tt.ll?ap zz', '?')).toBe('Friday, Sept 2015-9-25 12:00.000am UTC -6:00');
		expect(reform('09/25/2015 23:59 UTC').to('DD, M yyyy-m-d H:tt:s.ll zz')).toBe('Friday, Sept 2015-9-25 17:59:0.000 UTC -6:00');
		expect(reform('09/25/2015 01:00 UTC').to('DD, M yyyy-m-d H:tt:ss.ll zz')).toBe('Thursday, Sept 2015-9-24 19:00:00.000 UTC -6:00');
	});
});