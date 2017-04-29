import {
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
 * Sets the date or time to the start of the specified increment
 * @param   {String}    increment   an increment to set the date back to
 * @param   {Date}      date        a date object
 * @returns {Date}                  a new date
 */
function resetLocalOrResetUTC (increment, date, utc) {
  const incrementHandlers = {
    [SECOND] (date) {
      return new Date(date[`set${utc}Seconds`](date[`get${utc}Seconds`](), 0))
    },

    [MINUTE] (date) {
      return new Date(date[`set${utc}Minutes`](date[`get${utc}Minutes`](), 0, 0))
    },

    [HOUR] (date) {
      return new Date(date[`set${utc}Hours`](date[`get${utc}Hours`](), 0, 0, 0))
    },

    [DATE] (date) {
      date[`set${utc}Date`](date[`get${utc}Date`]())
      date[`set${utc}Hours`](0, 0, 0, 0)

      return new Date(date)
    },

    [WEEK] (date) {
      date[`set${utc}Date`](date[`get${utc}Date`]() - date[`get${utc}Day`]())
      date[`set${utc}Hours`](0, 0, 0, 0)

      return new Date(date)
    },

    [MONTH] (date) {
      date[`set${utc}Month`](date[`get${utc}Month`](), 1)
      date[`set${utc}Hours`](0, 0, 0, 0)

      return new Date(date)
    },

    [YEAR] (date) {
      date[`set${utc}FullYear`](date[`get${utc}FullYear`](), 0, 1)
      date[`set${utc}Hours`](0, 0, 0, 0)

      return new Date(date)
    }
  }

  return incrementHandlers[increment](date)
}

export const resetUTC = curry((increment, input) => {
  if (input instanceof Function) return wrap(resetUTC(increment), input)

  input = input || new Date()
  validateDate(input)
  return resetLocalOrResetUTC(increment, input, 'UTC')
})

export const resetLocal = curry((increment, input) => {
  if (input instanceof Function) return wrap(resetLocal(increment), input)

  input = input || new Date()
  validateDate(input)
  return resetLocalOrResetUTC(increment, input, '')
})
