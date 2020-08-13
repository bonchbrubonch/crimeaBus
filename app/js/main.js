$(function(){

  $('.slider-shares').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider-about, .slider-information').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  });
  
  $('.slider-recall').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true
        }
      }
    ]
  });
  
  $(".acordeon-questions .acordeon-questions__text").hide().prev().click(function () {
    $(this).parents(".acordeon-questions").find(".acordeon-questions__text").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
  });
  
$(".header__burger").on("click", function(){
  $(".header__burger").toggleClass("active")
  $(".menu").slideToggle();
});
  
});