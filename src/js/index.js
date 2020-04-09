// Main js file

$(function () {

  // Initialize sliders
  $('.carousel--banner').slick({
    dots: true,
    dotsClass: 'carousel__dots',
    arrows: false,
    autoplay: false,
    autoplaySpeed: 7000,
  });
  
  // $('.carousel__wrap-2').slick({
  //   arrows: false,
  //   asNavFor: '.carousel__wrap-3',
  //   dots: true,
  //   dotsClass: 'carousel__dots',

  //   responsive: [{
  //     breakpoint: 576,
  //     settings: {
  //       autoplay: true,
  //       autoplaySpeed: 7000
  //     }
  //   }]
  // });
  
  // $('.carousel__wrap-3').slick({
  //   arrows: true,
  //   appendArrows: $('.carousel__arrows'),
  //   nextArrow: $('#arrNext-1'),
  //   prevArrow: $('#arrPrev-1'),
  //   asNavFor: '.carousel__wrap-2',
  //   cssEase: 'linear',
  //   speed: 500,
  //   fade: true,

  //   responsive: [{
  //     breakpoint: 575.98,
  //     settings: {
  //       arrows: false
  //     }
  //   }]
  // })
});