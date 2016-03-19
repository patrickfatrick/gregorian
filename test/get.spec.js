import test from 'ava'
import sinon from 'sinon'
import gregorian from '../src/gregorian'

test('returns the year for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('y'), 1988)
  t.same(gregorian.reform('2016-01-01T00:00:00.000Z').get('y'), 2015)
})

test('returns the month for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('m'), 1)
  t.same(gregorian.reform('2016-01-01T00:00:00.000Z').get('m'), 11)
})

test('returns the week for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('w'), 8)
  t.same(gregorian.reform('2016-01-01T00:00:00.000Z').get('w'), 52)
})

test('returns the date for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('d'), 29)
  t.same(gregorian.reform('2016-01-01T00:00:00.000Z').get('d'), 31)
})

test('returns the day of the week for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('D'), 1)
  t.same(gregorian.reform('2016-01-01T00:00:00.000Z').get('D'), 4)
})

test('returns the hour for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('h'), 0)
  t.same(gregorian.reform('2016-01-01T00:00:00.000Z').get('h'), 17)
})

test('returns the minute for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('t'), 0)
  t.same(gregorian.reform('2016-01-01T00:23:00.000Z').get('t'), 23)
})

test('returns the second for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('s'), 0)
  t.same(gregorian.reform('2016-01-01T00:23:14.000Z').get('s'), 14)
})

test('returns the millisecond for the specified date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('l'), 0)
  t.same(gregorian.reform('2016-01-01T00:23:14.184Z').get('l'), 184)
})

test('returns the time zone offset for the current locale, in hours', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00:00').get('z'), -7)
  t.same(gregorian.reform('2016-01-01T00:23:14.184Z').get('z'), -7)
})

test('returns the time zone offset for the current locale, in hours (positive)', (t) => {
  sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-840)

  t.same(gregorian.reform('February 29, 1988 00:00:00').get('z'), 14)
  t.same(gregorian.reform('2016-01-01T00:23:14.184Z').get('z'), 14)

  Date.prototype.getTimezoneOffset.restore()
})
