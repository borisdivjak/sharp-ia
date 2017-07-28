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
	$('svg a').on('click', function(e) {
		e.preventDefault();
	});
	
//	$('svg a path').each(function() {
//		$('svg path[d="' + $('svg a path').attr('d') + '"]').not(this)
//			.attr('fill', colorHover).attr('fill-opacity', '1')
//	});
//	$('svg a path').attr('fill', '#000000').attr('fill-opacity', '1');
//	$('svg a').on('over')
}
	