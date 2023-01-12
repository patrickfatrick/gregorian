import _add from '../lib/_add';
import { validateDate, curry, wrap, entries } from '../lib/utils';

export const subtractFor = curry((group, input) => {
  if (input instanceof Function) {
    return wrap(subtractFor(group), input);
  }

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return entries(group).reduce(
    (acc, [increment, value]) => _add(increment, value * -1, acc),
    input,
  );
});
