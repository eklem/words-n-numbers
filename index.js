// Default. Only words. All languages
const words = '\\p{Alpha}+'

// Only numbers, needs some work for real life numbers
const numbers = '\\p{Number}+'

// Words and numbers. All lanugages. Numbers needs some work for real life numbers
const wordsAndNumbers = '\\p{Alpha}+|\\p{Number}+'

// Default options object
const defaultOptions = {
  regex: words,
  toLowercase: false
}

exports.extract = function (string, options) {
  // Populate regex and options objects
  options = {
    ...defaultOptions,
    ...options
  }

  // string to lowercase ?
  if (options.toLowercase === true) {
    string = string.toLowerCase()
  }

  // regex constructor
  const regex = new RegExp(options.regex, 'giu')

  // match words (and numbers)
  let wordsAndNumbers = []
  wordsAndNumbers = string.match(regex)
  return wordsAndNumbers
}

exports.words = words
exports.numbers = numbers
exports.wordsAndNumbers = wordsAndNumbers
