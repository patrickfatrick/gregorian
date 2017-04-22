import test from 'ava'
import sinon from 'sinon'
import { resetLocal } from '../src/modules/reset-local-or-reset-utc'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T08:23:15.347Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => resetLocal('y')('1988-04-11T00:00:00.000Z'), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(resetLocal('y')().toISOString(), '1985-01-01T07:00:00.000Z')
  clock.restore()
})

test('sets the date/time to the start of the year', (t) => {
  t.is(resetLocal('y')(t.context.date).toISOString(), '1988-01-01T07:00:00.000Z')
})

test('sets the date/time to the start of the month', (t) => {
  t.is(resetLocal('m')(t.context.date).toISOString(), '1988-04-01T07:00:00.000Z')
})

test('sets the date/time to the start of the week', (t) => {
  t.is(resetLocal('w')(t.context.date).toISOString(), '1988-04-10T07:00:00.000Z')
})

test('sets the date/time to the start of the day', (t) => {
  t.is(resetLocal('d')(t.context.date).toISOString(), '1988-04-11T07:00:00.000Z')
})

test('sets the date/time to the start of the hour', (t) => {
  t.is(resetLocal('h')(t.context.date).toISOString(), '1988-04-11T08:00:00.000Z')
})

test('sets the date/time to the start of the minute', (t) => {
  t.is(resetLocal('t')(t.context.date).toISOString(), '1988-04-11T08:23:00.000Z')
})

test('sets the date/time to the start of the second', (t) => {
  t.is(resetLocal('s')(t.context.date).toISOString(), '1988-04-11T08:23:15.000Z')
})

test('can be composed', (t) => {
  const resetLocalYearFn = resetLocal('y')
  t.is(resetLocalYearFn(t.context.date).toISOString(), '1988-01-01T07:00:00.000Z')
})

test('can be composed', (t) => {
  t.is(resetLocal('y', t.context.date).toISOString(), '1988-01-01T07:00:00.000Z')
})
