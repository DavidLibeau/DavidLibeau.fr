$(document).ready(function () {
    setTimeout(function () {
        $("#inload").css("height", $(document).height()+(10*($(window).height()/100)) + "px");
        $(window).scroll(scrollBlock);
        scrollBlock();
        console.log($(document).height());
    }, 10);
});

function scrollBlock(evt) {
    var scroll = parseInt(($(window).scrollTop() / $(window).height()) * 100);
    console.log(scroll + "%");
    if(scroll>=67){
        $("#bottom").css({
            "position": "fixed",
            "top": "13vh",
            "bottom": "-10vh"
        });
        $("#bottom>*").css("top", -($(window).scrollTop()-($(window).height()*0.66))+"px");
    } else {
        $("#bottom").css({
            "position": "relative",
            "top": "0",
            "bottom": "0"
        });
        $("#bottom>*").css("top", "0px");
    }

    if($(window).scrollTop()==$(document).height()-$(window).height()){
        console.log("----- END -----");
        $("#bottom").css({
            "bottom": "1vh"
        });
    }
}