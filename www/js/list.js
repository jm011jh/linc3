var winT = $(document).scrollTop(),
    lastScrollTop = 0,
    delta = 15;

$(window).scroll(function(){

    winT = $(window).scrollTop()

    if (Math.abs(lastScrollTop - winT) <= delta) return;
    if (winT < 10){
        $(".subscribeLincBar").removeClass("show")
    } else {
        $(".subscribeLincBar").addClass("show")
        if ((winT > lastScrollTop) && (lastScrollTop > 0)) {
            $(".subscribeLincBar").addClass("show")
        } else {
            $(".subscribeLincBar").removeClass("show")
        }
    }
    lastScrollTop = winT;
})

$(".list--sort-optionValue").click(function(){
    $(".list--sort-optionValue").removeClass("checked")
    $(this).addClass("checked")
})