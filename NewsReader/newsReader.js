/* "NEWS READER"       
   from Codecademy.com      
   by               
   KM3 */

var main = function() {
  
  /* Hide descriptions of all articles except the article we clicked */
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });
  
  /* keyboard shortcuts */
  $(document).keypress(function(event) {
    if(event.which === 111) {
      $('.description').hide();
      $('.current').children('.description').show();
    }

    else if(event.which === 110) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });
}

/* run the main function once the web page has fully loaded */
$(document).ready(main);