function copy(){
	var a = document.getElementById("copy01");
	a.select();
	navigator.clipboard.writeText(a.value);
	document.getElementById("copy02").value= a.value;
}