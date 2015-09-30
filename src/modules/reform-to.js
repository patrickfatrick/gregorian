'use strict';

var reformTo = {};
reformTo.AP = require('./reform-to-_ap_');
reformTo.ap = require('./reform-to-ap');
reformTo.D = require('./reform-to-_d_');
reformTo.DD = require('./reform-to-_dd_');
reformTo.M = require('./reform-to-_m_');
reformTo.MM = require('./reform-to-_mm_');
reformTo.m = require('./reform-to-m');
reformTo.mm = require('./reform-to-mm');
reformTo.d = require('./reform-to-d');
reformTo.dd = require('./reform-to-dd');
reformTo.h = require('./reform-to-h');
reformTo.hh = require('./reform-to-hh');
reformTo.H = require('./reform-to-_h_');
reformTo.HH = require('./reform-to-_hh_');
reformTo.s = require('./reform-to-s');
reformTo.ss = require('./reform-to-ss');
reformTo.l = require('./reform-to-l');
reformTo.ll = require('./reform-to-ll');
reformTo.t = require('./reform-to-t');
reformTo.tt = require('./reform-to-tt');
reformTo.yy = require('./reform-to-yy');
reformTo.yyyy = require('./reform-to-yyyy');
reformTo.zz = require('./reform-to-zz');
reformTo.unix = require('./reform-to-unix');
reformTo.utc = require('./reform-to-utc');
reformTo.iso = require('./reform-to-iso');

/**
 * Take a Gregorian object and output the reformatted string
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */
function to (format, delimiter) {
	delimiter = new RegExp('\\' + delimiter, 'g') || new RegExp(/\+/g);
	var date = this.d;
	var converted = format;
	var search = [
		'unix', // The number of milliseconds passed since January 1, 1970
		'utc-short', // shortened UTC string (no time included)
		'utc', // UTC string
		'iso-short', // shortened ISO string (no time included)
		'iso', // ISO string 
		'yyyy', // four-digit year 2015
		'yy', // two-digit year (20)15
		'DD', // full day of the week Sunday-Saturday
		'dd', // two-digit date of the month 01-31
		'D', // abbreviated day of the week Sun-Sat
		'd', // date of the month with no leading zeros 1-31
		'MM', // full month January-December
		'mm', // two-digit month 00-12
		'M', // abbreviated month Jan-Dec
		'm', // month with no leading zeros 1-12
		'hh', // two-digit hours 00-12
		'h', // hour with no leading zeros 1-12
		'HH', // two-digit 24-hour clock hours 00-24
		'H', // 24-hour clock hour with no leading zeros 0-24
		'tt', // two-digit minutes 00-59
		't', // minutes with no leading zeros 0-59
		'AP', // AM or PM
		'ap', // am or pm
		'ss', // two-digit seconds 00-59
		's', // seconds with no leading zeros 0-59
		'll', // milliseconds 000-999
		'l', // milliseconds with no leading zeros 0-999
		'zz' // timezone offset UTC -6:00
	];

	search.some(function(piece) {
		//console.log(converted + ' vs ' + piece);
		var re = new RegExp('\\b' + piece + '\\b', 'g');
		if (re.test(converted)) {
			switch (piece) {
				case 'unix':
					converted = reformTo.unix(date);
					return true;
				case 'utc-short':
					converted = reformTo.utc(date, 'short');
					return true;
				case 'utc':
					converted = reformTo.utc(date);
					return true;
				case 'iso-short':
					converted = reformTo.iso(date, 'short');
					return true;
				case 'iso':
					converted = reformTo.iso(date);
					return true;
				default:
					//console.log('Search string is: ' + piece);
					//console.log('Converted string is: ' + reformTo[piece](date));
					var replacer = reformTo[piece](date).toString();
					converted = converted.replace(re, replacer);
					return false;
			}
		}
	});
	if (typeof converted === 'string') {
		converted = converted.replace(delimiter, '');
	}
	// console .log(converted);
	return converted;
}

module.exports = to;
