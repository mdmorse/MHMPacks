$(function() {
	

	// $('.pack-image').mouseenter(function(){
	// 	$(this).animate({'marginTop' : '-=75px'})
		
	// });
	
	// $('.pack-image').mouseleave(function(e){
	// 	$(this).animate({'marginTop' : '+=75px'});
	// });


     var original = [];
    $('.pack-image').each(function (i) {
        original.push($(this).css('margin-top'));
    });
    $('.pack-image').hover(function (e) {
        $(this).stop().animate(
            {"margin-top" : (
                $(this).parent().outerHeight() - 
                $(this).outerHeight()
            )},
            250
        );
    }, function (e){
        var i = $('.pack-image').index($(this));
        $(this).stop().animate(
            {"margin-top": original[i]},
            250
        );
    });
	
		

});