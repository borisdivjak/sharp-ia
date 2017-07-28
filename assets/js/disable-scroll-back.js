// prevents browser from triggering 'back' on scrolling left too far (e.g. on Chrome on OsX)
// when #scrollable scrolled all the way to the left
// requires jquery


function preventScrollLeft(e) {
	// wheelDeltaX works for webkit, deltaX for FF
	if ((e.originalEvent.wheelDeltaX < 0) || (e.originalEvent.deltaX > 0)) {
		$(e.delegateTarget).off('wheel');
	}
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

$(function () {
	$(this).on('wheel', preventScrollLeft);
	$('#scrollable').scroll(function() {
		if ($(this).scrollLeft() == 0) {
			$(this).on('wheel', preventScrollLeft);
		}
	});
});