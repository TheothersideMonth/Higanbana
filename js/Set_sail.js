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


	  var mySwiper = new Swiper('.banner',{
	  	mousewheelControl : true,
	  	direction: 'vertical',
	  	height : window.innerHeight,
	  	simulateTouch : false,
	  });

	  var mySwiper = new Swiper('.case',{
	  	pagination: '.case .swiper-pagination',
	  	nextButton: '.case .swiper-button-next',
	  	prevButton: '.case .swiper-button-prev',
	  	paginationClickable :true,
	  	simulateTouch : false,
	    loop: true,
		autoplay: 3000,
		effect : 'fade',
		fade: {
		  crossFade: false,
		}
	  });




	
	$('.volume').click(function(){
		$('.Volume_block').toggle()
	})

// 播放
	var $audio=$('#audio')[0];

	$('.Play_pause').click(function(){
		if ($audio.paused) {
			$audio.play();
		} else {
			$audio.pause();
		}
	})
// 播放

// 进度条
	$('.Progress_point').mousedown(function(e){
		$(document).mousemove(function(e){
			var dix = e.pageX - $('.Time_bar').offset().left;
			if (dix >= 0 && dix <= $('.Time_bar').width()) {
				$('.Progress_point').css('left',dix-10)
				Progress_bar();
			}
			var scale = parseInt($('.Progress_point').css('left'))/($('.Time_bar').width());
			$audio.currentTime = $audio.duration*scale;
		});
	});
	$(document).mouseup(function(){
		$(this).unbind('mousemove');
	})


	function Progress_bar(){
		var pb_w = parseInt($('.Progress_point').css('left'))
		$('.Progress_bar').css('width',pb_w+10)
	}

	$('.Time_bar').click(function(e){
		var dix = e.pageX-$(this).offset().left;
		$('.Progress_point').css('left',dix-10)
			var scale = parseInt($('.Progress_point').css('left'))/($('.Time_bar').width());
		$audio.currentTime = $audio.duration*scale;
	})


// 进度条
// 
// 时间
	time = setInterval(function(){
		Progress_bar()
		// $('.Progress_point').css('left',$audio.currentTime/$audio.duration*$('.Time_bar').width()-10+'px')
		$('.When_long em').text(toTime(Math.floor($audio.currentTime)))
		$('.When_long span').text(toTime(Math.floor($audio.duration)))
	},1000)

	function toTime(iNum){
		var M = addZero(Math.floor(iNum%3600/60))
		var S = addZero(Math.floor(iNum%60))

		return M+':'+S;
	}
	function addZero(num){
		if (num<10) {
			return '0'+num;
		} else {
			return ''+num;
		}
	}


// 时间

})

