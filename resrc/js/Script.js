/***** BETA *****/

function cacherBeta() {
    var element = document.getElementById('beta');
    element.style.opacity = "0";
    element.style.filter = 'alpha(opacity=0)'; // IE fallback
}

function changerBeta() {
    document.getElementById('beta').innerHTML = "<p><i class=\"fa fa-exclamation-triangle\" style=\"margin: 0 0;\"></i>Ce site web est actuellement en BETA ! Cela signifie que  des bugs seront peut-&ecirc;tre pr&eacute;sents et des contenus seront peut-&ecirc;tre absents. De plus, je vous incite fortement &agrave; visualiser le site avec le navigateur <a href=\"https://www.google.com/intl/fr_fr/chrome/browser/\" target=\"_blank\" style=\"color: black;\"><strong>Chrome</strong></a> ou <a href=\"https://www.mozilla.org/fr/firefox/new/\" target=\"_blank\" style=\"color: black;\"><strong>Firefox</strong></a> pour pouvoir l\'afficher convenablement. Merci de votre compr&eacute;hension et bonne visite.</p>";
}
