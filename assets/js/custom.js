$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
  });

//   $('.slider-wrap').each(function (index, sliderWrap) {
//     var $slider = $(sliderWrap).find('.slider');
//     var $next = $(sliderWrap).find('.next');
//   var $prev = $(sliderWrap).find('.prev');
//     $slider.slick({
//         dots: true,
//       slidesToShow: 2.5,
//         nextArrow: $next,
//       prevArrow: $prev
//     });
// });