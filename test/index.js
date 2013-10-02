var run = require('tape').test
var range = require('../')

run('Only positive numbers', function(test) {
  var result = range('192.168.0.5', 9) 
  var expected = [
   '192.168.0.1', '192.168.0.2', '192.168.0.3',
   '192.168.0.4', '192.168.0.6', '192.168.0.7',
   '192.168.0.8', '192.168.0.9', '192.168.0.10'
  ]

  test.deepEqual(result, expected)
  test.end()
})

run('Nothing above 255', function(test) {
  var result = range('192.168.0.253', 9) 
  var expected = [
   '192.168.0.246', '192.168.0.247', '192.168.0.248',
   '192.168.0.249', '192.168.0.250', '192.168.0.251',
   '192.168.0.252', '192.168.0.254', '192.168.0.255'
  ]

  test.deepEqual(result, expected)
  test.end()
})

run('Flexible with addresses', function(test) {
  var result = range('127.0.0.2', 4) 
  var expected = [
    '127.0.0.1', '127.0.0.3', '127.0.0.4',
    '127.0.0.5'
  ]

  test.deepEqual(result, expected)
  test.end()
})

run('README example', function(test) {
  var result = range('192.168.0.4', 3)
  var expected = [
    '192.168.0.2', '192.168.0.3', '192.168.0.5'
  ]

  test.deepEqual(result, expected)
  test.end()
})
