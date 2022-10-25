$(".member04--item-thumbCheck").click(function(){
    if($(this).hasClass("checked")){
        $(this).removeClass("checked")
    } else {
        $(this).addClass("checked")
    }
})
function sortSelectBoxClose(){
    $(".member04--sort-selectBox-val").removeClass("open")
    $(".member04--sort-selectBox-val").find(".material-symbols-outlined").text("expand_more")
    $(".member04--sort-selectBox-itemList").removeClass("on")
}
function sortSelectBoxOpen(){
    $(".member04--sort-selectBox-val").addClass("open")
    $(".member04--sort-selectBox-val").find(".material-symbols-outlined").text("expand_less")
    $(".member04--sort-selectBox-itemList").addClass("on")
}
$(".member04--sort-selectBox-val").click(function(){
    if($(this).hasClass("open")){
        sortSelectBoxClose()
    } else {
        sortSelectBoxOpen()
    }
})
$(".member04--sort-selectBox-item").click(function(){
    var thisText = $(this).text()
    sortSelectBoxClose()
    $(".member04--sort-selectBox-val p").text(thisText)
})