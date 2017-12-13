<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>DavidLibeau.fr</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#0070C0">
	<link rel="manifest" href="/manifest.json">
    <link rel="icon" href="resrc/img/favicon.png" type="image/png" />
    <link rel="stylesheet" href="resrc/style/style.css" />
    <link href="https://dav.li/fontawesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
</head>

<body>
    <main>
        <section id="welcome">
            <div class="border">
                <img src="resrc/img/LogoScriptDavidLibeau.svg" alt="Logo David Libeau script" />
                <a href="#panels">Chargement...</a>
            </div>
        </section><!--
     --><section id="panels">
            <div class="border">
                <h1>
                   <span id="logo">
                       <a href="#panels"><img src="resrc/img/LogoAnimeDavidLibeau.gif" alt="David Libeau Logo" draggable="false" /></a>
                       <a href="vr/" target="_blank" id="vrBadge"><i class="fa fa-play" aria-hidden="true"></i> VR</a> 
                   </span>
                </h1>
                <ul>
                    <li>
                        <a href="https://lab.dav.li" target="_blank" data-target="iframe">
                            <h2>Lab</h2>
                            <p>Tous les projets <i>open source</i> sur lesquels j’expérimente, réunis en un même endroit...</p>
                        </a>
                        <nav>
                            <i class="fa fa-refresh fa-spin"></i>
                            <i class="fa fa-external-link-square" aria-hidden="true"></i>
                            <i class="fa fa-close" aria-hidden="true"></i>
                        </nav>
                        <div></div>
                    </li>
                    <li>
                        <a href="https://blog.davidlibeau.fr" target="_blank" data-target="iframe">
                            <h2>Blog</h2>
                            <p>Billets d’idées, donc inintéressants...</p>
                        </a>
                        <nav>
                            <i class="fa fa-refresh fa-spin"></i>
                            <i class="fa fa-external-link-square" aria-hidden="true"></i>
                            <i class="fa fa-close" aria-hidden="true"></i>
                        </nav>
                        <div></div>
                    </li>
                    <li>
                        <a href="CV/" target="_blank" data-target="iframe">
                            <h2>CV</h2>
                            <p>Mon Curriculum Vitae, pour en savoir plus...</p>
                        </a>
                        <nav>
                            <i class="fa fa-refresh fa-spin"></i>
                            <i class="fa fa-external-link-square" aria-hidden="true"></i>
                            <i class="fa fa-close" aria-hidden="true"></i>
                        </nav>
                        <div></div>
                    </li>
                    <li>
                        <a href="Contact" target="_blank">
                            <h2>Contact</h2>
                            <p>En français, in english, en español ou en 1337...</p>
                        </a>
                        <nav>
                            <i class="fa fa-external-link-square" aria-hidden="true"></i>
                            <i class="fa fa-close" aria-hidden="true"></i>
                        </nav>
                        <div>
                            <?php require("page/Contact-body.php"); ?>
                        </div>
                    </li>
                    <li>
                        <a href="About" target="_blank">
                            <h2>À propos</h2>
                            <p>Plus d’informations sur ce site web...</p>
                        </a>
                        <nav>
                            <i class="fa fa-external-link-square" aria-hidden="true"></i>
                            <i class="fa fa-close" aria-hidden="true"></i>
                        </nav>
                        <div>
                            <?php require("page/About-body.php"); ?>
                        </div>
                    </li>
                </ul>
                <ul id="contentframe"></ul>
            </div>
        </section><!--
     --><section style="display: none"></section>
    </main>


    <script src="https://dav.li/jquery/3.1.1.min.js"></script>
    <script src="resrc/script/script.js"></script>
</body>

</html>