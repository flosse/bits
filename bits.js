"use strict";

/*
Copyright (c) 2012 - 2016 Markus Kohlhase <mail@markus-kohlhase.de>
 */

var setBit = function setBit(val, bitNr) {
  return val |= bitMask(bitNr);
};
var clearBit = function clearBit(val, bitNr) {
  return val &= ~bitMask(bitNr);
};
var bitMask = function bitMask(bitNr) {
  return 1 << bitNr;
};
var get = function get(val, bitNr) {
  return test(val, bitNr) ? 1 : 0;
};
var test = function test(val, bitNr) {
  return (val & bitMask(bitNr)) !== 0;
};
var set = function set(val, bitNr, end) {
  return multi(val, bitNr, end, setBit);
};
var clear = function clear(val, bitNr, end) {
  return multi(val, bitNr, end, clearBit);
};
var toggle = function toggle(val, bitNr) {
  return val ^= bitMask(bitNr);
};

var multi = function multi(val, start, end, fn) {
  return Array.isArray(start) ? start.reduce(function (v, i) {
    return fn(v, i);
  }, val) : end ? Array(end - start + 1).fill().map(function (_, i) {
    return i + start;
  }).reduce(function (v, i) {
    return fn(v, i);
  }, val) : fn(val, start);
};

module.exports = { get: get, test: test, set: set, clear: clear, toggle: toggle };
