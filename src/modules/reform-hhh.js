'use strict';

/**
 * Take a date object and output the two-digit hour (01-12)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit hour
 */
function reformHhh (date) {
	var hour = date.getHours();
	if (hour === 0) hour = 12;
	if (hour < 13) hour = hour;
	if (hour >= 13) hour = hour - 12;
	hour = hour.toString();
	return (hour.length < 2) ? '0' + hour : hour;
}

module.exports = reformHhh;