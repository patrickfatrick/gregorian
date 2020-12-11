import { MILLISECOND, SECOND, MINUTE, HOUR, DATE, DAY, WEEK, MONTH, YEAR } from '../lib/constants';
import { validateDate, curry, wrap, entries } from '../lib/utils';

/**
 * Sets the date or time to specified interval
 * @param     {String}  increment   an increment to set
 * @param     {String}  value       what to set the increment to
 * @param     {Date}    date        a date object
 * @returns   {Object}              a new gregorian object
 */
function _set(increment, value, date, UTC = '') {
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

export const setUTC = curry((increment, value, input) => {
  if (input instanceof Function) return wrap(setUTC(increment, value), input);

  input = input ?? new Date();
  validateDate(input);
  return _set(increment, value, input, 'UTC');
});

export const set = curry((increment, value, input) => {
  if (input instanceof Function) return wrap(set(increment, value), input);

  input = input ?? new Date();
  validateDate(input);
  return _set(increment, value, input);
});

export const setFor = curry((group, input) => {
  if (input instanceof Function) return wrap(setFor(group), input);

  input = input ?? new Date();
  validateDate(input);
  return entries(group).reduce((acc, [increment, value]) => _set(increment, value, input), input);
});

export const setUTCFor = curry((group, input) => {
  if (input instanceof Function) return wrap(setUTCFor(group), input);

  input = input ?? new Date();
  validateDate(input);
  return entries(group).reduce(
    (acc, [increment, value]) => _set(increment, value, input, 'UTC'),
    input,
  );
});
