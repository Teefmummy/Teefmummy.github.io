$("#regions").change(function () {
	event.preventDefault();
	var $selectedOption = $("#regions :selected").val();
    window.location.href=$(this).val();
});

$('#regions-page').change(function(){
	event.preventDefault();
	// var $selectedOption = $('#regions-page :selected').val();
	window.location.href=$('#regions-page' :selected);
});




$('.read-more-food').on('click', function(event) {
	event.preventDefault();
	$('.hidden-text-food').slideDown();
	$('.read-more-food').hide();
	$('.read-less-food').show();
});

$('.read-less-food').on('click', function(event) {
	event.preventDefault();
	$('.hidden-text-food').slideUp();
	$('.read-more-food').show();
	$('.read-less-food').hide();
});

$('.read-more').on('click', function(event) {
	event.preventDefault();
	$('.hidden-text').slideDown();
	$('.read-more').hide();
	$('.read-less').show();
});

$('.read-less').on('click', function(event) {
	event.preventDefault();
	$('.hidden-text').slideUp();
	$('.read-more').show();
	$('.read-less').hide();
});