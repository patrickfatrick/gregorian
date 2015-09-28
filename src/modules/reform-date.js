'use strict';

/**
 * Convert the object passed to a date and test its validity
 * @param {Object} 	obj any object
 * @returns {Date}	if string passes the test, return the date object
 */
function reformDate (obj) {
	if (obj == null) throw new TypeError('This is null or undefined');
	obj = new Date(obj);
	if (Object.prototype.toString.call(obj) === '[object Date]') {
		if (isNaN(obj.getTime())) {
			throw new TypeError('This is not a valid date');
		}
	}
	return obj;
}

module.exports = reformDate;