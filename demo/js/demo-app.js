
import $ from './blingbling.js'
import wnn from './wnn.js'

$('#querytext').on('input', queryText => {
  // get textarea content
  queryText = wnn.extract(queryText.target.value, { regex: wnn.wordsEmojis, toLowercase: true })

  // Populate div#wnn with tokenized text
  const node = document.createElement('span').innerText = JSON.stringify(queryText, 2, ' ')
  document.getElementById('wnn').replaceChildren(node)
})
