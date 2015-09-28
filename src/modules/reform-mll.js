'use strict';

/**
 * Take a date object and and output the three-digit milliseconds (000-999)
 * @param   {Date}   date a date object
 * @returns {String} the number of milliseconds
 */
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