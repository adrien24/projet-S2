-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 03 juin 2020 à 07:04
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projet-co`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `Id_Commentaire` int(11) NOT NULL,
  PRIMARY KEY (`Id_Commentaire`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `date`
--

DROP TABLE IF EXISTS `date`;
CREATE TABLE IF NOT EXISTS `date` (
  `Date` datetime NOT NULL,
  `Id_Commentaire` int(11) DEFAULT NULL,
  PRIMARY KEY (`Date`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
CREATE TABLE IF NOT EXISTS `favoris` (
  `Id_Favoris` int(11) NOT NULL,
  PRIMARY KEY (`Id_Favoris`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lieu`
--

DROP TABLE IF EXISTS `lieu`;
CREATE TABLE IF NOT EXISTS `lieu` (
  `Id_Lieu` int(11) NOT NULL,
  `Nom_Lieu` varchar(255) DEFAULT NULL,
  `Nom_Departement` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id_Lieu`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `modules`
--

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `Id_Module` int(11) NOT NULL,
  `Nom_Module` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id_Module`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `modules`
--

INSERT INTO `modules` (`Id_Module`, `Nom_Module`) VALUES
(1, 'Ledge'),
(2, 'Quarter'),
(3, 'Plan incliné'),
(4, 'Pyramide');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note` (
  `Note` int(11) NOT NULL,
  `Id_Spot` int(11) DEFAULT NULL,
  PRIMARY KEY (`Note`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `photo_de_profil`
--

DROP TABLE IF EXISTS `photo_de_profil`;
CREATE TABLE IF NOT EXISTS `photo_de_profil` (
  `Id_Photo_Profil` int(11) NOT NULL,
  PRIMARY KEY (`Id_Photo_Profil`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `spot`
--

DROP TABLE IF EXISTS `spot`;
CREATE TABLE IF NOT EXISTS `spot` (
  `Id_Spot` int(11) NOT NULL,
  `Date` datetime DEFAULT NULL,
  `Nom_Spot` varchar(255) DEFAULT NULL,
  `Photo_Spot` varchar(255) DEFAULT NULL,
  `Note` int(11) DEFAULT NULL,
  `Distance` int(11) DEFAULT NULL,
  `Id_Module` varchar(255) DEFAULT NULL,
  `Id_Commentaire` int(11) DEFAULT NULL,
  `Id_Lieu` int(11) DEFAULT NULL,
  `Id_Favoris` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_Spot`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `spot`
--

INSERT INTO `spot` (`Id_Spot`, `Date`, `Nom_Spot`, `Photo_Spot`, `Note`, `Distance`, `Id_Module`, `Id_Commentaire`, `Id_Lieu`, `Id_Favoris`) VALUES
(1, '0000-00-00 00:00:00', 'Vals', 'skatepark.webp', 10, 7.8, NULL, NULL, NULL, NULL),
(2, '0000-00-00 00:00:00', 'Larnod', 'skatepark.webp', 8, 10, NULL, NULL, NULL, NULL),
(3, '0000-00-00 00:00:00', 'Besançon 2', 'skatepark.webp', 5, 15, NULL, NULL, NULL, NULL),
(4, '0000-00-00 00:00:00', 'Besançon 1', 'skatepark.webp', 7, 22, NULL, NULL, NULL, NULL),
(5, '0000-00-00 00:00:00', 'Montfaucon', 'skatepark.webp', 3, 26, NULL, NULL, NULL, NULL),
(6, '0000-00-00 00:00:00', 'Gennes', 'skatepark.webp', 6, 31, NULL, NULL, NULL, NULL),
(7, '0000-00-00 00:00:00', 'Thise', 'skatepark.webp', 6, 40, NULL, NULL, NULL, NULL),
(8, '0000-00-00 00:00:00', 'Miserey', 'skatepark.webp', 2, 43, NULL, NULL, NULL, NULL),
(9, '0000-00-00 00:00:00', 'Chemaudin', 'skatepark.webp', 4, 48, NULL, NULL, NULL, NULL),
(10, '0000-00-00 00:00:00', 'Saint-Vit', 'skatepark.webp', 7, 56, NULL, NULL, NULL, NULL),
(11, '0000-00-00 00:00:00', 'Gendrey', 'skatepark.webp', 5, 68, NULL, NULL, NULL, NULL),
(12, '0000-00-00 00:00:00', 'Rioz', 'skatepark.webp', 5, 112, NULL, NULL, NULL, NULL),
(13, '0000-00-00 00:00:00', 'Rochefort', 'skatepark.webp', 1, 130, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Id_User` int(11) NOT NULL,
  `Nom_User` varchar(255) DEFAULT NULL,
  `Prenom_User` varchar(255) DEFAULT NULL,
  `Age_User` int(11) DEFAULT NULL,
  `Mail_User` varchar(255) DEFAULT NULL,
  `Login_User` varchar(255) DEFAULT NULL,
  `Mdp_User` varchar(255) DEFAULT NULL,
  `Id_Photo_Profil` int(11) DEFAULT NULL,
  `Id_Spot` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_User`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`Id_User`, `Nom_User`, `Prenom_User`, `Age_User`, `Mail_User`, `Login_User`, `Mdp_User`, `Id_Photo_Profil`, `Id_Spot`) VALUES
(1, 'Bouteiller', 'Adrien', 18, 'adrien.bouteiller01@gmail.com', 'AdrienB', 'AZERTY01', NULL, NULL),
(2, 'Robelin', 'Quentin', 18, 'robelin.quentin@gmail.com', 'QuentinR', 'AZERTY02', NULL, NULL),
(3, 'Gomez-Fernandez', 'Sergio', 18, 'sergio.gomez25700@gmail.com', 'SergioG', 'AZERTY03', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
