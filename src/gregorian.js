'use strict'

var Gregorian = require('./modules/Gregorian')

let gregorian = Object.create(Gregorian)
gregorian.init()

module.exports = gregorian
