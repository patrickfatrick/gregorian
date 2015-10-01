// test/reform-date-test.js
var should = require('chai').should();
var reformDate = require('../src/modules/reform-date');

describe('reformDate', function () {
 it('converts a string to a date object', function() { 
   reformDate('04/11/1988 00:00 UTC').toISOString().should.equal('1988-04-11T00:00:00.000Z');
 });
});