
//Variable global à la page
var carte;
function initCarte() {

    //Définir la position de la carte
    var position = new google.maps.LatLng(47.506022, 6.355700);

    //options de la carte
    var options = {
        center: position,   //position de centrage de la carte
        zoom: 7,   // Zoom
        mapTypeId: 'roadmap'  //Type de carte
    };


    //Instanciation de la carte
    carte = new google.maps.Map(
        document.querySelector("#carte"),
        options
    );



    //Markeur sur le parking Mmi
    //Position markeur
    var posParking = new google.maps.LatLng(47.495823, 6.802153);
    //Le markeur
    var markeurParking = new google.maps.Marker({
        position: posParking,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });


    // Instantiation d'une info-bull / infoWindow
    var infoParking = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurParking, 'click', function (event) {
            //  charger le contenu
            infoParking.setContent('Position parking<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoParking.open(carte, markeurParking);
        }
    );

//Markeur sur le skateparkB2
    //Position markeur
    var posBesançon2 = new google.maps.LatLng(47.234513, 6.016884);
    //Le markeur
    var markeurB2 = new google.maps.Marker({
        position: posBesançon2,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB2 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurB2, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Besançon 2<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurB2);
        }
    );


    //Markeur sur le skateparkB1
    //Position markeur
    var posBesançon1 = new google.maps.LatLng(47.231502, 6.017842);
    //Le markeur
    var markeurB1 = new google.maps.Marker({
        position: posBesançon1,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurB1, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Besançon1<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurB1);
        }




    );



    //Markeur sur le skateparkB1
    //Position markeur
    var posMontfaucon = new google.maps.LatLng(47.2350187, 6.0759021);
    //Le markeur
    var markeurMontfaucon = new google.maps.Marker({
        position: posMontfaucon,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurMontfaucon, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Montfaucon<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurMontfaucon);
        }

    );


    //Markeur sur le Miserey-Salines
    //Position markeur
    var posMiserey = new google.maps.LatLng(47.2811769, 5.9770721);
    //Le markeur
    var markeurMiserey = new google.maps.Marker({
        position: posMiserey,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurMiserey, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Miserey-Salines<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurMiserey);
        }

    );



    //Markeur sur le Miserey-Salines
    //Position markeur
    var posThise = new google.maps.LatLng(47.2778933, 6.0861388);
    //Le markeur
    var markeurThise = new google.maps.Marker({
        position: posThise,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurThise, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Thise<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurThise);
        }

    );


    //Markeur sur le Miserey-Salines
    //Position markeur
    var posChemaudin = new google.maps.LatLng(47.2171215, 5.8964235);
    //Le markeur
    var markeurChemaudin = new google.maps.Marker({
        position: posChemaudin,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurChemaudin, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Chemaudin<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurChemaudin);
        }

    );


    //Markeur sur le Miserey-Salines
    //Position markeur
    var posLarnod = new google.maps.LatLng(47.1879115, 5.9677466);
    //Le markeur
    var markeurLarnod = new google.maps.Marker({
        position: posLarnod,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurLarnod, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Larnodn<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurLarnod);
        }

    );


    //Markeur sur le Miserey-Salines
    //Position markeur
    var posGennes = new google.maps.LatLng(47.2410875, 6.1248162);
    //Le markeur
    var markeurGennes = new google.maps.Marker({
        position: posGennes,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurGennes, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Gennes<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurGennes);
        }

    );


    //Markeur sur le Saint-Vit
    //Position markeur
    var posSaintV = new google.maps.LatLng(47.1779781, 5.8086294);
    //Le markeur
    var markeurposSaintV = new google.maps.Marker({
        position: posSaintV,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurposSaintV, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Saint-Vit<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurposSaintV);
        }

    );

    //Markeur sur le Baume-les-Dames
    //Position markeur
    var posBaume = new google.maps.LatLng(47.343895, 6.348934);
    //Le markeur
    var markeurposBaume = new google.maps.Marker({
        position: posBaume,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurposBaume, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Baume-les-Dames\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurposBaume);
        }

    );


    //Markeur sur le Rioz
    //Position markeur
    var posRioz = new google.maps.LatLng(47.427483, 6.0782585);
    //Le markeur
    var markeurposRioz = new google.maps.Marker({
        position: posRioz,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurposRioz, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Rioz\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurposRioz);
        }

    );



    //Markeur sur Le Frigo
    //Position markeur
    var posFrigo = new google.maps.LatLng(47.5104597, 6.7841542);
    //Le markeur
    var markeurFrigo = new google.maps.Marker({
        position: posFrigo,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurFrigo, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Le Frigo\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurFrigo);
        }

    );


    //Markeur sur Audincourt
    //Position markeur
    var posAudincourt = new google.maps.LatLng(47.4906757, 6.8375409);
    //Le markeur
    var markeurAudincourt = new google.maps.Marker({
        position: posAudincourt,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurAudincourt, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Audincourt\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurAudincourt);
        }

    );


    //Markeur sur Voujeaucourt
    //Position markeur
    var posVoujeaucourt = new google.maps.LatLng(47.4751158, 6.764051);
    //Le markeur
    var markeurVoujeaucourt = new google.maps.Marker({
        position: posVoujeaucourt,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurVoujeaucourt, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Voujeaucourt\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurVoujeaucourt);
        }

    );


    //Markeur sur Seloncourt
    //Position markeur
    var posSeloncourt = new google.maps.LatLng(47.4596311, 6.8682119);
    //Le markeur
    var markeurSeloncourt = new google.maps.Marker({
        position: posSeloncourt,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurSeloncourt, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Seloncourt\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurSeloncourt);
        }

    );



    //Markeur sur Valentigney
    //Position markeur
    var posValentigney = new google.maps.LatLng(47.4596311, 6.8682119);
    //Le markeur
    var markeurValentigney = new google.maps.Marker({
        position: posValentigney,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurValentigney, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Valentigney\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurValentigney);
        }
    );


    //Markeur sur Valentigney
    //Position markeur
    var posMandeure = new google.maps.LatLng(47.4445064, 6.8253516);
    //Le markeur
    var markeurMandeure = new google.maps.Marker({
        position: posMandeure,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurMandeure, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Mandeure\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurMandeure);
        }

    );



    //Markeur sur Valentigney
    //Position markeur
    var posMathay = new google.maps.LatLng(47.4356788, 6.7797124);
    //Le markeur
    var markeurMathay = new google.maps.Marker({
        position: posMathay,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurMathay, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Mathay\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurMathay);
        }

    );


    //Markeur sur Colombier-Fontaine
    //Position markeur
    var posColombierF = new google.maps.LatLng(47.4536826, 6.6914329);
    //Le markeur
    var markeurColombierF = new google.maps.Marker({
        position: posColombierF,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurColombierF, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position ColombierF\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurColombierF);
        }

    );


    //Markeur sur Colombier-Fontaine
    //Position markeur
    var posPontdeRoide = new google.maps.LatLng(47.3917655, 6.7762873);
    //Le markeur
    var markeurPontdeRoide = new google.maps.Marker({
        position: posPontdeRoide,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurPontdeRoide, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position PontdeRoide\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurPontdeRoide);
        }

    );




    //Markeur sur Châtenois-les-Forges
    //Position markeur
    var posChatenoislesForges = new google.maps.LatLng(47.555793, 6.856997);
    //Le markeur
    var markeurChatenoislesForges = new google.maps.Marker({
        position: posChatenoislesForges,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurChatenoislesForges, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Châtenois-les-Forgese\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurChatenoislesForges);
        }

    );


    //Markeur sur Châtenois-les-Forges
    //Position markeur
    var posHericourt = new google.maps.LatLng(47.5774259, 6.7650703);
    //Le markeur
    var markeurHericourt = new google.maps.Marker({
        position: posHericourt,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurHericourt, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Héricourt\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurHericourt);
        }

    );



    //Markeur sur Bavilliers
    //Position markeur
    var posBavilliers = new google.maps.LatLng(47.629043, 6.836801);
    //Le markeur
    var markeurBavilliers = new google.maps.Marker({
        position: posBavilliers,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurBavilliers, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Bavilliers\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurBavilliers);
        }

    );

    //Markeur sur Belfort
    //Position markeur
    var posBelfort = new google.maps.LatLng(47.629043, 6.836801);
    //Le markeur
    var markeurBelfort = new google.maps.Marker({
        position: posBelfort,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurBelfort, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Belfort\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurBelfort);
        }

    );



    //Markeur sur Chèvremont
    //Position markeur
    var posChevremont = new google.maps.LatLng(47.627154, 6.923507);
    //Le markeur
    var markeurChevremont = new google.maps.Marker({
        position: posChevremont,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurChevremont, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Chèvremont\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurChevremont);
        }

    );


    //Markeur sur Belfort2
    //Position markeur
    var posBelfort2 = new google.maps.LatLng(47.656548, 6.855537);
    //Le markeur
    var markeurBelfort2 = new google.maps.Marker({
        position: posBelfort2,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurBelfort2, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Belfort2\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurBelfort2);
        }

    );


    //Markeur sur Frahier-et-Chatebier
    //Position markeur
    var posFrahieretChatebier = new google.maps.LatLng(47.6581045, 6.7466944);
    //Le markeur
    var markeurFrahieretChatebier = new google.maps.Marker({
        position: posFrahieretChatebier,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurFrahieretChatebier, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Frahier-et-Chatebier\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurFrahieretChatebier);
        }

    );


    //Markeur sur Champagney
    //Position markeur
    var posChampagney = new google.maps.LatLng(47.7079432, 6.6800845);
    //Le markeur
    var markeurChampagney = new google.maps.Marker({
        position: posChampagney,      //  Position du mlarker
        map: carte             //  Carte d'affichage
    });

    // Instantiation d'une info-bull / infoWindow
    var infoB1 = new google.maps.InfoWindow();

    // Evenement click sur le marqueur du parking
    google.maps.event.addListener(markeurChampagney, 'click', function (event) {
            //  charger le contenu
            infoB2.setContent('Position Champagney\n<br/> position : ' + event.latLng.toUrlValue());
            //  Ouvrir l'info bulle
            infoB2.open(carte, markeurChampagney);
        }

    );



}
