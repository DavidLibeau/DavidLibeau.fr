$(document).ready(function () {
    setTimeout(function () {
        $("#inload").css("height", $(document).height() + "px");
        $(window).scroll(scrollBlock);
        scrollBlock();
        console.log($(document).height());
        $("body").css("overflow", "auto");
    }, 10);

});

function scrollBlock(evt) {
    var scroll = parseInt(($(window).scrollTop() / $(window).height()) * 100);
    console.log(scroll + "%");
    if(scroll>=72){
        $("#bottom").css({
            "position": "fixed",
            "top": "13vh",
            "bottom": "-10vh"
        });
        $("#bottom>*").css("top", -($(window).scrollTop()-($(window).height()*0.72))+"px"); //-($(window).height()*0.66))-(15/$(window).height()*100)
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