$(function(){


});

// preload
window.onload = function(){
 setTimeout(function(){
   $(".se-pre-con").fadeOut("slow");
   $("body").addClass("loaded");
 }, 250);
};

// hire me
$('.hire-me').on('click', function() {
  $('.main-content').toggleClass('move');
  $('body').toggleClass('stick');
  $('#contact-area').toggleClass('active');
  $('#contact-area input#Name').focus();
});

// hire close
$('.close').on('click', function() {
  $('.main-content').toggleClass('move');
  $('body').toggleClass('stick');
  $('#contact-area').toggleClass('active');
});

// archive
$('.open-archive').on('click', function() {
  $('.open-archive h2').toggleClass('swap');
  $('.archive-list').toggleClass('open');
});



// https://github.com/henkbulder/inViewPort
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


// smooth scroll back to top
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



