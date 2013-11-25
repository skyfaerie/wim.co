
$(function(){
  
  // if masonry is on the first page
  // $('#spotlight').masonry({
  //     columnWidth: 160,
  //     gutter: 10,
  //     itemSelector: '.highlight'
  //   });

  $('#mentors').masonry({
      columnWidth: 25,
      gutter: 40,
      itemSelector: '.mentor'
    });

  $('#partners').masonry({
      columnWidth: 33,
      gutter: 40,
      itemSelector: '.partner'
    });

  
});

