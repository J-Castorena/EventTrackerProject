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
  `date` DATE NULL,
  `personal_time` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `comment` VARCHAR(1000) NULL,
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
INSERT INTO `wod` (`id`, `name`, `date`, `personal_time`, `description`, `comment`) VALUES (1, 'Amanda', '2022-01-09', '15', '9-7-5 Muscle-ups, Snatches135lbs', 'Modified Muscle-ups to pull ups, snatches at 115lb');
INSERT INTO `wod` (`id`, `name`, `date`, `personal_time`, `description`, `comment`) VALUES (2, 'Angie', '2022-02-09', '45', 'FOR TIME 100 pull-ups, 100 push-ups, 100 sit-ups, 100 squats', 'Squats with 45lb barbell');
INSERT INTO `wod` (`id`, `name`, `date`, `personal_time`, `description`, `comment`) VALUES (3, 'Annie', '2022-03-09', '47', '50-40-30-20-10 Double-unders, sit-ups', 'Modified Double-unders with singles');
INSERT INTO `wod` (`id`, `name`, `date`, `personal_time`, `description`, `comment`) VALUES (4, 'Barbara', '2022-04-09', '60', '5 ROUNDS 20 pull-ups, 30 push-ups, 40 sit-ups, 50 squats, 3 min rest', 'Squats with 45lb Barbell');
INSERT INTO `wod` (`id`, `name`, `date`, `personal_time`, `description`, `comment`) VALUES (5, 'Chelsea', '2022-05-09', '30', 'EMOM FRO 30MIN 5 pull-ups, 10 push-ups, 15 squats', 'Squats with 45lb barbell');

COMMIT;

