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
import { validateDate, curry, diff } from '../lib/utils'

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {String}  increment   an increment to add
 * @param   {Number}  date1       date object
 * @param   {Date}    date2       date object
 * @returns {Number}              numeric difference between the dates in the specific increment
 */
function diffIt (increment, date1, date2) {
  let incrementHandlers = {
    [MILLISECOND] (date1, date2) {
      return diff(date1, date2)
    },

    [SECOND] (date1, date2) {
      return diff(date1, date2) / 1000
    },

    [MINUTE] (date1, date2) {
      return this[SECOND](date1, date2) / 60
    },

    [HOUR] (date1, date2) {
      return this[MINUTE](date1, date2) / 60
    },

    [DATE] (date1, date2) {
      return this[HOUR](date1, date2) / 24
    },

    [WEEK] (date1, date2) {
      return this[DATE](date1, date2) / 7
    },

    [MONTH] (date) {
      return this[DATE](date1, date2) / 30.44 // 365.25 / 12
    },

    [YEAR] (date) {
      return this[DATE](date1, date2) / 365.25 // Leap-year friendly
    }
  }

  return incrementHandlers[increment](date1, date2)
}

export const diffTime = curry((increment, input1, input2) => {
  input1 = input1 || new Date()
  input2 = input2 || new Date()
  validateDate(input1)
  validateDate(input2)
  return diffIt(increment, input1, input2)
})
