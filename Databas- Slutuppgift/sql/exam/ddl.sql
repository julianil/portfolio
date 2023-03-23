DROP TABLE IF EXISTS `customer_powersource`;
DROP TABLE IF EXISTS `powerplant_type`;
DROP TABLE IF EXISTS `customer`;
DROP TABLE IF EXISTS `type`;
DROP TABLE IF EXISTS `powerplant`;

CREATE TABLE `powerplant` (
    `id` CHAR(3) NOT NULL,
    `name` VARCHAR(100),
    `location` VARCHAR(40),
	`source` VARCHAR(30),
    `output` INT,
    `utilization_rate` INT,
    `launch` INT,
    `closed` INT,
	`url` VARCHAR(200),

    PRIMARY KEY (`id`)
);

CREATE TABLE `type` (
    `id` CHAR(2) NOT NULL,
    `name` VARCHAR(20),

    PRIMARY KEY (`id`)
);

CREATE TABLE `customer` (
    `id` CHAR(2) NOT NULL,
    `name` VARCHAR(100),
    `state` VARCHAR(40),
    `annual_consumption` INT,

    PRIMARY KEY (`id`)
);

CREATE TABLE `customer_powersource` (
    `customer_id` CHAR(2) NOT NULL,
    `powersource` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`powersource`),
    FOREIGN KEY (`customer_id`) REFERENCES `customer`(`id`)
);

CREATE TABLE `powerplant_type` (
    `powerplant_id` CHAR(3) NOT NULL,
    `type_id` CHAR(2) NOT NULL,

    FOREIGN KEY (`powerplant_id`) REFERENCES `powerplant`(`id`),
    FOREIGN KEY (`type_id`) REFERENCES `type`(`id`)
);

DROP VIEW IF EXISTS v_customers;
DROP VIEW IF EXISTS v_powerplants;
DROP VIEW IF EXISTS v_rapport;

CREATE VIEW v_customers AS
	SELECT
		c.*,
        cp.powersource
	FROM customer AS c
    INNER JOIN customer_powersource AS cp
	ON c.id = cp.customer_id;

CREATE VIEW v_powerplants AS
	SELECT
		p.*,
		t.name AS type
	FROM powerplant p
    INNER JOIN powerplant_type pt ON p.id = pt.powerplant_id
    INNER JOIN type t ON pt.type_id = t.id
    ORDER BY p.name;

CREATE VIEW v_rapport AS
	SELECT
		CONCAT(c.id, ': ', c.name, ' ', '(', c.state, ')') AS Konsument,
        ROUND(c.annual_consumption/12) AS Månadsbehov,
        GROUP_CONCAT(DISTINCT cp.powersource ORDER BY cp.powersource DESC SEPARATOR ' + ') AS Källa,
        GROUP_CONCAT(CONCAT(pt.name, ' ', '(', ROUND(pt.output*365*pt.utilization_rate/100/12), ')') ORDER BY pt.output SEPARATOR ', ') AS 'Kraftverk med produktion per tidsenhet'
	FROM customer AS c
    LEFT JOIN customer_powersource cp ON c.id = cp.customer_id
    LEFT JOIN powerplant pt ON pt.source = cp.powersource
    GROUP BY c.annual_consumption
    ORDER BY c.name DESC;