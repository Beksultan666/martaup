$(function(){
    $('.header-slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        dotsClass: 'header-dots',
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    })
});