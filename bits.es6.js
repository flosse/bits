/*
Copyright (c) 2012 - 2016 Markus Kohlhase <mail@markus-kohlhase.de>
 */

const setBit    = (val, bitNr)      => val |= bitMask(bitNr);
const clearBit  = (val, bitNr)      => val &= ~bitMask(bitNr);
const bitMask   = (bitNr)           => 1 << bitNr;
const get       = (val, bitNr)      => test(val, bitNr) ? 1 : 0;
const test      = (val, bitNr)      => (val & bitMask(bitNr)) !== 0;
const set       = (val, bitNr, end) => multi(val, bitNr, end, setBit);
const clear     = (val, bitNr, end) => multi(val, bitNr, end, clearBit);
const toggle    = (val, bitNr)      => val ^= bitMask(bitNr);

const multi = (val, start, end, fn) =>
  Array.isArray(start) ?
    start.reduce((v,i) => fn(v,i),val) :
  end ?
    Array(end - start + 1)
      .fill()
      .map((_,i) => i + start)
      .reduce((v,i) => fn(v,i),val) :
  fn(val, start);

module.exports = { get, test, set, clear, toggle };
