(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime-corejs3/core-js-stable/object/assign'), require('@babel/runtime-corejs3/helpers/defineProperty'), require('@babel/runtime-corejs3/helpers/toConsumableArray'), require('@babel/runtime-corejs3/core-js-stable/instance/concat'), require('@babel/runtime-corejs3/core-js-stable/number/is-nan'), require('@babel/runtime-corejs3/core-js-stable/instance/includes'), require('@babel/runtime-corejs3/core-js-stable/instance/map'), require('@babel/runtime-corejs3/core-js-stable/symbol/match'), require('@babel/runtime-corejs3/core-js-stable/number/parse-int'), require('@babel/runtime-corejs3/core-js-stable/symbol/split'), require('@babel/runtime-corejs3/helpers/slicedToArray'), require('@babel/runtime-corejs3/core-js-stable/instance/reduce'), require('@babel/runtime-corejs3/core-js-stable/object/keys')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime-corejs3/core-js-stable/object/assign', '@babel/runtime-corejs3/helpers/defineProperty', '@babel/runtime-corejs3/helpers/toConsumableArray', '@babel/runtime-corejs3/core-js-stable/instance/concat', '@babel/runtime-corejs3/core-js-stable/number/is-nan', '@babel/runtime-corejs3/core-js-stable/instance/includes', '@babel/runtime-corejs3/core-js-stable/instance/map', '@babel/runtime-corejs3/core-js-stable/symbol/match', '@babel/runtime-corejs3/core-js-stable/number/parse-int', '@babel/runtime-corejs3/core-js-stable/symbol/split', '@babel/runtime-corejs3/helpers/slicedToArray', '@babel/runtime-corejs3/core-js-stable/instance/reduce', '@babel/runtime-corejs3/core-js-stable/object/keys'], factory) :
  (global = global || self, factory(global.gregorian = {}, global._Object$assign, global._defineProperty, global._toConsumableArray, global._concatInstanceProperty, global._Number$isNaN, global._includesInstanceProperty, global._mapInstanceProperty, global._Symbol$match, global._Number$parseInt, global._Symbol$split, global._slicedToArray, global._reduceInstanceProperty, global._Object$keys));
}(this, (function (exports, _Object$assign, _defineProperty, _toConsumableArray, _concatInstanceProperty, _Number$isNaN, _includesInstanceProperty, _mapInstanceProperty, _Symbol$match, _Number$parseInt, _Symbol$split, _slicedToArray, _reduceInstanceProperty, _Object$keys) { 'use strict';

  _Object$assign = _Object$assign && _Object$assign.hasOwnProperty('default') ? _Object$assign['default'] : _Object$assign;
  _defineProperty = _defineProperty && _defineProperty.hasOwnProperty('default') ? _defineProperty['default'] : _defineProperty;
  _toConsumableArray = _toConsumableArray && _toConsumableArray.hasOwnProperty('default') ? _toConsumableArray['default'] : _toConsumableArray;
  _concatInstanceProperty = _concatInstanceProperty && _concatInstanceProperty.hasOwnProperty('default') ? _concatInstanceProperty['default'] : _concatInstanceProperty;
  _Number$isNaN = _Number$isNaN && _Number$isNaN.hasOwnProperty('default') ? _Number$isNaN['default'] : _Number$isNaN;
  _includesInstanceProperty = _includesInstanceProperty && _includesInstanceProperty.hasOwnProperty('default') ? _includesInstanceProperty['default'] : _includesInstanceProperty;
  _mapInstanceProperty = _mapInstanceProperty && _mapInstanceProperty.hasOwnProperty('default') ? _mapInstanceProperty['default'] : _mapInstanceProperty;
  _Symbol$match = _Symbol$match && _Symbol$match.hasOwnProperty('default') ? _Symbol$match['default'] : _Symbol$match;
  _Number$parseInt = _Number$parseInt && _Number$parseInt.hasOwnProperty('default') ? _Number$parseInt['default'] : _Number$parseInt;
  _Symbol$split = _Symbol$split && _Symbol$split.hasOwnProperty('default') ? _Symbol$split['default'] : _Symbol$split;
  _slicedToArray = _slicedToArray && _slicedToArray.hasOwnProperty('default') ? _slicedToArray['default'] : _slicedToArray;
  _reduceInstanceProperty = _reduceInstanceProperty && _reduceInstanceProperty.hasOwnProperty('default') ? _reduceInstanceProperty['default'] : _reduceInstanceProperty;
  _Object$keys = _Object$keys && _Object$keys.hasOwnProperty('default') ? _Object$keys['default'] : _Object$keys;

  /**
   * Strings used in various functions to indicate different aspects of the date
   *
   * Note: Month and Day getter/setter methods are 1-indexed rather than 0-indexed as they would be with native methods
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

  var PERIOD_LOWERCASE = 'p'; // Am

  var SECOND_FULL = 'S'; // 00 (adds leading zeros)

  var SECOND = 's'; // 0

  var MILLISECOND_FULL = 'L'; // 000 (adds leading zeros)

  var MILLISECOND = 'l'; // 0

  var TIMEZONE_OFFSET = 'z'; // UTC-05:00

  var WEEK = 'w'; // 14

  var _PERIOD_UPPERCASE$PER;
  var reformHandlers = (_PERIOD_UPPERCASE$PER = {}, _defineProperty(_PERIOD_UPPERCASE$PER, PERIOD_UPPERCASE, function (date, _ref) {
    var periods = _ref.periods;
    var hour = date.getHours();
    var ampm = hour < 12 ? periods[0].toUpperCase() : periods[1].toUpperCase();
    return ampm;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, PERIOD_LOWERCASE, function (date, _ref2) {
    var periods = _ref2.periods;
    var hour = date.getHours();
    var ampm = hour < 12 ? periods[0].toLowerCase() : periods[1].toLowerCase();
    return ampm;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DAY, function (date, _ref3) {
    var daysShort = _ref3.daysShort;
    var dayOfWeek = date.getDay();
    return daysShort[dayOfWeek];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DAY_FULL, function (date, _ref4) {
    var daysLong = _ref4.daysLong;
    var dayOfWeek = date.getDay();
    return daysLong[dayOfWeek];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR, function (date) {
    var hour = date.getHours();
    return hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR_FULL, function (date) {
    var hour = date.getHours().toString();
    return hour.length < 2 ? '0' + hour : hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH_NAME, function (date, _ref5) {
    var monthsShort = _ref5.monthsShort;
    var month = date.getMonth();
    return monthsShort[month];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH_NAME_FULL, function (date, _ref6) {
    var monthsLong = _ref6.monthsLong;
    var month = date.getMonth();
    return monthsLong[month];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DATE, function (date) {
    var day = date.getDate().toString();
    return day;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DATE_FULL, function (date) {
    var day = date.getDate().toString();
    return day.length < 2 ? '0' + day : day;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DATE_ORDINAL, function (date, _ref7) {
    var ordinals = _ref7.ordinals;
    var day = date.getDate();
    return day + (ordinals[day] || ordinals["default"]);
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR_PERIOD, function (date) {
    var hour = date.getHours();

    if (hour === 0) {
      hour = 12;
    }

    hour = hour < 13 ? hour : hour - 12;
    return hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR_PERIOD_FULL, function (date) {
    var hour = date.getHours();

    if (hour === 0) {
      hour = 12;
    }

    hour = hour < 13 ? hour : hour - 12;
    hour = hour.toString();
    return hour.length < 2 ? '0' + hour : hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MILLISECOND, function (date) {
    var milliseconds = date.getMilliseconds().toString();
    return milliseconds;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MILLISECOND_FULL, function (date) {
    var milliseconds = date.getMilliseconds().toString();

    switch (milliseconds.length) {
      case 1:
        milliseconds = '00' + milliseconds;
        break;

      case 2:
        milliseconds = '0' + milliseconds;
        break;

      default:
        milliseconds = String(milliseconds);
        break;
    }

    return milliseconds;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH, function (date) {
    var month = (date.getMonth() + 1).toString();
    return month;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH_FULL, function (date) {
    var month = (date.getMonth() + 1).toString();
    return month.length < 2 ? '0' + month : month;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, SECOND, function (date) {
    var second = date.getSeconds();
    return second;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, SECOND_FULL, function (date) {
    var second = date.getSeconds().toString();
    return second.length < 2 ? '0' + second : second;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MINUTE, function (date) {
    var minute = date.getMinutes().toString();
    return minute;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MINUTE_FULL, function (date) {
    var minute = date.getMinutes().toString();
    return minute.length < 2 ? '0' + minute : minute;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, YEAR, function (date) {
    return date.getFullYear().toString().substr(2);
  }), _defineProperty(_PERIOD_UPPERCASE$PER, YEAR_FULL, function (date) {
    return date.getFullYear();
  }), _defineProperty(_PERIOD_UPPERCASE$PER, TIMEZONE_OFFSET, function (date, _ref8) {
    var utc = _ref8.utc;
    var offset = (date.getTimezoneOffset() / 60 * -1).toString();
    offset = /^[-]?\d$/g.test(offset) ? offset.replace(/\d/, function (match, off) {
      return '0' + offset.charAt(off);
    }) : offset;

    if (!/^[-]/g.test(offset)) {
      offset = '+' + offset;
    }

    return utc + offset + ':00';
  }), _defineProperty(_PERIOD_UPPERCASE$PER, ISO_SHORT, function (date) {
    return this[ISO](date, 'short');
  }), _defineProperty(_PERIOD_UPPERCASE$PER, ISO, function (date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (format === 'short') {
      return date.toISOString().split('T')[0];
    }

    return date.toISOString();
  }), _defineProperty(_PERIOD_UPPERCASE$PER, UTC_SHORT, function (date) {
    return this[UTC](date, 'short');
  }), _defineProperty(_PERIOD_UPPERCASE$PER, UTC, function (date) {
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
  }), _defineProperty(_PERIOD_UPPERCASE$PER, UNIX, function (date) {
    return Date.parse(date);
  }), _PERIOD_UPPERCASE$PER);

  var en = {
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    monthsLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ordinals: {
      1: 'st',
      2: 'nd',
      3: 'rd',
      21: 'st',
      22: 'nd',
      23: 'rd',
      31: 'st',
      "default": 'th'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };

  /**
   * Determines if an input is a Date instance with a valid date
   * @param   {Object}  input   anything, but preferably a Date object
   * @returns {Boolean}         whether or not the input is a valid Date
   */
  function isDate(input) {
    return input instanceof Date && !_Number$isNaN(Date.parse(input));
  }
  /**
   * Checks that the date object passed in is a valid Date instance, or throw a TypeError
   * @param   {Date}      date  a date object
   * @return  {Boolean}         true if validated
   */

  function validateDate(date) {
    if (isDate(date)) {
      return true;
    }

    throw new TypeError("Invalid date: ".concat(date));
  }
  /**
   * Returns the difference between two date objects
   * @param   {Date}    date1 a date object
   * @param   {Date}    date2 a date object
   * @return  {Number}        difference between the dates
   */

  function diff(date1, date2) {
    return Date.parse(date2) - Date.parse(date1);
  }
  /**
   * Takes a function with args and returns a curried version of it
   * @param   {Function}  fn  A function to curry
   * @returns {Function}      A curried version of the original function
   */

  function curry(fn) {
    return function resolver() {
      for (var _len = arguments.length, resolverArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        resolverArgs[_key] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var nextArgs = _concatInstanceProperty(resolverArgs).call(resolverArgs, args.length ? args : null);

        var next = nextArgs.length >= fn.length ? fn : resolver;
        return next.apply(void 0, _toConsumableArray(nextArgs));
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

  function formatDate(format, date, translation) {
    var longAssRegExp = /\b(unix|utc(-short)?|iso(-short)?|Y|y|M|m|N|n|E|e|D|d|o|H|h|G|g|T|t|P|p|S|s|L|l|z|w)\b/g;
    return format.replace(longAssRegExp, function (match) {
      return reformHandlers[match](date, translation);
    }).replace(translation.delimiter, '');
  }
  /**
   * Take a Date object and output the reformatted string
   * See ../lib/constants.js for details
   * @param     {String}  format    a string describing the format the date should take
   * @param     {Date}    date      a date object
   * @returns   {String}            the date formatted into the specified format
   */


  var reform = curry(function (format, date) {
    var _date;

    date = (_date = date) !== null && _date !== void 0 ? _date : new Date();
    validateDate(date);
    return formatDate(format, date, en);
  });
  /**
   * Take a Date object and output the reformatted string using user-provided names
   * @param     {Object}  overrides object consisting of whole or partial name overrides, see ../lib/default-names
   * @param     {String}  format    a string describing the format the date should take
   * @param     {Date}    date      a date object
   * @returns   {String}            the date formatted into the specified format
   */

  var reformWithOverrides = curry(function (overrides, format, date) {
    var _date2;

    date = (_date2 = date) !== null && _date2 !== void 0 ? _date2 : new Date();

    var names = _Object$assign({}, en, overrides);

    validateDate(date);
    return formatDate(format, date, names);
  });
  /**
   * Take a Date object and output the reformatted string using included locales
   * @param     {Object}  locale    locale object exported from lib/translations
   * @param     {String}  format    a string describing the format the date should take
   * @param     {Date}    date      a date object
   * @returns   {String}            the date formatted into the specified format
   */

  var reformWithLocale = curry(function (locale, format, date) {
    var _date3;

    date = (_date3 = date) !== null && _date3 !== void 0 ? _date3 : new Date();
    validateDate(date);
    return formatDate(format, date, locale || en);
  });

  /**
   * Parses either an ambiguous ISO partial (2019-08-16 / 2019-08-16T22:55:00)
   * or a complete ISO string (2019-08-16T22:55:00Z) to a date
   * @param  {String} date date string formatted as an ISO partial date
   * @return {Date}               a new Date instance
   */

  function parse(input) {
    var _context, _context2;

    if (isDate(input)) return input;

    var _$Symbol$split = /T| /[_Symbol$split](input),
        _$Symbol$split2 = _slicedToArray(_$Symbol$split, 2),
        date = _$Symbol$split2[0],
        _$Symbol$split2$ = _$Symbol$split2[1],
        rawTime = _$Symbol$split2$ === void 0 ? '00:00:00' : _$Symbol$split2$;

    var _$Symbol$split3 = /Z|\+|\-/[_Symbol$split](rawTime),
        _$Symbol$split4 = _slicedToArray(_$Symbol$split3, 2),
        time = _$Symbol$split4[0],
        _$Symbol$split4$ = _$Symbol$split4[1],
        offset = _$Symbol$split4$ === void 0 ? (new Date().getTimezoneOffset() / 60).toString() : _$Symbol$split4$;

    var z = _Number$parseInt((/\d{1,2}/[_Symbol$match](offset) || ['0'])[0], 10);

    var _$Symbol$split$map = _mapInstanceProperty(_context = /-/[_Symbol$split](date)).call(_context, function (str) {
      return _Number$parseInt(str, 10);
    }),
        _$Symbol$split$map2 = _slicedToArray(_$Symbol$split$map, 3),
        y = _$Symbol$split$map2[0],
        m = _$Symbol$split$map2[1],
        d = _$Symbol$split$map2[2];

    var _$Symbol$split$map3 = _mapInstanceProperty(_context2 = /:|\./[_Symbol$split](time)).call(_context2, function (str) {
      return _Number$parseInt(str.substring(0, 4), 10);
    }),
        _$Symbol$split$map4 = _slicedToArray(_$Symbol$split$map3, 4),
        h = _$Symbol$split$map4[0],
        t = _$Symbol$split$map4[1],
        s = _$Symbol$split$map4[2],
        _$Symbol$split$map4$ = _$Symbol$split$map4[3],
        l = _$Symbol$split$map4$ === void 0 ? 0 : _$Symbol$split$map4$;

    return new Date(Date.UTC(y, m - 1, d, _includesInstanceProperty(rawTime).call(rawTime, '-') || offset > 0 ? h + z : h + z * -1, t, s, Math.round(l * 0.1)));
  }
  /**
   * Parses either an ambiguous ISO partial (2019-08-16 / 2019-08-16T22:55:00)
   * or a complete ISO string (2019-08-16T22:55:00Z) to a date
   * BUT this function assumes UTC if no timezone data is present
   * @param  {String} date date string formatted as an ISO partial date
   * @return {Date}               a new Date instance
   */

  function parseUTC(input) {
    var _context3, _context4;

    if (isDate(input)) return input;

    var _$Symbol$split5 = /T| /[_Symbol$split](input),
        _$Symbol$split6 = _slicedToArray(_$Symbol$split5, 2),
        date = _$Symbol$split6[0],
        _$Symbol$split6$ = _$Symbol$split6[1],
        rawTime = _$Symbol$split6$ === void 0 ? '00:00:00' : _$Symbol$split6$;

    var _$Symbol$split7 = /Z|\+|\-/[_Symbol$split](rawTime),
        _$Symbol$split8 = _slicedToArray(_$Symbol$split7, 2),
        time = _$Symbol$split8[0],
        _$Symbol$split8$ = _$Symbol$split8[1],
        offset = _$Symbol$split8$ === void 0 ? '0' : _$Symbol$split8$;

    var z = _Number$parseInt((/\d{1,2}/[_Symbol$match](offset) || ['0'])[0], 10);

    var _$Symbol$split$map5 = _mapInstanceProperty(_context3 = /-/[_Symbol$split](date)).call(_context3, function (str) {
      return _Number$parseInt(str, 10);
    }),
        _$Symbol$split$map6 = _slicedToArray(_$Symbol$split$map5, 3),
        y = _$Symbol$split$map6[0],
        m = _$Symbol$split$map6[1],
        d = _$Symbol$split$map6[2];

    var _$Symbol$split$map7 = _mapInstanceProperty(_context4 = /:|\./[_Symbol$split](time)).call(_context4, function (str) {
      return _Number$parseInt(str.substring(0, 4), 10);
    }),
        _$Symbol$split$map8 = _slicedToArray(_$Symbol$split$map7, 4),
        h = _$Symbol$split$map8[0],
        t = _$Symbol$split$map8[1],
        s = _$Symbol$split$map8[2],
        _$Symbol$split$map8$ = _$Symbol$split$map8[3],
        l = _$Symbol$split$map8$ === void 0 ? 0 : _$Symbol$split$map8$;

    return new Date(Date.UTC(y, m - 1, d, _includesInstanceProperty(rawTime).call(rawTime, '-') || offset > 0 ? h + z : h + z * -1, t, s, Math.round(l * 0.1)));
  }

  /**
   * Adds or subtracts specified increments to or from a date object
   * @param   {String}  increment   an increment to add
   * @param   {Number}  n           factor to add or subtract the increment by
   * @param   {Date}    date        date object
   * @returns {Date}                a new date
   */

  function addTimeOrSubtractTime(increment, n, date) {
    var _incrementHandlers;

    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, MILLISECOND, function (date) {
      return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n));
    }), _defineProperty(_incrementHandlers, SECOND, function (date) {
      return new Date(date.setUTCSeconds(date.getUTCSeconds() + n));
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return new Date(date.setUTCMinutes(date.getUTCMinutes() + n));
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return new Date(date.setUTCHours(date.getUTCHours() + n));
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n));
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n * 7));
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      var newMonth = date.getUTCMonth() + n;
      var newYear = date.getUTCFullYear();
      var newDate = date.getUTCDate();

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
      }

      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      var newYear = date.getUTCFullYear() + n;
      var newMonth = date.getUTCMonth();
      var newDate = date.getUTCDate();

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
      }

      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var addTime = curry(function (increment, n, input) {
    var _input;

    if (input instanceof Function) {
      return wrap(addTime(increment, n), input);
    }

    input = (_input = input) !== null && _input !== void 0 ? _input : new Date();
    validateDate(input);
    return addTimeOrSubtractTime(increment, Number(n), input);
  });
  var subtractTime = curry(function (increment, n, input) {
    var _input2;

    if (input instanceof Function) {
      return wrap(subtractTime(increment, n), input);
    }

    input = (_input2 = input) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input);
    return addTimeOrSubtractTime(increment, n * -1, input);
  });
  var addTimeSequence = curry(function (sequence, input) {
    var _input3;

    if (input instanceof Function) {
      return wrap(addTimeSequence(sequence), input);
    }

    input = (_input3 = input) !== null && _input3 !== void 0 ? _input3 : new Date();
    validateDate(input);
    return _reduceInstanceProperty(sequence).call(sequence, function (acc, cur) {
      return addTimeOrSubtractTime(cur[0], Number(cur[1]), acc);
    }, input);
  });
  var subtractTimeSequence = curry(function (sequence, input) {
    var _input4;

    if (input instanceof Function) {
      return wrap(subtractTimeSequence(sequence), input);
    }

    input = (_input4 = input) !== null && _input4 !== void 0 ? _input4 : new Date();
    validateDate(input);
    return _reduceInstanceProperty(sequence).call(sequence, function (acc, cur) {
      return addTimeOrSubtractTime(cur[0], cur[1] * -1, acc);
    }, input);
  });

  /**
   * Sets the date or time to the start of the specified increment
   * @param   {String}    increment   an increment to set the date back to
   * @param   {Date}      date        a date object
   * @returns {Date}                  a new date
   */

  function resetLocalOrResetUTC(increment, date, utc) {
    var _incrementHandlers;

    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, SECOND, function (date) {
      return new Date(date["set".concat(utc, "Seconds")](date["get".concat(utc, "Seconds")](), 0));
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return new Date(date["set".concat(utc, "Minutes")](date["get".concat(utc, "Minutes")](), 0, 0));
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return new Date(date["set".concat(utc, "Hours")](date["get".concat(utc, "Hours")](), 0, 0, 0));
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]());
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]() - date["get".concat(utc, "Day")]());
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      date["set".concat(utc, "Month")](date["get".concat(utc, "Month")](), 1);
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      date["set".concat(utc, "FullYear")](date["get".concat(utc, "FullYear")](), 0, 1);
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var resetUTC = curry(function (increment, input) {
    var _input;

    if (input instanceof Function) {
      return wrap(resetUTC(increment), input);
    }

    input = (_input = input) !== null && _input !== void 0 ? _input : new Date();
    validateDate(input);
    return resetLocalOrResetUTC(increment, input, 'UTC');
  });
  var resetLocal = curry(function (increment, input) {
    var _input2;

    if (input instanceof Function) {
      return wrap(resetLocal(increment), input);
    }

    input = (_input2 = input) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input);
    return resetLocalOrResetUTC(increment, input, '');
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
    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, MILLISECOND, function (date) {
      return new Date(date["set".concat(utc, "Milliseconds")](value));
    }), _defineProperty(_incrementHandlers, SECOND, function (date) {
      return new Date(date["set".concat(utc, "Seconds")](value));
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return new Date(date["set".concat(utc, "Minutes")](value));
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return new Date(date["set".concat(utc, "Hours")](value));
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      return new Date(date["set".concat(utc, "Date")](value));
    }), _defineProperty(_incrementHandlers, DAY, function (date) {
      return new Date(date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]() - date["get".concat(utc, "Day")]() + (value - 1)));
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      var currentDay = date["get".concat(utc, "Day")]();
      var currentMilliseconds = date["get".concat(utc, "Milliseconds")]();
      date["set".concat(utc, "FullYear")](date["get".concat(utc, "FullYear")](), 0, value * 7);
      var n = currentDay - date["get".concat(utc, "Day")]();
      date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]() + n);
      return new Date(date["set".concat(utc, "Milliseconds")](currentMilliseconds));
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      var newMonth = value - 1;
      var newYear = date["get".concat(utc, "FullYear")]();
      var newDate = date["get".concat(utc, "Date")]();
      var shiftMonth = new Date(date["set".concat(utc, "FullYear")](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth["get".concat(utc, "Date")]()) {
        return shiftMonth;
      } else {
        return new Date(date["set".concat(utc, "FullYear")](newYear, newMonth, newDate));
      }
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      var newYear = value;
      var newMonth = date["get".concat(utc, "Month")]();
      var newDate = date["get".concat(utc, "Date")]();
      var shiftMonth = new Date(date["set".concat(utc, "FullYear")](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth["get".concat(utc, "Date")]()) {
        return shiftMonth;
      } else {
        return new Date(date["set".concat(utc, "FullYear")](newYear, newMonth, newDate));
      }
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var setUTC = curry(function (increment, value, input) {
    var _input;

    if (input instanceof Function) return wrap(setUTC(increment, value), input);
    input = (_input = input) !== null && _input !== void 0 ? _input : new Date();
    validateDate(input);
    return setLocalOrSetUTC(increment, value, input, 'UTC');
  });
  var setLocal = curry(function (increment, value, input) {
    var _input2;

    if (input instanceof Function) return wrap(setLocal(increment, value), input);
    input = (_input2 = input) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input);
    return setLocalOrSetUTC(increment, value, input);
  });
  var setLocalGroup = curry(function (group, input) {
    var _input3, _context;

    if (input instanceof Function) return wrap(setLocalGroup(group), input);
    input = (_input3 = input) !== null && _input3 !== void 0 ? _input3 : new Date();
    validateDate(input);
    return _reduceInstanceProperty(_context = _Object$keys(group)).call(_context, function (acc, cur) {
      return setLocalOrSetUTC(cur, group[cur], input);
    }, input);
  });
  var setUTCGroup = curry(function (group, input) {
    var _input4, _context2;

    if (input instanceof Function) return wrap(setUTCGroup(group), input);
    input = (_input4 = input) !== null && _input4 !== void 0 ? _input4 : new Date();
    validateDate(input);
    return _reduceInstanceProperty(_context2 = _Object$keys(group)).call(_context2, function (acc, cur) {
      return setLocalOrSetUTC(cur, group[cur], input, 'UTC');
    }, input);
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
    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, TIMEZONE_OFFSET, function (date) {
      return utc ? 0 : date.getTimezoneOffset() / 60 * -1;
    }), _defineProperty(_incrementHandlers, MILLISECOND, function (date) {
      return date["get".concat(utc, "Milliseconds")]();
    }), _defineProperty(_incrementHandlers, SECOND, function (date) {
      return date["get".concat(utc, "Seconds")]();
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return date["get".concat(utc, "Minutes")]();
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return date["get".concat(utc, "Hours")]();
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      return date["get".concat(utc, "Date")]();
    }), _defineProperty(_incrementHandlers, DAY, function (date) {
      return date["get".concat(utc, "Day")]() + 1;
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      return Math.floor(((date - new Date(date["get".concat(utc, "FullYear")](), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7);
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      return date["get".concat(utc, "Month")]() + 1;
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      return date["get".concat(utc, "FullYear")]();
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var getUTC = curry(function (increment, date) {
    var _date;

    date = (_date = date) !== null && _date !== void 0 ? _date : new Date();
    validateDate(date);
    return getLocalOrGetUTC(increment, date, 'UTC');
  });
  var getLocal = curry(function (increment, date) {
    var _date2;

    date = (_date2 = date) !== null && _date2 !== void 0 ? _date2 : new Date();
    validateDate(date);
    return getLocalOrGetUTC(increment, date);
  });
  var getUTCGroup = curry(function (increments, date) {
    var _date3;

    date = (_date3 = date) !== null && _date3 !== void 0 ? _date3 : new Date();
    validateDate(date);
    return _mapInstanceProperty(increments).call(increments, function (increment) {
      return getLocalOrGetUTC(increment, date, 'UTC');
    });
  });
  var getLocalGroup = curry(function (increments, date) {
    var _date4;

    date = (_date4 = date) !== null && _date4 !== void 0 ? _date4 : new Date();
    validateDate(date);
    return _mapInstanceProperty(increments).call(increments, function (increment) {
      return getLocalOrGetUTC(increment, date);
    });
  });

  /**
   * Adds or subtracts specified increments to or from a date object
   * @param   {String}  increment   an increment to add
   * @param   {Number}  date1       date object
   * @param   {Date}    date2       date object
   * @returns {Number}              numeric difference between the dates in the specific increment
   */

  function diffIt(increment, date1, date2) {
    var _incrementHandlers;

    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, MILLISECOND, function (date1, date2) {
      return diff(date1, date2);
    }), _defineProperty(_incrementHandlers, SECOND, function (date1, date2) {
      return diff(date1, date2) / 1000;
    }), _defineProperty(_incrementHandlers, MINUTE, function (date1, date2) {
      return this[SECOND](date1, date2) / 60;
    }), _defineProperty(_incrementHandlers, HOUR, function (date1, date2) {
      return this[MINUTE](date1, date2) / 60;
    }), _defineProperty(_incrementHandlers, DATE, function (date1, date2) {
      return this[HOUR](date1, date2) / 24;
    }), _defineProperty(_incrementHandlers, WEEK, function (date1, date2) {
      return this[DATE](date1, date2) / 7;
    }), _defineProperty(_incrementHandlers, MONTH, function (date1, date2) {
      return this[DATE](date1, date2) / 30.44; // 365.25 / 12
    }), _defineProperty(_incrementHandlers, YEAR, function (date1, date2) {
      return this[DATE](date1, date2) / 365.25; // Leap-year friendly
    }), _incrementHandlers);
    return incrementHandlers[increment](date1, date2);
  }

  var diffTime = curry(function (increment, input1, input2) {
    var _input, _input2;

    input1 = (_input = input1) !== null && _input !== void 0 ? _input : new Date();
    input2 = (_input2 = input2) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input1);
    validateDate(input2);
    return diffIt(increment, input1, input2);
  });

  /**
   * Adds or subtracts specified increments to or from a date object
   * @param   {Date}  input1   date object
   * @param   {Date}  input2   date object
   * @returns {Number}         1 if input2 is greater, -1 if input1 is greated, 0 if they are the same
   */

  var compareTime = curry(function (input1, input2) {
    var _input, _input2;

    input1 = (_input = input1) !== null && _input !== void 0 ? _input : new Date();
    input2 = (_input2 = input2) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input1);
    validateDate(input2);
    var difference = diff(input1, input2);

    if (difference === 0) {
      return 0;
    } else if (difference < 0) {
      return -1;
    }

    return 1;
  });

  exports.addTime = addTime;
  exports.addTimeSequence = addTimeSequence;
  exports.compareTime = compareTime;
  exports.diffTime = diffTime;
  exports.getLocal = getLocal;
  exports.getLocalGroup = getLocalGroup;
  exports.getUTC = getUTC;
  exports.getUTCGroup = getUTCGroup;
  exports.isDate = isDate;
  exports.parse = parse;
  exports.parseUTC = parseUTC;
  exports.reform = reform;
  exports.reformWithLocale = reformWithLocale;
  exports.reformWithOverrides = reformWithOverrides;
  exports.resetLocal = resetLocal;
  exports.resetUTC = resetUTC;
  exports.setLocal = setLocal;
  exports.setLocalGroup = setLocalGroup;
  exports.setUTC = setUTC;
  exports.setUTCGroup = setUTCGroup;
  exports.subtractTime = subtractTime;
  exports.subtractTimeSequence = subtractTimeSequence;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
