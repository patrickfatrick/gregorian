'use strict'

/**
 * Sets the date or time to specified interval
 * @param   {String} increment an increment to set
 * @param {String} value what to set the increment to
 * @returns {Object} a new gregorian object
 */
function set (value, increment) {
  let increments = {}

  increments.l = (date) => {
    return new Date(date.setMilliseconds(value))
  }
  increments.s = (date) => {
    return new Date(date.setSeconds(value))
  }
  increments.t = (date) => {
    return new Date(date.setMinutes(value))
  }
  increments.h = (date) => {
    return new Date(date.setHours(value))
  }
  increments.d = (date) => {
    return new Date(date.setDate(value))
  }
  increments.D = (date) => {
    return new Date(date.setDate(date.getDate() - date.getDay() + value))
  }
  increments.w = (date) => {
    let currentDay = date.getDay()
    let currentMilliseconds = date.getMilliseconds()
    date.setFullYear(date.getFullYear(), 0, value * 7)
    let n = currentDay - date.getDay()
    date.setDate(date.getDate() + n)
    return new Date(date.setMilliseconds(currentMilliseconds))
  }
  increments.m = (date) => {
    let newMonth = value - 1
    let newYear = date.getFullYear()
    let newDate = date.getDate()

    if (newDate > new Date(date.setFullYear(newYear, newMonth + 1, 0)).getDate()) {
      return new Date(date.setFullYear(newYear, newMonth + 1, 0))
    } else {
      return new Date(date.setFullYear(newYear, newMonth, newDate))
    }
  }
  increments.y = (date) => {
    let newYear = value
    let newMonth = date.getMonth()
    let newDate = date.getDate()

    if (newDate > new Date(date.setFullYear(newYear, newMonth + 1, 0)).getDate()) {
      return new Date(date.setFullYear(newYear, newMonth + 1, 0))
    } else {
      return new Date(date.setFullYear(newYear, newMonth, newDate))
    }
  }

  this.d = increments[increment](this.d)
  return this
}

module.exports = set
