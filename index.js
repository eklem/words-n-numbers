const defaultRegex   = { words: 'a-ｚ', numbers: '0-9' }
const defaultOptions = { lowercase: false, alsoNumbers: false }

exports.extract = function(string, regex, options) {
  // Populate regex and options objects
  regex = {
    ...defaultRegex,
    ...regex
  }
  options = {
    ...defaultOptions,
    ...options
  }

  // string to lowercase ?
  if (options.lowercase === true) {
    string = string.toLowerCase()
  }

  // Join words and numbers to a regex ?
  if (options.alsoNumbers === true) {
    regex = '[' + regex.words + regex.numbers + ']+'
  }
  if (options.alsoNumbers === false) {
    regex = '[' + regex.words + ']+'
  }

  // regex constructor
  regex = new RegExp( regex, 'giu' )
  console.log(regex)

  // match words (and numbers)
  let wordsAndNumbers = []  
  wordsAndNumbers = string.match(regex)
  return wordsAndNumbers
}

// Written language specific regex
// PR's are welcome =)
// Form:
// exports.[language-code] = { words: [regex], numbers: [regex] }

// English
exports.en = { words: 'a-zA-Z'}

// Norwegian
exports.no = { words: 'a-zæøåA-ZÆØÅ'}