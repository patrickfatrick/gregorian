'use strict'

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */
function restart (increment) {
  let increments = {}

  increments.s = (date) => {
    return new Date(date.setSeconds(date.getSeconds(), 0))
  }
  increments.t = (date) => {
    return new Date(date.setMinutes(date.getMinutes(), 0, 0))
  }
  increments.h = (date) => {
    return new Date(date.setHours(date.getHours(), 0, 0, 0))
  }
  increments.d = (date) => {
    date.setDate(date.getDate())
    date.setHours(0, 0, 0, 0)
    return new Date(date)
  }
  increments.w = (date) => {
    date.setDate(date.getDate() - date.getDay())
    date.setHours(0, 0, 0, 0)
    return new Date(date)
  }
  increments.m = (date) => {
    date.setMonth(date.getMonth(), 1)
    date.setHours(0, 0, 0, 0)
    return new Date(date)
  }
  increments.y = (date) => {
    date.setFullYear(date.getFullYear(), 0, 1)
    date.setHours(0, 0, 0, 0)
    return new Date(date)
  }

  this.d = increments[increment](this.d)
  return this
}

module.exports = restart
