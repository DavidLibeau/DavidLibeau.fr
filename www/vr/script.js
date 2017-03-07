AFRAME.registerComponent('log', {
    schema: {
        type: 'string'
    },
    init: function () {
        var stringToLog = this.data;
        console.log(stringToLog);

    }
});

AFRAME.registerComponent('hover-color', {
    schema: {
        type: 'string'
    },
    init: function () {
        var thisparent = this;
        var elem = this.el;

        elem.addEventListener("mouseenter", switchColor);
        elem.addEventListener("mouseleave", switchColor);


        function switchColor(evt) {
            var hoverColor = thisparent.data;
            var color = elem.getAttribute("color");
            elem.setAttribute("color", hoverColor);
            elem.setAttribute("hover-color", color);
        }

    }
});

AFRAME.registerComponent('include-script', {
    schema: {
        type: 'string'
    },
    init: function () {
        console.log("Init");


        var scene = document.querySelector('a-scene');

        /* Logo Script */
        var logoScript = scene.querySelectorAll(".logoScript");
        for (var e = 0; e < logoScript.length; e++) {
            logoScript[e].addEventListener("mouseenter", function () {
                easeIn("#logoScriptBg", 19);
            });
            logoScript[e].addEventListener("mouseleave", function () {
                easeOut("#logoScriptBg", 19);
            });
        }

        /* #arrowLeft */
        scene.querySelector("#arrowLeft").addEventListener("click", function () {
            easeOut(".logoScript,#arrowLeft", 19);
            easeIn(".CV", 19);
            console.log("Click");
        });
        
        

        /* Functions */
        function easeOut(selector, iEnd) {
            var i = 0;
            var animInterval = setInterval(function () {
                i++;
                var elem = scene.querySelectorAll(selector);
                for (var e = 0; e < elem.length; e++) {
                    elem[e].setAttribute("opacity", 1 - (0.05 * i));
                    if (i == iEnd) {
                        clearInterval(animInterval);
                        elem[e].setAttribute("visible", "false");
                        elem[e].setAttribute("opacity", 0);
                    }
                }
            }, 10);
        }

        function easeIn(selector, iEnd) {
            var i = 0;
            var animInterval = setInterval(function () {
                i++;
                var elem = scene.querySelectorAll(selector);
                for (var e = 0; e < elem.length; e++) {
                    elem[e].setAttribute("visible", "true");
                    elem[e].setAttribute("opacity", 0.05 * i);
                    if (i == iEnd) {
                        clearInterval(animInterval);
                    }
                }
            }, 10);
        }
    }
});