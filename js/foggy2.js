
/*
var loader = $('#loading');
var page = $('#page');

function pageready() {
	loader.css('display, none');
	page.css('display, block');
}

$(window).load(function() {
	pageready();
});
	*/



$(document).ready(function(){

	var canvas1 = document.getElementById("canvas1");
	var ctx1 = canvas1.getContext("2d");

/*
	var canvas2 = document.getElementById("canvas2");
	var ctx2 = canvas2.getContext("2d");

	var canvas3 = document.getElementById("canvas3");
	var ctx3 = canvas3.getContext("2d");
*/

  	var img = new Image();
  	
  	var sx = (Math.floor(Math.random()*800)), 
  		sy = (Math.floor(Math.random()*400)), 
  		sWidth = 150,
  		sHeight = 75,
  		dx = 10,
  		dy= 10,
  		dWidth = canvas1.width,
  		dHeight = canvas1.height;

  	ctx1.globalAlpha = 0.5;
  	img.onload = function(){
  		ctx1.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  	};

  	img.src = 'images/foggymcfogface.png';

});