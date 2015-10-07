'use strict';

/**
 * Convert the object passed to a date and test its validity
 * @param {Object} 	obj any object
 * @returns {Date}	if string passes the test, return the date object
 */
export default function (obj) {
	obj = obj || new Date();
	return new Date(obj);
}