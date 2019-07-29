# WORDS! ... and numbers
Extracting arrays of words and optionally numbers from strings. For Node.js and the browser. When you need more than just [a-z]. The goal is to support all languages supported by [stopword](https://github.com/fergiemcdowall/stopword#language-code). Part of document processing for [search-index](https://github.com/fergiemcdowall/search-index) and [nowsearch.xyz](https://github.com/eklem/nowsearch.xyz).

Inspired by [extractwords](https://github.com/f-a-r-a-z/extractwords)

## Initiating

### Node.js

```javascript
const wan = require('words-and-numbers')
// wan available
```

### Browser

```html
<script src="wan.js"></script>

<script>
  //wan available
</script>

```

## API

### extract

Returns an array of words and optionally numbers.

* extract(string-of-words, \<options object\>)

### options
* {numbers: false} // default. true/false

* {lowercase: false} // default. true/false

### stringify

* stringify(string-of-words, \<options object\>)

