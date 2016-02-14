/* global describe it */
import chai from 'chai'
import {unix} from '../src/modules/reformat'

chai.should()
describe('unix', () => {
  it('converts a date to a unix timestamp', () => {
    unix(new Date('April 11, 1988 00:00 UTC')).should.equal(576720000000)
  })
})
