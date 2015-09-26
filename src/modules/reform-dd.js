/**
 * Take a date object and output the date of the month with no leading zeros (1-31)
 * @param {Date} 	a date object
 * @returns {Number}	the date of the month with no leading zeros
 */
function reformDd (date) {
	var day = date.getDate().toString();
	return day;
}

module.exports = reformDd;