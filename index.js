// Default. Only words. All languages
const words = '\\p{Alpha}+'

// Only numbers, needs some work for real life numbers
const numbers = '\\p{Number}+'

// Only emojis
const emojis = '\\p{Emoji_Presentation}+'

// Words and numbers, Words and Emojis, Numbers and Emojis. Words and Numbers and Emojis. All lanugages.
const wordsNumbers = '\\p{Alpha}+|\\p{Number}+'
const wordsEmojis = '\\p{Alpha}+|\\p{Emoji_Presentation}+'
const numbersEmojis = '\\p{Number}+|\\p{Emoji_Presentation}+'
const wordsNumbersEmojis = '\\p{Alpha}+|\\p{Number}+|\\p{Emoji_Presentation}+'

// #tags, @usernames or email.addresses@example.com
const tags = '\\B[#][\\p{Alpha}|\\p{Number}]+'
const usernames = '\\B[@][\\p{Alpha}|\\p{Number}]+'
const email = '[0-9a-zA-Z!#$%&\'*+-/=?^_`{|}~.]+@[0-9a-zA-Z-.]+[a-zA-Z0-9]'

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

  // match words (and numbers and emojis)
  let wordsNumbersEmojis = []
  wordsNumbersEmojis = string.match(regex)
  return wordsNumbersEmojis
}

exports.words = words
exports.numbers = numbers
exports.emojis = emojis
exports.wordsNumbers = wordsNumbers
exports.wordsEmojis = wordsEmojis
exports.numbersEmojis = numbersEmojis
exports.wordsNumbersEmojis = wordsNumbersEmojis
exports.tags = tags
exports.usernames = usernames
exports.email = email
