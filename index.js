var surrange = require('surrange')

module.exports = function(ip, total) {

  var pattern = /([0-9]+)$/
  var base = ip.replace(pattern, '')
  var local = Number(ip.match(pattern)[0])

  return surrange(local, total, {
    minimum: 1,
    maximum: 255,
    weight: -1
  })

  // Remove the local IP segment
  .filter(function(number) {
    return number !== local
  })

  // Generate complete IP address
  .map(function(number) {
    return base + number
  })

}
