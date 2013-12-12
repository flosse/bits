should = require("chai").should()
bits   = require "./bits"

describe "bits", ->

  it "sets a bit", ->
    bits.set(0, 2).should.equal 4

  it "tests a bit", ->
    data = 2
    bits.test(data, 0).should.be.false
    bits.test(data, 1).should.be.true

  it "gets a bit", ->
    data = 2
    bits.get(data, 0).should.equal 0
    bits.get(data, 1).should.equal 1

  it "clears a bit", ->
    bits.clear(3, 0).should.equal 2

  it "toggles a bit", ->
    data = 2
    data = bits.toggle data, 1
    data.should.equal 0
    data = bits.toggle data, 1
    data.should.equal 2

  it "clears multiple bits", ->
    data = 0b1111
    bits.clear(data, 0, 1).should.equal 0b1100
    bits.clear(data, [1,4]).should.equal 0b01101

  it "sets multiple bits", ->
    data = 0
    bits.set(data, 0, 2).should.equal 0b0111
    bits.set(data, [1,3,4]).should.equal 0b11010
