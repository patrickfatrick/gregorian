/*
 * Takes a gregorian object and checks that it has a valid date.
 * @param {Object}  A gregorian object
 * @return {Boolean}
 */
export default function () {
	if (isNaN(this.d.getTime())) {
		return false;
	}
	return true;
}