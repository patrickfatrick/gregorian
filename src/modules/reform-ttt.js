/**
 * Take a date object and output the two-digit minutes
 * @param   {Date}   date a date object
 * @returns {String} the two-digit minutes
 */
function reformTtt (date) {
	var minute = date.getMinutes().toString();
	return (minute.length < 2) ? '0' + minute : minute;
}

module.exports = reformTtt;