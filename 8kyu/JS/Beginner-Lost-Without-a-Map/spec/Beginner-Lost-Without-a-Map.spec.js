const {expect} = require('chai');
const {maps} = require('../Beginner-Lost-Without-a-Map');

describe('Map', () => {
  it('expect input to be an array and output to be an array.', () => {
    expect(Array.isArray(maps([1,2]))).to.equal(true)
  })
})