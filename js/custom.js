/*-----------------------------------------------------------
* Responsive Bootstrap 4 Personal

*------------------------------------------------------------
*/

! function($) {
    "use strict";

    var DannyApp = function() {};

    //scroll
    DannyApp.prototype.initStickyMenu = function() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    },

    //Smooth
    DannyApp.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    //Scrollspy
    DannyApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    //Typed
    DannyApp.prototype.initTextType = function() {
        $(".element").each(function() {
            var $this = $(this);
            $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                backDelay: 3000
            });
        });
    },

    //Work
    DannyApp.prototype.initWork = function() {
        $(window).on('load', function () {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click",function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    },

    //Magnificpop
    DannyApp.prototype.initMagnificPopup = function() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },

    //Client
    DannyApp.prototype.initTestimonial = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 7000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    //PRELOADER
    DannyApp.prototype.initPreloader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    DannyApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTextType();
        this.initWork();
        this.initMagnificPopup();
        this.initPreloader();
        this.initTestimonial();
    },
    //init
    $.DannyApp = new DannyApp, $.DannyApp.Constructor = DannyApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.DannyApp.init();
}(window.jQuery);