# Words'n'numbers
Extracting arrays of words and optionally numbers from strings. For Node.js and the browser. When you need more than just [a-z]. The goal is to support all languages supported by [stopword](https://github.com/fergiemcdowall/stopword#language-code). Part of document processing for [search-index](https://github.com/fergiemcdowall/search-index) and [nowsearch.xyz](https://github.com/eklem/nowsearch.xyz).

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

### default regex

### Language specific regex

### Custom regex

## API

### extract

Returns an array of words and optionally numbers.

* extract(string-of-text, \<regex-object\>, \<options-object\>)

### regex
```javascript
{ words: 'a-zA-Z', numbers: '0-9' }
```

### options
```javascript
{ toLowercase: false, numbersAlso: false }
```
* Convert to lowercase: true / false (default)
* Extract numbersAlso: true / false (default)

## PR's welcome
PR's for written language specific regex are more than welcome =)


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/words-n-numbers
[npm-version-image]: http://img.shields.io/npm/v/words-n-numbers.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/words-n-numbers.svg?style=flat
[travis-url]: http://travis-ci.org/eklem/words-n-numbers
[travis-image]: http://img.shields.io/travis/eklem/words-n-numbers.svg?style=flat
