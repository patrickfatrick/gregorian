import test from 'ava'
import sinon from 'sinon'
import { subtractTimeSequence } from '../src/modules/add-time-or-subtract-time'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => subtractTimeSequence([ [ 'y', 1 ] ])('1988-04-11T00:00:00.000Z'), TypeError)
})

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => subtractTimeSequence([ [ 'invalid', 1 ] ])(t.context.date), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(subtractTimeSequence([ [ 'y', 1 ], [ 's', 100 ] ])().toISOString(), '1984-05-21T23:58:20.000Z')
  clock.restore()
})

test('sequence', (t) => {
  t.is(subtractTimeSequence([
    [ 'm', 11 ],
    [ 'd', 5 ],
    [ 'h', -6 ]
  ])(t.context.date).toISOString(), '1987-05-06T06:00:00.000Z')
})
