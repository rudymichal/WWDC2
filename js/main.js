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

var sections = document.querySelectorAll('section');
var navbar = $('.navbar');

function scrollSection() {
  for(var i=0; i<sections.length; i++) {
    var section = sections[i];
    var offset = section.getBoundingClientRect();
    var bottom = offset.top + offset.height;
    var top = offset.top - navbar.outerHeight();

    if (top < 0 && bottom > 0) {
      navbar.css({'background-color': section.dataset.color});
    }
  }
}

window.addEventListener('scroll', scrollSection);


