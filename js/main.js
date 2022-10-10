jQuery(window).load(function() {
    // USE STRICT
    "use strict";
    /***********************************/
    /*           Dre Preloader            */
    /***********************************/
    jQuery(".dre-preloader").fadeOut(500);
    /***********************************/
    /*        Portfolio  Isotope       */
    /***********************************/
    if ($('.work-items').length) {
        var $elements = $('.work-items');
        $elements.isotope();
        $('.portfolio-filter ul li').on('click', function() {
            $('.portfolio-filter ul li').removeClass('sel-item');
            $(this).addClass('active-item');
            var selector = $(this).attr('data-filter');
            $(".work-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
        });
    }
    /***********************************/
    /*     Scroll To Part of Page      */
    /***********************************/
    $("a").on('click', function(event) {
        // USE STRICT
        "use strict";
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
            event.preventDefault();
        }
    });
    /***********************************/
    /* Close Mobile Menu on Side Click */
    /***********************************/
    $('.nav-btn').on('click', function() {
        $('.collapse').collapse('hide');
        $("#menu-nav-btn").toggleClass("active");
    });
    /***********************************/
    /*            Menu icon            */
    /***********************************/
    $('#menu-nav-btn').on('click', function() {
        // USE STRICT
        "use strict";
        if ($('#menu-nav-btn').attr('aria-expanded') === "false") {
            $('#menu-nav-btn').addClass('active');
        } else if ($('#menu-nav-btn').attr('aria-expanded') === "true") {
            $('#menu-nav-btn').removeClass('active');
        }
    });
    /***********************************/
    /*        Initalise wow.js         */
    /***********************************/
    $(function() {
        // USE STRICT
        "use strict";
        new WOW().init();
    });
    /***********************************/
    /*          Contact Form           */
    /***********************************/
    $(function() {
        // USE STRICT
        "use strict";
        var form = $('#contact-form');
        var formMessages = $('#form-messages');
        $(form).submit(function(e) {
            e.preventDefault();
            var formData = $(form).serialize();
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function(response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                })
                .fail(function(data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });
});
/***********************************/
/*    Shrink Navbar After Scroll   */
/***********************************/
$(window).scroll(function() {
    // USE STRICT
    "use strict";
    if ($(document).scrollTop() > 70) {
        $('.navbar-default').addClass('shrink');
    } else {
        $('.navbar-default').removeClass('shrink');
    }
});