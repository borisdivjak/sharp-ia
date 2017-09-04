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
	

	// back to home - override default and remove hash sign
	$('.home-link').on('click', function(e) {
		e.preventDefault();
		if ('pushState' in history) history.pushState('', document.title, window.location.pathname + window.location.search);
		else window.location.href = '/';
	});


	$(window).resize();	
	
	
	// ROUTING: sammy is the routing function	
	$.sammy(function() {

		this.get('/', function() {
			$('main.page-content').load( 'home-content.html', function() {});
		});

	  this.get('#:page_title', function() {
			$('main.page-content').load( this.params['page_title'] + '.html', function() {
				$(window).scrollTop(0);
				$(window).resize(); // on load completecall resize to resize video iframes
			} ); 
	  });

	}).run();
}); 