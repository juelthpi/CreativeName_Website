
(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*START PRELOADED*/
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });
        /*END PRELOADED*/
        /*START MENU HIDE*/
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU HIDE*/

        /*START BOOTSTRAP SCROLL-SPY*/
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        /*END BOOTSTRAP SCROLL-SPY*/

        /*START CHANGE MENU BACKGROUND JS*/
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*END CHANGE MENU BACKGROUND JS*/

        /*START SMOOTH SCROLL JS*/
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
        /*END SMOOTH SCROLL JS*/

        /*START SCROLL TO UP*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        /*END SCROLL TO UP*/

    });

})(jQuery);