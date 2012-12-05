global.buster = require "buster"
buster.spec.expose()

describe "bits", ->
  before -> @bits = require "./bits"

  it "sets a bit", ->
    data = 0
    (expect @bits.set data, 2).toEqual 4

  it "tests a bit", ->
    data = 2
    (expect @bits.test data, 0).toBe false
    (expect @bits.test data, 1).toBe true

  it "gets a bit", ->
    data = 2
    (expect @bits.get data, 0).toBe 0
    (expect @bits.get data, 1).toBe 1

  it "clears a bit", ->
    data = 3
    (expect @bits.clear data, 0).toBe 2

  it "toggles a bit", ->
    data = 2
    data = @bits.toggle data, 1
    (expect data).toBe 0
    data = @bits.toggle data, 1
    (expect data).toBe 2

  it "clears multiple bits", ->
    data = 0b1111
    (expect @bits.clear data, 0, 1).toBe 0b1100
    (expect @bits.clear data, [1,4]).toBe 0b01101

  it "sets multiple bits", ->
    data = 0
    (expect @bits.set data, 0, 2).toBe 0b0111
    (expect @bits.set data, [1,3,4]).toBe 0b11010
