var reformDate = require('./reform-date');
var reformTo = require('./reform-to');

/**
 * Take a string or date object and convert it into a gregorian object
 * @param   {Object} obj A string or date object that can be parsed into a date
 * @returns {Object} Gregorian object
 */
var reform = function (obj) {
	var date = reformDate(obj);
	return {
		d: date,
		input: obj,
		to: reformTo
	}
}

module.exports = reform;