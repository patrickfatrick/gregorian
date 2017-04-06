'use strict'

/**
 * Gregorian
 * Author: Patrick Fricano
 * https://www.github.com/patrickfatrick/gregorian
 */

var to = require('./to')
var add = require('./add-subtract').add
var subtract = require('./add-subtract').subtract
var restart = require('./restart')
var restartUTC = require('./restart-utc')
var reagent = require('./reagent')
var recite = require('./recite')
var setUTC = require('./set-utc')
var set = require('./set')
var getUTC = require('./get-utc')
var get = require('./get')

var Gregorian = {
  init () {
    this.d = null
    this.input = null
    this.to = to
    this.add = add
    this.subtract = subtract
    this.restart = restart
    this.restartUTC = restartUTC
    this.reagent = reagent
    this.recite = recite
    this.setUTC = setUTC
    this.set = set
    this.getUTC = getUTC
    this.get = get
  },

  /**
   * Form a date (or other object) into a Gregorian object
   * @param  {Date}   obj any date
   * @return {Object}     A Gregorian instance
   */
  reform (obj) {
    obj = obj || new Date()
    const date = new Date(obj)
    this.d = date
    this.input = obj
    return this
  }
}

module.exports = Gregorian
