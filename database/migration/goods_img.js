exports.createTable=' CREATE TABLE `goods_img` ( `id` INT NOT NULL AUTO_INCREMENT ,`goods_id` INT  (11)  NOT NULL , `img` VARCHAR  (70)  NULL , PRIMARY KEY (`id`) ,FOREIGN  KEY (goods_id) REFERENCES goods (id) ON DELETE CASCADE  ON UPDATE CASCADE) ENGINE = InnoDB;';

exports.dropTable='drop table goods_img';


exports.seed='insert into goods_img(goods_id,img) values ("5","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("20","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("20","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("1","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("27","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("19","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("11","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("14","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("5","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("1","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("24","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("28","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("16","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("24","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("30","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("13","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("21","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("30","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("17","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("6","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("7","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("21","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("6","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("13","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("27","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("26","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo"),("3","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo")';