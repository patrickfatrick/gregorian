import _endOf from '../lib/_end-of';
import { validateDate, curry, wrap } from '../lib/utils';

export const endOf = curry((increment, input) => {
  if (input instanceof Function) {
    return wrap(endOf(increment), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _endOf(increment, new Date(input), '');
});
