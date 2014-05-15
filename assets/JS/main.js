$(function() {
	

	$('.pack-image').mouseenter(function(){
		$(this).animate({'marginTop' : '-=75px'})
	});
	
	$('.pack-image').mouseleave(function(e){
		$(this).animate({'marginTop' : '+=75px'});
	});


		

});