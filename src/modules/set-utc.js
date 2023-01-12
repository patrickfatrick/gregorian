import _set from '../lib/_set';
import { validateDate, curry, wrap } from '../lib/utils';

export const setUTC = curry((increment, value, input) => {
  if (input instanceof Function) return wrap(setUTC(increment, value), input);

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _set(increment, value, input, 'UTC');
});
