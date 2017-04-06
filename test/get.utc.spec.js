import test from 'ava'
import gregorian from '../src/gregorian'

test('gets the UTC year for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('y'), 1988)
  t.is(gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('y'), 2016)
})

test('returns the UTC month of the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('m'), 1)
  t.is(gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('m'), 0)
})

test('returns the UTC week for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('w'), 8)
  t.is(gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('w'), 0)
})

test('returns the UTC date of the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('d'), 29)
  t.is(gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('d'), 1)
})

test('returns the UTC day of the week for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('D'), 1)
  t.is(gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('D'), 5)
})

test('returns the UTC hour for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('h'), 7)
  t.is(gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('h'), 0)
})

test('returns the UTC minute for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('t'), 0)
  t.is(gregorian.reform('2016-01-01T00:23:00.000Z').getUTC('t'), 23)
})

test('returns the UTC second for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('s'), 0)
  t.is(gregorian.reform('2016-01-01T00:23:14.000Z').getUTC('s'), 14)
})

test('returns the UTC millisecond for the specified date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('l'), 0)
  t.is(gregorian.reform('2016-01-01T00:23:14.184Z').getUTC('l'), 184)
})

test('returns a timezone offset of 0, always', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00:00').getUTC('z'), 0)
  t.is(gregorian.reform('2016-01-01T00:23:14.184Z').getUTC('z'), 0)
})
