<?php

include('../config/config.php');
include('../src/database.php');

$titel = 'Objektbild Nättraby Vägmuseum';

include('../view/header.php');

//Get details from query string
$nameImg = $_SESSION["nameImg"] ?? null;

// Connect to the database
$dsn = getDsn("nvm.sqlite");
$db = connectToDatabase($dsn);

//Create SQL statement
$sql = <<<EOD
SELECT
    name,
    title,
    image1,
    image1Alt,
    image1Text
FROM object
WHERE
    image1 LIKE ?
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$args = [$nameImg];
$stmt->execute($args);

//Get and print result
$res = $stmt->fetch();

//Create SQL statement
$sql1 = <<<EOD
SELECT
    name,
    title,
    image2,
    image2Alt,
    image2Text
FROM object
WHERE
    image2 LIKE ?
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql1);

//Execute the SQL statement
$args = [$nameImg];
$stmt->execute($args);

//Get and print result
$res1 = $stmt->fetch();

include('../view/php/img.php');
include('../view/footer.php');
