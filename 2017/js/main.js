$(function(){


});

// preload
window.onload = function(){
 setTimeout(function(){
   $(".se-pre-con").fadeOut(150);
   $("body").addClass("loaded");
 }, 500);
};

// stellar
$.stellar({
    horizontalScrolling:false,
    hideDistantElements: false,
    verticalOffset:300,
    positionProperty: 'transform',
    scrollProperty: 'scroll',
    responsive: true,
    parallaxElements: true
});


// wibbble
{
  class MorphingBG {
    constructor(el) {
      this.DOM = {};
      this.DOM.el = el;
      this.DOM.paths = Array.from(this.DOM.el.querySelectorAll('path'));
      this.animate();
    }
    animate() {
      this.DOM.paths.forEach((path) => {
        setTimeout(() => {
          anime({
            targets: path,
            duration: anime.random(2500,4500),
            easing: [0.6,0,0.6,1],
            d: path.getAttribute('pathdata:id'),
            loop: true,
            direction: 'alternate'
          });
        }, anime.random(0,900));
      });
    }
  };

  new MorphingBG(document.querySelector('svg.scene'));
};


  // animate on scroll
  (function ($) {
    'use strict';
    $.fn.inviewport = function (options) {
      var settings = $.extend({
        'minPercentageInView' : 100,
        'standardClassName': 'in-view'
      }, options);
      this.each(function () {
        var $this = $(this),
          $win = $(window),
          changed = false,
          isVisible = function () {
            var c = settings.className || settings.standardClassName,
              min = (settings.threshold || settings.minPercentageInView) / 100,
              xMin = $this.width() * min,
              yMin = $this.height() * min,
              winPosX = $win.scrollLeft() + $win.width(),
              winPosY = $win.scrollTop() + $win.height(),
              elPosX = $this.offset().left + xMin,
              elPosY = $this.offset().top + yMin;
            if (winPosX > elPosX && winPosY > elPosY) {
              $this.addClass(c);
            }
          };
        $win.on('ready', isVisible())
          .on('resize scroll', function () {
            changed = true;
          })
        setInterval(function () {
          if (changed) {
            changed = false;
            isVisible();
          }
        }, 250);
      });
    };
  }(jQuery));

  $(function () {
    $('.animate').inviewport({
      threshold: 0.1,
      className: 'on-screen'
    })
  }); // animate on scroll






