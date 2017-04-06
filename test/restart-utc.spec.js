import test from 'ava'
import gregorian from '../src/gregorian'

test('sets the date/time to the start of the year', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('y').d.toISOString(), '1988-01-01T00:00:00.000Z')
})

test('sets the date/time to the start of the month', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('m').d.toISOString(), '1988-04-01T00:00:00.000Z')
})

test('sets the date/time to the start of the week', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('w').d.toISOString(), '1988-04-10T00:00:00.000Z')
})

test('sets the date/time to the start of the day', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('d').d.toISOString(), '1988-04-11T00:00:00.000Z')
})

test('sets the date/time to the start of the hour', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('h').d.toISOString(), '1988-04-11T08:00:00.000Z')
})

test('sets the date/time to the start of the minute', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('t').d.toISOString(), '1988-04-11T08:23:00.000Z')
})

test('sets the date/time to the start of the second', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('s').d.toISOString(), '1988-04-11T08:23:15.000Z')
})
