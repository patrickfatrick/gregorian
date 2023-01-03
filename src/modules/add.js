import { MILLISECOND, SECOND, MINUTE, HOUR, DATE, WEEK, MONTH, YEAR } from '../lib/constants';
import { validateDate, curry, wrap, entries } from '../lib/utils';

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {String}  increment   an increment to add
 * @param   {Number}  n           factor to add or subtract the increment by
 * @param   {Date}    date        date object
 * @returns {Date}                a new date
 */
function _add(increment, n, date) {
  const incrementHandlers = {
    [MILLISECOND](date) {
      return new Date(date.setMilliseconds(date.getMilliseconds() + n));
    },

    [SECOND](date) {
      return new Date(date.setSeconds(date.getSeconds() + n));
    },

    [MINUTE](date) {
      return new Date(date.setMinutes(date.getMinutes() + n));
    },

    [HOUR](date) {
      return new Date(date.setHours(date.getHours() + n));
    },

    [DATE](date) {
      return new Date(date.setDate(date.getDate() + n));
    },

    [WEEK](date) {
      return new Date(date.setDate(date.getDate() + n * 7));
    },

    [MONTH](date) {
      let newMonth = date.getMonth() + n;
      let newYear = date.getFullYear();
      let newDate = date.getDate();

      if (newDate > new Date(date.setFullYear(newYear, newMonth + 1, 0)).getDate()) {
        return new Date(date.setFullYear(newYear, newMonth + 1, 0));
      }
      return new Date(date.setFullYear(newYear, newMonth, newDate));
    },

    [YEAR](date) {
      let newYear = date.getFullYear() + n;
      let newMonth = date.getMonth();
      let newDate = date.getDate();

      if (newDate > new Date(date.setFullYear(newYear, newMonth + 1, 0)).getDate()) {
        return new Date(date.setFullYear(newYear, newMonth + 1, 0));
      }
      return new Date(date.setFullYear(newYear, newMonth, newDate));
    },
  };

  return incrementHandlers[increment](date);
}

export const add = curry((increment, n, input) => {
  if (input instanceof Function) {
    return wrap(add(increment, n), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _add(increment, n, input);
});

export const subtract = curry((increment, n, input) => {
  if (input instanceof Function) {
    return wrap(subtract(increment, n), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _add(increment, n * -1, input);
});

export const addFor = curry((group, input) => {
  if (input instanceof Function) {
    return wrap(addFor(group), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return entries(group).reduce((acc, [increment, value]) => _add(increment, value, acc), input);
});

export const subtractFor = curry((group, input) => {
  if (input instanceof Function) {
    return wrap(subtractFor(group), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return entries(group).reduce(
    (acc, [increment, value]) => _add(increment, value * -1, acc),
    input,
  );
});
