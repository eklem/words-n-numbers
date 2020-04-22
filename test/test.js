const wnn = require('../index.js')
const test = require('tape')

test('extract words only, default regex and options', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, [ 'I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', 'times' ])
})

test('extract numbers only, predefined regex and default options', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { regex: wnn.numbers })
  t.deepEqual(newArray, [ '1000000' ])
})

test('extract words and numbers, predefined regex and default options', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsAndNumbers })
  t.deepEqual(newArray, [ 'I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', '1000000', 'times' ])
})

test('extract words and numbers, custom regex', function (t) {
  t.plan(1)
  const oldString = 'This happens 5 o\'clock !!!'
  const newArray = wnn.extract(oldString, { regex: '[a-z\'0-9]+' })
  t.deepEqual(newArray, [ 'This', 'happens', '5', 'o\'clock' ])
})

test('extract words only, default regex, all lowercase', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { toLowercase: true })
  t.deepEqual(newArray, [ 'i', 'want', 'only', 'words', 'i', 'told', 'you', 'a', 'times' ])
})

test('extract words and numbers, predefined but not default regex', function (t) {
  t.plan(1)
  const oldString = 'I want only words! I told you a 1000000 times'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsAndNumbers })
  t.deepEqual(newArray, [ 'I', 'want', 'only', 'words', 'I', 'told', 'you', 'a', '1000000', 'times' ])
})

test('extract words only, custom English regex (skipping Norwegian charachters)', function (t) {
  t.plan(1)
  const oldString = 'Nå må vi gi oss! Øyh, dette bærer galt av sted.'
  const newArray = wnn.extract(oldString, { regex: '[a-z]+' })
  t.deepEqual(newArray, [ 'N', 'm', 'vi', 'gi', 'oss', 'yh', 'dette', 'b', 'rer', 'galt', 'av', 'sted'])
})

test('extract words only, Norwegian text, default regex', function (t) {
  t.plan(1)
  const oldString = 'Nå må vi gi oss! Øyh, dette bærer galt av sted.'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, [ 'Nå', 'må', 'vi', 'gi', 'oss', 'Øyh', 'dette', 'bærer', 'galt', 'av', 'sted'])
})

test('extract words only, Hindi text, default regex', function (t) {
  t.plan(1)
  const oldString = 'कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित यह दुर्ग विश्व धरोहर स्थल खजुराहो से ९७.७ किमी दूर है। इसे भारत के सबसे विशाल और अपराजेय'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, [ 'कालिंजर', 'दुर', 'ग', 'भारतीय', 'राज', 'य', 'उत', 'तर', 'प', 'रदेश', 'के', 'बांदा', 'जिला', 'स', 'थित', 'एक', 'दुर', 'ग', 'है', 'बुन', 'देलखण', 'ड', 'क', 'षेत', 'र', 'में', 'विंध', 'य', 'पर', 'वत', 'पर', 'स', 'थित', 'यह', 'दुर', 'ग', 'विश', 'व', 'धरोहर', 'स', 'थल', 'खजुराहो', 'से', 'किमी', 'दूर', 'है', 'इसे', 'भारत', 'के', 'सबसे', 'विशाल', 'और', 'अपराजेय' ])
})

test('extract words and numbers, Hindi text, predefined regex', function (t) {
  t.plan(1)
  const oldString = 'कालिंजर दुर्ग, भारतीय राज्य उत्तर प्रदेश के बांदा जिला स्थित एक दुर्ग है। बुन्देलखण्ड क्षेत्र में विंध्य पर्वत पर स्थित यह दुर्ग विश्व धरोहर स्थल खजुराहो से ९७.७ किमी दूर है। इसे भारत के सबसे विशाल और अपराजेय'
  const newArray = wnn.extract(oldString, { regex: wnn.wordsAndNumbers })
  t.deepEqual(newArray, [ 'कालिंजर', 'दुर', 'ग', 'भारतीय', 'राज', 'य', 'उत', 'तर', 'प', 'रदेश', 'के', 'बांदा', 'जिला', 'स', 'थित', 'एक', 'दुर', 'ग', 'है', 'बुन', 'देलखण', 'ड', 'क', 'षेत', 'र', 'में', 'विंध', 'य', 'पर', 'वत', 'पर', 'स', 'थित', 'यह', 'दुर', 'ग', 'विश', 'व', 'धरोहर', 'स', 'थल', 'खजुराहो', 'से', '९७', '७', 'किमी', 'दूर', 'है', 'इसे', 'भारत', 'के', 'सबसे', 'विशाल', 'और', 'अपराजेय' ])
})

test('extract words only, Chinese simplified text, default regex', function (t) {
  t.plan(1)
  const oldString = '东西文化论战是中华民国大陆时期关于東方文化和西方文化异同、长短和取舍的论战。这场辩论始于1915年《青年杂志》之创立，至1927年北伐前结束。'
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, [ '东西文化论战是中华民国大陆时期关于東方文化和西方文化异同', '长短和取舍的论战', '这场辩论始于', '年', '青年杂志', '之创立', '至', '年北伐前结束' ])
})

test('extract words only, Russian text, default regex', function (t) {
  t.plan(1)
  const oldString = 'В 1963 году на воду была спущена реплика исторического корабля — Bluenose II, ставшая «парусным представителем Новой Шотландии». '
  const newArray = wnn.extract(oldString)
  t.deepEqual(newArray, [ 'В', 'году', 'на', 'воду', 'была', 'спущена', 'реплика', 'исторического', 'корабля', 'Bluenose', 'II', 'ставшая', 'парусным', 'представителем', 'Новой', 'Шотландии' ])
})

