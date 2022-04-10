(function () {
    'use strict';

    $('.nav-bottom nav .navbar-toggle .icon-toggle i').on('click', function () {
        $('.nav-bottom nav .menu-collapse').css('left', 0);
    });

    $('.nav-bottom nav .navbar-nav .nav-item.icon-close i').on('click', function () {
        $('.nav-bottom nav .menu-collapse').css('left', -260);
    });
	$('.breadcrumbs-hero .more-collapse').on('click', function () {
		$('.breadcrumbs-hero .more-collapse').toggleClass('active')
		if( $('.breadcrumbs-hero .more-collapse i').hasClass('fa-plus') ){
			$('.breadcrumbs-hero .more-collapse i').removeClass('fa-plus').addClass('fa-minus')
		} else {
			$('.breadcrumbs-hero .more-collapse i').addClass('fa-plus')
		}
		$('.breadcrumbs-hero .info-breadcrumbs').toggleClass('collapsed');
    });
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });
	$('.links-box li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    (function () {
        var fixedButton = $('.btn-top-fixed');
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1000) {
                fixedButton.fadeIn(1000);
            } else {
                fixedButton.fadeOut(1000);
            }
        });
        fixedButton.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
        });
    }());
    
}());