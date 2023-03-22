<?php

include('../config/config.php');
require("../src/database.php");

$titel = 'Startsida för Nättraby Vägmuseums hemsida';

include('../view/header.php');

// Connect to the database
$dsn = getDsn("nvm.sqlite");
$db = connectToDatabase($dsn);

//Create SQL statement
$sql = <<<EOD
SELECT
    name,
    image1,
    image1Alt,
    image1Text
FROM article
WHERE
    name = 'start'
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res = $stmt->fetch();

//Create SQL statement
$sql1 = <<<EOD
SELECT
    image1,
    image1Alt
FROM article
WHERE
    name = 'om-invigning'
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql1);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res1 = $stmt->fetch();

//Create SQL statement
$sql2 = <<<EOD
SELECT
    image1,
    image1Alt
FROM object
WHERE
    name = 'nattrabyan'
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql2);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res2 = $stmt->fetch();

include('../view/php/home.php');
include('../view/footer.php');
