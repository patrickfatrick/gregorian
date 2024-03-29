import { isLeapYear as _isLeapYear, validateDate } from '../lib/utils';

export function isLeapYear(date) {
  date = date ?? new Date();
  validateDate(date);
  return _isLeapYear(date);
}
