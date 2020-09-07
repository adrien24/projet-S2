<?php

require_once('class.Spot.php');
require_once ('class.Photo.php');

Class Utilisateur
{
    private $id = 0;
    private $nom = null;
    private $prenom = null;
    private $age = null;
    private $mail = null;
    private $login = null;
    private $mdp = null;


    private $lesSpots = array();
    private $lesPhotos = array();


    function __construct($id, $nom, $prenom, $age, $mail, $login, $mdp)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
        $this->mail = $mail;
        $this->login = $login;
        $this->mdp = $mdp;
    }

    function getId()
    {
        return $this->id;
    }

    function getNom()
    {
        return $this->nom;
    }

    function getPrenom()
    {
        return $this->prenom;
    }

    function getAge()
    {
        return $this->age;
    }

    function getMail()
    {
        return $this->mail;
    }

    function getLogin()
    {
        return $this->login;
    }

    function getMdp()
    {
        return $this->mdp;
    }

    function getlesSpots()
    {
        return $this->lesSpots;
    }

    function getlesPhotos()
    {
        return $this->lesPhotos;
    }





    function setId($id)
    {
        $this->id = $id;
    }

    function setNom($nom) {
        $this->nom = $nom;
    }

    function setPrenom($prenom) {
        $this->prenom = $prenom;
    }

    function setAge($age) {
        $this->age = $age;
    }

    function setMail($mail) {
        $this->mail = $mail;
    }

    function setLogin($login) {
        $this->login = $login;
    }

    function setMdp($mdp) {
        $this->mdp = $mdp;
    }

    function setlesSpots($lesSpots) {
        $this->lesSpots = $lesSpots;
    }

    function setlesPhotos($lesPhotos) {
        $this->lesPhotos = $lesPhotos;
    }

}