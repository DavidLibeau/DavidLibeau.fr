"use strict";
var topmenu = false;
var VISIBLE = true;
var NOTVISIBLE = false;
window.addEventListener("load", init);

function init(evt) {
    $("#loadanimation").fadeOut();
    if($("#infoConnexion").html()=="lente"){
        $("#inload").show();
    }else {
        $("#scrollOrdiScroll").show();
    }
    $("#inload").css("background-image", "url(./resrc/img/B3bis.jpg)");
    console.log("Page chargée !");

    $("#topmenu").menu();
    $("#topmenuicon").click(function (evt) {
        $("#topmenuicon").css("color", "#0070c0");
        $("#topmenu").show();
        setTimeout(function(){ topmenu=VISIBLE; }, 10);
    });

   $(window).click(function () {
        if(topmenu==VISIBLE){
            $("#topmenuicon").css("color", "");
            $("#topmenu").hide();
            $("#top").css("mix-blend-mode", "");
            setTimeout(function(){ topmenu=NOTVISIBLE; }, 10);
        }
    });

    $(".bulleAlerte").tooltip({
        track: true,
        content: function(){
            return "<i class= \"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> "+$(this).attr("title");
        }
    });
}



/* Drag & drop scroll */

  var curDown = false,
      curYPos = 0,
      curXPos = 0,
      HscrollTop=0,
      HscrollLeft=0;
  $("#header").mousemove(function (m) {
      if (curDown === true) {
          $("#header").scrollTop(HscrollTop + (curYPos - m.pageY));
          $("#header").scrollLeft(HscrollLeft + (curXPos - m.pageX));

          $(".panel").css("opacity", "0.9");
          $(".panel").css({
              "-webkit-transition": "all 0.1s ease-in-out",
              "-moz-transition": "all 0.1s ease-in-out",
              "-o-transition": "all 0.1s ease-in-out",
              "transition": "all 0.1s ease-in-out"
          });
          $("#header").css("cursor", "-webkit-grabbing");
      } else {
          $("#header").css("cursor", "-webkit-grab");
      }
  });

  $("#header").mousedown(function (m) {
      curDown = true;
      curYPos = m.pageY;
      curXPos = m.pageX;
      HscrollTop = $("#header").scrollTop();
      HscrollLeft = $("#header").scrollLeft();
      $("#header").css("cursor", "-webkit-grabbing");
  });

  $(window).mouseup(function () {
      curDown = false;
      $("#header").css("cursor", "-webkit-grab");
      $(".panel").css("opacity", "1");
      setTimeout(function () {
          $(".panel").css({
              "-webkit-transition": "all 0.4s ease-in-out",
              "-moz-transition": "all 0.4s ease-in-out",
              "-o-transition": "all 0.4s ease-in-out",
              "transition": "all 0.4s ease-in-out"
          });
      }, 400);
  });