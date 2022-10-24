$(".map--area-svg").mouseenter(function(){
    let mapNumber = $(this).attr("data-map-number")
    $(".map--area-svg").removeClass("hover")
    $(this).addClass("hover")

    $(".map--areaHover-svg").removeClass("show")
    $(".map--areaHover-svg").filter(`[data-map-area=${mapNumber}]`).addClass("show")

    $(".map--area-svgText").removeClass("hover")
    $(".map--area-svgText").filter(`[data-text=${mapNumber}]`).addClass("hover")
})
$(".map--area-svg").mouseleave(function(){
    $(".map--area-svg").removeClass("hover")
    $(".map--areaHover-svg").removeClass("show")
    $(".map--area-svgText").removeClass("hover")
})
$(".bs--sortList-item").click(function(){
    $(".bs--sortList-item").removeClass("on")
    if(!$(this).hasClass("on")){
        $(this).addClass("on")
    }
})

$(".map--area-svg").click(function(){
    $(".bs--figure").addClass("toLeft")
})
$("#bsSchoolGoBackButton").click(function(){
    $(".bs--figure").removeClass("toLeft")
})