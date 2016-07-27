	
(function(){
	//登录验证
	document.getElementById('login').onclick=function(){
		var username = document.getElementById('login_username').value;
		var passwork = document.getElementById('login_passwork').value;
		var usertip = $(".username_tip");
		var passtip = $(".passwork_tip");
		usertip.css('color','red');
		passtip.css('color','red');
		//账户名密码不能为空
		if(!username){
			usertip.html('请输入您的账户名');
		}
		if(!passwork){
			passtip.html('请输入密码');
		}
		//通过cookie判定账户名以及密码正确性
		var cookie = document.cookie;
		console.log(cookie);
		arr = cookie.split('; ');
		//查找用户名是否存在
		for(var attr in arr ){
			if(arr[attr].indexOf("id"+username+'=')==0){
				var id = arr[attr].slice(13);
				usertip.html('');
				//验证密码准确性
				for(var idx in arr){
					if(arr[idx].indexOf("pass"+username+'=')==0){
						console.log(arr[attr])
						var pass = arr[idx].slice(16);
						console.log(pass);
						if(passwork!=pass){
							passtip.html('密码错误');
							return;
						}else{
							passtip.html('');
							//保存登录信息
							var date = new Date();
							date.setDate(date.getDate()+15);
							date = date.toGMTString();
							document.cookie = "login="+username+";expires="+date+";path=/";
							window.open("../index.html");
						}
					}
				}
			}else{
				usertip.html('用户名不存在');
			}
		}
	}	
})();