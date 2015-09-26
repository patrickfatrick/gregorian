/**
 * Take a date object and output the milliseconds with no leading zeros (0-999)
 * @param   {Date} date a date object
 * @returns {String}    the number of milliseconds
 */
function reformMl (date) {
	var milliseconds = date.getMilliseconds().toString();
	return milliseconds;
}

module.exports = reformMl;