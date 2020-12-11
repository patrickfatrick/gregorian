import reformHandlers from '../lib/reform-handlers';
import { en } from '../lib/translations';
import { validateDate, curry } from '../lib/utils';

function formatDate(format, date, translation) {
  const longAssRegExp = /\b(Y|y|M|m|N|n|E|e|D|d|o|H|h|G|g|T|t|P|p|S|s|L|l|z|w)\b/g;
  return format
    .replace(longAssRegExp, (match) => reformHandlers[match](date, translation))
    .replace(translation.delimiter, '');
}

/**
 * Take a Date object and output the reformatted string
 * See ../lib/constants.js for details
 * @param     {String}  format    a string describing the format the date should take
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
export const reform = curry((format, date) => {
  date = date ?? new Date();
  validateDate(date);

  return formatDate(format, date, en);
});

/**
 * Take a Date object and output the reformatted string using user-provided names
 * @param     {Object}  overrides object consisting of whole or partial name overrides, see ../lib/default-names
 * @param     {String}  format    a string describing the format the date should take
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
export const reformWithOverrides = curry((overrides, format, date) => {
  date = date ?? new Date();
  const names = Object.assign({}, en, overrides);
  validateDate(date);

  return formatDate(format, date, names);
});

/**
 * Take a Date object and output the reformatted string using included locales
 * @param     {Object}  locale    locale object exported from lib/translations
 * @param     {String}  format    a string describing the format the date should take
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
export const reformWithLocale = curry((locale, format, date) => {
  date = date ?? new Date();
  validateDate(date);

  return formatDate(format, date, locale || en);
});
