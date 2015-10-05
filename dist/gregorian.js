(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.gregorian = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesReform = require('./modules/reform');

var _modulesReform2 = _interopRequireDefault(_modulesReform);

var gregorian = {
  reform: _modulesReform2['default']
};

module.exports = gregorian;

},{"./modules/reform":7}],2:[function(require,module,exports){
'use strict';

/**
 * Adds specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to add
 * @returns {Object} a new gregorian object
 */
Object.defineProperty(exports, '__esModule', {
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

	return {
		d: increments[increment](obj.d),
		input: obj.input,
		to: obj.to,
		add: obj.add,
		subtract: obj.subtract,
		restart: obj.restart
	};
}

var add = function add(n, increment) {
	return addSubtract(this, n * 1, increment);
};

exports.add = add;
var subtract = function subtract(n, increment) {
	return addSubtract(this, n * -1, increment);
};
exports.subtract = subtract;

},{}],3:[function(require,module,exports){
'use strict';

/**
 * Convert the object passed to a date and test its validity
 * @param {Object} 	obj any object
 * @returns {Date}	if string passes the test, return the date object
 */
Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (obj) {
	if (obj == null) throw new TypeError('This is null or undefined');
	obj = new Date(obj);
	if (Object.prototype.toString.call(obj) === '[object Date]') {
		if (isNaN(obj.getTime())) {
			throw new TypeError('This is not a valid date');
		}
	}
	return obj;
};

module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */
Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (increment) {
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

	return {
		d: increments[increment](this.d),
		input: this.input,
		to: this.to,
		add: this.add,
		subtract: this.subtract,
		restart: this.restart
	};
};

module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */
Object.defineProperty(exports, '__esModule', {
  value: true
});
var AP = function AP(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'AM' : 'PM';
  return ampm;
};

exports.AP = AP;
/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
var ap = function ap(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'am' : 'pm';
  return ampm;
};

exports.ap = ap;
/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated day of the week
 */
var D = function D(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

exports.D = D;
/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
var DD = function DD(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

exports.DD = DD;
/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
var H = function H(date) {
  var hour = date.getHours();
  return hour;
};

exports.H = H;
/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
var HH = function HH(date) {
  var hour = date.getHours().toString();
  return hour.length < 2 ? '0' + hour : hour;
};

exports.HH = HH;
/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
var M = function M(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
};

exports.M = M;
/**
 * Take a date object and output the month
 * @param {Date} 	a date object
 * @returns {String}	the full month
 */
var MM = function MM(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
};

exports.MM = MM;
/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {String}	the date of the month with no leading zeros
 */
var d = function d(date) {
  var day = date.getDate().toString();
  return day;
};

exports.d = d;
/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit date of the month
 */
var dd = function dd(date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
};

exports.dd = dd;
/**
 * Take a date object and outpit the hour with no leading zeros (1-12)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
var h = function h(date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  if (hour < 13) hour = hour;
  if (hour >= 13) hour = hour - 12;
  return hour;
};

exports.h = h;
/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
var hh = function hh(date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  if (hour < 13) hour = hour;
  if (hour >= 13) hour = hour - 12;
  hour = hour.toString();
  return hour.length < 2 ? '0' + hour : hour;
};

exports.hh = hh;
/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
var l = function l(date) {
  var milliseconds = date.getMilliseconds().toString();
  return milliseconds;
};

exports.l = l;
/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
var ll = function ll(date) {
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

exports.ll = ll;
/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date} 	a date object
 * @returns {String}	the month with no leading zeros
 */
var m = function m(date) {
  var month = (date.getMonth() + 1).toString();
  return month;
};

exports.m = m;
/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit month
 */
var mm = function mm(date) {
  var month = (date.getMonth() + 1).toString();
  return month.length < 2 ? '0' + month : month;
};

exports.mm = mm;
/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
var s = function s(date) {
  var second = date.getSeconds();
  return second;
};

exports.s = s;
/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
var ss = function ss(date) {
  var second = date.getSeconds().toString();
  return second.length < 2 ? '0' + second : second;
};

exports.ss = ss;
/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
var t = function t(date) {
  var minute = date.getMinutes().toString();
  return minute;
};

exports.t = t;
/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
var tt = function tt(date) {
  var minute = date.getMinutes().toString();
  return minute.length < 2 ? '0' + minute : minute;
};

exports.tt = tt;
/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {String}	the two-digit year
 */
var yy = function yy(date) {
  return date.getFullYear().toString().substr(2);
};

exports.yy = yy;
/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {String}	the four-digit year
 */
var yyyy = function yyyy(date) {
  return date.getFullYear().toString();
};

exports.yyyy = yyyy;
/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
var zz = function zz(date) {
  var offset = date.getTimezoneOffset() / 60 * -1;
  return 'UTC ' + offset + ':00';
};

exports.zz = zz;
/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
var iso = function iso(date, format) {
  format = format || null;
  //console.log('iso function date: ' + date);
  if (format === 'short') return date.toISOString().split('T')[0];
  return date.toISOString();
};

exports.iso = iso;
/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param 	{String}	format optional 'shart' to remove the time from the output
 * @returns {String} UTC string with or without time
 */

var utc = function utc(date, format) {
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

exports.utc = utc;
/**
 * Converts a date object to UNIX time (milliseconds from January 1, 1970)
 * @param   {Date}   date a date object
 * @returns {Number} milliseconds from January 1, 1970
 */

var unix = function unix(date) {
  return Date.parse(date);
};
exports.unix = unix;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _reformToFunctions = require('./reform-to-functions');

var to = _interopRequireWildcard(_reformToFunctions);

/**
 * Take a Gregorian object and output the reformatted string
 * See https://github.com/patrickfatrick/gregorian#accepted-formats for details
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */

exports['default'] = function (format, delimiter) {
	delimiter = delimiter || '+';
	var date = this.d;
	var search = ['unix', 'utc-short', 'utc', 'iso-short', 'iso', 'yyyy', 'yy', 'DD', 'dd', 'D', 'd', 'MM', 'mm', 'M', 'm', 'hh', 'h', 'HH', 'H', 'tt', 't', 'AP', 'ap', 'ss', 's', 'll', 'l', 'zz'];
	var converted = format;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = search[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var piece = _step.value;

			//console.log(converted + ' vs ' + piece);
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
						//console.log('Search string is: ' + piece);
						//console.log('Converted string is: ' + to[piece](date));
						var replacer = to[piece](date).toString();
						converted = converted.replace(re, replacer);
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	if (typeof converted === 'string') {
		converted = converted.replace(new RegExp('\\' + delimiter, 'g'), '');
	}
	// console .log(converted);
	return converted;
};

module.exports = exports['default'];

},{"./reform-to-functions":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reformDate = require('./reform-date');

var _reformDate2 = _interopRequireDefault(_reformDate);

var _reformTo = require('./reform-to');

var _reformTo2 = _interopRequireDefault(_reformTo);

var _reformAddSubtract = require('./reform-add-subtract');

var _reformRestart = require('./reform-restart');

var _reformRestart2 = _interopRequireDefault(_reformRestart);

/**
 * Take a string or date object and convert it into a gregorian object
 * @param   {Object} obj A string or date object that can be parsed into a date
 * @returns {Object} Gregorian object
 */

exports['default'] = function (obj) {
	var date = (0, _reformDate2['default'])(obj);
	return {
		d: date,
		input: obj,
		to: _reformTo2['default'],
		add: _reformAddSubtract.add,
		subtract: _reformAddSubtract.subtract,
		restart: _reformRestart2['default']
	};
};

module.exports = exports['default'];

},{"./reform-add-subtract":2,"./reform-date":3,"./reform-restart":4,"./reform-to":6}]},{},[1])(1)
});


//# sourceMappingURL=gregorian.js.map