/**
 * Take a date object and output the capitalized 12-hour clock period (AM/PM)
 * @param   {Date}   date a date object
 * @returns {String} the capitalized 12-hour clock period 
 */
function reformAP (date) {
	var hour = date.getHours();
	var ampm = (hour < 12) ? 'AM' : 'PM';
	return ampm;
}

module.exports = reformAP;