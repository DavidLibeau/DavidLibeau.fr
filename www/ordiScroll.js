$(document).ready(function () {
    positionOrdiImg();
    $(window).resize(positionOrdiImg);

    scrollOrdi();
    $(window).scroll(scrollOrdi);

    $("#ordiScroll>div>button").click(function () {
        $("html, body").animate({ scrollTop: $(document).height() }, 2000);
    });

});


function scrollOrdi(event) {
    var scroll = parseInt(($(window).scrollTop() / $(window).height()) * 100);
    //console.log(scroll + "%");
    if (scroll < 1 * (100 / 12)) {
        ordiStep = 1;
    }
    if (scroll >= 1 * (100 / 12) && scroll < 2 * (100 / 12)) {
        ordiStep = 2;
    }
    if (scroll >= 2 * (100 / 12) && scroll < 3 * (100 / 12)) {
        ordiStep = 3;
    }
    if (scroll >= 3 * (100 / 12) && scroll < 4 * (100 / 12)) {
        ordiStep = 4;
    }
    if (scroll >= 4 * (100 / 12) && scroll < 5 * (100 / 12)) {
        ordiStep = 5;
    }
    if (scroll >= 5 * (100 / 12) && scroll < 6 * (100 / 12)) {
        ordiStep = 6;
    }
    if (scroll >= 6 * (100 / 12) && scroll < 7 * (100 / 12)) {
        ordiStep = 7;
    }
    if (scroll >= 7 * (100 / 12) && scroll < 8 * (100 / 12)) {
        ordiStep = 8;
    }
    if (scroll >= 8 * (100 / 12) && scroll < 9 * (100 / 12)) {
        ordiStep = 9;
    }
    if (scroll >= 9 * (100 / 12) && scroll < 10 * (100 / 12)) {
        ordiStep = 10;
    }
    if (scroll >= 10 * (100 / 12) && scroll < 11 * (100 / 12)) {
        ordiStep = 11;
    }
    if (scroll >= 11 * (100 / 12)) {
        ordiStep = 12;
    }
    if (scroll >= 100) {
        $("#inload").fadeIn();
        $("body").css("overflow", "hidden");
    } else {
        $("#inload").hide();
    }

    $("#ordiScroll>p>img").hide();
    $("#ordiScroll>p>img:nth-child(" + ordiStep + ")").show();

    var ordiTranslate = (ordiStep - 1) * 30;
    var ordiScale = parseFloat(1 + parseFloat(ordiStep / 40));
    $("#ordiScroll>p>img:nth-child(" + ordiStep + ")").css({
        "-ms-transform": "scale(" + ordiScale + "," + ordiScale + ")",
        "-webkit-transform": "scale(" + ordiScale + "," + ordiScale + ")",
        "transform": "scale(" + ordiScale + "," + ordiScale + ")"
    });
    if (scroll < 5 * (100 / 12)) {
        $("#ordiScroll>h1,#ordiScroll>div>button").css("opacity", 1 / (ordiStep - 1 / 12));
    } else {
        $("#ordiScroll>h1,#ordiScroll>div>button").css("opacity", "0");
    }
}


function positionOrdiImg(event) {
    if ($("#ordiScroll>p>img:nth-child(1)").height() > $(window).height()) {
        $("#ordiScroll>p>img").css({
            "position": "absolute",
            "bottom": "0"
        });
    } else {
        $("#ordiScroll>p>img").css({
            "position": "",
            "bottom": ""
        });
    }
}