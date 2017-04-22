import test from 'ava'
import sinon from 'sinon'
import { getLocal } from '../src/modules/get-local-or-get-utc'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => getLocal('y')('1988-04-11T00:00:00.000Z'), TypeError)
})

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => getLocal('invalid')(t.context.date), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(getLocal('y')(), 1985)
  clock.restore()
})

test('returns the year for the specified date', (t) => {
  t.is(getLocal('y')(t.context.date), 1988)
})

test('returns the month for the specified date', (t) => {
  t.is(getLocal('m')(t.context.date), 4)
})

test('returns the week for the specified date', (t) => {
  t.is(getLocal('w')(t.context.date), 14)
})

test('returns the date for the specified date', (t) => {
  t.is(getLocal('d')(t.context.date), 10)
})

test('returns the day of the week for the specified date', (t) => {
  t.is(getLocal('e')(t.context.date), 1)
})

test('returns the hour for the specified date', (t) => {
  t.is(getLocal('h')(t.context.date), 17)
})

test('returns the minute for the specified date', (t) => {
  t.is(getLocal('t')(t.context.date), 0)
})

test('returns the second for the specified date', (t) => {
  t.is(getLocal('s')(t.context.date), 0)
})

test('returns the millisecond for the specified date', (t) => {
  t.is(getLocal('l')(t.context.date), 0)
})

test('returns the time zone offset for the current locale, in hours', (t) => {
  t.is(getLocal('z')(t.context.date), -7)
})

test('returns the time zone offset for the current locale, in hours (positive)', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-840)

  t.is(getLocal('z')(t.context.date), 14)

  Date.prototype.getTimezoneOffset.restore()
})

test('can be composed', (t) => {
  const getLocalYearFn = getLocal('y')
  t.is(getLocalYearFn(t.context.date), 1988)
})

test('can be run with all arguments at once', (t) => {
  t.is(getLocal('y', t.context.date), 1988)
})
