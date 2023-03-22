<?php

include('../config/config.php');
require("../src/database.php");

$titel = 'Artikel Nättraby Vägmuseums';

include('../view/header.php');

//Get details from query string
$articleName = $_SESSION['articleName'] ?? null;

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
FROM article
WHERE
    name LIKE ?
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$args = [$articleName];
$stmt->execute($args);

//Get and print result
$res = $stmt->fetch();

include("../view/php/artikel.php");
include("../view/footer.php");
