// __tests__/reform-to-test.js
jest.dontMock('../src/modules/reform');
jest.dontMock('../src/modules/reform-to');
jest.dontMock('../src/modules/reform-date');
jest.dontMock('../src/modules/reform-yyyy');
jest.dontMock('../src/modules/reform-yy');
jest.dontMock('../src/modules/reform-mmm');
jest.dontMock('../src/modules/reform-mm');
jest.dontMock('../src/modules/reform-_mmm_');
jest.dontMock('../src/modules/reform-_mm_');
jest.dontMock('../src/modules/reform-ddd');
jest.dontMock('../src/modules/reform-dd');
jest.dontMock('../src/modules/reform-_ddd_');
jest.dontMock('../src/modules/reform-_dd_');
jest.dontMock('../src/modules/reform-hhh');
jest.dontMock('../src/modules/reform-hh');
jest.dontMock('../src/modules/reform-_hhh_');
jest.dontMock('../src/modules/reform-_hh_');
jest.dontMock('../src/modules/reform-ttt');
jest.dontMock('../src/modules/reform-tt');
jest.dontMock('../src/modules/reform-ap');
jest.dontMock('../src/modules/reform-_ap_');
jest.dontMock('../src/modules/reform-sss');
jest.dontMock('../src/modules/reform-ss');
jest.dontMock('../src/modules/reform-mll');
jest.dontMock('../src/modules/reform-ml');
jest.dontMock('../src/modules/reform-zz');
jest.dontMock('../src/modules/reform-unix');
jest.dontMock('../src/modules/reform-utc');
jest.dontMock('../src/modules/reform-iso');


describe('reformTo', function () {
	it('converts a date to a string with a specified format', function () {
		var reform = require('../src/modules/reform');
		expect(reform('April 11, 1988 07:45 UTC').to('unix')).toBe(576747900000);
		expect(reform('April 11, 1988 07:45 UTC').to('iso')).toBe('1988-04-11T07:45:00.000Z');
		expect(reform('April 11, 1988 00:00 UTC').to('iso-short')).toBe('1988-04-11');
		expect(reform('09/25/2015 00:00 UTC -06:00').to('DDD, yyyy-mm-dd hhh:ttt.mllap zz')).toBe('Friday, 2015-9-25 12:00.000am UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('DD, yy-mmm-ddd hh:tt.mlAP zz')).toBe('Fri, 15-09-25 12:0.0AM UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('DDD, MMM yyyy-mm-dd hhh:ttt.mllap zz')).toBe('Friday, September 2015-9-25 12:00.000am UTC -6:00');
		expect(reform('09/25/2015 UTC -06:00').to('DDD, MM yyyy-mm-dd hhh:ttt.mllap zz')).toBe('Friday, Sept 2015-9-25 12:00.000am UTC -6:00');
		expect(reform('09/25/2015 23:59 UTC').to('DDD, MM yyyy-mm-dd HH:ttt:ss.mll zz')).toBe('Friday, Sept 2015-9-25 17:59:0.000 UTC -6:00');
		expect(reform('09/25/2015 01:00 UTC').to('DDD, MM yyyy-mm-dd HH:ttt:sss.mll zz')).toBe('Thursday, Sept 2015-9-24 19:00:00.000 UTC -6:00');
	});
});