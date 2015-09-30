'use strict';

/**
 * Take a date object and output the abreviated day of the week
 * @param {Date} 	a date object
 * @returns {Number}	the abbreviated day of the week
 */
function reformDD (date) {
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var dayOfWeek = date.getDay();
	return days[dayOfWeek];
}

module.exports = reformDD;