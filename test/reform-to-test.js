// test/reform-to-test.js
import chai from 'chai';
import reform from '../src/modules/reform';

chai.should();
describe('reformTo', () => {
	it('converts a date to a string with a specified format', () => {
		reform('April 11, 1988 07:45 UTC').to('unix').should.equal(576747900000);
		reform('April 11, 1988 07:45 UTC').to('iso').should.equal('1988-04-11T07:45:00.000Z');
		reform('April 11, 1988 07:45 UTC').to('utc iso').should.equal('Mon, 11 Apr 1988 07:45:00 GMT');
		reform('April 11, 1988 00:00 UTC').to('iso-short').should.equal('1988-04-11');
		reform('09/25/2015 00:00').to('DD, yyyy-m-d hh:tt.ll+ap').should.equal('Friday, 2015-9-25 12:00.000am');
		reform('09/25/2015').to('D, yy-mm#dd h:t.l#AP', '#').should.equal('Fri, 15-0925 12:0.0AM');
		reform('09/25/2015').to('D#_#yy#_#mm#_#dd#_#h:t.l#AP#', '#').should.equal('Fri_15_09_25_12:0.0AM');
		reform('09/25/2015').to('DD, MM yyyy-m-d hh:tt.ll+ap').should.equal('Friday, September 2015-9-25 12:00.000am');
		reform('09/25/2015').to('DD, M yyyy-m-d hh:tt.ll?ap', '?').should.equal('Friday, Sept 2015-9-25 12:00.000am');
		reform('09/25/2015 23:59').to('DD, M yyyy-m-d H:tt:s.ll').should.equal('Friday, Sept 2015-9-25 23:59:0.000');
		reform('09/25/2015 01:00').to('DD, M yyyy-m-d H:tt:ss.ll').should.equal('Friday, Sept 2015-9-25 1:00:00.000');
	});
});