'use strict';

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

import to from './reform-to';
import {add, subtract} from './reform-add-subtract';
import restart from './reform-restart';
import reagent from './reagent';
import recite from './recite';
import set from './reform-set';

export class Gregorian {
	constructor () {
		this.d;
		this.input;
		this.to = to,
		this.add = add,
		this.subtract = subtract,
		this.restart = restart,
		this.reagent = reagent,
		this.recite = recite,
		this.set = set;
	}

	/**
	 * Form a date (or other object) into a Gregorian object
	 * @param  {Date}   obj any date
	 * @return {Object}     A Gregorian instance
	 */
	reform (obj = new Date()) {
		const date = new Date(obj);
		this.d = date;
		this.input = obj;
		return this;
	}
}