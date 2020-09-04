$(".nav__item-link").on("click", function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    if(top > 0 ){
        $('body,html').animate({scrollTop: top}, 1500);
    }
});

$(".mobile-menu__link").on("click", function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    if(top > 0 ){
        $('.wrapper').toggleClass('mobile-menu-active');
        $('body,html').animate({scrollTop: top}, 1500);
    }
});