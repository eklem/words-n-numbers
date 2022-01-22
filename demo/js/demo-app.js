
import $ from './blingbling.js'
$('#querytext').on('keydown', e => querytext())

const querytext = function () {
  const [txt] = $(document.querySelector('input#querytext'))
  console.log(txt.attr('value'))
}
