import test from 'ava'
import sinon from 'sinon'
import { getUTC } from '../src'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => getUTC('y')('1988-04-11T00:00:00.000Z'), TypeError)
})

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => getUTC('invalid')(t.context.date), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(getUTC('y')(), 1985)
  clock.restore()
})

test('returns the year for the specified date', (t) => {
  t.is(getUTC('y')(t.context.date), 1988)
})

test('returns the month for the specified date', (t) => {
  t.is(getUTC('m')(t.context.date), 4)
})

test('returns the week for the specified date', (t) => {
  t.is(getUTC('w')(t.context.date), 14)
})

test('returns the date for the specified date', (t) => {
  t.is(getUTC('d')(t.context.date), 11)
})

test('returns the day of the week for the specified date', (t) => {
  t.is(getUTC('e')(t.context.date), 2)
})

test('returns the hour for the specified date', (t) => {
  t.is(getUTC('h')(t.context.date), 0)
})

test('returns the minute for the specified date', (t) => {
  t.is(getUTC('t')(t.context.date), 0)
})

test('returns the second for the specified date', (t) => {
  t.is(getUTC('s')(t.context.date), 0)
})

test('returns the millisecond for the specified date', (t) => {
  t.is(getUTC('l')(t.context.date), 0)
})

test('returns the time zone offset for the current locale, in hours (positive)', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(0)

  t.is(getUTC('z')(t.context.date), 0)

  Date.prototype.getTimezoneOffset.restore()
})

test('can be composed', (t) => {
  const getUTCYearFn = getUTC('y')
  t.is(getUTCYearFn(t.context.date), 1988)
})

test('can be run with all arguments at once', (t) => {
  t.is(getUTC('y', t.context.date), 1988)
})
