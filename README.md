# bits

[![Build Status](https://secure.travis-ci.org/flosse/bits.png)](http://travis-ci.org/flosse/bits)
[![Dependency Status](https://gemnasium.com/flosse/bits.png)](https://gemnasium.com/flosse/bits.png)
[![NPM version](https://badge.fury.io/js/bits.png)](http://badge.fury.io/js/bits)

## Usage

```shell
npm install bits
```

```javascript
var bits = require("bits");
var data = 0;
data = bits.set(data, 2);
data = bits.set(data, [0,3,7]); // set bit 0, 3 and 7
data = bits.clear(data, 1);
data = bits.clear(data, 1, 5);  // clear bit 1,3,4,5
data = bits.toggle(data, 5);
data = bits.test(data, 6);      // returns true or false
data = bits.get(data, 6);       // returns 0 or 1
```

## License

MIT license
