import test from 'ava'
import {unix} from '../src/modules/reformat'

test('converts a date to a unix timestamp', (t) => {
  t.is(unix(new Date('April 11, 1988 00:00 UTC')), 576720000000)
})
