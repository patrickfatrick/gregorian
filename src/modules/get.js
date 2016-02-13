'use strict';

/**
 * Gets the specified increment in local time for the date
 * @param   {String} increment 		date increment to get the value of
 * @returns {Object} the value for that increment in local time
 */
function get (increment) {
	let increments = {};
	
	increments.z = date => {
		return date.getTimezoneOffset() / 60;
	};
	increments.l = date => {
		return date.getMilliseconds();
	};
	increments.s = date => {
		return date.getSeconds();
	};
	increments.t = date => {
		return date.getMinutes();
	};
	increments.h = date => {
		return date.getHours();
	};
	increments.d = date => {
		return date.getDate();
	};
	increments.D = date => {
		return date.getDay();
	};
	increments.w = date => {
		return Math.floor((((date - new Date(date.getFullYear(), 0, 1)) / 1000 / 60 / 60 / 24) + 1) / 7);
	};
	increments.m = date => {
		return date.getMonth();
	};
	increments.y = date => {
		return date.getFullYear();
	};
	
	return increments[increment](this.d);
}

module.exports = get;