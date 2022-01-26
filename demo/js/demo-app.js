// listen on textarea input
document.getElementById('querytext').oninput = function () {
  extract()
}

// listen to change on checkboxes
const checkboxes = document.querySelectorAll('.checkbox')
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    console.log('checkbox!')
    extract()
  })
})

// tokenize input
const extract = function () {
  // get query text
  let queryText = document.getElementById('querytext').value
  console.log(queryText)

  // get names of all checked checkboxes
  const regexesChecked = document.querySelectorAll('.checkbox:checked')
  let regexes = []
  regexesChecked.forEach(function (regexChecked) {
    regexes.push(getRegex(regexChecked.getAttribute('name')))
  })
  console.log(regexes)

  // do regex extraction
  if (regexes.length === 0) {
    regexes = [wnn.words]
  }
  const regexOption = { regex: regexes, toLowercase: true }
  queryText = wnn.extract(queryText, regexOption)

  // Populate div#wnn with tokenized text
  const node = document.createElement('span').innerText = JSON.stringify(queryText, 2, ' ')
  document.getElementById('wnn').replaceChildren(node)
}

// choose correct regex
const getRegex = function (value) {
  if (value === 'words') { return wnn.words }
  if (value === 'numbers') { return wnn.numbers }
  if (value === 'emojis') { return wnn.emojis }
  if (value === 'tags') { return wnn.tags }
  if (value === 'usernames') { return wnn.usernames }
  if (value === 'email') { return wnn.email }
}
