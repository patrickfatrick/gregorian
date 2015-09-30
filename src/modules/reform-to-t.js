'use strict';

/**
 * Take a date object and output the minutes with no leading zeros
 * @param   {Date} date a date object
 * @returns {String}  the minutes with no leading zeros
 */
function reformTt (date) {
	var minute = date.getMinutes().toString();
	return minute;
}

module.exports = reformTt;