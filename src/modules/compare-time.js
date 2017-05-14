import { validateDate, curry, diff } from '../lib/utils'

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {Date}  input1   date object
 * @param   {Date}  input2   date object
 * @returns {Number}         1 if input2 is greater, -1 if input1 is greated, 0 if they are the same
 */
export const compareTime = curry((input1, input2) => {
  input1 = input1 || new Date()
  input2 = input2 || new Date()
  validateDate(input1)
  validateDate(input2)

  const difference = diff(input1, input2)
  if (difference === 0) return 0
  else if (difference < 0) return -1
  else return 1
})
