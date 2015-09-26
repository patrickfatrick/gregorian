var reformTo = require('./reform-to');

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
		w: 604800000,
		m: 2628000000,
		y: 31536000000
	}
	var sum = current + (n * increments[increment]);
	var date = new Date(sum);
	return {
		d: date,
		input: this.input,
		to: reformTo,
		add: add
	}
}

module.exports = add;