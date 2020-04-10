
$(function () {

  // Initialize sliders
  $('.carousel--banner').slick({
    dots: true,
    dotsClass: 'carousel__dots',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $('#carousel-1').slick({
    arrows: true,
    appendArrows: $('.carousel-arrows--best'),
    nextArrow: $('#arrNext-1'),
    prevArrow: $('#arrPrev-1'),
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  });

  $('#carousel-2').slick({
    arrows: true,
    appendArrows: $('.carousel-arrows--latest'),
    nextArrow: $('#arrNext-2'),
    prevArrow: $('#arrPrev-2'),
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  });

  $('#carousel-3').slick({
    arrows: true,
    appendArrows: $('.carousel-arrows--news'),
    nextArrow: $('#arrNext-3'),
    prevArrow: $('#arrPrev-3'),
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  });
});