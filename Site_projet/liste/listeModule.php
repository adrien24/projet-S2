<?php

$pdo = new PDO(
    'mysql:host=localhost;dbname=projet-co',
    'root',
    ''
);


//Ecrire l'ordre sql
$query = "SELECT * FROM modules ORDER BY Nom_Module ";


//Préparation de la requête

$requete = $pdo->prepare($query);

if($requete->execute()) {

    while($donnees = $requete->fetch()){


        echo $donnees['Nom_Module']."<br/>";
    }

} else{
    echo "Requete incorrecte";


}

