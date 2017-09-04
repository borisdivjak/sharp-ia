$(function () {
    // Disable caching of AJAX responses
	$.ajaxSetup ({ cache: false });


	$(window).on('resize', function() {
				
		// keep video ratio at 16:9
		var iframeWidth = $('iframe').css('width');
		var iframeHeight = 0;
		if (iframeWidth) iframeHeight = Math.floor(parseInt(iframeWidth) * 0.5625) + 'px';
		$('iframe').css('height', iframeHeight);
	});
	
	$(window).resize();	
	
	
	// ROUTING: sammy is the routing function	
	$.sammy(function() {

		this.get('/', function() {
			$('main.page-content').load( 'home-content.html', function() {
				$('body').attr('class', 'home');
			});
		});

	  this.get('#:page_title', function() {
			$('main.page-content').load( this.params['page_title'] + '.html', function() {
				$('body').attr('class', $('.subpage-main').data('body-class'));
				$(window).scrollTop(0);
				$(window).resize(); // on load completecall resize to resize video iframes
			} ); 
	  });

	}).run();
}); 