<?php

include('../config/config.php');
include('../src/database.php');

$titel = 'Objekt Nättraby Vägmuseum';

include('../view/header.php');

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
;
EOD;

//Prepare the SQL statement
$stmt = $db->prepare($sql);

//Execute the SQL statement
$stmt->execute();

//Get and print result
$res = $stmt->fetchAll();

include("../view/php/objects.php");
include("../view/footer.php");
