import { MILLISECOND, SECOND, MINUTE, HOUR, DATE, WEEK, MONTH, YEAR } from '../lib/constants';
import { validateDate, curry, wrap } from '../lib/utils';

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {String}  increment   an increment to add
 * @param   {Number}  n           factor to add or subtract the increment by
 * @param   {Date}    date        date object
 * @returns {Date}                a new date
 */
function addTimeOrSubtractTime(increment, n, date) {
  const incrementHandlers = {
    [MILLISECOND](date) {
      return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n));
    },

    [SECOND](date) {
      return new Date(date.setUTCSeconds(date.getUTCSeconds() + n));
    },

    [MINUTE](date) {
      return new Date(date.setUTCMinutes(date.getUTCMinutes() + n));
    },

    [HOUR](date) {
      return new Date(date.setUTCHours(date.getUTCHours() + n));
    },

    [DATE](date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n));
    },

    [WEEK](date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n * 7));
    },

    [MONTH](date) {
      let newMonth = date.getUTCMonth() + n;
      let newYear = date.getUTCFullYear();
      let newDate = date.getUTCDate();

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
      }
      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    },

    [YEAR](date) {
      let newYear = date.getUTCFullYear() + n;
      let newMonth = date.getUTCMonth();
      let newDate = date.getUTCDate();

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
      }
      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    },
  };

  return incrementHandlers[increment](date);
}

export const addTime = curry((increment, n, input) => {
  if (input instanceof Function) {
    return wrap(addTime(increment, n), input);
  }

  input = input || new Date();
  validateDate(input);
  return addTimeOrSubtractTime(increment, Number(n), input);
});

export const subtractTime = curry((increment, n, input) => {
  if (input instanceof Function) {
    return wrap(subtractTime(increment, n), input);
  }

  input = input || new Date();
  validateDate(input);
  return addTimeOrSubtractTime(increment, n * -1, input);
});

export const addTimeSequence = curry((sequence, input) => {
  if (input instanceof Function) {
    return wrap(addTimeSequence(sequence), input);
  }

  input = input || new Date();
  validateDate(input);
  return sequence.reduce((acc, cur) => addTimeOrSubtractTime(cur[0], Number(cur[1]), acc), input);
});

export const subtractTimeSequence = curry((sequence, input) => {
  if (input instanceof Function) {
    return wrap(subtractTimeSequence(sequence), input);
  }

  input = input || new Date();
  validateDate(input);
  return sequence.reduce((acc, cur) => addTimeOrSubtractTime(cur[0], cur[1] * -1, acc), input);
});
