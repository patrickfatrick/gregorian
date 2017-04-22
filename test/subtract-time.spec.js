import test from 'ava'
import sinon from 'sinon'
import { subtractTime } from '../src/modules/add-time-or-subtract-time'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => subtractTime('y')(1)('1988-04-11T00:00:00.000Z'), TypeError)
})

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => subtractTime('invalid')(1)(t.context.date), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(subtractTime('y')(1)().toISOString(), '1984-05-22T00:00:00.000Z')
  clock.restore()
})

test('subtracts years from the date', (t) => {
  t.is(subtractTime('y')(1)(t.context.date).toISOString(), '1987-04-11T00:00:00.000Z')
})

test('subtracts months from the date', (t) => {
  t.is(subtractTime('m')(12)(t.context.date).toISOString(), '1987-04-11T00:00:00.000Z')
})

test('subtracts weeks from the date', (t) => {
  t.is(subtractTime('w')(2)(t.context.date).toISOString(), '1988-03-28T00:00:00.000Z')
})

test('subtracts days from the date', (t) => {
  t.is(subtractTime('d')(1)(t.context.date).toISOString(), '1988-04-10T00:00:00.000Z')
})

test('subtracts hours from the date', (t) => {
  t.is(subtractTime('h')(3)(t.context.date).toISOString(), '1988-04-10T21:00:00.000Z')
})

test('subtracts minutes from the date', (t) => {
  t.is(subtractTime('t')(54)(t.context.date).toISOString(), '1988-04-10T23:06:00.000Z')
})

test('subtracts seconds from the date', (t) => {
  t.is(subtractTime('s')(54)(t.context.date).toISOString(), '1988-04-10T23:59:06.000Z')
})

test('subtracts milliseconds from the date', (t) => {
  t.is(subtractTime('l')(123)(t.context.date).toISOString(), '1988-04-10T23:59:59.877Z')
})

test('can be nested', (t) => {
  t.is(subtractTime('m')(1)(subtractTime('d')(1)(t.context.date)).toISOString(), '1988-03-10T00:00:00.000Z')
})

test('can be composed', (t) => {
  const subtractYearFn = subtractTime('y')
  const subtractOneYearFn = subtractYearFn(1)
  t.is(subtractOneYearFn(t.context.date).toISOString(), '1987-04-11T00:00:00.000Z')
})

test('can be run with all arguments at once', (t) => {
  t.is(subtractTime('y', 1, t.context.date).toISOString(), '1987-04-11T00:00:00.000Z')
})

test('can be run with varying arguments', (t) => {
  t.is(subtractTime('y', 1)(t.context.date).toISOString(), '1987-04-11T00:00:00.000Z')
})

test('can handle leap years', (t) => {
  t.is(subtractTime('m')(11)(t.context.date).toISOString(), '1987-05-11T00:00:00.000Z')
})

test('can handle months of varying lengths', (t) => {
  t.is(subtractTime('m')(15)(t.context.date).toISOString(), '1987-01-11T00:00:00.000Z')
})

test('is timezone-agnostic', (t) => {
  t.is(subtractTime('h')(4)(t.context.date).toISOString(), '1988-04-10T20:00:00.000Z')
})