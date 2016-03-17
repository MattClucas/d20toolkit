$(document).ready(function()
{

	$('.active .turn-content').on('click', function () {
		var activeTurn = $('.turn.active');
		activeTurn.find('.action-tracker').slideToggle("fast");
	});

	$('.action').on('click', function () {
		$(this).toggleClass('used');
	});

});