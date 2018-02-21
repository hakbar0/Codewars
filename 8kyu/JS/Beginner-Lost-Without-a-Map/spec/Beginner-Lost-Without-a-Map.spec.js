const { expect } = require('chai');
const { maps } = require('../Beginner-Lost-Without-a-Map');

describe('Map', () => {
  it('expect input to be an array and output to be an array.', () => {
    expect(Array.isArray(maps([1, 2]))).to.equal(true)
  })
  it('Test to see if numbers do get doubled.', () => {
    expect(maps([1, 2])).to.eql([2, 4]);
    expect(maps([1, 2, 3])).to.eql([2, 4, 6]);
    expect(maps([4, 1, 1, 1, 1, 4])).to.eql([8, 2, 2, 2, 2, 8]);
    expect(maps([2, 2, 2, 2, 2, 2, 2])).to.eql([4, 4, 4, 4, 4, 4, 4]);
  })
})