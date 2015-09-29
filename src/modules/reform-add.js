'use strict';

//var to = require('./reform-to');
//var subtract = require('./reform-subtract');

/**
 * Adds specified increments to a gregorian object
 * @param   {Number} n         a number to multiply the increment by
 * @param   {String} increment an increment to add
 * @returns {Object} a new gregorian object
 */
function add (n, increment) {
	var current = Date.parse(this.d);
	var increments = {
		ms: 1,
		s: 1000,
		min: 60000,
		h: 3600000,
		d: 86400000,
		w: 604800000
	};
	var sum = current + (n * increments[increment]);
	var date = new Date(sum);
	
	/**
	 * Handle month so that you always wind up on the same day of the month
	 */
	
	var newYear;
	var newMonth;
	var newDate = this.d.getUTCDate();
	
	if (increment === 'm') {
		newMonth = this.d.getUTCMonth() + n;
		newYear = this.d.getUTCFullYear();
		
		if (newDate > new Date(this.d.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			date = new Date(this.d.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			date = new Date(this.d.setUTCFullYear(newYear, newMonth, newDate));							
		}
	}
	
	/**
	 * Handle year so that you always wind up on the same day of the month
	 */
	if (increment === 'y') {
		newYear = this.d.getUTCFullYear() + n;
		newMonth = this.d.getUTCMonth();

		if (newDate > new Date(this.d.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
			date = new Date(this.d.setUTCFullYear(newYear, newMonth + 1, 0));
		} else {
			date = new Date(this.d.setUTCFullYear(newYear, newMonth, newDate));							
		}
	}
	
	return {
		d: date,
		input: this.input,
		to: this.to,
		add: add,
		subtract: this.subtract
	};
}

module.exports = add;