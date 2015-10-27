$("#regions").change(function () {
	event.preventDefault();
	var $selectedOption = $("#regions :selected").val();
    alert($selectedOption);
    window.location.href=$(this).val()

});