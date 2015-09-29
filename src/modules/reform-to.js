'use strict';

var reformTo = {};
reformTo.AP = require('./reform-_ap_');
reformTo.ap = require('./reform-ap');
reformTo.DD = require('./reform-_dd_');
reformTo.DDD = require('./reform-_ddd_');
reformTo.MM = require('./reform-_mm_');
reformTo.MMM = require('./reform-_mmm_');
reformTo.mm = require('./reform-mm');
reformTo.mmm = require('./reform-mmm');
reformTo.dd = require('./reform-dd');
reformTo.ddd = require('./reform-ddd');
reformTo.hh = require('./reform-hh');
reformTo.hhh = require('./reform-hhh');
reformTo.HH = require('./reform-_hh_');
reformTo.HHH = require('./reform-_hhh_');
reformTo.ss = require('./reform-ss');
reformTo.sss = require('./reform-sss');
reformTo.ml = require('./reform-ml');
reformTo.mll = require('./reform-mll');
reformTo.tt = require('./reform-tt');
reformTo.ttt = require('./reform-ttt');
reformTo.yy = require('./reform-yy');
reformTo.yyyy = require('./reform-yyyy');
reformTo.zz = require('./reform-zz');
reformTo.unix = require('./reform-unix');
reformTo.utc = require('./reform-utc');
reformTo.iso = require('./reform-iso');

/**
 * Take a Gregorian object and output the reformatted string
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */
function to (format) {
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
		'DDD', // full day of the week Sunday-Saturday
		'ddd', // two-digit date of the month 01-31
		'DD', // abbreviated day of the week Sun-Sat
		'dd', // date of the month with no leading zeros 1-31
		'MMM', // full month January-December
		'mmm', // two-digit month 00-12
		'MM', // abbreviated month Jan-Dec
		'mm', // month with no leading zeros 1-12
		'hhh', // two-digit hours 00-12
		'hh', // hour with no leading zeros 1-12
		'HHH', // two-digit 24-hour clock hours 00-24
		'HH', // 24-hour clock hour with no leading zeros 0-24
		'ttt', // two-digit minutes 00-59
		'tt', // minutes with no leading zeros 0-59
		'AP', // AM or PM
		'ap', // am or pm
		'sss', // two-digit seconds 00-59
		'ss', // seconds with no leading zeros 0-59
		'mll', // milliseconds 000-999
		'ml', // milliseconds with no leading zeros 0-999
		'zz' // timezone offset UTC -6:00
	];

	search.some(function(piece) {
		//console.log(converted + ' vs ' + piece);
		//if (converted.indexOf(piece) !== -1) {
		var re = new RegExp('([~!@#$%^&*()_+=`{}\[\]\|\\:;\"\'<>,.\/\? ])*' + piece + '([~!@#$%^&*()_+=`{}\[\]\|\\:;\"\'<>,.\/\? ])*', 'g')
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
					// console.log('Search string is: ' + piece);
					// console.log('Converted string is: ' + to[piece](date));
					var replacer = reformTo[piece](date).toString();
					converted = converted.replace(re, replacer);
					return false;
			}
		}
	});
	// console.log(converted);
	return converted;
}

module.exports = to;
