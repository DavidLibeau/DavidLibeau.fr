<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>DavidLibeau.fr - Curriculum Vitae - CV de David Libeau</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#0070C0">
    <link rel="icon" href="../resrc/img/favicon.png" type="image/png"/>
    <link rel="stylesheet" href="../resrc/style/style.css" />
    <link href="https://dav.li/fontawesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <style>
        main {
            text-align: center;
            background: #424242;
            overflow: auto;
        }
        h1 {
            margin: 0;
            font-family: "Bebas Neue", sans-serif;
            font-size: 4em;
            color: white;
            text-shadow: -5px 5px 5px rgba(66, 66, 66, 0.15);
        }
        h1>small {
            opacity: 0.7;
        }
        nav>a{
            color: white!important;
        }
        main>img{
            max-width: calc(100% - 40px);
            margin: 20px;
            -webkit-box-shadow: 0 0 20px 0 rgba(0,0,0,0.5);
            box-shadow: 0 0 20px 0 rgba(0,0,0,0.5);
        }
        
        /** #homeBtn **/

        #homeBtn {
            position: fixed;
            top: 0;
            left: 0;
            padding: 10px;
            color: white;
        }
        #homeBtn>a:hover{
            text-decoration: none;
            color: white;
            opacity: 0.8;
        }
    </style>
</head>

<body>
<?php if(!isset($_GET["iframe"])){ ?>
   <nav id="homeBtn"><a href="/#panels"><i class="fa fa-arrow-left" aria-hidden="true"></i> DavidLibeau.fr</a></nav>
<?php } ?>
    <main>
       <h1>CV <small>de David Libeau</small></h1>
       <nav><a href="CV_DavidLibeau.pdf"><i class="fa fa-download" aria-hidden="true" style="margin-right:4px"></i>Télécharger au format PDF</a></nav>
       <img src="CV_DavidLibeau.jpg" alt="CV David Libeau"/>
    </main>


    <script src="https://dav.li/jquery/3.1.1.min.js"></script>
    <script src="resrc/script/script.js"></script>
</body>

</html>