'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */
function restart (increment) {
	var increments = {};
	
	increments.s = function (date) {
		return new Date(date.setSeconds(date.getSeconds(), 0));
	};
	increments.t = function (date) {
		return new Date(date.setMinutes(date.getMinutes(), 0, 0));
	};
	increments.h = function (date) {
		return new Date(date.setHours(date.getHours(), 0, 0, 0));
	};
	increments.d = function (date) {
		date.setDate(date.getDate());
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.w = function (date) {
		date.setDate(date.getDate() - date.getDay());
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.m = function (date) {
		date.setMonth(date.getMonth(), 1);
		date.setHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.y = function (date) {
		date.setFullYear(date.getFullYear(), 0, 1);
		date.setHours(0, 0, 0, 0);
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