import _get from '../lib/_get';
import { validateDate, curry } from '../lib/utils';

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
