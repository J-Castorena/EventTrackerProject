-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wodtrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `wodtrackerdb` ;

-- -----------------------------------------------------
-- Schema wodtrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wodtrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `wodtrackerdb` ;

-- -----------------------------------------------------
-- Table `wod`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wod` ;

CREATE TABLE IF NOT EXISTS `wod` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS woduser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'woduser'@'localhost' IDENTIFIED BY 'woduser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'woduser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `wod`
-- -----------------------------------------------------
START TRANSACTION;
USE `wodtrackerdb`;
INSERT INTO `wod` (`id`, `name`) VALUES (1, 'Amanda');

COMMIT;

