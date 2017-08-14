var svgBaseWidth = 0;
var svgBaseHeight = 0;

$(function () {
    // Disable caching of AJAX responses
	$.ajaxSetup ({ cache: false });

	// Link directly to google slides (make sure link to presentation is open to everyone) using the following format:
	// https:\/\/docs.google.com/presentation/d/<PRESENTATION_ID>/export/<FORMAT>?pageid=<PAGE_ID>
	$('.svgholder').svg({loadURL: 'https://docs.google.com/presentation/d/1iZeU-UGoDyJSDpJ5Za7PDcPkp99XkUl9bxiN4SEx8kA/export/svg?pageid=g24d4306262_0_12', onLoad: loadDone });	

	$(window).on('resize', function() {
		$('.svgholder svg').attr('width', $('.svgholder').width());
		
		// on narrow screens reduce height 
		if ($('.svgholder').width() < svgBaseWidth) {
			$('.svgholder svg').attr('height', $('.svgholder').width() / svgBaseWidth * svgBaseHeight);			
		}
		// on wider screens set effective max height for svg based on original dimesnions
		else {
			$('.svgholder svg').attr('height', svgBaseHeight);
		}
		
		// keep video ratio at 16:9
		var iframeWidth = $('.modal iframe').css('width');
		var iframeHeight = 0;
		if (iframeWidth) iframeHeight = Math.floor(parseInt(iframeWidth) * 0.5625) + 'px';
		$('.modal iframe').css('height', iframeHeight);
	});
	
	$(window).resize();
}); 
 
function loadDone(svg, error) { 
	svgBaseWidth = svg._svg.viewBox.baseVal.width;
	svgBaseHeight = svg._svg.viewBox.baseVal.height;
	$(window).resize();

	$('svg a path').on('mouseover', function() { $(this).attr('fill', '#000000').attr('fill-opacity', '0.1'); });
	$('svg a path').on('mouseout', 	function() { $(this).attr('fill', '#000000').attr('fill-opacity', '0'); });

	// open modal and load content from html
	$('svg a').on('click', function(e) {
		e.preventDefault();
		$('body').css('overflow', 'hidden'); // stop scrolling of main content when in modal mode
		$('.modal-background').css('display', 'block');
		$('.modal').css('display', 'block'); 

		// note - xlink:href works for links from google slides
		$('.modal-content').load( $(this).attr('xlink:href').slice(1) + '.html', function() {
			// on load complete
			$(window).resize(); // call resize to resize video iframes
			$('.modal-background').css('-webkit-overflow-scrolling', 'touch'); // need to call this dynamically otherwise doesn't work properly on iPhone
		} ); 
	});

	// close modal
	$('.modal .close-modal, .modal-background').on('click', function(e) {
		$('.modal-background').css('-webkit-overflow-scrolling', 'auto');
		$('body').css('overflow', 'inherit'); 
		$('.modal-background, .modal').css('display', 'none');
		$('.modal-content').html('');
	});
}
