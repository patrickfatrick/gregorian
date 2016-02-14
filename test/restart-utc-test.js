/* global describe it */
import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('restartUTC', () => {
  it('sets the date/time to the start of the year', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('y').d.toISOString()
      .should.equal('1988-01-01T00:00:00.000Z')
  })

  it('sets the date/time to the start of the month', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('m').d.toISOString()
      .should.equal('1988-04-01T00:00:00.000Z')
  })

  it('sets the date/time to the start of the week', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('w').d.toISOString()
      .should.equal('1988-04-10T00:00:00.000Z')
  })

  it('sets the date/time to the start of the day', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('d').d.toISOString()
      .should.equal('1988-04-11T00:00:00.000Z')
  })

  it('sets the date/time to the start of the hour', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('h').d.toISOString()
      .should.equal('1988-04-11T08:00:00.000Z')
  })

  it('sets the date/time to the start of the minute', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('t').d.toISOString()
      .should.equal('1988-04-11T08:23:00.000Z')
  })

  it('sets the date/time to the start of the second', () => {
    gregorian.reform('April 11, 1988 8:23:15 UTC').restartUTC('s').d.toISOString()
      .should.equal('1988-04-11T08:23:15.000Z')
  })
})
