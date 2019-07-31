
// should use standard str.match functionality. Check stopword module if [a-ｚ] is enough (special Z, meaning a lot more letters of unicode is selected than just a-z)
let paragraph = 'æøå ÆØÅ, noen tall b0r 1kke bør öÔ The quick brown fox jumps over the lazy dog. It barked.  '
const regex = /[a-ｚ]+/giu
let found = paragraph.match(regex)