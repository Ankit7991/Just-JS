
let drawingStarted = false;
let rand = (from, to) => Math.floor((Math.random() * to)+ from);
let i = 0;
$(window).on('click', function(){
  drawingStarted = !drawingStarted;
  if(drawingStarted){
    $('.instruction').css({'display' : 'none'})
  }else{
    $('.instruction').css({'display' : 'block'})
  }
})
document.querySelector('.container').addEventListener('mousemove',$.throttle(20, false, function(e){
  
  if(drawingStarted){  
    i++;
    var pixels = document.createElement('div');
    pixels.className = `pixel${i}`;
    let y = e.clientX;
    let x = e.clientY;
    console.log(e);
    setTimeout(() => {
      $(`.pixel${i}`).css({
        'background' : `rgba(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`,
        'position' : 'absolute',
        'top' : `${x}px`,
        'left' : `${y}px`,
        'width' : `${rand(10, 20)}px`,
        'height' : `${rand(10, 20)}px`,
        'transition' : '1s'
      });
    }, 0);
    document.querySelector('.container').appendChild(pixels);
    setTimeout(() => {
      document.querySelector(`.container`).removeChild(pixels);
    }, 10000);
  }
  
}));