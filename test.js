const wan = require('./index.js')

ord = wan.match('Her kommer noe test med noen tall 12o2323 og æøå ßöÔ', { number: false })

console.log(ord)