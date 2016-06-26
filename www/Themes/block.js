"use strict";
var STOPSCROLL = false;

$(document).ready(function () {
    setTimeout(function () {

        $(window).scroll(scrollBlock);
        scrollBlock();
        //console.log($(document).height());
        $("body").css("overflow", "auto");
    }, 10);

    $("#top").click(function () {
        $("main").animate({
            scrollTop: "0px"
        }, 0);
        $("html, body").animate({
            scrollTop: "0px"
        }, 500);
    });

    $("main>h2").click(function () {
        $("html, body").animate({
            scrollTop: $(window).height() * 0.72 + "px"
        }, 500);
    });

    setTimeout(function () {
        $("#logo").css("opacity", "1").attr("src", $("#logo").attr("src") + "?" + new Date().getTime()).click(function () { $("#logo").attr("src", $("#logo").attr("src") + "#" + new Date().getTime()) });
    }, 1000);

    setTimeout(function () {
        $("#titleheader>h1").css("letter-spacing", "1.5vw");
    }, 100);


    $(".panel").on("mousedown", function (evt) {
        evt.preventDefault();
    }).click(function (evt) {

        if ($(this).attr("target") == "_blank" || $(this).attr("data-popup") == "no") {

        } else {
            evt.preventDefault();
            $.ajax({
                type: "GET",
                url: $(this).attr("href"),
                data: { data: "pure" },
                dataType: "html",
                complete: function (returned) {
                    var htmldom = $.parseHTML(returned.responseText);
                    //console.log(htmldom);
                    var i = 0;
                    while (htmldom[i].className != "content") {
                        i++;
                    }
                    if (i !== 0) {
                        $("main").html(htmldom[i].innerHTML);
                        $("html, body").animate({
                            scrollTop: $(window).height() * 0.72-100 + "px"
                        }, 400);
                        console.log(htmldom[i].innerHTML);
                    }
                }
            });
        }
    });

});

function scrollBlock(evt) {
    if ($("main").scrollTop() != 0) {
        $("html, body").animate({
            scrollTop: $("#inload").height()+ "px"
        }, 0);
    }

    var scroll = parseInt(($(window).scrollTop() / $(window).height()) * 100);
    //console.log(scroll + "%");
    if(scroll>=72){ //72% de scroll=100-28(hauteur de #top)
        
        $("#fleche").css("transform", "rotate(-"+90+"deg)");
        
        $("main").css({
            "top": "13vh",
            "overflow-y": "scroll"
        });
        //$("main>*:nth-child(n+2)").css("top", -($(window).scrollTop()-($(window).height()*0.72))+"px");

        $("#header").css({
            "display": "none",
            "opacity": 0
        });

    } else { //scroll normal
        $("#fleche").css("transform", "rotate(-"+90*(scroll/72)+"deg)");

        $("main").css({
            "top": 84-scroll+"vh",
            "overflow-y":"hidden"        
        });


        $("#header").css({
            "display": "block",
            "opacity": 1 - (scroll / 72)
        });
    }

    if($(window).scrollTop()==$(document).height()-$(window).height()){ //fin de page
        //console.log("----- END -----");

        $("#header").css("visibility", "visible");
        $("#inload").on("mousewheel", function (event) {
            console.log(event.deltaX, event.deltaY, event.deltaFactor);
            //console.log($("main").scrollTop());
            $("main").scrollTop($("main").scrollTop() + (-event.deltaY * event.deltaFactor));
        });

    }else{
        $("#inload").off("mousewheel");
    }

}





/* SMOOTH SCROLL */

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});