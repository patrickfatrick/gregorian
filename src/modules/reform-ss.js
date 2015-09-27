/**
 * Take a date object and outpit the seconds with no leading zeros (0-59)
 * @param   {Date}   date a date object
 * @returns {String} the seconds with no leading zeros
 */
function reformSs (date) {
	var second = date.getSeconds();
	return second;
}

module.exports = reformSs;