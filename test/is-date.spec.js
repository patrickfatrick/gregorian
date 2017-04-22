import test from 'ava'
import isDate from '../src/modules/is-date'

test('returns false if string passed', (t) => {
  t.false(isDate('invalid'))
})

test('returns false if iso string passed', (t) => {
  t.false(isDate('1988-04-11T00:00:00.000Z'))
})

test('returns false if number passed in', (t) => {
  t.false(isDate(1234567))
})

test('returns true when valid date passed in', (t) => {
  t.true(isDate(new Date('1988-04-11T00:00:00.000Z')))
})
