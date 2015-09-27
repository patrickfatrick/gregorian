var to = require('./reform-to');
var subtract = require('./reform-subtract')

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
	}
	var sum = current + (n * increments[increment]);
	var date = new Date(sum);
	
	/**
	 * Handle month so that you always wind up on the same day of the month
	 */
	if (increment === 'm') {
		var newMonth = (this.d.getMonth() + n) + 1;
		var newYear = this.d.getFullYear();
		if (newMonth > 12) {
			newYear = this.d.getFullYear() + 1;
			newMonth = newMonth - 12;
		}
		newMonth = newMonth.toString();
		newMonth = (newMonth.length < 2) ? '0' + newMonth : newMonth;
		date = new Date(newYear + '-' + newMonth + '-' + this.d.toISOString().substring(8));
	}
	
	if (increment === 'y') {
		var newYear = this.d.getFullYear() + n;
		date = new Date(newYear + '-' + this.d.toISOString().substring(5));
	}
	
	return {
		d: date,
		input: this.input,
		to: to,
		add: add,
		subtract: subtract
	}
}

module.exports = add;