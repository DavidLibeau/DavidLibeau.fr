$(document).ready(function () {
    setTimeout(function () {
        $("#inload").css("height", ((84 * $(window).height()) / 100) + $("#bottom").height() + "px");
        $(window).scroll(scrollBlock);
        scrollBlock();
        //console.log($(document).height());
        $("body").css("overflow", "auto");
    }, 10);

    $("#top").click(function () {
        $("html, body").animate({
            scrollTop: "0px"
        }, 500);
    });

    $("#bottom>h2").click(function () {
        $("html, body").animate({
            scrollTop: $(window).height() * 0.72 + "px"
        }, 500);
    });

    setTimeout(function () {
        $("#logo").css("opacity", "1").attr("src", $("#logo").attr("src") + "#" + new Date().getTime()).click(function () { $("#logo").attr("src", $("#logo").attr("src") + "#" + new Date().getTime()) });
    }, 1000);

    setTimeout(function () {
        $("#titleheader>h1").css("letter-spacing", "30px");
    }, 100);
});

function scrollBlock(evt) {
    var scroll = parseInt(($(window).scrollTop() / $(window).height()) * 100);
    //console.log(scroll + "%");
    if(scroll>=72){ //72% de scroll=100-28(hauteur de #top)
        
        $("#fleche").css("transform", "rotate(-"+90+"deg)");
        
        $("#bottom").css({
            "top": "13vh",
            "bottom": "-10vh"
        });
        $("#bottom>*:nth-child(n+2)").css("top", -($(window).scrollTop()-($(window).height()*0.72))+"px"); //-($(window).height()*0.66))-(15/$(window).height()*100)

        $("#header").css({
            "display": "none",
            "opacity": 0
        });

    } else { //scroll normal
        $("#fleche").css("transform", "rotate(-"+90*(scroll/72)+"deg)");

        $("#bottom").css("top", 84-scroll+"vh");
        $("#bottom>*").css("top", "0px");


        $("#header").css({
            "display": "block",
            "opacity": 1 - (scroll / 72)
        });
    }

    if($(window).scrollTop()==$(document).height()-$(window).height()){ //fin de page
        //console.log("----- END -----");
        $("#bottom").css({
            "bottom": "1vh"
        });

        $("#header").css("visibility", "visible");
    }

}




/* MAP 

var map = L.map('map', {
    scrollWheelZoom: false,
    center: [51.505, -0.09],
    zoom: 13
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy;',
	id: 'mapbox.streets'
}).addTo(map);


L.marker([51.5, -0.09]).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
*/




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