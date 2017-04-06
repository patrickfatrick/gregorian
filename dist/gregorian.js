(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.gregorian = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var gregorian = require('./src/gregorian');

module.exports = gregorian;

},{"./src/gregorian":2}],2:[function(require,module,exports){
'use strict';

var Gregorian = require('./modules/Gregorian');

var gregorian = Object.create(Gregorian);
gregorian.init();

module.exports = gregorian;

},{"./modules/Gregorian":3}],3:[function(require,module,exports){
'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

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

var Gregorian = {
  init: function init() {
    this.d = null;
    this.input = null;
    this.to = to;
    this.add = add;
    this.subtract = subtract;
    this.restart = restart;
    this.restartUTC = restartUTC;
    this.reagent = reagent;
    this.recite = recite;
    this.setUTC = setUTC;
    this.set = set;
    this.getUTC = getUTC;
    this.get = get;
  },


  /**
   * Form a date (or other object) into a Gregorian object
   * @param  {Date}   obj any date
   * @return {Object}     A Gregorian instance
   */
  reform: function reform(obj) {
    obj = obj || new Date();
    var date = new Date(obj);
    this.d = date;
    this.input = obj;
    return this;
  }
};

module.exports = Gregorian;

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
 * @param   {String} increment    date increment to get the value of
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
 * @param   {String} increment    date increment to get the value of
 * @returns {Object} the value for that increment in local time
 */

function get(increment) {
  var increments = {};

  increments.z = function (date) {
    return date.getTimezoneOffset() / 60 * -1;
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
 * @param {Date}  a date object
 * @returns {String}  the abbreviated day of the week
 */
exports.D = function (date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = date.getDay();
  return days[dayOfWeek];
};

/**
 * Take a date object and output the day of the week
 * @param {Date}  a date object
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
 * @param {Date}  a date object
 * @returns {String}  the abbreviated month
 */
exports.M = function (date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var month = date.getMonth();
  return months[month];
};

/**
 * Take a date object and output the month
 * @param {Date}  a date object
 * @returns {String}  the full month
 */
exports.MM = function (date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return months[month];
};

/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date}  a date object
 * @returns {String}  the date of the month with no leading zeros
 */
exports.d = function (date) {
  var day = date.getDate().toString();
  return day;
};

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date}  a date object
 * @returns {String}  the two-digit date of the month
 */
exports.dd = function (date) {
  var day = date.getDate().toString();
  return day.length < 2 ? '0' + day : day;
};

/**
 * Take a date object and output the date of the month with no leading zeros but with the ordinal (1st-31st)
 * @param {Date}  a date object
 * @returns {String}  the date with no leading zeros but with the ordinal
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
 * @param {Date}  a date object
 * @returns {String}  the month with no leading zeros
 */
exports.m = function (date) {
  var month = (date.getMonth() + 1).toString();
  return month;
};

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date}  a date object
 * @returns {String}  the two-digit month
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
 * @param {Date}  a date object
 * @returns {String}  the two-digit year
 */
exports.yy = function (date) {
  return date.getFullYear().toString().substr(2);
};

/**
 * Take a date object and output the four-digit year
 * @param {Date}  a date object
 * @returns {String}  the four-digit year
 */
exports.yyyy = function (date) {
  return date.getFullYear();
};

/**
 * Take a date object and output the timezone offset (UTC+-01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset
 */
exports.zz = function (date) {
  var offset = (date.getTimezoneOffset() / 60 * -1).toString();
  offset = /^[-]?\d$/g.test(offset) ? offset.replace(/\d/, function (match, off) {
    return '0' + offset.charAt(off);
  }) : offset;
  if (!/^[-]/g.test(offset)) offset = '+' + offset;
  return 'UTC' + offset + ':00';
};

/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}    format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
exports.iso = function (date, format) {
  format = format || null;
  if (format === 'short') return date.toISOString().split('T')[0];
  return date.toISOString();
};

/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param   {String}  format optional 'shart' to remove the time from the output
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
  increments.D = function (date) {
    return new Date(date.setUTCDate(date.getUTCDate() - date.getUTCDay() + value));
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
  increments.D = function (date) {
    return new Date(date.setDate(date.getDate() - date.getDay() + value));
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
 * @param {String}  format a string or date object (something that can be converted to a valid date)
 * @returns {String}  the date reformatted into the specified format
 */
function to(format, delimiter) {
  delimiter = delimiter || '|';
  var date = this.d;
  var pieces = ['unix', 'utc-short', 'utc', 'iso-short', 'iso', 'yyyy', 'yy', 'DD', 'dd', 'dt', 'D', 'd', 'MM', 'mm', 'M', 'm', 'hh', 'h', 'HH', 'H', 'tt', 't', 'AP', 'ap', 'ss', 's', 'll', 'l', 'zz'];
  var converted = format;

  pieces.forEach(function (piece) {
    var re = new RegExp('\\b' + piece + '\\b', 'g');
    var replacer = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInNyYy9ncmVnb3JpYW4uanMiLCJzcmMvbW9kdWxlcy9HcmVnb3JpYW4uanMiLCJzcmMvbW9kdWxlcy9hZGQtc3VidHJhY3QuanMiLCJzcmMvbW9kdWxlcy9nZXQtdXRjLmpzIiwic3JjL21vZHVsZXMvZ2V0LmpzIiwic3JjL21vZHVsZXMvcmVhZ2VudC5qcyIsInNyYy9tb2R1bGVzL3JlY2l0ZS5qcyIsInNyYy9tb2R1bGVzL3JlZm9ybWF0LmpzIiwic3JjL21vZHVsZXMvcmVzdGFydC11dGMuanMiLCJzcmMvbW9kdWxlcy9yZXN0YXJ0LmpzIiwic3JjL21vZHVsZXMvc2V0LXV0Yy5qcyIsInNyYy9tb2R1bGVzL3NldC5qcyIsInNyYy9tb2R1bGVzL3RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxZQUFZLFFBQVEsaUJBQVIsQ0FBaEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7QUNKQTs7QUFFQSxJQUFJLFlBQVksUUFBUSxxQkFBUixDQUFoQjs7QUFFQSxJQUFJLFlBQVksT0FBTyxNQUFQLENBQWMsU0FBZCxDQUFoQjtBQUNBLFVBQVUsSUFBVjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsU0FBakI7OztBQ1BBOztBQUVBOzs7Ozs7QUFNQSxJQUFJLEtBQUssUUFBUSxNQUFSLENBQVQ7QUFDQSxJQUFJLE1BQU0sUUFBUSxnQkFBUixFQUEwQixHQUFwQztBQUNBLElBQUksV0FBVyxRQUFRLGdCQUFSLEVBQTBCLFFBQXpDO0FBQ0EsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFkO0FBQ0EsSUFBSSxhQUFhLFFBQVEsZUFBUixDQUFqQjtBQUNBLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBZDtBQUNBLElBQUksU0FBUyxRQUFRLFVBQVIsQ0FBYjtBQUNBLElBQUksU0FBUyxRQUFRLFdBQVIsQ0FBYjtBQUNBLElBQUksTUFB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QWlCLEVBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZ3JlZ29yaWFuID0gcmVxdWlyZSgnLi9zcmMvZ3JlZ29yaWFuJylcblxubW9kdWxlLmV4cG9ydHMgPSBncmVnb3JpYW5cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgR3JlZ29yaWFuID0gcmVxdWlyZSgnLi9tb2R1bGVzL0dyZWdvcmlhbicpXG5cbmxldCBncmVnb3JpYW4gPSBPYmplY3QuY3JlYXRlKEdyZWdvcmlhbilcbmdyZWdvcmlhbi5pbml0KClcblxubW9kdWxlLmV4cG9ydHMgPSBncmVnb3JpYW5cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEdyZWdvcmlhblxuICogQXV0aG9yOiBQYXRyaWNrIEZyaWNhbm9cbiAqIGh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vcGF0cmlja2ZhdHJpY2svZ3JlZ29yaWFuXG4gKi9cblxudmFyIHRvID0gcmVxdWlyZSgnLi90bycpXG52YXIgYWRkID0gcmVxdWlyZSgnLi9hZGQtc3VidHJhY3QnKS5hZGRcbnZhciBzdWJ0cmFjdCA9IHJlcXVpcmUoJy4vYWRkLXN1YnRyYWN0Jykuc3VidHJhY3RcbnZhciByZXN0YXJ0ID0gcmVxdWlyZSgnLi9yZXN0YXJ0JylcbnZhciByZXN0YXJ0VVRDID0gcmVxdWlyZSgnLi9yZXN0YXJ0LXV0YycpXG52YXIgcmVhZ2VudCA9IHJlcXVpcmUoJy4vcmVhZ2VudCcpXG52YXIgcmVjaXRlID0gcmVxdWlyZSgnLi9yZWNpdGUnKVxudmFyIHNldFVUQyA9IHJlcXVpcmUoJy4vc2V0LXV0YycpXG52YXIgc2V0ID0gcmVxdWlyZSgnLi9zZXQnKVxudmFyIGdldFVUQyA9IHJlcXVpcmUoJy4vZ2V0LXV0YycpXG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKVxuXG52YXIgR3JlZ29yaWFuID0ge1xuICBpbml0ICgpIHtcbiAgICB0aGlzLmQgPSBudWxsXG4gICAgdGhpcy5pbnB1dCA9IG51bGxcbiAgICB0aGlzLnRvID0gdG9cbiAgICB0aGlzLmFkZCA9IGFkZFxuICAgIHRoaXMuc3VidHJhY3QgPSBzdWJ0cmFjdFxuICAgIHRoaXMucmVzdGFydCA9IHJlc3RhcnRcbiAgICB0aGlzLnJlc3RhcnRVVEMgPSByZXN0YXJ0VVRDXG4gICAgdGhpcy5yZWFnZW50ID0gcmVhZ2VudFxuICAgIHRoaXMucmVjaXRlID0gcmVjaXRlXG4gICAgdGhpcy5zZXRVVEMgPSBzZXRVVENcbiAgICB0aGlzLnNldCA9IHNldFxuICAgIHRoaXMuZ2V0VVRDID0gZ2V0VVRDXG4gICAgdGhpcy5nZXQgPSBnZXRcbiAgfSxcblxuICAvKipcbiAgICogRm9ybSBhIGRhdGUgKG9yIG90aGVyIG9iamVjdCkgaW50byBhIEdyZWdvcmlhbiBvYmplY3RcbiAgICogQHBhcmFtICB7RGF0ZX0gICBvYmogYW55IGRhdGVcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgQSBHcmVnb3JpYW4gaW5zdGFuY2VcbiAgICovXG4gIHJlZm9ybSAob2JqKSB7XG4gICAgb2JqID0gb2JqIHx8IG5ldyBEYXRlKClcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUob2JqKVxuICAgIHRoaXMuZCA9IGRhdGVcbiAgICB0aGlzLmlucHV0ID0gb2JqXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyZWdvcmlhblxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogQWRkcyBzcGVjaWZpZWQgaW5jcmVtZW50cyB0byBhIGdyZWdvcmlhbiBvYmplY3RcbiAqIEBwYXJhbSAgIHtOdW1iZXJ9IG4gICAgICAgICBhIG51bWJlciB0byBtdWx0aXBseSB0aGUgaW5jcmVtZW50IGJ5XG4gKiBAcGFyYW0gICB7U3RyaW5nfSBpbmNyZW1lbnQgYW4gaW5jcmVtZW50IHRvIGFkZFxuICogQHJldHVybnMge09iamVjdH0gYSBuZXcgZ3JlZ29yaWFuIG9iamVjdFxuICovXG5mdW5jdGlvbiBhZGRTdWJ0cmFjdCAob2JqLCBuLCBpbmNyZW1lbnQpIHtcbiAgbGV0IGluY3JlbWVudHMgPSB7fVxuXG4gIGluY3JlbWVudHMubCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDTWlsbGlzZWNvbmRzKGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgKyBuKSlcbiAgfVxuICBpbmNyZW1lbnRzLnMgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ1NlY29uZHMoZGF0ZS5nZXRVVENTZWNvbmRzKCkgKyBuKSlcbiAgfVxuICBpbmNyZW1lbnRzLnQgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ01pbnV0ZXMoZGF0ZS5nZXRVVENNaW51dGVzKCkgKyBuKSlcbiAgfVxuICBpbmNyZW1lbnRzLmggPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ0hvdXJzKGRhdGUuZ2V0VVRDSG91cnMoKSArIG4pKVxuICB9XG4gIGluY3JlbWVudHMuZCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIG4pKVxuICB9XG4gIGluY3JlbWVudHMudyA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIChuICogNykpKVxuICB9XG4gIGluY3JlbWVudHMubSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IG5ld01vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpICsgblxuICAgIGxldCBuZXdZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpXG4gICAgbGV0IG5ld0RhdGUgPSBkYXRlLmdldFVUQ0RhdGUoKVxuXG4gICAgaWYgKG5ld0RhdGUgPiBuZXcgRGF0ZShkYXRlLnNldFVUQ0Z1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRnVsbFllYXIobmV3WWVhciwgbmV3TW9udGggKyAxLCAwKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRnVsbFllYXIobmV3WWVhciwgbmV3TW9udGgsIG5ld0RhdGUpKVxuICAgIH1cbiAgfVxuICBpbmNyZW1lbnRzLnkgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBuZXdZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgblxuICAgIGxldCBuZXdNb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKVxuICAgIGxldCBuZXdEYXRlID0gZGF0ZS5nZXRVVENEYXRlKClcblxuICAgIGlmIChuZXdEYXRlID4gbmV3IERhdGUoZGF0ZS5zZXRVVENGdWxsWWVhcihuZXdZZWFyLCBuZXdNb250aCArIDEsIDApKS5nZXRVVENEYXRlKCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ0Z1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoICsgMSwgMCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ0Z1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoLCBuZXdEYXRlKSlcbiAgICB9XG4gIH1cblxuICBvYmouZCA9IGluY3JlbWVudHNbaW5jcmVtZW50XShvYmouZClcbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChuLCBpbmNyZW1lbnQpIHtcbiAgcmV0dXJuIGFkZFN1YnRyYWN0KHRoaXMsIG4gKiAxLCBpbmNyZW1lbnQpXG59XG5cbmV4cG9ydHMuc3VidHJhY3QgPSBmdW5jdGlvbiAobiwgaW5jcmVtZW50KSB7XG4gIHJldHVybiBhZGRTdWJ0cmFjdCh0aGlzLCBuICogLTEsIGluY3JlbWVudClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEdldHMgdGhlIHNwZWNpZmllZCBpbmNyZW1lbnQgaW4gVVRDIGZvciB0aGUgZGF0ZVxuICogQHBhcmFtICAge1N0cmluZ30gaW5jcmVtZW50ICAgIGRhdGUgaW5jcmVtZW50IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSB2YWx1ZSBmb3IgdGhhdCBpbmNyZW1lbnQsIGluIFVUQ1xuICovXG5mdW5jdGlvbiBnZXRVVEMgKGluY3JlbWVudCkge1xuICBsZXQgaW5jcmVtZW50cyA9IHt9XG5cbiAgaW5jcmVtZW50cy56ID0gKCkgPT4ge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaW5jcmVtZW50cy5sID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKVxuICB9XG4gIGluY3JlbWVudHMucyA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDU2Vjb25kcygpXG4gIH1cbiAgaW5jcmVtZW50cy50ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZGF0ZS5nZXRVVENNaW51dGVzKClcbiAgfVxuICBpbmNyZW1lbnRzLmggPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0hvdXJzKClcbiAgfVxuICBpbmNyZW1lbnRzLmQgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBkYXRlLmdldFVUQ0RhdGUoKVxuICB9XG4gIGluY3JlbWVudHMuRCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF5KClcbiAgfVxuICBpbmNyZW1lbnRzLncgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgoKGRhdGUgLSBuZXcgRGF0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKSAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpICsgMSkgLyA3KVxuICB9XG4gIGluY3JlbWVudHMubSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDTW9udGgoKVxuICB9XG4gIGluY3JlbWVudHMueSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxuICB9XG5cbiAgcmV0dXJuIGluY3JlbWVudHNbaW5jcmVtZW50XSh0aGlzLmQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VVRDXG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBHZXRzIHRoZSBzcGVjaWZpZWQgaW5jcmVtZW50IGluIGxvY2FsIHRpbWUgZm9yIHRoZSBkYXRlXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBpbmNyZW1lbnQgICAgZGF0ZSBpbmNyZW1lbnQgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICogQHJldHVybnMge09iamVjdH0gdGhlIHZhbHVlIGZvciB0aGF0IGluY3JlbWVudCBpbiBsb2NhbCB0aW1lXG4gKi9cbmZ1bmN0aW9uIGdldCAoaW5jcmVtZW50KSB7XG4gIGxldCBpbmNyZW1lbnRzID0ge31cblxuICBpbmNyZW1lbnRzLnogPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCAqIC0xXG4gIH1cbiAgaW5jcmVtZW50cy5sID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKVxuICB9XG4gIGluY3JlbWVudHMucyA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpXG4gIH1cbiAgaW5jcmVtZW50cy50ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNaW51dGVzKClcbiAgfVxuICBpbmNyZW1lbnRzLmggPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKClcbiAgfVxuICBpbmNyZW1lbnRzLmQgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKVxuICB9XG4gIGluY3JlbWVudHMuRCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KClcbiAgfVxuICBpbmNyZW1lbnRzLncgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgoKGRhdGUgLSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpKSAvIDEwMDAgLyA2MCAvIDYwIC8gMjQpICsgMSkgLyA3KVxuICB9XG4gIGluY3JlbWVudHMubSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKVxuICB9XG4gIGluY3JlbWVudHMueSA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKVxuICB9XG5cbiAgcmV0dXJuIGluY3JlbWVudHNbaW5jcmVtZW50XSh0aGlzLmQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0XG4iLCIndXNlIHN0cmljdCdcblxuLypcbiAqIFRha2VzIGEgZ3JlZ29yaWFuIG9iamVjdCBhbmQgY2hlY2tzIHRoYXQgaXQgaGFzIGEgdmFsaWQgZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgQSBncmVnb3JpYW4gb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiByZWFnZW50ICgpIHtcbiAgaWYgKGlzTmFOKHRoaXMuZC5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWFnZW50XG4iLCIndXNlIHN0cmljdCdcblxuLypcbiAqIFRha2VzIGEgZ3JlZ29yaWFuIG9iamVjdCBhbmQgb3V0cHV0cyB0aGUgZGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSAgQSBncmVnb3JpYW4gb2JqZWN0XG4gKiBAcmV0dXJuIHtEYXRlfSB0aGUgZGF0ZSBvYmplY3QgaXQgY29udGFpbnNcbiAqL1xuZnVuY3Rpb24gcmVjaXRlICgpIHtcbiAgcmV0dXJuIHRoaXMuZFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlY2l0ZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIGNhcGl0YWxpemVkIDEyLWhvdXIgY2xvY2sgcGVyaW9kIChBTS9QTSlcbiAqIEBwYXJhbSAgIHtEYXRlfSAgIGRhdGUgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGNhcGl0YWxpemVkIDEyLWhvdXIgY2xvY2sgcGVyaW9kXG4gKi9cbmV4cG9ydHMuQVAgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXG4gIGNvbnN0IGFtcG0gPSAoaG91ciA8IDEyKSA/ICdBTScgOiAnUE0nXG4gIHJldHVybiBhbXBtXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIHVuY2FwaXRhbGl6ZWQgMTItaG91ciBjbG9jayBwZXJpb2QgKEFNL1BNKVxuICogQHBhcmFtICAge0RhdGUgICBkYXRlIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSB1bmNhcGl0YWxpemVkIDEyLWhvdXIgY2xvY2sgcGVyaW9kXG4gKi9cbmV4cG9ydHMuYXAgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXG4gIGNvbnN0IGFtcG0gPSAoaG91ciA8IDEyKSA/ICdhbScgOiAncG0nXG4gIHJldHVybiBhbXBtXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIGFicmV2aWF0ZWQgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge0RhdGV9ICBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSAgdGhlIGFiYnJldmlhdGVkIGRheSBvZiB0aGUgd2Vla1xuICovXG5leHBvcnRzLkQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBjb25zdCBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXVxuICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpXG4gIHJldHVybiBkYXlzW2RheU9mV2Vla11cbn1cblxuLyoqXG4gKiBUYWtlIGEgZGF0ZSBvYmplY3QgYW5kIG91dHB1dCB0aGUgZGF5IG9mIHRoZSB3ZWVrXG4gKiBAcGFyYW0ge0RhdGV9ICBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZnVsbCBkYXkgb2YgdGhlIHdlZWtcbiAqL1xuZXhwb3J0cy5ERCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKVxuICByZXR1cm4gZGF5c1tkYXlPZldlZWtdXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwaXQgdGhlIDI0LWhvdXIgY2xvY2sgaG91ciB3aXRoIG5vIGxlYWRpbmcgemVyb3MgKDAtMjMpXG4gKiBAcGFyYW0gICB7RGF0ZX0gICBkYXRlIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBob3VyIHdpdGggbm8gbGVhZGluZyB6ZXJvc1xuICovXG5leHBvcnRzLkggPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXG4gIHJldHVybiBob3VyXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwaXQgdGhlIDI0LWhvdXIgY2xvY2sgaG91ciB3aXRoIG5vIGxlYWRpbmcgemVyb3MgKDAtMjMpXG4gKiBAcGFyYW0gICB7RGF0ZX0gICBkYXRlIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBob3VyIHdpdGggbm8gbGVhZGluZyB6ZXJvc1xuICovXG5leHBvcnRzLkhIID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpXG4gIHJldHVybiAoaG91ci5sZW5ndGggPCAyKSA/ICcwJyArIGhvdXIgOiBob3VyXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIGFiYnJldmlhdGVkIG1vbnRoXG4gKiBAcGFyYW0ge0RhdGV9ICBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSAgdGhlIGFiYnJldmlhdGVkIG1vbnRoXG4gKi9cbmV4cG9ydHMuTSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKClcbiAgcmV0dXJuIG1vbnRoc1ttb250aF1cbn1cblxuLyoqXG4gKiBUYWtlIGEgZGF0ZSBvYmplY3QgYW5kIG91dHB1dCB0aGUgbW9udGhcbiAqIEBwYXJhbSB7RGF0ZX0gIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9ICB0aGUgZnVsbCBtb250aFxuICovXG5leHBvcnRzLk1NID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKClcbiAgcmV0dXJuIG1vbnRoc1ttb250aF1cbn1cblxuLyoqXG4gKiBUYWtlIGEgZGF0ZSBvYmplY3QgYW5kIG91dHB1dCB0aGUgZGF0ZSBvZiB0aGUgbW9udGggd2l0aCBubyBsZWFkaW5nIHplcm9zICgxLTMxKVxuICogQHBhcmFtIHtEYXRlfSAgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIHRoZSBkYXRlIG9mIHRoZSBtb250aCB3aXRoIG5vIGxlYWRpbmcgemVyb3NcbiAqL1xuZXhwb3J0cy5kID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKVxuICByZXR1cm4gZGF5XG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIHR3by1kaWdpdCBkYXRlIG9mIHRoZSBtb250aCAoMDEtMzEpXG4gKiBAcGFyYW0ge0RhdGV9ICBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSAgdGhlIHR3by1kaWdpdCBkYXRlIG9mIHRoZSBtb250aFxuICovXG5leHBvcnRzLmRkID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKVxuICByZXR1cm4gKGRheS5sZW5ndGggPCAyKSA/ICcwJyArIGRheSA6IGRheVxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cHV0IHRoZSBkYXRlIG9mIHRoZSBtb250aCB3aXRoIG5vIGxlYWRpbmcgemVyb3MgYnV0IHdpdGggdGhlIG9yZGluYWwgKDFzdC0zMXN0KVxuICogQHBhcmFtIHtEYXRlfSAgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIHRoZSBkYXRlIHdpdGggbm8gbGVhZGluZyB6ZXJvcyBidXQgd2l0aCB0aGUgb3JkaW5hbFxuICovXG5leHBvcnRzLmR0ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIHN3aXRjaCAoZGF5KSB7XG4gICAgY2FzZSAxOlxuICAgIGNhc2UgMjE6XG4gICAgY2FzZSAzMTpcbiAgICAgIGRheSArPSAnc3QnXG4gICAgICBicmVha1xuICAgIGNhc2UgMjpcbiAgICBjYXNlIDIyOlxuICAgICAgZGF5ICs9ICduZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAzOlxuICAgIGNhc2UgMjM6XG4gICAgICBkYXkgKz0gJ3JkJ1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgZGF5ICs9ICd0aCdcbiAgfVxuICByZXR1cm4gZGF5XG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwaXQgdGhlIGhvdXIgd2l0aCBubyBsZWFkaW5nIHplcm9zICgxLTEyKVxuICogQHBhcmFtICAge0RhdGV9ICAgZGF0ZSBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgaG91ciB3aXRoIG5vIGxlYWRpbmcgemVyb3NcbiAqL1xuZXhwb3J0cy5oID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgbGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgaWYgKGhvdXIgPT09IDApIGhvdXIgPSAxMlxuICBob3VyID0gKGhvdXIgPCAxMykgPyBob3VyIDogaG91ciAtIDEyXG4gIHJldHVybiBob3VyXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIHR3by1kaWdpdCBob3VyICgwMS0xMilcbiAqIEBwYXJhbSAgIHtEYXRlfSAgIGRhdGUgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIHR3by1kaWdpdCBob3VyXG4gKi9cbmV4cG9ydHMuaGggPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuICBpZiAoaG91ciA9PT0gMCkgaG91ciA9IDEyXG4gIGhvdXIgPSAoaG91ciA8IDEzKSA/IGhvdXIgOiBob3VyIC0gMTJcbiAgaG91ciA9IGhvdXIudG9TdHJpbmcoKVxuICByZXR1cm4gKGhvdXIubGVuZ3RoIDwgMikgPyAnMCcgKyBob3VyIDogaG91clxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cHV0IHRoZSBtaWxsaXNlY29uZHMgd2l0aCBubyBsZWFkaW5nIHplcm9zICgwLTk5OSlcbiAqIEBwYXJhbSAgIHtEYXRlfSBkYXRlIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9ICAgIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKi9cbmV4cG9ydHMubCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkudG9TdHJpbmcoKVxuICByZXR1cm4gbWlsbGlzZWNvbmRzXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBhbmQgb3V0cHV0IHRoZSB0aHJlZS1kaWdpdCBtaWxsaXNlY29uZHMgKDAwMC05OTkpXG4gKiBAcGFyYW0gICB7RGF0ZX0gICBkYXRlIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKi9cbmV4cG9ydHMubGwgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBsZXQgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpXG4gIHN3aXRjaCAobWlsbGlzZWNvbmRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIG1pbGxpc2Vjb25kcyA9ICcwMCcgKyBtaWxsaXNlY29uZHNcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAyOlxuICAgICAgbWlsbGlzZWNvbmRzID0gJzAnICsgbWlsbGlzZWNvbmRzXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtaWxsaXNlY29uZHMgPSAnJyArIG1pbGxpc2Vjb25kc1xuICAgICAgYnJlYWtcbiAgfVxuICByZXR1cm4gbWlsbGlzZWNvbmRzXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwdXQgdGhlIG51bWVyaWMgbW9udGggKDEtMTIpXG4gKiBAcGFyYW0ge0RhdGV9ICBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSAgdGhlIG1vbnRoIHdpdGggbm8gbGVhZGluZyB6ZXJvc1xuICovXG5leHBvcnRzLm0gPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpXG4gIHJldHVybiBtb250aFxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cHV0IHRoZSB0d28tZGlnaXQgbW9udGggKDAxLTEyKVxuICogQHBhcmFtIHtEYXRlfSAgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIHRoZSB0d28tZGlnaXQgbW9udGhcbiAqL1xuZXhwb3J0cy5tbSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIGxldCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpXG4gIHJldHVybiAobW9udGgubGVuZ3RoIDwgMikgPyAnMCcgKyBtb250aCA6IG1vbnRoXG59XG5cbi8qKlxuICogVGFrZSBhIGRhdGUgb2JqZWN0IGFuZCBvdXRwaXQgdGhlIHNlY29uZHMgd2l0aCBubyBsZWFkaW5nIHplcm9zICgwLTU5KVxuICogQHBhcmFtICAge0RhdGV9ICAgZGF0ZSBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgc2Vjb25kcyB3aXRoIG5vIGxlYWRpbmcgemVyb3NcbiAqL1xuZXhwb3J0cy5zID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcbiAgcmV0dXJuIHNlY29uZFxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cGl0IHRoZSB0d28tZGlnaXQgc2Vjb25kcyAoMC01OSlcbiAqIEBwYXJhbSAgIHtEYXRlfSAgIGRhdGUgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIHR3by1kaWdpdCBzZWNvbmRzXG4gKi9cbmV4cG9ydHMuc3MgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBsZXQgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKVxuICByZXR1cm4gKHNlY29uZC5sZW5ndGggPCAyKSA/ICcwJyArIHNlY29uZCA6IHNlY29uZFxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cHV0IHRoZSBtaW51dGVzIHdpdGggbm8gbGVhZGluZyB6ZXJvc1xuICogQHBhcmFtICAge0RhdGV9IGRhdGUgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIHRoZSBtaW51dGVzIHdpdGggbm8gbGVhZGluZyB6ZXJvc1xuICovXG5leHBvcnRzLnQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpXG4gIHJldHVybiBtaW51dGVcbn1cblxuLyoqXG4gKiBUYWtlIGEgZGF0ZSBvYmplY3QgYW5kIG91dHB1dCB0aGUgdHdvLWRpZ2l0IG1pbnV0ZXNcbiAqIEBwYXJhbSAgIHtEYXRlfSAgIGRhdGUgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIHR3by1kaWdpdCBtaW51dGVzXG4gKi9cbmV4cG9ydHMudHQgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKVxuICByZXR1cm4gKG1pbnV0ZS5sZW5ndGggPCAyKSA/ICcwJyArIG1pbnV0ZSA6IG1pbnV0ZVxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cHV0IHRoZSB0d28tZGlnaXQgeWVhclxuICogQHBhcmFtIHtEYXRlfSAgYSBkYXRlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIHRoZSB0d28tZGlnaXQgeWVhclxuICovXG5leHBvcnRzLnl5ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cigyKVxufVxuXG4vKipcbiAqIFRha2UgYSBkYXRlIG9iamVjdCBhbmQgb3V0cHV0IHRoZSBmb3VyLWRpZ2l0IHllYXJcbiAqIEBwYXJhbSB7RGF0ZX0gIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9ICB0aGUgZm91ci1kaWdpdCB5ZWFyXG4gKi9cbmV4cG9ydHMueXl5eSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKClcbn1cblxuLyoqXG4gKiBUYWtlIGEgZGF0ZSBvYmplY3QgYW5kIG91dHB1dCB0aGUgdGltZXpvbmUgb2Zmc2V0IChVVEMrLTAxOjAwLCBldGMuKVxuICogQHBhcmFtICAge0RhdGV9ICAgZGF0ZSBhIGRhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgdGltZXpvbmUgb2Zmc2V0XG4gKi9cbmV4cG9ydHMuenogPSBmdW5jdGlvbiAoZGF0ZSkge1xuICBsZXQgb2Zmc2V0ID0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwICogLTEpLnRvU3RyaW5nKClcbiAgb2Zmc2V0ID0gKC9eWy1dP1xcZCQvZy50ZXN0KG9mZnNldCkpXG4gICAgPyBvZmZzZXQucmVwbGFjZSgvXFxkLywgZnVuY3Rpb24gKG1hdGNoLCBvZmYpIHtcbiAgICAgIHJldHVybiAnMCcgKyBvZmZzZXQuY2hhckF0KG9mZilcbiAgICB9KVxuICAgIDogb2Zmc2V0XG4gIGlmICghKC9eWy1dL2cudGVzdChvZmZzZXQpKSkgb2Zmc2V0ID0gJysnICsgb2Zmc2V0XG4gIHJldHVybiAnVVRDJyArIG9mZnNldCArICc6MDAnXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkYXRlIG9iamVjdCB0byBhbiBJU08gc3RyaW5nXG4gKiBAcGFyYW0gICB7RGF0ZX0gICBkYXRlICAgYSBkYXRlIG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9ICAgIGZvcm1hdCBvcHRpb25hbCAnc2hvcnQnIHRvIHJlbW92ZSB0aGUgdGltZVxuICogQHJldHVybnMge1N0cmluZ30gSVNPIFN0cmluZyBpbmNsdWRpbmcgdGltZVxuICovXG5leHBvcnRzLmlzbyA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpIHtcbiAgZm9ybWF0ID0gZm9ybWF0IHx8IG51bGxcbiAgaWYgKGZvcm1hdCA9PT0gJ3Nob3J0JykgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKClcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRhdGUgb2JqZWN0IHRvIGEgVVRDIHN0cmluZ1xuICogQHBhcmFtICAge0RhdGV9ICAgZGF0ZSBhIGRhdGUgb2JqZWN0XG4gKiBAcGFyYW0gICB7U3RyaW5nfSAgZm9ybWF0IG9wdGlvbmFsICdzaGFydCcgdG8gcmVtb3ZlIHRoZSB0aW1lIGZyb20gdGhlIG91dHB1dFxuICogQHJldHVybnMge1N0cmluZ30gVVRDIHN0cmluZyB3aXRoIG9yIHdpdGhvdXQgdGltZVxuICovXG5cbmV4cG9ydHMudXRjID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICBmb3JtYXQgPSBmb3JtYXQgfHwgbnVsbFxuICBjb25zdCB1dGMgPSBkYXRlLnRvVVRDU3RyaW5nKClcbiAgaWYgKGZvcm1hdCA9PT0gJ3Nob3J0Jykge1xuICAgIGNvbnN0IGFyciA9IHV0Yy5zcGxpdCgnICcpXG4gICAgbGV0IG5ld0FyciA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgbmV3QXJyLnB1c2goYXJyW2ldKVxuICAgIH1cblxuICAgIHJldHVybiBuZXdBcnIuam9pbignICcpXG4gIH1cbiAgcmV0dXJuIHV0Y1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGF0ZSBvYmplY3QgdG8gVU5JWCB0aW1lIChtaWxsaXNlY29uZHMgZnJvbSBKYW51YXJ5IDEsIDE5NzApXG4gKiBAcGFyYW0gICB7RGF0ZX0gICBkYXRlIGEgZGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IG1pbGxpc2Vjb25kcyBmcm9tIEphbnVhcnkgMSwgMTk3MFxuICovXG5cbmV4cG9ydHMudW5peCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIHJldHVybiBEYXRlLnBhcnNlKGRhdGUpXG59XG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBTZXRzIHRoZSBkYXRlIG9yIHRpbWUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzcGVjaWZpZWQgaW5jcmVtZW50XG4gKiBAcGFyYW0gICB7U3RyaW5nfSBpbmNyZW1lbnQgYW4gaW5jcmVtZW50IHRvIHNldFxuICogQHJldHVybnMge09iamVjdH0gYSBuZXcgZ3JlZ29yaWFuIG9iamVjdFxuICovXG5mdW5jdGlvbiByZXN0YXJ0VVRDIChpbmNyZW1lbnQpIHtcbiAgdmFyIGluY3JlbWVudHMgPSB7fVxuXG4gIGluY3JlbWVudHMucyA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDU2Vjb25kcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgMCkpXG4gIH1cbiAgaW5jcmVtZW50cy50ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRVVENNaW51dGVzKGRhdGUuZ2V0VVRDTWludXRlcygpLCAwLCAwKSlcbiAgfVxuICBpbmNyZW1lbnRzLmggPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ0hvdXJzKGRhdGUuZ2V0VVRDSG91cnMoKSwgMCwgMCwgMCkpXG4gIH1cbiAgaW5jcmVtZW50cy5kID0gKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkpXG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKVxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKVxuICB9XG4gIGluY3JlbWVudHMudyA9IChkYXRlKSA9PiB7XG4gICAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGF0ZS5nZXRVVENEYXkoKSlcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpXG4gIH1cbiAgaW5jcmVtZW50cy5tID0gKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldFVUQ01vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSwgMSlcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpXG4gIH1cbiAgaW5jcmVtZW50cy55ID0gKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSlcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpXG4gIH1cblxuICB0aGlzLmQgPSBpbmNyZW1lbnRzW2luY3JlbWVudF0odGhpcy5kKVxuICByZXR1cm4gdGhpc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3RhcnRVVENcbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFNldHMgdGhlIGRhdGUgb3IgdGltZSB0byB0aGUgc3RhcnQgb2YgdGhlIHNwZWNpZmllZCBpbmNyZW1lbnRcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IGluY3JlbWVudCBhbiBpbmNyZW1lbnQgdG8gc2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhIG5ldyBncmVnb3JpYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHJlc3RhcnQgKGluY3JlbWVudCkge1xuICBsZXQgaW5jcmVtZW50cyA9IHt9XG5cbiAgaW5jcmVtZW50cy5zID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpLCAwKSlcbiAgfVxuICBpbmNyZW1lbnRzLnQgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCksIDAsIDApKVxuICB9XG4gIGluY3JlbWVudHMuaCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpLCAwLCAwLCAwKSlcbiAgfVxuICBpbmNyZW1lbnRzLmQgPSAoZGF0ZSkgPT4ge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSlcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpXG4gIH1cbiAgaW5jcmVtZW50cy53ID0gKGRhdGUpID0+IHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpKVxuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSlcbiAgfVxuICBpbmNyZW1lbnRzLm0gPSAoZGF0ZSkgPT4ge1xuICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpLCAxKVxuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSlcbiAgfVxuICBpbmNyZW1lbnRzLnkgPSAoZGF0ZSkgPT4ge1xuICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKVxuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSlcbiAgfVxuXG4gIHRoaXMuZCA9IGluY3JlbWVudHNbaW5jcmVtZW50XSh0aGlzLmQpXG4gIHJldHVybiB0aGlzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdGFydFxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogU2V0cyB0aGUgZGF0ZSBvciB0aW1lIHRvIHNwZWNpZmllZCBpbnRlcnZhbFxuICogQHBhcmFtICAge1N0cmluZ30gaW5jcmVtZW50IGFuIGluY3JlbWVudCB0byBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB3aGF0IHRvIHNldCB0aGUgaW5jcmVtZW50IHRvXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhIG5ldyBncmVnb3JpYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHNldFVUQyAodmFsdWUsIGluY3JlbWVudCkge1xuICBsZXQgaW5jcmVtZW50cyA9IHt9XG5cbiAgaW5jcmVtZW50cy5sID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpKVxuICB9XG4gIGluY3JlbWVudHMucyA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDU2Vjb25kcyh2YWx1ZSkpXG4gIH1cbiAgaW5jcmVtZW50cy50ID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlKSlcbiAgfVxuICBpbmNyZW1lbnRzLmggPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ0hvdXJzKHZhbHVlKSlcbiAgfVxuICBpbmNyZW1lbnRzLmQgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ0RhdGUodmFsdWUpKVxuICB9XG4gIGluY3JlbWVudHMuRCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRhdGUuZ2V0VVRDRGF5KCkgKyB2YWx1ZSkpXG4gIH1cbiAgaW5jcmVtZW50cy53ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgY3VycmVudERheSA9IGRhdGUuZ2V0VVRDRGF5KClcbiAgICBsZXQgY3VycmVudE1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgMCwgdmFsdWUgKiA3KVxuICAgIGxldCBuID0gY3VycmVudERheSAtIGRhdGUuZ2V0VVRDRGF5KClcbiAgICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBuKVxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyhjdXJyZW50TWlsbGlzZWNvbmRzKSlcbiAgfVxuICBpbmNyZW1lbnRzLm0gPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBuZXdNb250aCA9IHZhbHVlIC0gMVxuICAgIGxldCBuZXdZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpXG4gICAgbGV0IG5ld0RhdGUgPSBkYXRlLmdldFVUQ0RhdGUoKVxuXG4gICAgaWYgKG5ld0RhdGUgPiBuZXcgRGF0ZShkYXRlLnNldFVUQ0Z1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRnVsbFllYXIobmV3WWVhciwgbmV3TW9udGggKyAxLCAwKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0VVRDRnVsbFllYXIobmV3WWVhciwgbmV3TW9udGgsIG5ld0RhdGUpKVxuICAgIH1cbiAgfVxuICBpbmNyZW1lbnRzLnkgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBuZXdZZWFyID0gdmFsdWVcbiAgICBsZXQgbmV3TW9udGggPSBkYXRlLmdldFVUQ01vbnRoKClcbiAgICBsZXQgbmV3RGF0ZSA9IGRhdGUuZ2V0VVRDRGF0ZSgpXG5cbiAgICBpZiAobmV3RGF0ZSA+IG5ldyBEYXRlKGRhdGUuc2V0VVRDRnVsbFllYXIobmV3WWVhciwgbmV3TW9udGggKyAxLCAwKSkuZ2V0VVRDRGF0ZSgpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRVVENGdWxsWWVhcihuZXdZZWFyLCBuZXdNb250aCArIDEsIDApKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRVVENGdWxsWWVhcihuZXdZZWFyLCBuZXdNb250aCwgbmV3RGF0ZSkpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5kID0gaW5jcmVtZW50c1tpbmNyZW1lbnRdKHRoaXMuZClcbiAgcmV0dXJuIHRoaXNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRVVENcbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFNldHMgdGhlIGRhdGUgb3IgdGltZSB0byBzcGVjaWZpZWQgaW50ZXJ2YWxcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IGluY3JlbWVudCBhbiBpbmNyZW1lbnQgdG8gc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgd2hhdCB0byBzZXQgdGhlIGluY3JlbWVudCB0b1xuICogQHJldHVybnMge09iamVjdH0gYSBuZXcgZ3JlZ29yaWFuIG9iamVjdFxuICovXG5mdW5jdGlvbiBzZXQgKHZhbHVlLCBpbmNyZW1lbnQpIHtcbiAgbGV0IGluY3JlbWVudHMgPSB7fVxuXG4gIGluY3JlbWVudHMubCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0TWlsbGlzZWNvbmRzKHZhbHVlKSlcbiAgfVxuICBpbmNyZW1lbnRzLnMgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldFNlY29uZHModmFsdWUpKVxuICB9XG4gIGluY3JlbWVudHMudCA9IChkYXRlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0TWludXRlcyh2YWx1ZSkpXG4gIH1cbiAgaW5jcmVtZW50cy5oID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRIb3Vycyh2YWx1ZSkpXG4gIH1cbiAgaW5jcmVtZW50cy5kID0gKGRhdGUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKHZhbHVlKSlcbiAgfVxuICBpbmNyZW1lbnRzLkQgPSAoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpICsgdmFsdWUpKVxuICB9XG4gIGluY3JlbWVudHMudyA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGN1cnJlbnREYXkgPSBkYXRlLmdldERheSgpXG4gICAgbGV0IGN1cnJlbnRNaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIDAsIHZhbHVlICogNylcbiAgICBsZXQgbiA9IGN1cnJlbnREYXkgLSBkYXRlLmdldERheSgpXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgbilcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRNaWxsaXNlY29uZHMoY3VycmVudE1pbGxpc2Vjb25kcykpXG4gIH1cbiAgaW5jcmVtZW50cy5tID0gKGRhdGUpID0+IHtcbiAgICBsZXQgbmV3TW9udGggPSB2YWx1ZSAtIDFcbiAgICBsZXQgbmV3WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIGxldCBuZXdEYXRlID0gZGF0ZS5nZXREYXRlKClcblxuICAgIGlmIChuZXdEYXRlID4gbmV3IERhdGUoZGF0ZS5zZXRGdWxsWWVhcihuZXdZZWFyLCBuZXdNb250aCArIDEsIDApKS5nZXREYXRlKCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldEZ1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoICsgMSwgMCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldEZ1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoLCBuZXdEYXRlKSlcbiAgICB9XG4gIH1cbiAgaW5jcmVtZW50cy55ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgbmV3WWVhciA9IHZhbHVlXG4gICAgbGV0IG5ld01vbnRoID0gZGF0ZS5nZXRNb250aCgpXG4gICAgbGV0IG5ld0RhdGUgPSBkYXRlLmdldERhdGUoKVxuXG4gICAgaWYgKG5ld0RhdGUgPiBuZXcgRGF0ZShkYXRlLnNldEZ1bGxZZWFyKG5ld1llYXIsIG5ld01vbnRoICsgMSwgMCkpLmdldERhdGUoKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RnVsbFllYXIobmV3WWVhciwgbmV3TW9udGggKyAxLCAwKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RnVsbFllYXIobmV3WWVhciwgbmV3TW9udGgsIG5ld0RhdGUpKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZCA9IGluY3JlbWVudHNbaW5jcmVtZW50XSh0aGlzLmQpXG4gIHJldHVybiB0aGlzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHJlZm9ybWF0ID0gcmVxdWlyZSgnLi9yZWZvcm1hdCcpXG5cbi8qKlxuICogVGFrZSBhIEdyZWdvcmlhbiBvYmplY3QgYW5kIG91dHB1dCB0aGUgcmVmb3JtYXR0ZWQgc3RyaW5nXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3BhdHJpY2tmYXRyaWNrL2dyZWdvcmlhbiNhY2NlcHRlZC1mb3JtYXRzIGZvciBkZXRhaWxzXG4gKiBAcGFyYW0ge1N0cmluZ30gIGZvcm1hdCBhIHN0cmluZyBvciBkYXRlIG9iamVjdCAoc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCB0byBhIHZhbGlkIGRhdGUpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAgdGhlIGRhdGUgcmVmb3JtYXR0ZWQgaW50byB0aGUgc3BlY2lmaWVkIGZvcm1hdFxuICovXG5mdW5jdGlvbiB0byAoZm9ybWF0LCBkZWxpbWl0ZXIpIHtcbiAgZGVsaW1pdGVyID0gZGVsaW1pdGVyIHx8ICd8J1xuICBjb25zdCBkYXRlID0gdGhpcy5kXG4gIGNvbnN0IHBpZWNlcyA9IFtcbiAgICAndW5peCcsICd1dGMtc2hvcnQnLCAndXRjJywgJ2lzby1zaG9ydCcsICdpc28nLCAneXl5eScsICd5eScsICdERCcsICdkZCcsICdkdCcsICdEJywgJ2QnLCAnTU0nLCAnbW0nLCAnTScsICdtJywgJ2hoJywgJ2gnLCAnSEgnLCAnSCcsICd0dCcsICd0JywgJ0FQJywgJ2FwJywgJ3NzJywgJ3MnLCAnbGwnLCAnbCcsICd6eidcbiAgXVxuICBsZXQgY29udmVydGVkID0gZm9ybWF0XG5cbiAgcGllY2VzLmZvckVhY2goKHBpZWNlKSA9PiB7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyBwaWVjZSArICdcXFxcYicsICdnJylcbiAgICBsZXQgcmVwbGFjZXJcbiAgICBpZiAocmUudGVzdChjb252ZXJ0ZWQpKSB7XG4gICAgICBzd2l0Y2ggKHBpZWNlKSB7XG4gICAgICAgIGNhc2UgJ3VuaXgnOlxuICAgICAgICAgIGNvbnZlcnRlZCA9IHJlZm9ybWF0LnVuaXgoZGF0ZSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICd1dGMtc2hvcnQnOlxuICAgICAgICAgIGNvbnZlcnRlZCA9IHJlZm9ybWF0LnV0YyhkYXRlLCAnc2hvcnQnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3V0Yyc6XG4gICAgICAgICAgY29udmVydGVkID0gcmVmb3JtYXQudXRjKGRhdGUpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnaXNvLXNob3J0JzpcbiAgICAgICAgICBjb252ZXJ0ZWQgPSByZWZvcm1hdC5pc28oZGF0ZSwgJ3Nob3J0JylcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdpc28nOlxuICAgICAgICAgIGNvbnZlcnRlZCA9IHJlZm9ybWF0LmlzbyhkYXRlKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVwbGFjZXIgPSByZWZvcm1hdFtwaWVjZV0oZGF0ZSlcbiAgICAgICAgICBjb252ZXJ0ZWQgPSBjb252ZXJ0ZWQucmVwbGFjZShyZSwgcmVwbGFjZXIpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIGlmICh0eXBlb2YgY29udmVydGVkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnZlcnRlZCA9IGNvbnZlcnRlZC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFwnICsgZGVsaW1pdGVyLCAnZycpLCAnJylcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0ZWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1xuIl19
