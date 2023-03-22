<?php

include('../config/config.php');
require("../src/database.php");

$titel = 'Objekt Nättraby Vägmuseums';

include('../view/header.php');

//Get details from query string
$objectName = $_SESSION['objectName'] ?? null;

// Connect to the database
$dsn = getDsn("nvm.sqlite");
$db = connectToDatabase($dsn);

//Create SQL statement
$sql = <<<EOD
SELECT
    name,
    title,
    data,
    author,
    gps,
    mapImage,
    image1,
    image1Alt,
    image1Text,
    image2,
    image2Alt,
    image2Text
FROM object
WHERE
    name LIKE ?
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$args = [$objectName];
$stmt->execute($args);

//Get and print result
$res = $stmt->fetch();

include("../view/php/object.php");
include("../view/footer.php");
