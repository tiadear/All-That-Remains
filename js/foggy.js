
	function cloudywoudy(){
	//define canvas variables
			var	$canvas = $('#canvas');
			var	$canvas2 = $('#canvas2');
			var	$canvas3 = $('#canvas3');

			//canvas context
			var	ctx2 = $canvas2[0].getContext('2d');
			var	ctx = $canvas[0].getContext('2d');

			var	w = $canvas[0].width, h = $canvas[0].height;

			var	img = new Image();
			
			// A puff.
			var	Puff = function(p) {				
				var	opacity,
					sy = (Math.random()*250)>>0,
					sx = (Math.random()*400)>>0;
				
				this.p = p;
						
				this.move = function(timeFac) {						
					p = this.p + 0.3 * timeFac;				
					opacity = (Math.sin(p*0.05)*0.5);						
					if(opacity <0) {
						p = opacity = 0;
						sy = (Math.random()*250)>>0;
						sx = (Math.random()*400)>>0;
					}												
					this.p = p;																			
					ctx.globalAlpha = opacity;

					//draw the image			
					ctx.drawImage($canvas3[0], sx+p, sy+p, 400-(p*2),250-(p*2), 0,0, w, h);								
				};
			};
			
			var	puffs = [];			
			var	sortPuff = function(p1,p2) { return p1.p-p2.p; };	
			puffs.push( new Puff(0) );
			puffs.push( new Puff(20) );
			puffs.push( new Puff(40) );
			
			var	newTime, oldTime = 0, timeFac;
					
			var	loop = function()
			{								
				newTime = new Date().getTime();				
				if(oldTime === 0 ) {
					oldTime=newTime;
				}
				timeFac = (newTime-oldTime) * 0.1;
				if(timeFac>3) {timeFac=3;}
				oldTime = newTime;						
				puffs.sort(sortPuff);							
				
				for(var i=0;i<puffs.length;i++)
				{
					puffs[i].move(timeFac);	
				}					
				ctx2.drawImage( $canvas[0] ,0,0,800,500);				
				setTimeout(loop, 10 );				
			};
			// Turns out Chrome is much faster doing bitmap work if the bitmap is in an existing canvas rather
			// than an IMG, VIDEO etc. So draw the big nebula image into canvas3
			var	$canvas3 = $('#canvas3');
			var	ctx3 = $canvas3[0].getContext('2d');
			$(img).bind('load',null, function() {  ctx3.drawImage(img, 0,0, 800, 500);	loop(); });
			img.src = 'images/foggymcfogface.png';
	}

jQuery(function($){

	var $images = $('body').find('img[src]');
	

    $('body [style]').each(function(){
        var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

        if(src && src != 'none') {
            $images = $images.add($('<img src="' + src + '"/>'));
        }
    });

	var imagesLoaded = 0;

	//on load complete
	function pageReady() {
		$("#logo").fadeIn(5000, function(){
			$('#page-cover').fadeOut(3000);
		});
		$("#loading").fadeOut(11000);
		
	}

	function loading() {
		var percentage = 0;
		percentage = parseInt((imagesLoaded / $images.length) * 100);
		
		if(percentage == 100){
			setTimeout(pageReady,4000);
		}
	}

	if($images.length) {	
       	loading();
       
        $images.load(function(){
            $(this).off('load');
       		imagesLoaded++;
            loading();
       	});
    }

});
	
$(document).ready(function(){
	var docheight = $(document).height();
	var top = 1000;
	var bgheight = docheight - top;

	//$('.bg-wrap').css("height", bgheight);

	

});


    










