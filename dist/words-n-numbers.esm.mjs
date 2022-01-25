var src = {};

const words = '\\p{Alpha}+[\'’?]\\p{Alpha}+[\'’?]\\p{Alpha}+|\\p{Alpha}+[\'’?]\\p{Alpha}+|\\p{Alpha}+';
const numbers = '\\p{Number}+';
const emojis = '\\p{Emoji_Presentation}+';
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

  // Join regexes with or between them -> '|'
  if (options.regex.constructor === Array) {
    options.regex = options.regex.join('|');
  }

  // string to lowercase ?
  if (options.toLowercase === true) {
    string = string.toLowerCase();
  }

  // regex constructor
  const regex = new RegExp(options.regex, 'giu');

  // match words (and numbers and emojis)
  let extracted = [];
  extracted = string.match(regex);
  return extracted
};

var words_1 = src.words = words;
var numbers_1 = src.numbers = numbers;
var emojis_1 = src.emojis = emojis;
var tags_1 = src.tags = tags;
var usernames_1 = src.usernames = usernames;
var email_1 = src.email = email;

export { src as default, email_1 as email, emojis_1 as emojis, extract, numbers_1 as numbers, tags_1 as tags, usernames_1 as usernames, words_1 as words };
