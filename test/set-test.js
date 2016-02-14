/* global describe it */
import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('set', () => {
  it('sets the year to the specified year', () => {
    gregorian.reform('February 29, 1988 00:00:00').set(1989, 'y').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1989-02-28 00:00:00.000')
    gregorian.reform('April 11, 1988 00:00:00').set(1993, 'y').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1993-04-11 00:00:00.000')
  })

  it('sets the month to the specified month', () => {
    gregorian.reform('April 11, 1988 00:00:00').set(3, 'm').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1988-03-11 00:00:00.000')
    gregorian.reform('2015-10-31T04:56:14.877Z').set(3, 'm').d.toISOString()
      .should.equal('2015-03-31T04:56:14.877Z')
  })

  it('sets the week to the specified week', () => {
    gregorian.reform('October 31, 2015 04:56:14').set(15, 'w').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-04-18 04:56:14.000')
    gregorian.reform('October 31, 2015 04:56:14').set(48, 'w').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-12-05 04:56:14.000')
    gregorian.reform('October 31, 2015 04:56:14').set(8, 'w').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-02-28 04:56:14.000')
  })

  it('sets the day to the specified day', () => {
    gregorian.reform('April 11, 1988 00:00:00').set(1, 'd').d.toISOString()
      .should.equal('1988-04-01T07:00:00.000Z')
    gregorian.reform('October 31, 2015 04:56:14').set(8, 'd').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-08 04:56:14.000')
  })

  it('sets the day to the specified day of the week', () => {
    gregorian.reform('April 11, 1988 00:00:00').set(0, 'D').d.toISOString()
      .should.equal('1988-04-10T07:00:00.000Z')
    gregorian.reform('October 31, 2015 04:56:14').set(2, 'D').d.toISOString()
      .should.equal('2015-10-27T11:56:14.000Z')
  })

  it('sets the hour to the specified hour', () => {
    gregorian.reform('April 11, 1988 00:00:00').set(3, 'h').d.toISOString()
      .should.equal('1988-04-11T10:00:00.000Z')
    gregorian.reform('October 31, 2015 04:56:14').set(8, 'h').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-31 08:56:14.000')
  })

  it('sets the minute to the specified minute', () => {
    gregorian.reform('October 31, 2015 04:56:14').set(8, 't').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-31 04:08:14.000')
  })

  it('sets the second to the specified second', () => {
    gregorian.reform('October 31, 2015 04:56:14').set(8, 's').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-31 04:56:08.000')
  })

  it('sets the millisecond to the specified millisecond', () => {
    gregorian.reform('October 31, 2015 04:56:14').set(123, 'l').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-31 04:56:14.123')
  })

  it('is chainable', () => {
    gregorian.reform('April 11, 1988 00:00:00').set(11, 'm').set(5, 'd').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1988-11-05 00:00:00.000')
    gregorian.reform('April 11, 1988 00:00:00').set(3, 'm').set(5, 'd').set(10, 't').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1988-03-05 00:10:00.000')
  })

  it('can handle leap years', () => {
    gregorian.reform('February 27, 1988 00:00:00').set(29, 'd').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1988-02-29 00:00:00.000')
    gregorian.reform('February 29, 1988 00:00:00').set(1989, 'y').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('1989-02-28 00:00:00.000')
  })

  it('can handle months of varying lengths', () => {
    gregorian.reform('October 31, 2015 00:00:00').set(2, 'm').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-02-28 00:00:00.000')
    gregorian.reform('October 31, 2015 00:00:00').set(11, 'm').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-11-30 00:00:00.000')
    gregorian.reform('October 31, 2015 00:00:00').set(15, 'm').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2016-03-31 00:00:00.000')
  })

  it('is is timezone-agnostic', () => {
    gregorian.reform('October 31, 2015 23:42:00').set(3, 'h').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-31 03:42:00.000')
  })
})
