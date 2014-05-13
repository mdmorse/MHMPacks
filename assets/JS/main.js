$(function() {
	

	$('.pack-image').mouseenter(function(e){
		e.preventDefault();
		$(this).animate({
			'marginTop' : '-=75px'
		});
	});
	$('.pack-image').mouseleave(function(e){
		e.preventDefault();
		$(this).animate({
			'marginTop' : '+=75px'
		});
	});


		

});