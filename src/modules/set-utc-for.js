import _set from '../lib/_set';
import { validateDate, curry, wrap, entries } from '../lib/utils';

export const setUTCFor = curry((group, input) => {
  if (input instanceof Function) return wrap(setUTCFor(group), input);

  input = input ? new Date(input) : new Date();
  validateDate(input);
  return entries(group).reduce(
    (acc, [increment, value]) => _set(increment, value, input, 'UTC'),
    input,
  );
});
