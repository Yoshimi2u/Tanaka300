$(function() {
	$('#checkModalBtn').on('click', function() {
		console.log($('#name').val());
		$('#checkName').html($('#name').val());
		$('#checkRequestOptionName').html($('#requestOptionName').val());
		$('#checkDetailForm').html($('#detailForm').val());
	});
	$('#requestRegistBtn').on('click', function() {
		registRequestContentAjax();
	});
	$('#Successbtn').on('click', function() {
		window.location.reload();
	});
});

function registRequestContentAjax() {
	$.ajax({
		type: 'POST',
		url: 'regist-request-form-servlet',
		data: $('#requestContent').serialize(),
		dataType: 'json',
	}).done(function(result) {
		if (result.processingNumber == 1) {
			$('#chengeModalBtn').trigger('click');
		} else {
			alert("送信に失敗しました。ご報告ください。");
		}
	}).fail(function() {
	}).always(function() {
	});
}
