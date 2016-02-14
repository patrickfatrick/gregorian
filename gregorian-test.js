'use strict'

var gregorian = require('./src/gregorian')

let manipulation = gregorian.reform().add(1, 'y').subtract(5, 'd').restart('m').to('D, M d, yyyy at hh:tt:ss.ll+AP')

console.log(manipulation)