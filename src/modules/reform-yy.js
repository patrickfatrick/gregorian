/**
 * Take a date object and output the two-digit year
 * @param {Date} 	a date object
 * @returns {Number}	the two-digit year
 */
function reformYy (date) {
	return date.getFullYear().toString().substr(2);
}

module.exports = reformYy;