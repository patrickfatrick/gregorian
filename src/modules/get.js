import {
  TIMEZONE_OFFSET,
  MILLISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DATE,
  DAY,
  WEEK,
  MONTH,
  YEAR,
} from '../lib/constants';
import { validateDate, curry } from '../lib/utils';

/**
 * Gets the specified increment in local time or UTC for a date object
 * @param   {String}  increment   date increment to get the value of
 * @param   {Date}    date        a date object
 * @param   {String}  utc         should equal 'UTC' if UTC function
 * @returns {Date}                the value for that increment, in UTC
 */
function _get(increment, date, UTC = '') {
  const incrementHandlers = {
    [TIMEZONE_OFFSET](date) {
      return UTC ? 0 : (date.getTimezoneOffset() / 60) * -1;
    },

    [MILLISECOND](date) {
      return date[`get${UTC}Milliseconds`]();
    },

    [SECOND](date) {
      return date[`get${UTC}Seconds`]();
    },

    [MINUTE](date) {
      return date[`get${UTC}Minutes`]();
    },

    [HOUR](date) {
      return date[`get${UTC}Hours`]();
    },

    [DATE](date) {
      return date[`get${UTC}Date`]();
    },

    [DAY](date) {
      return date[`get${UTC}Day`]() + 1;
    },

    [WEEK](date) {
      return Math.floor(
        ((date - new Date(date[`get${UTC}FullYear`](), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7,
      );
    },

    [MONTH](date) {
      return date[`get${UTC}Month`]() + 1;
    },

    [YEAR](date) {
      return date[`get${UTC}FullYear`]();
    },
  };

  return incrementHandlers[increment](date);
}

export const getUTC = curry((increment, date) => {
  date = date ?? new Date();
  validateDate(date);
  return _get(increment, date, 'UTC');
});

export const get = curry((increment, date) => {
  date = date ?? new Date();
  validateDate(date);
  return _get(increment, date);
});

export const getUTCFor = curry((increments, date) => {
  date = date ?? new Date();
  validateDate(date);
  return Object.entries(increments).reduce(
    (obj, [increment, v]) => ({
      ...obj,
      ...(v && { [increment]: _get(increment, date, 'UTC') }),
    }),
    {},
  );
});

export const getFor = curry((increments, date) => {
  date = date ?? new Date();
  validateDate(date);
  return Object.entries(increments).reduce(
    (obj, [increment, v]) => ({ ...obj, ...(v && { [increment]: _get(increment, date) }) }),
    {},
  );
});
