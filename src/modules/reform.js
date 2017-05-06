import reformHandlers from '../lib/reform-handlers'
import defaultTranslation from '../lib/default-translation'
import { validateDate, curry } from '../lib/utils'

function formatDate (format, date, translation) {
  return Object.keys(reformHandlers)
  .reduce((acc, cur) => (
    acc.replace(new RegExp(`\\b${cur}\\b`, 'g'), reformHandlers[cur](date, translation))
  ), format)
  .replace(translation.delimiter, '')
}

/**
 * Take a Date object and output the reformatted string
 * See ../lib/constants.js for details
 * @param     {String}  format    a string describing the format the date should take
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
export const reform = curry((format, date) => {
  date = date || new Date()
  const names = defaultTranslation
  validateDate(date)

  return formatDate(format, date, names)
})

/**
 * Take a Date object and output the reformatted string using user-provided names
 * See ../lib/constants.js for details
 * @param     {Object}  overrides object consisting of whole or partial name overrides, see ../lib/default-names
 * @param     {String}  format    a string describing the format the date should take
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
export const reformWithOverrides = curry((overrides, format, date) => {
  date = date || new Date()
  const names = Object.assign({}, defaultTranslation, overrides)
  validateDate(date)

  return formatDate(format, date, names)
})
