const defaultRegex   = { words: 'a-ｚ', numbers: '0-9' }
const defaultOptions = { toLowercase: false, numbersAlso: false }

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
  if (options.toLowercase === true) {
    string = string.toLowerCase()
  }

  // Join words and numbers to a regex ?
  if (options.numbersAlso === true) {
    regex = '[' + regex.words + regex.numbers + ']+'
  }
  if (options.numbersAlso === false) {
    regex = '[' + regex.words + ']+'
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
// Form:
// exports.[language-code] = { words: [regex], numbers: [regex] }

// English
exports.en = { words: 'a-zA-Z'}

// Norwegian
exports.no = { words: 'a-zæøåA-ZÆØÅ'}