/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

import { reform, reformWithOverrides, reformWithLocale } from './modules/reform';
import isDate from './modules/is-date';
import { parse, parseUTC } from './modules/parse';
import {
  addTime,
  addTimeSequence,
  subtractTime,
  subtractTimeSequence,
} from './modules/add-time-or-subtract-time';
import { resetLocal, resetUTC } from './modules/reset-local-or-reset-utc';
import { setLocal, setLocalGroup, setUTC, setUTCGroup } from './modules/set-local-or-set-utc';
import { getLocal, getLocalGroup, getUTC, getUTCGroup } from './modules/get-local-or-get-utc';
import { diffTime } from './modules/diff-time';
import { compareTime } from './modules/compare-time';

export {
  reform,
  reformWithOverrides,
  reformWithLocale,
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
  getUTCGroup,
  diffTime,
  compareTime,
  parse,
  parseUTC,
};
