'use strict';

import reformDate from './reform-date';
import to from './reform-to';
import {add, subtract} from './reform-add-subtract';
import restart from './reform-restart';
import reagent from './reagent';
import recite from './recite';

/**
 * Take a string or date object and convert it into a gregorian object
 * @param   {Object} obj A string or date object that can be parsed into a date
 * @returns {Object} Gregorian object
 */
export default function (obj) {
	const date = reformDate(obj);
	return {
		d: date,
		input: obj,
		to: to,
		add: add,
		subtract: subtract,
		restart: restart,
		reagent: reagent,
		recite: recite
	};
}