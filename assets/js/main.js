$(function() {
	var bodyclass = '';

	function animateVisible() {
		$('.animate-when-visible').each(function(index, element) {
			if ($(element).visible(true)) {
				setTimeout(function() {
					$(element).addClass('animating-now').removeClass('animate-when-visible')
						.on('transitionend', function() {
							$(this).removeClass('animating-now');
						});
				}, 80 * (index + Math.random() * 0.2)); // load earlier elements first, but add a bit of random timing for a more natural effect
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
		var iframeWidth = $('iframe[data-iframe-type="video"]').css('width'); // only target video frames
		var iframeHeight = 0;
		if (iframeWidth) iframeHeight = Math.floor(parseInt(iframeWidth) * 0.5625) + 'px';
		$('iframe[data-iframe-type="video"]').css('height', iframeHeight);  // only target video frames
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
				$('blockquote').addClass('animate-when-visible');
				animateVisible();
				
				$('.hidden-section-toggle').on('click', function(e) {
					e.preventDefault();
					container = $(this).parent();
					content = $('.hidden-section-content', container);
					if ($(container).hasClass('show')) {  // IF shown then hide
						$(content).css('max-height', $(content).height()); // set to fixed height back from none
						setTimeout(function() {
							$(container).removeClass('show');						
							$(content).css('max-height', '0');
						}, 10 ); // need short delay to for height to change properly
					}
					else { // IF hidden then show
						$(container).addClass('show');		
						$(content).css('max-height', $('.hidden-section-content-wrapper', content).height()); // set to actual height of inner content
						$(content).on('transitionend', function() {
							if ($(container).hasClass('show')) $(this).css('max-height', 'none'); // set to none after transition in case of window resizing / other changes
						});
					}
				});
			} ); 
	  });

	}).run();
}); 