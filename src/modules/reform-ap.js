/**
 * Take a date object and output the uncapitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the uncapitalized 12-hour clock period 
 */
function reformAp (date) {
	var hour = date.getHours();
	var ampm = (hour < 12) ? 'am' : 'pm';
	return ampm;
}

module.exports = reformAp;