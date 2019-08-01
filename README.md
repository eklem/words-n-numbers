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

The default regex catches every unicode character from `a` to `ｚ`, which is different than the regular unicode `z`. By this you get every [Latin unicode character](https://en.wikipedia.org/wiki/Latin_script_in_Unicode) in this table.

### default regex

#### Only words
```javascript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords)
// returns ['A', 'dollars', 'baby']
```

#### Only words, converted to lowercase
```javascript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords, notdefined, { toLowercase: true })
// returns ['a', 'dollars', 'baby']
```

#### Words and numbers
```javascript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords, notdefined, { numbersAlso: true })
// returns ['a', '1000000', 'dollars', 'baby']
```

### Language specific regex

#### English regex (skipping the Norwegian characters)
```javascript
let stringOfWords = 'Vær, vår og ødeleggelse!'
wnn.extract(stringOfWords, wnn.en)
// returns ['V', 'r', 'v', 'r', 'og', 'deleggelse']
```

#### Norwegian regex
```javascript
let stringOfWords = 'Vær, vår og ødeleggelse!'
wnn.extract(stringOfWords, wnn.en)
// returns ['Vær', 'vår', 'og', 'ødeleggelse']
```

### Custom regex

```javascript
let stringOfWords = 'This happens at 5 o\'clock !!!'
wnn.extract(stringOfWords, { words: 'a-z\'' }, { numbersAlso: true })
// returns ['This', 'happens', 'at', '5', 'o\'clock']
```

## API

### extract

Returns an array of words and optionally numbers.

* extract(string-of-text, \<regex-object\>, \<options-object\>)

### regex object
```javascript
{ words: '[ letter-regex ]', numbers: '[ number-regex ]' }

// will create a regex like this_:
// /[[letter-regex][number-regex]]]+/giu]
```

### options object
```javascript
{ toLowercase: [true / false], numbersAlso: [ true / false ] }
```
* Convert toLowercase: Boolean - true / false (default)
* Extract numbersAlso: Boolean - true / false (default)

### languages supported
We got language objects for:
* `default` - All Latin characters
* `en` - English
* `no` - Norwegian

Next languages to be added:
* [Chinese simplified](https://github.com/eklem/words-n-numbers/issues/7)
* [Hindi](https://github.com/eklem/words-n-numbers/issues/6)
* [Russian](https://github.com/eklem/words-n-numbers/issues/8)

#### PR's welcome
PR's on written language specific regex'es are more than welcome =)

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/words-n-numbers
[npm-version-image]: http://img.shields.io/npm/v/words-n-numbers.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/words-n-numbers.svg?style=flat
[travis-url]: http://travis-ci.org/eklem/words-n-numbers
[travis-image]: http://img.shields.io/travis/eklem/words-n-numbers.svg?style=flat
