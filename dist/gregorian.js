/**
 * We declare the string replacements (for reformat) here in one place so
 * we don't have to keep track of them elsewhere
 *
 * Note: Month and Day methods are 1-indexed rather than 0-indexed as they would be with native methods
 * This was a tough decision but ultimately I think consistency within the library is more important than
 * consistency with the native Date methods
 *
 * Given the date 1988-04-11T12:45:00.000Z, assuming a locale in Eastern Standard Time:
 */

var UNIX = 'unix'; // 576747900000
var UTC_SHORT = 'utc-short'; // Mon, 11 Apr 1988
var UTC = 'utc'; // Mon, 11 Apr 1988 12:45:00 GMT
var ISO_SHORT = 'iso-short'; // 1988-04-11
var ISO = 'iso'; // 1988-04-11T12:45:00.000Z
var YEAR_FULL = 'Y'; // 1988
var YEAR = 'y'; // 88
var DAY_FULL = 'E'; // Monday
var DAY = 'e'; // Mon (or 2, when used in get/set)
var DATE_ORDINAL = 'o'; // 11th
var DATE_FULL = 'D'; // 11 (adds leading zeros)
var DATE = 'd'; // 11
var MONTH_NAME_FULL = 'N'; // April
var MONTH_NAME = 'n'; // Apr
var MONTH_FULL = 'M'; // 04 (adds leading zeros)
var MONTH = 'm'; // 4
var HOUR_PERIOD_FULL = 'G'; // 07 (12-hour clock; adds leading zeros)
var HOUR_PERIOD = 'g'; // 7 (12-hour clock)
var HOUR_FULL = 'H'; // 07 (24-hour clock; adds leading zeros)
var HOUR = 'h'; // 7 (24-hour clock)
var MINUTE_FULL = 'T'; // 45 (adds leading zeros)
var MINUTE = 't'; // 45
var PERIOD_UPPERCASE = 'P'; // AM
var PERIOD_LOWERCASE = 'p'; // am
var SECOND_FULL = 'S'; // 00 (adds leading zeros)
var SECOND = 's'; // 0
var MILLISECOND_FULL = 'L'; // 000 (adds leading zeros)
var MILLISECOND = 'l'; // 0
var TIMEZONE_OFFSET = 'z'; // UTC-05:00
var WEEK = 'w'; // 14

var constants = Object.freeze({
	UNIX: UNIX,
	UTC_SHORT: UTC_SHORT,
	UTC: UTC,
	ISO_SHORT: ISO_SHORT,
	ISO: ISO,
	YEAR_FULL: YEAR_FULL,
	YEAR: YEAR,
	DAY_FULL: DAY_FULL,
	DAY: DAY,
	DATE_ORDINAL: DATE_ORDINAL,
	DATE_FULL: DATE_FULL,
	DATE: DATE,
	MONTH_NAME_FULL: MONTH_NAME_FULL,
	MONTH_NAME: MONTH_NAME,
	MONTH_FULL: MONTH_FULL,
	MONTH: MONTH,
	HOUR_PERIOD_FULL: HOUR_PERIOD_FULL,
	HOUR_PERIOD: HOUR_PERIOD,
	HOUR_FULL: HOUR_FULL,
	HOUR: HOUR,
	MINUTE_FULL: MINUTE_FULL,
	MINUTE: MINUTE,
	PERIOD_UPPERCASE: PERIOD_UPPERCASE,
	PERIOD_LOWERCASE: PERIOD_LOWERCASE,
	SECOND_FULL: SECOND_FULL,
	SECOND: SECOND,
	MILLISECOND_FULL: MILLISECOND_FULL,
	MILLISECOND: MILLISECOND,
	TIMEZONE_OFFSET: TIMEZONE_OFFSET,
	WEEK: WEEK
});

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _PERIOD_UPPERCASE$PER;

var reformHandlers = (_PERIOD_UPPERCASE$PER = {}, defineProperty(_PERIOD_UPPERCASE$PER, PERIOD_UPPERCASE, function (date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'AM' : 'PM';
  return ampm;
}), defineProperty(_PERIOD_UPPERCASE$PER, PERIOD_LOWERCASE, function (date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'am' : 'pm';
  return ampm;
}), defineProperty(_PERIOD_UPPERCASE$PER, DAY, function (date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
}), defineProperty(_PERIOD_UPPERCASE$PER, DAY_FULL, function (date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
}), defineProperty(_PERIOD_UPPERCASE$PER, HOUR, function (date) {
  var hour = date.getHours();
  return hour;
}), defineProperty(_PERIOD_UPPERCASE$PER, HOUR_FULL, function (date) {
  var hour = date.getHours().toString();
  return hour.length < 2 ? '0' + hour : hour;
}), defineProperty(_PERIOD_UPPERCASE$PER, MONTH_NAME, function (date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
}), defineProperty(_PERIOD_UPPERCASE$PER, MONTH_NAME_FULL, function (date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
}), defineProperty(_PERIOD_UPPERCASE$PER, DATE, function (date) {
  var day = date.getDate().toString();
  return day;
}), defineProperty(_PERIOD_UPPERCASE$PER, DATE_FULL, function (date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
}), defineProperty(_PERIOD_UPPERCASE$PER, DATE_ORDINAL, function (date) {
  var day = date.getDate();
  switch (day) {
    case 1:
    case 21:
    case 31:
      day += 'st';
      break;
    case 2:
    case 22:
      day += 'nd';
      break;
    case 3:
    case 23:
      day += 'rd';
      break;
    default:
      day += 'th';
  }
  return day;
}), defineProperty(_PERIOD_UPPERCASE$PER, HOUR_PERIOD, function (date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  hour = hour < 13 ? hour : hour - 12;
  return hour;
}), defineProperty(_PERIOD_UPPERCASE$PER, HOUR_PERIOD_FULL, function (date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  hour = hour < 13 ? hour : hour - 12;
  hour = hour.toString();
  return hour.length < 2 ? '0' + hour : hour;
}), defineProperty(_PERIOD_UPPERCASE$PER, MILLISECOND, function (date) {
  var milliseconds = date.getMilliseconds().toString();
  return milliseconds;
}), defineProperty(_PERIOD_UPPERCASE$PER, MILLISECOND_FULL, function (date) {
  var milliseconds = date.getMilliseconds().toString();
  switch (milliseconds.length) {
    case 1:
      milliseconds = '00' + milliseconds;
      break;
    case 2:
      milliseconds = '0' + milliseconds;
      break;
    default:
      milliseconds = '' + milliseconds;
      break;
  }
  return milliseconds;
}), defineProperty(_PERIOD_UPPERCASE$PER, MONTH, function (date) {
  var month = (date.getMonth() + 1).toString();
  return month;
}), defineProperty(_PERIOD_UPPERCASE$PER, MONTH_FULL, function (date) {
  var month = (date.getMonth() + 1).toString();
  return month.length < 2 ? '0' + month : month;
}), defineProperty(_PERIOD_UPPERCASE$PER, SECOND, function (date) {
  var second = date.getSeconds();
  return second;
}), defineProperty(_PERIOD_UPPERCASE$PER, SECOND_FULL, function (date) {
  var second = date.getSeconds().toString();
  return second.length < 2 ? '0' + second : second;
}), defineProperty(_PERIOD_UPPERCASE$PER, MINUTE, function (date) {
  var minute = date.getMinutes().toString();
  return minute;
}), defineProperty(_PERIOD_UPPERCASE$PER, MINUTE_FULL, function (date) {
  var minute = date.getMinutes().toString();
  return minute.length < 2 ? '0' + minute : minute;
}), defineProperty(_PERIOD_UPPERCASE$PER, YEAR, function (date) {
  return date.getFullYear().toString().substr(2);
}), defineProperty(_PERIOD_UPPERCASE$PER, YEAR_FULL, function (date) {
  return date.getFullYear();
}), defineProperty(_PERIOD_UPPERCASE$PER, TIMEZONE_OFFSET, function (date) {
  var offset = (date.getTimezoneOffset() / 60 * -1).toString();
  offset = /^[-]?\d$/g.test(offset) ? offset.replace(/\d/, function (match, off) {
    return '0' + offset.charAt(off);
  }) : offset;
  if (!/^[-]/g.test(offset)) offset = '+' + offset;
  return 'UTC' + offset + ':00';
}), defineProperty(_PERIOD_UPPERCASE$PER, ISO, function (date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (format === 'short') return date.toISOString().split('T')[0];
  return date.toISOString();
}), defineProperty(_PERIOD_UPPERCASE$PER, ISO_SHORT, function (date) {
  return this[ISO](date, 'short');
}), defineProperty(_PERIOD_UPPERCASE$PER, UTC, function (date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var utc = date.toUTCString();
  if (format === 'short') {
    var arr = utc.split(' ');
    var newArr = [];

    for (var i = 0; i < 4; i++) {
      newArr.push(arr[i]);
    }

    return newArr.join(' ');
  }
  return utc;
}), defineProperty(_PERIOD_UPPERCASE$PER, UTC_SHORT, function (date) {
  return this[UTC](date, 'short');
}), defineProperty(_PERIOD_UPPERCASE$PER, UNIX, function (date) {
  return Date.parse(date);
}), _PERIOD_UPPERCASE$PER);

function isDate(date) {
  return date instanceof Date && !Number.isNaN(Date.parse(date));
}

/**
 * Checks that the date object passed in is a valid Date instance, or throw a TypeError
 * @param   {Date}      date  a date object
 * @return  {Boolean}         true if validated
 */
function validateDate(date) {
  if (isDate(date)) return true;
  throw new TypeError('Invalid date: ' + date);
}

/**
 * Takes a function with args and returns a curried version of it
 * @param   {Function}  fn  A function to curry
 * @returns {Function}      A curried version of the original function
 */
function curry(fn) {
  return function resolver() {
    for (var _len = arguments.length, resolverArgs = Array(_len), _key = 0; _key < _len; _key++) {
      resolverArgs[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var nextArgs = resolverArgs.concat(args.length ? args : null);
      var next = nextArgs.length >= fn.length ? fn : resolver;
      return next.apply(undefined, toConsumableArray(nextArgs));
    };
  }();
}

/**
 * Returns the result of calling the second function with the result of the first function
 * @param {Function}  fn1  a function
 * @param {Function}  fn2  a function
 */
function wrap(fn1, fn2) {
  return function (arg) {
    return fn2(fn1(arg));
  };
}

/**
 * Take a Date object and output the reformatted string
 * See ../lib/constants.js for details
 * @param     {String}  format    a string or date object (something that can be converted to a valid date)
 * @param     {Date}    date      a date object
 * @returns   {String}            the date formatted into the specified format
 */
var reform = curry(function (format, date) {
  date = date || new Date();
  validateDate(date);
  var pieces = Object.values(constants);
  var converted = format;

  pieces.forEach(function (piece) {
    var re = new RegExp('\\b' + piece + '\\b', 'g');
    var replacer = void 0;
    if (re.test(converted)) {
      switch (piece) {
        case 'unix':
        case 'utc-short':
        case 'utc':
        case 'iso-short':
        case 'iso':
          converted = reformHandlers[piece](date);
          break;
        default:
          replacer = reformHandlers[piece](date);
          converted = converted.replace(re, replacer);
          break;
      }
    }
  });

  // Remove the delimiter from the string after conversion
  if (typeof converted === 'string') {
    converted = converted.replace(/\|/g, '');
  }

  return converted;
});

/**
 * Adds or subtracts specified increments to or from a date object
 * @param   {String}  increment   an increment to add
 * @param   {Number}  n           factor to add or subtract the increment by
 * @param   {Date}    date        date object
 * @returns {Date}                a new date
 */
function addTimeOrSubtractTime(increment, n, date) {
  var _incrementHandlers;

  var incrementHandlers = (_incrementHandlers = {}, defineProperty(_incrementHandlers, MILLISECOND, function (date) {
    return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n));
  }), defineProperty(_incrementHandlers, SECOND, function (date) {
    return new Date(date.setUTCSeconds(date.getUTCSeconds() + n));
  }), defineProperty(_incrementHandlers, MINUTE, function (date) {
    return new Date(date.setUTCMinutes(date.getUTCMinutes() + n));
  }), defineProperty(_incrementHandlers, HOUR, function (date) {
    return new Date(date.setUTCHours(date.getUTCHours() + n));
  }), defineProperty(_incrementHandlers, DATE, function (date) {
    return new Date(date.setUTCDate(date.getUTCDate() + n));
  }), defineProperty(_incrementHandlers, WEEK, function (date) {
    return new Date(date.setUTCDate(date.getUTCDate() + n * 7));
  }), defineProperty(_incrementHandlers, MONTH, function (date) {
    var newMonth = date.getUTCMonth() + n;
    var newYear = date.getUTCFullYear();
    var newDate = date.getUTCDate();

    if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
      return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
    } else {
      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    }
  }), defineProperty(_incrementHandlers, YEAR, function (date) {
    var newYear = date.getUTCFullYear() + n;
    var newMonth = date.getUTCMonth();
    var newDate = date.getUTCDate();

    if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
      return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
    } else {
      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    }
  }), _incrementHandlers);

  return incrementHandlers[increment](date);
}

var addTime = curry(function (increment, n, thing) {
  if (thing instanceof Function) return wrap(addTime(increment, n), thing);

  thing = thing || new Date();
  validateDate(thing);
  return addTimeOrSubtractTime(increment, n * 1, thing);
});

var subtractTime = curry(function (increment, n, thing) {
  if (thing instanceof Function) return wrap(subtractTime(increment, n), thing);

  thing = thing || new Date();
  validateDate(thing);
  return addTimeOrSubtractTime(increment, n * -1, thing);
});

var addTimeSequence = curry(function (sequence, thing) {
  if (thing instanceof Function) return wrap(addTimeSequence(sequence), thing);

  thing = thing || new Date();
  validateDate(thing);
  return sequence.reduce(function (acc, cur) {
    return addTimeOrSubtractTime(cur[0], cur[1] * 1, acc);
  }, thing);
});

var subtractTimeSequence = curry(function (sequence, thing) {
  if (thing instanceof Function) return wrap(subtractTimeSequence(sequence), thing);

  thing = thing || new Date();
  validateDate(thing);
  return sequence.reduce(function (acc, cur) {
    return addTimeOrSubtractTime(cur[0], cur[1] * -1, acc);
  }, thing);
});

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String}    increment   an increment to set the date back to
 * @param   {Date}      date        a date object
 * @returns {Date}                  a new date
 */
function resetLocalOrResetUTC(increment, date, utc) {
  var _incrementHandlers;

  var incrementHandlers = (_incrementHandlers = {}, defineProperty(_incrementHandlers, SECOND, function (date) {
    return new Date(date['set' + utc + 'Seconds'](date['get' + utc + 'Seconds'](), 0));
  }), defineProperty(_incrementHandlers, MINUTE, function (date) {
    return new Date(date['set' + utc + 'Minutes'](date['get' + utc + 'Minutes'](), 0, 0));
  }), defineProperty(_incrementHandlers, HOUR, function (date) {
    return new Date(date['set' + utc + 'Hours'](date['get' + utc + 'Hours'](), 0, 0, 0));
  }), defineProperty(_incrementHandlers, DATE, function (date) {
    date['set' + utc + 'Date'](date['get' + utc + 'Date']());
    date['set' + utc + 'Hours'](0, 0, 0, 0);

    return new Date(date);
  }), defineProperty(_incrementHandlers, WEEK, function (date) {
    date['set' + utc + 'Date'](date['get' + utc + 'Date']() - date['get' + utc + 'Day']());
    date['set' + utc + 'Hours'](0, 0, 0, 0);

    return new Date(date);
  }), defineProperty(_incrementHandlers, MONTH, function (date) {
    date['set' + utc + 'Month'](date['get' + utc + 'Month'](), 1);
    date['set' + utc + 'Hours'](0, 0, 0, 0);

    return new Date(date);
  }), defineProperty(_incrementHandlers, YEAR, function (date) {
    date['set' + utc + 'FullYear'](date['get' + utc + 'FullYear'](), 0, 1);
    date['set' + utc + 'Hours'](0, 0, 0, 0);

    return new Date(date);
  }), _incrementHandlers);

  return incrementHandlers[increment](date);
}

var resetUTC = curry(function (increment, thing) {
  if (thing instanceof Function) return wrap(resetUTC(increment), thing);

  thing = thing || new Date();
  validateDate(thing);
  return resetLocalOrResetUTC(increment, thing, 'UTC');
});

var resetLocal = curry(function (increment, thing) {
  if (thing instanceof Function) return wrap(resetLocal(increment), thing);

  thing = thing || new Date();
  validateDate(thing);
  return resetLocalOrResetUTC(increment, thing, '');
});

/**
 * Sets the date or time to specified interval
 * @param     {String}  increment   an increment to set
 * @param     {String}  value       what to set the increment to
 * @param     {Date}    date        a date object
 * @returns   {Object}              a new gregorian object
 */
function setLocalOrSetUTC(increment, value, date) {
  var _incrementHandlers;

  var utc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var incrementHandlers = (_incrementHandlers = {}, defineProperty(_incrementHandlers, MILLISECOND, function (date) {
    return new Date(date['set' + utc + 'Milliseconds'](value));
  }), defineProperty(_incrementHandlers, SECOND, function (date) {
    return new Date(date['set' + utc + 'Seconds'](value));
  }), defineProperty(_incrementHandlers, MINUTE, function (date) {
    return new Date(date['set' + utc + 'Minutes'](value));
  }), defineProperty(_incrementHandlers, HOUR, function (date) {
    return new Date(date['set' + utc + 'Hours'](value));
  }), defineProperty(_incrementHandlers, DATE, function (date) {
    return new Date(date['set' + utc + 'Date'](value));
  }), defineProperty(_incrementHandlers, DAY, function (date) {
    return new Date(date['set' + utc + 'Date'](date['get' + utc + 'Date']() - date['get' + utc + 'Day']() + (value - 1)));
  }), defineProperty(_incrementHandlers, WEEK, function (date) {
    var currentDay = date['get' + utc + 'Day']();
    var currentMilliseconds = date['get' + utc + 'Milliseconds']();

    date['set' + utc + 'FullYear'](date['get' + utc + 'FullYear'](), 0, value * 7);

    var n = currentDay - date['get' + utc + 'Day']();

    date['set' + utc + 'Date'](date['get' + utc + 'Date']() + n);

    return new Date(date['set' + utc + 'Milliseconds'](currentMilliseconds));
  }), defineProperty(_incrementHandlers, MONTH, function (date) {
    var newMonth = value - 1;
    var newYear = date['get' + utc + 'FullYear']();
    var newDate = date['get' + utc + 'Date']();
    var shiftMonth = new Date(date['set' + utc + 'FullYear'](newYear, newMonth + 1, 0));

    if (newDate > shiftMonth['get' + utc + 'Date']()) {
      return shiftMonth;
    } else {
      return new Date(date['set' + utc + 'FullYear'](newYear, newMonth, newDate));
    }
  }), defineProperty(_incrementHandlers, YEAR, function (date) {
    var newYear = value;
    var newMonth = date['get' + utc + 'Month']();
    var newDate = date['get' + utc + 'Date']();
    var shiftMonth = new Date(date['set' + utc + 'FullYear'](newYear, newMonth + 1, 0));

    if (newDate > shiftMonth['get' + utc + 'Date']()) {
      return shiftMonth;
    } else {
      return new Date(date['set' + utc + 'FullYear'](newYear, newMonth, newDate));
    }
  }), _incrementHandlers);

  return incrementHandlers[increment](date);
}

var setUTC = curry(function (increment, value, thing) {
  if (thing instanceof Function) return wrap(setUTC(increment, value), thing);

  thing = thing || new Date();
  validateDate(thing);
  return setLocalOrSetUTC(increment, value, thing, 'UTC');
});

var setLocal = curry(function (increment, value, thing) {
  if (thing instanceof Function) return wrap(setLocal(increment, value), thing);

  thing = thing || new Date();
  validateDate(thing);
  return setLocalOrSetUTC(increment, value, thing);
});

var setLocalGroup = curry(function (group, thing) {
  if (thing instanceof Function) return wrap(setLocalGroup(group), thing);

  thing = thing || new Date();
  validateDate(thing);
  return Object.keys(group).reduce(function (acc, cur) {
    return setLocalOrSetUTC(cur, group[cur], thing);
  }, thing);
});

var setUTCGroup = curry(function (group, thing) {
  if (thing instanceof Function) return wrap(setUTCGroup(group), thing);

  thing = thing || new Date();
  validateDate(thing);
  return Object.keys(group).reduce(function (acc, cur) {
    return setLocalOrSetUTC(cur, group[cur], thing, 'UTC');
  }, thing);
});

/**
 * Gets the specified increment in local time or UTC for a date object
 * @param   {String}  increment   date increment to get the value of
 * @param   {Date}    date        a date object
 * @param   {String}  utc         should equal 'UTC' if UTC function
 * @returns {Date}                the value for that increment, in UTC
 */
function getLocalOrGetUTC(increment, date) {
  var _incrementHandlers;

  var utc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var incrementHandlers = (_incrementHandlers = {}, defineProperty(_incrementHandlers, TIMEZONE_OFFSET, function (date) {
    return utc ? 0 : date.getTimezoneOffset() / 60 * -1;
  }), defineProperty(_incrementHandlers, MILLISECOND, function (date) {
    return date['get' + utc + 'Milliseconds']();
  }), defineProperty(_incrementHandlers, SECOND, function (date) {
    return date['get' + utc + 'Seconds']();
  }), defineProperty(_incrementHandlers, MINUTE, function (date) {
    return date['get' + utc + 'Minutes']();
  }), defineProperty(_incrementHandlers, HOUR, function (date) {
    return date['get' + utc + 'Hours']();
  }), defineProperty(_incrementHandlers, DATE, function (date) {
    return date['get' + utc + 'Date']();
  }), defineProperty(_incrementHandlers, DAY, function (date) {
    return date['get' + utc + 'Day']() + 1;
  }), defineProperty(_incrementHandlers, WEEK, function (date) {
    return Math.floor(((date - new Date(date['get' + utc + 'FullYear'](), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7);
  }), defineProperty(_incrementHandlers, MONTH, function (date) {
    return date['get' + utc + 'Month']() + 1;
  }), defineProperty(_incrementHandlers, YEAR, function (date) {
    return date['get' + utc + 'FullYear']();
  }), _incrementHandlers);

  return incrementHandlers[increment](date);
}

var getUTC = curry(function (increment, date) {
  date = date || new Date();
  validateDate(date);
  return getLocalOrGetUTC(increment, date, 'UTC');
});

var getLocal = curry(function (increment, date) {
  date = date || new Date();
  validateDate(date);
  return getLocalOrGetUTC(increment, date);
});

var getUTCGroup = curry(function (increments, date) {
  date = date || new Date();
  validateDate(date);
  return increments.map(function (increment) {
    return getLocalOrGetUTC(increment, date, 'UTC');
  });
});

var getLocalGroup = curry(function (increments, date) {
  date = date || new Date();
  validateDate(date);
  return increments.map(function (increment) {
    return getLocalOrGetUTC(increment, date);
  });
});

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

export { reform, isDate, addTime, addTimeSequence, subtractTime, subtractTimeSequence, resetLocal, resetUTC, setLocal, setLocalGroup, setUTC, setUTCGroup, getLocal, getLocalGroup, getUTC, getUTCGroup };
