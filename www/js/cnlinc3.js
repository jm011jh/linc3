setTimeout( () => {
    $(".s1--title").addClass("init")
    $(".s1--props").addClass("init")
    $(".s1--goLink").addClass("init")
},100)
setTimeout( () => {
    $(".s1--cards").addClass("init")
    $(".s1--cards-mobile").addClass("init")
},600)

var winT = $(document).scrollTop();
var s2T = $(".s2").offset().top;
var s3T = $(".s3").offset().top;
var winH = $(window).height()
var lastScrollTop = 0,
    delta = 15;
$(window).resize(function(){
    winH = $(window).height()
})
$(window).scroll(function(){
    winT = $(window).scrollTop()
    s2T = $(".s2").offset().top;
    s3T = $(".s3").offset().top;

    if(winT > s2T - winH/2){
        $(".s2").addClass("on-view")
    }
    if(winT > s3T - winH/2){
        $(".s3").addClass("on-view")
    }

    if (Math.abs(lastScrollTop - winT) <= delta) return;
    if (winT < 300){
        $(".s3--goLink").addClass("hide")
    } else {
        $(".s3--goLink").removeClass("hide")
        if ((winT > lastScrollTop) && (lastScrollTop > 0)) {
            $(".s3--goLink").removeClass("hide")
        } else {
            $(".s3--goLink").addClass("hide")
        }
    }
    lastScrollTop = winT;
})