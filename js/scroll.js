$(".nav__item-link, .mobile-menu__link").on("click", function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    if(top > 0 ){
        $('body,html').animate({scrollTop: top}, 1500);
    }
});