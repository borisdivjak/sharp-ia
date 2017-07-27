var colorSelected = "#000";
var colorNormal = "#B4C740";


$(function () {
	$('#svgholder').svg({loadURL: 'assets/svg/SHARP impact assessment.svg', onLoad: loadDone, settings: { width: '1200' }});	
}); 
 
function loadDone(svg, error) { 
/*
	var svg = $('#svgholder').svg('get'); 
	$('[id^="h-"]', '#highlight', svg.root()).animate({svgOpacity:0}, 0);
	$('[id^="h-"]', '#highlight', svg.root()).css('cursor','pointer');
	$('[id^="h-"]', '#highlight', svg.root()).mouseenter(function() {
		var name=this.id.slice(2).split('_')[0];
		$('*', '[id^="'+name+'"]', svg.root()).stop(true, false).animate({svgFill: colorSelected}, {queue:false, easing:'linear', duration:100});	
		$('[style*="stroke"]', '[id^="'+name+'"]', svg.root()).animate({svgStroke: colorSelected}, {queue:false, easing:'linear',  duration:100});	
		$('[id*="NEVIDNI"]', '[id^="'+name+'"]', svg.root()).animate({svgOpacity: 1}, {queue:false, easing:'linear',  duration:100});	
	});

	$('[id^="h-"]', '#highlight', svg.root()).mouseleave(function() {
		var name=this.id.slice(2).split('_')[0];
		$('*', '[id^="'+name+'"]', svg.root()).stop(true, false).animate({svgFill: colorNormal}, {queue:false, easing:'linear',  duration:200});	
		$('[style*="stroke"]', '[id^="'+name+'"]', svg.root()).animate({svgStroke: colorNormal}, {queue:false, easing:'linear',  duration:200});	
		$('[id^="NEVIDNI"]', '[id^="'+name+'"]', svg.root()).animate({svgOpacity: 0}, {queue:false, easing:'linear',  duration:200});	
	});

	$('[id*="NEVIDNI"]', svg.root()).show();
	$('[id*="NEVIDNI"]', svg.root()).animate({svgOpacity:0}, 0);
*/
}
	