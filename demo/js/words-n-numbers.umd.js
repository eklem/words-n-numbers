(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.wnn = {}));
})(this, (function (exports) { 'use strict';

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

  exports["default"] = src;
  exports.email = email_1;
  exports.emojis = emojis_1;
  exports.extract = extract;
  exports.numbers = numbers_1;
  exports.tags = tags_1;
  exports.usernames = usernames_1;
  exports.words = words_1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
