import reformHandlers from '../lib/reform-handlers'
import * as constants from '../lib/constants'
import { validateDate, curry } from '../lib/utils'

/**
 * Take a Date object and output the reformatted string
 * See ../lib/constants.js for details
 * @param     {String}  format    a string or date object (something that can be converted to a valid date)
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
export default curry((format, date) => {
  date = date || new Date()
  validateDate(date)
  const pieces = Object.values(constants)
  let converted = format

  pieces.forEach((piece) => {
    const re = new RegExp('\\b' + piece + '\\b', 'g')
    let replacer
    if (re.test(converted)) {
      switch (piece) {
        case 'unix':
        case 'utc-short':
        case 'utc':
        case 'iso-short':
        case 'iso':
          converted = reformHandlers[piece](date)
          break
        default:
          replacer = reformHandlers[piece](date)
          converted = converted.replace(re, replacer)
          break
      }
    }
  })

  // Remove the delimiter from the string after conversion
  if (typeof converted === 'string') {
    converted = converted.replace(/\|/g, '')
  }

  return converted
})
