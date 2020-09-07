<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/typo.css">
    <link rel="stylesheet" href="css/Mise_en_page.css">
    <link rel="stylesheet" href="lib/normalize.css">
    <title>Nearide</title>

    <?php include 'traitement/traitement.php' ?>

    <?php
    //echo "<pre>";
    //print_r($listeSpot);
    //echo "</pre>"; ?>

</head>
<body>
<header>

    <a href="index.php"><h1><img src="img/logo-final.png" alt="logo-final"></h1></a>

    <div class="nav-toggle">
        <div class="nav-toggle-bar"></div>
    </div>
    <nav class="menu">
        <img src="img/barre-droite.png" alt="barre-couleur">
        <ul>
            <li><a href="index.php">Accueil</a></li>
            <li><a href="Profil.html">Mon profil</a></li>
            <li><a href="trouver-un-spot.php">Trouver un spot</a></li>
            <li><a href="partageSpot.html">Partager un spot</a></li>
            <li><a href="A-propos.html">À propos</a></li>
            <li><a href="partager.html">Une idée ?</a></li>
        </ul>
        <img src="img/logo-final.png" alt="logo-final">
    </nav>

</header>

<!-- barre de recherche !-->

<label for="site-search">Rechercher</label>
<input type="search" id="site-search" name="q"
       aria-label="Search through site content">

<button><img src="img/Icon%20ionic-ios-search.png"></button>

<!-- barre de recherche fini -->

<div class="near">

    <div class="bouton">
        <a href="#">NEAR</a>
    </div>

    <p>Pour chercher automatiquement les spots les plus proches de toi en un clic</p>

    <img src="img/flèche.png" alt="flèche">

</div>


<div class="lesspots">
    <?php for ($i=0;$i<count($listeSpot); $i++) { ?>


        <div class="imageS">

            <img src="<?php echo '../Site_projet/img/'.$listeSpot[$i]->Photo; ?>"/>

        </div>


    <p><?php echo $listeSpot[$i]->Nom?></p>

    <div class="rating"><!--
   --><a href="#5" title="Donner 5 étoiles">☆</a><!--
   --><a href="#4" title="Donner 4 étoiles">☆</a><!--
   --><a href="#3" title="Donner 3 étoiles">☆</a><!--
   --><a href="#2" title="Donner 2 étoiles">☆</a><!--
   --><a href="#1" title="Donner 1 étoile">☆</a>
    </div>

    <div class="voirplus">

        <a href="pageSpot.html">Voir plus</a>

    </div>
<div class="km">
        <p><?php echo $listeSpot[$i]->Distance?>km</p>
</div>
    <?php } ?>
</div>



<footer>

    <img src="img/barre-dégradé-de-couleur.png" alt="barre-horizontal">

    <div class="reseaux">

        <h3>Nous suivre</h3>

        <div class="logo">
            <a href="#"><img src="img/facebook.png" alt="logo-facebook"></a>
            <a href="#"><img src="img/instagram.png" alt="logo-instagram"></a>
            <a href="#"><img src="img/twitter.png" alt="logo-twitter"></a>
        </div>
    </div>
    <div class="info">

        <a href="#">Accueil</a>
        <a href="#">Contact</a>
        <a href="#">À propos</a>

    </div>

    <p>Site réalisé dans le cadre du projet collectif du S2 de 1ère année du DUT MMI Montbéliard par Adrien
        Bouteiller, Sergio Gomez Fernandez et Quentin Robelin</p>

    <img src="img/barre-dégradé-de-couleur.png" alt="barre-horizontal">


</footer>

<script type='text/javascript' src='js/menu%20burger.js'></script>
</body>