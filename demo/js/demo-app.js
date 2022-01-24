
import wnn from './wnn.js'

// listen on textarea input
document.getElementById('querytext').oninput = function () {
  extract()
}

// listen to regex option
document.getElementById('regex').oninput = function () {
  extract()
}

// tokenize input
const extract = function () {
  // get query text
  let queryText = document.getElementById('querytext').value
  console.log(queryText)

  // get regex type
  let regexType = document.getElementById('regex').value
  console.log(regexType)
  regexType = getRegex(regexType)

  // do regex according to type
  const regexOption = { regex: regexType, toLowercase: true }
  queryText = wnn.extract(queryText, regexOption)
  console.log(queryText)

  // Populate div#wnn with tokenized text
  const node = document.createElement('span').innerText = JSON.stringify(queryText, 2, ' ')
  document.getElementById('wnn').replaceChildren(node)
}

// choose correct regex
const getRegex = function (value) {
  if (value === 'words') { return wnn.words }
  if (value === 'numbers') { return wnn.numbers }
  if (value === 'emojis') { return wnn.emojis }
  if (value === 'wordsNumbers') { return wnn.wordsNumbers }
  if (value === 'wordsEmojis') { return wnn.wordsEmojis }
  if (value === 'numbersEmojis') { return wnn.numbersEmojis }
  if (value === 'wordsNumbersEmojis') { return wnn.wordsNumbersEmojis }
  if (value === 'tags') { return wnn.tags }
  if (value === 'usernames') { return wnn.usernames }
  if (value === 'email') { return wnn.email }
}
