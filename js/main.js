$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#intro-section").position().top) {
        $('body').css('background', $("#intro-section").attr("data-color"));
    };
    if ($(document).scrollTop() > $("#work-section").position().top) {
        $('body').css('background', $("#work-section").attr("data-color"))
    };
//    if ($(document).scrollTop() > $("#three").position().top) {
//        $('body').css('background', $("#three").attr("data-color"))
//    };
//    if ($(document).scrollTop() > $("#four").position().top) {
//        $('body').css('background', $("#four").attr("data-color"))
//    };
//    if ($(document).scrollTop() >= $("#five").position().top) {
//        $('body').css('background', $("#five").attr("data-color"))
//    };
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
                scrollTop: $(hash).offset().top + 5
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});
