
$("#button1").on("click", function() {
	$("#box").animate({height:"+=55px", width:"+=55px"}, "slow");
})

$("#button2").on("click", function() {
	$("#box").css("color", "blue");
})

$("#button3").on("click", function() {
	$("#box").fadeOut("slow");
})

$("#button4").on("click", function() {
	$("#box")[0].reset();
});