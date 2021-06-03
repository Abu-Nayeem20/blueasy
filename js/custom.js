(function ($) {
  'use strict';




  // isotop plugin

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

 var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
});


$('.blue-buttons button').on('click',function () {
  
  $('.blue-buttons button').removeClass('active');
  $(this).addClass('active');
});

$("html").on("mouseover",function () {
  
  $(".blue-twiter-link a i").animate({"fontSize" : "40px"});
  $(".blue-twiter-link a i").animate({"fontSize" : "30px"});
   $(".blue-twiter-link a i").animate({"fontSize" : "40px"});

});

$(window).scroll(function () {
  
  var goTop = $(window).scrollTop();

  if (goTop > 600) {

    $(".scrll").css({'opacity' : '1'});
  }
  else {

    $(".scrll").css({'opacity' : '0'});
  }

});

$(".scrll").on("click", function () {
  
  $('html').animate({'scrollTop' : '0'},2000);

});

// This Functions For Responsive Menu 

$(".responsive-menu-bar").on("click",function () {
  
  if ($(".blue-menu").slideDown()) {
 
 $(".responsive-menu-bar").css({'display' : 'none'});
 $(".responsive-menu-bar-close").css({'display' : 'block'});

}
});

$(".responsive-menu-bar-close").on("click",function () {
  
  if ($(".blue-menu").slideUp()) {
 
 $(".responsive-menu-bar-close").css({'display' : 'none'});
 $(".responsive-menu-bar").css({'display' : 'block'});

}
});










})(jQuery);













