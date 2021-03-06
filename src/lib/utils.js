/**
 * Determines if an input is a Date instance with a valid date
 * @param   {Object}  input   anything, but preferably a Date object
 * @returns {Boolean}         whether or not the input is a valid Date
 */
export function isDate(input) {
  return input instanceof Date && !Number.isNaN(Date.parse(input));
}

/**
 * Determines if the given date is in a leap year
 * @param  {Date}    input a date object
 * @param  {String}  UTC   either 'UTC' or an empty string
 * @return {Boolean}       whether the date is in a leap year or not
 */
export function isLeapYear(date, UTC = '') {
  const year = date[`get${UTC}FullYear`]();
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

/**
 * Checks that the date object passed in is a valid Date instance, or throw a TypeError
 * @param   {Date}      date  a date object
 * @return  {Boolean}         true if validated
 */
export function validateDate(date) {
  if (isDate(date)) {
    return true;
  }
  throw new TypeError(`Invalid date: ${date}`);
}

/**
 * Returns the difference between two date objects
 * @param   {Date}    date1 a date object
 * @param   {Date}    date2 a date object
 * @return  {Number}        difference between the dates
 */
export function difference(date1, date2) {
  return date2.valueOf() - date1.valueOf();
}

/**
 * Takes a function with args and returns a curried version of it
 * @param   {Function}  fn  A function to curry
 * @returns {Function}      A curried version of the original function
 */
export function curry(fn) {
  return (function resolver(...resolverArgs) {
    return (...args) => {
      const nextArgs = resolverArgs.concat(args.length ? args : null);
      const next = nextArgs.length >= fn.length ? fn : resolver;
      return next(...nextArgs);
    };
  })();
}

/**
 * Returns the result of calling the second function with the result of the first function
 * @param {Function}  fn1  a function
 * @param {Function}  fn2  a function
 */
export function wrap(fn1, fn2) {
  return function (arg) {
    return fn2(fn1(arg));
  };
}

export function entries(input) {
  if (input instanceof Map) return Array.from(input.entries());
  return Object.entries(input);
}
