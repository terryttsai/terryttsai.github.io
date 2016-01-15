mns = "sticky_nav_scrolled";

function jqUpdateSize(){
    if( $(this).scrollTop() > $('#about').height() - 99 ) {
        $('.sticky_nav').addClass(mns);
    } else {
        $('.sticky_nav').removeClass(mns);
    }
};

$(window).resize(jqUpdateSize);     // When the browser changes size

$(window).scroll(function() {
  if( $(this).scrollTop() > $('#about').height() - 99 ) {
    $('.sticky_nav').addClass(mns);
  } else {
    $('.sticky_nav').removeClass(mns);
  }
});

$(function() {      //autoscroll script
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 99
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
    window.onload = function() {
        $('body').fadeIn(1400);
    }
    jqUpdateSize();
});