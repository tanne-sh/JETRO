$(function() {
  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true
  });

  $(".slider-carousel").slick({
    lazyLoad: "ondemand",
    slidesToShow: 6,
    asNavFor: ".slider__inner",
    dots: false,
    arrows: false,
    centerMode: false,
    infinite: true,
    focusOnSelect: true
  });
});
