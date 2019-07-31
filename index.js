let defaultOptions   = { words: 'a-ｚ', numbers: '0-9', lowercase: false, number: false }

exports.match = function(string, options) {
  // Populate options and regex object
  options = {
    ...defaultOptions,
    ...options
  }
  console.log(options)

  // string to lowercase ?
  if (options.lowercase === true) {
    string = string.toLowerCase()
  }
  // Join words and numbers regex ?
  if (options.number === true) {
    regex = '[' + options.words + options.numbers + ']+'
  }
  if (options.number === false) {
    regex = '[' + options.words + ']+'
    console.log(regex)
  }
  // regex constructor
  regex = new RegExp( regex, 'giu' )

  // match words (and numbers)
  let wordsAndNumbers = []  
  wordsAndNumbers = string.match(regex)
  return wordsAndNumbers
}

// Written language specific regex
// PR's are welcome =)
// Object:
// const [language-code] = { words: [regex], numbers: [regex] }
