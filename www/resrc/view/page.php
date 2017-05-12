<?php 
if(isset($_GET["page"]) && $_GET["page"]!=""){

$title="Page";
require("../../page/".$_GET["page"]."-info.php");
?>
<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>DavidLibeau.fr - <?php echo($title); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#0070C0">
    <link rel="icon" href="/resrc/img/favicon.png" type="image/png" />
    <link rel="stylesheet" href="/resrc/style/page.css" />
    <link href="https://dav.li/fontawesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
</head>

<body>
<?php if(!isset($_GET["iframe"])){ ?>
   <nav id="homeBtn"><a href="/#panels"><i class="fa fa-arrow-left" aria-hidden="true"></i> DavidLibeau.fr</a></nav>
<?php } ?>
    <main>
       <h1><?php echo($title); ?></h1>
        <?php require("../../page/".$_GET["page"]."-body.php"); ?>
    </main>


    <script src="https://dav.li/jquery/3.1.1.min.js"></script>
    <script src="resrc/script/script.js"></script>
</body>

</html>


<?php }else{
    echo("404 Error");
} ?>