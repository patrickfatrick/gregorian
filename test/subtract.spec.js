import test from 'ava'
import gregorian from '../src/gregorian'

test('subtracts years from the date', (t) => {
  t.is(gregorian.reform('February 29, 1988 00:00 UTC').subtract(1, 'y').d.toISOString(), '1987-02-28T00:00:00.000Z')
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(3, 'y').d.toISOString(), '1985-04-11T00:00:00.000Z')
})

test('subtracts months from the date', (t) => {
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(12, 'm').d.toISOString(), '1987-04-11T00:00:00.000Z')
})

test('subtracts weeks from the date', (t) => {
  t.is(gregorian.reform('2015-10-31T04:56:14.877Z').subtract(2, 'w').d.toISOString(), '2015-10-17T04:56:14.877Z')
  t.is(gregorian.reform('2015-10-31T04:56:14.877Z').subtract(8, 'w').d.toISOString(), '2015-09-05T04:56:14.877Z')
})

test('subtracts days from the date', (t) => {
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(1, 'd').d.toISOString(), '1988-04-10T00:00:00.000Z')
  t.is(gregorian.reform('March 1, 1988 00:00 UTC').subtract(3, 'd').d.toISOString(), '1988-02-27T00:00:00.000Z')
})

test('subtracts hours from the date', (t) => {
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(3, 'h').d.toISOString(), '1988-04-10T21:00:00.000Z')
})

test('subtracts minutes from the date', (t) => {
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(54, 't').d.toISOString(), '1988-04-10T23:06:00.000Z')
})

test('subtracts seconds from the date', (t) => {
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(54, 's').d.toISOString(), '1988-04-10T23:59:06.000Z')
})

test('subtracts milliseconds from the date', (t) => {
  t.is(gregorian.reform('2015-10-31T04:56:15.123Z').subtract(123, 'l').d.toISOString(), '2015-10-31T04:56:15.000Z')
})

test('is chainable', (t) => {
  t.is(gregorian.reform('April 11, 1988 06:00 UTC').subtract(1, 'd').subtract(1, 'm').d.toISOString(), '1988-03-10T06:00:00.000Z')
})

test('can handle leap years', (t) => {
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(11, 'm').subtract(5, 'd').d.toISOString(), '1987-05-06T00:00:00.000Z')
  t.is(gregorian.reform('April 11, 1988 00:00 UTC').subtract(3, 'm').subtract(5, 'd').subtract(10, 't').d.toISOString(), '1988-01-05T23:50:00.000Z')
})

test('can handle months of varying lengths', (t) => {
  t.is(gregorian.reform('October 31, 2015 00:00 UTC').subtract(15, 'm').d.toISOString(), '2014-07-31T00:00:00.000Z')
  t.is(gregorian.reform('October 31, 2015 00:00 UTC').subtract(1, 'm').d.toISOString(), '2015-09-30T00:00:00.000Z')
})

test('is timezone-agnostic', (t) => {
  t.is(gregorian.reform('October 31, 2015 03:42:00').subtract(4, 'h').to('yyyy-mm-dd HH:tt:ss.ll'), '2015-10-30 23:42:00.000')
})
