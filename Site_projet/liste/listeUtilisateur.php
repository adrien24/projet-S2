<?php

    $pdo = new PDO(
        'mysql:host=localhost;dbname=projet-co; charset=UTF8',
        'root',
        ''
    );


    //Ecrire l'ordre sql
    $query = "SELECT *  FROM Utilisateur ORDER BY Nom_User ";


    //Préparation de la requête

    $requete = $pdo->prepare($query);

    if($requete->execute()) {

        while($donnees = $requete->fetch()){


            echo $donnees['Nom_User']."<br/>";
        }

        } else{
            echo "Requete incorrecte";


    }