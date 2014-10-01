(function(){
	$(window).load(function() {});
	$(document).ready(function() {
		$('.carousel a.carousel-control').on('click', function() {
			$(this).blur();
		});
		$('.image-item img').on('click', function() {
			var image = $(this).attr('src');
			$('#galleryModal img').attr('src', image);
			$('#galleryModal').modal('show');
		})
	});
})();

