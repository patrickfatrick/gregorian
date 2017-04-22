/**
 * We declare the string replacements (for reformat) here in one place so
 * we don't have to keep track of them elsewhere
 *
 * Note: Month and Day methods are 1-indexed rather than 0-indexed as they would be with native methods
 * This was a tough decision but ultimately I think consistency within the library is more important than
 * consistency with the native Date methods
 *
 * Given the date 1988-04-11T12:45:00.000Z, assuming a locale in Eastern Standard Time:
 */

export const UNIX = 'unix' // 576747900000
export const UTC_SHORT = 'utc-short' // Mon, 11 Apr 1988
export const UTC = 'utc' // Mon, 11 Apr 1988 12:45:00 GMT
export const ISO_SHORT = 'iso-short' // 1988-04-11
export const ISO = 'iso' // 1988-04-11T12:45:00.000Z
export const YEAR_FULL = 'Y' // 1988
export const YEAR = 'y' // 88
export const DAY_FULL = 'E' // Monday
export const DAY = 'e' // Mon (or 2, when used in get/set)
export const DATE_ORDINAL = 'o' // 11th
export const DATE_FULL = 'D' // 11 (adds leading zeros)
export const DATE = 'd' // 11
export const MONTH_NAME_FULL = 'N' // April
export const MONTH_NAME = 'n' // Apr
export const MONTH_FULL = 'M' // 04 (adds leading zeros)
export const MONTH = 'm' // 4
export const HOUR_PERIOD_FULL = 'G' // 07 (12-hour clock; adds leading zeros)
export const HOUR_PERIOD = 'g' // 7 (12-hour clock)
export const HOUR_FULL = 'H' // 07 (24-hour clock; adds leading zeros)
export const HOUR = 'h' // 7 (24-hour clock)
export const MINUTE_FULL = 'T' // 45 (adds leading zeros)
export const MINUTE = 't' // 45
export const PERIOD_UPPERCASE = 'P' // AM
export const PERIOD_LOWERCASE = 'p' // am
export const SECOND_FULL = 'S' // 00 (adds leading zeros)
export const SECOND = 's' // 0
export const MILLISECOND_FULL = 'L' // 000 (adds leading zeros)
export const MILLISECOND = 'l' // 0
export const TIMEZONE_OFFSET = 'z' // UTC-05:00
export const WEEK = 'w' // 14
