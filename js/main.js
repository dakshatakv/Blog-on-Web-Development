$(document).ready(function () {
    "use strict";

    $(this).scrollTop(0);

    AOS.init();

    $('.accordion .collapse').collapse();

    var owl1 = $('.brand-slider .owl-carousel');
    owl1.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
                loop: true
            }
        }
    });
    $('.play').on('click', function () {
        owl1.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl1.trigger('stop.owl.autoplay')
    });


    var owl2 = $('.testi-slider .owl-carousel');
    owl2.owlCarousel({
        items: 3,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 1,
                loop: true
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    });


    var owl3 = $('.block-slider .owl-carousel');
    owl3.owlCarousel({
        items: 3,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 2,
                loop: true
            },
            1000: {
                items: 3,
                loop: false,
                mouseDrag: false,
            },
        }
    });


    // These are the options that I'm going to be using on each statistic
    /* var options = {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
    }; */

    /*
    // Find all Statistics on page, put them inside a variable
    var statistics = $(".statistic");

    // For each Statistic we find, animate it
    statistics.each(function (index) {
        // Find the value we want to animate (what lives inside the p tags)
        var value = $(statistics[index]).html();
        // Start animating
        var statisticAnimation = new CountUp(statistics[index], 0, value, 0, 25, options);
        statisticAnimation.start();
    });
    */


})