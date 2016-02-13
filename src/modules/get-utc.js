'use strict';

/**
 * Gets the specified increment in UTC for the date
 * @param   {String} increment 		date increment to get the value of
 * @returns {Object} the value for that increment, in UTC
 */
function getUTC (increment) {
	let increments = {};
	
	increments.z = () => {
		return 0;
	};
	increments.l = date => {
		return date.getUTCMilliseconds();
	};
	increments.s = date => {
		return date.getUTCSeconds();
	};
	increments.t = date => {
		return date.getUTCMinutes();
	};
	increments.h = date => {
		return date.getUTCHours();
	};
	increments.d = date => {
		return date.getUTCDate();
	};
	increments.D = date => {
		return date.getUTCDay();
	};
	increments.w = date => {
		return Math.floor((((date - new Date(date.getUTCFullYear(), 0, 1)) / 1000 / 60 / 60 / 24) + 1) / 7);
	};
	increments.m = date => {
		return date.getUTCMonth();
	};
	increments.y = date => {
		return date.getUTCFullYear();
	};
	
	return increments[increment](this.d);
}

module.exports = getUTC;