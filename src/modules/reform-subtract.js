'use strict';

/**
 * Subtracts specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to subtract
 * @returns {Object} a new gregorian object
 */
function subtract (n, increment) {
	var increments = {};
	
	increments.l = function (date) {
		return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() - n));
	};
	increments.s = function (date) {
		return new Date(date.setUTCSeconds(date.getUTCSeconds() - n));
	};
	increments.t = function (date) {
		return new Date(date.setUTCMinutes(date.getUTCMinutes() - n));
	};
	increments.h = function (date) {
		return new Date(date.setUTCHours(date.getUTCHours() - n));
	};
	increments.d = function (date) {
		return new Date(date.setUTCDate(date.getUTCDate() - n));
	};
	increments.w = function (date) {
		return new Date(date.setUTCDate(date.getUTCDate() - (n * 7)));
	};
	increments.m = function (date) {
		var newMonth = date.getUTCMonth() - n;
		var newYear = date.getUTCFullYear();
		var newDate = date.getUTCDate();
		
		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));							
		}
	};
	increments.y = function (date) {
		var newYear = date.getUTCFullYear() - n;
		var newMonth = date.getUTCMonth();
		var newDate = date.getUTCDate();
		
		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));							
		}
	};
	
	return {
		d: increments[increment](this.d),
		input: this.input,
		to: this.to,
		add: this.add,
		subtract: subtract,
		restart: this.restart
	};
}

module.exports = subtract;