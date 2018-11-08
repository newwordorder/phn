"use strict";

var a = 0;
jQuery(window).scroll(function () {
  var counter = document.querySelector('#counter');

  if (counter) {
    var oTop = $('#counter').offset().top - window.innerHeight;

    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter__number').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        console.log($this);

        if (countTo == 0) {
          $this[0].style.opacity = 0;
        }

        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function step() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function complete() {
            $this.text(this.countNum); //alert('finished');
          }
        });
      });
      a = 1;
    }
  }
});

//# sourceMappingURL=countUp-min.js.map
