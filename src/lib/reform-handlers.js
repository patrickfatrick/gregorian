import {
  UNIX,
  UTC_SHORT,
  UTC,
  ISO_SHORT,
  ISO,
  YEAR_FULL,
  YEAR,
  DAY_FULL,
  DAY,
  DATE_ORDINAL,
  DATE_FULL,
  DATE,
  MONTH_NAME_FULL,
  MONTH_NAME,
  MONTH_FULL,
  MONTH,
  HOUR_PERIOD_FULL,
  HOUR_PERIOD,
  HOUR_FULL,
  HOUR,
  MINUTE_FULL,
  MINUTE,
  PERIOD_UPPERCASE,
  PERIOD_LOWERCASE,
  SECOND_FULL,
  SECOND,
  MILLISECOND_FULL,
  MILLISECOND,
  TIMEZONE_OFFSET
} from './constants'

export default {
  /**
   * Take a date object and output the capitalized 12-hour clock period (AM/PM)
   * @param   {Date}   date   a date object
   * @returns {String}        the capitalized 12-hour clock period
   */
  [PERIOD_UPPERCASE] (date, { periods }) {
    const hour = date.getHours()
    const ampm = (hour < 12) ? periods[0].toUpperCase() : periods[1].toUpperCase()
    return ampm
  },

  /**
   * Take a date object and output the uncapitalized 12-hour clock period (am/pm)
   * @param   {Date}    date   a date object
   * @returns {String}         the uncapitalized 12-hour clock period
   */
  [PERIOD_LOWERCASE] (date, { periods }) {
    const hour = date.getHours()
    const ampm = (hour < 12) ? periods[0].toLowerCase() : periods[1].toLowerCase()
    return ampm
  },

  /**
   * Take a date object and output the abreviated day of the week
   * @param {Date}      date  a date object
   * @returns {String}        the abbreviated day of the week
   */
  [DAY] (date, { daysShort }) {
    const dayOfWeek = date.getDay()
    return daysShort[dayOfWeek]
  },

  /**
   * Take a date object and output the day of the week
   * @param {Date}      date  a date object
   * @returns {String}        the full day of the week
   */
  [DAY_FULL] (date, { daysLong }) {
    const dayOfWeek = date.getDay()
    return daysLong[dayOfWeek]
  },

  /**
   * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
   * @param   {Date}    date   a date object
   * @returns {String}         the hour with no leading zeros
   */
  [HOUR] (date) {
    const hour = date.getHours()
    return hour
  },

  /**
   * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
   * @param   {Date}    date    a date object
   * @returns {String}          the hour with no leading zeros
   */
  [HOUR_FULL] (date) {
    const hour = date.getHours().toString()
    return (hour.length < 2) ? '0' + hour : hour
  },

  /**
   * Take a date object and output the abbreviated month
   * @param   {Date}      date  a date object
   * @returns {String}          the abbreviated month
   */
  [MONTH_NAME] (date, { monthsShort }) {
    const month = date.getMonth()
    return monthsShort[month]
  },

  /**
   * Take a date object and output the month
   * @param   {Date}    date   a date object
   * @returns {String}         the full month
   */
  [MONTH_NAME_FULL] (date, { monthsLong }) {
    const month = date.getMonth()
    return monthsLong[month]
  },

  /**
   * Take a date object and output the date of the month with no leading zeros (1-31)
   * @param   {Date}    date  a date object
   * @returns {String}        the date of the month with no leading zeros
   */
  [DATE] (date) {
    const day = date.getDate().toString()
    return day
  },

  /**
   * Take a date object and output the two-digit date of the month (01-31)
   * @param   {Date}    date  a date object
   * @returns {String}        the two-digit date of the month
   */
  [DATE_FULL] (date) {
    const day = date.getDate().toString()
    return (day.length < 2) ? '0' + day : day
  },

  /**
   * Take a date object and output the date of the month with no leading zeros but with the ordinal (1st-31st)
   * @param   {Date}    date  a date object
   * @returns {String}        the date with no leading zeros but with the ordinal
   */
  [DATE_ORDINAL] (date, { ordinals }) {
    const day = date.getDate()
    return day + (ordinals[day] || ordinals.default)
  },

  /**
   * Take a date object and outpit the hour with no leading zeros (1-12)
   * @param   {Date}    date  a date object
   * @returns {String}        the hour with no leading zeros
   */
  [HOUR_PERIOD] (date) {
    let hour = date.getHours()
    if (hour === 0) hour = 12
    hour = (hour < 13) ? hour : hour - 12
    return hour
  },

  /**
   * Take a date object and output the two-digit hour (01-12)
   * @param   {Date}    date  a date object
   * @returns {String}        the two-digit hour
   */
  [HOUR_PERIOD_FULL] (date) {
    let hour = date.getHours()
    if (hour === 0) hour = 12
    hour = (hour < 13) ? hour : hour - 12
    hour = hour.toString()
    return (hour.length < 2) ? '0' + hour : hour
  },

  /**
   * Take a date object and output the milliseconds with no leading zeros (0-999)
   * @param   {Date}    date  a date object
   * @returns {String}        the number of milliseconds
   */
  [MILLISECOND] (date) {
    const milliseconds = date.getMilliseconds().toString()
    return milliseconds
  },

  /**
   * Take a date object and and output the three-digit milliseconds (000-999)
   * @param   {Date}    date  a date object
   * @returns {String}        the number of milliseconds
   */
  [MILLISECOND_FULL] (date) {
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
  },

  /**
   * Take a date object and output the numeric month (1-12)
   * @param   {Date}    date  a date object
   * @returns {String}        the month with no leading zeros
   */
  [MONTH] (date) {
    const month = (date.getMonth() + 1).toString()
    return month
  },

  /**
   * Take a date object and output the two-digit month (01-12)
   * @param {Date}      date  a date object
   * @returns {String}        the two-digit month
   */
  [MONTH_FULL] (date) {
    let month = (date.getMonth() + 1).toString()
    return (month.length < 2) ? '0' + month : month
  },

  /**
   * Take a date object and outpit the seconds with no leading zeros (0-59)
   * @param   {Date}    date  a date object
   * @returns {String}        the seconds with no leading zeros
   */
  [SECOND] (date) {
    const second = date.getSeconds()
    return second
  },

  /**
   * Take a date object and output the two-digit seconds (0-59)
   * @param   {Date}    date  a date object
   * @returns {String}        the two-digit seconds
   */
  [SECOND_FULL] (date) {
    let second = date.getSeconds().toString()
    return (second.length < 2) ? '0' + second : second
  },

  /**
   * Take a date object and output the minutes with no leading zeros
   * @param   {Date}    date  a date object
   * @returns {String}        the minutes with no leading zeros
   */
  [MINUTE] (date) {
    const minute = date.getMinutes().toString()
    return minute
  },

  /**
   * Take a date object and output the two-digit minutes
   * @param   {Date}   date   a date object
   * @returns {String}        the two-digit minutes
   */
  [MINUTE_FULL] (date) {
    let minute = date.getMinutes().toString()
    return (minute.length < 2) ? '0' + minute : minute
  },

  /**
   * Take a date object and output the two-digit year
   * @param {Date}      date  a date object
   * @returns {String}        the two-digit year
   */
  [YEAR] (date) {
    return date.getFullYear().toString().substr(2)
  },

  /**
   * Take a date object and output the four-digit year
   * @param   {Date}    date  a date object
   * @returns {String}        the four-digit year
   */
  [YEAR_FULL] (date) {
    return date.getFullYear()
  },

  /**
   * Take a date object and output the timezone offset (UTC+-01:00, etc.)
   * @param   {Date}   date   a date object
   * @returns {String}        the timezone offset
   */
  [TIMEZONE_OFFSET] (date, { utc }) {
    let offset = (date.getTimezoneOffset() / 60 * -1).toString()
    offset = (/^[-]?\d$/g.test(offset))
      ? offset.replace(/\d/, function (match, off) {
        return '0' + offset.charAt(off)
      })
      : offset
    if (!(/^[-]/g.test(offset))) offset = '+' + offset
    return utc + offset + ':00'
  },

  /**
   * Converts a date object to an ISO string
   * @param   {Date}    date    a date object
   * @returns {String}          ISO String without time
   */
  [ISO_SHORT] (date) {
    return this[ISO](date, 'short')
  },

  /**
   * Converts a date object to an ISO string
   * @param   {Date}    date    a date object
   * @param   {String}  format  optional 'short' to remove the time
   * @returns {String}          ISO String with or without time
   */
  [ISO] (date, format = '') {
    if (format === 'short') return date.toISOString().split('T')[0]
    return date.toISOString()
  },

  /**
   * Converts a date object to a UTC string
   * @param   {Date}    date    a date object
   * @returns {String}          UTC string without time
   */
  [UTC_SHORT] (date) {
    return this[UTC](date, 'short')
  },

  /**
   * Converts a date object to a UTC string
   * @param   {Date}    date    a date object
   * @param   {String}  format  optional 'shart' to remove the time from the output
   * @returns {String}          UTC string with or without time
   */
  [UTC] (date, format = '') {
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
  },

  /**
   * Converts a date object to UNIX time (milliseconds from January 1, 1970)
   * @param   {Date}    date  a date object
   * @returns {Number}        milliseconds from January 1, 1970
   */
  [UNIX] (date) {
    return Date.parse(date)
  }
}
