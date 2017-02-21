$(document).ready(function(){

  var headerHeight = $('header').outerHeight();

  $('.slide-section').click(function(e) {

  var linkHref = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(linkHref).offset().top - headerHeight
  }, 1000);

  e.preventDefault();
  });

});

/*
$(document).ready(function(){

  $("#btn-gallery").click(function(e) {

    var link = $(this);

    $(".gallery-hidden").slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text("VIEV LESS");
      } else {
        link.text("VIEW MORE");
      }
    });
    e.preventDefault();
  });
  
  $("#btn-blog").click(function(e) {

    var link = $(this);

    $(".blog-hidden").slideToggle('slow', function() {
      if ($(this).is(":visible")) {
        link.text("VIEV LESS");
      } else {
        link.text("VIEW MORE");
      }
    });
    e.preventDefault();
  });
});
*/

$(document).ready(function(){

  $("#btn-gallery").click(function(e) {
    $(".gallery-hidden").slideToggle("slow");
    if ($(this).text() == "VIEW LESS") {
        $(this).text("VIEW MORE");
    } else {
      $(this).text("VIEW LESS")
    }
    e.preventDefault();
  });

  $("#btn-blog").click(function(e) {
    $(".blog-hidden").slideToggle("slow");
    if ($(this).text() == "VIEW LESS") {
        $(this).text("VIEW MORE");
    } else {
      $(this).text("VIEW LESS")
    }
    e.preventDefault();
  });
});



/*
$("#btn-gallery").click(function(e) {
  $(".gallery-hidden").slideToggle("slow");
  e.preventDefault();
});

$("#btn-blog").click(function(e) {
  $(".blog-hidden").slideToggle();
  e.preventDefault();
});
*/

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#home');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', 'transparent');
       }
   });
  }
});
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#about-us');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#00c4c4');
       }
   });
  }
});
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#our-services');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#70bfff');
       }
   });
  }
});
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#gallery');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#ffe92f');
       }
   });
  }
});
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#subscribe');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', 'transparent');
       }
   });
  }
});
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#blog');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#b07cf7');
       }
   });
  }
});
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#contact');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', 'transparent');
       }
   });
  }
});







