import test from 'ava'
import sinon from 'sinon'
import gregorian from '../src/gregorian'

test('converts a date to a string with a specified format', (t) => {
  t.same(gregorian.reform('09/25/2015 00:00').to('DD, yyyy-m-d hh:tt.ll|ap'), 'Friday, 2015-9-25 12:00.000am')
  t.same(gregorian.reform('09/25/2015 01:00').to('DD, MM yyyy-m-d hh:tt.ll|ap'), 'Friday, September 2015-9-25 01:00.000am')
  t.same(gregorian.reform('09/25/2015 23:59').to('DD, M yyyy-m-d H:tt:s.ll'), 'Friday, Sept 2015-9-25 23:59:0.000')
  t.same(gregorian.reform('09/25/2015 23:59:00').to('DD, M yyyy-m-d h:tt:s.l|AP'), 'Friday, Sept 2015-9-25 11:59:0.0PM')
  t.same(gregorian.reform('09/25/2015 23:59:00').to('DD, M yyyy-m-d hh:tt:s.ll|ap'), 'Friday, Sept 2015-9-25 11:59:0.000pm')
  t.same(gregorian.reform('09/25/2015 01:00').to('DD, M yyyy-m-d H:tt:ss.ll'), 'Friday, Sept 2015-9-25 1:00:00.000')
  t.same(gregorian.reform('10/25/2015 01:00').to('DD, MM yyyy-mm-d H:tt:ss.ll zz'), 'Sunday, October 2015-10-25 1:00:00.000 UTC-07:00')
})

test('handles positive two-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-840)

  t.same(gregorian.reform().to('zz'), 'UTC+14:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles positive single-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-420)

  t.same(gregorian.reform().to('zz'), 'UTC+07:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles negative two-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(720)

  t.same(gregorian.reform().to('zz'), 'UTC-12:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles negative single-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(420)

  t.same(gregorian.reform().to('zz'), 'UTC-07:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles being mixed in with regular words', (t) => {
  t.same(gregorian.reform('04/01/1988').to('D, the dt of MM, yyyy'), 'Fri, the 1st of April, 1988')
  t.same(gregorian.reform('04/22/1988').to('DD, the dt of M, yyyy'), 'Friday, the 22nd of Apr, 1988')
  t.same(gregorian.reform('10/23/2015').to('DD, the dt of MM, yyyy'), 'Friday, the 23rd of October, 2015')
  t.same(gregorian.reform('10/25/2015').to('DD, the dt of MM, yyyy'), 'Sunday, the 25th of October, 2015')
})

test('allows for the customization of the delimiter used', (t) => {
  t.same(gregorian.reform('09/25/2015').to('D, yy-mm#dd h:t.l#AP', '#'), 'Fri, 15-0925 12:0.0AM')
  t.same(gregorian.reform('09/25/2015').to('D#_#yy#_#mm#_#dd#_#h:t.l#AP#', '#'), 'Fri_15_09_25_12:0.0AM')
  t.same(gregorian.reform('09/25/2015').to('DD, M yyyy-m-d HH:tt.ll?ap', '?'), 'Friday, Sept 2015-9-25 00:00.000am')
})

test('converts a date to a unix timestamp', (t) => {
  t.same(gregorian.reform('April 11, 1988 07:45 UTC').to('unix'), 576747900000)
})

test('converts a date to an ISO string', (t) => {
  t.same(gregorian.reform('April 11, 1988 07:45 UTC').to('iso'), '1988-04-11T07:45:00.000Z')
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').to('iso-short'), '1988-04-11')
})

test('ignores everything after the first plug-n-play format', (t) => {
  t.same(gregorian.reform('April 11, 1988 07:45 UTC').to('utc iso'), 'Mon, 11 Apr 1988 07:45:00 GMT')
})
