
var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked=true;
	counter++;
	if(counter > 4){
		counter = 1;
	}
},5000);
window.addEventListener("load", function() {
	document.getElementById('numero').addEventListener("click", function() {
		alert("hola mundo");
		})
})

