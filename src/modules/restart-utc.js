'use strict';

/**
 * Sets the date or time to the start of the specified increment
 * @param   {String} increment an increment to set
 * @returns {Object} a new gregorian object
 */
function restartUTC (increment) {
	let increments = {};
	
	increments.s = date => {
		return new Date(date.setUTCSeconds(date.getUTCSeconds(), 0));
	};
	increments.t = date => {
		return new Date(date.setUTCMinutes(date.getUTCMinutes(), 0, 0));
	};
	increments.h = date => {
		return new Date(date.setUTCHours(date.getUTCHours(), 0, 0, 0));
	};
	increments.d = date => {
		date.setUTCDate(date.getUTCDate());
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.w = date => {
		date.setUTCDate(date.getUTCDate() - date.getUTCDay());
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.m = date => {
		date.setUTCMonth(date.getUTCMonth(), 1);
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	increments.y = date => {
		date.setUTCFullYear(date.getUTCFullYear(), 0, 1);
		date.setUTCHours(0, 0, 0, 0);
		return new Date(date);
	};
	
	this.d = increments[increment](this.d);
	return this;
}

module.exports = restartUTC;