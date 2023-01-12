import { MILLISECOND, SECOND, MINUTE, HOUR, DATE, WEEK, MONTH, YEAR } from './constants';
import { difference } from './utils';

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {String}  increment   an increment to add
 * @param   {Number}  date1       date object
 * @param   {Date}    date2       date object
 * @returns {Number}              numeric differenceence between the dates in the specific increment
 */
export default function _diff(increment, date1, date2) {
  const incrementHandlers = {
    [MILLISECOND](date1, date2) {
      return difference(date1, date2);
    },

    [SECOND](date1, date2) {
      return difference(date1, date2) / 1000;
    },

    [MINUTE](date1, date2) {
      return this[SECOND](date1, date2) / 60;
    },

    [HOUR](date1, date2) {
      return this[MINUTE](date1, date2) / 60;
    },

    [DATE](date1, date2) {
      return this[HOUR](date1, date2) / 24;
    },

    [WEEK](date1, date2) {
      return this[DATE](date1, date2) / 7;
    },

    [MONTH](date1, date2) {
      return this[DATE](date1, date2) / 30.44; // 365.25 / 12
    },

    [YEAR](date1, date2) {
      return this[DATE](date1, date2) / 365.25; // Leap-year friendly
    },
  };

  return incrementHandlers[increment](date1, date2);
}
