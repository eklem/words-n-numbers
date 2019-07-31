const wan = require('./index.js')
let words = wan.extract ('Her kommer noe test med noen tall 12o2323 og æøå ßöÔ', undefined,  { lowercase: true})
console.log(words)

let ord = wan.extract('Her kommer noe test med noen tall 12o2323 og æøå ßöÔ', wan.no,  { lowercase: true, number: true })
console.log(ord)