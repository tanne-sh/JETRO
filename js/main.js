$(function() {
  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    asNavFor: ".thumbs"
  });

  $(".thumbs").slick({
    lazyLoad: "ondemand",
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: ".slider__inner",
    dots: false,
    arrows: false,
    centerMode: false,
    infinite: true,
    focusOnSelect: true,
    variableWidth: true
  });
});
