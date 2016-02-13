(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.gregorian = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var gregorian = require('./src/gregorian');
module.exports = gregorian;

},{"./src/gregorian":2}],2:[function(require,module,exports){
'use strict';

var Gregorian = require('./modules/Gregorian');

var gregorian = new Gregorian();
module.exports = gregorian;

},{"./modules/Gregorian":3}],3:[function(require,module,exports){
'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var to = require('./to');
var add = require('./add-subtract').add;
var subtract = require('./add-subtract').subtract;
var restart = require('./restart');
var restartUTC = require('./restart-utc');
var reagent = require('./reagent');
var recite = require('./recite');
var setUTC = require('./set-utc');
var set = require('./set');
var getUTC = require('./get-utc');
var get = require('./get');

module.exports = function () {
	function Gregorian() {
		_classCallCheck(this, Gregorian);

		this.d;
		this.input;
		this.to = to, this.add = add, this.subtract = subtract, this.restart = restart, this.restartUTC = restartUTC, this.reagent = reagent, this.recite = recite, this.setUTC = setUTC;
		this.set = set;
		this.getUTC = getUTC;
		this.get = get;
	}

	/**
  * Form a date (or other object) into a Gregorian object
  * @param  {Date}   obj any date
  * @return {Object}     A Gregorian instance
  */


	_createClass(Gregorian, [{
		key: 'reform',
		value: function reform(obj) {
			obj = obj || new Date();
			var date = new Date(obj);
			this.d = date;
			this.input = obj;
			return this;
		}
	}]);

	return Gregorian;
}();

},{"./add-subtract":4,"./get":6,"./get-utc":5,"./reagent":7,"./recite":8,"./restart":11,"./restart-utc":10,"./set":13,"./set-utc":12,"./to":14}],4:[function(require,module,exports){
'use strict';

/**
 * Adds specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to add
 * @returns {Object} a new gregorian object
 */

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

exports.add = function (n, increment) {
	return addSubtract(this, n * 1, increment);
};

exports.subtract = function (n, increment) {
	return addSubtract(this, n * -1, increment);
};

},{}],5:[function(require,module,exports){
'use strict';

/**
 * Gets the specified increment in UTC for the date
 * @param   {String} increment 		date increment to get the value of
 * @returns {Object} the value for that increment, in UTC
 */

function getUTC(increment) {
	var increments = {};

	increments.z = function () {
		return 0;
	};
	increments.l = function (date) {
		return date.getUTCMilliseconds();
	};
	increments.s = function (date) {
		return date.getUTCSeconds();
	};
	increments.t = function (date) {
		return date.getUTCMinutes();
	};
	increments.h = function (date) {
		return date.getUTCHours();
	};
	increments.d = function (date) {
		return date.getUTCDate();
	};
	increments.D = function (date) {
		return date.getUTCDay();
	};
	increments.w = function (date) {
		return Math.floor(((date - new Date(date.getUTCFullYear(), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7);
	};
	increments.m = function (date) {
		return date.getUTCMonth();
	};
	increments.y = function (date) {
		return date.getUTCFullYear();
	};

	return increments[increment](this.d);
}

module.exports = getUTC;

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Gets the specified increment in local time for the date
 * @param   {String} increment 		date increment to get the value of
 * @returns {Object} the value for that increment in local time
 */

function get(increment) {
	var increments = {};

	increments.z = function (date) {
		return date.getTimezoneOffset() / 60;
	};
	increments.l = function (date) {
		return date.getMilliseconds();
	};
	increments.s = function (date) {
		return date.getSeconds();
	};
	increments.t = function (date) {
		return date.getMinutes();
	};
	increments.h = function (date) {
		return date.getHours();
	};
	increments.d = function (date) {
		return date.getDate();
	};
	increments.D = function (date) {
		return date.getDay();
	};
	increments.w = function (date) {
		return Math.floor(((date - new Date(date.getFullYear(), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7);
	};
	increments.m = function (date) {
		return date.getMonth();
	};
	increments.y = function (date) {
		return date.getFullYear();
	};

	return increments[increment](this.d);
}

module.exports = get;

},{}],7:[function(require,module,exports){
'use strict';

/*
 * Takes a gregorian object and checks that it has a valid date.
 * @param {Object}  A gregorian object
 * @return {Boolean}
 */

function reagent() {
  if (isNaN(this.d.getTime())) {
    return false;
  }
  return true;
}

module.exports = reagent;

},{}],8:[function(require,module,exports){
'use strict';

/*
 * Takes a gregorian object and outputs the date object
 * @param {Object}  A gregorian object
 * @return {Date} the date object it contains
 */

function recite() {
  return this.d;
}

module.exports = recite;

},{}],9:[function(require,module,exports){
'use strict';

/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */

exports.AP = function (date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'AM' : 'PM';
  return ampm;
};

/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
exports.ap = function (date) {
  var hour = date.getHours();
  var ampm = hour < 12 ? 'am' : 'pm';
  return ampm;
};

/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated day of the week
 */
exports.D = function (date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
exports.DD = function (date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
exports.H = function (date) {
  var hour = date.getHours();
  return hour;
};

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
exports.HH = function (date) {
  var hour = date.getHours().toString();
  return hour.length < 2 ? '0' + hour : hour;
};

/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
exports.M = function (date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
};

/**
 * Take a date object and output the month
 * @param {Date} 	a date object
 * @returns {String}	the full month
 */
exports.MM = function (date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
};

/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {String}	the date of the month with no leading zeros
 */
exports.d = function (date) {
  var day = date.getDate().toString();
  return day;
};

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit date of the month
 */
exports.dd = function (date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
};

/**
 * Take a date object and output the date of the month with no leading zeros but with the ordinal (1st-31st)
 * @param {Date} 	a date object
 * @returns {String}	the date with no leading zeros but with the ordinal
 */
exports.dt = function (date) {
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
exports.h = function (date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  hour = hour < 13 ? hour : hour - 12;
  return hour;
};

/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
exports.hh = function (date) {
  var hour = date.getHours();
  if (hour === 0) hour = 12;
  hour = hour < 13 ? hour : hour - 12;
  hour = hour.toString();
  return hour.length < 2 ? '0' + hour : hour;
};

/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
exports.l = function (date) {
  var milliseconds = date.getMilliseconds().toString();
  return milliseconds;
};

/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
exports.ll = function (date) {
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
};

/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date} 	a date object
 * @returns {String}	the month with no leading zeros
 */
exports.m = function (date) {
  var month = (date.getMonth() + 1).toString();
  return month;
};

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit month
 */
exports.mm = function (date) {
  var month = (date.getMonth() + 1).toString();
  return month.length < 2 ? '0' + month : month;
};

/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
exports.s = function (date) {
  var second = date.getSeconds();
  return second;
};

/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
exports.ss = function (date) {
  var second = date.getSeconds().toString();
  return second.length < 2 ? '0' + second : second;
};

/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
exports.t = function (date) {
  var minute = date.getMinutes().toString();
  return minute;
};

/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
exports.tt = function (date) {
  var minute = date.getMinutes().toString();
  return minute.length < 2 ? '0' + minute : minute;
};

/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {String}	the two-digit year
 */
exports.yy = function (date) {
  return date.getFullYear().toString().substr(2);
};

/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {String}	the four-digit year
 */
exports.yyyy = function (date) {
  return date.getFullYear();
};

/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
exports.zz = function (date) {
  var offset = date.getTimezoneOffset() / 60 * -1;
  return 'UTC ' + offset + ':00';
};

/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
exports.iso = function (date, format) {
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

exports.utc = function (date, format) {
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

exports.unix = function (date) {
  return Date.parse(date);
};

},{}],10:[function(require,module,exports){
'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */

function restartUTC(increment) {
	var increments = {};

	increments.s = function (date) {
		return new Date(date.setUTCSeconds(date.getUTCSeconds(), 0));
	};
	increments.t = function (date) {
		return new Date(date.setUTCMinutes(date.getUTCMinutes(), 0, 0));
	};
	increments.h = function (date) {
		return new Date(date.setUTCHours(date.getUTCHours(), 0, 0, 0));
	};
	increments.d = function (date) {
		date.setUTCDate(date.getUTCDate());
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.w = function (date) {
		date.setUTCDate(date.getUTCDate() - date.getUTCDay());
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.m = function (date) {
		date.setUTCMonth(date.getUTCMonth(), 1);
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.y = function (date) {
		date.setUTCFullYear(date.getUTCFullYear(), 0, 1);
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};

	this.d = increments[increment](this.d);
	return this;
}

module.exports = restartUTC;

},{}],11:[function(require,module,exports){
'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */

function restart(increment) {
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
}

module.exports = restart;

},{}],12:[function(require,module,exports){
'use strict';

/**
 * Sets the date or time to specified interval
 * @param   {String} increment an increment to set
 * @param {String} value what to set the increment to
 * @returns {Object} a new gregorian object
 */

function setUTC(value, increment) {
	var increments = {};

	increments.l = function (date) {
		return new Date(date.setUTCMilliseconds(value));
	};
	increments.s = function (date) {
		return new Date(date.setUTCSeconds(value));
	};
	increments.t = function (date) {
		return new Date(date.setUTCMinutes(value));
	};
	increments.h = function (date) {
		return new Date(date.setUTCHours(value));
	};
	increments.d = function (date) {
		return new Date(date.setUTCDate(value));
	};
	increments.w = function (date) {
		var currentDay = date.getUTCDay();
		var currentMilliseconds = date.getUTCMilliseconds();
		date.setUTCFullYear(date.getUTCFullYear(), 0, value * 7);
		var n = currentDay - date.getUTCDay();
		date.setUTCDate(date.getUTCDate() + n);
		return new Date(date.setUTCMilliseconds(currentMilliseconds));
	};
	increments.m = function (date) {
		var newMonth = value - 1;
		var newYear = date.getUTCFullYear();
		var newDate = date.getUTCDate();

		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
		}
	};
	increments.y = function (date) {
		var newYear = value;
		var newMonth = date.getUTCMonth();
		var newDate = date.getUTCDate();

		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
		}
	};

	this.d = increments[increment](this.d);
	return this;
}

module.exports = setUTC;

},{}],13:[function(require,module,exports){
'use strict';

/**
 * Sets the date or time to specified interval
 * @param   {String} increment an increment to set
 * @param {String} value what to set the increment to
 * @returns {Object} a new gregorian object
 */

function set(value, increment) {
	var increments = {};

	increments.l = function (date) {
		return new Date(date.setMilliseconds(value));
	};
	increments.s = function (date) {
		return new Date(date.setSeconds(value));
	};
	increments.t = function (date) {
		return new Date(date.setMinutes(value));
	};
	increments.h = function (date) {
		return new Date(date.setHours(value));
	};
	increments.d = function (date) {
		return new Date(date.setDate(value));
	};
	increments.w = function (date) {
		var currentDay = date.getDay();
		var currentMilliseconds = date.getMilliseconds();
		date.setFullYear(date.getFullYear(), 0, value * 7);
		var n = currentDay - date.getDay();
		date.setDate(date.getDate() + n);
		return new Date(date.setMilliseconds(currentMilliseconds));
	};
	increments.m = function (date) {
		var newMonth = value - 1;
		var newYear = date.getFullYear();
		var newDate = date.getDate();

		if (newDate > new Date(date.setFullYear(newYear, newMonth + 1, 0)).getDate()) {
			return new Date(date.setFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setFullYear(newYear, newMonth, newDate));
		}
	};
	increments.y = function (date) {
		var newYear = value;
		var newMonth = date.getMonth();
		var newDate = date.getDate();

		if (newDate > new Date(date.setFullYear(newYear, newMonth + 1, 0)).getDate()) {
			return new Date(date.setFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setFullYear(newYear, newMonth, newDate));
		}
	};

	this.d = increments[increment](this.d);
	return this;
}

module.exports = set;

},{}],14:[function(require,module,exports){
'use strict';

var reformat = require('./reformat');

/**
 * Take a Gregorian object and output the reformatted string
 * See https://github.com/patrickfatrick/gregorian#accepted-formats for details
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */
function to(format, delimiter) {
	delimiter = delimiter || '+';
	var date = this.d;
	var pieces = ['unix', 'utc-short', 'utc', 'iso-short', 'iso', 'yyyy', 'yy', 'DD', 'dd', 'dt', 'D', 'd', 'MM', 'mm', 'M', 'm', 'hh', 'h', 'HH', 'H', 'tt', 't', 'AP', 'ap', 'ss', 's', 'll', 'l', 'zz'];
	var converted = format;

	pieces.forEach(function (piece) {
		var re = new RegExp('\\b' + piece + '\\b', 'g');
		var replacer = undefined;
		if (re.test(converted)) {
			switch (piece) {
				case 'unix':
					converted = reformat.unix(date);
					break;
				case 'utc-short':
					converted = reformat.utc(date, 'short');
					break;
				case 'utc':
					converted = reformat.utc(date);
					break;
				case 'iso-short':
					converted = reformat.iso(date, 'short');
					break;
				case 'iso':
					converted = reformat.iso(date);
					break;
				default:
					replacer = reformat[piece](date);
					converted = converted.replace(re, replacer);
			}
		}
	});
	if (typeof converted === 'string') {
		converted = converted.replace(new RegExp('\\' + delimiter, 'g'), '');
	}
	return converted;
}

module.exports = to;

},{"./reformat":9}]},{},[1])(1)
});


//# sourceMappingURL=gregorian.js.map
