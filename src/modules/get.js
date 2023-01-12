import _get from '../lib/_get';
import { validateDate, curry } from '../lib/utils';

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
