import test from 'ava'
import {iso} from '../src/modules/reformat'

test('converts a date to an ISO string', (t) => {
  t.same(iso(new Date('April 11, 1988 00:00 UTC')), '1988-04-11T00:00:00.000Z')
})

test('converts a date to a shortened ISO string', (t) => {
  t.same(iso(new Date('April 11, 1988 00:00 UTC'), 'short'), '1988-04-11')
})
