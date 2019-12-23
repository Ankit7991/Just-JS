const cons = console.log;
$(function () {

  function cssPropVal(el, prop) {
    return window.getComputedStyle($(el)[0], null).getPropertyValue(prop);
  }





  (function navAnimation() {
    setTimeout(() => {
      $('.ul li').addClass('visible');
    }, 200);


    var shadow = document.createElement('span');
    shadow.classList.add('ul-shadow');
    document.querySelector('.ul').appendChild(shadow);
    function hover() {
      // cons(cssPropVal('.is', 'left'))
      var list = ['look', 'who', 'is', 'here', 'damn'];
      list.forEach(function (el) {
        let currLeftVal = cssPropVal(`.${el}`, 'left');
        let currElWidth = cssPropVal(`.${el}`, 'width');
        $(`.${el}`).on('mouseover', function () {
          $(`.ul-shadow`).css({
            'left': `${currLeftVal}`,
            'width': `${currElWidth}`,
            'visibility': 'visible',
            'transition' : '0.4s'
          })
        })
        $(`.${el}`).on('mouseout', function () {
          $(`.ul-shadow`).css({
            'left': `${currLeftVal}`,
            'width': `${currElWidth}`,
            'visibility': 'hidden',
            'transition' : '0s'
          })
        })

      })
    }


    setTimeout(() => {
      hover();
    }, 1000);
    $(window).on('resize', function () {
      setTimeout(() => {
        hover();
      }, 200);
    })

    
    document.querySelectorAll('.ul li').forEach(el => {
      el.addEventListener('click', function (e) {
        document.querySelectorAll('.ul li').forEach(el => {
          el.classList.remove('active');
        })
        this.classList.add('active');
      })
    })

  })();



  const el = document.querySelector('section');
  const allEl = document.querySelectorAll('section');

  const options = {
    // rootMargin : '10px 0px 0px 0px',
    threshold: 1
  }

  var observer = new IntersectionObserver(function (entry, observer) {
    // if(!entry.isIntersecting) return;
    var entry = entry[0];
    entry.target.classList.toggle('inView');
    observer.unobserve(entry.target);
  }, options);

  // observer.observe($(`section`));
  allEl.forEach(el => {
    observer.observe(el);
  })
})