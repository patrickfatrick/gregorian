'use strict';

/**
 * Take a date object and outpit the two-digit seconds (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the two-digit seconds
 */
function reformSs (date) {
	var second = date.getSeconds().toString();
	return (second.length < 2) ? '0' + second : second;
}

module.exports = reformSs;