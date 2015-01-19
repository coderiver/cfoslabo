head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	//btn-to top
	$('.js-btn-up').click(function() {
		$('html, body').animate({scrollTop: $('html').offset().top}, 700);
		return false;
	});
	//size
	$('.fontsize-small').on('click', function() {
		if ($(this).hasClass('is-active')) {
		}
		else {
			$('.size__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('body').addClass('is-small');
			$('body').removeClass('is-medium');
			$('body').removeClass('is-large');
		};
		return false;
	});
	$('.fontsize-medium').on('click', function() {
		if ($(this).hasClass('is-active')) {
		}
		else {
			$('.size__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('body').addClass('is-medium');
			$('body').removeClass('is-small');
			$('body').removeClass('is-large');
		};
		return false;
	});
	$('.fontsize-large').on('click', function() {
		if ($(this).hasClass('is-active')) {
		}
		else {
			$('.size__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('body').addClass('is-large');
			$('body').removeClass('is-medium');
			$('body').removeClass('is-small');
		};
		return false;
	});
	//color
	$('.color-black').on('click', function () {
		if ($(this).hasClass('is-active')) {
		}
		else {
			$('.color__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('body').addClass('is-black');
			$('body').removeClass('is-blue');
			$('body').removeClass('is-normal');
		};
		return false;
	});
	$('.color-blue').on('click', function () {
		if ($(this).hasClass('is-active')) {
		}
		else {
			$('.color__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('body').addClass('is-blue');
			$('body').removeClass('is-black');
		};
		return false;
	});
	$('.color-normal').on('click', function () {
		if ($(this).hasClass('is-active')) {
		}
		else {
			$('.color__item').removeClass('is-active');
			$(this).addClass('is-active');
			$('body').removeClass('is-blue');
			$('body').removeClass('is-black');
		};
		return false;
	});
});