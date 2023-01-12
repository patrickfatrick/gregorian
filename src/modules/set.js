import _set from '../lib/_set';
import { validateDate, curry, wrap } from '../lib/utils';

export const set = curry((increment, value, input) => {
  if (input instanceof Function) return wrap(set(increment, value), input);

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _set(increment, value, input);
});
