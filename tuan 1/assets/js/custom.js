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

$('.multiple-items-news').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.prev-news',
  nextArrow: '.next-news',
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

$('.contact-button-toggle').click(function(e) {
  e.preventDefault();
  if($('.contact-button').hasClass('active')) {
      $('.contact-button').removeClass('active')
  } else {
    $('.contact-button').addClass('active')
  }
})