'use strict';

/**
 * Take a date object and output the two-digit date of the month (01-31)
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit date of the month
 */
function reformDdd (date) {
	var day = date.getDate().toString();
	return (day.length < 2) ? '0' + day : day;
}

module.exports = reformDdd;