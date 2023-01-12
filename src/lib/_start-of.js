import { SECOND, MINUTE, HOUR, DATE, WEEK, MONTH, YEAR } from './constants';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String}    increment   an increment to set the date back to
 * @param   {Date}      date        a date object
 * @returns {Date}                  a new date
 */
export default function _startOf(increment, date, UTC) {
  const incrementHandlers = {
    [SECOND](date) {
      return new Date(date[`set${UTC}Seconds`](date[`get${UTC}Seconds`](), 0));
    },

    [MINUTE](date) {
      return new Date(date[`set${UTC}Minutes`](date[`get${UTC}Minutes`](), 0, 0));
    },

    [HOUR](date) {
      return new Date(date[`set${UTC}Hours`](date[`get${UTC}Hours`](), 0, 0, 0));
    },

    [DATE](date) {
      date[`set${UTC}Date`](date[`get${UTC}Date`]());
      date[`set${UTC}Hours`](0, 0, 0, 0);

      return new Date(date);
    },

    [WEEK](date) {
      date[`set${UTC}Date`](date[`get${UTC}Date`]() - date[`get${UTC}Day`]());
      date[`set${UTC}Hours`](0, 0, 0, 0);

      return new Date(date);
    },

    [MONTH](date) {
      date[`set${UTC}Month`](date[`get${UTC}Month`](), 1);
      date[`set${UTC}Hours`](0, 0, 0, 0);

      return new Date(date);
    },

    [YEAR](date) {
      date[`set${UTC}FullYear`](date[`get${UTC}FullYear`](), 0, 1);
      date[`set${UTC}Hours`](0, 0, 0, 0);

      return new Date(date);
    },
  };

  return incrementHandlers[increment](date);
}
