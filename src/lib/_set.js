import { MILLISECOND, SECOND, MINUTE, HOUR, DATE, DAY, WEEK, MONTH, YEAR } from '../lib/constants';

/**
 * Sets the date or time to specified interval
 * @param     {String}  increment   an increment to set
 * @param     {String}  value       what to set the increment to
 * @param     {Date}    date        a date object
 * @returns   {Object}              a new gregorian object
 */
export default function _set(increment, value, date, UTC = '') {
  const incrementHandlers = {
    [MILLISECOND](date) {
      return new Date(date[`set${UTC}Milliseconds`](value));
    },

    [SECOND](date) {
      return new Date(date[`set${UTC}Seconds`](value));
    },

    [MINUTE](date) {
      return new Date(date[`set${UTC}Minutes`](value));
    },

    [HOUR](date) {
      return new Date(date[`set${UTC}Hours`](value));
    },

    [DATE](date) {
      return new Date(date[`set${UTC}Date`](value));
    },

    [DAY](date) {
      return new Date(
        date[`set${UTC}Date`](date[`get${UTC}Date`]() - date[`get${UTC}Day`]() + (value - 1)),
      );
    },

    [WEEK](date) {
      const currentDay = date[`get${UTC}Day`]();
      const currentMilliseconds = date[`get${UTC}Milliseconds`]();

      date[`set${UTC}FullYear`](date[`get${UTC}FullYear`](), 0, value * 7);

      const n = currentDay - date[`get${UTC}Day`]();

      date[`set${UTC}Date`](date[`get${UTC}Date`]() + n);

      return new Date(date[`set${UTC}Milliseconds`](currentMilliseconds));
    },

    [MONTH](date) {
      const newMonth = value - 1;
      const newYear = date[`get${UTC}FullYear`]();
      const newDate = date[`get${UTC}Date`]();
      const shiftMonth = new Date(date[`set${UTC}FullYear`](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth[`get${UTC}Date`]()) {
        return shiftMonth;
      } else {
        return new Date(date[`set${UTC}FullYear`](newYear, newMonth, newDate));
      }
    },

    [YEAR](date) {
      const newYear = value;
      const newMonth = date[`get${UTC}Month`]();
      const newDate = date[`get${UTC}Date`]();
      const shiftMonth = new Date(date[`set${UTC}FullYear`](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth[`get${UTC}Date`]()) {
        return shiftMonth;
      } else {
        return new Date(date[`set${UTC}FullYear`](newYear, newMonth, newDate));
      }
    },
  };

  return incrementHandlers[increment](date);
}
