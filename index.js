/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    'use strict';
    var tab = $('.content .tab ul li'),
        toggleList = $('.content .dataul .datali > h3');
    
    // Data Tab =======================================================================
    tab.on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        if (!$($(this).data('tab')).is(':visible')) {
            $('.content .data .dataul .datali').hide();
            $($(this).data('tab')).fadeIn();
        }
        if ($(window).innerWidth() >= 949) {
            $('html, body').animate({
                scrollTop: $('.content').offset().top
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $('.data').offset().top
            }, 500);
        }
        if ($(this).data('tab') === '.details') {
            if (!$('.content .dataul .datali > ul').is(':visible')) {
                toggleList.first().next('ul').slideDown();
            }
        }
    });
    
    // Toggle List ====================================================================
    toggleList.on('click', function () {
        $('.content .dataul .datali > ul').slideUp();
        if ($(this).next('ul').is(':visible')) {
            $(this).next('ul').slideUp();
        } else {
            $(this).next('ul').slideDown();
        }
    });
    
    // Go Down ========================================================================
    $('.arrow').click(function () {
        $('html, body').animate({
            scrollTop: $('.content').offset().top
        }, 750);
    });
});