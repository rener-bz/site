$(document).ready(function () {
 $('.hamburger').on('click touchstart', function (e) {
        $('.hamburger').toggleClass('is-active');
        $('html').toggleClass('menu-active');
        e.preventDefault();
    });

    $(window).bind('scroll', function () {
		if ($(window).scrollTop() > $('.home-banner').height()) {
			$(".bannerMenu_fixo").fadeIn('slow');
		}else if ($(window).scrollTop() < $('.home-banner').height()) {
			$(".bannerMenu_fixo").fadeOut('slow');
        }
	});
});