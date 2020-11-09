$(function () {
	$("#greenButton").hover(function () {
		$("#text").css("color","green")();
	});

	$("#blueButton").hover(function () {
		$("#text").css("color","blue")();
	});

	$("#redButton").hover(function () {
		$("#text").css("color","red")();
	});
});
