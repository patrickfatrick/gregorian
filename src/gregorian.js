'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 * 
 * Take a user-input date in any format and convert it to several formats
 * Also serves as a wrapper for common JS date methods like toUTCString and toISOString
 * toLocaleDateString is currently not well-supported especially on mobile, so we're avoiding it.
 * 
 * gregorian.reform.to('__FORMAT STRING__') string with formatting options specified with keyword strings
 * 		See ./modules/reform-to.js for more information on this
 * gregorian.reform(__OBJECT__).to('iso') ISO string including time such as '2015-09-12T23:06:19Z'
 * 		`iso-short` can be added to reduce the string to just the date, like '2015-09-12'
 * gregorian.reform(__OBJECT__).to('utc') UTC string such as 'Sat, 12 Sep 2015 06:00:00 GMT'
 * 		`utc-short` can be added to reduce the string to just the date, like 'Sat, 12 Sep 2015'
 * gregorian.reform(__OBJECT__).to('unix') milliseconds since January 1, 1970
 * gregorian.reform(__OBJECT__).add(_NUMBER__, __INCREMENT_STRING__) add time
 * gregorian.reform(__OBJECT__).subtract(_NUMBER__, __INCREMENT_STRING__) subtract time
 */


var reform = require('./modules/reform');

var gregorian = {
	reform: reform
};

module.exports =  gregorian;