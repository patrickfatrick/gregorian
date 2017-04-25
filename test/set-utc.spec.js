import test from 'ava'
import sinon from 'sinon'
import { setUTC } from '../src/modules/set-local-or-set-utc'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => setUTC('y', 1989)('1988-04-11T00:00:00.000Z'), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(setUTC('y', 1989)().toISOString(), '1989-05-22T00:00:00.000Z')
  clock.restore()
})

test('sets the year to the specified year', (t) => {
  t.is(setUTC('y')(1989)(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z')
})

test('sets the month to the specified month', (t) => {
  t.is(setUTC('m')(3)(t.context.date).toISOString(), '1988-03-11T00:00:00.000Z')
})

test('sets the week to the specified week', (t) => {
  t.is(setUTC('w')(15)(t.context.date).toISOString(), '1988-04-11T00:00:00.000Z')
})

test('sets the day to the specified day', (t) => {
  t.is(setUTC('d')(1)(t.context.date).toISOString(), '1988-04-01T00:00:00.000Z')
})

test('sets the day to the specified day of the week', (t) => {
  t.is(setUTC('e')(1)(t.context.date).toISOString(), '1988-04-10T00:00:00.000Z')
})

test('sets the hour to the specified hour', (t) => {
  t.is(setUTC('h')(3)(t.context.date).toISOString(), '1988-04-11T03:00:00.000Z')
})

test('sets the minute to the specified minute', (t) => {
  t.is(setUTC('t')(8)(t.context.date).toISOString(), '1988-04-11T00:08:00.000Z')
})

test('sets the second to the specified second', (t) => {
  t.is(setUTC('s')(8)(t.context.date).toISOString(), '1988-04-11T00:00:08.000Z')
})

test('sets the millisecond to the specified millisecond', (t) => {
  t.is(setUTC('l')(123)(t.context.date).toISOString(), '1988-04-11T00:00:00.123Z')
})

test('can be nested', (t) => {
  t.is(setUTC('d')(5)(setUTC('m')(11)(t.context.date)).toISOString(), '1988-11-05T00:00:00.000Z')
})

test('can be quasi-chained', (t) => {
  const setUTCFn = setUTC('d')(5)(setUTC('m')(11))
  t.is(setUTCFn(t.context.date).toISOString(), '1988-11-05T00:00:00.000Z')
})

test('can be composed', (t) => {
  const setUTCYearFn = setUTC('y')
  const setUTC1989Fn = setUTCYearFn(1989)
  t.is(setUTC1989Fn(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z')
})

test('can be run with all arguments at once', (t) => {
  t.is(setUTC('y')(1989, t.context.date).toISOString(), '1989-04-11T00:00:00.000Z')
})

test('can be run with varying arguments', (t) => {
  t.is(setUTC('y', 1989)(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z')
})

test('can handle leap years', (t) => {
  t.is(setUTC('d')(29)(t.context.date).toISOString(), '1988-04-29T00:00:00.000Z')
})

test('can handle months of varying lengths', (t) => {
  t.is(setUTC('m')(2)(t.context.date).toISOString(), '1988-02-11T00:00:00.000Z')
})
