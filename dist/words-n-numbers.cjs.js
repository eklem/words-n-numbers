'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var src = {};

// Default. Only words. All languages
const words = '\\p{Alpha}+';

// Only numbers, needs some work for real life numbers
const numbers = '\\p{Number}+';

// Only emojis
const emojis = '\\p{Emoji_Presentation}+';

// Words and numbers, Words and Emojis, Numbers and Emojis. Words and Numbers and Emojis. All lanugages.
const wordsNumbers = '\\p{Alpha}+|\\p{Number}+';
const wordsEmojis = '\\p{Alpha}+|\\p{Emoji_Presentation}+';
const numbersEmojis = '\\p{Number}+|\\p{Emoji_Presentation}+';
const wordsNumbersEmojis = '\\p{Alpha}+|\\p{Number}+|\\p{Emoji_Presentation}+';

// #tags, @usernames or email.addresses@example.com
const tags = '\\B[#][\\p{Alpha}|\\p{Number}]+';
const usernames = '\\B[@][\\p{Alpha}|\\p{Number}]+';
const email = '[0-9a-zA-Z!#$%&\'*+-/=?^_`{|}~.]+@[0-9a-zA-Z-.]+[a-zA-Z0-9]';

// Default options object
const defaultOptions = {
  regex: words,
  toLowercase: false
};

var extract = src.extract = function (string, options) {
  // Populate regex and options objects
  options = {
    ...defaultOptions,
    ...options
  };

  // string to lowercase ?
  if (options.toLowercase === true) {
    string = string.toLowerCase();
  }

  // regex constructor
  const regex = new RegExp(options.regex, 'giu');

  // match words (and numbers and emojis)
  let wordsNumbersEmojis = [];
  wordsNumbersEmojis = string.match(regex);
  return wordsNumbersEmojis
};

var words_1 = src.words = words;
var numbers_1 = src.numbers = numbers;
var emojis_1 = src.emojis = emojis;
var wordsNumbers_1 = src.wordsNumbers = wordsNumbers;
var wordsEmojis_1 = src.wordsEmojis = wordsEmojis;
var numbersEmojis_1 = src.numbersEmojis = numbersEmojis;
var wordsNumbersEmojis_1 = src.wordsNumbersEmojis = wordsNumbersEmojis;
var tags_1 = src.tags = tags;
var usernames_1 = src.usernames = usernames;
var email_1 = src.email = email;

exports["default"] = src;
exports.email = email_1;
exports.emojis = emojis_1;
exports.extract = extract;
exports.numbers = numbers_1;
exports.numbersEmojis = numbersEmojis_1;
exports.tags = tags_1;
exports.usernames = usernames_1;
exports.words = words_1;
exports.wordsEmojis = wordsEmojis_1;
exports.wordsNumbers = wordsNumbers_1;
exports.wordsNumbersEmojis = wordsNumbersEmojis_1;
