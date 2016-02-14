'use strict'

var reformat = require('./reformat')

/**
 * Take a Gregorian object and output the reformatted string
 * See https://github.com/patrickfatrick/gregorian#accepted-formats for details
 * @param {String}  format a string or date object (something that can be converted to a valid date)
 * @returns {String}  the date reformatted into the specified format
 */
function to (format, delimiter) {
  delimiter = delimiter || '+'
  const date = this.d
  const pieces = [
    'unix', 'utc-short', 'utc', 'iso-short', 'iso', 'yyyy', 'yy', 'DD', 'dd', 'dt', 'D', 'd', 'MM', 'mm', 'M', 'm', 'hh', 'h', 'HH', 'H', 'tt', 't', 'AP', 'ap', 'ss', 's', 'll', 'l', 'zz'
  ]
  let converted = format

  pieces.forEach((piece) => {
    const re = new RegExp('\\b' + piece + '\\b', 'g')
    let replacer
    if (re.test(converted)) {
      switch (piece) {
        case 'unix':
          converted = reformat.unix(date)
          break
        case 'utc-short':
          converted = reformat.utc(date, 'short')
          break
        case 'utc':
          converted = reformat.utc(date)
          break
        case 'iso-short':
          converted = reformat.iso(date, 'short')
          break
        case 'iso':
          converted = reformat.iso(date)
          break
        default:
          replacer = reformat[piece](date)
          converted = converted.replace(re, replacer)
      }
    }
  })

  if (typeof converted === 'string') {
    converted = converted.replace(new RegExp('\\' + delimiter, 'g'), '')
  }

  return converted
}

module.exports = to
