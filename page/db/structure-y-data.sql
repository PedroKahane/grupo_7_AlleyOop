-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: laravel-database
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS alley_oop;
CREATE DATABASE alley_oop;
USE alley_oop;


--
-- Table structure for table `product_talles`
--

DROP TABLE IF EXISTS `product_talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_talles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `talles_id` int(10) unsigned NOT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_talles_talle_id_foreign` (`talles_id`),
  KEY `product_talles_product_id_foreign` (`product_id`),
  CONSTRAINT `product_talles_talle_id_foreign` FOREIGN KEY (`talles_id`) REFERENCES `talles` (`id`),
  CONSTRAINT `product_talles_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `product_talles`
--

LOCK TABLES `product_talles` WRITE;
/*!40000 ALTER TABLE `product_talles` DISABLE KEYS */;
INSERT INTO `product_talles` VALUES (1,1,1,NULL,NULL),(2,1,3,NULL,NULL),(3,1,4,NULL,NULL),(4,1,5,NULL,NULL),(5,2,1,NULL,NULL),(6,2,2,NULL,NULL),(7,2,4,NULL,NULL),(8,2,5,NULL,NULL),(9,3,2,NULL,NULL),(10,3,3,NULL,NULL),(11,3,4,NULL,NULL),(12,4,1,NULL,NULL),(13,4,3,NULL,NULL),(14,5,3,NULL,NULL),(15,5,4,NULL,NULL),(16,5,5,NULL,NULL),(17,6,3,NULL,NULL),(18,7,1,NULL,NULL),(19,7,3,NULL,NULL),(20,7,4,NULL,NULL),(21,8,1,NULL,NULL),(22,8,3,NULL,NULL),(23,8,5,NULL,NULL),(24,9,1,NULL,NULL),(25,9,3,NULL,NULL),(26,9,4,NULL,NULL),(27,10,1,NULL,NULL),(28,10,4,NULL,NULL),(29,11,3,NULL,NULL),(30,12,1,NULL,NULL),(31,13,5,NULL,NULL),(32,14,1,NULL,NULL),(33,14,2,NULL,NULL),(34,14,5,NULL,NULL),(35,15,1,NULL,NULL),(36,15,3,NULL,NULL),(37,15,4,NULL,NULL),(38,16,1,NULL,NULL),(39,16,2,NULL,NULL),(40,16,3,NULL,NULL),(41,17,3,NULL,NULL),(42,17,5,NULL,NULL),(43,18,2,NULL,NULL),(44,18,5,NULL,NULL);
/*!40000 ALTER TABLE `product_talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `talles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `abreviatura` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,'Extra-small','XS',NULL,NULL),(2,'Small','S',NULL,NULL),(3,'Medium','M',NULL,NULL),(4,'Large','L',NULL,NULL),(5,'Extra-large','XL',NULL,NULL);
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `jugador` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `equipo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `numero_camiseta` int(10) unsigned DEFAULT NULL,
  `precio` int(10) unsigned DEFAULT NULL,
  `descuento` int(10) unsigned NOT NULL,
  `imagen_frente` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `imagen_espalda` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `destacado` tinyint(1) unsigned DEFAULT NULL,
  `colors_id` int(10) unsigned NOT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_colors_id_foreign` (`colors_id`),
  CONSTRAINT `products_colors_id_foreign` FOREIGN KEY (`colors_id`) REFERENCES `colores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Stephen Curry','Golden State Warriors', 30, 4000, 10, 'Curry30_frente.jpg','Curry30_espalda.jpg',"Musculosa del gran tirador Stephen Curry. Jugador destacado de los ultimos tiempos",1,1,NULL,NULL),(2,'Kobe Bryant','Angeles Lakers', 24, 7000, 0, 'frente-1631716374874.jpg','espalda-1631716374877.jpg',"Musculosa retro de Kobe 'Black Mamba' Bryant. Jugador destacado de este siglo",1,4,NULL,NULL),(3,'Michael Jordan','Chicago Bulls', 23, 6000, 15, 'frente-1631716095898.jpg','espalda-1631716095901.jpg',"Musculosa retro de Michael Jordan. Considerado de los mejores jugadores de la historia",1,2,NULL,NULL),(4,'Tim Duncan','San Antonio Spurs', 21, 5000, 0, 'frente-1631716230678.jpg','espalda-1631716230681.jpg',"Musculosa retro de Tim Duncan. Pivot destacado de las ultimas dos decadas",1,5,NULL,NULL),(5,"Giannis Antetokounmpo","Milwaukee Bucks",34,4000,10,"image-1626979682414.jpg","image-1626979682418.jpg", "Musculosa del griego Giannis 'The Greek Freak' Antetokounmpo. Nombrado MVP de la temporada en dos ocasiones y actual All-Star de la liga.", 0,3,NULL,NULL),(6,"James Harden","Houston Rockets",13,4000,5,"harden-rockets-frente.jpeg","harden-rockets-espalda.jpeg","Musculosa del famoso 'The Beard' James Harden. Actual All-Star de la liga",0,2,NULL,NULL),(7,'Kyrie Irving','Boston Celtics', 11, 5000, 0, 'irving-boston-frente.jpeg','irving-boston-espalda.jpeg',"Musculosa de Kyrie Irving. En la temporada 2015/16 obtuvo primer anillo con Cleveland Cavaliers.",0,3,NULL,NULL),(8,"LeBron James","Los Angeles Lakers",23,6000,15,"james-lakers-frente.jpeg","james-lakers-espalda.jpeg", "Musculosa de 'King James', campeon de la NBA en 4 ocasiones y considerado uno de los mejores jugadores de la historia.", 0,6,NULL,NULL),(9,"Donovan Mitchell","Utah Jazz",45,5000,10,"mitchell-jazz-frente.jpg","mitchell-jazz-espalda.jpg","Musculosa de Donovan 'Spida' Mitchell, estrella de los Jazz y joven promesa de la liga.",0,6,NULL,NULL),(10,'Manu Ginobili','San Antonio Spurs', 20, 6000, 10, 'frente-1627513464910.jpeg','espalda-1627513464914.jpeg',"Musculosa de 'Manu' Ginobili. Considerado por muchos especialistas, deportistas y entrenadores de este deporte como el mejor jugador de América Latina, uno de los cien mejores y más influyentes de la historia de la NBA. Campeón de la liga en 4 oportunidades.",0,5,NULL,NULL),(11,"Russell Westbrook","Ocklahoma Thunder",0,4000,5,"WB-ocklahoma-frente.jpeg","WB-ocklahoma-espalda.jpeg", "Musculosa de 'Russ' Westbrook. Durante la temporada 2020/21 se convirtió en el jugador con más triples dobles de la historia, superando a Oscar Robertson.", 0,1,NULL,NULL),(12,"Derrick Rose","New York Knicks",4,4000,0,"drose-NY-frente.jpeg","drose-NY-espalda.jpeg","Musculosa de 'D-Rose' . Fue elegido en la primera posición del Draft de la NBA de 2008 por Chicago Bulls. En 2011, en su tercera temporada, y a la edad de 22 años y 191 días, fue nombrado el MVP más joven de la historia de la NBA.",0,1,NULL,NULL),(13,'Damian Lillard','Portland Trail Blazzers', 0, 5000, 10, 'lillard-portland-frente.jpg','lillard-portland-espalda.jpg',"Musculosa de Damian 'Logo' Lillard . Una de las actuales estrellas de liga que recientemente entró al selecto grupo de los 10 jugadores con más triples en la historia de la NBA, superando la barrera de los 1,988 tiros de larga distancia convertidos por Jason Kidd.",0,5,NULL,NULL),(14,"Jimmy Butler","Miami Heat",12,4000,0,"butler-miami-frente.jpeg","butler-miami-frente.jpeg", "Musculosa de 'Jimmy G Buckets'. Campeón de conferencia Este en la temporada 2019/20 y elegido para jugar el NBA All-Star Game por quinta vez en su carrera.", 0,2,NULL,NULL),(15,"Klay Thompson","Golden State Warriors",11,6000,0,"thompson-warriors-frente.jpeg","thompson-warriors-espalda.jpeg","Musculosa de 'Killa Klay'. Es el jugador más joven en la historia del Baloncesto en ser campeón del mundo, campeón olímpico y campeón de la NBA.",0,6,NULL,NULL),(16,'Karl Malone','Utah Jazz', 32, 6000, 10, 'malone-jazz-frente.jpeg','malone-jazz-espalda.jpeg',"Musculosa de Karl 'The Mailman' Malone . Miembro del Basketball Hall of Fame que disputó 19 temporadas en la NBA, 18 de ellas en los Utah Jazz, donde formó, junto con el base John Stockton, una de las parejas más relevantes de la historia de la NBA.",0,4,NULL,NULL),(17,"Luka Doncic","Dallas Mavericks",77,6000,5,"frente-1627519749482.jpeg","espalda-1627519749486.jpeg", "Musculosa de Luka Doncic. Dominó el básquet europeo a los 16 años y ganó todos los títulos internacionales, además de ser elegido el mejor del Viejo Continente, con 18. Es el sexto europeo elegido en el top-3 del Draft en toda la historia de la NBA.", 0,3,NULL,NULL),(18,"Tracy McGrady","Toronto Raptors",1,6000,0,"frente-1628779649496.jpeg","espalda-1628779649503.jpeg","Musculosa de 'T-Mac'. Siete veces seleccionado para disputar el All-Star Game. Ha ganado dos veces el título de máximo anotador de la liga, en 2003 y 2004.",0,4,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colores` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `paleta` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `paletaRgba` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'azul','rgb(54, 162, 235)','rgba(54, 162, 235,0.2)',NULL,NULL),(2,'Roja','rgb(255, 99, 132,)','rgba(255, 99, 132, 0.2)',NULL,NULL),(3,'verde','RGB(75, 192, 192)','rgba(75,192,192,0.2)',NULL,NULL),(4,'violeta','RGB(153, 102, 255)','rgba(153,102,255,0.2)',NULL,NULL),(5,'negra','rgb(68,68,70)','rgba(68,68,70,0.2)',NULL,NULL), (6,'amarilla', 'rgb(255, 206, 86)','rgba(255, 206, 86, 0.2)',NULL,NULL);
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metodo_de_pago`
--

DROP TABLE IF EXISTS `metodo_de_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `metodo_de_pago` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `metodo_de_pago` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `numero_tarjeta` BigInt(10) unsigned not null,
  `vencimiento` datetime NOT NULL,
  `cvv` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metodo_de_pago_user_id_foreign` (`user_id`),
  CONSTRAINT `metodo_de_pago_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodo_de_pago`
--

LOCK TABLES `metodo_de_pago` WRITE;
/*!40000 ALTER TABLE `metodo_de_pago` DISABLE KEYS */;
INSERT INTO `metodo_de_pago` VALUES (1,'debito','1234567890123456',12-05-2026,"123",1,NULL,NULL),(2,'credito','4567891230123456',23-08-2023,"123",2,NULL,NULL),(3,'debito','1234567845789632',10-02-2026,"123",3,NULL,NULL),(4,'debito','1234564596327885',23-11-2022,"123",4,NULL,NULL),(5,'debito','1234567890885263',29-12-2024,"453",5,NULL,NULL);
/*!40000 ALTER TABLE `metodo_de_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrega_compra`
--

DROP TABLE IF EXISTS `entrega_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entrega_compra` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `direccion` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `provincia` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `localidad` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `codigo_postal` int(10) unsigned DEFAULT NULL,
  `telefono` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `entrega_compra_user_id_foreign` (`user_id`),
  CONSTRAINT `entrega_compra_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrega_compra`
--

LOCK TABLES `entrega_compra` WRITE;
/*!40000 ALTER TABLE `entrega_compra` DISABLE KEYS */;
INSERT INTO `entrega_compra` VALUES (1,'calle falsa 1','CABA','Palermo',"1234",1565123478,1,NULL,NULL),(2,'calle Pippen 1','CABA','Chacarita',"2458",1565123452,2,NULL,NULL),(3,'calle Jordan 1','CABA','Devoto',"4569",1565123478,3,NULL,NULL),(4,'calle Curry 1','CABA','Nuñez',"1278",1174859632,4,NULL,NULL),(5,'calle Lebron James 1427','CABA','Boedo',"1287",1574856321,5,NULL,NULL);
/*!40000 ALTER TABLE `entrega_compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) unsigned DEFAULT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pedrokahane@gmail.com','Pedro','Kahane',"Pedro","$2b$10$JsuUaPODhDqXJzgQ/1d4Z.Ohy./knHgjd4Ulk2rBNk1tqgibmGi6i","image-1631566601097.jpg",1, NULL, NULL),(2,'pepekahane@yahoo.com.ar','Pedro','Kahane',"Pedro2","$2b$10$JsuUaPODhDqXJzgQ/1d4Z.Ohy./knHgjd4Ulk2rBNk1tqgibmGi6i","image-1631566601097.jpg",0, NULL, NULL),(3,'salvatsebastian41@gmail.com','Sebastian','Salvat',"Seba","$2b$10$/LvRNfVdtHDA2ZBdtcXhm.YYuDhfCXY0gO/IX9cjdQ.PBdVGmbkZq","image-1629750817486.jpg",0, NULL, NULL),(4,'pedrokahane@alleyoop.com','Pedro','Kahane',"pedro2000","$2b$10$fSOXZPpNgUde5pQsB4tVeepaWTimSkx0qSH1BaHK935H/Ywr4ZpXC","image-1631566601097.jpg",1, NULL, NULL),(5,'salvatsebastian41@alleyoop.com','Sebastian','Salvat',"Sebastian","$2b$10$/LvRNfVdtHDA2ZBdtcXhm.YYuDhfCXY0gO/IX9cjdQ.PBdVGmbkZq","avatar-1629584647967.jpg",1, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` int(10) unsigned DEFAULT NULL,
  `precio_total` int(10) unsigned DEFAULT NULL,
  `estado_producto` int(10) unsigned DEFAULT '0',
  `product_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `entrega_id` int(10) unsigned DEFAULT NULL,
  `metodo_id` int(10) unsigned DEFAULT NULL,
  `createdAt` DATE DEFAULT NULL,
  `updatedAt` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `compras_user_id_foreign` (`user_id`),
  KEY `compras_product_id_foreign` (`product_id`),
  KEY `compras_entrega_id_foreign` (`entrega_id`),
  KEY `compras_metodo_id_foreign` (`metodo_id`),
  CONSTRAINT `compras_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `compras_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `compras_entrega_id_foreign` FOREIGN KEY (`entrega_id`) REFERENCES `entrega_compra` (`id`),
  CONSTRAINT `compras_metodo_id_foreign` FOREIGN KEY (`metodo_id`) REFERENCES `metodo_de_pago` (`id`)
  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,1,4000,3,2,1,1,1,NULL,NULL),(2,1,7000,3,8,1,1,1,NULL,NULL),(3,2,12000,4,9,1,1,1,NULL,NULL),(4,2,12000,10,5,2,2,2,NULL,NULL),(5,2,12000,4,12,3,3,3,NULL,NULL),(6,1,4000,10,12,3,3,3,NULL,NULL),(7,1,6000,10,6,4,4,4,NULL,NULL),(8,1,7000,9,17,5,5,5,NULL,NULL),(9,1,6000,10,10,4,4,4,NULL,NULL);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-12 10:09:28
