/* global describe it */
import chai from 'chai'
import gregorian from '../src/gregorian'

chai.should()
describe('add', () => {
  it('adds years to the date', () => {
    gregorian.reform('February 29, 1988 00:00 UTC').add(1, 'y').d.toISOString().should.equal('1989-02-28T00:00:00.000Z')
  })

  it('adds months to the date', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').add(1, 'd').add(1, 'm').d.toISOString().should.equal('1988-05-12T00:00:00.000Z')
  })

  it('adds weeks to the date', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').add(2, 'w').d.toISOString().should.equal('2015-11-14T04:56:14.877Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 'w').d.toISOString().should.equal('2015-12-26T04:56:14.877Z')
  })

  it('adds days to the date', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').add(1, 'd').d.toISOString().should.equal('1988-04-12T00:00:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 'd').d.toISOString().should.equal('2015-11-08T04:56:14.877Z')
  })

  it('adds hours to the date', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').add(3, 'h').d.toISOString().should.equal('1988-04-11T03:00:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 'h').d.toISOString().should.equal('2015-10-31T12:56:14.877Z')
  })

  it('adds minutes to the date', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').add(3, 'm').add(5, 'd').add(10, 't').d.toISOString().should.equal('1988-07-16T00:10:00.000Z')
    gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 't').d.toISOString().should.equal('2015-10-31T05:04:14.877Z')
  })

  it('adds seconds to the date', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').add(8, 's').d.toISOString().should.equal('2015-10-31T04:56:22.877Z')
  })

  it('adds milliseconds to the date', () => {
    gregorian.reform('2015-10-31T04:56:14.877Z').add(123, 'l').d.toISOString().should.equal('2015-10-31T04:56:15.000Z')
  })

  it('is chainable', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').add(11, 'm').add(5, 'd').d.toISOString().should.equal('1989-03-16T00:00:00.000Z')
  })

  it('can handle leap years', () => {
    gregorian.reform('April 11, 1988 00:00 UTC').add(5, 'y').d.toISOString().should.equal('1993-04-11T00:00:00.000Z')
    gregorian.reform('February 27, 1988 00:00 UTC').add(3, 'd').d.toISOString().should.equal('1988-03-01T00:00:00.000Z')
  })

  it('can handle months of varying lengths', () => {
    gregorian.reform('October 31, 2015 00:00 UTC').add(1, 'm').d.toISOString().should.equal('2015-11-30T00:00:00.000Z')
    gregorian.reform('October 31, 2015 00:00 UTC').add(15, 'm').d.toISOString().should.equal('2017-01-31T00:00:00.000Z')
  })

  it('is timezone-agnostic', () => {
    gregorian.reform('October 30, 2015 23:42:00').add(3, 'h').to('yyyy-mm-dd HH:tt:ss.ll')
      .should.equal('2015-10-31 02:42:00.000')
  })
})
