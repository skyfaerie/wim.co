// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function(){
  $('#mentors').masonry({
    columnWidth: 25,
    gutter: 40,
    itemSelector: '.mentor'
  });

  $('#partners').masonry({
    "isFitWidth": true,
    itemSelector: '.partner'
  });
});

