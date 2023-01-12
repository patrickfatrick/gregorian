import _add from '../lib/_add';
import { validateDate, curry, wrap } from '../lib/utils';

export const subtract = curry((increment, n, input) => {
  if (input instanceof Function) {
    return wrap(subtract(increment, n), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return _add(increment, n * -1, input);
});
