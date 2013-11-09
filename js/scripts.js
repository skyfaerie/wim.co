
$(function(){
  
  // masonry 

  $('#spotlight').masonry({
      columnWidth: 160,
      gutter: 10,
      itemSelector: '.highlight'
    });

  $('#partners').masonry({
      columnWidth: 25,
      gutter: 20,
      itemSelector: '.partner'
    });

  $('#mentors').masonry({
      columnWidth: 21,
      gutter: 40,
      itemSelector: '.mentor'
    });
});

