-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for osx10.17 (arm64)
--
-- Host: localhost    Database: exam
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` char(2) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `state` varchar(40) DEFAULT NULL,
  `annual_consumption` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES
('DÅ','Inges elkonsument','Djupekås',0),
('JE','Elsas sammanslutning','Jerle',300),
('RU','Kooperativa elförbrukarna','Runtuna',200),
('SO','Mega Kraftbolaget','Solberga',100);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_powersource`
--

DROP TABLE IF EXISTS `customer_powersource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_powersource` (
  `customer_id` char(2) NOT NULL,
  `powersource` varchar(30) NOT NULL,
  PRIMARY KEY (`powersource`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `customer_powersource_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_powersource`
--

LOCK TABLES `customer_powersource` WRITE;
/*!40000 ALTER TABLE `customer_powersource` DISABLE KEYS */;
INSERT INTO `customer_powersource` VALUES
('JE','vatten'),
('RU','vind'),
('SO','kärnkraft'),
('SO','olja');
/*!40000 ALTER TABLE `customer_powersource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `powerplant`
--

DROP TABLE IF EXISTS `powerplant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `powerplant` (
  `id` char(3) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `location` varchar(40) DEFAULT NULL,
  `source` varchar(30) DEFAULT NULL,
  `output` int(11) DEFAULT NULL,
  `utilization_rate` int(11) DEFAULT NULL,
  `launch` int(11) DEFAULT NULL,
  `closed` int(11) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `powerplant`
--

LOCK TABLES `powerplant` WRITE;
/*!40000 ALTER TABLE `powerplant` DISABLE KEYS */;
INSERT INTO `powerplant` VALUES
('HAR','Harsprånget','Luleälven','vatten',818,25,1951,0,'https://sv.wikipedia.org/wiki/Harspr%C3%A5nget'),
('KAR','Karlshamnsverket','Karlshamn','olja',335,11,1969,0,'https://sv.wikipedia.org/wiki/Karlshamnsverket'),
('LED','Lilla Edet','Göta älv','vatten',39,64,1926,0,'https://sv.wikipedia.org/wiki/Lilla_Edets_kraftverk'),
('LIL','Lillgrund vindkraftpark','Öresund','vind',110,34,2007,0,'https://sv.wikipedia.org/wiki/Lillgrunds_vindkraftpark'),
('MUN','Munkflohöjden','Jämtland','vind',49,37,2019,0,'https://www.gem.wiki/Munkfloh%C3%B6gen_wind_farm'),
('OSK','Oskarshamn 3','Simpevarp','kärnkraft',1400,93,1985,0,'https://sv.wikipedia.org/wiki/Oskarshamns_k%C3%A4rnkraftverk'),
('RIN','Ringhals 1','Väröhalvön','kärnkraft',881,87,1976,2020,'https://sv.wikipedia.org/wiki/Ringhals_k%C3%A4rnkraftverk');
/*!40000 ALTER TABLE `powerplant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `powerplant_type`
--

DROP TABLE IF EXISTS `powerplant_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `powerplant_type` (
  `powerplant_id` char(3) NOT NULL,
  `type_id` char(2) NOT NULL,
  KEY `powerplant_id` (`powerplant_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `powerplant_type_ibfk_1` FOREIGN KEY (`powerplant_id`) REFERENCES `powerplant` (`id`),
  CONSTRAINT `powerplant_type_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `powerplant_type`
--

LOCK TABLES `powerplant_type` WRITE;
/*!40000 ALTER TABLE `powerplant_type` DISABLE KEYS */;
INSERT INTO `powerplant_type` VALUES
('HAR','FN'),
('HAR','FF'),
('LED','FN'),
('LED','FF'),
('LIL','FN'),
('LIL','FF'),
('MUN','FN'),
('MUN','FF'),
('RIN','FF'),
('OSK','FF');
/*!40000 ALTER TABLE `powerplant_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `id` char(2) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES
('FF','fossilfri'),
('FN','förnybar');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `v_customers`
--

DROP TABLE IF EXISTS `v_customers`;
/*!50001 DROP VIEW IF EXISTS `v_customers`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_customers` AS SELECT
 1 AS `id`,
  1 AS `name`,
  1 AS `state`,
  1 AS `annual_consumption`,
  1 AS `powersource` */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_powerplants`
--

DROP TABLE IF EXISTS `v_powerplants`;
/*!50001 DROP VIEW IF EXISTS `v_powerplants`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_powerplants` AS SELECT
 1 AS `id`,
  1 AS `name`,
  1 AS `location`,
  1 AS `source`,
  1 AS `output`,
  1 AS `utilization_rate`,
  1 AS `launch`,
  1 AS `closed`,
  1 AS `url`,
  1 AS `type` */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `v_rapport`
--

DROP TABLE IF EXISTS `v_rapport`;
/*!50001 DROP VIEW IF EXISTS `v_rapport`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `v_rapport` AS SELECT
 1 AS `Konsument`,
  1 AS `Månadsbehov`,
  1 AS `Källa`,
  1 AS `Kraftverk med produktion per tidsenhet` */;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'exam'
--

--
-- Final view structure for view `v_customers`
--

/*!50001 DROP VIEW IF EXISTS `v_customers`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`dbadm`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_customers` AS select `c`.`id` AS `id`,`c`.`name` AS `name`,`c`.`state` AS `state`,`c`.`annual_consumption` AS `annual_consumption`,`cp`.`powersource` AS `powersource` from (`customer` `c` join `customer_powersource` `cp` on(`c`.`id` = `cp`.`customer_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_powerplants`
--

/*!50001 DROP VIEW IF EXISTS `v_powerplants`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`dbadm`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_powerplants` AS select `p`.`id` AS `id`,`p`.`name` AS `name`,`p`.`location` AS `location`,`p`.`source` AS `source`,`p`.`output` AS `output`,`p`.`utilization_rate` AS `utilization_rate`,`p`.`launch` AS `launch`,`p`.`closed` AS `closed`,`p`.`url` AS `url`,`t`.`name` AS `type` from ((`powerplant` `p` join `powerplant_type` `pt` on(`p`.`id` = `pt`.`powerplant_id`)) join `type` `t` on(`pt`.`type_id` = `t`.`id`)) order by `p`.`name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_rapport`
--

/*!50001 DROP VIEW IF EXISTS `v_rapport`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`dbadm`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_rapport` AS select concat(`c`.`id`,': ',`c`.`name`,' ','(',`c`.`state`,')') AS `Konsument`,round(`c`.`annual_consumption` / 12,0) AS `Månadsbehov`,group_concat(distinct `cp`.`powersource` order by `cp`.`powersource` DESC separator ' + ') AS `Källa`,group_concat(concat(`pt`.`name`,' ','(',round(`pt`.`output` * 365 * `pt`.`utilization_rate` / 100 / 12,0),')') order by `pt`.`output` ASC separator ', ') AS `Kraftverk med produktion per tidsenhet` from ((`customer` `c` left join `customer_powersource` `cp` on(`c`.`id` = `cp`.`customer_id`)) left join `powerplant` `pt` on(`pt`.`source` = `cp`.`powersource`)) group by `c`.`annual_consumption` order by `c`.`name` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-23 16:56:55
