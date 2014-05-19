$(function() {
	
	//***************************slide up to reveal pack overview and action buttons in main body*****************************
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
    }, function (){
        var i = $('.pack-image').index($(this));
        $(this).stop().animate(
            {"margin-top": original[i]},
            250
        );
    });
    //*********************navigation arrows rotation animation and toggle class***************************
   $('.arrow-down').click(function(){
        $('.arrow-down').toggleClass('.original-position');
        TweenLite.to($(':not(.original-position)'), .20, {rotation:0});
        $('.show-js').slideToggle('fast').toggleClass('showing');
        if(!$('.show-js').hasClass('showing')){
            TweenLite.to($(this), .20, {rotation:0});
            $('nav a').css('color','#161717');
            $(this).css('border-top', '5px solid #161717');
        }else{
            TweenLite.to($(this), .20, {rotation:180});
            TweenLite.to($('.showing').siblings(), .20, {rotation: 0});
            $(this).closest('nav a').css('color','#4C69A1');
            $(this).css('border-top', '5px solid #4C69A1');
        }
    });

   
	
		

});