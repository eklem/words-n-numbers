'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const words = '\\p{Alpha}+[\'’?]\\p{Alpha}+[\'’?]\\p{Alpha}+|\\p{Alpha}+[\'’?]\\p{Alpha}+|\\p{Alpha}+';
const numbers = '\\p{Number}+';
const emojis = '\\p{Emoji_Presentation}';
const tags = '\\B[#][\\p{Alpha}|\\p{Number}]+';
const usernames = '\\B[@][\\p{Alpha}|\\p{Number}]+';
const email = '[0-9a-zA-Z!#$%&\'*+-/=?^_`{|}~.]+@[0-9a-zA-Z-.]+[a-zA-Z0-9]';

const extract = function (string, options) {
  // Default options object
  const defaultOptions = {
    regex: words,
    toLowercase: false,
    flags: 'gui'
  };

  // Populate regex and options objects
  options = {
    ...defaultOptions,
    ...options
  };

  // Check that input is a string
  if (typeof string !== 'string') {
    throw new Error('Error: Input is not a string')
  }

  // Join regexes with or between them -> '|'
  if (options.regex.constructor === Array) {
    options.regex = options.regex.join('|');
  }

  // string to lowercase ?
  if (options.toLowercase === true) {
    string = string.toLowerCase();
  }

  // regex constructor
  const regex = new RegExp(options.regex, options.flags);

  // match words (and numbers and emojis)
  let extracted = [];
  extracted = string.match(regex);
  return extracted
};

exports.email = email;
exports.emojis = emojis;
exports.extract = extract;
exports.numbers = numbers;
exports.tags = tags;
exports.usernames = usernames;
exports.words = words;
