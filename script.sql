-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `flyway_schema_history`
--

DROP TABLE IF EXISTS `flyway_schema_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flyway_schema_history` (
  `installed_rank` int(11) NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int(11) DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int(11) NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flyway_schema_history`
--

LOCK TABLES `flyway_schema_history` WRITE;
/*!40000 ALTER TABLE `flyway_schema_history` DISABLE KEYS */;
INSERT INTO `flyway_schema_history` VALUES (1,'01','nova-tabela-pessoa','SQL','V01__nova-tabela-pessoa.sql',-1226460225,'root','2020-05-04 15:47:25',102,1);
/*!40000 ALTER TABLE `flyway_schema_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(14) NOT NULL,
  `data_nascimento` date DEFAULT NULL,
  `nome` varchar(60) NOT NULL,
  `peso` int(11) DEFAULT NULL,
  `uf` char(2) NOT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `endereco` varchar(60) DEFAULT NULL,
  `skype` varchar(45) DEFAULT NULL,
  `telefone` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_MODERATOR'),(3,'ROLE_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1),(2,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1),(31,1),(32,1),(33,1),(34,1),(35,1),(36,1),(37,1),(38,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'zkoder@gmail.com','$2a$10$B1MOGK1KYcbVBcwZM8cP1eIpnUr3qmQTLkhnmcI6YBTqBpLC3/BS.','happykoder'),(2,'miler@gmail.com','$2a$10$7Cb1J7RexkIWM6Ru7JE7I.AmtY7CKYJJEtJtUvtvCDRLn9YlyqOc2','miler'),(35,'fevbrwbr@ggnr','$2a$10$euW.dxypHandpP/DUQ8.9euWL3m6399MsDKDPjGrxh45/AEcxwQ1G','bfnfhrt'),(34,'qsqwqw@sfsfs','$2a$10$M.L.RCjesjl9.fPd.9lPOeUOJLekbsYVB2M.wa0EqmCmgFRDBMBEu','milersqsqs'),(33,'zkoder345@gmail.com','$2a$10$ANK6AyQgAXwKin0sCSPLEOqnNPlXi00dOdxqRwUrmTh1vNjik1BIK','happykoder1234'),(32,'abcdef@gmail.com','$2a$10$LxTGXGpok7LH9fViJB8.5.WFt51h3w0j3GyrckU4.0VLFBB.wWtli','abcdef'),(31,'wwerrt@admin','$2a$10$7QnOVWOWtyZNiU4u5KBUR.dNzZbndj1/6tRUVS4UrEUd.gvvlo.lq','03/'),(30,'123fgfhfd@root','$2a$10$vBuC7Jxa4oNB908QqZ3vAeSd34T6.Dxk5Ejrjw3IrgVndQgPiiS3S','zzzz'),(29,'mjmujy@root','$2a$10$P1pkuAczeb66HSHZp1V0Ku3aNiK2YYoXxzfXlOuOpEnJqiXwHQgA6','03/03/1998'),(28,'ff@frdt.com','$2a$10$lY3j8lNP3jVyfy2rV0/NKuVJIJjgpYlv9o.QlKKh/M/EiFBGUj2i.','1/23/2020'),(27,'sw@root','$2a$10$8bR7EnqZ.y.GQJOj52mC3usnfF2BcmeAs26CwGyVboY/pMTovryQi','happykoder123'),(26,'55r@admin','$2a$10$zQ6kTVnDxfNsE.Be/.lNWutxRAcw1BdYHozWPwv00Lv8Dmd5oNpYy','miler1234'),(25,'dwdwdwdw@admin','$2a$10$A3Em0PXKGfTR4Dahs7xT3uozIte8hPn6J6vZRy2Ys1hakH.fz/xhK','miler12'),(24,'wdwdd@root','$2a$10$Hmn88skKdWetWpM/LSgMIu0MXmSbnOC/Os84nv9n7ujVrph8gBa.W','dddfefef'),(23,'rgrgrg@fgdgdg','$2a$10$oHPsvGIrHA7m1HCiwUdOOO.3BOHmdMPyZqMTPGNQR0hsx9oWOE302','1/24/2020'),(22,'zkoder2@gmail.com','$2a$10$qszFuTUO6dNSfarGGqgrkejtFtpWjMisJidW1qnRgAIJMz5F1DxO.','miler2'),(21,'zkoder1@gmail.com','$2a$10$qxsAl8APj7dPDoxAKIAmnegx6Rqi7C7l/USDYkpIgMdjWJyrubPpW','miler1'),(36,'cwccec@grgre','$2a$10$C12z2FVKOY9pbNr/0VU57.PrFNQbpKcwriixLPhpMZeRD.DnV0o5u','dwvwvwq'),(37,'zkodefgrgr@gmail.com','$2a$10$BNbui/CrN2UClVgCOFRSF.7kMeL3FpbHdu4X1gCSCe8PWCJeRyWXq','miler1245'),(38,'hrb@grrbr','$2a$10$UZOvuA6HgjwFjSYEHgfemu9krElabuustddKIB/.Pb24BFt6IGrSK','ntthtrh');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-04 21:34:26
