(function(){
	var cookie = gwcNum()[0];
	//如果含有商品信息，则输出，没有则显示无商品图片
	if(cookie.count!=0){
		$('.gwcbj').hide();
		$('.gwctable').show();
		//把商品信息填入表格
		var tejia = cookie.tejia;
		var yuanjia = cookie.yuanjia;
		var count = cookie.count;
		$('.danjia').html('<p style="text-decoration:line-through">'+yuanjia+'</p><p style="font-size:14px;color:red;">'+tejia+'</p>');
		$('.shuliang input').val(count);
		$('.xiaoji').html('￥'+tejia.slice(2)*count);
		$('.zongshu').html('￥'+tejia.slice(2)*count);
		$('.shuliang input').change(function(){
			var value = this.value
			if(value<=0){
				value=0;
			};
			$('.xiaoji').html('￥'+tejia.slice(2)*value);
			$('.zongshu').html('￥'+tejia.slice(2)*value);
			$('.goodsNum').html(value);
		});
	}else{
		$('.gwcbj').show();
		$('.gwctable').hide();
	}
})()