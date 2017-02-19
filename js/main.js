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

$("#btn-gallery").click(function(e) {
  $(".gallery-hidden").slideToggle();
  e.preventDefault();
});

$("#btn-blog").click(function(e) {
  $(".blog-hidden").slideToggle();
  e.preventDefault();
});
