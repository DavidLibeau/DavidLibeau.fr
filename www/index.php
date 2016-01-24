
        <?php require "resrc/html/AllHead.html"; ?>
    <link rel="stylesheet" href="StyleSheet.css" type="text/css" />
    <link href="ordiScroll.css" rel="stylesheet"/>
    <link rel="icon" type="image/png" href="http://davidlibeau.fr/resrc/img/favicon.png" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <title>David Libeau</title> <!-- - Cr&eacute;ation de site web, r&eacute;alisation de vid&eacute;o... -->
    <meta name="keywords" content="David Libeau, création site web, réalisation vidéo" />
    <meta name="description" content="DavidLibeau.fr - Etudiant passionné par le multimédia" />
	<?php
	if(isset($_GET["theme"]) && $_GET["theme"]=="starwars"){
		?>
	<link rel="stylesheet" href="starwars.css" type="text/css" />
	<?php } ?>
	</head>


<body>

<div id="loadanimation">
<h3>Chargement en cours...</h3>
<div class="sk-fading-circle">
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
</div>

<span><a href="?connexion=lente">Connexion lente ?</a></span>

</div>

<?php
    if(isset($_GET["connexion"]) && $_GET["connexion"]=="lente" || isset($_GET["theme"]) && $_GET["theme"]=="starwars"){
?>
    <div id="infoConnexion" style="display: none">lente</div>
<?php
    } else {
?>
<div id="scrollOrdiScroll"></div>
<header id="ordiScroll">
    <h1><strong>D</strong>avid<strong>L</strong>ibeau<em>.fr</em></h1>
    <p>
        <?php
            for($i=1;$i<=12;$i++){
                echo("<img src=\"resrc/img/OrdiScroll/".$i.".jpg\">");
            }
        ?>
    </p>
    <div><button>Entrer</button></div>
</header>

<?php
    } //connexion lente
?>

<div id="inload">

<div id="top">
    <i id="topmenuicon" class="fa fa-bars"></i>
    <ul id="topmenu">
        <li><i class="fa fa-rocket"></i>Themes
            <ul>
                <?php
                if(isset($_GET["theme"]) && $_GET["theme"]=="starwars") {
                ?>
                    <li><a href="/"><i class="fa fa-square-o"></i>Par défaut</a></li>
                    <li class="ui-state-disabled"><i class="fa fa-check-square-o"></i>Star Wars</li>
                <?php
                } else {
                ?>
                    <li class="ui-state-disabled"><i class="fa fa-check-square-o"></i>Par défaut</li>
                    <li><a href="?theme=starwars"><i class="fa fa-square-o"></i>Star Wars</a></li>
                <?php   } ?>
                <li class="ui-state-disabled">...</li>
            </ul>
        </li>
        <li><a href="About" target="_blank"><i class="fa fa-info"></i>Info</a></li>
        <li><a href="//github.com/DavidLibeau/DavidLibeau.fr" target="_blank"><i class="fa fa-github"></i>Open sources</a></li>
        <li><a href="Contact" target="_blank"><i class="fa fa-pencil"></i>Contact</a></li>
    </ul>

    <span id="toptime">00:00</span>
</div>

<?php require "resrc/html/Panel.html"; ?>

<footer>
    <div>
        <p><i class="fa fa-exclamation-triangle"></i> Site web en constant développement/amélioration ! :)</p>
    </div>
</footer>


</div>


<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-49518822-1', 'davidlibeau.fr');
    ga('send', 'pageview');
    
</script>
<script type="text/javascript" src="//dav.li/jquery/2.1.4.js"></script>
<script type="text/javascript" src="//dav.li/jquery/ui/jquery-ui.js"></script>
<script type="text/javascript" src="Script.js"></script>
<script src="ordiScroll.js"></script>
<script>
	$(document).ready(function() {
		$('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
</script>
</body>
</html>