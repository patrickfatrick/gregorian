import test from 'ava'
import gregorian from '../src/gregorian'

test('adds years to the date', (t) => {
  t.same(gregorian.reform('February 29, 1988 00:00 UTC').add(1, 'y').d.toISOString(), '1989-02-28T00:00:00.000Z')
})

test('adds months to the date', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').add(1, 'd').add(1, 'm').d.toISOString(), '1988-05-12T00:00:00.000Z')
})

test('adds weeks to the date', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(2, 'w').d.toISOString(), '2015-11-14T04:56:14.877Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 'w').d.toISOString(), '2015-12-26T04:56:14.877Z')
})

test('adds days to the date', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').add(1, 'd').d.toISOString(), '1988-04-12T00:00:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 'd').d.toISOString(), '2015-11-08T04:56:14.877Z')
})

test('adds hours to the date', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').add(3, 'h').d.toISOString(), '1988-04-11T03:00:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 'h').d.toISOString(), '2015-10-31T12:56:14.877Z')
})

test('adds minutes to the date', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').add(3, 'm').add(5, 'd').add(10, 't').d.toISOString(), '1988-07-16T00:10:00.000Z')
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 't').d.toISOString(), '2015-10-31T05:04:14.877Z')
})

test('adds seconds to the date', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 's').d.toISOString(), '2015-10-31T04:56:22.877Z')
})

test('adds milliseconds to the date', (t) => {
  t.same(gregorian.reform('2015-10-31T04:56:14.877Z').add(123, 'l').d.toISOString(), '2015-10-31T04:56:15.000Z')
})

test('is chainable', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').add(11, 'm').add(5, 'd').d.toISOString(), '1989-03-16T00:00:00.000Z')
})

test('can handle leap years', (t) => {
  t.same(gregorian.reform('April 11, 1988 00:00 UTC').add(5, 'y').d.toISOString(), '1993-04-11T00:00:00.000Z')
  t.same(gregorian.reform('February 27, 1988 00:00 UTC').add(3, 'd').d.toISOString(), '1988-03-01T00:00:00.000Z')
})

test('can handle months of varying lengths', (t) => {
  t.same(gregorian.reform('October 31, 2015 00:00 UTC').add(1, 'm').d.toISOString(), '2015-11-30T00:00:00.000Z')
  t.same(gregorian.reform('October 31, 2015 00:00 UTC').add(15, 'm').d.toISOString(), '2017-01-31T00:00:00.000Z')
})

test('is timezone-agnostic', (t) => {
  t.same(gregorian.reform('October 30, 2015 23:42:00').add(3, 'h').to('yyyy-mm-dd HH:tt:ss.ll')
    , '2015-10-31 02:42:00.000')
})
