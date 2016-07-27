//点击小图切换大图
$('.xiaotu').on('click','img',function(){
	var $this = $(this)
	var index = $this.index();
	console.log(index)
	$('.xiaotu img').removeClass('xuanzhong');
	$this.addClass('xuanzhong');
	$('.datu img').hide().eq(index).show();
	$('.fangdajing').css({background:'url(../img/datu'+(index+1)+'.jpg) no-repeat #fff'})
})

//放大镜
$('.overlay').on('mouseenter',function(){
	var $this = $(this);
	var fdj = $('.fangdajing');
	var area = $('.area')
	//添加被放大区域高亮效果\显示放大镜区域
	area.show();
	fdj.show();
	//移动放大镜
	$(window).on('mousemove',function(e){
		var pos = {left:e.offsetX,top:e.offsetY};
		if(pos.left<100){
			pos.left = 100;
		}else if(pos.left>300){
			pos.left = 300;
		};
		if(pos.top<75){
			pos.top = 75;
		}else if(pos.top>325){
			pos.top = 325;
		};
		area.css({
			left:pos.left-100,
			top:pos.top-75
		});
		fdj.css({
			backgroundPosition:-parseInt(area.css('left'))*2+'px ' + -parseInt(area.css('top'))*2+"px",
		});
	})
	return false;
}).on('mouseleave',function(){
	//移除被放大区和放大区和鼠标移动事件
	var $this = $(this);
	var fdj = $('.fangdajing');
	$('.area').hide();
	fdj.hide();
	$(window).off('mousemove');
})

//点击加入购物车
var idx = $('#goodsNum').html();//商品个数
$('.jiaru').on('click',function(){
	var tanchuang = $('.tanchuang');
	var layer = $('.layer');
	tanchuang.show();
	layer.show();
	// 关闭弹窗
	function close(){
		tanchuang.hide();
		layer.hide();
	};
	$('.continued').on('click',function(){
		close();
	});
	$('#close').on('click',function(){
		close();
	});
	//存入cookie
	var date = new Date();
	date.setHours(date.getHours()+5);
	date = date.toGMTString();
	//总商品数
	idx ? idx =Number(idx)+Number($('#count').val()) : idx=$('#count').val();
	//存入cookie
	var goodsJSON = [{
						"count":idx,
						"tejia":$('.tejia span').html(),
						"yuanjia":$('.shichangjia span').html(),
					}];
	goodsJSON = JSON.stringify(goodsJSON);
	document.cookie = "goods="+goodsJSON+";expires="+date+";path=/";
	//把数量输出网页上
	$('.manygoods').html(idx);
	$('.totalprices').html("￥"+idx*102);
	gwcNum();
});

