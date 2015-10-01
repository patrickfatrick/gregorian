'use strict';

var reformDate = require('./reform-date');
var reformTo = require('./reform-to');
var reformAdd = require('./reform-add');
var reformSubtract = require('./reform-subtract');
var reformRestart = require('./reform-restart');

/**
 * Take a string or date object and convert it into a gregorian object
 * @param   {Object} obj A string or date object that can be parsed into a date
 * @returns {Object} Gregorian object
 */
function reform (obj) {
	var date = reformDate(obj);
	return {
		d: date,
		input: obj,
		to: reformTo,
		add: reformAdd,
		subtract: reformSubtract,
		restart: reformRestart
	};
}

module.exports = reform;