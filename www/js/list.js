var winT = $(document).scrollTop(),
    lastScrollTop = 0,
    delta = 15;

$(window).scroll(function(){

    winT = $(window).scrollTop()

    if (Math.abs(lastScrollTop - winT) <= delta) return;
    if (winT < 10){
        $(".subscribeLincBar").addClass("hide")
    } else {
        $(".subscribeLincBar").removeClass("hide")
        if ((winT > lastScrollTop) && (lastScrollTop > 0)) {
            $(".subscribeLincBar").removeClass("hide")
        } else {
            $(".subscribeLincBar").addClass("hide")
        }
    }
    lastScrollTop = winT;
})