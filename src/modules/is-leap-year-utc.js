import { isLeapYear as _isLeapYear, validateDate } from '../lib/utils';

export function isLeapYearUTC(date) {
  date = date ?? new Date();
  validateDate(date);
  return _isLeapYear(date, 'UTC');
}
