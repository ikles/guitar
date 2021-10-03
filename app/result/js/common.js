jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });

$('.mnu-close').click(function () {
  
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
  
})


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/


  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });


  $('.tabs-control-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.tabs-control-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-2 .tabs_control_item'),
    contentItem = $('.tabs_content-2 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });



  if($('.carous').length) {
    $('.carous').slick({  
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 1,   
   });
  }

  if($('.pop-cat-w').length) {
    $('.pop-cat-w').slick({  
      dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 4,   
     responsive: [

     {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1
      }
    },
    ]
  });
  }


/*
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  variableWidth: true,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: true
  */



  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });




  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  //$('select').fancySelect();

}); //ready

