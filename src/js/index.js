//轮播图
;function lunbo(){
	var index = 0;
	$('.bannerBtn p').eq(index).animate({width:235},4000);
	var timer = setInterval(function(){
		$('.bannerBtn p').eq(index).animate({width:0},0);
		$('.banner a').eq(index).fadeOut(800);	
		index==$('.banner a').length-1 ? index=0:index++;
		$('.bannerBtn p').eq(index).animate({width:235},4000);
		$('.banner a').eq(index).fadeIn(800);
	},4000);
}
lunbo();
//点击更换banner图
$('.bannerBtn').on('click','p',function(){

});

//抢购板块
