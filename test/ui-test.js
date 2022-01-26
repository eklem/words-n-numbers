const { chromium } = require('playwright')
const test = require('ava')
const browserPromise = chromium.launch({
  headless: true
  // slowMo: 500
})

const path = require('path')
async function pageMacro (t, callback) {
  const browser = await browserPromise
  const page = await browser.newPage()
  await page.setViewportSize({ width: 640, height: 480 })
  try {
    await callback(t, page)
  } finally {
    await page.close()
  }
}

test('1: Add text, test default. 2: Test only emojis. 3: check emojis and text. 4: check emojis, numbers and text. 5: add more text. 6: check tags. 7: check usernames. 8: check email.', pageMacro, async (t, page) => {
  t.plan(8)
  const filePath = await path.resolve('./demo/index.html')
  const url = 'file://' + filePath
  let testExtract

  // Go to ./demo/index.html
  await page.goto(url)

  // Click and fill textarea and test default extraction (words)
  await page.click('textarea')
  await page.keyboard.type('A ticket to 大阪 costs ¥2000 👌😄 😢')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs'])

  // Click Emojis text lable and check extracted
  await page.click('text=Emojis')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['👌😄', '😢'])

  // Click Words checkbox and test extracted
  await page.click('input#words')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs', '👌😄', '😢'])

  // Click Numbers checkbox and test extracted
  await page.click('input#numbers')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄', '😢'])

  // Type more text in textarea and test extracted
  await page.click('textarea')
  await page.keyboard.type('\'Send it\'s receipt to name.nameson@domain.com or @namesonn.\' If you do the last, add #ticket as a tag.')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄', '😢', 'send', 'it\'s', 'receipt', 'to', 'name', 'nameson', 'domain', 'com', 'or', 'namesonn', 'if', 'you', 'do', 'the', 'last', 'add', 'ticket', 'as', 'a', 'tag'])

  // Click Tags checkbox an test extracted again
  await page.click('input#tags')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄', '😢', 'send', 'it\'s', 'receipt', 'to', 'name', 'nameson', 'domain', 'com', 'or', 'namesonn', 'if', 'you', 'do', 'the', 'last', 'add', '#ticket', 'as', 'a', 'tag'])

  // Click Username checkbox and test extracted again
  await page.click('input#usernames')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄', '😢', 'send', 'it\'s', 'receipt', 'to', 'name', 'nameson', 'domain', 'com', 'or', '@namesonn', 'if', 'you', 'do', 'the', 'last', 'add', '#ticket', 'as', 'a', 'tag'])

  // Click Email checkbox and test extracted again
  await page.click('input#email')
  testExtract = await (page.textContent('#wnn'))
  testExtract = JSON.parse(testExtract)
  t.deepEqual(testExtract, ['a', 'ticket', 'to', '大阪', 'costs', '2000', '👌😄', '😢', 'send', 'it\'s', 'receipt', 'to', 'name.nameson@domain.com', 'or', '@namesonn', 'if', 'you', 'do', 'the', 'last', 'add', '#ticket', 'as', 'a', 'tag'])
})
