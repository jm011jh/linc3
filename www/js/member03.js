$(".member03--item-thumbCheck").click(function(){
    if($(this).hasClass("checked")){
        $(this).removeClass("checked")
    } else {
        $(this).addClass("checked")
    }
})
function sortSelectBoxClose(){
    $(".member03--sort-selectBox-val").removeClass("open")
    $(".member03--sort-selectBox-val").find(".material-symbols-outlined").text("expand_more")
    $(".member03--sort-selectBox-itemList").removeClass("on")
}
function sortSelectBoxOpen(){
    $(".member03--sort-selectBox-val").addClass("open")
    $(".member03--sort-selectBox-val").find(".material-symbols-outlined").text("expand_less")
    $(".member03--sort-selectBox-itemList").addClass("on")
}
$(".member03--sort-selectBox-val").click(function(){
    if($(this).hasClass("open")){
        sortSelectBoxClose()
    } else {
        sortSelectBoxOpen()
    }
})
$(".member03--sort-selectBox-item").click(function(){
    var thisText = $(this).text()
    sortSelectBoxClose()
    $(".member03--sort-selectBox-val p").text(thisText)
})