import isDate from '../modules/is-date'

/**
 * Checks that the date object passed in is a valid Date instance, or throw a TypeError
 * @param   {Date}      date  a date object
 * @return  {Boolean}         true if validated
 */
export function validateDate (date) {
  if (isDate(date)) return true
  throw new TypeError(`Invalid date: ${date}`)
}

/**
 * Takes a function with args and returns a curried version of it
 * @param   {Function}  fn  A function to curry
 * @returns {Function}      A curried version of the original function
 */
export function curry (fn) {
  return (function resolver (...resolverArgs) {
    return (...args) => {
      const nextArgs = resolverArgs.concat(args.length ? args : null)
      const next = (nextArgs.length >= fn.length)
      ? fn
      : resolver
      return next(...nextArgs)
    }
  })()
}

/**
 * Returns the result of calling the second function with the result of the first function
 * @param {Function}  fn1  a function
 * @param {Function}  fn2  a function
 */
export function wrap (fn1, fn2) {
  return function (arg) {
    return fn2(fn1(arg))
  }
}
