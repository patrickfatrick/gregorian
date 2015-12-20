'use strict';

/*
 * Takes a gregorian object and checks that it has a valid date.
 * @param {Object}  A gregorian object
 * @return {Boolean}
 */
function reagent () {
	if (isNaN(this.d.getTime())) {
		return false;
	}
	return true;
}

module.exports = reagent;
