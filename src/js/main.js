/**
 * Main
 * Custom Scripts
 */

$(function() {
	// Document Ready

	setTimeout(function(){
		$('.progressive-image').progressiveImage();
	}, 400);

	setTimeout(function(){
		AOS.init({
			offset: 20,
			duration: 800,
			easing: 'linear'
		});
	}, 500);

	$(window).on('resize', function(){
		$('.progressive-image').progressiveImage();
		AOS.init();
	});
})

$(window).smartresize(function() {
	// Debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
});
