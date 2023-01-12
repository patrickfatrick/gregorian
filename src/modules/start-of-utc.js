import _startOf from '../lib/_start-of';
import { validateDate, curry, wrap } from '../lib/utils';

export const startOfUTC = curry((increment, input) => {
  if (input instanceof Function) {
    return wrap(startOfUTC(increment), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _startOf(increment, input, 'UTC');
});
