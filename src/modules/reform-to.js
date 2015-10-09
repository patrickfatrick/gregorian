'use strict';

import * as to from './reform-to-functions';

/**
 * Take a Gregorian object and output the reformatted string
 * See https://github.com/patrickfatrick/gregorian#accepted-formats for details
 * @param {String} 	format a string or date object (something that can be converted to a valid date)
 * @returns {String}	the date reformatted into the specified format
 */
export default function (format, delimiter) {
	delimiter = delimiter || '+';
	const date = this.d;
	const search = [
		'unix', 'utc-short', 'utc', 'iso-short', 'iso', 'yyyy','yy', 'DD', 'dd', 'dt', 'D', 'd', 'MM', 'mm','M', 'm', 'hh', 'h', 'HH', 'H', 'tt', 't', 'AP', 'ap', 'ss', 's', 'll', 'l', 'zz'
	];
	let converted = format;

	for (let piece of search) {
		const re = new RegExp('\\b' + piece + '\\b', 'g');
		if (re.test(converted)) {
			switch (piece) {
				case 'unix':
					converted = to.unix(date);
					break;
				case 'utc-short':
					converted = to.utc(date, 'short');
					break;
				case 'utc':
					converted = to.utc(date);
					break;
				case 'iso-short':
					converted = to.iso(date, 'short');
					break;
				case 'iso':
					converted = to.iso(date);
					break;
				default:
					let replacer = to[piece](date).toString();
					converted = converted.replace(re, replacer);
			}
		}
	}
	if (typeof converted === 'string') {
		converted = converted.replace(new RegExp('\\' + delimiter, 'g'), '');
	}
	return converted;
}
