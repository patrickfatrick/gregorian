/**
 * Converts a date object to an ISO string
 * @param   {Date}   date   a date object
 * @param {String}		format optional 'short' to remove the time
 * @returns {String} ISO String including time
 */
function reformISO (date, format) {
	format = format || null;
	//console.log('iso function date: ' + date);
	if (format === 'short') return date.toISOString().split('T')[0];
	return date.toISOString();
}

module.exports = reformISO;