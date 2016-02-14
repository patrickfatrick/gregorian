/* global describe it */
import chai from 'chai'
import {utc} from '../src/modules/reformat'

chai.should()
describe('utc', () => {
  it('converts a date to a UTC string', () => {
    utc(new Date('April 11, 1988 00:00 UTC')).should.equal('Mon, 11 Apr 1988 00:00:00 GMT')
  })

  it('converts a date to a shortened UTC string', () => {
    utc(new Date('April 11, 1988 00:00 UTC'), 'short').should.equal('Mon, 11 Apr 1988')
  })
})
