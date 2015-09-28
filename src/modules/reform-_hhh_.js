'use strict';

/**
 * Take a date object and outpit the 24-hour clock hour with no leading zeros (0-23)
 * @param   {Date}   date a date object
 * @returns {String} the hour with no leading zeros
 */
function reformHHH (date) {
	var hour = date.getHours().toString();
	return (hour.length < 2) ? '0' + hour : hour;
}

module.exports = reformHHH;