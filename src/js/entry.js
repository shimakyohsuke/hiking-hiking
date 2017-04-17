import $ from 'jquery'
import Flipsnap from '../../node_modules/flipsnap/flipsnap.min.js'
$(function () {
  const wrapWidth = $('.hh-flipsnap').width()
  const listCount = $('.hh-flipsnap__item').length
  console.log(wrapWidth)
  console.log(listCount)
  window.addEventListener('load', function (eve) {
    $('.hh-flipsnap__item').css(
      {'width': wrapWidth}
    )
    $('.hh-flipsnap__inner').css(
      {'width': wrapWidth * listCount}
    )
  })
  const $pointer = $('.pointer span')
  const flipsnap = Flipsnap('.flipsnap', {
    distance: wrapWidth
  })
  flipsnap.element.addEventListener('fspointmove', function () {
    $pointer.filter('.current').removeClass('current')
    $pointer.eq(flipsnap.currentPoint).addClass('current')
  }, false)
})
