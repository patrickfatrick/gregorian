import test from 'ava'
import sinon from 'sinon'
import { setLocalGroup } from '../src'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => setLocalGroup({ y: 1989 })('1988-04-11T00:00:00.000Z'), TypeError)
})

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => setLocalGroup({ invalid: 1989 })(t.context.date), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(setLocalGroup({ y: 1989 })().toISOString(), '1989-05-22T00:00:00.000Z')
  clock.restore()
})

test('applies multiple set operations', (t) => {
  t.is(setLocalGroup({ y: 1985, m: 5, d: 22 })(t.context.date).toISOString(), '1985-05-23T00:00:00.000Z')
})

test('can be quasi-chained', (t) => {
  const setLocalGroupFn = setLocalGroup({ y: 1985 })(setLocalGroup({ m: 5, d: 22 }))
  t.is(setLocalGroupFn(t.context.date).toISOString(), '1985-05-23T00:00:00.000Z')
})
