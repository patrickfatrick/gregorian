import {
  MILLISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DATE,
  WEEK,
  MONTH,
  YEAR
} from '../lib/constants'
import { validateDate, curry, wrap } from '../lib/utils'

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {String}  increment   an increment to add
 * @param   {Number}  n           factor to add or subtract the increment by
 * @param   {Date}    date        date object
 * @returns {Date}                a new date
 */
function addTimeOrSubtractTime (increment, n, date) {
  let incrementHandlers = {
    [MILLISECOND] (date) {
      return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n))
    },

    [SECOND] (date) {
      return new Date(date.setUTCSeconds(date.getUTCSeconds() + n))
    },

    [MINUTE] (date) {
      return new Date(date.setUTCMinutes(date.getUTCMinutes() + n))
    },

    [HOUR] (date) {
      return new Date(date.setUTCHours(date.getUTCHours() + n))
    },

    [DATE] (date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n))
    },

    [WEEK] (date) {
      return new Date(date.setUTCDate(date.getUTCDate() + (n * 7)))
    },

    [MONTH] (date) {
      let newMonth = date.getUTCMonth() + n
      let newYear = date.getUTCFullYear()
      let newDate = date.getUTCDate()

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0))
      } else {
        return new Date(date.setUTCFullYear(newYear, newMonth, newDate))
      }
    },

    [YEAR] (date) {
      let newYear = date.getUTCFullYear() + n
      let newMonth = date.getUTCMonth()
      let newDate = date.getUTCDate()

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0))
      } else {
        return new Date(date.setUTCFullYear(newYear, newMonth, newDate))
      }
    }
  }

  return incrementHandlers[increment](date)
}

export const addTime = curry((increment, n, thing) => {
  if (thing instanceof Function) return wrap(addTime(increment, n), thing)

  thing = thing || new Date()
  validateDate(thing)
  return addTimeOrSubtractTime(increment, n * 1, thing)
})

export const subtractTime = curry((increment, n, thing) => {
  if (thing instanceof Function) return wrap(subtractTime(increment, n), thing)

  thing = thing || new Date()
  validateDate(thing)
  return addTimeOrSubtractTime(increment, n * -1, thing)
})

export const addTimeSequence = curry((sequence, thing) => {
  if (thing instanceof Function) return wrap(addTimeSequence(sequence), thing)

  thing = thing || new Date()
  validateDate(thing)
  return sequence.reduce((acc, cur) => addTimeOrSubtractTime(cur[0], cur[1] * 1, acc), thing)
})

export const subtractTimeSequence = curry((sequence, thing) => {
  if (thing instanceof Function) return wrap(subtractTimeSequence(sequence), thing)

  thing = thing || new Date()
  validateDate(thing)
  return sequence.reduce((acc, cur) => addTimeOrSubtractTime(cur[0], cur[1] * -1, acc), thing)
})
