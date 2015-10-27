$("#regions").change(function () {
	event.preventDefault();
	var $selectedOption = $("#regions :selected").val();
    window.location.href=$(this).val()

});