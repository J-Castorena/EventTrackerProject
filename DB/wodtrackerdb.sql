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
  `description` VARCHAR(2000) NOT NULL,
  `personal_time` TIME NULL,
  `comments` VARCHAR(2000) NULL,
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
INSERT INTO `wod` (`id`, `name`, `date`, `description`, `personal_time`, `comments`) VALUES (1, 'Amanda', '2022-01-09', '9-7-5 Muscle-ups, Snatches, 135lb', '00:30:00', 'Snatches at 45lb');
INSERT INTO `wod` (`id`, `name`, `date`, `description`, `personal_time`, `comments`) VALUES (2, 'Angie', '2022-02-09', 'FOR TIME 100 pull-ups, 100 push-ups, 100 sit-ups, 100 squats', '00:45:00', 'Squats done with 85lb');
INSERT INTO `wod` (`id`, `name`, `date`, `description`, `personal_time`, `comments`) VALUES (3, 'Annie', '2022-03-09', '50-40-30-20-10 Double-unders, sit-ups', '00:25:00', 'Double unders modified to singles');
INSERT INTO `wod` (`id`, `name`, `date`, `description`, `personal_time`, `comments`) VALUES (4, 'Barbara', '2022-04-09', '5 ROUNDS 20 pull-ups, 30 push-ups, 40 sit-ups, 50 squats, 3 min rest', '00:55:00', 'Squats with 45lb barbell');
INSERT INTO `wod` (`id`, `name`, `date`, `description`, `personal_time`, `comments`) VALUES (5, 'Chelsea', '2022-05-09', 'EMOM FOR 30 MIN 5 pull-ups, 10 push-ups, 15 squats', '00:30:00', 'Finished 4 rounds and 15 reps');

COMMIT;

