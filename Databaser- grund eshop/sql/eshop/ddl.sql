DROP TABLE IF EXISTS `order_row`;
DROP TABLE IF EXISTS `storage_shelf`;
DROP TABLE IF EXISTS `invoice`;
DROP TABLE IF EXISTS `category`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `product_category`;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `customer`;
DROP TABLE IF EXISTS `storage`;
DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `time_stamp` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `event` VARCHAR(100),
    `product_name` VARCHAR(80),

    PRIMARY KEY (`id`)
);

CREATE TABLE `storage`(
    `shelf_name` CHAR(20) NOT NULL,

    PRIMARY KEY (`shelf_name`)
);

CREATE TABLE `customer` (
    `id` INT NOT NULL,
    `firstname` VARCHAR(80),
    `lastname` VARCHAR(80),
    `address` VARCHAR(80),
    `zip_code` INT,
    `city` VARCHAR(30),
    `country` VARCHAR(30),
    `email` VARCHAR(80),
    `phonenumber` INT,

    PRIMARY KEY (`id`)
);

CREATE TABLE `order` (
    `number` INT NOT NULL,
    `customer_id` INT NOT NULL,
    `status` CHAR(20) DEFAULT "Not verified",
    `order_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `shipping_date` DATETIME,

    PRIMARY KEY (`number`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`id`)
);

CREATE TABLE `product_category` (
    `category_name` CHAR(20) NOT NULL PRIMARY KEY
);

CREATE TABLE `product` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80),
    `price` DECIMAL(10,2),
    `description` VARCHAR(150),
    `created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated` TIMESTAMP DEFAULT NULL
		ON UPDATE CURRENT_TIMESTAMP,
	`deleted` TIMESTAMP DEFAULT NULL,

    PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
    `product_id` INT NOT NULL,
    `category_name` CHAR(20) NOT NULL,

    PRIMARY KEY (`product_id`, `category_name`),
    FOREIGN KEY (`product_id`) REFERENCES `product`(`id`),
    FOREIGN KEY (`category_name`) REFERENCES `product_category`(`category_name`)
);

CREATE TABLE `invoice` (
    `invoice_number` INT NOT NULL AUTO_INCREMENT,
    `order_number` INT NOT NULL,
    `invoice_date` DATETIME,
    `reminder_date` DATETIME,

    PRIMARY KEY (`invoice_number`),
    FOREIGN KEY (`order_number`) REFERENCES `order`(`number`)
);

CREATE TABLE `storage_shelf` (
    `shelf_name` CHAR(20) NOT NULL,
    `product_id` INT NOT NULL,
    `product_name` VARCHAR(80),
    `quantity` INT,

    PRIMARY KEY (`shelf_name`, `product_id`),
    FOREIGN KEY (`shelf_name`) REFERENCES `storage`(`shelf_name`),
    FOREIGN KEY (`product_id`) REFERENCES `product`(`id`)
);

CREATE TABLE `order_row` (
    `id` INT NOT NULL,
    `order_number` INT NOT NULL,
    `product_id` INT NOT NULL,
    `quantity` INT,
    `price` DECIMAL(10,2),

    PRIMARY KEY (`id`),
    FOREIGN KEY (`order_number`) REFERENCES `order`(`number`),
    FOREIGN KEY (`product_id`) REFERENCES `product`(`id`)
);

DROP VIEW IF EXISTS v_products_all;

CREATE VIEW v_products_all AS
	SELECT
		p.id,
		p.name,
		p.price,
		p.description,
		s.quantity,
		group_concat(c.category_name) AS categories
	FROM product AS p
    LEFT JOIN storage_shelf AS s
	ON p.id = s.product_id
    LEFT JOIN category AS c
    ON p.id = c.product_id
	GROUP BY p.id;

DROP PROCEDURE IF EXISTS show_logs;
DROP PROCEDURE IF EXISTS new_product;
DROP PROCEDURE IF EXISTS add_storage;
DROP PROCEDURE IF EXISTS del_storage;
DROP PROCEDURE IF EXISTS update_product;

DELIMITER ;;

CREATE PROCEDURE show_logs(
    l_number INT
)
BEGIN
    SELECT * FROM log 
    LIMIT l_number;
END
;;

DELIMITER ;

DELIMITER ;;

CREATE PROCEDURE new_product(
    p_name VARCHAR(80),
    p_price DECIMAL(10,2),
    p_description VARCHAR(150)
)
BEGIN
	INSERT INTO product(`name`,`price`,`description`)
	VALUES (p_name,p_price,p_description);

END
;;

DELIMITER ;

DELIMITER ;;

CREATE PROCEDURE add_storage(
    shelf CHAR(20),
    product INT,
    new_quantity INT
)

BEGIN
    IF (SELECT COUNT(*) FROM product WHERE id = product) < 1 THEN
        INSERT INTO product(`id`,`name`,`price`,`description`) VALUES (product, NULL, NULL, NULL);
        INSERT INTO storage_shelf(`shelf_name`,`product_id`,`quantity`)
        VALUES (shelf,product,new_quantity)
        ON DUPLICATE KEY UPDATE `quantity` = `quantity` + new_quantity;
    ELSE
        INSERT INTO storage_shelf(`shelf_name`,`product_id`,`quantity`)
        VALUES (shelf,product,new_quantity)
        ON DUPLICATE KEY UPDATE `quantity` = `quantity` + new_quantity;
    END IF;
END
;;

DELIMITER ;

DELIMITER ;;

CREATE PROCEDURE del_storage(
    shelf CHAR(20),
    product INT,
    new_quantity INT
)
BEGIN
	INSERT INTO storage_shelf(`shelf_name`,`product_id`,`quantity`)
	VALUES (shelf,product,new_quantity)
	ON DUPLICATE KEY UPDATE `quantity` = `quantity` - new_quantity;

END
;;

DELIMITER ;

DELIMITER ;;
CREATE PROCEDURE update_product(
	p_id INT,
    p_name VARCHAR(80),
    p_price DECIMAL(10,2),
    p_description VARCHAR(150)
)
BEGIN
    UPDATE product SET
        `name` = p_name,
        `price` = p_price,
        `description` = p_description
    WHERE
        `id` = p_id;
END
;;
DELIMITER ;

DROP TRIGGER IF EXISTS log_product_update;
DROP TRIGGER IF EXISTS log_product_insert;

CREATE TRIGGER log_product_update
AFTER UPDATE
ON product FOR EACH ROW
    INSERT INTO log (`event`, `product_name`)
        VALUES ('Detaljer om produkt uppdaterades.', NEW.name);

CREATE TRIGGER log_product_insert
AFTER INSERT
ON product FOR EACH ROW
    INSERT INTO log (`event`, `product_name`)
        VALUES ('Ny produkt lades till.', NEW.name);