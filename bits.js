// Generated by CoffeeScript 1.6.3
/*
Copyright (c) 2012 - 2013 Markus Kohlhase <mail@markus-kohlhase.de>
*/


(function() {
  var bit, bitMask, clear, clearBit, getBit, multi, set, setBit, testBit, toggleBit;

  set = function(val, bitNr) {
    return val |= bitMask(bitNr);
  };

  clear = function(val, bitNr) {
    return val &= ~bitMask(bitNr);
  };

  bitMask = function(bitNr) {
    return 1 << bitNr;
  };

  getBit = function(val, bitNr) {
    if (testBit(val, bitNr)) {
      return 1;
    } else {
      return 0;
    }
  };

  testBit = function(val, bitNr) {
    return (val & bitMask(bitNr)) !== 0;
  };

  setBit = function(val, bitNr, end) {
    return multi(val, bitNr, end, set);
  };

  clearBit = function(val, bitNr, end) {
    return multi(val, bitNr, end, clear);
  };

  toggleBit = function(val, bitNr) {
    return val ^= bitMask(bitNr);
  };

  multi = function(val, start, end, fn) {
    var i, _i, _j, _len;
    if (start instanceof Array) {
      for (_i = 0, _len = start.length; _i < _len; _i++) {
        i = start[_i];
        val = fn(val, i);
      }
    } else if (end) {
      for (i = _j = start; start <= end ? _j <= end : _j >= end; i = start <= end ? ++_j : --_j) {
        val = fn(val, i);
      }
    } else {
      val = fn(val, start);
    }
    return val;
  };

  bit = {
    get: getBit,
    test: testBit,
    set: setBit,
    clear: clearBit,
    toggle: toggleBit
  };

  if ((typeof define !== "undefined" && define !== null ? define.amd : void 0) != null) {
    define(function() {
      return bit;
    });
  } else if (typeof window !== "undefined" && window !== null) {
    window.bit = bit;
  } else if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = bit;
  }

}).call(this);
