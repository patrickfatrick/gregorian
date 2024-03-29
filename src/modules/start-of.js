import _startOf from '../lib/_start-of';
import { validateDate, curry, wrap } from '../lib/utils';

export const startOf = curry((increment, input) => {
  if (input instanceof Function) {
    return wrap(startOf(increment), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _startOf(increment, input, '');
});
