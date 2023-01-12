import _diff from '../lib/_diff';
import { validateDate, curry } from '../lib/utils';

export const diff = curry((increment, input1, input2) => {
  input1 = input1 ?? new Date();
  input2 = input2 ?? new Date();
  validateDate(input1);
  validateDate(input2);
  return _diff(increment, input1, input2);
});
