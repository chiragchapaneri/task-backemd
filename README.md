# task-backend

admin table
<!-- 

CREATE TABLE `admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE); -->
  
  
  
CREATE TABLE admin ( id INT NOT NULL AUTO_INCREMENT, email VARCHAR(100) NULL, password VARCHAR(45) NULL,  name VARCHAR(100) NULL,PRIMARY KEY (id), UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE, UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);
  
  
  
  user table
  
  CREATE TABLE `chirag`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `pincode` INT NULL,
  `address` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

