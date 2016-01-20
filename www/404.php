        <?php require "resrc/html/AllHead.html"; ?>
        <title>404</title>
        <style>
            body {
                background-color: black;
            }
            #matrice {
                opacity: 0;
                z-index: -99999;
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background-color: black;
                color: white;
                text-align: center;
                font-size: 50px;
                font-family: 'Comic Sans MS';
                text-decoration: none;
                padding-top: 10%;
            }
            * {
                -webkit-transition: all 4s ease;
                -moz-transition: all 4s ease;
                -ms-transition: all 4s ease;
                -o-transition: all 4s ease;
                transition: all 4s ease;
            }
            
            
        </style>
    </head>
    <body>
        <div id="window">
            <div class="times"><i class="fa fa-times"></i></div><a href="http://DavidLibeau.fr" id="times"></a>
            <div style="position: fixed; top: 200px; right: 30%; left: 30%; background-color: rgba(0,0,0,0.5); color: white; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; padding: 20px 20px; padding-bottom: 0;">
            <h1 style="margin: 0 0;">404 :(</h1>
            <h4>La page que vous recherchez n'a pas &eacute;t&eacute; trouv&eacute;e...</h4>
            <p style="text-align: center;"><a class="btn btn-small btn-primary" href="http://davidlibeau.fr/">Revenir à l'accueil</a><i style="margin: 0 10px;">ou</i>
            <a class="btn btn-small btn-rouge" href="#" onclick="matriceClick()" onmouseover="matriceHover()">Rentrer dans la matrice</a></p>
        </div>
        </div>
            <a id="matrice" href="http://davidlibeau.fr"> BOUH ! Je fais peur !</a>
    </body>

<script>
    function matriceClick() {
        var matrice = document.getElementById('matrice');
        matrice.style.opacity = "100";
        matrice.style.filter = 'alpha(opacity=100)'; // IE fallback

        var window = document.getElementById('window');
        window.style.opacity = "0";
        window.style.filter = 'alpha(opacity=0)'; // IE fallback
    }

</script>
</html>
