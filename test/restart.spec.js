import test from 'ava'
import gregorian from '../src/gregorian'

test('sets the date/time to the start of the year', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('y').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-01-01 00:00:00.000')
})

test('sets the date/time to the start of the month', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('m').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-04-01 00:00:00.000')
})

test('sets the date/time to the start of the week', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('w').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-04-10 00:00:00.000')
})

test('sets the date/time to the start of the day', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('d').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-04-11 00:00:00.000')
})

test('sets the date/time to the start of the hour', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('h').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-04-11 08:00:00.000')
})

test('sets the date/time to the start of the minute', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('t').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-04-11 08:23:00.000')
})

test('sets the date/time to the start of the second', (t) => {
  t.is(gregorian.reform('April 11, 1988 8:23:15').restart('s').to('yyyy-mm-dd HH:tt:ss.ll'), '1988-04-11 08:23:15.000')
})
