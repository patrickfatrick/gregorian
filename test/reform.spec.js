import test from 'ava'
import gregorian from '../src/gregorian'

test('converts a string to a gregorian object', (t) => {
  t.is(gregorian.reform('04/11/1988 00:00 UTC').d.toISOString(), '1988-04-11T00:00:00.000Z')
  t.is(Date.parse(gregorian.reform('September 25, 2015 00:00 UTC').d), 1443139200000)
})

test('converts a Date to a gregorian object', (t) => {
  t.is(gregorian.reform(new Date('04/11/1988 00:00 UTC')).d.toISOString(), '1988-04-11T00:00:00.000Z')
})

test('converts a unix timestamp to a gregorian object', (t) => {
  t.is(Date.parse(gregorian.reform(1443139200000).d), 1443139200000)
})

test('creates a date that responds to Date methods', (t) => {
  t.truthy(gregorian.reform().d.getTime)
})

test('does not create a valid gregorian object from invalid dates', (t) => {
  t.true(typeof gregorian.reform('next Tuesday').d.getTime() === 'number')
})
