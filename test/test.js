const wnn = require('../index.js')
const test = require('tape')

test('extract words only, default regex and options', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString)
  t.looseEqual(newArray, [ 'I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', 'times' ])
})

test('extract words and numbers, custon regex', function (t) {
  t.plan(1)
  const oldString = 'This happens 5 o\'clock !!!'
  const newArray = wnn.extract(oldString, { words: 'a-z\'' }, { numbersAlso: true })
  t.looseEqual(newArray, [ 'This', 'happens', '5', 'o\'clock' ])
})

test('extract words only, default regex, all lowercase', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, undefined, { toLowercase: true })
  t.looseEqual(newArray, [ 'i', 'want', 'only', 'words', 'i', 'told', 'you', 'a', 'times' ])
})

test('extract words and numbers, default regex', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, undefined, { numbersAlso: true} )
  t.looseEqual(newArray, [ 'I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', '1000000', 'times' ])
})

test('extract words only, English regex (skipping Norwegian charachters), default options', function (t) {
  t.plan(1)
  const oldString = 'Nå må vi gi oss! Øyh, dette bærer galt av sted.'
  const newArray = wnn.extract(oldString, wnn.en )
  t.looseEqual(newArray, [ 'N', 'm', 'vi', 'gi', 'oss', 'yh', 'dette', 'b', 'rer', 'galt', 'av', 'sted'])
})

test('extract words only, Norwegian regex (skipping Norwegian charachters), default options', function (t) {
  t.plan(1)
  const oldString = 'Nå må vi gi oss! Øyh, dette bærer galt av sted.'
  const newArray = wnn.extract(oldString, wnn.no )
  t.looseEqual(newArray, [ 'Nå', 'må', 'vi', 'gi', 'oss', 'Øyh', 'dette', 'bærer', 'galt', 'av', 'sted'])
})