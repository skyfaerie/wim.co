// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function(){
  $('#mentors').masonry({
    "isFitWidth": true,
    itemSelector: '.mentor'
  });

  $('#partners').masonry({
    "isFitWidth": true,
    itemSelector: '.partner'
  });
});

/*$( "#more-blogs" ).click(function() {
  // display 10 more older posts
});*/
