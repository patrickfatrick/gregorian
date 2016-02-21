'use strict'

/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period
 */
exports.AP = function (date) {
  const hour = date.getHours()
  const ampm = (hour < 12) ? 'AM' : 'PM'
  return ampm
}

/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date   date a date object
 * @returns {String} the uncapitalized 12-hour clock period
 */
exports.ap = function (date) {
  const hour = date.getHours()
  const ampm = (hour < 12) ? 'am' : 'pm'
  return ampm
}

/**
 * Take a date object and output the abreviated day of the week
 * @param {Date}  a date object
 * @returns {String}  the abbreviated day of the week
 */
exports.D = function (date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayOfWeek = date.getDay()
  return days[dayOfWeek]
}

/**
 * Take a date object and output the day of the week
 * @param {Date}  a date object
 * @returns {String} the full day of the week
 */
exports.DD = function (date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = date.getDay()
  return days[dayOfWeek]
}

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
exports.H = function (date) {
  const hour = date.getHours()
  return hour
}

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
exports.HH = function (date) {
  const hour = date.getHours().toString()
  return (hour.length < 2) ? '0' + hour : hour
}

/**
 * Take a date object and output the abbreviated month
 * @param {Date}  a date object
 * @returns {String}  the abbreviated month
 */
exports.M = function (date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const month = date.getMonth()
  return months[month]
}

/**
 * Take a date object and output the month
 * @param {Date}  a date object
 * @returns {String}  the full month
 */
exports.MM = function (date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const month = date.getMonth()
  return months[month]
}

/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date}  a date object
 * @returns {String}  the date of the month with no leading zeros
 */
exports.d = function (date) {
  const day = date.getDate().toString()
  return day
}

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date}  a date object
 * @returns {String}  the two-digit date of the month
 */
exports.dd = function (date) {
  const day = date.getDate().toString()
  return (day.length < 2) ? '0' + day : day
}

/**
 * Take a date object and output the date of the month with no leading zeros but with the ordinal (1st-31st)
 * @param {Date}  a date object
 * @returns {String}  the date with no leading zeros but with the ordinal
 */
exports.dt = function (date) {
  let day = date.getDate()
  switch (day) {
    case 1:
    case 21:
    case 31:
      day += 'st'
      break
    case 2:
    case 22:
      day += 'nd'
      break
    case 3:
    case 23:
      day += 'rd'
      break
    default:
      day += 'th'
  }
  return day
}

/**
 * Take a date object and outpit the hour with no leading zeros (1-12)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
exports.h = function (date) {
  let hour = date.getHours()
  if (hour === 0) hour = 12
  hour = (hour < 13) ? hour : hour - 12
  return hour
}

/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
exports.hh = function (date) {
  let hour = date.getHours()
  if (hour === 0) hour = 12
  hour = (hour < 13) ? hour : hour - 12
  hour = hour.toString()
  return (hour.length < 2) ? '0' + hour : hour
}

/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
exports.l = function (date) {
  const milliseconds = date.getMilliseconds().toString()
  return milliseconds
}

/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
exports.ll = function (date) {
  let milliseconds = date.getMilliseconds().toString()
  switch (milliseconds.length) {
    case 1:
      milliseconds = '00' + milliseconds
      break
    case 2:
      milliseconds = '0' + milliseconds
      break
    default:
      milliseconds = '' + milliseconds
      break
  }
  return milliseconds
}

/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date}  a date object
 * @returns {String}  the month with no leading zeros
 */
exports.m = function (date) {
  const month = (date.getMonth() + 1).toString()
  return month
}

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date}  a date object
 * @returns {String}  the two-digit month
 */
exports.mm = function (date) {
  let month = (date.getMonth() + 1).toString()
  return (month.length < 2) ? '0' + month : month
}

/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
exports.s = function (date) {
  const second = date.getSeconds()
  return second
}

/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
exports.ss = function (date) {
  let second = date.getSeconds().toString()
  return (second.length < 2) ? '0' + second : second
}

/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
exports.t = function (date) {
  const minute = date.getMinutes().toString()
  return minute
}

/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
exports.tt = function (date) {
  let minute = date.getMinutes().toString()
  return (minute.length < 2) ? '0' + minute : minute
}

/**
 * Take a date object and output the two-digit year
 * @param {Date}  a date object
 * @returns {String}  the two-digit year
 */
exports.yy = function (date) {
  return date.getFullYear().toString().substr(2)
}

/**
 * Take a date object and output the four-digit year
 * @param {Date}  a date object
 * @returns {String}  the four-digit year
 */
exports.yyyy = function (date) {
  return date.getFullYear()
}

/**
 * Take a date object and output the timezone offset (UTC+-01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset
 */
exports.zz = function (date) {
  let offset = (date.getTimezoneOffset() / 60 * -1).toString()
  offset = (/^[-]?\d$/g.test(offset))
    ? offset.replace(/\d/, function (match, off) {
      return '0' + offset.charAt(off)
    })
    : offset
  if (!(/^[-]/g.test(offset))) offset = '+' + offset
  return 'UTC' + offset + ':00'
}

/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}    format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
exports.iso = function (date, format) {
  format = format || null
  if (format === 'short') return date.toISOString().split('T')[0]
  return date.toISOString()
}

/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param   {String}  format optional 'shart' to remove the time from the output
 * @returns {String} UTC string with or without time
 */

exports.utc = function (date, format) {
  format = format || null
  const utc = date.toUTCString()
  if (format === 'short') {
    const arr = utc.split(' ')
    let newArr = []

    for (let i = 0; i < 4; i++) {
      newArr.push(arr[i])
    }

    return newArr.join(' ')
  }
  return utc
}

/**
 * Converts a date object to UNIX time (milliseconds from January 1, 1970)
 * @param   {Date}   date a date object
 * @returns {Number} milliseconds from January 1, 1970
 */

exports.unix = function (date) {
  return Date.parse(date)
}
