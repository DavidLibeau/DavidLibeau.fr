    <?php if(!isset($_GET["theme"]) || $_GET["theme"]==""){ 
         header("Location: /?theme=block");
    }?>

    <?php require "resrc/html/AllHead.html"; ?>
    <link rel="stylesheet" href="StyleSheet.css" type="text/css" />
    <link href="ordiScroll.css" rel="stylesheet"/>
    <link rel="icon" type="image/png" href="http://davidlibeau.fr/resrc/img/favicon.png" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <title>David Libeau</title> <!-- - Cr&eacute;ation de site web, r&eacute;alisation de vid&eacute;o... -->
    <meta name="keywords" content="David Libeau, création site web, réalisation vidéo" />
    <meta name="description" content="DavidLibeau.fr - Etudiant passionné par le multimédia" />
	<?php if(isset($_GET["theme"]) && $_GET["theme"]!=""){ ?>
	<link rel="stylesheet" href="Themes/<?php echo($_GET["theme"]); ?>.css" type="text/css" />
	<?php } ?>
	</head>


<body>

<div id="loadanimation">
<h3>Chargement en cours...</h3>
<div class="fading-circle">
  <div class="circle1 circle"></div>
  <div class="circle2 circle"></div>
  <div class="circle3 circle"></div>
  <div class="circle4 circle"></div>
  <div class="circle5 circle"></div>
  <div class="circle6 circle"></div>
  <div class="circle7 circle"></div>
  <div class="circle8 circle"></div>
  <div class="circle9 circle"></div>
  <div class="circle10 circle"></div>
  <div class="circle11 circle"></div>
  <div class="circle12 circle"></div>
</div>

<span><a href="?connexion=lente">Connexion lente ?</a></span>

</div>

<?php
    if(isset($_GET["connexion"]) && $_GET["connexion"]=="lente" || isset($_GET["theme"]) && $_GET["theme"]!="bonjour"){
?>
    <div id="infoConnexion" style="display: none">lente</div>
<?php
    } else {
?>
<div id="scrollOrdiScroll"></div>
<header id="ordiScroll">
    <h1><strong>D</strong>avid<strong>L</strong>ibeau<em>.fr</em><a id="badgeBeta" href="//github.com/DavidLibeau/DavidLibeau.fr" target="_blank"><img src="resrc/img/badgeBeta.png" alt="Badge beta"/></a></h1>
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
                if(isset($_GET["theme"]) && $_GET["theme"]=="bonjour") {
                ?>
                    <li class="ui-state-disabled"><i class="fa fa-check-square-o"></i>Par défaut</li>
                <?php
                } else {
                ?>
                    <li><a href="?theme=bonjour"><i class="fa fa-square-o"></i>Par défaut</a></li>
                <?php   } 
                if(isset($_GET["theme"]) && $_GET["theme"]=="block") {
                ?>
                    <li class="ui-state-disabled"><i class="fa fa-check-square-o"></i>Block</li>
                <?php
                } else {
                ?>
                    <li><a href="?theme=block"><i class="fa fa-square-o"></i>Block</a></li>
                <?php   } 
                if(isset($_GET["theme"]) && $_GET["theme"]=="starwars") {
                ?>
                    <li class="ui-state-disabled"><i class="fa fa-check-square-o"></i>Star Wars</li>
                <?php
                } else {
                ?>
                    <li><a href="?theme=starwars"><i class="fa fa-square-o"></i>Star Wars</a></li>
                <?php   } ?>
            </ul>
        </li>
        <li><a href="About" target="_blank"><i class="fa fa-info"></i>Info</a></li>
        <li><a href="//github.com/DavidLibeau/DavidLibeau.fr" target="_blank"><i class="fa fa-github"></i>Open sources</a></li>
        <li><a href="Contact" target="_blank"><i class="fa fa-pencil"></i>Contact</a></li>
    </ul>
    <?php if(isset($_GET["theme"]) && $_GET["theme"]=="block"){ ?>
    <h1>David Libeau</h1>
    <?php } ?>
    <span id="toptime">00:00</span>
</div>

<?php require "resrc/html/Panel.html"; ?>

<?php if(isset($_GET["theme"]) && $_GET["theme"]=="block"){ ?>

<div id="bottom">
    <h2>
        <svg version="1.1" id="fleche" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="38.5px" height="58.4px" viewBox="0 0 38.5 58.4" enable-background="new 0 0 38.5 58.4" xml:space="preserve">
            <rect x="11.3" width="15.9" height="40.7"/>
            <polygon points="0,35.1 38.5,35.1 19.2,58.4 "/>
        </svg>
        En résumé</h2>
    <p id="hashtags"><span>développementWeb</span><span>création</span><span>multimédia</span><span>audiovisuel</span></p>
    <div id="portfolio">
        <a href="//AgenceDigitale.io" target="_blank" title="Une grosse boutade...">
            <img src="resrc/img/portfolio/agence-digitale-io.jpg" alt="Agence Digitale AgenceDigitale.io"/>
            <span>
                <h4>AgenceDigitale.io</h4>
                <p>Projet indépendant de fausse Agence "Digitale"</p>
            </span>
        </a>
        <a href="//dav.li/olympiades/" target="_blank" title="Fait en 15 heures top chrono !">
            <img src="resrc/img/portfolio/olympiades.jpg" alt="Participation Web Design Olympiades des métiers"/>
            <span>
                <h4>Olympiades</h4>
                <p>Participation aux 44e Olympiades des métiers en Web Design</p>
            </span>
        </a>
        <a href="//projectara.fr" target="_blank" title="On attend toujours...">
            <img src="resrc/img/portfolio/project-ara-fr.jpg" alt="Project Ara"/>
            <span>
                <h4>ProjectAra.fr</h4>
                <p>Site web d'actualité dédié au Project Ara</p>
            </span>
        </a>
        <a href="/Watch_Dogs_Font=HACKED_Title/" target="_blank" title="1/2 million de téléchargement sur DaFont quand même.">
            <img src="resrc/img/portfolio/watchdogs_hacked_font.jpg" alt="Watch Dogs Hacked Font"/>
            <span>
                <h4>Hacked Font</h4>
                <p>Police de caractères recrée à partir du jeu Watch Dogs</p>
            </span>
        </a>
    </div>

    <!--iframe id="map" src="//dav.li/map"></iframe-->

    <!--div id="map">
    </div-->

       

        <svg version="1.1" id="CV_experience" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-50 0 700 171.6" enable-background="new 0 0 595.3 171.6" xml:space="preserve">
        <polygon fill="#EDEDED" points="528.2,76 -50,76 -50,34 528.2,34 528.1,6 579.4,55.1 528.1,104.2 "/>
        <g>
	        <line fill="none" stroke="#136FB7" stroke-width="4" stroke-miterlimit="10" x1="118.5" y1="34.1" x2="118.5" y2="102.6"/>
	        <text transform="matrix(1 0 0 1 54.3843 75.957)" font-family="'BebasNeue'" font-size="38">2014</text>
	        <text transform="matrix(1 0 0 1 114.981 102.6436)" fill="#136FB7" font-family="'BebasNeue'" font-size="38">Bac</text>
	        <text transform="matrix(1 0 0 1 114.981 115)"><tspan x="0" y="0" font-family="'BebasNeue'" font-size="12">Sciences et Technologie de l'Industrie</tspan><tspan x="0" y="12" font-family="'BebasNeue'" font-size="12">et du Développement Durable</tspan><tspan x="0" y="26" fill="#136FB7" font-family="'BebasNeue'" font-size="16">49</tspan></text>
        </g>
        <g>
	        <line fill="none" stroke="#136FB7" stroke-width="4" stroke-miterlimit="10" x1="301" y1="34.1" x2="301" y2="102.6"/>
	        <text transform="matrix(1 0 0 1 236.8843 75.957)" font-family="'BebasNeue'" font-size="38">2016</text>
	        <text transform="matrix(1 0 0 1 297.481 102.6436)" fill="#136FB7" font-family="'BebasNeue'" font-size="38">Dut</text>
	        <rect x="296.5" y="131" fill="#EDEDED" width="48.7" height="12"/>
	        <text transform="matrix(1 0 0 1 297.481 115)"><tspan x="0" y="0" font-family="'BebasNeue'" font-size="12">Métiers du Multimédia et de l'Internet</tspan><tspan x="0" y="14" fill="#136FB7" font-family="'BebasNeue'" font-size="16">53</tspan><tspan x="0" y="26" font-family="'BebasNeue'" font-size="12">Alternance</tspan><tspan x="0" y="38" font-family="'BebasNeue'" font-size="12">Webmestre/réalisateur de vidéos</tspan><tspan x="0" y="52" fill="#136FB7" font-family="'BebasNeue'" font-size="16">35</tspan></text>
	
		        <image overflow="visible" width="350" height="71" xlink:href="resrc/img/oniseplogo-bw.png"  transform="matrix(0.1432 0 0 0.1432 349.6982 131.9365)">
	        </image>
	        <text transform="matrix(1 0 0 1 306.334 73.001)" font-family="'BebasNeue'" font-size="12">(En cours)</text>
        </g>
        <g>
	        <line fill="none" stroke="#136FB7" stroke-width="4" stroke-miterlimit="10" x1="484.3" y1="34.1" x2="484.3" y2="102.6"/>
	        <text transform="matrix(1 0 0 1 420.3086 75.9531)" font-family="'BebasNeue'" font-size="38">2017</text>
	        <text transform="matrix(1 0 0 1 480.9043 102.6396)" fill="#136FB7" font-family="'BebasNeue'" font-size="38">LP</text>
	        <text transform="matrix(1 0 0 1 480.9043 114.9961)" font-family="'BebasNeue'" font-size="12">Bac+3</text>
	        <text transform="matrix(1 0 0 1 489.5469 72.9971)" font-family="'BebasNeue'" font-size="12">(Projet)</text>
        </g>
        <text transform="matrix(1 0 0 1 68.3496 34.082)" font-family="'BebasNeue'" font-size="23" letter-spacing="4">Formation/expérience professionelle</text>
        </svg>
        <a id="CV_btn" href="/CV" target="_blank" class="btn" title="On apprend plein de choses !">Voir le CV complet</a>

    <div id="annonce">
        <h5>Je recherche une alternance dans le développement web pour l'année 2016-2017</h5>
        <p>Dans l'Ouest (Bretagne/Pays de la Loire) ou sur Paris, je veux intégrer une équipe web et travailler sur des projets innovants tout en poursuivant mes études (une Licence Création et Réalisation de Services et Produits Multimédia).<br/><a href="/Contact" target="_blank" title="Contactez-moi"><i class="fa fa-thumbs-up"></i>Donner une chance !</a></p>
    </div>

    <p><br/><br/>Rien de plus... :)</p>
</div>
<?php } ?>

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
<?php if(isset($_GET["theme"]) && $_GET["theme"]=="bonjour"){ ?>
<script src="ordiScroll.js"></script>
<?php } ?>

<?php if(isset($_GET["theme"]) && $_GET["theme"]=="block"){ ?>
<script src="Themes/block.js"></script>
<?php } ?>

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
