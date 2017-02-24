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

$(document).ready(function(){

  var home = $('#home').offset().top;
  var aboutus = $('#about-us').offset().top;
  var ourservices = $('#our-services').offset().top;
  var gallery = $('#gallery').offset().top;
  var subscribe = $('#subscribe').offset().top;
  var blog = $('#blog').offset().top;
  var contact = $('#contact').offset().top;

  $(document).scroll(function() {
    if ($(document).scrollTop() >= home && $(document).scrollTop() < aboutus) {
      $('.navbar-default').css('background-color', 'transparent');
    } else if ($(document).scrollTop() >= aboutus && $(document).scrollTop() < ourservices) {
      $('.navbar-default').css('background-color', '#00c4c4');
    } else if ($(document).scrollTop() >= ourservices && $(document).scrollTop() < gallery) {
      $('.navbar-default').css('background-color', '#70bfff');
    } else if ($(document).scrollTop() >= gallery && $(document).scrollTop() < subscribe) {
      $('.navbar-default').css('background-color', '#ffe92f');
    } else if ($(document).scrollTop() >= subscribe && $(document).scrollTop() < blog) {
      $('.navbar-default').css('background-color', 'transparent');
    } else if ($(document).scrollTop() >= blog && $(document).scrollTop() < contact) {
      $('.navbar-default').css('background-color', '#b07cf7');
    } else if ($(document).scrollTop() >= contact) {
      $('.navbar-default').css('background-color', 'transparent');
    }
  });
});



/*
$(document).ready(function() {
  var $window = $(window);
  var $header = $('.navbar');
  var sections = document.querySelectorAll('.header-color');

  function findCurrentSection() {
    var scrollTop = $window.scrollTop();
    var height = $window.height();
    
    return Array.prototype
      .find.call(sections, function(element) {
        var offset = element.getBoundingClientRect();
        var bottom = scrollTop + height;
        return offset.top <= scrollTop && bottom <= offset.bottom;
      });
  }
  
  function onScroll() {
    var section = findCurrentSection();
    
    if (section) {
      var color = section.dataset.color;
      
      $header.css({ backgroundColor: color });
    }
  }

  $window.scroll(onScroll);
});

*/


/*

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

*/





