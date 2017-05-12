"use strict";



var noScroll = false;
/* Drag & drop scroll */

$(document).on("dragstart", function () {
    return false;
});

var curDown = false,
    curXPos = 0,
    mainScrollLeft = 0;
$("main").mousemove(function (m) {
    if (curDown === true && !noScroll) {
        $("main").scrollLeft(mainScrollLeft + (curXPos - m.pageX));

        $("main").css("cursor", "-webkit-grabbing");
    } else {
        $("main").css("cursor", "-webkit-grab");
    }
});

$("main").mousedown(function (m) {
    curDown = true;
    curXPos = m.pageX;
    mainScrollLeft = $("main").scrollLeft();
    $("main").css("cursor", "-webkit-grabbing");
});

$(window).mouseup(function () {
    curDown = false;
    $("main").css("cursor", "-webkit-grab");
});
//url(\"resrc/img/cursor_HandsOpen.png\")



/* Horizontal scroll */

$(window).on("wheel", function (event) {
    if (!noScroll) {
        $("main").scrollLeft($("main").scrollLeft() - event.originalEvent.wheelDelta);
    }
});



/* Auro scroll */

$.fn.scrollEnd = function (callback, timeout) {
    $(this).scroll(function () {
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
};
$.fn.resizeEnd = function (callback, timeout) {
    $(this).resize(function () {
        var $this = $(this);
        if ($this.data('resizeTimeout')) {
            clearTimeout($this.data('resizeTimeout'));
        }
        $this.data('resizeTimeout', setTimeout(callback, timeout));
    });
};

$("main").scrollEnd(autoScroll, 500);
$(window).resizeEnd(autoScroll, 500);

function autoScroll() {
    if ($("section:nth-child(3)").is(":hover")) {
        var timeoutVR;
        $("section:nth-child(3)").mouseleave(function () {
            timeoutVR = setTimeout(autoScroll, 1500);
        });
        $("section:nth-child(3)").mouseenter(function () {
            clearTimeout(timeoutVR);
        });
    } else {
        if ($("main").scrollLeft() < ($(window).width() / 2)) {
            $("main").animate({
                scrollLeft: 0
            }, 500);
            changeAnchor("welcome");
            $("#welcome").css("background-color", "#424242");
        } else {
            $("main").animate({
                scrollLeft: $(window).width()
            }, 500);
            changeAnchor("panels");
            $("#welcome").css("background-color", "#ffffff");
        }
    }
}

function changeAnchor(anchor) {
    setTimeout(function () {
        window.location = window.location.href.substring(0, window.location.href.indexOf("#")) + "#" + anchor;
    }, 200);
}



/* Auto scroll on load */

if (window.location.href.substring(window.location.href.indexOf("#") + 1) == "panels") {
    $("main").scrollLeft($(window).width());
}

/* #welcome background effect */

$("main").scroll(function () {
    var colorHex = parseInt((($("main").scrollLeft() / $(window).width()) * (255 - 66)) + 66).toString(16);
    if ($("main").scrollLeft() <= $(window).width()) {
        $("#welcome").css("background-color", "#" + colorHex + colorHex + colorHex);
    }

});



/* Logo */

setTimeout(function () {
    $("#logo img").css("opacity", "1").attr("src", $("#logo img").attr("src") + "?" + new Date().getTime()).click(animLogo);
}, 500);

function animLogo() {
    $("#logo img").attr("src", $("#logo img").attr("src") + "#" + new Date().getTime())
}



/* Panels */

$("#panels a:not(#logo a)").click(function (evt) {
    var $this = $(this);
    evt.preventDefault();
    noScroll = true;
    $("main").css("overflow", "hidden");

    var contentframe = $(this).parent().clone().css({
        "position": "fixed",
        "top": $(this).offset().top,
        "bottom": ($(window).height() - ($(this).offset().top + $(this).height() + 40)),
        "left": $(this).offset().left,
        "right": ($(window).width() - ($(this).offset().left + $(this).width() + 80)),
        "-webkit-transition": "all 0.2s ease-out",
        "-moz-transition": "all 0.2s ease-out",
        "-ms-transition": "all 0.2s ease-out",
        "-o-transition": "all 0.2s ease-out",
        "transition": "all 0.2s ease-out"
    }).prependTo("#contentframe");

    setTimeout(function () {
        contentframe.css({
            "top": 0,
            "left": 0,
            "right": 0,
            "bottom": "3vw",
            "margin": "1vw calc(4vw - 5px)"
        }).children("a").click(function (evt) {
            evt.preventDefault();
        }).css({
            "cursor": "default"
        });
    }, 100);
    $("#contentframe nav .fa-close").click(function () {
        $(this).parents("li").fadeOut(100);
        noScroll = false;
        $("main").css("overflow", "");
    });
    $("#contentframe nav .fa-external-link-square").click(function () {
        window.open($(this).parents("li").children("a").attr("href"));
    });
    $("#contentframe li>:not(a)").css("display", "block");
    setTimeout(function () {
        $("#contentframe li>:not(a)").css({
            "opacity": "1",
            "transform": "translateY(0)"
        });
        console.log($this.attr("href") + " " + $this.data("target"));
        if ($this.data("target") == "iframe") {
            contentframe.children("div").html("<iframe src=\"" + $this.attr("href") + "\"></iframe>");
            contentframe.children("iframe").on("load",function () {
                $("#contentframe .fa-refresh").remove();
            });
            setTimeout(function(){
                console.log("load");
                $("#contentframe .fa-refresh").fadeOut(800);
            },1000);
        }
    }, 300);
});


/* Panel:nth-child(1) */
$(document).ready(function(){
    setTimeout(function(){
        $('#welcome [href="#panels"]').html('Entrer<i class="fa fa-arrow-right" aria-hidden="true" style="padding-left: 10px"></i>');
    }, 1000);
});
