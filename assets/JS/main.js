$(function() {
	

	$('.pack-image').mouseenter(function(){
		$(this).animate({'marginTop' : '-=75px'})
		$(this).find('.bonus-details').slideDown(452);
	});
	
	$('.pack-image').mouseleave(function(e){
		$(this).animate({'marginTop' : '+=75px'});
		$(this).find('.bonus-details').slideUp();
	});



	
		

});