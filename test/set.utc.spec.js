import test from 'ava'
import gregorian from '../src/gregorian'

test('sets the year to the specified year', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00 UTC').setUTC(1989, 'y').d.toISOString(), '1989-02-28T00:00:00.000Z')
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').setUTC(1993, 'y').d.toISOString(), '1993-04-11T00:00:00.000Z')
})

test('sets the month to the specified month', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00').setUTC(3, 'm').d.toISOString(), '1988-03-11T07:00:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(3, 'm').d.toISOString(), '2015-03-31T04:56:14.877Z')
})

test('sets the week to the specified week', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(15, 'w').d.toISOString(), '2015-04-18T04:56:14.877Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(48, 'w').d.toISOString(), '2015-12-05T04:56:14.877Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 'w').d.toISOString(), '2015-02-28T04:56:14.877Z')
})

test('sets the day to the specified day', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00').setUTC(1, 'd').d.toISOString(), '1988-04-01T07:00:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 'd').d.toISOString(), '2015-10-08T04:56:14.877Z')
})

test('sets the day to the specified UTC day of the week', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00:00').setUTC(0, 'D').d.toISOString(), '1988-04-10T07:00:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(2, 'D').d.toISOString(), '2015-10-27T04:56:14.877Z')
})

test('sets the hour to the specified hour', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00').setUTC(3, 'h').d.toISOString(), '1988-04-11T03:00:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 'h').d.toISOString(), '2015-10-31T08:56:14.877Z')
})

test('sets the minute to the specified minute', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 't').d.toISOString(), '2015-10-31T04:08:14.877Z')
})

test('sets the second to the specified second', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 's').d.toISOString(), '2015-10-31T04:56:08.877Z')
})

test('sets the millisecond to the specified millisecond', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(123, 'l').d.toISOString(), '2015-10-31T04:56:14.123Z')
})

test('is chainable', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').setUTC(11, 'm').setUTC(5, 'd').d.toISOString(), '1988-11-05T00:00:00.000Z')
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').setUTC(3, 'm').setUTC(5, 'd').setUTC(10, 't').d.toISOString(), '1988-03-05T00:10:00.000Z')
})

test('can handle leap years', (t) => {
  t.same(gregorian.reform('February 27, 1988 00:00 UTC').setUTC(29, 'd').d.toISOString(), '1988-02-29T00:00:00.000Z')
  t.same(gregorian.reform('February 29, 1988 00:00 UTC').setUTC(1989, 'y').d.toISOString(), '1989-02-28T00:00:00.000Z')
})

test('can handle months of varying lengths', (t) => {
  t.same(gregorian.reform('October 31, 2015 00:00 UTC').setUTC(2, 'm').d.toISOString(), '2015-02-28T00:00:00.000Z')
  t.same(gregorian.reform('October 31, 2015 00:00 UTC').setUTC(11, 'm').d.toISOString(), '2015-11-30T00:00:00.000Z')
  t.same(gregorian.reform('October 31, 2015 00:00 UTC').setUTC(15, 'm').d.toISOString(), '2016-03-31T00:00:00.000Z')
})

test('is is UTC specific', (t) => {
  t.same(gregorian.reform('October 31, 2015 23:42 EST').setUTC(3, 'h').d.toISOString(), '2015-11-01T03:42:00.000Z')
})
