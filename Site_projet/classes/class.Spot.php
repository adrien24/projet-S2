<?php

require_once('class.Commentaire.php');
require_once('class.Date.php');
require_once('class.Favoris.php');
require_once('class.Module.php');
require_once('class.Lieu.php');
require_once('class.Note.php');
require_once('class.Utilisateur.php');


class Spot{
    private $id=0;
    private $date=null;
    private $note=0;
    private $photo=null;
    private $nom=null;
    private $distance=0;


    private $lesFavoris=array();
    private $lesModules=array();
    private $lesCommentaires=array();
    private $lesDates=array();
    private $lesLieux=array();
    private $lesUtilisateurs=array();
    private $lesNotes=array();

    function __construct($id, $date, $note, $photo,$nom,$distance){
        $this->id = $id;
        $this->Date = $date;
        $this->Note = $note;
        $this->Photo = $photo;
        $this->Nom = $nom;
        $this->Distance = $distance;
    }

    function getId() {
        return $this->id;
    }

    function getDate() {
        return $this->date;
    }

    function getNote() {
        return $this->note;
    }

    function getPhoto_spot() {
        return $this->photo;
    }

    function getlesFavoris() {
        return $this->lesFavoris;
    }

    function getlesModules() {
        return $this->lesModules;
    }

    function getlesCommentaires() {
        return $this->lesCommentaires;
    }

    function getlesDates() {
        return $this->lesDates;
    }

    function getlesLieux() {
        return $this->lesLieux;
    }

    function getlesUtilisateurs() {
        return $this->lesUtilisateurs;
    }

    function getlesNotes() {
        return $this->lesNotes;
    }

    function getNom() {
        return $this->nom;
    }

    function getDistance() {
        return $this->distance;
    }





    function setId($id) {
        $this->id = $id;
    }

    function setDate($date) {
        $this->date = $date;
    }

    function setNote($note) {
        $this->note = $note;
    }

    function setPhoto($photo) {
        $this->note = $photo;
    }

    function setlesFavoris($lesFavoris) {
        $this->lesFavoris = $lesFavoris;
    }

    function setlesModules($lesModules) {
        $this->lesModules = $lesModules;
    }

    function setlesCommentaires($lesCommentaires) {
        $this->lesCommentaires = $lesCommentaires;
    }

    function setlesDates($lesDates) {
        $this->lesDates = $lesDates;
    }

    function setlesLieux($lesLieux) {
        $this->lesLieux = $lesLieux;
    }

    function setlesUtilisateurs($lesUtilisateurs) {
        $this->lesUtilisateurs = $lesUtilisateurs;
    }

    function setlesNotes($lesNotes) {
        $this->lesNotes = $lesNotes;
    }
    function setNom($nom) {
        $this->nom = $nom;
    }

    function setDistance($distance) {
        $this->distance = $distance;
    }
}
