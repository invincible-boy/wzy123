function test(){
	var a = document.getElementById("username").value;
	var b = document.getElementById("password").value;
	var c = document.getElementById("password01").value;
	if (a == "" ){
		alert("用户名不能为空");
	}else{
		alert(a)
	}
	if(document.getElementById("password").value.length<6 ){
		alert("密码小于6位！")
	}
	if(b==c){
		alert("确认密码成功")
	}else{
		alert("两次密码输入不同")
	}
}
