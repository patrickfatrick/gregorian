import { MILLISECOND, SECOND, MINUTE, HOUR, DATE, DAY, WEEK, MONTH, YEAR } from '../lib/constants';
import { validateDate, curry, wrap } from '../lib/utils';

/**
 * Sets the date or time to specified interval
 * @param     {String}  increment   an increment to set
 * @param     {String}  value       what to set the increment to
 * @param     {Date}    date        a date object
 * @returns   {Object}              a new gregorian object
 */
function setLocalOrSetUTC(increment, value, date, utc = '') {
  const incrementHandlers = {
    [MILLISECOND](date) {
      return new Date(date[`set${utc}Milliseconds`](value));
    },

    [SECOND](date) {
      return new Date(date[`set${utc}Seconds`](value));
    },

    [MINUTE](date) {
      return new Date(date[`set${utc}Minutes`](value));
    },

    [HOUR](date) {
      return new Date(date[`set${utc}Hours`](value));
    },

    [DATE](date) {
      return new Date(date[`set${utc}Date`](value));
    },

    [DAY](date) {
      return new Date(
        date[`set${utc}Date`](date[`get${utc}Date`]() - date[`get${utc}Day`]() + (value - 1)),
      );
    },

    [WEEK](date) {
      const currentDay = date[`get${utc}Day`]();
      const currentMilliseconds = date[`get${utc}Milliseconds`]();

      date[`set${utc}FullYear`](date[`get${utc}FullYear`](), 0, value * 7);

      const n = currentDay - date[`get${utc}Day`]();

      date[`set${utc}Date`](date[`get${utc}Date`]() + n);

      return new Date(date[`set${utc}Milliseconds`](currentMilliseconds));
    },

    [MONTH](date) {
      const newMonth = value - 1;
      const newYear = date[`get${utc}FullYear`]();
      const newDate = date[`get${utc}Date`]();
      const shiftMonth = new Date(date[`set${utc}FullYear`](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth[`get${utc}Date`]()) {
        return shiftMonth;
      } else {
        return new Date(date[`set${utc}FullYear`](newYear, newMonth, newDate));
      }
    },

    [YEAR](date) {
      const newYear = value;
      const newMonth = date[`get${utc}Month`]();
      const newDate = date[`get${utc}Date`]();
      const shiftMonth = new Date(date[`set${utc}FullYear`](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth[`get${utc}Date`]()) {
        return shiftMonth;
      } else {
        return new Date(date[`set${utc}FullYear`](newYear, newMonth, newDate));
      }
    },
  };

  return incrementHandlers[increment](date);
}

export const setUTC = curry((increment, value, input) => {
  if (input instanceof Function) return wrap(setUTC(increment, value), input);

  input = input || new Date();
  validateDate(input);
  return setLocalOrSetUTC(increment, value, input, 'UTC');
});

export const setLocal = curry((increment, value, input) => {
  if (input instanceof Function) return wrap(setLocal(increment, value), input);

  input = input || new Date();
  validateDate(input);
  return setLocalOrSetUTC(increment, value, input);
});

export const setLocalGroup = curry((group, input) => {
  if (input instanceof Function) return wrap(setLocalGroup(group), input);

  input = input || new Date();
  validateDate(input);
  return Object.keys(group).reduce((acc, cur) => setLocalOrSetUTC(cur, group[cur], input), input);
});

export const setUTCGroup = curry((group, input) => {
  if (input instanceof Function) return wrap(setUTCGroup(group), input);

  input = input || new Date();
  validateDate(input);
  return Object.keys(group).reduce(
    (acc, cur) => setLocalOrSetUTC(cur, group[cur], input, 'UTC'),
    input,
  );
});
