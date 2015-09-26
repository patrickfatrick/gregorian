/**
 * Take a date object and output the timezone offset (UTC +- 01:00, etc.)
 * @param   {Date}   date a date object
 * @returns {String} the timezone offset 
 */
function reformZz (date) {
	var offset = date.getTimezoneOffset() / 60 * -1;
	return 'UTC ' + offset + ':00';
}

module.exports = reformZz;