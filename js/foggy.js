jQuery(function($){
				var $images = $('body').find('img[src]');
				
				
				//remove the url from the image src
			    $('body [style]').each(function(){
			        var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
			        if(src && src != 'none') {
			            $images = $images.add($('<img src="' + src + '"/>'));
			        }
			    });

			    //reapply the src to all the images
			    //because IE
			    $images.each(function(){
			    	$(this).attr('src', $(this).attr('src'));
			    });
				
				var imagesLoaded = 0;
				
				//on load complete
				function pageReady() {
					console.log('page ready');
					$("#logo").fadeIn(1000, function(){//4000
						$('#page-cover').fadeOut(1000);//3000
						$('.fog').fadeIn(500);//1000
					});
					$("#loading").fadeOut(4000);//9000
				}

				//check they're all loaded
				function loading() {
					var percentage = 0;
					percentage = parseInt((imagesLoaded / $images.length) * 100);
					if(percentage == 100){
						setTimeout(pageReady,1000);
					}
				}

				//if there are images - load them!
				
				if($images.length) {
			       	loading();

			        $images.load(function(){
			            $(this).off('load');
			       		imagesLoaded++;
			            loading();
			       	});
			    }
			  

			});
	

