$(function () {
	$('#svgholder').svg({loadURL: 'assets/svg/SHARP impact assessment.svg', onLoad: loadDone });	

	$(window).on('resize', function() {
		$('#svgholder svg').attr('height', $('#svgholder').css('height'));
		$('#svgholder svg').attr('width', $('#svgholder').css('width'));
	});
}); 
 
function loadDone(svg, error) { 
	$('svg a path').on('mouseover', function() { $(this).attr('fill', '#000000').attr('fill-opacity', '0.1'); });
	$('svg a path').on('mouseout', 	function() { $(this).attr('fill', '#000000').attr('fill-opacity', '0'); });

	// open modal and load content from html
	$('svg a').on('click', function(e) {
		e.preventDefault();
		$('.modal-background').css('display', 'block');
		$('.modal').css('display', 'block'); 
		$('.modal-content').load( $(this).attr('xlink:href').slice(1) + '.html' ); // note - xlink:href works for links from google slides
	});

	// close modal
	$('.modal .close-modal, .modal-background').on('click', function(e) {
		$('.modal-background, .modal').css('display', 'none');
		$('.modal-content').html('');
	});
}
