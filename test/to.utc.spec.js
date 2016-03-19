import test from 'ava'
import {utc} from '../src/modules/reformat'

test('converts a date to a UTC string', (t) => {
  t.same(utc(new Date('April 11, 1988 00:00 UTC')), 'Mon, 11 Apr 1988 00:00:00 GMT')
})

test('converts a date to a shortened UTC string', (t) => {
  t.same(utc(new Date('April 11, 1988 00:00 UTC'), 'short'), 'Mon, 11 Apr 1988')
})
