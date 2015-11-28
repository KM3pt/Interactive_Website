/* "STATUS UPDATE BOX"      
   from Codecademy.com      
   by               
   KM3 */

var main = function() {
    
    $('.btn').click(function() {                  
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
    
        // clear out status box
        $('.status-box').val('');                     
        // reset counter's text    
        $('.counter').text('140');                    
        // disable button 2
        $('.btn').addClass('disabled');                
    });
  
    // count characters left
    $('.status-box').keyup(function() {              
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
  
        // disable button 1
        if(charactersLeft < 0) {                      
            $('.btn').addClass('disabled'); 
        }
        else if(charactersLeft == 140) {
            $('.btn').addClass('disabled');
        }
        else {
            $('.btn').removeClass('disabled');
        }
    });
  
    $('.btn').addClass('disabled');
}

// loads .JS when .HTML is ready
$(document).ready(main);