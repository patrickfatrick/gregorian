import test from 'ava'
import gregorian from '../src/gregorian'

test('outputs the gregorian object\'s date', (t) => {
  t.is(gregorian.reform('04/11/1988 00:00 UTC').recite().toISOString(), '1988-04-11T00:00:00.000Z')
})

test('outputs the gregorian object\'s date after manipulations', (t) => {
  t.is(gregorian.reform('October 15, 2015 00:00 UTC').add(1, 'y').subtract(5, 'd').subtract(5, 't').restart('h').recite().toISOString(), '2016-10-09T23:00:00.000Z')
})
