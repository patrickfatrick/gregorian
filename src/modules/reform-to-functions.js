'use strict';

/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */
export var AP = function (date) {
	const hour = date.getHours();
	const ampm = (hour < 12) ? 'AM' : 'PM';
	return ampm;
};

/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
export var ap = function (date) {
	const hour = date.getHours();
	const ampm = (hour < 12) ? 'am' : 'pm';
	return ampm;
};

/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated day of the week
 */
export var D = function (date) {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const dayOfWeek = date.getDay();
	return days[dayOfWeek];
};

/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
export var DD = function (date) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayOfWeek = date.getDay();
	return days[dayOfWeek];
};

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
export var H = function (date) {
	const hour = date.getHours();
	return hour;
};

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
export var HH = function (date) {
	const hour = date.getHours().toString();
	return (hour.length < 2) ? '0' + hour : hour;
};

/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
export var M = function (date) {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov',  'Dec'];
	const month = date.getMonth();
	return months[month];
};

/**
 * Take a date object and output the month
 * @param {Date} 	a date object
 * @returns {String}	the full month
 */
export var MM = function (date) {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const month = date.getMonth();
	return months[month];
};

/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {String}	the date of the month with no leading zeros
 */
export var d = function (date) {
	const day = date.getDate().toString();
	return day;
};

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit date of the month
 */
export var dd = function (date) {
	const day = date.getDate().toString();
	return (day.length < 2) ? '0' + day : day;
};

/**
 * Take a date object and output the date of the month with no leading zeros but with the ordinal (1st-31st)
 * @param {Date} 	a date object
 * @returns {String}	the date with no leading zeros but with the ordinal
 */
export var dt = function (date) {
	let day = date.getDate();
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
export var h = function (date) {
	let hour = date.getHours();
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
export var hh = function (date) {
	let hour = date.getHours();
	if (hour === 0) hour = 12;
	if (hour < 13) hour = hour;
	if (hour >= 13) hour = hour - 12;
	hour = hour.toString();
	return (hour.length < 2) ? '0' + hour : hour;
};

/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
export var l = function (date) {
	const milliseconds = date.getMilliseconds().toString();
	return milliseconds;
};

/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
export var ll = function (date) {
	let milliseconds = date.getMilliseconds().toString();
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
export var m = function (date) {
	const month = (date.getMonth() + 1).toString();
	return month;
};

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {String}	the two-digit month
 */
export var mm = function (date) {
	let month = (date.getMonth() + 1).toString();
	return (month.length < 2) ? '0' + month : month;
};

/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
export var s = function (date) {
	const second = date.getSeconds();
	return second;
};

/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
export var ss = function (date) {
	let second = date.getSeconds().toString();
	return (second.length < 2) ? '0' + second : second;
};

/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
export var t = function (date) {
	const minute = date.getMinutes().toString();
	return minute;
};

/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
export var tt = function (date) {
	let minute = date.getMinutes().toString();
	return (minute.length < 2) ? '0' + minute : minute;
};

/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {String}	the two-digit year
 */
export var yy = function (date) {
	return date.getFullYear().toString().substr(2);
};

/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {String}	the four-digit year
 */
export var yyyy = function (date) {
	return date.getFullYear();
};

/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
export var zz = function (date) {
	const offset = date.getTimezoneOffset() / 60 * -1;
	return 'UTC ' + offset + ':00';
};

/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
export var iso = function (date, format) {
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

export var utc = function (date, format) {
	format = format || null;
	const utc = date.toUTCString();
	if (format === 'short') {
		const arr = utc.split(' ');
		let newArr = [];

		for (let i = 0; i < 4; i++) {
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

export var unix = function (date) {
	return Date.parse(date);
};