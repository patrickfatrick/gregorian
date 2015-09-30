(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.gregorian = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 * 
 * Take a user-input date in any format and convert it to several formats
 * Also serves as a wrapper for common JS date methods like toUTCString and toISOString
 * toLocaleDateString is currently not well-supported especially on mobile, so we're avoiding it.
 * 
 * gregorian.reform.to('__FORMAT STRING__') string with formatting options specified with keyword strings
 * 		See ./modules/reform-to.js for more information on this
 * gregorian.reform(__OBJECT__).to('iso') ISO string including time such as '2015-09-12T23:06:19Z'
 * 		`iso-short` can be added to reduce the string to just the date, like '2015-09-12'
 * gregorian.reform(__OBJECT__).to('utc') UTC string such as 'Sat, 12 Sep 2015 06:00:00 GMT'
 * 		`utc-short` can be added to reduce the string to just the date, like 'Sat, 12 Sep 2015'
 * gregorian.reform(__OBJECT__).to('unix') milliseconds since January 1, 1970
 * gregorian.reform(__OBJECT__).add(_NUMBER__, __INCREMENT_STRING__) add time
 * gregorian.reform(__OBJECT__).subtract(_NUMBER__, __INCREMENT_STRING__) subtract time
 */

var reform = require('./modules/reform');

var gregorian = {
  reform: reform
};

module.exports = gregorian;

},{"./modules/reform":32}],2:[function(require,module,exports){
'use strict';

/**
 * Adds specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to add
 * @returns {Object} a new gregorian object
 */
function add(n, increment) {

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
		d: increments[increment](this.d),
		input: this.input,
		to: this.to,
		add: add,
		subtract: this.subtract
	};
}

module.exports = add;

},{}],3:[function(require,module,exports){
'use strict';

/**
 * Convert the object passed to a date and test its validity
 * @param {Object} 	obj any object
 * @returns {Date}	if string passes the test, return the date object
 */
function reformDate(obj) {
	if (obj == null) throw new TypeError('This is null or undefined');
	obj = new Date(obj);
	if (Object.prototype.toString.call(obj) === '[object Date]') {
		if (isNaN(obj.getTime())) {
			throw new TypeError('This is not a valid date');
		}
	}
	return obj;
}

module.exports = reformDate;

},{}],4:[function(require,module,exports){
'use strict';

/**
 * Subtracts specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to subtract
 * @returns {Object} a new gregorian object
 */
function subtract(n, increment) {
	var increments = {};

	increments.l = function (date) {
		return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() - n));
	};
	increments.s = function (date) {
		return new Date(date.setUTCSeconds(date.getUTCSeconds() - n));
	};
	increments.t = function (date) {
		return new Date(date.setUTCMinutes(date.getUTCMinutes() - n));
	};
	increments.h = function (date) {
		return new Date(date.setUTCHours(date.getUTCHours() - n));
	};
	increments.d = function (date) {
		return new Date(date.setUTCDate(date.getUTCDate() - n));
	};
	increments.m = function (date) {
		var newMonth = date.getUTCMonth() - n;
		var newYear = date.getUTCFullYear();
		var newDate = date.getUTCDate();

		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
		}
	};
	increments.y = function (date) {
		var newYear = date.getUTCFullYear() - n;
		var newMonth = date.getUTCMonth();
		var newDate = date.getUTCDate();

		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
		}
	};

	return {
		d: increments[increment](this.d),
		input: this.input,
		to: this.to,
		add: this.add,
		subtract: subtract
	};
}

module.exports = subtract;

},{}],5:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */
function reformAP(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'AM' : 'PM';
  return ampm;
}

module.exports = reformAP;

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {Number}	the abbreviated day of the week
 */
function reformDD(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
}

module.exports = reformDD;

},{}],7:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
function reformDDD(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
}

module.exports = reformDDD;

},{}],8:[function(require,module,exports){
'use strict';

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
function reformHH(date) {
  var hour = date.getHours();
  return hour;
}

module.exports = reformHH;

},{}],9:[function(require,module,exports){
'use strict';

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
function reformHHH(date) {
  var hour = date.getHours().toString();
  return hour.length < 2 ? '0' + hour : hour;
}

module.exports = reformHHH;

},{}],10:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
function reformMM(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
}

module.exports = reformMM;

},{}],11:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the month
 * @param {Date} 	a date object
 * @returns {String}	the full month
 */
function reformMMM(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
}

module.exports = reformMMM;

},{}],12:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
function reformAp(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'am' : 'pm';
  return ampm;
}

module.exports = reformAp;

},{}],13:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {Number}	the date of the month with no leading zeros
 */
function reformDd(date) {
  var day = date.getDate().toString();
  return day;
}

module.exports = reformDd;

},{}],14:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit date of the month
 */
function reformDdd(date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
}

module.exports = reformDdd;

},{}],15:[function(require,module,exports){
'use strict';

/**
 * Take a date object and outpit the hour with no leading zeros (1-12)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
function reformHh(date) {
	var hour = date.getHours();
	if (hour === 0) hour = 12;
	if (hour < 13) hour = hour;
	if (hour >= 13) hour = hour - 12;
	return hour;
}

module.exports = reformHh;

},{}],16:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
function reformHhh(date) {
	var hour = date.getHours();
	if (hour === 0) hour = 12;
	if (hour < 13) hour = hour;
	if (hour >= 13) hour = hour - 12;
	hour = hour.toString();
	return hour.length < 2 ? '0' + hour : hour;
}

module.exports = reformHhh;

},{}],17:[function(require,module,exports){
'use strict';

/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
function reformISO(date, format) {
  format = format || null;
  //console.log('iso function date: ' + date);
  if (format === 'short') return date.toISOString().split('T')[0];
  return date.toISOString();
}

module.exports = reformISO;

},{}],18:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
function reformMl(date) {
  var milliseconds = date.getMilliseconds().toString();
  return milliseconds;
}

module.exports = reformMl;

},{}],19:[function(require,module,exports){
'use strict';

/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
function reformMll(date) {
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
}

module.exports = reformMll;

},{}],20:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date} 	a date object
 * @returns {Number}	the month with no leading zeros
 */
function reformMm(date) {
  var month = (date.getMonth() + 1).toString();
  return month;
}

module.exports = reformMm;

},{}],21:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit month
 */
function reformMmm(date) {
  var month = (date.getMonth() + 1).toString();
  return month.length < 2 ? '0' + month : month;
}

module.exports = reformMmm;

},{}],22:[function(require,module,exports){
'use strict';

/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
function reformSs(date) {
  var second = date.getSeconds();
  return second;
}

module.exports = reformSs;

},{}],23:[function(require,module,exports){
'use strict';

/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
function reformSs(date) {
  var second = date.getSeconds().toString();
  return second.length < 2 ? '0' + second : second;
}

module.exports = reformSs;

},{}],24:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
function reformTt(date) {
  var minute = date.getMinutes().toString();
  return minute;
}

module.exports = reformTt;

},{}],25:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
function reformTtt(date) {
  var minute = date.getMinutes().toString();
  return minute.length < 2 ? '0' + minute : minute;
}

module.exports = reformTtt;

},{}],26:[function(require,module,exports){
'use strict';

/**
 * Converts a date object to UNIX time (milliseconds from January 1, 1970)
 * @param   {Date}   date a date object
 * @returns {Number} milliseconds from January 1, 1970
 */

function reformUnix(date) {
  return Date.parse(date);
}

module.exports = reformUnix;

},{}],27:[function(require,module,exports){
'use strict';

/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param 	{String}	format optional 'shart' to remove the time from the output
 * @returns {String} UTC string with or without time
 */

function reformUTC(date, format) {
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
}

module.exports = reformUTC;

},{}],28:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit year
 */
function reformYy(date) {
  return date.getFullYear().toString().substr(2);
}

module.exports = reformYy;

},{}],29:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {Number}	the four-digit year
 */
function reformYyyy(date) {
  return date.getFullYear();
}

module.exports = reformYyyy;

},{}],30:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
function reformZz(date) {
  var offset = date.getTimezoneOffset() / 60 * -1;
  return 'UTC ' + offset + ':00';
}

module.exports = reformZz;

},{}],31:[function(require,module,exports){
'use strict';

var reformTo = {};
reformTo.AP = require('./reform-to-_ap_');
reformTo.ap = require('./reform-to-ap');
reformTo.D = require('./reform-to-_d_');
reformTo.DD = require('./reform-to-_dd_');
reformTo.M = require('./reform-to-_m_');
reformTo.MM = require('./reform-to-_mm_');
reformTo.m = require('./reform-to-m');
reformTo.mm = require('./reform-to-mm');
reformTo.d = require('./reform-to-d');
reformTo.dd = require('./reform-to-dd');
reformTo.h = require('./reform-to-h');
reformTo.hh = require('./reform-to-hh');
reformTo.H = require('./reform-to-_h_');
reformTo.HH = require('./reform-to-_hh_');
reformTo.s = require('./reform-to-s');
reformTo.ss = require('./reform-to-ss');
reformTo.l = require('./reform-to-l');
reformTo.ll = require('./reform-to-ll');
reformTo.t = require('./reform-to-t');
reformTo.tt = require('./reform-to-tt');
reformTo.yy = require('./reform-to-yy');
reformTo.yyyy = require('./reform-to-yyyy');
reformTo.zz = require('./reform-to-zz');
reformTo.unix = require('./reform-to-unix');
reformTo.utc = require('./reform-to-utc');
reformTo.iso = require('./reform-to-iso');

/**
 * Take a Gregorian object and output the reformatted string
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */
function to(format, delimiter) {
	delimiter = delimiter || '+';
	var date = this.d;
	var converted = format;
	var search = ['unix', // The number of milliseconds passed since January 1, 1970
	'utc-short', // shortened UTC string (no time included)
	'utc', // UTC string
	'iso-short', // shortened ISO string (no time included)
	'iso', // ISO string
	'yyyy', // four-digit year 2015
	'yy', // two-digit year (20)15
	'DD', // full day of the week Sunday-Saturday
	'dd', // two-digit date of the month 01-31
	'D', // abbreviated day of the week Sun-Sat
	'd', // date of the month with no leading zeros 1-31
	'MM', // full month January-December
	'mm', // two-digit month 00-12
	'M', // abbreviated month Jan-Dec
	'm', // month with no leading zeros 1-12
	'hh', // two-digit hours 00-12
	'h', // hour with no leading zeros 1-12
	'HH', // two-digit 24-hour clock hours 00-24
	'H', // 24-hour clock hour with no leading zeros 0-24
	'tt', // two-digit minutes 00-59
	't', // minutes with no leading zeros 0-59
	'AP', // AM or PM
	'ap', // am or pm
	'ss', // two-digit seconds 00-59
	's', // seconds with no leading zeros 0-59
	'll', // milliseconds 000-999
	'l', // milliseconds with no leading zeros 0-999
	'zz' // timezone offset UTC -6:00
	];

	search.some(function (piece) {
		//console.log(converted + ' vs ' + piece);
		var re = new RegExp('\\b' + piece + '\\b', 'g');
		if (re.test(converted)) {
			switch (piece) {
				case 'unix':
					converted = reformTo.unix(date);
					return true;
				case 'utc-short':
					converted = reformTo.utc(date, 'short');
					return true;
				case 'utc':
					converted = reformTo.utc(date);
					return true;
				case 'iso-short':
					converted = reformTo.iso(date, 'short');
					return true;
				case 'iso':
					converted = reformTo.iso(date);
					return true;
				default:
					//console.log('Search string is: ' + piece);
					//console.log('Converted string is: ' + reformTo[piece](date));
					var replacer = reformTo[piece](date).toString();
					converted = converted.replace(re, replacer);
					return false;
			}
		}
	});
	if (typeof converted === 'string') {
		converted = converted.replace(new RegExp('\\' + delimiter, 'g'), '');
	}
	// console .log(converted);
	return converted;
}

module.exports = to;

},{"./reform-to-_ap_":5,"./reform-to-_d_":6,"./reform-to-_dd_":7,"./reform-to-_h_":8,"./reform-to-_hh_":9,"./reform-to-_m_":10,"./reform-to-_mm_":11,"./reform-to-ap":12,"./reform-to-d":13,"./reform-to-dd":14,"./reform-to-h":15,"./reform-to-hh":16,"./reform-to-iso":17,"./reform-to-l":18,"./reform-to-ll":19,"./reform-to-m":20,"./reform-to-mm":21,"./reform-to-s":22,"./reform-to-ss":23,"./reform-to-t":24,"./reform-to-tt":25,"./reform-to-unix":26,"./reform-to-utc":27,"./reform-to-yy":28,"./reform-to-yyyy":29,"./reform-to-zz":30}],32:[function(require,module,exports){
'use strict';

var reformDate = require('./reform-date');
var reformTo = require('./reform-to');
var reformAdd = require('./reform-add');
var reformSubtract = require('./reform-subtract');

/**
 * Take a string or date object and convert it into a gregorian object
 * @param   {Object} obj A string or date object that can be parsed into a date
 * @returns {Object} Gregorian object
 */
function reform(obj) {
	var date = reformDate(obj);
	return {
		d: date,
		input: obj,
		to: reformTo,
		add: reformAdd,
		subtract: reformSubtract
	};
}

module.exports = reform;

},{"./reform-add":2,"./reform-date":3,"./reform-subtract":4,"./reform-to":31}]},{},[1])(1)
});
//# sourceMappingURL=gregorian.js.map