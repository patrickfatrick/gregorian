/**
 * Take a date object and output the abbreviated month
 * @param {Date} 	a date object
 * @returns {String}	the abbreviated month
 */
function reformMM (date) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov',  'Dec']
	var month = date.getMonth();
	return months[month];
}

module.exports = reformMM;