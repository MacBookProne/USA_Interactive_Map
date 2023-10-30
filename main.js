<script>
   jQuery(document).ready(function ($) {
   	// When hovering over a path or circle
   	$("path, circle").on('mouseenter', function () {
   		$('#info-box').show().html($(this).data('info'));
   	}).on('mouseleave', function () { // On mouse leave
   		$('#info-box').hide();
   	});
   
   	// Adjust the position of the info box based on the mouse movement
   	$(document).on('mousemove', function (e) {
   		$('#info-box').css({
   			'top': e.pageY - $('#info-box').height() - 30,
   			'left': e.pageX - ($('#info-box').width() / 2)
   		});
   	});
   
   	// Handle touch functionality for iOS devices
   	var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
   	if (isIOS) {
   		$('a').on('click touchend', function (e) {
   			e.preventDefault(); // Prevent the default action
   			var link = $(this).attr('href');
   			window.open(link, '_blank');
   		});
   	}
   });
</script>
