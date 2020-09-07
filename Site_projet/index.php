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
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClfxKXXv0Db2A4VcRd_Ta2yI1MuHuc9HA"></script>
    <script type='text/javascript' src='js/googleMaps.js'></script>



</head>
<body onload="initCarte()">
<header>

    <a href="index.php"><h1><img src="img/logo-final.png" alt="logo-final"></h1></a>

    <div class="nav-toggle">
        <div class="nav-toggle-bar"></div>
    </div>
    <nav class="menu">
        <img src="img/barre-droite.png" alt="barre-couleur">
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="Profil.html">Mon profil</a></li>
            <li><a href="trouver-un-spot.php">Trouver un spot</a></li>
            <li><a href="partageSpot.html">Partager un spot</a></li>
            <li><a href="A-propos.html">À propos</a></li>
            <li><a href="partager.html">Une idée ?</a></li>
        </ul>
        <img src="img/logo-final.png" alt="logo-final">
    </nav>

</header>

<div class="Accueil">
    <img src="img/barre-dégradé-de-couleur.png" alt="barre-dégradé">

    <div class="bouton">
        <a href="trouver-un-spot.php">Trouver un spot</a>
    </div>

<div class="backgroundmap">
    <div id="carte" style="border: 1px solid black; width: 80vw; height: 60vw; margin-left: 10vw; margin-top: 30vw;"></div>
    <div id="parcours"></div>
</div>
    <div class="spot-proche">
        <h2>Les spots les plus proches</h2>

        <img src="img/skatepark.webp" alt="photo-skatepark">

        <div class="rating"><!--
   --><a href="#1" title="Donner 5 étoiles">☆</a><!--
   --><a href="#2" title="Donner 4 étoiles">☆</a><!--
   --><a href="#3" title="Donner 3 étoiles">☆</a><!--
   --><a href="#4" title="Donner 2 étoiles">☆</a><!--
   --><a href="#5" title="Donner 1 étoile">☆</a>
        </div>

        <img src="img/module.png" alt="module">

        <div class="information">
            <p>Vals</p>
            <p>8km</p>
        </div>

        <div class="voirplus">

            <a href="pageSpot.html">Voir plus</a>

        </div>
    </div>

    <div class="dernierspots">

        <h2>Les derniers ajouts de spots</h2>
        <div class="background">
            <img src="img/skatepark.webp" alt="skatepark">

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

            <p>7,8km</p>

            <p>Audincourt</p>

        </div>


    </div>

    <div class="bouton">
        <a href="partageSpot.html">Partager un spot</a>
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

</div>


<script type='text/javascript' src='js/menu%20burger.js'></script>
</body>