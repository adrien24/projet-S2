<?php

require_once ('classes/class.Spot.php');


$pdo = new PDO(
    'mysql:host=localhost;dbname=mmiprojet1920_61; charset=UTF8',
    'mmiprojet1920_61',
    '8icO0AuIjItX9A'
);

$query = "SELECT * FROM spot ORDER BY Nom_Spot ";

$requete = $pdo->prepare($query);

// Creer un tableau
$listeSpot = array();
// Execution requete
if ($requete->execute()) {

    while ($donnes = $requete->fetch()) {

        $skatepark = new spot(

            $donnes['Id_Spot'],
            $donnes['Date'],
            $donnes['Note'],
            $donnes['Photo_Spot'],
            $donnes['Nom_Spot'],
            $donnes['Distance']


        );


        $listeSpot[] = $skatepark;
    }

} else {
    echo 'Erreur de requete';
}
//echo json_encode($listeSpot);


//echo "<pre>";
//print_r($listeSpot);
//echo "</pre>";