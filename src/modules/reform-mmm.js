'use strict';

/**
 * Take a date object and output the two-digit month (01-12)
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit month
 */
function reformMmm (date) {
	var month = (date.getMonth() + 1).toString();
	return (month.length < 2) ? '0' + month : month;
}

module.exports = reformMmm;