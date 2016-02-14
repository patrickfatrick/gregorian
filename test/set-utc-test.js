/* global describe it */
import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('setUTC', () => {
  it('sets the year to the specified year', () => {
    gregorian.reform('February 29, 1988 00:00 UTC').setUTC(1989, 'y').d.toISOString()
      .should.equal('1989-02-28T00:00:00.000Z')
    gregorian.reform('April 11, 1988 00:00 UTC').setUTC(1993, 'y').d.toISOString()
      .should.equal('1993-04-11T00:00:00.000Z')
  })

  it('sets the month to the specified month', () => {
    gregorian.reform('April 11, 1988 00:00').setUTC(3, 'm').d.toISOString()
      .should.equal('1988-03-11T07:00:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(3, 'm').d.toISOString()
      .should.equal('2015-03-31T04:56:14.877Z')
  })

  it('sets the week to the specified week', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(15, 'w').d.toISOString()
      .should.equal('2015-04-18T04:56:14.877Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(48, 'w').d.toISOString()
      .should.equal('2015-12-05T04:56:14.877Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 'w').d.toISOString()
      .should.equal('2015-02-28T04:56:14.877Z')
  })

  it('sets the day to the specified day', () => {
    gregorian.reform('April 11, 1988 00:00').setUTC(1, 'd').d.toISOString()
      .should.equal('1988-04-01T07:00:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 'd').d.toISOString()
      .should.equal('2015-10-08T04:56:14.877Z')
  })

  it('sets the day to the specified UTC day of the week', () => {
    gregorian.reform('April 11, 1988 00:00:00').setUTC(0, 'D').d.toISOString()
      .should.equal('1988-04-10T07:00:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(2, 'D').d.toISOString()
      .should.equal('2015-10-27T04:56:14.877Z')
  })

  it('sets the hour to the specified hour', () => {
    gregorian.reform('April 11, 1988 00:00').setUTC(3, 'h').d.toISOString()
      .should.equal('1988-04-11T03:00:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 'h').d.toISOString()
      .should.equal('2015-10-31T08:56:14.877Z')
  })

  it('sets the minute to the specified minute', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 't').d.toISOString()
      .should.equal('2015-10-31T04:08:14.877Z')
  })

  it('sets the second to the specified second', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(8, 's').d.toISOString()
      .should.equal('2015-10-31T04:56:08.877Z')
  })

  it('sets the millisecond to the specified millisecond', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').setUTC(123, 'l').d.toISOString()
      .should.equal('2015-10-31T04:56:14.123Z')
  })

  it('is chainable', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').setUTC(11, 'm').setUTC(5, 'd').d.toISOString()
      .should.equal('1988-11-05T00:00:00.000Z')
    gregorian.reform('April 11, 1988 00:00 UTC').setUTC(3, 'm').setUTC(5, 'd').setUTC(10, 't').d.toISOString()
      .should.equal('1988-03-05T00:10:00.000Z')
  })

  it('can handle leap years', () => {
    gregorian.reform('February 27, 1988 00:00 UTC').setUTC(29, 'd').d.toISOString()
      .should.equal('1988-02-29T00:00:00.000Z')
    gregorian.reform('February 29, 1988 00:00 UTC').setUTC(1989, 'y').d.toISOString()
      .should.equal('1989-02-28T00:00:00.000Z')
  })

  it('can handle months of varying lengths', () => {
    gregorian.reform('October 31, 2015 00:00 UTC').setUTC(2, 'm').d.toISOString()
      .should.equal('2015-02-28T00:00:00.000Z')
    gregorian.reform('October 31, 2015 00:00 UTC').setUTC(11, 'm').d.toISOString()
      .should.equal('2015-11-30T00:00:00.000Z')
    gregorian.reform('October 31, 2015 00:00 UTC').setUTC(15, 'm').d.toISOString()
      .should.equal('2016-03-31T00:00:00.000Z')
  })

  it('is is UTC specific', () => {
    gregorian.reform('October 31, 2015 23:42 EST').setUTC(3, 'h').d.toISOString()
      .should.equal('2015-11-01T03:42:00.000Z')
  })
})
