<?php

require_once ('class.Spot.php');

class Lieu{

    private $id = 0;
    private $nomLieu = null;
    private $nomDepartement = null;

    private $lesSpots=array();

    function __construct($id, $nomLieu, $nomDepartement)
    {
        $this->id = $id;
        $this->nomLieu = $nomLieu;
        $this->nomDepartement = $nomDepartement;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getNomLieu()
    {
        return $this->nomLieu;
    }

    public function getNomDepartement()
    {
        return $this->nomDepartement;
    }

    public function getLesSpots()
    {
        return $this->lesSpots;
    }



    public function setId($id)
    {
        $this->id = $id;
    }

    public function setNomLieu($nomLieu)
    {
        $this->nomLieu = $nomLieu;
    }

    public function setNomDepartement($nomDepartement)
    {
        $this->nomDepartement = $nomDepartement;
    }

    public function setLesSpots($lesSpots)
    {
        $this->lesSpots = $lesSpots;
    }
}