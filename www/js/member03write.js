
function sortSelectBoxClose(){
    $(".member03--figureItem-selectBox").removeClass("open")
    $(".member03--figureItem-selectBox").find(".material-symbols-outlined").text("expand_more")
    $(".member03--figureItem-selectBox-list").removeClass("on")
}
function sortSelectBoxOpen(){
    $(".member03--figureItem-selectBox").addClass("open")
    $(".member03--figureItem-selectBox").find(".material-symbols-outlined").text("expand_less")
    $(".member03--figureItem-selectBox-list").addClass("on")
}
$(".member03--figureItem-selectBox").click(function(){
    if($(this).hasClass("open")){
        sortSelectBoxClose()
    } else {
        sortSelectBoxOpen()
    }
})
$(".member03--figureItem-selectBox-listItem").click(function(){
    var thisText = $(this).text()
    sortSelectBoxClose()
    $(".member03--figureItem-selectBox p").text(thisText)
})