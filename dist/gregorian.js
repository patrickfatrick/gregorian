(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.gregorian || (g.gregorian = {})).js = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 * 
 * Take a user-input date in any format and convert it to several formats
 * Also serves as a wrapper for common JS date methods like toUTCString and toISOString
 * toLocaleDateString is currently not well-supported especially on mobile, so we're avoiding it.
 * 
 * 
 * 
 * gregorian.reform.to('__FORMAT STRING__') string with formatting options specified with keyword strings
 * 		See ./modules/reform-to.js for more information on this
 * gregorian.reform.to('iso') ISO string including time such as '2015-09-12T23:06:19Z'
 * 		`iso-short` can be added to reduce the string to just the date, like '2015-09-12'
 * gregorian.reform.to('utc') UTC string such as 'Sat, 12 Sep 2015 06:00:00 GMT'
 * 		`utc-short` can be added to reduce the string to just the date, like 'Sat, 12 Sep 2015'
 * gregorian.reform.to('unix') milliseconds since January 1, 1970
 */

'use strict';

var reform = require('./modules/reform');

var gregorian = {
  reform: reform
};

module.exports = gregorian;

},{"./modules/reform":26}],2:[function(require,module,exports){
/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */
'use strict';

function reformAP(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'AM' : 'PM';
  return ampm;
}

module.exports = reformAP;

},{}],3:[function(require,module,exports){
/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {Number}	the abbreviated day of the week
 */
'use strict';

function reformDD(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
}

module.exports = reformDD;

},{}],4:[function(require,module,exports){
/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
'use strict';

function reformDDD(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
}

module.exports = reformDDD;

},{}],5:[function(require,module,exports){
/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
'use strict';

function reformMM(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
}

module.exports = reformMM;

},{}],6:[function(require,module,exports){
/**
 * Take a date object and output the month
 * @param {Date} 	a date object
 * @returns {String}	the full month
 */
'use strict';

function reformMMM(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
}

module.exports = reformMMM;

},{}],7:[function(require,module,exports){
/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
'use strict';

function reformAp(date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'am' : 'pm';
  return ampm;
}

module.exports = reformAp;

},{}],8:[function(require,module,exports){
/**
 * Convert the object passed to a date and test its validity
 * @param {Object} 	obj any object
 * @returns {Date}	if string passes the test, return the date object
 */
'use strict';

function reformDate(obj) {
	if (obj == null) throw new TypeError('This is null or undefined');
	obj = new Date(obj);
	if (Object.prototype.toString.call(obj) === "[object Date]") {
		if (isNaN(obj.getTime())) {
			throw new TypeError('This is not a valid date');
		}
	}
	return obj;
}

module.exports = reformDate;

},{}],9:[function(require,module,exports){
/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {Number}	the date of the month with no leading zeros
 */
"use strict";

function reformDd(date) {
  var day = date.getDate().toString();
  return day;
}

module.exports = reformDd;

},{}],10:[function(require,module,exports){
/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit date of the month
 */
'use strict';

function reformDdd(date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
}

module.exports = reformDdd;

},{}],11:[function(require,module,exports){
/**
 * Take a date object and outpit the hour with no leading zeros (1-12)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
"use strict";

function reformHh(date) {
	var hour = date.getHours();
	if (hour === 0) hour = 12;
	if (hour < 13) hour = hour;
	if (hour >= 13) hour = hour - 12;
	return hour;
}

module.exports = reformHh;

},{}],12:[function(require,module,exports){
/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
'use strict';

function reformHhh(date) {
	var hour = date.getHours();
	if (hour === 0) hour = 12;
	if (hour < 13) hour = hour;
	if (hour >= 13) hour = hour - 12;
	hour = hour.toString();
	return hour.length < 2 ? '0' + hour : hour;
}

module.exports = reformHhh;

},{}],13:[function(require,module,exports){
/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
'use strict';

function reformISO(date, format) {
  format = format || null;
  //console.log('iso function date: ' + date);
  if (format === 'short') return date.toISOString().split('T')[0];
  return date.toISOString();
}

module.exports = reformISO;

},{}],14:[function(require,module,exports){
/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
"use strict";

function reformMl(date) {
  var milliseconds = date.getMilliseconds().toString();
  return milliseconds;
}

module.exports = reformMl;

},{}],15:[function(require,module,exports){
/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
'use strict';

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

},{}],16:[function(require,module,exports){
/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date} 	a date object
 * @returns {Number}	the month with no leading zeros
 */
"use strict";

function reformMm(date) {
  var month = (date.getMonth() + 1).toString();
  return month;
}

module.exports = reformMm;

},{}],17:[function(require,module,exports){
/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit month
 */
'use strict';

function reformMmm(date) {
  var month = (date.getMonth() + 1).toString();
  return month.length < 2 ? '0' + month : month;
}

module.exports = reformMmm;

},{}],18:[function(require,module,exports){
'use strict';

var reformDate = require('./reform-date');
var reformTo = {};
reformTo.AP = require('./reform-_ap_');
reformTo.ap = require('./reform-ap');
reformTo.DD = require('./reform-_dd_');
reformTo.DDD = require('./reform-_ddd_');
reformTo.MM = require('./reform-_mm_');
reformTo.MMM = require('./reform-_mmm_');
reformTo.mm = require('./reform-mm');
reformTo.mmm = require('./reform-mmm');
reformTo.dd = require('./reform-dd');
reformTo.ddd = require('./reform-ddd');
reformTo.hh = require('./reform-hh');
reformTo.hhh = require('./reform-hhh');
reformTo.ml = require('./reform-ml');
reformTo.mll = require('./reform-mll');
reformTo.tt = require('./reform-tt');
reformTo.ttt = require('./reform-ttt');
reformTo.yy = require('./reform-yy');
reformTo.yyyy = require('./reform-yyyy');
reformTo.zz = require('./reform-zz');
reformTo.unix = require('./reform-unix');
reformTo.utc = require('./reform-utc');
reformTo.iso = require('./reform-iso');

/**
 * Take a Gregorian object and output the reformatted string
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */
function to(format) {
	var date = this.d;
	var converted = format;
	var search = ['unix', // The number of milliseconds passed since January 1, 1970
	'utc-short', // shortened UTC string (no time included)
	'utc', // UTC string
	'iso-short', // shortened ISO string (no time included)
	'iso', // ISO string
	'yyyy', // four-digit year 2015
	'yy', // two-digit year (20)15
	'DDD', // full day of the week Sunday-Saturday
	'ddd', // two-digit date of the month 01-31
	'DD', // abbreviated day of the week Sun-Sat
	'dd', // date of the month with no leading zeros 1-31
	'MMM', // full month January-December
	'mmm', // two-digit month 00-12
	'MM', // abbreviated month Jan-Dec
	'mm', // month with no leading zeros 1-12
	'hhh', // two-digit hours 01-12
	'hh', // hour with no leading zeros 1-12
	'ttt', // two-digit minutes 00-59
	'tt', // minutes with no leading zeros 0-59
	'AP', // AM or PM
	'ap', // am or pm
	'mll', // milliseconds 000-999
	'ml', // milliseconds with no leading zeros 0-999
	'zz' // timezone offset UTC -6:00
	];

	search.some(function (piece, i) {
		//console.log(converted + ' vs ' + piece);
		if (converted.indexOf(piece) !== -1) {
			switch (piece) {
				case 'unix':
					converted = reformTo.unix(date);
					return true;
					break;
				case 'utc-short':
					converted = reformTo.utc(date, 'short');
					return true;
					break;
				case 'utc':
					converted = reformTo.utc(date);
					return true;
					break;
				case 'iso-short':
					converted = reformTo.iso(date, 'short');
					return true;
					break;
				case 'iso':
					converted = reformTo.iso(date);
					return true;
					break;
				default:
					// console.log('Search string is: ' + piece);
					// console.log('Converted string is: ' + to[piece](date));
					var replacer = reformTo[piece](date).toString();
					converted = converted.replace(piece, replacer);
					return false;
					break;
			}
		}
	});
	// console.log(converted);
	return converted;
}

module.exports = to;

},{"./reform-_ap_":2,"./reform-_dd_":3,"./reform-_ddd_":4,"./reform-_mm_":5,"./reform-_mmm_":6,"./reform-ap":7,"./reform-date":8,"./reform-dd":9,"./reform-ddd":10,"./reform-hh":11,"./reform-hhh":12,"./reform-iso":13,"./reform-ml":14,"./reform-mll":15,"./reform-mm":16,"./reform-mmm":17,"./reform-tt":19,"./reform-ttt":20,"./reform-unix":21,"./reform-utc":22,"./reform-yy":23,"./reform-yyyy":24,"./reform-zz":25}],19:[function(require,module,exports){
/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
"use strict";

function reformTt(date) {
  var minute = date.getMinutes().toString();
  return minute;
}

module.exports = reformTt;

},{}],20:[function(require,module,exports){
/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
'use strict';

function reformTtt(date) {
  var minute = date.getMinutes().toString();
  return minute.length < 2 ? '0' + minute : minute;
}

module.exports = reformTtt;

},{}],21:[function(require,module,exports){
/**
 * Converts a date object to UNIX time (milliseconds from January 1, 1970)
 * @param   {Date}   date a date object
 * @returns {Number} milliseconds from January 1, 1970
 */

"use strict";

function reformUnix(date) {
  return Date.parse(date);
}

module.exports = reformUnix;

},{}],22:[function(require,module,exports){
/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param 	{String}	format optional 'shart' to remove the time from the output
 * @returns {String} UTC string with or without time
 */

'use strict';

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

},{}],23:[function(require,module,exports){
/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit year
 */
"use strict";

function reformYy(date) {
  return date.getFullYear().toString().substr(2);
}

module.exports = reformYy;

},{}],24:[function(require,module,exports){
/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {Number}	the four-digit year
 */
"use strict";

function reformYyyy(date) {
  return date.getFullYear();
}

module.exports = reformYyyy;

},{}],25:[function(require,module,exports){
/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
'use strict';

function reformZz(date) {
  var offset = date.getTimezoneOffset() / 60 * -1;
  return 'UTC ' + offset + ':00';
}

module.exports = reformZz;

},{}],26:[function(require,module,exports){
'use strict';

var reformDate = require('./reform-date');
var reformTo = require('./reform-to');

/**
 * Take a string or date object and convert it into a gregorian object
 * @param   {Object} obj A string or date object that can be parsed into a date
 * @returns {Object} Gregorian object
 */
var reform = function reform(obj) {
	var date = reformDate(obj);
	return {
		d: date,
		input: obj,
		to: reformTo
	};
};

module.exports = reform;

},{"./reform-date":8,"./reform-to":18}]},{},[1])(1)
});


//# sourceMappingURL=gregorian.js.map