// JavaScript Document
$(document).ready(function() {
	document.addEventListener("deviceready",function() {
		$('#B1').tap(function(){
	navigator.notification.beep(1);
	});//Tap B1 
   });//device ready   
});//ready

