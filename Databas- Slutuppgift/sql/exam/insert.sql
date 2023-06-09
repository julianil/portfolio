DELETE FROM `customer_powersource`;
DELETE FROM `powerplant_type`;
DELETE FROM `type`;
DELETE FROM `powerplant`;
DELETE FROM `customer`;

LOAD DATA LOCAL INFILE 'customer.csv'
INTO TABLE `customer`
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

LOAD DATA LOCAL INFILE 'powerplant.csv'
INTO TABLE `powerplant`
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

LOAD DATA LOCAL INFILE 'type.csv'
INTO TABLE `type`
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

LOAD DATA LOCAL INFILE 'powerplant2type.csv'
INTO TABLE `powerplant_type`
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

LOAD DATA LOCAL INFILE 'customer2powerplant.csv'
INTO TABLE `customer_powersource`
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;
