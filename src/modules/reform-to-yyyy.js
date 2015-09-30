'use strict';

/**
 * Take a date object and output the four-digit year
 * @param {Date} 	a date object
 * @returns {Number}	the four-digit year
 */
function reformYyyy (date) {
	return date.getFullYear();
}

module.exports = reformYyyy;