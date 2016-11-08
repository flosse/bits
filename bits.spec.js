var should  = require("chai").should();
var bits    = require("./bits");

describe("bits", function() {
  it("sets a bit", function() {
    return bits.set(0, 2).should.equal(4);
  });
  it("tests a bit", function() {
    var data;
    data = 2;
    bits.test(data, 0).should.be["false"];
    return bits.test(data, 1).should.be["true"];
  });
  it("gets a bit", function() {
    var data;
    data = 2;
    bits.get(data, 0).should.equal(0);
    return bits.get(data, 1).should.equal(1);
  });
  it("clears a bit", function() {
    return bits.clear(3, 0).should.equal(2);
  });
  it("toggles a bit", function() {
    var data;
    data = 2;
    data = bits.toggle(data, 1);
    data.should.equal(0);
    data = bits.toggle(data, 1);
    return data.should.equal(2);
  });
  it("clears multiple bits", function() {
    var data;
    data = 0xf;
    bits.clear(data, 0, 1).should.equal(0xc);
    return bits.clear(data, [1, 4]).should.equal(0xd);
  });
  return it("sets multiple bits", function() {
    var data;
    data = 0;
    bits.set(data, 0, 2).should.equal(0x7);
    return bits.set(data, [1, 3, 4]).should.equal(0x1a);
  });
});
