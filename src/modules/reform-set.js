'use strict';

/**
 * Sets the date or time to specified interval
 * @param   {String} increment an increment to set
 * @param {String} value what to set the increment to
 * @returns {Object} a new gregorian object
 */
export default function (value, increment) {
	let increments = {};
	
	increments.l = date => {
		return new Date(date.setUTCMilliseconds(value));
	};
	increments.s = date => {
		return new Date(date.setUTCSeconds(value));
	};
	increments.t = date => {
		return new Date(date.setUTCMinutes(value));
	};
	increments.h = date => {
		return new Date(date.setUTCHours(value));
	};
	increments.d = date => {
		return new Date(date.setUTCDate(value));
	};
	increments.w = date => {
		let currentDay = date.getUTCDay();
		date.setUTCFullYear(date.getUTCFullYear(), 0, value * 7);
		let n = currentDay - date.getUTCDay();
		date.setUTCDate(date.getUTCDate() + n);
		return new Date(date);
	};
	increments.m = date => {
		let newMonth = value - 1;
		let newYear = date.getUTCFullYear();
		let newDate = date.getUTCDate();
		
		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));							
		}
	};
	increments.y = date => {
		let newYear = value;
		let newMonth = date.getUTCMonth();
		let newDate = date.getUTCDate();
		
		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));							
		}
	};
	
	this.d = increments[increment](this.d);
	return this;
}