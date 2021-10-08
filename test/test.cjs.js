const test = require('ava')
const wnn = require('../dist/words-n-numbers.cjs.js')

test('extract words only, default regex and options', (t) => {
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, ['I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', 'times'])
})

test('extract numbers only, predefined regex and default options', (t) => {
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { regex: wnn.numbers })
  t.deepEqual(newArray, ['1000000'])
})

test('extract words and numbers, predefined regex and default options', (t) => {
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsNumbers })
  t.deepEqual(newArray, ['I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', '1000000', 'times'])
})

test('extract words and numbers, custom regex', (t) => {
  const oldString = 'This happens 5 o\'clock !!!'
  const newArray = wnn.extract(oldString, { regex: '[a-z\'0-9]+' })
  t.deepEqual(newArray, ['This', 'happens', '5', 'o\'clock'])
})

test('extract words only, default regex, all lowercase', (t) => {
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { toLowercase: true })
  t.deepEqual(newArray, ['i', 'want', 'only', 'words', 'i', 'told', 'you', 'a', 'times'])
})

test('extract words and numbers, predefined but not default regex', (t) => {
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsNumbers })
  t.deepEqual(newArray, ['I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', '1000000', 'times'])
})

test('extract words only, custom English regex (skipping Norwegian charachters)', (t) => {
  const oldString = 'Nå må vi gi oss! Øyh, dette bærer galt av sted.'
  const newArray = wnn.extract(oldString, { regex: '[a-z]+' })
  t.deepEqual(newArray, ['N', 'm', 'vi', 'gi', 'oss', 'yh', 'dette', 'b', 'rer', 'galt', 'av', 'sted'])
})

test('extract words only, Norwegian text, default regex', (t) => {
  const oldString = 'Nå må vi gi oss! Øyh, dette bærer galt av sted.'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, ['Nå', 'må', 'vi', 'gi', 'oss', 'Øyh', 'dette', 'bærer', 'galt', 'av', 'sted'])
})

test('extract words only, Hindi text, default regex', (t) => {
  const oldString = 'कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित यह दुर्ग विश्व धरोहर स्थल खजुराहो से ९७.७ किमी दूर है। इसे भारत के सबसे विशाल और अपराजेय'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, ['कालिंजर', 'दुर', 'ग', 'भारतीय', 'राज', 'य', 'उत', 'तर', 'प', 'रदेश', 'के', 'बांदा', 'जिला', 'स', 'थित', 'एक', 'दुर', 'ग', 'है', 'बुन', 'देलखण', 'ड', 'क', 'षेत', 'र', 'में', 'विंध', 'य', 'पर', 'वत', 'पर', 'स', 'थित', 'यह', 'दुर', 'ग', 'विश', 'व', 'धरोहर', 'स', 'थल', 'खजुराहो', 'से', 'किमी', 'दूर', 'है', 'इसे', 'भारत', 'के', 'सबसे', 'विशाल', 'और', 'अपराजेय'])
})

test('extract words and numbers, Hindi text, predefined regex', (t) => {
  const oldString = 'कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित यह दुर्ग विश्व धरोहर स्थल खजुराहो से ९७.७ किमी दूर है। इसे भारत के सबसे विशाल और अपराजेय'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsNumbers })
  t.deepEqual(newArray, ['कालिंजर', 'दुर', 'ग', 'भारतीय', 'राज', 'य', 'उत', 'तर', 'प', 'रदेश', 'के', 'बांदा', 'जिला', 'स', 'थित', 'एक', 'दुर', 'ग', 'है', 'बुन', 'देलखण', 'ड', 'क', 'षेत', 'र', 'में', 'विंध', 'य', 'पर', 'वत', 'पर', 'स', 'थित', 'यह', 'दुर', 'ग', 'विश', 'व', 'धरोहर', 'स', 'थल', 'खजुराहो', 'से', '९७', '७', 'किमी', 'दूर', 'है', 'इसे', 'भारत', 'के', 'सबसे', 'विशाल', 'और', 'अपराजेय'])
})

test('extract words only, Chinese simplified text, default regex', (t) => {
  const oldString = '东西文化论战是中华民国大陆时期关于東方文化和西方文化异同、长短和取舍的论战。这场辩论始于1915年《青年杂志》之创立，至1927年北伐前结束。'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, ['东西文化论战是中华民国大陆时期关于東方文化和西方文化异同', '长短和取舍的论战', '这场辩论始于', '年', '青年杂志', '之创立', '至', '年北伐前结束'])
})

test('extract words only, Russian text, default regex', (t) => {
  const oldString = 'В 1963 году на воду была спущена реплика исторического корабля — Bluenose II, ставшая «парусным представителем Новой Шотландии». '
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, ['В', 'году', 'на', 'воду', 'была', 'спущена', 'реплика', 'исторического', 'корабля', 'Bluenose', 'II', 'ставшая', 'парусным', 'представителем', 'Новой', 'Шотландии'])
})

test('extract words only from string w/ words, number and emoticon', (t) => {
  const oldString = 'A ticket to 大阪 costs ¥2000 👌'
  const newArray = wnn.extract(oldString, { regex: wnn.words })
  t.deepEqual(newArray, ['A', 'ticket', 'to', '大阪', 'costs'])
})

test('extract words and numbers from string w/ words, number and emoticon', (t) => {
  const oldString = 'A ticket to 大阪 costs ¥2000 👌'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsNumbers })
  t.deepEqual(newArray, ['A', 'ticket', 'to', '大阪', 'costs', '2000'])
})

test('extract words and emojis from string w/ words, number and emoticon', (t) => {
  const oldString = 'A ticket to 大阪 costs ¥2000 👌'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsEmojis })
  t.deepEqual(newArray, ['A', 'ticket', 'to', '大阪', 'costs', '👌'])
})

test('extract numbers and emojis from string w/ words, number and emoticon', (t) => {
  const oldString = 'A ticket to 大阪 costs ¥2000 👌'
  const newArray = wnn.extract(oldString, { regex: wnn.numbersEmojis })
  t.deepEqual(newArray, ['2000', '👌'])
})

test('extract words, numbers and emojis from string w/ words, number and emoticon, to lowercase', (t) => {
  const oldString = 'A ticket to 大阪 costs ¥2000 👌😄😄 😢'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsNumbersEmojis, toLowercase: true })
  t.deepEqual(newArray, ['a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄😄', '😢'])
})

test('extract tags', (t) => {
  const oldString = 'A #49ticket to #大阪 or two#tickets costs ¥2000 👌😄😄 😢'
  const newArray = wnn.extract(oldString, { regex: wnn.tags, toLowercase: true })
  t.deepEqual(newArray, ['#49ticket', '#大阪'])
})

test('extract usernames', (t) => {
  const oldString = 'A #ticket to #大阪 costs bob@bob.com, @alice123 and @美林 ¥2000 👌😄😄 😢'
  const newArray = wnn.extract(oldString, { regex: wnn.usernames, toLowercase: true })
  t.deepEqual(newArray, ['@alice123', '@美林'])
})

test('extract emails from text', (t) => {
  const oldString = 'A #ticket to #大阪 costs bob@bob.com, alice.allison@alice123.com, some-name.nameson.nameson@domain.org and @美林 ¥2000 👌😄😄 😢'
  const newArray = wnn.extract(oldString, { regex: wnn.email, toLowercase: true })
  t.deepEqual(newArray, ['bob@bob.com', 'alice.allison@alice123.com', 'some-name.nameson.nameson@domain.org'])
})

test('extract 14 of 16 different types of allowed emails. The one with double quotes are not extracted', (t) => {
  const oldString = 'simple@example.com very.common@example.com disposable.style.email.with+symbol@example.com other.email-with-hyphen@example.com fully-qualified-domain@example.com user.name+tag+sorting@example.com x@example.com example-indeed@strange-example.com test/test@test.com admin@mailserver1 example@s.example " "@example.org "john..doe"@example.org mailhost!username@example.org user%example.com@example.org user-@example.org'
  const newArray = wnn.extract(oldString, { regex: wnn.email, toLowercase: true })
  t.deepEqual(newArray, ['simple@example.com', 'very.common@example.com', 'disposable.style.email.with+symbol@example.com', 'other.email-with-hyphen@example.com', 'fully-qualified-domain@example.com', 'user.name+tag+sorting@example.com', 'x@example.com', 'example-indeed@strange-example.com', 'test/test@test.com', 'admin@mailserver1', 'example@s.example', 'mailhost!username@example.org', 'user%example.com@example.org', 'user-@example.org'])
})

test('Extract email addresses in a sentence where you have a full stop immediately after an email address.', (t) => {
  const oldString = 'Please send it to some.email@address.com. And this Another.Name.for-email@address.com, should also work.'
  const newArray = wnn.extract(oldString, { regex: wnn.email, toLowercase: true })
  t.deepEqual(newArray, ['some.email@address.com', 'another.name.for-email@address.com'])
})
