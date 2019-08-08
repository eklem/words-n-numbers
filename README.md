# Words'n'numbers
Extracting arrays of words and optionally numbers from strings. For Node.js and the browser. When you need more than just [a-z]. Part of document processing for [search-index](https://github.com/fergiemcdowall/search-index) and [nowsearch.xyz](https://github.com/eklem/nowsearch.xyz).

Inspired by [extractwords](https://github.com/f-a-r-a-z/extractwords)

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

## Initiating

### Node.js

```javascript
const wnn = require('words-n-numbers')
// wnn available
```

### Browser

```html
<script src="wnn.js"></script>

<script>
  //wnn available
</script>

```

## Use

The default regex should catch every unicode character from for every language. 

### Only words
```javascript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords)
// returns ['A', 'dollars', 'baby']
```

### Only words, converted to lowercase
```javascript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords, { toLowercase: true })
// returns ['a', 'dollars', 'baby']
```

### Predefined regex for words and numbers, converted to lowercase
```javascript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords, { regex: wnn.wordsAndNumbers, toLowercase: true })
// returns ['a', '1000000', 'dollars', 'baby']
```

### Custom regex
```javascript
let stringOfWords = 'This happens at 5 o\'clock !!!'
wnn.extract(stringOfWords, { regex: '[a-z\'0-9]+' })
// returns ['This', 'happens', 'at', '5', 'o\'clock']
```

## API

### Extract function

Returns an array of words and optionally numbers.
```javascript
wnn.extract(stringOfText, \<options-object\>)
```

### Options object
```javascript
{
  regex: '[custom or predefined regex]',  // defaults to wnn.words
  toLowercase: [true / false]             // defaults to false
}
```

### Predefined regex'es
```javascript
wnn.words            // only words, any language <-- default
wnn.numbers          // only numbers, any language
wnn.wordsAndNumbers  // words and numbers, any language
```

### Languages supported
Supports all languages supported by [stopword](https://github.com/fergiemcdowall/stopword#language-code), and more. Some languages like Japanese and Chinese simplified needs to be tokenized. May add tokenizers at a later stage.

#### PR's welcome
PR's and issues are more than welcome =)

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/words-n-numbers
[npm-version-image]: http://img.shields.io/npm/v/words-n-numbers.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/words-n-numbers.svg?style=flat
[travis-url]: http://travis-ci.org/eklem/words-n-numbers
[travis-image]: http://img.shields.io/travis/eklem/words-n-numbers.svg?style=flat
