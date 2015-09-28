'use strict';

/**
 * Converts a date object to UNIX time (milliseconds from January 1, 1970)
 * @param   {Date}   date a date object
 * @returns {Number} milliseconds from January 1, 1970
 */

function reformUnix (date) {
	return Date.parse(date);
}

module.exports = reformUnix;