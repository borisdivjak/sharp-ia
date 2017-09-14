$(function() {
	var bodyclass = '';

	function animateVisible() {
		$('.animate-when-visible').each(function(index, element) {
			if ($(element).visible(true)) {
				setTimeout(function() {
					console.log('index: ' + index);
					$(element).addClass('animating-now').removeClass('animate-when-visible')
						.on('transitionend', function() {
							$(this).removeClass('animating-now');
						});
				}, 50 * (index + Math.random())); // load earlier elements first, but add a bit of random timing for a more natural effect
			}
		});		
	}

	if (!Modernizr.touchevents) {
		bodyclass = 'hover-animation ';
	}

    // Disable caching of AJAX responses
	$.ajaxSetup ({ cache: false });


	$(window).on('resize', function() {
				
		// keep video ratio at 16:9
		var iframeWidth = $('iframe').css('width');
		var iframeHeight = 0;
		if (iframeWidth) iframeHeight = Math.floor(parseInt(iframeWidth) * 0.5625) + 'px';
		$('iframe').css('height', iframeHeight);
		animateVisible();
	});
	
	$(window).resize();	


	$(window).on('scroll', animateVisible);
				
	
	// ROUTING: sammy is the routing function	
	$.sammy(function() {

		this.get('/', function() {
			$('main.page-content').load( 'home-content.html', function() {
				$('body').attr('class', bodyclass + 'home');
				$(window).scrollTop(0);
				$('.home-item').addClass('animate-when-visible');
				animateVisible();
			});
		});

	  this.get('#:page_title', function() {
			$('main.page-content').load( this.params['page_title'] + '.html', function() {
				$('body').attr('class', bodyclass + $('.subpage-main').data('body-class'));
				$(window).scrollTop(0);
				$(window).resize(); // on load completecall resize to resize video iframes
			} ); 
	  });

	}).run();
}); 