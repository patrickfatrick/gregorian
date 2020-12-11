import { isDate } from '../lib/utils';

/**
 * Parses either an ambiguous ISO partial (2019-08-16 / 2019-08-16T22:55:00)
 * or a complete ISO string (2019-08-16T22:55:00Z) to a date
 * @param  {String} date date string formatted as an ISO partial date
 * @return {Date}               a new Date instance
 */
export function parse(input) {
  if (isDate(input)) return input;
  const [date, rawTime = '00:00:00'] = /T| /[Symbol.split](input);
  const [time, offset = (new Date().getTimezoneOffset() / 60).toString()] = /Z|\+|-/[Symbol.split](
    rawTime,
  );
  const z = Number.parseFloat((/\d{1,2}/[Symbol.match](offset) || ['0'])[0], 10);
  const [y, m, d] = /-/[Symbol.split](date).map((str) => Number.parseFloat(str, 10));
  const [h, t, s] = /:/[Symbol.split](time).map((str) => Number.parseFloat(str, 10));
  const l = (s % 1) * 1000;
  return new Date(
    Date.UTC(y, m - 1, d, rawTime.includes('-') || offset > 0 ? h + z : h + z * -1, t, s, l),
  );
}

/**
 * Parses either an ambiguous ISO partial (2019-08-16 / 2019-08-16T22:55:00)
 * or a complete ISO string (2019-08-16T22:55:00Z) to a date
 * BUT this function assumes UTC if no timezone data is present
 * @param  {String} date date string formatted as an ISO partial date
 * @return {Date}               a new Date instance
 */
export function parseUTC(input) {
  if (isDate(input)) return input;
  const [date, rawTime = '00:00:00'] = /T| /[Symbol.split](input);
  const [time, offset = '0'] = /Z|\+|-/[Symbol.split](rawTime);
  const z = Number.parseFloat((/\d{1,2}/[Symbol.match](offset) || ['0'])[0], 10);
  const [y, m, d] = /-/[Symbol.split](date).map((str) => Number.parseFloat(str, 10));
  const [h, t, s] = /:/[Symbol.split](time).map((str) => Number.parseFloat(str, 10));
  const l = (s % 1) * 1000;
  return new Date(
    Date.UTC(y, m - 1, d, rawTime.includes('-') || offset > 0 ? h + z : h + z * -1, t, s, l),
  );
}
