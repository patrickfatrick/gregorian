'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */
function restart (increment) {
	var increments = {};
	
	increments.s = function (date) {
		return new Date(date.setUTCSeconds(date.getUTCSeconds(), 0));
	};
	increments.t = function (date) {
		return new Date(date.setUTCMinutes(date.getUTCMinutes(), 0, 0));
	};
	increments.h = function (date) {
		return new Date(date.setUTCHours(date.getUTCHours(), 0, 0, 0));
	};
	increments.d = function (date) {
		date.setUTCDate(date.getUTCDate());
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.w = function (date) {
		date.setUTCDate(date.getUTCDate() - date.getUTCDay());
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.m = function (date) {
		date.setUTCMonth(date.getUTCMonth(), 1);
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.y = function (date) {
		date.setUTCFullYear(date.getUTCFullYear(), 0, 1);
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	
	return {
		d: increments[increment](this.d),
		input: this.input,
		to: this.to,
		add: this.add,
		subtract: this.subtract,
		restart: restart
	};
}

module.exports = restart;