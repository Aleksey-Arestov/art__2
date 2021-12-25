$(document).ready(function () {
	$('.slider').slick({

		arrows: true,
		dots: true,
		adaptiveHeight: true

	});

});


$('article').readmore({
	moreLink: '<a href="#">Подробнее</a>',
	lessLink: '<a href="#">Скрыть</a>',
	maxHeight: 0,
	speed: 500,
	embedCSS: true
});

$('a[href^="#social"]').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 600);
});