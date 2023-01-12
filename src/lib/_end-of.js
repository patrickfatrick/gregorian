import { SECOND, MINUTE, HOUR, DATE, WEEK, MONTH, YEAR } from './constants';
import { isLeapYear } from './utils';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String}    increment   an increment to set the date back to
 * @param   {Date}      date        a date object
 * @returns {Date}                  a new date
 */
export default function _endOf(increment, date, UTC = '') {
  const incrementHandlers = {
    [SECOND](date) {
      return new Date(date[`set${UTC}Milliseconds`](999));
    },

    [MINUTE](date) {
      date[`set${UTC}Seconds`](59);
      date[`set${UTC}Milliseconds`](999);

      return new Date(date);
    },

    [HOUR](date) {
      date[`set${UTC}Minutes`](59);
      date[`set${UTC}Seconds`](59);
      date[`set${UTC}Milliseconds`](999);

      return new Date(date);
    },

    [DATE](date) {
      date[`set${UTC}Minutes`](59);
      date[`set${UTC}Seconds`](59);
      date[`set${UTC}Milliseconds`](999);

      date[`set${UTC}Hours`](23);

      return new Date(date);
    },

    [WEEK](date) {
      date[`set${UTC}Minutes`](59);
      date[`set${UTC}Seconds`](59);
      date[`set${UTC}Milliseconds`](999);

      date[`set${UTC}Hours`](23);
      date[`set${UTC}Date`](date[`get${UTC}Date`]() + 7 - date[`get${UTC}Day`]());

      return new Date(date);
    },

    [MONTH](date) {
      const thirtyDaysHath = [3, 5, 8, 10];
      const thirtyOneDaysHath = [0, 2, 4, 6, 7, 9, 11];
      const twentyEightDaysHath = [1];

      let day;
      if (thirtyDaysHath.includes(date[`get${UTC}Month`]())) day = 30;
      if (twentyEightDaysHath.includes(date[`get${UTC}Month`]())) day = isLeapYear(date) ? 29 : 28;
      if (thirtyOneDaysHath.includes(date[`get${UTC}Month`]())) day = 31;

      date[`set${UTC}Date`](day);
      date[`set${UTC}Hours`](23);
      date[`set${UTC}Minutes`](59);
      date[`set${UTC}Seconds`](59);
      date[`set${UTC}Milliseconds`](999);

      return new Date(date);
    },

    [YEAR](date) {
      date[`set${UTC}Month`](11);
      date[`set${UTC}Date`](31);
      date[`set${UTC}Hours`](23);
      date[`set${UTC}Minutes`](59);
      date[`set${UTC}Seconds`](59);
      date[`set${UTC}Milliseconds`](999);

      return new Date(date);
    },
  };

  return incrementHandlers[increment](date);
}
