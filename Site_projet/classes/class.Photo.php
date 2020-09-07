<?php

require_once ('class.Utilisateur.php');

class Photo{

    private $id = 0;

    private $lesUtilisateurs=array();


    function __construct($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getLesUtilisateurs()
    {
        return $this->lesUtilisateurs;
    }



    public function setId($id)
    {
        $this->id = $id;
    }



    public function setlesUtilisateurs($lesSpots)
    {
        $this->lesUtilisateurs = $lesSpots;
    }
}