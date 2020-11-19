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


$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top + 10
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});
