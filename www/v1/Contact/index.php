
        <?php require "../resrc/html/AllHead.html"; ?>
        <title>David Libeau Contact</title>
    </head>
    <body>
        <?php require "../resrc/html/AllNav.html"; ?>
        <div class="content">
            <h1>Formulaire de Contact</h1>
            <a style="opacity: 0.5; color: #808080; text-decoration: none; font-style: italic; margin-top: -50px" href="../IamEnglishAndIwantToContactYou">I am English and I want to contact you</a>
<?php
/*
	********************************************************************************************
	CONFIGURATION
	********************************************************************************************
*/
// destinataire est votre adresse mail. Pour envoyer à plusieurs à la fois, séparez-les par une virgule
$destinataire = 'contact@davidlibeau.fr';

// copie ? (envoie une copie au visiteur)
$copie = 'oui';

// Action du formulaire (si votre page a des paramètres dans l'URL)
// si cette page est index.php?page=contact alors mettez index.php?page=contact
// sinon, laissez vide
$form_action = '';

// Messages de confirmation du mail
$message_envoye = "Votre message nous est bien parvenu !";
$message_non_envoye = "L'envoi du mail a échoué, veuillez réessayer SVP.";

// Message d'erreur du formulaire
$message_formulaire_invalide = "Vérifiez que tous les champs soient bien remplis et que l'email soit sans erreur.";


function NoSpamQuestion($mode = 'ask', $answer = 0)
{
	$array_pictures = array(); $j = 0;

	$array_pictures[$j]['num'] = $j;
	$array_pictures[$j]['question'] = "Quelle lettre est en double dans le prénom du propriétaire de ce site web ? ";
	$array_pictures[$j]['answer'] = "d";
	$j++;

	$array_pictures[$j]['num'] = $j;
	$array_pictures[$j]['question'] = "Quel adjectif, qui caractérise très bien ce site web, est présent dans le nom de famille du propriétaire de ce site web ? ";
	$array_pictures[$j]['answer'] = "beau";
	$j++;

	$array_pictures[$j]['num'] = $j;
	$array_pictures[$j]['question'] = "Quel est le rang (dans l'alphabet) de la première (et dernière) lettre du prénom du propriétaire de ce site web ? ";
	$array_pictures[$j]['answer'] = "4";
	$j++;

	if ($mode != 'ans')
	{
		// on est en mode 'tirer au sort', on tire une image aléatoire
		$lambda = rand(0, count($array_pictures)-1);
		return $array_pictures[$lambda];
	}
	else
	{
		// on demande une vraie réponse
		foreach($array_pictures as $i => $array)
		{
			if ($i == $answer)
			{
				return $array;
				break;
			};
		};
	}; // Fin if ($mode != 'ans')
};
/*
	********************************************************************************************
	FIN DE LA CONFIGURATION
	********************************************************************************************
*/
	// on tire au sort une question
	$nospam = NoSpamQuestion();

/*
 * cette fonction sert à nettoyer et enregistrer un texte
 */
function Rec($text)
{
	$text = htmlspecialchars(trim($text), ENT_QUOTES);
	if (1 === get_magic_quotes_gpc())
	{
		$text = stripslashes($text);
	}

	$text = nl2br($text);
	return $text;
};

/*
 * Cette fonction sert à vérifier la syntaxe d'un email
 */
function IsEmail($email)
{
	$value = preg_match('/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_-]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/', $email);
	return (($value === 0) || ($value === false)) ? false : true;
}

// formulaire envoyé, on récupère tous les champs.
$nom        = (isset($_POST['nom']))        ? Rec($_POST['nom'])        : '';
$email      = (isset($_POST['email']))      ? Rec($_POST['email'])      : '';
$objet      = (isset($_POST['objet']))      ? Rec($_POST['objet'])      : '';
$message    = (isset($_POST['message']))    ? Rec($_POST['message'])    : '';
$antispam_h = (isset($_POST['antispam_h'])) ? Rec($_POST['antispam_h']) : '';
$antispam_r = (isset($_POST['antispam_r'])) ? Rec($_POST['antispam_r']) : '';

// On va vérifier les variables et l'email ...
$email = (IsEmail($email)) ? $email : ''; // soit l'email est vide si erroné, soit il vaut l'email entré
$err_formulaire = false; // sert pour remplir le formulaire en cas d'erreur si besoin

if (isset($_POST['envoi']))
{
	// On demande la vraie réponse
	$verif_nospam = NoSpamQuestion('ans', $antispam_r);

	if (strtolower($antispam_h) != strtolower($verif_nospam['answer']))
	{
		// le formulaire s'arrête ici
		echo '<p>Vous n\'avez pas répondu correctement à la question antispam...</p>';
	}
	else
	{
		if (($nom != '') && ($email != '') && ($objet != '') && ($message != ''))
		{
			$objet="[FORMULAIRE] ".$objet;
            // les 4 variables sont remplies, on génère puis envoie le mail
			$headers  = 'From:'.$nom.' <'.$email.'>' . "\r\n";
			//$headers .= 'Reply-To: '.$email. "\r\n" ;
			//$headers .= 'X-Mailer:PHP/'.phpversion();

			// envoyer une copie au visiteur ?
			if ($copie == 'oui')
			{
				$cible = $destinataire.','.$email;
			}
			else
			{
				$cible = $destinataire;
			};

			// Remplacement de certains caractères spéciaux
			$message = str_replace("&#039;","'",$message);
			$message = str_replace("&#8217;","'",$message);
			$message = str_replace("&quot;",'"',$message);
			$message = str_replace('<br>','',$message);
			$message = str_replace('<br />','',$message);
			$message = str_replace("&lt;","<",$message);
			$message = str_replace("&gt;",">",$message);
			$message = str_replace("&amp;","&",$message);

            $message = "Message envoye par le formulaire de contact sur DavidLibeau.fr : ".$message;

			// Envoi du mail
			if (mail($cible, $objet, $message, $headers))
			{
				echo '<p>'.$message_envoye.'</p>';
			}
			else
			{
				echo '<p>'.$message_non_envoye.'</p>';
			};
		}
		else
		{
			// une des 3 variables (ou plus) est vide ...
			echo '<p>'.$message_formulaire_invalide.'</p>';
			$err_formulaire = true;
		};
	};
}; // fin du if (!isset($_POST['envoi']))

if (($err_formulaire) || (!isset($_POST['envoi'])))
{
	// afficher le formulaire
	echo '
	<form id="contact" method="post" action="'.$form_action.'">
	<fieldset><legend>Qui êtes vous ?</legend>
		<p><label for="nom">Nom :</label><input type="text" id="nom" name="nom" value="'.stripslashes($nom).'" tabindex="1" /></p>
		<p><label for="email">Email :</label><input type="text" id="email" name="email" value="'.stripslashes($email).'" tabindex="2" /></p>
	</fieldset>

	<fieldset><legend>Que voulez-vous me dire ?</legend>
		<p><label for="objet">Objet :</label><input type="text" id="objet" name="objet" value="'.stripslashes($objet).'" tabindex="3" /></p>
		<p><label for="message">Message :</label><textarea id="message" name="message" tabindex="4" cols="30" rows="8">'.stripslashes($message).'</textarea></p>
	</fieldset>

	<fieldset><legend>Êtes-vous réellement humain ?</legend>
		<p><label for="antispam_h">'.$nospam['question'].'</label><input type="text" name="antispam_h" id="antispam_h" /><input type="hidden" name="antispam_r" value="'.$nospam['num'].'" /></p>
	</fieldset>

	<div style="text-align:center;"><input type="submit" name="envoi" value="Envoyer le formulaire !" /></div>
	</form>';
};
?>
        </div>
    </body>
</html>