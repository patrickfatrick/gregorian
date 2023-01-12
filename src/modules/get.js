import _get from '../lib/_get';
import { validateDate, curry } from '../lib/utils';

export const get = curry((increment, date) => {
  date = date ?? new Date();
  validateDate(date);
  return _get(increment, date);
});
