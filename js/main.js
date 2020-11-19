$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#intro-section").position().top) {
        $('body').css('background', $("#intro-section").attr("data-color"));
    };
    if ($(document).scrollTop() > $("#work-section").position().top) {
        $('body').css('background', $("#work-section").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#banners").position().top) {
        $('body').css('background', $("#banners").attr("data-color"))
    };
    if ($(document).scrollTop() > $("#websites").position().top) {
        $('body').css('background', $("#websites").attr("data-color"))
    };
    if ($(document).scrollTop() >= $("#contact-section").position().top) {
        $('body').css('background', $("#contact-section").attr("data-color"))
    };
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 1
    }, 800);
});
