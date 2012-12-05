###
Copyright (c) Markus Kohlhase <mail@markus-kohlhase.de>
###

set   = (val, bitNr) -> val |=  bitMask bitNr
clear = (val, bitNr) -> val &= ~bitMask bitNr

bitMask   = (bitNr) -> 1 << bitNr
getBit    = (val, bitNr) -> if testBit(val, bitNr) then 1 else 0
testBit   = (val, bitNr) -> (val & bitMask bitNr) isnt 0
setBit    = (val, bitNr, end) -> multi val, bitNr, end, set
clearBit  = (val, bitNr, end) -> multi val, bitNr, end, clear
toggleBit = (val, bitNr) -> val ^=  bitMask bitNr

multi = (val, start, end, fn) ->
  if start instanceof Array
    val = fn val, i for i in start
  else if end
    val = fn val, i for i in [start..end]
  else
    val = fn val, start
  val

bit =
  get           : getBit
  test          : testBit
  set           : setBit
  clear         : clearBit
  toggle        : toggleBit

module.exports = bit if module?.exports?
window.bit     = bit if window?
