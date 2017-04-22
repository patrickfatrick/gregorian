import isDate from '../modules/is-date'

/**
 * Checks that the date object passed in is a valid Date instance, or throw a TypeError
 * @param   {Date}      date  a date object
 * @return  {Boolean}         true if validated
 */
export function validateDate (date, fnName) {
  if (isDate(date)) return true
  throw new TypeError(`Invalid date passed to ${fnName}`)
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
