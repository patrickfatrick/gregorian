/* global describe it */
import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('getUTC', () => {
  it('gets the UTC year for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('y')
      .should.equal(1988)
    gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('y')
      .should.equal(2016)
  })

  it('returns the UTC month of the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('m')
      .should.equal(1)
    gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('m')
      .should.equal(0)
  })

  it('returns the UTC week for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('w')
      .should.equal(8)
    gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('w')
      .should.equal(0)
  })

  it('returns the UTC date of the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('d')
      .should.equal(29)
    gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('d')
      .should.equal(1)
  })

  it('returns the UTC day of the week for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('D')
      .should.equal(1)
    gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('D')
      .should.equal(5)
  })

  it('returns the UTC hour for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('h')
      .should.equal(7)
    gregorian.reform('2016-01-01T00:00:00.000Z').getUTC('h')
      .should.equal(0)
  })

  it('returns the UTC minute for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('t')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:00.000Z').getUTC('t')
      .should.equal(23)
  })

  it('returns the UTC second for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('s')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:14.000Z').getUTC('s')
      .should.equal(14)
  })

  it('returns the UTC millisecond for the specified date', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('l')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:14.184Z').getUTC('l')
      .should.equal(184)
  })

  it('returns a timezone offset of 0, always', () => {
    gregorian.reform('February 29, 1988 00:00:00').getUTC('z')
      .should.equal(0)
    gregorian.reform('2016-01-01T00:23:14.184Z').getUTC('z')
      .should.equal(0)
  })
})