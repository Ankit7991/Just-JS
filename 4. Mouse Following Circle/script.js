

$(window).on('mousemove', function(e){
  $('.cursorCircle').css({
    'top' : `${e.clientY}px`,
    'left' : `${e.clientX}px`,
  })
})