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

// 身体
	  var mySwiper = new Swiper('.banner',{
	  	mousewheelControl : true,
	  	direction: 'vertical',
	  	height : window.innerHeight,
	  	simulateTouch : false,
		// effect : 'fade',
		// fade: {
		//   crossFade: false,
		// }	
	  });
// 身体
// 分享
		$('#wrap li').eq(3).css('width',$('.CattleSharing').width()-$('#wrap li').width()*3)

		$('#wrap li').mouseover(function(){
			if(!$(this).hasClass('curr')){
				$('#wrap li').removeClass('curr');
				$(this).addClass('curr');

				// 切换背景
				$('#wrap li').each(function(index){
					if($(this).hasClass('curr')){
						$('.bg').fadeOut(300);
						$('.bg:eq(' + index + ')').fadeIn(500);
					}
				});

				$('.curr').stop().animate({
					width: $('.CattleSharing').width()-$(this).width()*3
				}, 500, 'linear');
				$('#wrap li').not('.curr').stop().animate({
					width: 100
				}, 500, 'linear');
			}
		});

		// 推荐
		var Swiper1 = new Swiper('.case_one', {
		    simulateTouch : false,
			loop : true,
			effect : 'fade',
			fade: {
			  	crossFade: false,
			}
		})

		var Swiper2 = new Swiper('.case_two', {
			autoplay: 5000,//可选选项，自动滑动
			loop : true,
			effect : 'coverflow',
			slidesPerView: 3,
			centeredSlides: true,
			onTransitionStart: function(swiper){
				Swiper1.slideTo(swiper.activeIndex-2,600,false)
			}
		})
		$('.swiper_left').click(function(){
			Swiper2.slidePrev();
		})
		$('.swiper_right').click(function(){
			Swiper2.slideNext();
		})


		$('.swiper_bottton').on('mouseenter',function(ev){
			var _this=$(this);
			var ev = ev || window.event;
			$(this).append('<div class="b_C" style="position:absolute"></div>')
			_this.find(".b_C").css({'left':ev.clientX-$(this).offset().left,'top':ev.clientY-$(this).offset().top})
			var b_C_r = Math.sqrt(Math.pow($(this).width(),2)+Math.pow($(this).height(),2),2)
			_this.find(".b_C").animate({width:b_C_r*2,height:b_C_r*2},300)
		});

		$('.swiper_bottton').on('mouseleave',function(ev){
			var _this=$(this);
			var ev = ev || window.event;
			_this.find(".b_C").css({'left':ev.clientX-$(this).offset().left,'top':ev.clientY-$(this).offset().top})
			_this.find(".b_C").animate({width:'0px',height:'0px'},300)
			setTimeout(function(){
				_this.find(".b_C").remove();
			},300);
		})

// 分享




	
// 	$('.volume').click(function(){
// 		$('.Volume_block').toggle()
// 	})

// // 播放
// 	var $audio=$('#audio')[0];

// 	$('.Play_pause').click(function(){
// 		if ($audio.paused) {
// 			$audio.play();
// 		} else {
// 			$audio.pause();
// 		}
// 	})
// // 播放

// // 进度条
// 	$('.Progress_point').mousedown(function(e){
// 		$(document).mousemove(function(e){
// 			var dix = e.pageX - $('.Time_bar').offset().left;
// 			if (dix >= 0 && dix <= $('.Time_bar').width()) {
// 				$('.Progress_point').css('left',dix-10)
// 				Progress_bar();
// 			}
// 			var scale = parseInt($('.Progress_point').css('left'))/($('.Time_bar').width());
// 			$audio.currentTime = $audio.duration*scale;
// 		});
// 	});
// 	$(document).mouseup(function(){
// 		$(this).unbind('mousemove');
// 	})


// 	function Progress_bar(){
// 		var pb_w = parseInt($('.Progress_point').css('left'))
// 		$('.Progress_bar').css('width',pb_w+10)
// 	}

// 	$('.Time_bar').click(function(e){
// 		var dix = e.pageX-$(this).offset().left;
// 		$('.Progress_point').css('left',dix-10)
// 			var scale = parseInt($('.Progress_point').css('left'))/($('.Time_bar').width());
// 		$audio.currentTime = $audio.duration*scale;
// 	})


// // 进度条
// // 
// // 时间
// 	time = setInterval(function(){
// 		Progress_bar()
// 		// $('.Progress_point').css('left',$audio.currentTime/$audio.duration*$('.Time_bar').width()-10+'px')
// 		$('.When_long em').text(toTime(Math.floor($audio.currentTime)))
// 		$('.When_long span').text(toTime(Math.floor($audio.duration)))
// 	},1000)

// 	function toTime(iNum){
// 		var M = addZero(Math.floor(iNum%3600/60))
// 		var S = addZero(Math.floor(iNum%60))

// 		return M+':'+S;
// 	}
// 	function addZero(num){
// 		if (num<10) {
// 			return '0'+num;
// 		} else {
// 			return ''+num;
// 		}
// 	}


// // 时间

})

