import test from 'ava'
import sinon from 'sinon'
import { reform } from '../src'

test('errors out if invalid date passed in', (t) => {
  t.throws(() => reform('E, N o, Y H:T:S.L')('1988-04-11T00:00:00.000Z'), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(reform('E, N o, Y H:T:S.L')(), 'Tuesday, May 21st, 1985 17:00:00.000')
  clock.restore()
})

test('converts a date to a string with a specified format', (t) => {
  t.is(reform('E, Y-m-d G:T.L|p')(new Date('09/25/2015 00:00')), 'Friday, 2015-9-25 12:00.000am')
  t.is(reform('E, N Y-m-d G:T.L|p')(new Date('09/25/2015 01:00')), 'Friday, September 2015-9-25 01:00.000am')
  t.is(reform('E, n Y-m-d h:T:s.L')(new Date('09/25/2015 23:59')), 'Friday, Sept 2015-9-25 23:59:0.000')
  t.is(reform('E, n Y-m-d g:T:s.l|P')(new Date('09/25/2015 23:59:00')), 'Friday, Sept 2015-9-25 11:59:0.0PM')
  t.is(reform('E, n Y-m-d G:T:s.L|p')(new Date('09/25/2015 23:59:00')), 'Friday, Sept 2015-9-25 11:59:0.000pm')
  t.is(reform('E, n Y-m-d G:T:S.L')(new Date('09/25/2015 01:00:00')), 'Friday, Sept 2015-9-25 01:00:00.000')
  t.is(reform('E, N Y-m-d G:T:S.L z')(new Date('10/25/2015 01:00:00')), 'Sunday, October 2015-10-25 01:00:00.000 UTC-07:00')
})

test('converts a date using local time', (t) => {
  t.is(reform('E, N o, Y H:T:S.L')(new Date('1988-04-11T12:45:00.000Z')), 'Monday, April 11th, 1988 05:45:00.000')
})

test('handles positive two-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-840)

  t.is(reform('z')(new Date()), 'UTC+14:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles positive single-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-420)

  t.is(reform('z')(new Date()), 'UTC+07:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles negative two-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(720)

  t.is(reform('z')(new Date()), 'UTC-12:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles negative single-digit timezone offsets', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(420)

  t.is(reform('z')(new Date()), 'UTC-07:00')

  Date.prototype.getTimezoneOffset.restore()
})

test('handles being mixed in with regular words', (t) => {
  t.is(reform('e, the o of N, Y')(new Date('04/01/1988')), 'Fri, the 1st of April, 1988')
  t.is(reform('E, the o of n, Y')(new Date('04/22/1988')), 'Friday, the 22nd of Apr, 1988')
  t.is(reform('E, the o of N, Y')(new Date('10/23/2015')), 'Friday, the 23rd of October, 2015')
  t.is(reform('E, the o of N, Y')(new Date('10/25/2015')), 'Sunday, the 25th of October, 2015')
})

test.skip('allows for the customization of the delimiter used', (t) => {
  t.is(reform('e, y-M#d g:t.l#P', '#')(new Date('09/25/2015')), 'Fri, 15-0925 12:0.0AM')
  t.is(reform('e#_#y#_#M#_#d#_#g:t.l#P#', '#')(new Date('09/25/2015')), 'Fri_15_09_25_12:0.0AM')
  t.is(reform('E, n Y-m-d H:T.L?p', '?')(new Date('09/25/2015')), 'Friday, Sept 2015-9-25 00:00.000am')
})

test('converts a date to a unix timestamp', (t) => {
  t.is(reform('unix')(new Date('April 11, 1988 07:45 UTC')), 576747900000)
})

test('converts a date to an ISO string', (t) => {
  t.is(reform('iso')(new Date('April 11, 1988 07:45 UTC')), '1988-04-11T07:45:00.000Z')
  t.is(reform('iso-short')(new Date('April 11, 1988 00:00 UTC')), '1988-04-11')
})

test('ignores everything after the first plug-n-play format', (t) => {
  t.is(reform('utc iso')(new Date('April 11, 1988 07:45 UTC')), 'Mon, 11 Apr 1988 07:45:00 GMT')
})

test('converts a date to an ISO string', (t) => {
  t.is(reform('iso')(new Date('April 11, 1988 00:00 UTC')), '1988-04-11T00:00:00.000Z')
})

test('converts a date to a shortened ISO string', (t) => {
  t.is(reform('iso-short')(new Date('April 11, 1988 00:00 UTC')), '1988-04-11')
})

test('converts a date to a unix timestamp', (t) => {
  t.is(reform('unix')(new Date('April 11, 1988 07:45 UTC')), 576747900000)
})

test('converts a date to a UTC string', (t) => {
  t.is(reform('utc')(new Date('April 11, 1988 00:00 UTC')), 'Mon, 11 Apr 1988 00:00:00 GMT')
})

test('converts a date to a shortened UTC string', (t) => {
  t.is(reform('utc-short')(new Date('April 11, 1988 00:00 UTC')), 'Mon, 11 Apr 1988')
})

test('can be composed', (t) => {
  const reformFn = reform('E, N o, Y H:T:S.L')
  t.is(reformFn(new Date('1988-04-11T12:45:00.000Z')), 'Monday, April 11th, 1988 05:45:00.000')
})

test('can be run with all arguments at once', (t) => {
  t.is(reform('E, N o, Y H:T:S.L', new Date('1988-04-11T12:45:00.000Z')), 'Monday, April 11th, 1988 05:45:00.000')
})
