$(".yes-button").click(function() {
    $(".Part-Two-Yes").fadeIn();
    $(".Beginning").fadeOut();
});

$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".Beginning").hide();
});

$(".shark-img").dblclick(function() {
    $(".Story-Ending-Yes").fadeIn();
	$(".Part-Two-Yes").fadeOut();
});

$(".shipwreck-img").dblclick(function() {
    $(".Story-Ending-No").show();
	$(".Part-Two-No").hide();
});

$(".Res").click(function() {
    $(".Story-Ending-Yes").hide();
    $(".Story-Ending-No").hide();
    $(".Beginning").show();
    $(".title").css("color", "gold");
});