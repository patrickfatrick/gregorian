'use strict';

/**
 * Adds specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to add
 * @returns {Object} a new gregorian object
 */
function addSubtract (obj, n, increment) {
	
	let increments = {};
	
	increments.l = date => {
		return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n));
	};
	increments.s = date => {
		return new Date(date.setUTCSeconds(date.getUTCSeconds() + n));
	};
	increments.t = date => {
		return new Date(date.setUTCMinutes(date.getUTCMinutes() + n));
	};
	increments.h = date => {
		return new Date(date.setUTCHours(date.getUTCHours() + n));
	};
	increments.d = date => {
		return new Date(date.setUTCDate(date.getUTCDate() + n));
	};
	increments.w = date => {
		return new Date(date.setUTCDate(date.getUTCDate() + (n * 7)));
	};
	increments.m = date => {
		let newMonth = date.getUTCMonth() + n;
		let newYear = date.getUTCFullYear();
		let newDate = date.getUTCDate();
		
		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));							
		}
	};
	increments.y = date => {
		let newYear = date.getUTCFullYear() + n;
		let newMonth = date.getUTCMonth();
		let newDate = date.getUTCDate();
		
		if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			return new Date(date.setUTCFullYear(newYear, newMonth, newDate));							
		}
	};
	
	return {
		d: increments[increment](obj.d),
		input: obj.input,
		to: obj.to,
		add: obj.add,
		subtract: obj.subtract,
		restart: obj.restart,
		reagent: obj.reagent,
		recite: obj.recite
	};
}

export var add = function (n, increment) {
	return addSubtract(this, n * 1, increment);
};

export var subtract = function (n, increment) {
	return addSubtract(this, n * -1, increment);
};