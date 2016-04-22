$(document).ready(function () {
    setTimeout(function () {
        $("#inload").css("height", $(document).height() + "px");
        $(window).scroll(scrollBlock);
        scrollBlock();
        //console.log($(document).height());
        $("body").css("overflow", "auto");
    }, 10);

    $("#top>h1").click(function () {
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
        $("#logo").css("opacity", "1").attr("src", $("#logo").attr("src") + "#" + new Date()).click(function(){$("#logo").attr("src", $("#logo").attr("src") + "#" + new Date())});
    }, 1000);
});

function scrollBlock(evt) {
    var scroll = parseInt(($(window).scrollTop() / $(window).height()) * 100);
    //console.log(scroll + "%");
    if(scroll>=72){
        
        $("#fleche").css("transform", "rotate(-"+90+"deg)");


        $("#bottom").css({
            "position": "fixed",
            "top": "13vh",
            "bottom": "-10vh"
        });
        $("#bottom>*:nth-child(n+2)").css("top", -($(window).scrollTop()-($(window).height()*0.72))+"px"); //-($(window).height()*0.66))-(15/$(window).height()*100)
    } else {
        $("#fleche").css("transform", "rotate(-"+90*(scroll/72)+"deg)");

        $("#bottom").css({
            "position": "relative",
            "top": "0",
            "bottom": "0"
        });
        $("#bottom>*").css("top", "0px");

        if($("#inload").css("height")!=$(document).height()){
            $("#inload").css("height", $(document).height() + "px");
        }
    }

    if($(window).scrollTop()==$(document).height()-$(window).height()){
        //console.log("----- END -----");
        $("#bottom").css({
            "bottom": "1vh"
        });
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