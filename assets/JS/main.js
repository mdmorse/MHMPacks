$(function() {
	

     var original = [];
    $('.pack-image').each(function () {
        original.push($(this).css('margin-top'));
    });
    $('.pack-image').hover(function () {
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