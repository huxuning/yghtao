//轮播图
function lunbo(){
	var index = 0;
	$('.bannerBtn p').eq(index).animate({width:225},4000);
	setInterval(function(){
		$('.bannerBtn p').eq(index).animate({width:0},0);
		$('.banner a').eq(index).fadeOut(800);	
		index==$('.banner a').length-1 ? index=0:index++;
		$('.bannerBtn p').eq(index).animate({width:225},4000);
		$('.banner a').eq(index).fadeIn(800);
	},4000);
}
lunbo();