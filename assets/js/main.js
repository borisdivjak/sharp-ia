$(function() {
	var bodyclass = '';

	function animateVisible() {
		// first trigger charts (load real data)
		$('.chart.animate-when-visible').each(function(index, element) {
			if ($(element).visible(true)) {
				chart = $(element).data('c3-chart');
				
				var real_data = $.parseJSON($(element).attr('data'));			
				chart.load(real_data.data);
				$(element).removeClass('animate-when-visible');
			}
		});

		// then trigger css animations
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
		$('.svg-wrapper svg').attr('width', $('.svg-wrapper').css('width')); // fit svg in smaller windows
				
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

		function onLoadAlways() {
			$(window).resize(); // on load completecall resize to resize video iframes
			$(window).scrollTop(0);
			animateVisible();
			
			// set target _blank for external hyperlinks (i.e. all links beginning with http...)
			$('a[href^="http"]').attr('target', '_blank');
		}

		this.get('/', function() {
			$('main.page-content').load( 'home-content.html', function() {
				$('body').attr('class', bodyclass + 'home');
				$('.home-item').addClass('animate-when-visible');
				onLoadAlways();
			});
		});

	  this.get('#:page_title', function() {
			$('main.page-content').load( this.params['page_title'] + '.html', function() {
				$('body').attr('class', bodyclass + $('.subpage-main').data('body-class'));

				//animate qootes
				$('blockquote, .chart').addClass('animate-when-visible');
				
				// add functionality for collapsible sections
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

				// load charts
				$('.chart').each( function(index, element) {
					var data = $.parseJSON($(element).attr('data'));
					
					// reset all data points to 0 (for a nice animation on delayed load)
					for (i = 0; i < data.data.columns.length; i++) {
						for (j=0; j < data.data.columns[i].length; j++) {
							if ($.isNumeric(data.data.columns[i][j])) data.data.columns[i][j] = 0;
						}
					}

					// create chart, but true data will only be loaded on animateVisible
					var chart = c3.generate(data);	
					$(this).data('c3-chart', chart);
				});
				
				
				// load SVGs (e.g. diagrams etc.)
				$('.svg-wrapper').each(function(index, element) {
					$(element).svg({ loadURL: $(element).attr('data-filename'), onLoad: function() {
						// animate elemenets when loaded
						$('svg').addClass('animate-when-visible'); 
						animateVisible();
					}});
				});
				
				onLoadAlways();
			}); 
	  });

	}).run();
}); 