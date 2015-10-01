// test/reform-to-test.js
var should = require('chai').should();
var reform = require('../src/modules/reform');

describe('reformTo', function () {
	it('converts a date to a string with a specified format', function () {
		reform('April 11, 1988 07:45 UTC').to('unix').should.equal(576747900000);
		reform('April 11, 1988 07:45 UTC').to('iso').should.equal('1988-04-11T07:45:00.000Z');
		reform('April 11, 1988 00:00 UTC').to('iso-short').should.equal('1988-04-11');
		reform('09/25/2015 00:00 UTC -06:00').to('DD, yyyy-m-d hh:tt.ll+ap zz').should.equal('Friday, 2015-9-25 12:00.000am UTC -6:00');
		reform('09/25/2015 UTC -06:00').to('D, yy-mm#dd h:t.l#AP zz', '#').should.equal('Fri, 15-0925 12:0.0AM UTC -6:00');
		reform('09/25/2015 UTC -06:00').to('D#_#yy#_#mm#_#dd#_#h:t.l#AP#_#zz', '#').should.equal('Fri_15_09_25_12:0.0AM_UTC -6:00');
		reform('09/25/2015 UTC -06:00').to('DD, MM yyyy-m-d hh:tt.ll+ap zz').should.equal('Friday, September 2015-9-25 12:00.000am UTC -6:00');
		reform('09/25/2015 UTC -06:00').to('DD, M yyyy-m-d hh:tt.ll?ap zz', '?').should.equal('Friday, Sept 2015-9-25 12:00.000am UTC -6:00');
		reform('09/25/2015 23:59 UTC').to('DD, M yyyy-m-d H:tt:s.ll zz').should.equal('Friday, Sept 2015-9-25 17:59:0.000 UTC -6:00');
		reform('09/25/2015 01:00 UTC').to('DD, M yyyy-m-d H:tt:ss.ll zz').should.equal('Thursday, Sept 2015-9-24 19:00:00.000 UTC -6:00');
	});
});