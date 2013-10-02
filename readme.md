# ipv4-range
ipv4-range takes an IPv4 address and a number, and returns an array of surrounding addresses.

[![Build status](https://travis-ci.org/michaelrhodes/ipv4-range.png?branch=master)](https://travis-ci.org/michaelrhodes/ipv4-range)

## Install
```
npm install ipv4-range
```

## API
``` 
ipv4-range(

  ip (string):
    the starting ip address.

  total (int):
    the number of surrounding addressed
    you're interested in. Odd numbers will
    result in the results being weighted to
    the left, where possible. 
)
```

### Example
``` js
var range = require('ipv4-range')

range('192.168.0.4', 3)
// => ['192.168.0.2', '192.168.0.3', '192.168.0.5'] 
```

### License
[MIT](http://opensource.org/licenses/MIT)
