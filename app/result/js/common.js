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

  $('.overlay').click(function () {    
    $(this).fadeOut();
    $('.servmnu').fadeOut();
  });

  $('.serv-col-1-int-l, .serv-close').click(function (e) {
    $('.overlay, .servmnu').fadeOut();
  });
  
  $('.servs-js').click(function (e) {
    $('.overlay, .servmnu').fadeIn();
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });

  $('.catfilter-it').each(function () {
    let tit = $(this).find('.catfilter-tit');
    let cont = $(this).find('.catfilter-cont');
    tit.click(function (e) {
      e.preventDefault();
      $(this).toggleClass('hide');
      cont.toggleClass('hide');
    });
  });



  $('.lfilter-it').each(function () {
    let tit = $(this).find('.lfilter-tit');
    let cont = $(this).find('.lfilter-cont');
    tit.click(function (e) {
      e.preventDefault();
      $(this).toggleClass('hide');
      cont.toggleClass('hide');
    });
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

  
  $('.teasers-actions-sort-link').click(function (e) {
    e.preventDefault();
    $('.teasers-actions-sort-link').removeClass('active');
    $(this).addClass('active');
    if ( $(this).hasClass('teasers-actions-sort-link-row')) {
      $('.cat-teasers-row').addClass('cat-teasers-row-row');
    }
    else {
     $('.cat-teasers-row').removeClass('cat-teasers-row-row'); 
   }
 });


/*  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }*/

  $('[data-fancybox="gallery-1"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });

  $('.card-thumb').click(function (e) {
    e.preventDefault();
    $('.card-thumb').removeClass('active');
    const href = $(this).attr('href');  
    $('.card-slide-image').attr('src', 'img/black-bg.png');
    setTimeout(function () {
      $('.card-slide-image').attr('src', href);
    }, 150);
    $('.card-slide-image-w').attr('href', href);
    $(this).addClass('active');
  });




  $('[data-fancybox="gallery-2"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });








//////////////////////////////////////////////////////
}); //ready


//RANGE
const priceSlider = document.querySelector('.price__range');
if (priceSlider) {

  //let textFrom = priceSlider.getAttribute('data-from');
  let textTo = priceSlider.getAttribute('data-to');

  noUiSlider.create(priceSlider, {
    start: [60000, 236300],
    connect: true,
    tooltips: [wNumb({ decimals: 0, prefix: '₽' + '' }), wNumb({ decimals: 0, prefix: '₽' + '' })],
    range: {
      'min': [0],
      'max': [300000]
    }    
  });

  }// if priceSlider