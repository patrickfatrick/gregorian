(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.gregorian = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _gregorian = require('./src/gregorian');

var _gregorian2 = _interopRequireDefault(_gregorian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _gregorian2.default;

},{"./src/gregorian":2}],2:[function(require,module,exports){
'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reform = require('./modules/reform');

var _reform2 = _interopRequireDefault(_reform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gregorian = {
  reform: _reform2.default
};

exports.default = gregorian;

},{"./modules/reform":10}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (isNaN(this.d.getTime())) {
    return false;
  }
  return true;
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return this.d;
};

},{}],5:[function(require,module,exports){
'use strict';

/**
 * Adds specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to add
 * @returns {Object} a new gregorian object
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
function addSubtract(obj, n, increment) {

	var increments = {};

	increments.l = function (date) {
		return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n));
	};
	increments.s = function (date) {
		return new Date(date.setUTCSeconds(date.getUTCSeconds() + n));
	};
	increments.t = function (date) {
		return new Date(date.setUTCMinutes(date.getUTCMinutes() + n));
	};
	increments.h = function (date) {
		return new Date(date.setUTCHours(date.getUTCHours() + n));
	};
	increments.d = function (date) {
		return new Date(date.setUTCDate(date.getUTCDate() + n));
	};
	increments.w = function (date) {
		return new Date(date.setUTCDate(date.getUTCDate() + n * 7));
	};
	increments.m = function (date) {
		var newMonth = date.getUTCMonth() + n;
		var newYear = date.getUTCFullYear();
		var newDate = date.getUTCDate();

		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
		}
	};
	increments.y = function (date) {
		var newYear = date.getUTCFullYear() + n;
		var newMonth = date.getUTCMonth();
		var newDate = date.getUTCDate();

		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
		}
	};

	obj.d = increments[increment](obj.d);
	return obj;
}

var add = exports.add = function add(n, increment) {
	return addSubtract(this, n * 1, increment);
};

var subtract = exports.subtract = function subtract(n, increment) {
	return addSubtract(this, n * -1, increment);
};

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Convert the object passed to a date and test its validity
 * @param {Object} 	obj any object
 * @returns {Date}	if string passes the test, return the date object
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj) {
  obj = obj || new Date();
  return new Date(obj);
};

},{}],7:[function(require,module,exports){
'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (increment) {
	var increments = {};

	increments.s = function (date) {
		return new Date(date.setSeconds(date.getSeconds(), 0));
	};
	increments.t = function (date) {
		return new Date(date.setMinutes(date.getMinutes(), 0, 0));
	};
	increments.h = function (date) {
		return new Date(date.setHours(date.getHours(), 0, 0, 0));
	};
	increments.d = function (date) {
		date.setDate(date.getDate());
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.w = function (date) {
		date.setDate(date.getDate() - date.getDay());
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.m = function (date) {
		date.setMonth(date.getMonth(), 1);
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.y = function (date) {
		date.setFullYear(date.getFullYear(), 0, 1);
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};

	this.d = increments[increment](this.d);
	return this;
};

},{}],8:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var AP = exports.AP = function AP(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'AM' : 'PM';
  return ampm;
};

/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
var ap = exports.ap = function ap(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'am' : 'pm';
  return ampm;
};

/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated day of the week
 */
var D = exports.D = function D(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
var DD = exports.DD = function DD(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
var H = exports.H = function H(date) {
  var hour = date.getHours();
  return hour;
};

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
var HH = exports.HH = function HH(date) {
  var hour = date.getHours().toString();
  return hour.length < 2 ? '0' + hour : hour;
};

/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
var M = exports.M = function M(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
};

/**
 * Take a date object and output the month
 * @param {Date} 	a date object
 * @returns {String}	the full month
 */
var MM = exports.MM = function MM(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
};

/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {String}	the date of the month with no leading zeros
 */
var d = exports.d = function d(date) {
  var day = date.getDate().toString();
  return day;
};

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit date of the month
 */
var dd = exports.dd = function dd(date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
};

/**
 * Take a date object and output the date of the month with no leading zeros but with the ordinal (1st-31st)
 * @param {Date} 	a date object
 * @returns {String}	the date with no leading zeros but with the ordinal
 */
var dt = exports.dt = function dt(date) {
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
};

/**
 * Take a date object and outpit the hour with no leading zeros (1-12)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
var h = exports.h = function h(date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  if (hour < 13) hour = hour;
  if (hour >= 13) hour = hour - 12;
  return hour;
};

/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
var hh = exports.hh = function hh(date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  if (hour < 13) hour = hour;
  if (hour >= 13) hour = hour - 12;
  hour = hour.toString();
  return hour.length < 2 ? '0' + hour : hour;
};

/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
var l = exports.l = function l(date) {
  var milliseconds = date.getMilliseconds().toString();
  return milliseconds;
};

/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
var ll = exports.ll = function ll(date) {
  var milliseconds = date.getMilliseconds().toString();
  switch (milliseconds.length) {
    case 1:
      milliseconds = '00' + milliseconds;
      break;
    case 2:
      milliseconds = '0' + milliseconds;
      break;
    default:
      milliseconds = milliseconds;
      break;
  }
  return milliseconds;
};

/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date} 	a date object
 * @returns {String}	the month with no leading zeros
 */
var m = exports.m = function m(date) {
  var month = (date.getMonth() + 1).toString();
  return month;
};

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit month
 */
var mm = exports.mm = function mm(date) {
  var month = (date.getMonth() + 1).toString();
  return month.length < 2 ? '0' + month : month;
};

/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
var s = exports.s = function s(date) {
  var second = date.getSeconds();
  return second;
};

/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
var ss = exports.ss = function ss(date) {
  var second = date.getSeconds().toString();
  return second.length < 2 ? '0' + second : second;
};

/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
var t = exports.t = function t(date) {
  var minute = date.getMinutes().toString();
  return minute;
};

/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
var tt = exports.tt = function tt(date) {
  var minute = date.getMinutes().toString();
  return minute.length < 2 ? '0' + minute : minute;
};

/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {String}	the two-digit year
 */
var yy = exports.yy = function yy(date) {
  return date.getFullYear().toString().substr(2);
};

/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {String}	the four-digit year
 */
var yyyy = exports.yyyy = function yyyy(date) {
  return date.getFullYear().toString();
};

/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
var zz = exports.zz = function zz(date) {
  var offset = date.getTimezoneOffset() / 60 * -1;
  return 'UTC ' + offset + ':00';
};

/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
var iso = exports.iso = function iso(date, format) {
  format = format || null;
  //console.log('iso function date: ' + date);
  if (format === 'short') return date.toISOString().split('T')[0];
  return date.toISOString();
};

/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param 	{String}	format optional 'shart' to remove the time from the output
 * @returns {String} UTC string with or without time
 */

var utc = exports.utc = function utc(date, format) {
  format = format || null;
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
};

/**
 * Converts a date object to UNIX time (milliseconds from January 1, 1970)
 * @param   {Date}   date a date object
 * @returns {Number} milliseconds from January 1, 1970
 */

var unix = exports.unix = function unix(date) {
  return Date.parse(date);
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (format, delimiter) {
	delimiter = delimiter || '+';
	var date = this.d;
	var pieces = ['unix', 'utc-short', 'utc', 'iso-short', 'iso', 'yyyy', 'yy', 'DD', 'dd', 'dt', 'D', 'd', 'MM', 'mm', 'M', 'm', 'hh', 'h', 'HH', 'H', 'tt', 't', 'AP', 'ap', 'ss', 's', 'll', 'l', 'zz'];
	var converted = format;

	pieces.forEach(function (piece) {
		var re = new RegExp('\\b' + piece + '\\b', 'g');
		if (re.test(converted)) {
			switch (piece) {
				case 'unix':
					converted = to.unix(date);
					break;
				case 'utc-short':
					converted = to.utc(date, 'short');
					break;
				case 'utc':
					converted = to.utc(date);
					break;
				case 'iso-short':
					converted = to.iso(date, 'short');
					break;
				case 'iso':
					converted = to.iso(date);
					break;
				default:
					var replacer = to[piece](date).toString();
					converted = converted.replace(re, replacer);
			}
		}
	});
	if (typeof converted === 'string') {
		converted = converted.replace(new RegExp('\\' + delimiter, 'g'), '');
	}
	return converted;
};

var _reformToFunctions = require('./reform-to-functions');

var to = _interopRequireWildcard(_reformToFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

},{"./reform-to-functions":8}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (obj) {
	var date = (0, _reformDate2.default)(obj);
	return {
		d: date,
		input: obj,
		to: _reformTo2.default,
		add: _reformAddSubtract.add,
		subtract: _reformAddSubtract.subtract,
		restart: _reformRestart2.default,
		reagent: _reagent2.default,
		recite: _recite2.default
	};
};

var _reformDate = require('./reform-date');

var _reformDate2 = _interopRequireDefault(_reformDate);

var _reformTo = require('./reform-to');

var _reformTo2 = _interopRequireDefault(_reformTo);

var _reformAddSubtract = require('./reform-add-subtract');

var _reformRestart = require('./reform-restart');

var _reformRestart2 = _interopRequireDefault(_reformRestart);

var _reagent = require('./reagent');

var _reagent2 = _interopRequireDefault(_reagent);

var _recite = require('./recite');

var _recite2 = _interopRequireDefault(_recite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./reagent":3,"./recite":4,"./reform-add-subtract":5,"./reform-date":6,"./reform-restart":7,"./reform-to":9}]},{},[1])(1)
});


//# sourceMappingURL=gregorian.js.map
