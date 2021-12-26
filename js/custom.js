$(function() {
    new WOW().init();
});

$(function() {
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
        }
    });
});

$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true
    });
});

$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});

$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

// Show/Hide transparent black navigation and back-to-top button
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function() {
    $("a.smooth-scrolling").click(function(event) {
        event.preventDefault();

        // get/return id like #about
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top -64
        }, 1250, "easeInOutExpo");
    });
});

// Close Mobile Menu on Click
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggle").click();
    });
});