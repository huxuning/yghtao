//二级菜单弹出效果and底边框高亮效果
$('nav').on('mouseenter','.nav>li',function(){
	$('.subNav').hide().eq([$(this).index()]).show(200);
	$(this).find('.listBottom').animate({
		width : $(this).width()-10
	});
}).on('mouseleave',function(){
	$('.subNav').hide();
}).on('mouseleave','.nav>li',function(){
	$(this).find('.listBottom').animate({
		width:0
	});
});
//导航顶部悬浮
$(window).on('scroll',function(){
	var left = ($('body').outerWidth()-$('nav').outerWidth())/2;
	if($(window).scrollTop()>=600){
		$('nav').css({
			position:'fixed',
			top:0,
			left:left
		})
	}else{
		$('nav').css({
			position:'',
		})
	}
});
//侧边栏购物车数量
function gwcNum(){
	var cookie = document.cookie;
	var arr = cookie.split('; ');
	console.log(arr)
	for(var attr in arr){	 
		if(arr[attr].indexOf('goods=') == 0){
			var goodsinf = arr[attr].slice(6);
			goodsinf = JSON.parse(goodsinf);
			$('.goodsNum').html(goodsinf[0].count);		
		}
		//是否登录
		if(arr[attr].indexOf('login=') == 0){
			var loginName = arr[attr].slice(6);
			document.getElementById('pleaselogin').innerHTML="您好，"+loginName;
		}
	
	}
	return goodsinf;
};
gwcNum();
