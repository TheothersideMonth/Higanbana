$(function(){
	var $Underline = $('#Title_Underline');
	var $Cat_a = $('#category li')

	$Underline.css({'width':$Cat_a.eq(0).width(),'left':$Cat_a.eq(0).offset().left,'opacity':'1'})
	$Cat_a.click(function(e){
		var Hexadecimal = Math.round(Math.random()*1000000) + '';
		if (Hexadecimal.length<6) {
			var Defect = 6-Hexadecimal.length;
			for (var i = 0; i < Defect; i++) {
				Hexadecimal="0"+ Hexadecimal
			}
		}

		$Underline.css({'width':$(this).width(),'left':$(this).offset().left,'opacity':'1','background':'#'+6-Hexadecimal})
	})
	  var mySwiper = new Swiper('.swiper-container',{
	  	pagination: '.swiper-pagination',
	  	nextButton: '.swiper-button-next',
	  	prevButton: '.swiper-button-prev',
	  	paginationClickable :true,
	  	simulateTouch : false,
	    loop: true,
		autoplay: 3000,
		effect : 'fade',
		fade: {
		  crossFade: false,
		}
	  });
})

