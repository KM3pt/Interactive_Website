/* "FLIPBOARD HOME PAGE"       
   from Codecademy.com      
   by               
   KM3 */

var main = function() {
  
  /* more link */  
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  /* cycle through the slides (next) */
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
      
    /* loop cycle */
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
      
    /* loop next dot */
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  /* cycle through the slides (previous) */
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    
    /* loop cycle */
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();
    
    /* loop previous dot */
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

/* loads when HTML is ready */ 
$(document).ready(main);