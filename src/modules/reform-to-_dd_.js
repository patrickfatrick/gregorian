'use strict';

/**
 * Take a date object and output the day of the week
 * @param {Date} 	a date object
 * @returns {String} the full day of the week
 */
function reformDDD (date) {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var dayOfWeek = date.getDay();
	return days[dayOfWeek];
}

module.exports = reformDDD;