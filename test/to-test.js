/* global describe it sinon */

import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('reformTo', () => {
  it('converts a date to a string with a specified format', () => {
    gregorian.reform('09/25/2015 00:00').to('DD, yyyy-m-d hh:tt.ll|ap')
      .should.equal('Friday, 2015-9-25 12:00.000am')
    gregorian.reform('09/25/2015 01:00').to('DD, MM yyyy-m-d hh:tt.ll|ap')
      .should.equal('Friday, September 2015-9-25 01:00.000am')
    gregorian.reform('09/25/2015 23:59').to('DD, M yyyy-m-d H:tt:s.ll')
      .should.equal('Friday, Sept 2015-9-25 23:59:0.000')
    gregorian.reform('09/25/2015 23:59:00').to('DD, M yyyy-m-d h:tt:s.l|AP')
      .should.equal('Friday, Sept 2015-9-25 11:59:0.0PM')
    gregorian.reform('09/25/2015 23:59:00').to('DD, M yyyy-m-d hh:tt:s.ll|ap')
      .should.equal('Friday, Sept 2015-9-25 11:59:0.000pm')
    gregorian.reform('09/25/2015 01:00').to('DD, M yyyy-m-d H:tt:ss.ll')
      .should.equal('Friday, Sept 2015-9-25 1:00:00.000')
    gregorian.reform('10/25/2015 01:00').to('DD, MM yyyy-mm-d H:tt:ss.ll zz')
      .should.equal('Sunday, October 2015-10-25 1:00:00.000 UTC-07:00')
  })

  it('handles positive two-digit timezone offsets', () => {
    sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-840)

    gregorian.reform().to('zz')
      .should.equal('UTC+14:00')

    Date.prototype.getTimezoneOffset.restore()
  })

  it('handles positive single-digit timezone offsets', () => {
    sinon.stub(Date.prototype, 'getTimezoneOffset').returns(-420)

    gregorian.reform().to('zz')
      .should.equal('UTC+07:00')

    Date.prototype.getTimezoneOffset.restore()
  })

  it('handles negative two-digit timezone offsets', () => {
    sinon.stub(Date.prototype, 'getTimezoneOffset').returns(720)

    gregorian.reform().to('zz')
      .should.equal('UTC-12:00')

    Date.prototype.getTimezoneOffset.restore()
  })

  it('handles negative single-digit timezone offsets', () => {
    sinon.stub(Date.prototype, 'getTimezoneOffset').returns(420)

    gregorian.reform().to('zz')
      .should.equal('UTC-07:00')

    Date.prototype.getTimezoneOffset.restore()
  })

  it('handles being mixed in with regular words', () => {
    gregorian.reform('04/01/1988').to('D, the dt of MM, yyyy')
      .should.equal('Fri, the 1st of April, 1988')
    gregorian.reform('04/22/1988').to('DD, the dt of M, yyyy')
      .should.equal('Friday, the 22nd of Apr, 1988')
    gregorian.reform('10/23/2015').to('DD, the dt of MM, yyyy')
      .should.equal('Friday, the 23rd of October, 2015')
    gregorian.reform('10/25/2015').to('DD, the dt of MM, yyyy')
      .should.equal('Sunday, the 25th of October, 2015')
  })

  it('allows for the customization of the delimiter used', () => {
    gregorian.reform('09/25/2015').to('D, yy-mm#dd h:t.l#AP', '#')
      .should.equal('Fri, 15-0925 12:0.0AM')
    gregorian.reform('09/25/2015').to('D#_#yy#_#mm#_#dd#_#h:t.l#AP#', '#')
      .should.equal('Fri_15_09_25_12:0.0AM')
    gregorian.reform('09/25/2015').to('DD, M yyyy-m-d HH:tt.ll?ap', '?')
      .should.equal('Friday, Sept 2015-9-25 00:00.000am')
  })

  it('converts a date to a unix timestamp', () => {
    gregorian.reform('April 11, 1988 07:45 UTC').to('unix')
      .should.equal(576747900000)
  })

  it('converts a date to an ISO string', () => {
    gregorian.reform('April 11, 1988 07:45 UTC').to('iso')
      .should.equal('1988-04-11T07:45:00.000Z')
    gregorian.reform('April 11, 1988 00:00 UTC').to('iso-short')
      .should.equal('1988-04-11')
  })

  it('ignores everything after the first plug-n-play format', () => {
    gregorian.reform('April 11, 1988 07:45 UTC').to('utc iso')
      .should.equal('Mon, 11 Apr 1988 07:45:00 GMT')
  })
})