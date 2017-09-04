$(function () {
    // Disable caching of AJAX responses
	$.ajaxSetup ({ cache: false });


	$(window).on('resize', function() {
				
		// keep video ratio at 16:9
		var iframeWidth = $('.modal iframe').css('width');
		var iframeHeight = 0;
		if (iframeWidth) iframeHeight = Math.floor(parseInt(iframeWidth) * 0.5625) + 'px';
		$('.modal iframe').css('height', iframeHeight);
	});
	

		// close modal
	$('.modal .close-modal, .modal-background').on('click', function(e) {
		e.preventDefault();
		if ('pushState' in history) history.pushState('', document.title, window.location.pathname + window.location.search);
		else window.location.href = '/';
	});
	
	// this is to prevent clicks on anything other than background closing the modal
	$('.modal').on('click', function(e) {
		e.stopPropagation();
	});



	$(window).resize();	
	
	
	// ROUTING: sammy is the routing function	
	$.sammy(function() {

		this.get('/', function() {
//			window.location.href = '';
			$('.modal-background').css('-webkit-overflow-scrolling', 'auto');
			$('body').css('overflow', 'inherit'); 
			$('.modal-background, .modal').css('display', 'none');
			$('.modal-content').html('');
		});

	  this.get('#:page_title', function() {
			$('body').css('overflow', 'hidden'); // stop scrolling of main content when in modal mode
			$('.modal-background').css('display', 'block');
			$('.modal').css('display', 'block'); 
	
			// load content in modal
			$('.modal-content').load( this.params['page_title'] + '.html', function() {
				// on load complete
				$(window).resize(); // call resize to resize video iframes
				$('.modal-background').css('-webkit-overflow-scrolling', 'touch'); // need to call this dynamically otherwise doesn't work properly on iPhone
			} ); 
	  });

	}).run();
}); 