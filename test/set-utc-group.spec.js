import test from 'ava'
import sinon from 'sinon'
import { setUTCGroup } from '../src'

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z')
})

test('errors out if invalid date passed in', (t) => {
  t.throws(() => setUTCGroup({ y: 1989 })('1988-04-11T00:00:00.000Z'), TypeError)
})

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => setUTCGroup({ invalid: 1989 })(t.context.date), TypeError)
})

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'))
  t.is(setUTCGroup({ y: 1989 })().toISOString(), '1989-05-22T00:00:00.000Z')
  clock.restore()
})

test('applies multiple set operations', (t) => {
  t.is(setUTCGroup({ y: 1985, m: 5, d: 22 })(t.context.date).toISOString(), '1985-05-22T00:00:00.000Z')
})

test('can be quasi-chained', (t) => {
  const setUTCGroupFn = setUTCGroup({ y: 1985 })(setUTCGroup({ m: 5, d: 22 }))
  t.is(setUTCGroupFn(t.context.date).toISOString(), '1985-05-22T00:00:00.000Z')
})
