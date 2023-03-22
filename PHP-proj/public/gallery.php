<?php

include('../config/config.php');
require("../src/database.php");

$titel = 'Bildgalleri Nättraby Vägmuseum';

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
    image2,
    image2Alt
FROM object
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res = $stmt->fetchAll();

include('../view/php/gallery.php');
include('../view/footer.php');
