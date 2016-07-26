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
			backgroundPositionX:-parseInt(area.css('left'))*2,
			backgroundPositionY:-parseInt(area.css('top'))*2
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
