(function(){
	$(window).load(function() {});
	$(document).ready(function() {
		$('.carousel a.carousel-control').on('click', function() {
			$(this).blur();
		})
	});
})();

