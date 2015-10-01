// test/reform-to-unix-test.js
var should = require('chai').should();
var reformUnix = require('../src/modules/reform-to-unix');

describe('reformUnix', function () {
 it('converts a string to a unix timestamp', function () {
   reformUnix(new Date('April 11, 1988 00:00 UTC')).should.equal(576720000000);
 });
});