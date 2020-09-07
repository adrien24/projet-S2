<?php

require_once ('C:\wamp64\www\Site_projet\classes/class.Spot.php');

        //Création d'un spot
        $skatepark = new Spot(

           1,
           '2020',
           '9',
           'Vals.jpg',
           'Vals',
           7

            );

        echo '<pre>';
        print_r($skatepark);
        echo '</pre>';