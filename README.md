# Words'n'numbers
Tokenizing strings of text. Extracting arrays of words and optionally number, emojis, tags, usernames and email addresses from strings. For Node.js and the browser. When you need more than just [a-z] regular expressions. Part of document processing for [search-index](https://github.com/fergiemcdowall/search-index) and [nowsearch.xyz](https://github.com/eklem/nowsearch.xyz).

Inspired by [extractwords](https://github.com/f-a-r-a-z/extractwords)

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![MIT License][license-image]][license-url]

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
```javaScript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords)
// returns ['A', 'dollars', 'baby']
```

### Only words, converted to lowercase
```javaScript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords, { toLowercase: true })
// returns ['a', 'dollars', 'baby']
```

### Predefined regex for words and numbers, converted to lowercase
```javaScript
let stringOfWords = 'A 1000000 dollars baby!'
wnn.extract(stringOfWords, { regex: wnn.wordsNumbers, toLowercase: true })
// returns ['a', '1000000', 'dollars', 'baby']
```

### Predefined regex for words and emoticons, converted to lowercase
```javaScript
let stringOfWords = 'A ticket to 大阪 costs ¥2000 👌😄 😢'
wnn.extract(stringOfWords, { regex: wnn.wordsEmojis, toLowercase: true })
// returns [ 'A', 'ticket', 'to', '大阪', 'costs', '👌😄', '😢' ]
```

### Predefined regex for numbers and emoticons
```javaScript
let stringOfWords = 'A ticket to 大阪 costs ¥2000 👌😄 😢'
wnn.extract(stringOfWords, { regex: wnn.numbersEmojis, toLowercase: true })
// returns [ '2000', '👌😄', '😢' ]
```

### Predefined regex for words, numbers and emoticons, converted to lowercase
```javaScript
let stringOfWords = 'A ticket to 大阪 costs ¥2000 👌😄 😢'
wnn.extract(stringOfWords, { regex: wnn.wordsNumbersEmojis, toLowercase: true })
// returns [ 'a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄', '😢' ]
```

### Predefined regex for `#tags`
```javaScript
let stringOfWords = 'A #49ticket to #大阪 or two#tickets costs ¥2000 👌😄😄 😢'
wnn.extract(stringOfWords, { regex: wnn.tags, toLowercase: true })
// returns [ '#49ticket', '#大阪' ]
```

### Predefined regex for `@usernames`
```javaScript
let stringOfWords = 'A #ticket to #大阪 costs bob@bob.com, @alice and @美林 ¥2000 👌😄😄 😢'
wnn.extract(stringOfWords, { regex: wnn.usernames, toLowercase: true })
// returns [ '@alice123', '@美林' ]
```

### Predefined regex for email addresses
```javaScript
let stringOfWords = 'A #ticket to #大阪 costs bob@bob.com, alice.allison@alice123.com, some-name.nameson.nameson@domain.org and @美林 ¥2000 👌😄😄 😢'
wnn.extract(stringOfWords, { regex: wnn.email, toLowercase: true })
// returns [ 'bob@bob.com', 'alice.allison@alice123.com', 'some-name.nameson.nameson@domain.org' ]
```

### Custom regex
```javaScript
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
```javaScript
wnn.words              // only words, any language <-- default
wnn.numbers            // only numbers
wnn.emojis             // only emojis
wnn.wordsNumbers       // words (any language) and numbers
wnn.wordsEmojis        // words (any language) and emojis
wnn.numbersEmojis      // numbers and emojis
wnn.wordsNumbersEmojis // words (any language), numbers and emojis
wnn.tags               // #tags (any language
wnn.usernames          // @usernames (any language)
wnn.email              // email addresses. Most valid addresses,
                       //   but not to be used as a validator
```

### Languages supported
Supports most languages supported by [stopword](https://github.com/fergiemcdowall/stopword#language-code), and others too. Some languages like Japanese and Chinese simplified needs to be tokenized. May add tokenizers at a later stage.

#### PR's welcome
PR's and issues are more than welcome =)

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/words-n-numbers
[npm-version-image]: http://img.shields.io/npm/v/words-n-numbers.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/words-n-numbers.svg?style=flat
[travis-url]: http://travis-ci.org/eklem/words-n-numbers
[travis-image]: http://img.shields.io/travis/eklem/words-n-numbers.svg?style=flat
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
