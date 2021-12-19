$(document).ready(function() {
    "use strict";

    $('.header .header-content .menu-icon .hamburger').on('click', function() {
        $(this).fadeOut(150);
        $('.header .header-content .menu-icon .cross').fadeIn(150);
        $('.header-menu').addClass('active');
    })

    $('.header .header-content .menu-icon .cross').on('click', function() {
        $(this).fadeOut(150);
        $('.header .header-content .menu-icon .hamburger').fadeIn(150);
        $('.header-menu').removeClass('active');
    })
});