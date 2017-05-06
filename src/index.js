/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

import { reform, reformWithOverrides } from './modules/reform'
import isDate from './modules/is-date'
import { addTime, addTimeSequence, subtractTime, subtractTimeSequence } from './modules/add-time-or-subtract-time'
import { resetLocal, resetUTC } from './modules/reset-local-or-reset-utc'
import { setLocal, setLocalGroup, setUTC, setUTCGroup } from './modules/set-local-or-set-utc'
import { getLocal, getLocalGroup, getUTC, getUTCGroup } from './modules/get-local-or-get-utc'

export {
  reform,
  reformWithOverrides,
  isDate,
  addTime,
  addTimeSequence,
  subtractTime,
  subtractTimeSequence,
  resetLocal,
  resetUTC,
  setLocal,
  setLocalGroup,
  setUTC,
  setUTCGroup,
  getLocal,
  getLocalGroup,
  getUTC,
  getUTCGroup
}
