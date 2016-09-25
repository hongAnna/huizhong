/***导航******/
$('.nav li,.nav dd').mouseenter(function(){
	if(this.nodeName=="DD"){
		$(this).children('a').addClass('navDdCur');
	}
	$(this).children('.navDl').fadeIn();
}).mouseleave(function(){
	if(this.nodeName=="DD"){
		$(this).children('a').removeClass('navDdCur');
	}
	$(this).children('.navDl').fadeOut();
});


/****banner*********/
	$('.banner').mouseenter(function(){
		$('.left,.right').fadeIn();
		clearInterval(autoBanner);
	});
	$('.banner').mouseleave(function(){
		$('.left,.right').fadeOut();
		setInterval(function(){
			$('.right').click();
		},3000);
	});
	$('.banner span').mouseenter(function(){
		if($(this).hasClass('current'))
			return;
		var newPos=$(this).index();//当前位置
		var oldPos=$('.current').index();//之前位置
		fade(oldPos,newPos);
		
	});
	 function fade(oldPos,newPos){
		$('.flash_main li').stop(false,true);
		$('.banner_btn span').eq(newPos).addClass('current').siblings('span').removeClass('current');
	
		$(".banner_main li").eq(newPos).fadeIn();
		$(".banner_main li").eq(oldPos).fadeOut();
		
	}
	$('.right').click(function(){
		var oldPos=$('.current').index();
		var lastPos=$('.banner_btn span:last').index();
		var newPos=oldPos==lastPos?0:oldPos+1;
		fade(oldPos,newPos);
	});
	
	$('.left').click(function(){
		var oldPos=$('.current').index();
		var lastPos=$('.banner_btn span:last').index();
		var newPos=oldPos==0?lastPos:oldPos-1;
		fade(oldPos,newPos);
	});
	
	var autoBanner=setInterval(function(){
		$('.right').click();
	},3000);
	
	
	/******flash*******/
	$('.flash_main dl').each(function() {//遍历得到dl
        $(this).mouseenter(function(){
			var num=$(this).index()+1;//样式编码位置
			$(this).addClass('cur').siblings('dl').removeClass('cur');
			$(this).addClass('f'+num+'_cur');
			$(this).animate({width:'342px'},500);
			$('.flash_main dl').each(function() {//遍历得到样式
                var i=$(this).index()+1;
				if(num!=i){
					$(this).stop();
					$(this).removeClass('f'+i+'_cur');
					$(this).animate({width:'0px'},500);
				}
            });
		});
    });
    
    /*about*/
   	/*about_left*/
	$(".about_left").mouseenter(function(){
		$(this).find("img").animate({width:"580px",height:"265px",margin:"0 -20px  "},300);
		$(".WZ").animate({top:0},500);
	});
	$(".about_left").mouseleave(function(){
		$(this).find("img").animate({width:"490px",height:"240px",margin:"0px"},300);
		$(".WZ").animate({top:'241px'},500);
	});
	/*about_right*/
   /*关于右边*/
	$('.b_right').click(function(){
		var firstLi=$('.aboutUl li:first');
		$('.aboutUl').append(firstLi);
	});
	$('.b_left').click(function(){
		var lastLi=$('.aboutUl li:last');
		$('.aboutUl').prepend(lastLi);
	});
	
	
	/*firend*/
	var liW=138;
	$('.f_left').click(function(){
	$('.firend_link li:first').animate({marginLeft:-liW+'px'},200,function(){
		   $('.firend_link ul').append($(this));
		   $(this).css('margin-left','0px');
	 });
	});
	$('.f_right').click(function(){
		$('.firend_link li:last').css('margin-left',-liW+'px');
		$('.firend_link ul').prepend($('.firend_link li:last'));
		$('.firend_link li:first').animate({marginLeft:'0px'},200);
	});

		
	/***置顶****/
	var toTopNode=$('.main_top');
	toTopNode.click(function(){
		$('html,body').animate({scrollTop:0},200,function(){$('.main_top').fadeOut();});
		var winH=parseInt($(window).height());
		$(window).scroll(function(){
		var scrollH=$(this).scrollTop();
		if(scrollH>=winH)
		{
			$('.main_top').fadeIn();
		}else{
			$('.main_top').fadeOut();
		}
		
		});
	});		

	/***list****/
	$('.list_nav li').click(function(){
		$(this).addClass('listCur').siblings('.listCur').removeClass('listCur');
		//alert(this.getAttribute("data"));
		var className=$(this).attr("data");
		//console.log(className);
		if(className=="*")
			$('#list ul').children(className).slideDown();
		else{
			$('#list ul').children(className).slideDown();
			$('#list ul').children(className).siblings('li:not('+className+')').slideUp();
			}	
	});
		
