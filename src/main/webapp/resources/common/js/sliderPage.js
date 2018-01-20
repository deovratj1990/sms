$(document).on("click", ".next-slider-page", function() {
	var sliderPageId = $(this).attr("data-sliderPageId");
	var onLoad = $(this).attr("data-loadFunction")+'('+$(this).attr("data-functionParameter")+')';
	
    $("#"+sliderPageId).animate({
        left: '-100%'
    }, 500);

    $("#"+sliderPageId).next().animate({
        left: '0%'
    }, 500);
    eval(onLoad);
});

$(document).on("click", ".prev-slider-page", function() {
	var sliderPageId = $(this).attr("data-sliderPageId");

    $("#"+sliderPageId).animate({
        left: '100%'
    }, 500);

    $("#"+sliderPageId).prev().animate({
       left: '0%'
    }, 500);
});