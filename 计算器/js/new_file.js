//alert(1);
var numb="";
var s="";

var result = document.getElementById("result");
function getnum(x){
	result.innerHTML = result.innerHTML + x;
	
	
}
function calculate(){
	numb = result.innerHTML;
	var p=eval(numb);
//	alert(p);
	result.innerHTML=p;
}
function empty(){
	result.innerHTML="";
}
function backspace(){
	s=result.innerHTML
	s=s.substr(0,s.length-1);
	result.innerHTML=s;
}
