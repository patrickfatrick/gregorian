/* global describe it */
import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('get', () => {
  it('returns the year for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('y')
      .should.equal(1988)
    gregorian.reform('2016-01-01T00:00:00.000Z').get('y')
      .should.equal(2015)
  })

  it('returns the month for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('m')
      .should.equal(1)
    gregorian.reform('2016-01-01T00:00:00.000Z').get('m')
      .should.equal(11)
  })

  it('returns the week for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('w')
      .should.equal(8)
    gregorian.reform('2016-01-01T00:00:00.000Z').get('w')
      .should.equal(52)
  })

  it('returns the date for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('d')
      .should.equal(29)
    gregorian.reform('2016-01-01T00:00:00.000Z').get('d')
      .should.equal(31)
  })

  it('returns the day of the week for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('D')
      .should.equal(1)
    gregorian.reform('2016-01-01T00:00:00.000Z').get('D')
      .should.equal(4)
  })

  it('returns the hour for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('h')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:00:00.000Z').get('h')
      .should.equal(17)
  })

  it('returns the minute for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('t')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:00.000Z').get('t')
      .should.equal(23)
  })

  it('returns the second for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('s')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:14.000Z').get('s')
      .should.equal(14)
  })

  it('returns the millisecond for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('l')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:14.184Z').get('l')
      .should.equal(184)
  })

  it('returns the time zone offset for the current locale, in hours', () => {
    gregorian.reform('February 29, 1988 00:00:00').get('z')
      .should.equal(7)
    gregorian.reform('2016-01-01T00:23:14.184Z').get('z')
      .should.equal(7)
  })
})