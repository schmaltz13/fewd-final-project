$(document).ready(function() {

  $('#contact-tab').click(function() {
    $('#contact-tab').toggleClass('active')
    $('.contact-me').toggleClass('move')
    $('.overlay').toggleClass('show')
  })

  $('.overlay').click(function() {
    $('#contact-tab').toggleClass('active')
    $('.contact-me').toggleClass('move')
    $('.overlay').toggleClass('show')
  })
})
