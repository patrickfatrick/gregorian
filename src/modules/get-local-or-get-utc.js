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
function getLocalOrGetUTC(increment, date, utc = '') {
  const incrementHandlers = {
    [TIMEZONE_OFFSET](date) {
      return utc ? 0 : date.getTimezoneOffset() / 60 * -1;
    },

    [MILLISECOND](date) {
      return date[`get${utc}Milliseconds`]();
    },

    [SECOND](date) {
      return date[`get${utc}Seconds`]();
    },

    [MINUTE](date) {
      return date[`get${utc}Minutes`]();
    },

    [HOUR](date) {
      return date[`get${utc}Hours`]();
    },

    [DATE](date) {
      return date[`get${utc}Date`]();
    },

    [DAY](date) {
      return date[`get${utc}Day`]() + 1;
    },

    [WEEK](date) {
      return Math.floor(
        ((date - new Date(date[`get${utc}FullYear`](), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7,
      );
    },

    [MONTH](date) {
      return date[`get${utc}Month`]() + 1;
    },

    [YEAR](date) {
      return date[`get${utc}FullYear`]();
    },
  };

  return incrementHandlers[increment](date);
}

export const getUTC = curry((increment, date) => {
  date = date || new Date();
  validateDate(date);
  return getLocalOrGetUTC(increment, date, 'UTC');
});

export const getLocal = curry((increment, date) => {
  date = date || new Date();
  validateDate(date);
  return getLocalOrGetUTC(increment, date);
});

export const getUTCGroup = curry((increments, date) => {
  date = date || new Date();
  validateDate(date);
  return increments.map(increment => getLocalOrGetUTC(increment, date, 'UTC'));
});

export const getLocalGroup = curry((increments, date) => {
  date = date || new Date();
  validateDate(date);
  return increments.map(increment => getLocalOrGetUTC(increment, date));
});
