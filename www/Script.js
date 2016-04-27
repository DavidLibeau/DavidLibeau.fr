"use strict";
var topmenu = false;
var VISIBLE = true;
var NOTVISIBLE = false;
//var timeouthoverpanel;
window.addEventListener("load", init);
//setTimeout(function () { document.body.style.opacity = "1" }, 50);
//var bodyHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue("height"), 10);
//window.scrollTo(0, bodyHeight/2);

function init(evt) {
    $("#loadanimation").fadeOut();
    if($("#infoConnexion").html()=="lente"){
        $("#inload").show();
    }else {
        $("#scrollOrdiScroll").show();
    }
    $("#inload").css("background-image", "url(./resrc/img/B3bis.jpg)");
    //$("body").css("overflow", "auto");
    //var bodyHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue("height"), 10);
    //bodyHeight = bodyHeight - 200;
    //window.scrollTo(0, bodyHeight);
    //setTimeout(function () { window.scrollTo(0, bodyHeight) }, 50);
    //window.scrollTo(0, document.body.scrollTop -(0.1*window.innerHeight)); 
    console.log("Page chargée !");
    //document.addEventListener('scroll', endScroll);
    time();
    setInterval(time, 5000);

    $("#topmenu").menu();

    $("#topmenuicon").click(function (evt) {
        $("#topmenuicon").css("color", "#0070c0");
        $("#topmenu").show();
        /*$("#top").css("mix-blend-mode", "normal");*/
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


function time() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    if (minutes < 10)
        minutes = "0" + minutes

    $("#toptime").html(hours + ":" + minutes);
    console.log(hours + ":" + minutes);
}


/*function endScroll(evt) {
    var scroll = parseInt((document.body.scrollTop / document.body.scrollHeight)*200)-25;
    console.log(scroll);
    document.getElementById("footer").style.height =  scroll+ "vh";
    /*if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
        setTimeout(function () { $('html, body').animate({ scrollTop: document.body.scrollTop - (0.1 * window.innerHeight) }, 400) }, 200);
        document.querySelector("#desk #pieds").style.height = "10vh";
        document.getElementById("desk").style.height = "110vh";
        document.querySelector("#desk>img").style.bottom = "10vh";
    } else {
        //console.log("Not bottom!");
    }
}
*/

// Extends the dialog widget with a new option.
$.widget("app.dialog", $.ui.dialog, {

    options: {
        iconButtons: []
    },

    _create: function () {

        // Call the default widget constructor.
        this._super();

        // The dialog titlebar is the button container.
        var $titlebar = this.uiDialog.find(".ui-dialog-titlebar");

        // Iterate over the "iconButtons" array, which defaults to
        // and empty array, in which case, nothing happens.
        $.each(this.options.iconButtons, function (i, v) {

            // Finds the last button added. This is actually the
            // left-most button.
            var $button = $("<button/>").text(this.text),
                right = $titlebar.find("[role='button']:last")
                                    .css("right");

            // Creates the button widget, adding it to the titlebar.
            $button.button({ icons: { primary: this.icon }, text: false })
                    .addClass("ui-dialog-titlebar-close")
                    .css("right", (parseInt(right) + 22) + "px")
                    .click(this.click)
                    .appendTo($titlebar);

        });

    }

});


$(".panel").on("mousedown", function (evt) {
    evt.preventDefault();
}).click(function (evt) {
    
    if ($(this).attr("target") == "_blank" || $(this).attr("data-popup") == "no") {

    } else {
        evt.preventDefault();
        $("<div title=\"" + $(this).children("p").html() + "\"><iframe src=\"" + $(this).attr("href") + "\" style=\"border:none; min-height:100%; min-width: 100%;\"></iframe></div>").dialog(
            {
                height: $(window).height() / 1.5,
                width: $(window).width() / 1.5,
                closeOnEscape: true,
                closeText: "Fermer",
                appendTo: "#inload",
                iconButtons: [
                {
                    text: "Agrandir",
                    icon: "ui-icon-arrow-4-diag",
                    click: function (evt) {
                        if (parseInt($(this).parents(".ui-dialog").css("width")) == $(window).width()) {
                            $(this).parents(".ui-dialog").css({
                                "border-radius": "5px",
                                "top": "16.5vh",
                                "left": "16.5vw",
                                "height": $(window).height() / 1.5,
                                "width": $(window).width() / 1.5
                            });
                            $(this).parents(".ui-dialog").children(".ui-dialog-content").css({
                                "min-height": "100%"
                            });
                        } else {
                            $(this).parents(".ui-dialog").css({
                                "position": "fixed",
                                "border-radius": "0",
                                "top": 0,
                                "left": 0,
                                "height": "95vh",
                                "width": "100vw",
                                "z-index": "999"
                            });
                            $(this).parents(".ui-dialog").children(".ui-dialog-content").css({
                                "min-height": "96vh"
                            });
                        }
                    }
                },
                {
                    text: "Réduire",
                    icon: "ui-icon-arrowthickstop-1-s",
                    click: function (evt) {

                    }
                },
                {
                    text: "Ouvrir dans un nouvel onglet",
                    icon: "ui-icon-extlink",
                    click: function (evt) {
                        window.open($(this).parents(".ui-dialog").children(".ui-dialog-content").children("iframe").attr("src"), "_newtab");
                    }
                }
            ]
            }).draggable({ containment: "#inload", scroll: false });
    }
});


//////////////// ROTATE

jQuery.fn.rotate = function (degrees) {
    $(this).css({ '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        'transform': 'rotate(' + degrees + 'deg)'
    });
};

////////////////
/*$(".panel").hover(
    function () {
        var description = $(this).children("p").html();
        var iframelink = $(this).attr("href")+"/content.txt";
        timeouthoverpanel = setTimeout(function () {
            $("footer>.header>h1").html(description);
            jQuery.get(iframelink, function(data) {
               $("footer .contentimport").html(data.replace('n','<br />'));
            });
            //$("footer .contentimport>iframe").attr("src", iframelink);
        }, 400);
    },
    function () {
        clearTimeout(timeouthoverpanel);
    }
);

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    var val = scrollTop / 5;
    $("footer>.imageheader").css("height", val + "vh");
});*/



//////// Drag & drop scroll

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
      } else {
          $("#header").css("cursor", "url(resrc/img/cursor_HandsOpen.png),grab");
      }
  });

  $("#header").mousedown(function (m) {
      curDown = true;
      curYPos = m.pageY;
      curXPos = m.pageX;
      HscrollTop = $("#header").scrollTop();
      HscrollLeft = $("#header").scrollLeft();
      $("#header").css("cursor", "url(resrc/img/cursor_HandsClose.png),grabbing");
  });

  $(window).mouseup(function () {
      curDown = false;
      $("#header").css("cursor", "url(resrc/img/cursor_HandsOpen.png),grab");
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

  /* Stop le scroll au hover des .panel s
  $(".panel").hover(function(){
    curDown = false;
    $("#header").css("cursor", "url(resrc/img/cursor_HandsOpen.png),grab");
  });*/