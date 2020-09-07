<?php

require_once ('class.Spot.php');

class Module{

    private $id = 0;
    private $nom = null;

    private $lesSpots=array();


    function __construct($id, $nom)
    {
        $this->id = $id;
        $this->nom = $nom;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function getLesSpots()
    {
        return $this->lesSpots;
    }



    public function setId($id)
    {
        $this->id = $id;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function setLesSpots($lesSpots)
    {
        $this->lesSpots = $lesSpots;
    }
}