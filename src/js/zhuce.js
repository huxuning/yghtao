//注册表单验证
(function(){
	var submit = document.getElementById('zhuce_submit');
	var username = document.getElementById('username');
	var passwork = document.getElementById('passwork');
	var checkpasswork = document.getElementById('checkpasswork');
	var checkcode = document.getElementById('checkcode');
	var tongyi = document.getElementById('tongyi');
	//验证状态，false则不提价
	var check = true;
	//验证手机号码
	username.onblur=function(){
		var tip = document.getElementsByClassName('username_tip')[0];
		var value = this.value
		if(/^1\d{10}$/.test(value)){
			tip.innerHTML='可以使用';
			tip.style.color = 'green';
		}else{
			check = false;
			tip.innerHTML='请输入有效的手机号！';
			tip.style.color='red';
		}
	};
	//验证密码
	passwork.onfocus=function(){
		var tip = document.getElementsByClassName('passwork_tip')[0];
		tip.style.color='red';
		tip.innerHTML="6-20位字符，可以用字母，数字或符号组合";		
		this.onkeyup=function(){
			var index=0;//安全等级
			var value = this.value;
			//密码6-20位
			if(/^.{6,20}$/.test(value)){
				//含有数字
				if(/\d/.test(value)){
					index++;
				};
				//含有字母
				if(/[a-zA-Z]/.test(value)){
					index++;
				};
				//密码数超过10位
				if(/^.{10,}$/.test(value)){
					index++;
				};
				//含有特殊符号
				if(/[^a-zA-Z0-9]/.test(value)){
					index++;
				};
				//最高3级
				if(index>3){
					index = 3;
				};
				//显示安全等级
				tip.style.color="green";
				switch(index){
					case 1 : tip.innerHTML='安全等级：低';break;
					case 2 : tip.innerHTML='安全等级：中';break;
					case 3 : tip.innerHTML='安全等级：高';break;
				};
			}else{
				check=false;
				tip.style.color='red';
				tip.innerHTML="6-20位字符，可以用字母，数字或符号组合";		
			}
		}
	}
	//确认密码
	checkpasswork.onblur=function(){
		var tip = document.getElementsByClassName('checkpass_tip')[0];

		if(this.value != passwork.value){
			check = false;
			tip.innerHTML="两次密码输入不一致";
		}else{
			//不为空
			if(!this.value){
				check = false;
			};
			tip.innerHTML=""
		}
	}
	//生成 验证码
	function makeCode(){
		var str = '0123456789';
		var code = ''
		for(var i=0;i<4;i++){
			var idx = parseInt(Math.random()*10);
			code+=str[idx];
		}
		return code;
	}
	//验证验证码
	checkcode.onfocus=function(){
		var code = document.getElementsByClassName('makecode')[0];
		var tip = document.getElementsByClassName('checkcode_tip')[0];
		code.innerHTML = makeCode();
		code.style="margin-left:10px; color:#000; font-size:16px;";
		//点击切换验证码
		code.onclick=function(){
			code.innerHTML = makeCode();
		}
		//验证
		checkcode.onblur=function(){
			if(this.value != code.innerHTML){
				check = false;
				tip.innerHTML="验证码错误";
				tip.style.color = "red";
			}else{
				tip.innerHTML="";
			}
		}
	}
	//提交表单
	submit.onclick=function(){
		console.log(check)
		//同意条款
		if(!tongyi.checked){
			return false;
		}
		//如果有验证不过，则不提交
		if(!check){
			return false;
		}else{
			//将注册信息存储
			var date = new Date();
			date.setDate(date.getDate()+15);
			date = date.toGMTString();
			document.cookie = "id"+$('#username').val()+"="+$('#username').val()+";expires="+date+";path=/";
			document.cookie = "pass"+$('#username').val()+"="+$('#passwork').val()+";expires="+date+";path=/";
			console.log(document.cookie)
			alert('注册成功');
			window.open('denglu.html');
		}
	}
})()
