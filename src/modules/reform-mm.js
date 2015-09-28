'use strict';

/**
 * Take a date object and output the numeric month (1-12)
 * @param {Date} 	a date object
 * @returns {Number}	the month with no leading zeros
 */
function reformMm (date) {
	var month = (date.getMonth() + 1).toString();
	return month;
}

module.exports = reformMm;