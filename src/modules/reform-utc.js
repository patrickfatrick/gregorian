/**
 * Converts a date object to a UTC string
 * @param   {Date}   date a date object
 * @param 	{String}	format optional 'shart' to remove the time from the output
 * @returns {String} UTC string with or without time
 */

function reformUTC (date, format) {
	format = format || null;
	var utc = date.toUTCString();
	if (format === 'short') {
		var arr = utc.split(' ');
		var newArr = [];

		for (var i = 0; i < 4; i++) {
			newArr.push(arr[i]);
		}

		return newArr.join(' ');
	}
	return utc;
}

module.exports = reformUTC;